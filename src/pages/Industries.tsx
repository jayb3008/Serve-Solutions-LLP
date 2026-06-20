import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

const industries = [
  {
    slug: 'fintech',
    num: '01',
    name: 'Fintech & Banking',
    desc: 'Card-issuing platforms, digital wallets, lending tools, and payment infrastructure — built to pass compliance audits on day one.',
    tags: ['Payments', 'Lending', 'PCI-DSS', 'KYC'],
  },
  {
    slug: 'saas',
    num: '02',
    name: 'SaaS & B2B Software',
    desc: 'Multi-tenant architectures, usage-based billing, onboarding flows, and the analytics that keep churn in check.',
    tags: ['Multi-tenant', 'Billing', 'Analytics', 'Onboarding'],
  },
  {
    slug: 'healthcare',
    num: '03',
    name: 'Healthcare & Wellness',
    desc: 'Telehealth platforms, patient management systems, and wellness apps — HIPAA-aware from the ground up.',
    tags: ['Telehealth', 'EHR', 'HIPAA', 'Wellness'],
  },
  {
    slug: 'ecommerce',
    num: '04',
    name: 'Commerce & Retail',
    desc: 'Headless storefronts, marketplace platforms, loyalty systems, and POS integrations that scale through peak season.',
    tags: ['Headless', 'Shopify', 'Marketplace', 'Loyalty'],
  },
  {
    slug: 'legal',
    num: '05',
    name: 'Legal & RegTech',
    desc: 'Document automation, contract review, case management, and AI-assisted legal research — built for security-first environments.',
    tags: ['AI review', 'Contracts', 'Compliance', 'Audit'],
  },
  {
    slug: 'logistics',
    num: '06',
    name: 'Logistics & Supply Chain',
    desc: 'Fleet tracking, last-mile delivery optimisation, warehouse management, and real-time visibility across the supply chain.',
    tags: ['Tracking', 'Fleet', 'Warehouse', 'Last-mile'],
  },
  {
    slug: 'edtech',
    num: '07',
    name: 'EdTech & Training',
    desc: 'Learning management systems, AI tutors, cohort platforms, and certification engines for modern learners.',
    tags: ['LMS', 'AI tutor', 'Cohorts', 'Certificates'],
  },
  {
    slug: 'media',
    num: '08',
    name: 'Media & Entertainment',
    desc: 'OTT platforms, content delivery networks, creator tools, and engagement analytics for digital audiences.',
    tags: ['OTT', 'CDN', 'Creator tools', 'Analytics'],
  },
  {
    slug: 'real-estate',
    num: '09',
    name: 'Real Estate & PropTech',
    desc: 'Property listing platforms, virtual tour integrations, lease management, and investment dashboards.',
    tags: ['Listings', 'Virtual tours', 'Leases', 'Investment'],
  },
  {
    slug: 'manufacturing',
    num: '10',
    name: 'Manufacturing & IoT',
    desc: 'Smart factory dashboards, IoT sensor pipelines, predictive maintenance models, and inventory optimisation.',
    tags: ['IoT', 'Predictive', 'SCADA', 'Inventory'],
  },
];

const reasons = [
  { n: '01', title: 'Domain expertise', body: "We've shipped products in ten verticals. We know the compliance traps, the table-stakes features, and the gaps competitors haven't filled." },
  { n: '02', title: 'No ramp-up tax', body: "You won't spend the first month explaining your industry. We ask fewer questions and make better decisions from day one." },
  { n: '03', title: 'Relevant references', body: "We can connect you with founders in similar verticals who've shipped with us — real conversations, not curated testimonials." },
  { n: '04', title: 'Regulatory literacy', body: 'HIPAA, PCI-DSS, GDPR, SOC 2 — we understand the shape of compliance and design systems that satisfy auditors.' },
];

