// Mobile Navigation Toggle
const burger = document.querySelector('.nav-burger');
const nav = document.getElementById('site-nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });
}

// Interactive 4-Phase Process Stepper
const phaseData = [
  {
    tag: 'PHASE 01 · STRATEGY',
    metric: '48hr',
    title: 'Architecture & Scope Blueprint',
    desc: 'Clear milestones, fixed deliverables, and zero guesswork before a single line of code is written.',
    list: [
      'Conversion & workflow bottleneck audit',
      'Interactive wireframes & tech stack lock',
      'Fixed timeline & milestone pricing'
    ]
  },
  {
    tag: 'PHASE 02 · BUILD',
    metric: 'Weekly',
    title: 'Design & Full-Stack Engineering',
    desc: 'Conversion-first UI paired with clean architecture — delivered in live weekly staging builds.',
    list: [
      'Component design system & responsive UI',
      'Clean React, Node.js, Shopify or Laravel code',
      'Weekly Friday staging links you test live'
    ]
  },
  {
    tag: 'PHASE 03 · LAUNCH',
    metric: '90+',
    title: 'QA, Speed & Zero-Downtime Cutover',
    desc: 'Every release is stress-tested across devices and tuned for 90+ PageSpeed before going live.',
    list: [
      'Cross-device QA & payment gateway checks',
      'Core Web Vitals & technical SEO verification',
      'Zero-downtime DNS & production deployment'
    ]
  },
  {
    tag: 'PHASE 04 · GROWTH',
    metric: '30d',
    title: 'Post-Launch Support & Growth Sprints',
    desc: 'Launch is day one — backed by 30 days of free support plus optional CRO and SEO sprints.',
    list: [
      '30 days of complimentary engineering support',
      'GA4 funnel tracking & checkout optimization',
      'Ongoing feature & organic search scaling'
    ]
  }
];

const procSteps = document.querySelectorAll('.proc-step');
const stageBars = document.querySelectorAll('.stage-bars span');
const stageTag = document.getElementById('stage-tag');
const stageMetric = document.getElementById('stage-metric');
const stageTitle = document.getElementById('stage-title');
const stageDesc = document.getElementById('stage-desc');
const stageList = document.getElementById('stage-list');

procSteps.forEach((step) => {
  step.addEventListener('click', () => {
    const idx = Number(step.dataset.phase);
    const item = phaseData[idx];
    if (!item) return;

    procSteps.forEach((s) => {
      s.classList.remove('is-active');
      s.setAttribute('aria-selected', 'false');
    });
    step.classList.add('is-active');
    step.setAttribute('aria-selected', 'true');

    stageTag.textContent = item.tag;
    stageMetric.textContent = item.metric;
    stageTitle.textContent = item.title;
    stageDesc.textContent = item.desc;
    stageList.innerHTML = item.list.map((li) => `<li>${li}</li>`).join('');

    stageBars.forEach((bar, i) => {
      bar.classList.toggle('on', i <= idx);
    });
  });
});

