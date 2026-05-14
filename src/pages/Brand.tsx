import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

const gallery = {
  main: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1200',
  s1:   'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=700',
  s2:   'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=700',
};

const capabilities = [
  {
    num: '01',
    pre: 'Brand',
    em: 'positioning',
    tags: ['Naming', 'Messaging', 'ICP'],
    desc: "We help founders articulate exactly what they do, who it's for, and why anyone should care — before spending a rupee on design or ads.",
    list: [
      'Competitive landscape analysis',
      'Ideal customer profiling (ICP)',
      'Positioning statement & narrative',
      'Brand naming & tagline',
      'Messaging hierarchy',
      'Value proposition design',
    ],
  },
  {
    num: '02',
    pre: 'Visual',
    em: 'identity',
    tags: ['Logo', 'Colour', 'Typography'],
    desc: 'A visual language that works everywhere — from a 16px favicon to a 6m conference banner. Built to last, not just to look good right now.',
    list: [
      'Logo design & variations',
      'Colour system & tokens',
      'Typography selection & pairing',
      'Iconography & illustration style',
      'Photography & art direction',
      'Motion & animation language',
    ],
  },
  {
    num: '03',
    pre: 'Brand',
    em: 'guidelines',
    tags: ['Voice', 'Motion', 'Brand book'],
    desc: "A brand book your whole team can actually use — clear enough for a new hire, detailed enough for an agency to execute without a briefing call.",
    list: [
      'Brand guidelines document',
      'Tone of voice & writing style',
      "Do / don't usage examples",
      'Template library',
      'Motion & animation spec',
      'Social media guidelines',
    ],
  },
  {
    num: '04',
    pre: 'Content &',
    em: 'go-to-market',
    tags: ['Copy', 'SEO', 'GTM strategy'],
    desc: "Brand without distribution is just art. We build content engines and go-to-market plans that turn a strong brand into measurable growth.",
    list: [
      'Marketing site copywriting',
      'SEO-driven content strategy',
      'Thought leadership framework',
      'Launch campaign planning',
      'Email & lifecycle copy',
      'Go-to-market roadmap',
    ],
  },
];

const useCases = [
  {
    title: 'Startup brand from zero',
    desc: 'Name, logo, visual system, and messaging — everything a new company needs to show up with confidence.',
    img: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Rebrand & identity refresh',
    desc: 'Evolving an existing brand without losing equity — new identity, same soul.',
    img: 'https://images.pexels.com/photos/3059654/pexels-photo-3059654.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Go-to-market positioning',
    desc: 'Messaging and strategy for a new product launch, market entry, or funding announcement.',
    img: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Marketing site copy',
    desc: 'Homepage, product pages, and case studies written to convert — not just to explain.',
    img: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Brand book & guidelines',
    desc: 'A single source of truth for how your brand looks, sounds, and moves — forever.',
    img: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Naming & messaging',
    desc: 'Finding the words that make people stop scrolling — for companies, products, and campaigns.',
    img: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const techStack = [
  { name: 'Figma',        cat: 'Design' },
  { name: 'Adobe CC',     cat: 'Design' },
  { name: 'Framer',       cat: 'Web' },
  { name: 'Webflow',      cat: 'Web' },
  { name: 'Notion',       cat: 'Documentation' },
  { name: 'Pitch',        cat: 'Presentations' },
  { name: 'Lottie',       cat: 'Animation' },
  { name: 'Canva Pro',    cat: 'Templates' },
  { name: 'Semrush',      cat: 'SEO' },
  { name: 'Loom',         cat: 'Handover' },
];

const process = [
  { n: '01', title: 'Research', body: "Market landscape, competitive audit, and ICP definition. We don't design in a vacuum — we design for a specific person in a specific context." },
  { n: '02', title: 'Positioning', body: "Brand narrative, values, and messaging hierarchy. The strategy that guides every design decision — built before a logo is sketched." },
  { n: '03', title: 'Design', body: "Logo system, visual identity, and motion language. Three directions presented, one evolved into a full brand system." },
  { n: '04', title: 'Delivery', body: "Brand book, asset library, copy, and launch assets — packaged so your team can use the brand without calling us first." },
];

export default function Brand() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <SEO
        title="Brand & Strategy — The first code you ship"
        description="Sarve Solutions builds brand identity, positioning, and go-to-market strategy for founders who want to show up with confidence from day one."
        url="https://sarvesolutions.in/services/brand"
        breadcrumb={[
          { name: 'Home', item: 'https://sarvesolutions.in' },
          { name: 'Services', item: 'https://sarvesolutions.in/services' },
          { name: 'Brand & Strategy', item: 'https://sarvesolutions.in/services/brand' },
        ]}
      />

      {/* Page hero */}
      <section className="page-hero" ref={heroRef}>
        <div className="wrap">
          <div className="page-hero__eyebrow">
            <span className="ping" />
            Brand &amp; Strategy
          </div>
          <h1>
            {(['Brand is the', 'first code', '<em>you ship.</em>'] as const).map((line, i) => (
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
              Sarve Solutions &nbsp;/&nbsp; Services &nbsp;/&nbsp; Brand &amp; Strategy
            </div>
            <p>
              We help founders articulate their positioning, create visual identities, and build content engines that turn a strong brand into measurable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map(i => (
            <span key={i} className="marquee__item">
              Brand positioning <span className="star">✦</span> Visual identity <em>·</em> Naming <span className="star">✦</span> Brand guidelines <em>·</em> Go-to-market <span className="star">✦</span>{' '}
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
                alt="Brand design workspace with collateral"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:flex flex-col gap-3">
              <div className="flex-1 rounded-[18px] overflow-hidden">
                <img
                  src={gallery.s1}
                  alt="Design tools and colour systems"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 rounded-[18px] overflow-hidden">
                <img
                  src={gallery.s2}
                  alt="Brand strategy and analytics"
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
                Four practices, <em>one brand team.</em>
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
                Brand that <em>does real work.</em>
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
              <div className="eyebrow reveal">Tools</div>
              <h2 className="s-title reveal" data-d="1">
                Our brand <em>toolkit.</em>
              </h2>
            </div>
            <p className="reveal" data-d="2" style={{ maxWidth: '32ch', color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.55, margin: 0 }}>
              Great brand work doesn't hide behind tools — but these are the ones we use to produce it consistently.
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
                From blank canvas to <em>launch-ready.</em>
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
            Let's build a brand worth remembering
          </div>
          <h2 className="reveal" data-d="1">
            Ready to own your <em>category?</em>
          </h2>
          <a
            href="mailto:info@sarvesolutions.in"
            className="big-cta reveal"
            data-d="2"
            data-hover
          >
            info@sarvesolutions.in
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
