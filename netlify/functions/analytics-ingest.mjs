import { getStore } from '@netlify/blobs';

const STORE_NAME = 'rolanutripro-analytics-v1';
const PUBLIC_ORIGIN = 'https://rolanutripro.netlify.app';
const ALLOWED_ORIGINS = new Set([
  PUBLIC_ORIGIN,
  'http://localhost:8888',
  'http://127.0.0.1:8888',
  'http://localhost:4173',
  'http://127.0.0.1:4173'
]);
const MAX_BODY_BYTES = 64 * 1024;
const MAX_EVENTS = 60;
const MAX_CLOCK_SKEW_MS = 24 * 60 * 60 * 1000;

const MODULES = new Set([
  'Inicio / Calculadora',
  'Minerales',
  'Transición y Vaca Seca',
  'CNCPS Avanzado',
  'Eficiencia y Ración',
  'Ácidos Grasos / Tecnigrasas',
  'Asistente Q&A',
  'Referencia'
]);

const EVENT_NAMES = new Set([
  'consent_granted', 'page_view', 'module_view', 'calculator_use', 'results_view',
  'selection', 'table_use', 'download', 'outbound_click', 'qa_use',
  'scenario_use', 'resource_use', 'scroll_depth', 'session_summary'
]);

const CALCULATORS = new Set([
  'requerimientos_principales', 'balance_energetico', 'consulta_mineral',
  'riesgo_mineral', 'antagonismos_minerales', 'dcad', 'consumo_agua',
  'nivel_atencion_inflamatoria', 'eficiencia_alimenticia', 'asistente_qa'
]);

const SELECTIONS = new Set([
  'species-select', 'category-select', 'mineral-type-select', 'grain-select',
  'gestation-toggle', 'btn-tech-view', 'btn-practical-view'
]);

const TABLES = new Set([
  'macro-mineral-table', 'micro-mineral-table', 'protein-stage-table',
  'mun-interpretation-table', 'mun-history-table', 'mun-authors-table',
  'fat-source-table', 'calcium-soap-comparison-table', 'preset-table'
]);

const RESOURCE_TARGETS = new Set(['glosario_abrir', 'mascota_audio']);
const DOWNLOAD_TARGETS = new Set(['copiar_resultados', 'imprimir_resultados']);

function cleanText(value, maxLength = 120) {
  if (typeof value !== 'string') return '';
  return value.replace(/[\u0000-\u001f\u007f]+/g, ' ').replace(/\s{2,}/g, ' ').trim().slice(0, maxLength);
}

function boundedNumber(value, min, max) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.min(max, Math.max(min, parsed)) : 0;
}

function validId(value) {
  return typeof value === 'string' && /^[a-zA-Z0-9-]{12,80}$/.test(value);
}

function normalizedTime(value, fallback) {
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) && Math.abs(parsed - Date.now()) <= MAX_CLOCK_SKEW_MS
    ? new Date(parsed).toISOString()
    : fallback;
}

function validTarget(name, target) {
  if (name === 'consent_granted') return /^20\d{2}-\d{2}-\d{2}$/.test(target);
  if (name === 'page_view') return /^\/[a-zA-Z0-9._/-]{0,119}$/.test(target);
  if (name === 'module_view') return new Set(['inicial', 'tab', 'teclado']).has(target);
  if (name === 'calculator_use' || name === 'results_view') return CALCULATORS.has(target);
  if (name === 'selection') return SELECTIONS.has(target);
  if (name === 'table_use') return TABLES.has(target);
  if (name === 'scroll_depth') return new Set(['25%', '50%', '75%', '90%']).has(target);
  if (name === 'qa_use') return new Set(['consulta_escrita', 'sugerencia_rapida']).has(target);
  if (name === 'scenario_use') return new Set(['guardar', 'cargar', 'eliminar']).has(target);
  if (name === 'resource_use') return RESOURCE_TARGETS.has(target);
  if (name === 'session_summary') return target === 'session';
  if (name === 'outbound_click') return /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,24}$/i.test(target);
  if (name === 'download') {
    return DOWNLOAD_TARGETS.has(target) || /^[a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ()._ -]{1,120}$/.test(target);
  }
  return false;
}

function normalizeEvent(event, receivedAt) {
  if (!event || typeof event !== 'object' || Array.isArray(event)) return null;
  const name = cleanText(event.event_name, 50);
  const module = cleanText(event.module, 80);
  const target = cleanText(event.target, 120);
  if (!EVENT_NAMES.has(name) || !MODULES.has(module) || !validTarget(name, target)) return null;
  const normalized = {
    event_name: name,
    event_time: normalizedTime(event.event_time, receivedAt),
    module,
    target
  };
  if (name === 'session_summary') {
    normalized.active_seconds = boundedNumber(event.active_seconds, 0, 86400);
    normalized.duration_seconds = boundedNumber(event.duration_seconds, 0, 86400);
  }
  return normalized;
}