// Interactive 3-Tab Capabilities Matrix
const capCatalog = {
  commerce: [
    {
      code: '01 / STOREFRONTS',
      title: 'Custom E-Commerce Storefronts',
      desc: 'Bespoke, conversion-focused online stores tailored to your brand and product catalog with sub-second mobile load times.',
      tags: ['React', 'Shopify', 'Headless'],
      href: 'https://www.octalbees.com/services/ecommerce'
    },
    {
      code: '02 / INTEGRATIONS',
      title: 'Payments, Inventory & Shipping',
      desc: 'End-to-end integration with Razorpay, Stripe, Shiprocket, GST invoicing, and real-time ERP inventory sync.',
      tags: ['Razorpay', 'Stripe', 'Shiprocket'],
      href: 'https://www.octalbees.com/services/ecommerce'
    },
    {
      code: '03 / WEB PLATFORMS',
      title: 'High-Speed Business Websites',
      desc: 'Clean, SEO-ready corporate sites and product launches engineered for 90+ PageSpeed and effortless CMS editing.',
      tags: ['Next.js', '90+ CWV', 'Schema'],
      href: 'https://www.octalbees.com/services/website-development'
    }
  ],
  enterprise: [
    {
      code: '01 / OPERATIONS',
      title: 'Custom ERP & Inventory Core',
      desc: 'Unify warehouse stock, purchase orders, GST invoicing, and multi-stage approvals without per-seat SaaS fees.',
      tags: ['Node.js', 'Laravel', 'PostgreSQL'],
      href: 'https://www.octalbees.com/services/erp-crm'
    },
    {
      code: '02 / SALES PIPELINE',
      title: 'Tailored CRM & Client Portals',
      desc: 'Lead routing, follow-up automation, role-based dashboards, and self-serve B2B customer portals.',
      tags: ['Role Auth', 'Webhooks', 'Zero Seat Fees'],
      href: 'https://www.octalbees.com/services/erp-crm'
    },
    {
      code: '03 / SAAS & APIS',
      title: 'Custom Software & Automation',
      desc: 'Multi-tenant SaaS products, REST/GraphQL integrations, and automated internal workflows with 100% IP ownership.',
      tags: ['TypeScript', 'REST / GraphQL', '100% IP'],
      href: 'https://www.octalbees.com/services/custom-software'
    }
  ],
  growth: [
    {
      code: '01 / SEARCH',
      title: 'Technical SEO & Crawl Architecture',
      desc: 'Fix indexation bottlenecks, deploy Google Shopping & product schema, and wire clean GA4 conversion tracking.',
      tags: ['Technical SEO', 'GA4', 'Schema'],
      href: 'https://www.octalbees.com/services/seo'
    },
    {
      code: '02 / ACQUISITION',
      title: 'Digital Marketing & Funnels',
      desc: 'Performance ad campaigns and conversion-engineered landing pages measured down to every qualified lead.',
      tags: ['Paid Search', 'CRO', 'Attribution'],
      href: 'https://www.octalbees.com/services/digital-marketing'
    },
    {
      code: '03 / PRODUCT',
      title: 'UI/UX Design & Mobile Apps',
      desc: 'Design systems, interactive Figma prototypes, cross-platform mobile apps, and App Store compliance & publishing.',
      tags: ['UI/UX', 'iOS & Android', 'Store Launch'],
      href: 'https://www.octalbees.com/services'
    }
  ]
};

const capTabs = document.querySelectorAll('.cap-tab');
const capGrid = document.getElementById('cap-grid');

capTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const items = capCatalog[tab.dataset.cat];
    if (!items || !capGrid) return;

    capTabs.forEach((t) => {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');

    capGrid.innerHTML = items
      .map(
        (c) => `
        <article class="cap-card">
          <span class="cap-code">${c.code}</span>
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
          <div class="cap-tags">${c.tags.map((t) => `<span>${t}</span>`).join('')}</div>
          <a class="cap-link" href="${c.href}">More Details →</a>
        </article>`
      )
      .join('');
  });
});

// Interactive Scope Assistant
const quickAnswers = {
  ip: 'Every line of code, design file, repository, and cloud configuration we create is transferred 100% to your company upon delivery — zero vendor lock-in and zero recurring per-seat licensing fees.',
  timeline: 'Share your goals and our senior engineers return a clear scope, architecture outline, timeline, and milestone estimate within 48 hours. Weekly staging builds keep progress transparent.',
  erp: 'Off-the-shelf ERPs charge per user every month and force awkward workarounds. We build tailored ERP & CRM systems around your exact sales, warehouse, and GST invoicing workflow — owned outright.',
  support: 'Every launch includes 30 days of complimentary post-launch engineering support covering bug fixes, speed tuning, and team onboarding, with optional growth sprints afterward.'
};

const askChips = document.querySelectorAll('.ask-chip');
const askAnswerText = document.getElementById('ask-answer-text');
const askForm = document.getElementById('ask-form');
const askInput = document.getElementById('ask-input');

askChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const key = chip.dataset.q;
    if (!quickAnswers[key]) return;
    askChips.forEach((c) => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    askAnswerText.textContent = quickAnswers[key];
  });
});

if (askForm && askInput && askAnswerText) {
  askForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = askInput.value.trim().toLowerCase();
    if (!q) return;

    askChips.forEach((c) => c.classList.remove('is-active'));
    if (q.includes('erp') || q.includes('crm') || q.includes('seat')) {
      askAnswerText.textContent = quickAnswers.erp;
    } else if (q.includes('time') || q.includes('cost') || q.includes('price') || q.includes('48')) {
      askAnswerText.textContent = quickAnswers.timeline;
    } else if (q.includes('support') || q.includes('launch') || q.includes('maintenance')) {
      askAnswerText.textContent = quickAnswers.support;
    } else {
      askAnswerText.textContent =
        'Great question — our in-house engineers scope custom e-commerce, ERP/CRM, web, and SEO projects within 48 hours. Message us on WhatsApp (+91 94705 06529) or email info@octalbees.com for a tailored brief.';
    }
    askInput.value = '';
  });
}
