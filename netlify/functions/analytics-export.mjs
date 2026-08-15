import { createHash, timingSafeEqual } from 'node:crypto';
import { getStore } from '@netlify/blobs';

const STORE_NAME = 'rolanutripro-analytics-v1';
const MAX_RECORDS = 10000;
const MAX_RANGE_DAYS = 400;
const ALLOWED_ORIGINS = new Set([
  'https://rolanutripro.netlify.app',
  'http://localhost:4173',
  'http://127.0.0.1:4173'
]);
// Solo se publica el hash SHA-256 irreversible; la clave original es local y está fuera de Git.
const EXPORT_TOKEN_SHA256 = '97587a6503311086e45910792b8d0238d86c3cec4e0a228c5c5ed2bb7bf49431';

function corsHeaders(origin, contentType) {
  const headers = {
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Analytics-Key, Content-Type',
    'Content-Type': contentType,
    'Cache-Control': 'no-store',
    'Vary': 'Origin'
  };
  if (ALLOWED_ORIGINS.has(origin)) headers['Access-Control-Allow-Origin'] = origin;
  return headers;
}

function json(status, body, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: corsHeaders(origin, 'application/json; charset=utf-8')
  });
}

function authorized(request) {
  const received = request.headers.get('x-analytics-key') || '';
  if (!/^[a-f0-9]{64}$/i.test(received)) return false;
  const receivedHash = createHash('sha256').update(received).digest('hex');
  const expected = Buffer.from(EXPORT_TOKEN_SHA256, 'utf8');
  const actual = Buffer.from(receivedHash, 'utf8');
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}

function parseDate(value, fallback) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return fallback;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return Number.isFinite(parsed.getTime()) ? parsed : fallback;
}

async function loadRecords(store, from, to) {
  const keys = [];
  for await (const page of store.list({ prefix: 'events/', paginate: true })) {
    for (const blob of page.blobs) {
      const datePart = blob.key.split('/')[1];
      const day = new Date(`${datePart}T00:00:00.000Z`);
      if (Number.isFinite(day.getTime()) && day >= from && day <= to) keys.push(blob.key);
    }
  }
  keys.sort().reverse();
  const selected = keys.slice(0, MAX_RECORDS);
  const records = [];
  for (let index = 0; index < selected.length; index += 25) {
    const batch = selected.slice(index, index + 25);
    const values = await Promise.all(batch.map((key) => store.get(key, { type: 'json', consistency: 'strong' })));
    values.filter(Boolean).forEach((value) => records.push(value));
  }
  return { records, truncated: keys.length > MAX_RECORDS, available: keys.length };
}

function csvCell(value) {
  const text = String(value == null ? '' : value);
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function toCsv(records) {
  const headers = [
    'server_received_at', 'visitor_id', 'session_id', 'session_started_at',
    'event_time', 'event_name', 'module', 'target', 'active_seconds',
    'duration_seconds', 'device_category', 'operating_system', 'browser',
    'resolution_range', 'language', 'country_code', 'country', 'subdivision',
    'city', 'timezone', 'referrer_domain', 'utm_source', 'utm_medium',
    'utm_campaign', 'utm_term', 'utm_content', 'landing_path', 'consent_version'
  ];
  const rows = [headers.join(',')];
  records.forEach((record) => {
    (record.events || []).forEach((event) => {
      const values = [
        record.server_received_at, record.visitor_id, record.session_id, record.session_started_at,
        event.event_time, event.event_name, event.module, event.target, event.active_seconds,
        event.duration_seconds, record.device?.category, record.device?.operating_system,
        record.device?.browser, record.device?.resolution_range, record.device?.language,
        record.geo?.country_code, record.geo?.country, record.geo?.subdivision, record.geo?.city,
        record.geo?.timezone, record.acquisition?.referrer_domain, record.acquisition?.utm_source,
        record.acquisition?.utm_medium, record.acquisition?.utm_campaign, record.acquisition?.utm_term,
        record.acquisition?.utm_content, record.acquisition?.landing_path, record.consent_version
      ];
      rows.push(values.map(csvCell).join(','));
    });
  });
  return `\uFEFF${rows.join('\r\n')}`;
}

export default async function handler(request) {
  const origin = request.headers.get('origin') || '';
  if (request.method === 'OPTIONS') {
    return ALLOWED_ORIGINS.has(origin)
      ? new Response(null, { status: 204, headers: corsHeaders(origin, 'text/plain; charset=utf-8') })
      : json(403, { error: 'Origen no permitido' }, origin);
  }
  if (request.method !== 'GET') return json(405, { error: 'Método no permitido' }, origin);
  if (!authorized(request)) return json(401, { error: 'Clave de acceso inválida' }, origin);

  const url = new URL(request.url);
  const now = new Date();
  const defaultFrom = new Date(now.getTime() - 89 * 86400000);
  const from = parseDate(url.searchParams.get('from'), defaultFrom);
  const to = parseDate(url.searchParams.get('to'), now);
  to.setUTCHours(23, 59, 59, 999);
  if (from > to || to.getTime() - from.getTime() > MAX_RANGE_DAYS * 86400000) {
    return json(400, { error: 'Rango de fechas inválido o superior a 400 días' }, origin);
  }

  const store = getStore({ name: STORE_NAME, consistency: 'strong' });
  const result = await loadRecords(store, from, to);
  const format = (url.searchParams.get('format') || 'json').toLowerCase();
  if (format === 'csv') {
    return new Response(toCsv(result.records), {
      status: 200,
      headers: {
        ...corsHeaders(origin, 'text/csv; charset=utf-8'),
        'Content-Disposition': `attachment; filename="rolanutripro-analytics-${now.toISOString().slice(0, 10)}.csv"`,
        'X-Analytics-Truncated': String(result.truncated)
      }
    });
  }
  if (format !== 'json') return json(400, { error: 'Formato no admitido' }, origin);

  return json(200, {
    generated_at: now.toISOString(),
    range: { from: from.toISOString(), to: to.toISOString() },
    record_count: result.records.length,
    available_record_count: result.available,
    truncated: result.truncated,
    records: result.records
  }, origin);
}

export const config = {
  path: '/api/rolanutripro-analytics-export',
  rateLimit: {
    action: 'rate_limit',
    windowLimit: 12,
    windowSize: 60,
    aggregateBy: ['ip', 'domain']
  }
};