function corsHeaders(origin) {
  const headers = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Vary': 'Origin'
  };
  if (ALLOWED_ORIGINS.has(origin)) headers['Access-Control-Allow-Origin'] = origin;
  return headers;
}

function json(status, body, origin) {
  return new Response(JSON.stringify(body), { status, headers: corsHeaders(origin) });
}

export default async function handler(request, context) {
  const origin = request.headers.get('origin') || '';
  if (request.method === 'OPTIONS') {
    return ALLOWED_ORIGINS.has(origin)
      ? new Response(null, { status: 204, headers: corsHeaders(origin) })
      : json(403, { error: 'Origen no permitido' }, origin);
  }
  if (request.method !== 'POST') return json(405, { error: 'Método no permitido' }, origin);
  if (!ALLOWED_ORIGINS.has(origin)) return json(403, { error: 'Origen no permitido' }, origin);

  const userAgent = request.headers.get('user-agent') || '';
  if (/bot|crawler|spider|headless|lighthouse|pagespeed|curl|wget|python-requests|httpclient|phantomjs|selenium/i.test(userAgent)) {
    return json(202, { stored: false, reason: 'automated_client' }, origin);
  }

  const raw = await request.text();
  if (!raw || Buffer.byteLength(raw, 'utf8') > MAX_BODY_BYTES) {
    return json(413, { error: 'Carga inválida o demasiado grande' }, origin);
  }

  let body;
  try {
    body = JSON.parse(raw);
  } catch (_error) {
    return json(400, { error: 'JSON inválido' }, origin);
  }

  if (!body || typeof body !== 'object' || body.consent !== true || body.schema_version !== 1) {
    return json(400, { error: 'Consentimiento o esquema inválido' }, origin);
  }
  if (!validId(body.visitor_id) || !validId(body.session_id)) {
    return json(400, { error: 'Identificadores inválidos' }, origin);
  }
  if (!Array.isArray(body.events) || body.events.length < 1 || body.events.length > MAX_EVENTS) {
    return json(400, { error: 'Cantidad de eventos inválida' }, origin);
  }

  const receivedAt = new Date().toISOString();
  const events = body.events.map((event) => normalizeEvent(event, receivedAt));
  if (events.some((event) => event === null)) return json(400, { error: 'Uno o más eventos no son válidos' }, origin);

  const geo = context.geo || {};
  const record = {
    schema_version: 1,
    server_received_at: receivedAt,
    consent_version: cleanText(body.consent_version, 30),
    visitor_id: body.visitor_id,
    session_id: body.session_id,
    session_started_at: normalizedTime(body.session_started_at, receivedAt),
    sent_at: normalizedTime(body.sent_at, receivedAt),
    device: {
      category: cleanText(body.device?.category, 30),
      operating_system: cleanText(body.device?.operating_system, 30),
      browser: cleanText(body.device?.browser, 30),
      resolution_range: cleanText(body.device?.resolution_range, 30),
      language: cleanText(body.device?.language, 16)
    },
    acquisition: {
      referrer_domain: cleanText(body.acquisition?.referrer_domain, 100),
      utm_source: cleanText(body.acquisition?.utm_source, 60),
      utm_medium: cleanText(body.acquisition?.utm_medium, 60),
      utm_campaign: cleanText(body.acquisition?.utm_campaign, 80),
      utm_term: cleanText(body.acquisition?.utm_term, 80),
      utm_content: cleanText(body.acquisition?.utm_content, 80),
      landing_path: cleanText(body.acquisition?.landing_path, 120)
    },
    geo: {
      country_code: cleanText(geo.country?.code, 8),
      country: cleanText(geo.country?.name, 80),
      subdivision_code: cleanText(geo.subdivision?.code, 12),
      subdivision: cleanText(geo.subdivision?.name, 80),
      city: cleanText(geo.city, 80),
      timezone: cleanText(geo.timezone, 50)
    },
    events
  };

  const day = receivedAt.slice(0, 10);
  const store = getStore({ name: STORE_NAME, consistency: 'strong' });
  const key = `events/${day}/${record.session_id}/${Date.now()}-${crypto.randomUUID()}.json`;
  await store.setJSON(key, record, {
    onlyIfNew: true,
    metadata: { day, expires_at: new Date(Date.now() + 400 * 86400000).toISOString() }
  });

  return json(202, { stored: true, events: events.length }, origin);
}

export const config = {
  path: '/api/rolanutripro-analytics',
  rateLimit: {
    action: 'rate_limit',
    windowLimit: 30,
    windowSize: 60,
    aggregateBy: ['ip', 'domain']
  }
};
