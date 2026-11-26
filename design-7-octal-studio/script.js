// Mobile menu toggle
const menuBtn = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('primary-nav');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });
}

// Interactive Hero Software OS Switcher
const heroModes = {
  commerce: {
    title: 'Commerce Engine',
    kpiLabel: 'Mobile Conversion',
    kpiChip: 'Live Sync',
    kpiVal: '+28% Lift',
    kpiSub: 'Custom Shopify & React storefronts tuned for sub-second speed.',
    modules: [
      { icon: '⚡', tone: 'violet', title: '<1.0s Load', sub: '95+ PageSpeed' },
      { icon: '₹', tone: 'amber', title: 'Razorpay + Stripe', sub: 'Global checkout' }
    ],
    ideFile: 'commerce-engine.ts',
    ideLabel: 'Checkout Lift',
    ideVal: '+28.4%',
    ideBadge: '<0.8s Load',
    ideCode: `<span class="c-k">export const</span> <span class="c-fn">deployStore</span> = <span class="c-k">async</span> () =&gt; {\n  <span class="c-k">await</span> sync(<span class="c-s">'Razorpay'</span>, <span class="c-s">'Shiprocket'</span>);\n  <span class="c-k">return</span> { speed: <span class="c-n">98</span>, ipOwner: <span class="c-s">'100%'</span> };\n};`
  },
  erp: {
    title: 'ERP & CRM Core',
    kpiLabel: 'Workflow Speed',
    kpiChip: 'Zero Per-Seat',
    kpiVal: '35+ Staff Live',
    kpiSub: 'Unified sales, warehouse stock, GST invoicing, and approval routing.',
    modules: [
      { icon: '⇄', tone: 'violet', title: 'Auto Invoicing', sub: 'GST & ledger sync' },
      { icon: '🔒', tone: 'amber', title: '100% Owned', sub: 'No SaaS lock-in' }
    ],
    ideFile: 'erp-workflow.ts',
    ideLabel: 'Sync Latency',
    ideVal: '14ms',
    ideBadge: '0 Seat Fees',
    ideCode: `<span class="c-k">export const</span> <span class="c-fn">approveOrder</span> = <span class="c-k">async</span> (id) =&gt; {\n  <span class="c-k">await</span> erp.invoice(id, { gst: <span class="c-k">true</span> });\n  <span class="c-k">return</span> { status: <span class="c-s">'dispatched'</span> };\n};`
  },
  seo: {
    title: 'SEO & Growth OS',
    kpiLabel: 'Organic Demand',
    kpiChip: 'GA4 Verified',
    kpiVal: '2.1× Leads',
    kpiSub: 'Clean crawl architecture, schema markup, and conversion landing pages.',
    modules: [
      { icon: '↗', tone: 'violet', title: 'Crawl & Schema', sub: 'Google Shopping' },
      { icon: '◎', tone: 'amber', title: 'GA4 Funnels', sub: 'Full attribution' }
    ],
    ideFile: 'technical-seo.ts',
    ideLabel: 'Organic Growth',
    ideVal: '+118%',
    ideBadge: '98 CWV',
    ideCode: `<span class="c-k">export const</span> <span class="c-fn">auditCrawl</span> = () =&gt; ({\n  vitals: <span class="c-s">'98/100'</span>, schema: <span class="c-s">'Product'</span>,\n  attribution: <span class="c-s">'GA4_SERVER'</span>\n});`
  }
};

const tabs = document.querySelectorAll('.wl-tab');
const mockTitle = document.getElementById('mock-title');
const mockKpiLabel = document.getElementById('mock-kpi-label');
const mockKpiChip = document.getElementById('mock-kpi-chip');
const mockKpiVal = document.getElementById('mock-kpi-val');
const mockKpiSub = document.getElementById('mock-kpi-sub');
const mockModules = document.getElementById('mock-modules');
const ideFilename = document.getElementById('ide-filename');
const ideMetricLabel = document.getElementById('ide-metric-label');
const ideMetricVal = document.getElementById('ide-metric-val');
const ideMetricBadge = document.getElementById('ide-metric-badge');
const ideCode = document.getElementById('ide-code');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const mode = heroModes[tab.dataset.mode];
    if (!mode) return;

    tabs.forEach((t) => {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');

    mockTitle.textContent = mode.title;
    mockKpiLabel.textContent = mode.kpiLabel;
    mockKpiChip.textContent = mode.kpiChip;
    mockKpiVal.textContent = mode.kpiVal;
    mockKpiSub.textContent = mode.kpiSub;

    mockModules.innerHTML = mode.modules
      .map(
        (m) => `
        <div class="wl-mod">
          <span class="mod-ic ${m.tone}">${m.icon}</span>
          <div>
            <strong>${m.title}</strong>
            <small>${m.sub}</small>
          </div>
        </div>`
      )
      .join('');

    ideFilename.textContent = mode.ideFile;
    ideMetricLabel.textContent = mode.ideLabel;
    ideMetricVal.textContent = mode.ideVal;
    ideMetricBadge.textContent = mode.ideBadge;
    ideCode.innerHTML = `<code>${mode.ideCode}</code>`;
  });
});

// Interactive 4-Phase Sprint Switcher
const sprints = [
  {
    phase: 'PHASE 01 · STRATEGY',
    output: '48hr Roadmap',
    title: 'Discover & Strategize',
    desc: 'We dissect your business model, competitors, and conversion bottlenecks to lock in a high-ROI product roadmap.'
  },
  {
    phase: 'PHASE 02 · BUILD',
    output: 'Production Code',
    title: 'Design & Engineer',
    desc: 'Bold, conversion-first UI paired with clean full-stack architecture — shipped in weekly staging builds you can test live.'
  },
  {
    phase: 'PHASE 03 · LAUNCH',
    output: '90+ PageSpeed',
    title: 'Test & Launch',
    desc: 'Rigorous QA across devices, speed tuning for 90+ PageSpeed, technical SEO setup, and zero-downtime deployment.'
  },
  {
    phase: 'PHASE 04 · GROWTH',
    output: '30-Day Support',
    title: 'Support & Scale',
    desc: 'Post-launch is day one. We back you with 30 days of free support, CRO improvements, and search or ad growth sprints.'
  }
];

const sprintButtons = document.querySelectorAll('.sprint-item');
const sprintDots = document.querySelectorAll('.sf-progress-dots span');
const svPhase = document.getElementById('sprint-visual-phase');
const svOutput = document.getElementById('sprint-visual-output');
const svTitle = document.getElementById('sprint-visual-title');
const svDesc = document.getElementById('sprint-visual-desc');

sprintButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const idx = Number(btn.dataset.step);
    const data = sprints[idx];
    if (!data) return;

    sprintButtons.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    sprintDots.forEach((d, i) => {
      d.classList.toggle('is-on', i <= idx);
    });

    svPhase.textContent = data.phase;
    svOutput.textContent = data.output;
    svTitle.textContent = data.title;
    svDesc.textContent = data.desc;
  });
});

// Newsletter form feedback
const subscribeForm = document.getElementById('subscribe-form');
const subscribeMsg = document.getElementById('subscribe-msg');

if (subscribeForm && subscribeMsg) {
  subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('newsletter-email');
    if (emailInput && emailInput.value.trim()) {
      subscribeMsg.textContent = 'Thanks! You are subscribed to Octalbees updates.';
      emailInput.value = '';
    }
  });
}
