// Mobile Navigation
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    mainNav.classList.toggle('is-open');
  });
}

// Interactive Hero Build Ledger Scope Estimator
const modSpecs = {
  ecommerce: { stack: 'Shopify / React', weeks: 4 },
  erp: { stack: 'Node.js / Laravel · SQL', weeks: 6 },
  seo: { stack: 'Technical SEO · GA4', weeks: 2 },
  saas: { stack: 'TypeScript · APIs', weeks: 6 }
};

const lpButtons = document.querySelectorAll('.lp-opt');
const lpStack = document.getElementById('lp-stack');
const lpTime = document.getElementById('lp-time');

function updateLedgerEstimate() {
  const active = Array.from(lpButtons)
    .filter((b) => b.classList.contains('is-on'))
    .map((b) => b.dataset.mod);

  if (active.length === 0) {
    lpStack.textContent = 'Select a module above';
    lpTime.textContent = '48hr Scoping';
    return;
  }

  const stacks = active.map((k) => modSpecs[k].stack);
  const totalWeeks = active.reduce((sum, k) => sum + modSpecs[k].weeks, 0);
  const minW = Math.max(2, totalWeeks - 1);
  const maxW = totalWeeks + 1;

  lpStack.textContent = stacks.slice(0, 2).join(' + ') + (stacks.length > 2 ? ` +${stacks.length - 2}` : '');
  lpTime.textContent = `${minW} – ${maxW} Weeks`;
}

lpButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const isOn = btn.classList.toggle('is-on');
    const box = btn.querySelector('.opt-box');
    if (box) box.textContent = isOn ? '✓' : '+';
    updateLedgerEstimate();
  });
});