export default function Industries() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <SEO
        title="Industries — Seventeen verticals, deep expertise"
        description="Satvix Tech Solutions builds digital products across Fintech, Healthcare, SaaS, Commerce, Legal, Logistics, EdTech, OTT, and more — with deep domain expertise baked in from day one."
        keywords="industry software development India, fintech software company India, healthcare tech India, edtech development company, logistics software India, legal tech company India, OTT platform development, insurtech India, travel tech development, manufacturing software India, retail tech company, telecom software India, construction tech India, marketplace development India, on demand app India, sports tech India, domain specific software development India, vertical SaaS India"
        url="https://satvixtech.com/industries"
        breadcrumb={[
          { name: 'Home', item: 'https://satvixtech.com' },
          { name: 'Industries', item: 'https://satvixtech.com/industries' },
        ]}
      />

      {/* Page hero */}
      <section className="page-hero" ref={heroRef}>
        <div className="wrap">
          <div className="page-hero__eyebrow">
            <span className="ping" />
            Industries
          </div>
          <h1>
            {(['We know your', 'industry inside', '<em>out.</em>'] as const).map((line, i) => (
              <span key={i} className="row">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.3 + i * 0.07 }}
                  style={{ display: 'inline-block' }}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              </span>
            ))}
          </h1>
          <div className="page-hero__sub">
            <div className="breadcrumb">
              Satvix Tech Solutions &nbsp;/&nbsp; Industries
            </div>
            <p>
              Deep domain knowledge means fewer wrong turns. We've shipped products in ten verticals — so we know the compliance traps, the table-stakes features, and where the real opportunity hides.
            </p>
          </div>
        </div>
      </section>

      {/* Industry rows */}
      <section className="s" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {industries.map(ind => (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                className="svc reveal"
                data-hover
              >
                <div className="svc__num">{ind.num}</div>
                <div className="svc__name" style={{ flex: '0 0 280px' }}>{ind.name}</div>
                <div style={{ flex: 1, color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.55 }}>
                  {ind.desc}
                </div>
                <div className="svc__tags">
                  {ind.tags.map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="svc__arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why domain matters */}
      <section className="s" style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '120px 0' }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal" style={{ color: 'rgba(255, 255, 255,.6)' }}>
                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'rgba(255, 255, 255,.4)', flexShrink: 0 }} />
                Why it matters
              </div>
              <h2 className="s-title reveal" data-d="1" style={{ color: 'var(--bg)' }}>
                Domain knowledge <em>ships faster.</em>
              </h2>
            </div>
          </div>
          <div className="pgrid" style={{ borderTopColor: 'rgba(255, 255, 255,.1)' }}>
            {reasons.map(r => (
              <div key={r.n} className="prin reveal" style={{ borderBottomColor: 'rgba(255, 255, 255,.1)', borderRightColor: 'rgba(255, 255, 255,.1)' }}>
                <div className="prin__n">{r.n}</div>
                <div>
                  <h3 style={{ color: 'var(--bg)' }}>{r.title}</h3>
                  <p style={{ color: 'rgba(255, 255, 255,.65)' }}>{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="band">
        <div className="wrap">
          <div className="band-grid">
            {[
              { n: '10+', l: 'Industries served' },
              { n: '120+', l: 'Products launched' },
              { n: '6+', l: 'Years of experience' },
              { n: '98%', l: 'Client satisfaction' },
            ].map((s, i) => (
              <div key={i} className="reveal" data-d={String(i)}>
                <div className="b-stat__n">{s.n}</div>
                <div className="b-stat__l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="eyebrow reveal" style={{ color: 'rgba(255, 255, 255,.55)', justifyContent: 'center', marginBottom: 24 }}>
            Your vertical, our expertise
          </div>
          <h2 className="reveal" data-d="1">
            Let's build in <em>your industry.</em>
          </h2>
          <Link
            to="/contact"
            className="cta-btn reveal"
            data-d="2"
            data-hover
            style={{ background: 'var(--accent)', color: 'var(--ink)', marginTop: 40 }}
          >
            Start a conversation <span className="dot" style={{ background: 'var(--ink)' }} />
          </Link>
        </div>
      </section>
    </div>
  );
}
