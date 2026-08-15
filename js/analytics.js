/* ==========================================================================
   RolanNutriPro - analítica privada, seudonimizada y con consentimiento previo.
   Nunca lee ni transmite valores de calculadores, preguntas o escenarios.
   ========================================================================== */
(function () {
  'use strict';

  const CONSENT_VERSION = '2026-08-15';
  const CONSENT_KEY = 'rolanutripro_analytics_consent_v1';
  const VISITOR_KEY = 'rolanutripro_analytics_visitor_v1';
  const SESSION_KEY = 'rolanutripro_analytics_session_v1';
  const ENDPOINT = '/api/rolanutripro-analytics';
  const FLUSH_INTERVAL_MS = 120000;
  const FIRST_FLUSH_MS = 3200;
  const IDLE_AFTER_MS = 30000;
  const MAX_QUEUE = 55;

  const MODULE_NAMES = Object.freeze({
    inicio: 'Inicio / Calculadora',
    minerales: 'Minerales',
    transicion: 'Transición y Vaca Seca',
    cncps: 'CNCPS Avanzado',
    eficiencia: 'Eficiencia y Ración',
    grasas: 'Ácidos Grasos / Tecnigrasas',
    qa: 'Asistente Q&A',
    referencia: 'Referencia'
  });

  const CALCULATORS = Object.freeze({
    'btn-calculate': 'requerimientos_principales',
    'btn-recalc-eb': 'balance_energetico',
    'btn-calc-mineral': 'consulta_mineral',
    'btn-calc-mineral-risk': 'riesgo_mineral',
    'btn-calc-antagonism': 'antagonismos_minerales',
    'btn-calc-dcad': 'dcad',
    'btn-calc-water': 'consumo_agua',
    'btn-eval-inflammation': 'nivel_atencion_inflamatoria',
    'btn-calc-fe': 'eficiencia_alimenticia'
  });

  const SELECTORS = new Set([
    'species-select', 'category-select', 'mineral-type-select', 'grain-select',
    'gestation-toggle', 'btn-tech-view', 'btn-practical-view'
  ]);

  const SIMPLE_INTERACTIONS = Object.freeze({
    'btn-copy-results': 'copiar_resultados',
    'btn-print-results': 'imprimir_resultados',
    'cow-brand-icon': 'mascota_audio'
  });

  const TABLES = new Set([
    'macro-mineral-table', 'micro-mineral-table', 'protein-stage-table',
    'mun-interpretation-table', 'mun-history-table', 'mun-authors-table',
    'fat-source-table', 'calcium-soap-comparison-table', 'preset-table'
  ]);

  let enabled = false;
  let queue = [];
  let visitorId = '';
  let sessionId = '';
  let sessionStartedAt = 0;
  let lastActivityAt = 0;
  let activeSeconds = 0;
  let lastActiveTick = 0;
  let flushTimer = null;
  let activeTimer = null;
  let isFlushing = false;
  let eventsBound = false;
  let lastModuleEvent = '';
  let lastModuleEventAt = 0;
  const reachedScrollDepths = new Set();

  function safeStorage(storage, action, key, value) {
    try {
      if (action === 'get') return storage.getItem(key);
      if (action === 'set') storage.setItem(key, value);
      if (action === 'remove') storage.removeItem(key);
    } catch (_error) {
      return null;
    }
    return null;
  }

  function sanitize(value, maxLength) {
    return String(value == null ? '' : value)
      .replace(/[\r\n\t]+/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .trim()
      .slice(0, maxLength);
  }

  function randomId() {
    if (globalThis.crypto && typeof globalThis.crypto.randomUUID === 'function') {
      return globalThis.crypto.randomUUID();
    }
    const randomPart = function () { return Math.random().toString(36).slice(2, 12); };
    return Date.now().toString(36) + '-' + randomPart() + '-' + randomPart();
  }

  function getConsent() {
    const raw = safeStorage(localStorage, 'get', CONSENT_KEY);
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw);
      return parsed && (parsed.status === 'accepted' || parsed.status === 'declined') ? parsed : null;
    } catch (_error) {
      return null;
    }
  }

  function setConsent(status, reason) {
    const preference = {
      status: status,
      version: CONSENT_VERSION,
      reason: reason || 'user_choice',
      recorded_at: new Date().toISOString()
    };
    safeStorage(localStorage, 'set', CONSENT_KEY, JSON.stringify(preference));
    return preference;
  }

  function activeModuleId() {
    const tab = document.querySelector('.module-tab.active[data-module], .module-tab[aria-selected="true"][data-module]');
    return tab && MODULE_NAMES[tab.dataset.module] ? tab.dataset.module : 'inicio';
  }

  function currentModule() {
    return MODULE_NAMES[activeModuleId()] || MODULE_NAMES.inicio;
  }

  function resolutionRange() {
    const width = Math.max(window.innerWidth || 0, document.documentElement.clientWidth || 0);
    if (width <= 380) return 'Hasta 380 px';
    if (width <= 480) return '381-480 px';
    if (width <= 768) return '481-768 px';
    if (width <= 1024) return '769-1024 px';
    if (width <= 1440) return '1025-1440 px';
    if (width <= 1920) return '1441-1920 px';
    return 'Más de 1920 px';
  }

  function deviceCategory() {
    const ua = navigator.userAgent || '';
    const width = Math.max(window.innerWidth || 0, document.documentElement.clientWidth || 0);
    if (/iPad|Tablet|PlayBook|Silk/i.test(ua) || (/Android/i.test(ua) && !/Mobi/i.test(ua))) return 'Tableta';
    if (/Mobi|Android|iPhone|iPod/i.test(ua) || width <= 600) return 'Teléfono';
    return 'Computador';
  }

  function operatingSystem() {
    const ua = navigator.userAgent || '';
    if (/iPhone|iPad|iPod/i.test(ua)) return 'iOS/iPadOS';
    if (/Android/i.test(ua)) return 'Android';
    if (/Windows/i.test(ua)) return 'Windows';
    if (/Mac OS X|Macintosh/i.test(ua)) return 'macOS';
    if (/Linux/i.test(ua)) return 'Linux';
    return 'Otro';
  }

  function browserName() {
    const ua = navigator.userAgent || '';
    if (/Edg\//i.test(ua)) return 'Edge';
    if (/OPR\//i.test(ua)) return 'Opera';
    if (/CriOS/i.test(ua)) return 'Chrome iOS';
    if (/FxiOS/i.test(ua)) return 'Firefox iOS';
    if (/Chrome\//i.test(ua) && !/Edg\//i.test(ua)) return 'Chrome';
    if (/Firefox\//i.test(ua)) return 'Firefox';
    if (/Safari\//i.test(ua) && !/Chrome\//i.test(ua)) return 'Safari';
    return 'Otro';
  }

  function referrerDomain() {
    if (!document.referrer) return 'Directo';
    try {
      const referrer = new URL(document.referrer);
      return referrer.hostname === location.hostname ? 'Navegación interna' : sanitize(referrer.hostname, 100);
    } catch (_error) {
      return 'No identificado';
    }
  }

  function acquisitionData() {
    const params = new URLSearchParams(location.search);
    return {
      referrer_domain: referrerDomain(),
      utm_source: sanitize(params.get('utm_source'), 60),
      utm_medium: sanitize(params.get('utm_medium'), 60),
      utm_campaign: sanitize(params.get('utm_campaign'), 80),
      utm_term: sanitize(params.get('utm_term'), 80),
      utm_content: sanitize(params.get('utm_content'), 80),
      landing_path: sanitize(location.pathname || '/', 120)
    };
  }

  function deviceData() {
    return {
      category: deviceCategory(),
      operating_system: operatingSystem(),
      browser: browserName(),
      resolution_range: resolutionRange(),
      language: sanitize(navigator.language || 'es', 16)
    };
  }

  function recordEvent(name, details) {
    if (!enabled) return;
    const data = details || {};
    queue.push({
      event_name: sanitize(name, 50),
      event_time: new Date().toISOString(),
      module: sanitize(data.module || currentModule(), 80),
      target: sanitize(data.target, 120)
    });
    if (queue.length > MAX_QUEUE) queue = queue.slice(-MAX_QUEUE);
    if (queue.length >= 20) flush({ forceSummary: true });
  }

  function summaryEvent() {
    updateActiveTime();
    return {
      event_name: 'session_summary',
      event_time: new Date().toISOString(),
      module: currentModule(),
      target: 'session',
      active_seconds: Math.round(activeSeconds),
      duration_seconds: Math.max(0, Math.round((Date.now() - sessionStartedAt) / 1000))
    };
  }

  function buildPayload(events) {
    return {
      schema_version: 1,
      consent: true,
      consent_version: CONSENT_VERSION,
      visitor_id: visitorId,
      session_id: sessionId,
      session_started_at: new Date(sessionStartedAt).toISOString(),
      sent_at: new Date().toISOString(),
      device: deviceData(),
      acquisition: acquisitionData(),
      events: events
    };
  }

  async function flush(options) {
    const settings = options || {};
    if (!enabled || isFlushing || (queue.length === 0 && !settings.forceSummary)) return;
    isFlushing = true;
    const events = queue.splice(0, queue.length);
    events.push(summaryEvent());
    const body = JSON.stringify(buildPayload(events));
    try {
      if (settings.beacon && navigator.sendBeacon) {
        const accepted = navigator.sendBeacon(ENDPOINT, new Blob([body], { type: 'application/json' }));
        if (!accepted) throw new Error('beacon_rejected');
      } else {
        const response = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: body,
          keepalive: true,
          credentials: 'omit',
          cache: 'no-store'
        });
        if (!response.ok) throw new Error('analytics_' + response.status);
      }
    } catch (_error) {
      const retryable = events.filter(function (event) { return event.event_name !== 'session_summary'; });
      queue = retryable.concat(queue).slice(-MAX_QUEUE);
    } finally {
      isFlushing = false;
    }
  }

  function updateActiveTime() {
    if (!lastActiveTick) return;
    const now = performance.now();
    const elapsed = Math.max(0, Math.min(5, (now - lastActiveTick) / 1000));
    lastActiveTick = now;
    if (!document.hidden && Date.now() - lastActivityAt <= IDLE_AFTER_MS) activeSeconds += elapsed;
  }

  function markActivity() { lastActivityAt = Date.now(); }

  function recordModuleView(moduleId, target) {
    if (!enabled || !MODULE_NAMES[moduleId]) return;
    const now = Date.now();
    if (lastModuleEvent === moduleId && now - lastModuleEventAt < 500) return;
    lastModuleEvent = moduleId;
    lastModuleEventAt = now;
    recordEvent('module_view', { module: MODULE_NAMES[moduleId], target: target || 'tab' });
  }

  function trackScrollDepth() {
    if (!enabled) return;
    const maximum = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const depth = Math.min(100, Math.round((window.scrollY / maximum) * 100));
    [25, 50, 75, 90].forEach(function (milestone) {
      if (depth >= milestone && !reachedScrollDepths.has(milestone)) {
        reachedScrollDepths.add(milestone);
        recordEvent('scroll_depth', { target: milestone + '%' });
      }
    });
  }

  function fileLabel(anchor) {
    try {
      const url = new URL(anchor.href, location.href);
      return sanitize(decodeURIComponent(url.pathname.split('/').pop() || 'archivo'), 120);
    } catch (_error) {
      return 'archivo';
    }
  }

  function isDownload(anchor) {
    const href = anchor ? (anchor.getAttribute('href') || '') : '';
    return Boolean(anchor && (anchor.hasAttribute('download') || /\.(pdf|csv|json|png|jpe?g|docx?|xlsx?)(?:$|[?#])/i.test(href)));
  }

  function trackClick(event) {
    if (!enabled || !event.target || typeof event.target.closest !== 'function') return;
    markActivity();

    const tab = event.target.closest('.module-tab[data-module]');
    if (tab) {
      recordModuleView(tab.dataset.module, 'tab');
      return;
    }

    const anchor = event.target.closest('a[href]');
    if (anchor) {
      if (isDownload(anchor)) {
        recordEvent('download', { target: fileLabel(anchor) });
        return;
      }
      try {
        const url = new URL(anchor.href, location.href);
        if (url.origin !== location.origin) recordEvent('outbound_click', { target: sanitize(url.hostname, 100) });
      } catch (_error) {
        // Los enlaces inválidos no se registran.
      }
      return;
    }

    const scenarioButton = event.target.closest('.scenario-btn-load, .scenario-btn-delete, #btn-save-scenario');
    if (scenarioButton) {
      const action = scenarioButton.id === 'btn-save-scenario' ? 'guardar' : (scenarioButton.classList.contains('scenario-btn-load') ? 'cargar' : 'eliminar');
      recordEvent('scenario_use', { module: MODULE_NAMES.inicio, target: action });
      return;
    }

    const chip = event.target.closest('.chip-btn');
    if (chip) {
      recordEvent('qa_use', { module: MODULE_NAMES.qa, target: 'sugerencia_rapida' });
      window.setTimeout(function () { recordEvent('results_view', { module: MODULE_NAMES.qa, target: 'asistente_qa' }); }, 60);
      return;
    }

    const table = event.target.closest('table[id]');
    if (table && TABLES.has(table.id)) {
      recordEvent('table_use', { target: table.id });
      return;
    }

    const button = event.target.closest('button[id], [role="button"][id]');
    if (!button) return;
    if (SELECTORS.has(button.id)) {
      recordEvent('selection', { target: button.id });
      return;
    }
    if (CALCULATORS[button.id]) {
      const calculator = CALCULATORS[button.id];
      recordEvent('calculator_use', { target: calculator });
      window.setTimeout(function () { recordEvent('results_view', { target: calculator }); }, 60);
      return;
    }
    if (button.id === 'btn-submit-qa') {
      recordEvent('qa_use', { module: MODULE_NAMES.qa, target: 'consulta_escrita' });
      window.setTimeout(function () { recordEvent('results_view', { module: MODULE_NAMES.qa, target: 'asistente_qa' }); }, 60);
      return;
    }
    if (button.id === 'holstein-mascot-wrapper') {
      recordEvent('resource_use', { target: 'glosario_abrir' });
      return;
    }
    if (SIMPLE_INTERACTIONS[button.id]) {
      const target = SIMPLE_INTERACTIONS[button.id];
      if (button.id === 'btn-copy-results' || button.id === 'btn-print-results') {
        recordEvent('download', { target: target });
      } else {
        recordEvent('resource_use', { target: target });
      }
    }
  }

  function trackChange(event) {
    if (!enabled || !event.target) return;
    markActivity();
    if (SELECTORS.has(event.target.id)) recordEvent('selection', { target: event.target.id });
  }

  function trackKeydown(event) {
    if (!enabled) return;
    markActivity();
    if (event.key === 'Enter' && event.target && event.target.id === 'qa-input-text') {
      recordEvent('qa_use', { module: MODULE_NAMES.qa, target: 'consulta_escrita' });
      window.setTimeout(function () { recordEvent('results_view', { module: MODULE_NAMES.qa, target: 'asistente_qa' }); }, 60);
    }
    if (event.target && event.target.matches('.module-tab[data-module]') && /^(ArrowLeft|ArrowRight|Home|End)$/.test(event.key)) {
      window.setTimeout(function () {
        const active = document.querySelector('.module-tab.active[data-module]');
        if (active) recordModuleView(active.dataset.module, 'teclado');
      }, 0);
    }
  }

  function bindEvents() {
    if (eventsBound) return;
    eventsBound = true;
    document.addEventListener('click', trackClick, true);
    document.addEventListener('change', trackChange, true);
    document.addEventListener('keydown', trackKeydown, true);
    ['pointerdown', 'touchstart'].forEach(function (name) {
      document.addEventListener(name, markActivity, { passive: true });
    });
    window.addEventListener('scroll', function () { markActivity(); trackScrollDepth(); }, { passive: true });
    document.addEventListener('visibilitychange', function () {
      updateActiveTime();
      if (document.hidden) flush({ beacon: true, forceSummary: true });
    });
    window.addEventListener('pagehide', function () { flush({ beacon: true, forceSummary: true }); });
  }

  function enableTracking(justGranted) {
    if (enabled || navigator.globalPrivacyControl === true) return;
    enabled = true;
    visitorId = safeStorage(localStorage, 'get', VISITOR_KEY) || '';
    if (!/^[a-zA-Z0-9-]{12,80}$/.test(visitorId)) {
      visitorId = randomId();
      safeStorage(localStorage, 'set', VISITOR_KEY, visitorId);
    }
    sessionId = randomId();
    safeStorage(sessionStorage, 'set', SESSION_KEY, sessionId);
    sessionStartedAt = Date.now();
    lastActivityAt = Date.now();
    lastActiveTick = performance.now();
    activeSeconds = 0;
    reachedScrollDepths.clear();
    bindEvents();
    activeTimer = window.setInterval(updateActiveTime, 1000);
    flushTimer = window.setInterval(function () { flush({ forceSummary: true }); }, FLUSH_INTERVAL_MS);
    if (justGranted) recordEvent('consent_granted', { target: CONSENT_VERSION });
    recordEvent('page_view', { target: sanitize(location.pathname || '/', 120) });
    recordModuleView(activeModuleId(), 'inicial');
    window.setTimeout(function () { flush({ forceSummary: true }); }, FIRST_FLUSH_MS);
  }

  function disableTracking() {
    enabled = false;
    queue = [];
    if (flushTimer) window.clearInterval(flushTimer);
    if (activeTimer) window.clearInterval(activeTimer);
    flushTimer = null;
    activeTimer = null;
    visitorId = '';
    sessionId = '';
    safeStorage(localStorage, 'remove', VISITOR_KEY);
    safeStorage(sessionStorage, 'remove', SESSION_KEY);
  }

  function hideConsent() {
    const panel = document.getElementById('analyticsConsent');
    if (panel) panel.hidden = true;
    document.body.classList.remove('analytics-consent-open');
  }

  function showConsent() {
    const panel = document.getElementById('analyticsConsent');
    const accept = document.getElementById('btnAnalyticsAccept');
    const decline = document.getElementById('btnAnalyticsDecline');
    const close = document.getElementById('btnAnalyticsClose');
    const gpcNotice = document.getElementById('analyticsGpcNotice');
    if (!panel || !accept || !decline) return;
    const consent = getConsent();
    const hasPreference = Boolean(consent);
    const gpc = navigator.globalPrivacyControl === true;
    accept.disabled = gpc;
    accept.setAttribute('aria-disabled', gpc ? 'true' : 'false');
    decline.textContent = consent && consent.status === 'accepted' ? 'Retirar consentimiento' : 'Solo necesarias';
    if (gpcNotice) gpcNotice.hidden = !gpc;
    if (close) close.hidden = !hasPreference;
    panel.hidden = false;
    document.body.classList.add('analytics-consent-open');
    window.setTimeout(function () { (gpc ? decline : accept).focus({ preventScroll: true }); }, 0);
  }

  function bindConsentControls() {
    const accept = document.getElementById('btnAnalyticsAccept');
    const decline = document.getElementById('btnAnalyticsDecline');
    const settings = document.getElementById('btnPrivacySettings');
    const close = document.getElementById('btnAnalyticsClose');
    if (accept) accept.addEventListener('click', function () {
      if (navigator.globalPrivacyControl === true) return;
      setConsent('accepted', 'explicit_accept');
      hideConsent();
      enableTracking(true);
    });
    if (decline) decline.addEventListener('click', function () {
      setConsent('declined', navigator.globalPrivacyControl === true ? 'global_privacy_control' : 'explicit_decline');
      disableTracking();
      hideConsent();
    });
    if (settings) settings.addEventListener('click', showConsent);
    if (close) close.addEventListener('click', hideConsent);
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && getConsent()) hideConsent();
    });
  }

  function init() {
    bindConsentControls();
    const consent = getConsent();
    if (navigator.globalPrivacyControl === true) {
      const wasAccepted = consent && consent.status === 'accepted';
      if (wasAccepted) setConsent('declined', 'global_privacy_control');
      disableTracking();
      if (!consent || wasAccepted) showConsent();
      return;
    }
    if (consent && consent.status === 'accepted') enableTracking(false);
    else if (!consent) showConsent();
  }

  window.RolanNutriProAnalytics = Object.freeze({ flush: flush });
  document.addEventListener('DOMContentLoaded', init, { once: true });
})();