// Master-Detail Capabilities Specification Sheet
const specs = {
  ecommerce: {
    code: 'SPEC 01 / 06',
    metric: '+28% Checkout Lift',
    title: 'E-Commerce Development',
    desc: 'High-converting online stores, multi-vendor marketplaces, and custom headless commerce platforms engineered to turn mobile traffic into revenue.',
    items: [
      '<strong>Custom Storefronts:</strong> Bespoke, conversion-first stores tailored to your brand and catalog.',
      '<strong>Shopify &amp; Headless:</strong> Custom themes, React storefronts, and sub-second speed optimization.',
      '<strong>Payments &amp; Logistics:</strong> End-to-end Razorpay, Stripe, Shiprocket, GST invoicing, and ERP sync.'
    ],
    tags: ['Shopify', 'React', 'Node.js', 'Razorpay / Stripe'],
    link: 'https://www.octalbees.com/services/ecommerce',
    cta: 'Explore E-Commerce →'
  },
  erp: {
    code: 'SPEC 02 / 06',
    metric: 'Zero Per-Seat Fees',
    title: 'ERP & CRM Solutions',
    desc: 'Replace disconnected spreadsheets and pricey per-user SaaS tools with one tailored operations core built around your exact workflows.',
    items: [
      '<strong>Operations &amp; Inventory:</strong> Live warehouse stock, purchase orders, and automated GST invoicing.',
      '<strong>Sales &amp; Approval CRM:</strong> Custom lead pipelines, role-based dashboards, and multi-stage approvals.',
      '<strong>Unlimited Team Seats:</strong> Onboard 35+ staff with zero recurring per-seat licensing fees.'
    ],
    tags: ['Node.js', 'Laravel', 'PostgreSQL', '100% IP'],
    link: 'https://www.octalbees.com/services/erp-crm',
    cta: 'Explore ERP & CRM →'
  },
  software: {
    code: 'SPEC 03 / 06',
    metric: '100% IP Owned',
    title: 'Custom Software & SaaS',
    desc: 'Multi-tenant SaaS products, client portals, REST/GraphQL APIs, and business process automation engineered for long-term reliability.',
    items: [
      '<strong>SaaS Architecture:</strong> Scalable multi-tenant backends, auth, billing, and analytics dashboards.',
      '<strong>Client &amp; Vendor Portals:</strong> Self-serve B2B portals integrated with your existing systems.',
      '<strong>Automation &amp; APIs:</strong> Eliminate repetitive manual workflows with clean third-party integrations.'
    ],
    tags: ['TypeScript', 'React', 'REST / GraphQL', 'Cloud'],
    link: 'https://www.octalbees.com/services/custom-software',
    cta: 'Explore Custom Software →'
  },
  web: {
    code: 'SPEC 04 / 06',
    metric: '90+ PageSpeed',
    title: 'Website Development',
    desc: 'High-speed business websites and conversion landing pages engineered for instant mobile loads and effortless brand authority.',
    items: [
      '<strong>Core Web Vitals First:</strong> Clean semantic code tuned for sub-second loads and 90+ PageSpeed.',
      '<strong>Conversion Architecture:</strong> Clear user journeys, crisp messaging hierarchy, and lead capture.',
      '<strong>SEO-Ready Foundation:</strong> Structured schema markup, clean URLs, and fast asset delivery.'
    ],
    tags: ['Next.js', 'React', '90+ CWV', 'Schema'],
    link: 'https://www.octalbees.com/services/website-development',
    cta: 'Explore Web Development →'
  },
  seo: {
    code: 'SPEC 05 / 06',
    metric: '2× Organic Leads',
    title: 'SEO & Search Growth',
    desc: 'Technical crawl fixes, structured product schema, rebuilt landing pages, and clean GA4 attribution that compound organic demand.',
    items: [
      '<strong>Crawl &amp; Index Architecture:</strong> Fix technical bottlenecks, internal linking, and site hierarchy.',
      '<strong>Shopping &amp; Rich Schema:</strong> Google Shopping structured data and high-intent commercial pages.',
      '<strong>GA4 Attribution:</strong> Accurate conversion tracking so every organic lead is measured cleanly.'
    ],
    tags: ['Technical SEO', 'GA4', 'Shopping Schema', 'CRO'],
    link: 'https://www.octalbees.com/services/seo',
    cta: 'Explore Technical SEO →'
  },
  growth: {
    code: 'SPEC 06 / 06',
    metric: 'Full-Stack Team',
    title: 'UI/UX, Mobile & Paid Growth',
    desc: 'Conversion-focused product design, cross-platform mobile apps with App Store publishing, and ROI-tracked paid acquisition funnels.',
    items: [
      '<strong>UI/UX Design Systems:</strong> Research-backed wireframes, interactive prototypes, and component kits.',
      '<strong>Mobile App Delivery:</strong> Cross-platform iOS &amp; Android builds plus App Store compliance.',
      '<strong>Paid Growth Funnels:</strong> Performance ads wired directly to GA4 and landing page conversion tests.'
    ],
    tags: ['UI/UX', 'iOS & Android', 'Paid Ads', 'App Store'],
    link: 'https://www.octalbees.com/services/digital-marketing',
    cta: 'Explore Design & Growth →'
  }
};

const specTabs = document.querySelectorAll('.spec-tab');
const ssCode = document.getElementById('ss-code');
const ssMetric = document.getElementById('ss-metric');
const ssTitle = document.getElementById('ss-title');
const ssDesc = document.getElementById('ss-desc');
const ssList = document.getElementById('ss-list');
const ssTags = document.getElementById('ss-tags');
const ssLink = document.getElementById('ss-link');

specTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const data = specs[tab.dataset.spec];
    if (!data) return;

    specTabs.forEach((t) => {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');

    ssCode.textContent = data.code;
    ssMetric.textContent = data.metric;
    ssTitle.textContent = data.title;
    ssDesc.textContent = data.desc;
    ssList.innerHTML = data.items.map((i) => `<li>${i}</li>`).join('');
    ssTags.innerHTML = data.tags.map((t) => `<span>${t}</span>`).join('');
    ssLink.href = data.link;
    ssLink.textContent = data.cta;
  });
});

// Newsletter form feedback
const nlForm = document.getElementById('newsletter-form');
const nlStatus = document.getElementById('nl-status');

if (nlForm && nlStatus) {
  nlForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('nl-email');
    if (input && input.value.trim()) {
      nlStatus.textContent = 'Subscribed! We will share Octalbees updates soon.';
      input.value = '';
    }
  });
}
