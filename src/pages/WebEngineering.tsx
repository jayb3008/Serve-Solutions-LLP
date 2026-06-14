import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

const gallery = {
  main: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200',
  s1:   'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=700',
  s2:   'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=700',
};

const capabilities = [
  {
    num: '01',
    pre: 'Next.js &',
    em: 'React',
    tags: ['App Router', 'RSC', 'TypeScript'],
    desc: 'Fast, accessible, rock-solid React applications — from marketing sites to complex SaaS products serving millions of users.',
    list: [
      'Next.js App Router & RSC',
      'TypeScript-first codebases',
      'Server actions & data fetching',
      'Edge & serverless deployment',
      'Monorepo architecture',
      'Design system integration',
    ],
  },
  {
    num: '02',
    pre: 'Headless',
    em: 'CMS',
    tags: ['Sanity', 'Contentful', 'Strapi'],
    desc: 'Content-driven sites built with structured content models that give editors freedom without engineering pain.',
    list: [
      'Sanity & Contentful integration',
      'Custom schema design',
      'Structured content modelling',
      'Preview & draft workflows',
      'Localisation & i18n',
      'Webhook-driven revalidation',
    ],
  },
  {
    num: '03',
    pre: 'E-commerce &',
    em: 'payments',
    tags: ['Shopify Plus', 'Stripe', 'Commerce.js'],
    desc: 'High-conversion storefronts and subscription platforms — from headless Shopify builds to custom checkout flows.',
    list: [
      'Shopify Plus & headless',
      'Stripe subscriptions & billing',
      'Custom checkout flows',
      'Cart & wishlist mechanics',
      'Inventory & fulfilment APIs',
      'Conversion optimisation',
    ],
  },
  {
    num: '04',
    pre: 'Performance &',
    em: 'accessibility',
    tags: ['Core Web Vitals', 'WCAG 2.2', 'Lighthouse'],
    desc: 'We treat performance and accessibility as requirements, not afterthoughts. Every project ships with audited scores.',
    list: [
      'Core Web Vitals optimisation',
      'WCAG 2.2 AA compliance',
      'Image & font optimisation',
      'Lighthouse CI in pipelines',
      'Bundle analysis & splitting',
      'Semantic HTML & ARIA',
    ],
  },
];

