// Mobile nav toggle
const menuBtn = document.querySelector('.menu-btn');
const primaryNav = document.getElementById('primary-nav');

if (menuBtn && primaryNav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });
}

// Hero Atelier Dossier Interactive Switcher
const focusData = {
  commerce: {
    num: '+28%',
    heading: 'Mobile Checkout Lift',
    sub: 'Custom Shopify & React storefronts loading under 1.0s with Razorpay, Stripe & Shiprocket synced.',
    specs: [
      { label: 'Page Load', val: '< 0.9s' },
      { label: 'PageSpeed', val: '95+' },
      { label: 'Ownership', val: '100% IP' }
    ],
    quote: '“Page loads dropped under a second and mobile checkout completion rose 28% in six weeks.”',
    author: '— Oliver Bennett, Northbridge Goods (London)'
  },
  erp: {
    num: '35+',
    heading: 'Staff Unified, Zero Seat Fees',
    sub: 'Tailored ERP & CRM platforms replacing scattered spreadsheets with automated GST invoicing and approvals.',
    specs: [
      { label: 'Seat Fees', val: '₹0 / mo' },
      { label: 'Sync Speed', val: '14ms' },
      { label: 'Ownership', val: '100% IP' }
    ],
    quote: '“Octalbees built a tailored ERP and CRM around our exact approval workflow without per-seat fees.”',
    author: '— Lukas Weber, Weber Industrial (Munich)'
  },
  seo: {
    num: '2.1×',
    heading: 'Qualified Organic Leads',
    sub: 'Clean crawl architecture, Google Shopping schema, rebuilt landing pages, and accurate GA4 tracking.',
    specs: [
      { label: 'Core Vitals', val: '90+ CWV' },
      { label: 'Tracking', val: 'GA4 Ready' },
      { label: 'Support', val: '30d Free' }
    ],
    quote: '“They fixed our crawl architecture and wired up GA4 properly. Qualified UK organic leads more than doubled.”',
    author: '— Hannah Taylor, Brightleaf Wellness (London)'
  }
};

const acTabs = document.querySelectorAll('.ac-tab');
const acNum = document.getElementById('ac-num');
const acHeading = document.getElementById('ac-heading');
const acSub = document.getElementById('ac-sub');
const acSpecs = document.getElementById('ac-specs');
const acQuoteText = document.getElementById('ac-quote-text');
const acQuoteAuthor = document.getElementById('ac-quote-author');

acTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const item = focusData[tab.dataset.focus];
    if (!item) return;

    acTabs.forEach((t) => {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');

    acNum.textContent = item.num;
    acHeading.textContent = item.heading;
    acSub.textContent = item.sub;
    acSpecs.innerHTML = item.specs
      .map((s) => `<div><span>${s.label}</span><strong>${s.val}</strong></div>`)
      .join('');
    acQuoteText.textContent = item.quote;
    acQuoteAuthor.textContent = item.author;
  });
});

// Interactive 12-Tile Capability Wall
const capDetails = {
  shopify: {
    kicker: 'SHOPIFY & HEADLESS',
    desc: 'Custom Shopify themes, React headless storefronts, app integrations, and speed optimization tuned for sub-second mobile checkout.',
    link: 'https://www.octalbees.com/services/ecommerce',
    cta: 'Explore E-Commerce →'
  },
  'custom-store': {
    kicker: 'CUSTOM STOREFRONTS',
    desc: 'Bespoke online stores and multi-vendor marketplaces tailored to your exact catalog, pricing tiers, and conversion funnel.',
    link: 'https://www.octalbees.com/services/ecommerce',
    cta: 'Explore Storefronts →'
  },
  erp: {
    kicker: 'CUSTOM ERP CORE',
    desc: 'Warehouse inventory, purchase orders, vendor tracking, and multi-level approvals engineered around your team with zero per-seat fees.',
    link: 'https://www.octalbees.com/services/erp-crm',
    cta: 'Explore ERP Core →'
  },
  crm: {
    kicker: 'SALES & LEAD CRM',
    desc: 'Custom pipelines, automated follow-ups, role-based dashboards, and client portals that keep every deal visible.',
    link: 'https://www.octalbees.com/services/erp-crm',
    cta: 'Explore CRM →'
  },
  payments: {
    kicker: 'RAZORPAY & STRIPE',
    desc: 'Seamless Indian and international payment settlement, subscriptions, webhooks, and automated reconciliation.',
    link: 'https://www.octalbees.com/services/ecommerce',
    cta: 'Explore Integrations →'
  },
  logistics: {
    kicker: 'SHIPROCKET & GST',
    desc: 'Automated shipping label generation, live courier tracking, and compliant GST invoicing synced directly to your orders.',
    link: 'https://www.octalbees.com/services/ecommerce',
    cta: 'Explore Commerce Ops →'
  },
  saas: {
    kicker: 'SAAS & PORTALS',
    desc: 'Multi-tenant SaaS products, REST/GraphQL APIs, and internal automation systems delivered with 100% IP ownership.',
    link: 'https://www.octalbees.com/services/custom-software',
    cta: 'Explore Custom Software →'
  },
  websites: {
    kicker: 'HIGH-SPEED SITES',
    desc: 'Conversion-focused corporate websites and landing pages engineered for 90+ PageSpeed and effortless content updates.',
    link: 'https://www.octalbees.com/services/website-development',
    cta: 'Explore Web Dev →'
  },
  seo: {
    kicker: 'TECHNICAL SEO',
    desc: 'Clean crawl architecture, Google Shopping schema, Core Web Vitals optimization, and structured content that grows organic demand.',
    link: 'https://www.octalbees.com/services/seo',
    cta: 'Explore SEO →'
  },
  marketing: {
    kicker: 'PAID GROWTH & GA4',
    desc: 'Paid acquisition campaigns and conversion funnels wired cleanly to GA4 so every campaign rupee is measurable.',
    link: 'https://www.octalbees.com/services/digital-marketing',
    cta: 'Explore Growth →'
  },
  uiux: {
    kicker: 'UI/UX DESIGN',
    desc: 'Research-backed wireframes, interactive prototypes, and reusable design systems built for clarity and conversion.',
    link: 'https://www.octalbees.com/services',
    cta: 'Explore Design →'
  },
  mobile: {
    kicker: 'MOBILE APPS',
    desc: 'Cross-platform iOS and Android apps engineered end-to-end, including App Store compliance and publishing.',
    link: 'https://www.octalbees.com/services',
    cta: 'Explore Mobile Apps →'
  }
};

const capTiles = document.querySelectorAll('.cap-tile');
const tdKicker = document.getElementById('td-kicker');
const tdDesc = document.getElementById('td-desc');
const tdLink = document.getElementById('td-link');

capTiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    const info = capDetails[tile.dataset.cap];
    if (!info) return;

    capTiles.forEach((t) => t.classList.remove('is-selected'));
    tile.classList.add('is-selected');

    tdKicker.textContent = info.kicker;
    tdDesc.textContent = info.desc;
    tdLink.href = info.link;
    tdLink.textContent = info.cta;
  });
});