const useCases = [
  {
    title: 'SaaS dashboards',
    desc: 'Complex data interfaces with real-time updates, role-based access, and user-specific views.',
    img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Marketing & content sites',
    desc: 'Editable, fast-loading sites that score green on Core Web Vitals and convert visitors.',
    img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'E-commerce storefronts',
    desc: 'Custom storefronts on Shopify or bespoke stacks — built for conversion and scale.',
    img: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Internal tools',
    desc: 'Admin panels, ops dashboards, and internal apps that your team actually enjoys using.',
    img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'API platforms',
    desc: 'Public or partner-facing APIs with documentation, rate limiting, and developer portals.',
    img: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Headless CMS builds',
    desc: 'Content platforms that let editors move fast without breaking things in production.',
    img: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const techStack = [
  { name: 'Next.js',     cat: 'Framework' },
  { name: 'React',       cat: 'UI' },
  { name: 'TypeScript',  cat: 'Language' },
  { name: 'Node.js',     cat: 'Backend' },
  { name: 'PostgreSQL',  cat: 'Database' },
  { name: 'Supabase',    cat: 'Platform' },
  { name: 'Vercel',      cat: 'Deploy' },
  { name: 'AWS',         cat: 'Cloud' },
  { name: 'Stripe',      cat: 'Payments' },
  { name: 'Sanity',      cat: 'CMS' },
];

const process = [
  { n: '01', title: 'Architecture', body: 'We define the stack, data models, caching strategy, and deploy target before writing production code. No surprises at launch.' },
  { n: '02', title: 'Build', body: 'Two-week sprints with CI/CD from day one. Every PR is reviewed, tested, and deployed to a preview environment.' },
  { n: '03', title: 'QA', body: 'Automated E2E tests, performance audits, and accessibility checks run on every deploy. We catch regressions before your users do.' },
  { n: '04', title: 'Launch', body: 'Zero-downtime deploy, real-time error monitoring, and a full handover — documentation, runbooks, and on-call support included.' },
];

export default function WebEngineering() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <SEO
        title="Web Engineering — Fast, accessible, rock-solid"
        description="Satvix Tech Solution builds Next.js and React applications that are fast, accessible, and production-ready — from marketing sites to complex SaaS products."
        keywords="web development company India, Next.js development agency, React development India, SaaS development company Gujarat, headless CMS development, web application development India, full stack web development Gujarat, Shopify Plus development India, TypeScript development company, Node.js backend development, REST API development India, GraphQL development, web performance optimization, Core Web Vitals agency, WCAG accessibility India, custom web app development, enterprise web development India"
        url="https://satvixtech.com/services/web-engineering"
        breadcrumb={[
          { name: 'Home', item: 'https://satvixtech.com' },
          { name: 'Services', item: 'https://satvixtech.com/services' },
          { name: 'Web Engineering', item: 'https://satvixtech.com/services/web-engineering' },
        ]}
      />

      {/* Page hero */}
      <section className="page-hero" ref={heroRef}>
        <div className="wrap">
          <div className="page-hero__eyebrow">
            <span className="ping" />
            Web Engineering
          </div>
          <h1>
            {(['Web apps built', 'to last — and', '<em>to scale.</em>'] as const).map((line, i) => (
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
              Satvix Tech Solution &nbsp;/&nbsp; Services &nbsp;/&nbsp; Web Engineering
            </div>
            <p>
              Fast, accessible, rock-solid web applications. From marketing sites to complex SaaS products — we own the build from architecture to launch.
            </p>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map(i => (
            <span key={i} className="marquee__item">
              Next.js <span className="star">✦</span> React <em>·</em> TypeScript <span className="star">✦</span> Headless CMS <em>·</em> E-commerce <span className="star">✦</span> Performance <em>·</em>{' '}
            </span>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div
            className="grid md:grid-cols-3 gap-3"
            style={{ height: 480 }}
          >
            <div className="md:col-span-2 rounded-[18px] overflow-hidden h-[260px] md:h-auto">
              <img
                src={gallery.main}
                alt="Code on screen — web engineering workspace"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:flex flex-col gap-3">
              <div className="flex-1 rounded-[18px] overflow-hidden">
                <img
                  src={gallery.s1}
                  alt="Developer workspace with multiple monitors"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 rounded-[18px] overflow-hidden">
                <img
                  src={gallery.s2}
                  alt="DevOps terminal and code pipeline"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="s" style={{ borderTop: '1px solid var(--line)', paddingTop: 0 }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">Capabilities</div>
              <h2 className="s-title reveal" data-d="1">
                Four practices, <em>one web team.</em>
              </h2>
            </div>
          </div>
          {capabilities.map(c => (
            <div key={c.num} className="pract reveal">
              <div className="pract__num">{c.num}</div>
              <div className="pract__head">
                <h2>{c.pre} <em>{c.em}</em></h2>
                <div className="meta">
                  {c.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
              <div className="pract__body">
                <p>{c.desc}</p>
                <ul className="pract__list">
                  {c.list.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="s" style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '120px 0' }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal" style={{ color: 'rgba(244,239,230,.6)' }}>
                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'rgba(244,239,230,.4)', flexShrink: 0 }} />
                Use cases
              </div>
              <h2 className="s-title reveal" data-d="1" style={{ color: 'var(--bg)' }}>
                What we <em>build.</em>
              </h2>
            </div>
          </div>
          <div className="arch-grid" style={{ marginTop: 60 }}>
            {useCases.map((uc, i) => (
              <div
                key={uc.title}
                className="arch reveal"
                data-d={String(i % 3)}
                style={{ cursor: 'default' }}
              >
                <div
                  className="arch__bg"
                  style={{
                    background: `linear-gradient(rgba(10,8,6,0.54), rgba(10,8,6,0.54)), url(${uc.img}) center/cover no-repeat`,
                  }}
                />
                <div className="arch__inner">
                  <div className="arch__top">
                    <div className="arch__meta"><span>Use case</span></div>
                  </div>
                  <div>
                    <p className="arch__title">{uc.title}</p>
                    <p style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.75, marginTop: 8, maxWidth: '34ch' }}>{uc.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="s" style={{ padding: '120px 0' }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">Technology</div>
              <h2 className="s-title reveal" data-d="1">
                Our web <em>stack.</em>
              </h2>
            </div>
            <p className="reveal" data-d="2" style={{ maxWidth: '32ch', color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.55, margin: 0 }}>
              Technology-agnostic but opinionated — we default to tools that are fast, well-supported, and battle-tested at scale.
            </p>
          </div>
          <div className="stack-grid">
            {techStack.map((t, i) => (
              <div key={t.name} className="stk reveal" data-d={String(i % 5)}>
                <div className="stk__dot" />
                <h5>{t.name}</h5>
                <span>{t.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="s" style={{ borderTop: '1px solid var(--line)', paddingBottom: '120px' }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">How we work</div>
              <h2 className="s-title reveal" data-d="1">
                From spec to <em>production.</em>
              </h2>
            </div>
          </div>
          <div className="tl-rows">
            {process.map((p, i) => (
              <div key={p.n} className="tl-row reveal" data-d={String(i)}>
                <div className="tl-year" style={{ fontSize: 20, letterSpacing: '.04em', fontFamily: 'var(--mono)', fontWeight: 400, color: 'var(--muted)' }}>{p.n}</div>
                <div className="tl-title">{p.title}</div>
                <div className="tl-body">{p.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="eyebrow reveal" style={{ color: 'rgba(244,239,230,.55)', justifyContent: 'center', marginBottom: 24 }}>
            Let's build something lasting
          </div>
          <h2 className="reveal" data-d="1">
            Ready to ship something <em>great?</em>
          </h2>
          <a
            href="mailto:info@satvixtech.com"
            className="big-cta reveal"
            data-d="2"
            data-hover
          >
            info@satvixtech.com
            <span className="arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </span>
          </a>
          <div style={{ marginTop: 48 }}>
            <Link to="/services" className="btn-ghost reveal" data-d="3" data-hover>
              All services <span className="arr" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
