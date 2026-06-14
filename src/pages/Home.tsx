import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

/* ── Animated counter ── */
function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1400;
        const t0 = performance.now();
        const tick = (t: number) => {
          const k = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - k, 3);
          setVal(Math.round(eased * to));
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const services = [
  { num: '01', pre: 'Product', em: 'design', tags: ['UX research', 'UI systems', 'Prototyping', 'Design ops'], href: '/services' },
  { num: '02', pre: 'Web', em: 'engineering', tags: ['Next.js', 'Headless commerce', 'CMS', 'Performance'], href: '/services' },
  { num: '03', pre: 'Mobile', em: 'apps', tags: ['iOS', 'Android', 'React Native', 'Flutter'], href: '/services' },
  { num: '04', pre: 'AI &', em: 'data', tags: ['LLM integration', 'RAG', 'Agents', 'Workflow automation'], href: '/services/ai-ml' },
  { num: '05', pre: 'Brand &', em: 'strategy', tags: ['Positioning', 'Identity', 'Naming', 'Content'], href: '/services' },
];

const workCards = [
  { cls: 'wc-1 wide', ph: 'circle', year: '2025', tags: ['Fintech', 'Web + iOS'], title: 'LendingFlow — a card-issuing platform for the next million SMEs', href: '/portfolio' },
  { cls: 'wc-2', ph: 'grid', year: '2025', tags: ['SaaS'], title: 'TailorPro — analytics and operations for boutique shops', href: '/portfolio' },
  { cls: 'wc-3', ph: 'bars', year: '2024', tags: ['Commerce'], title: 'Stillwood Co. — headless storefront for a heritage outdoor brand', href: '/portfolio' },
  { cls: 'wc-4', ph: 'poly', year: '2024', tags: ['AI'], title: 'Pelican — an agentic copilot for legal review', href: '/portfolio' },
  { cls: 'wc-5', ph: 'wave', year: '2023', tags: ['Health'], title: 'Verbena Care — a calmer way to manage chronic conditions', href: '/portfolio' },
];

const bandStats = [
  { n: 6, unit: '+', label: 'Years building digital products' },
  { n: 120, unit: '+', label: 'Web & mobile launches' },
  { n: 98, unit: '%', label: 'Client satisfaction rate' },
  { n: 40, unit: '+', label: 'Expert engineers' },
];

export default function Home() {
  const orbRef = useRef<HTMLDivElement>(null);

  /* Orb parallax */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orbRef.current.style.translate = `${x}px ${y}px`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div>
      <SEO
        title="Engineering Digital Excellence"
        description="Satvix Tech Solution is an independent digital studio in Anand, Gujarat. We design, engineer and launch web platforms, mobile apps, AI products, and brand systems for founders and forward-thinking teams."
        keywords="SATVIX TECH SOLUTION, Satvix Tech Solution, digital product studio India, web development agency Gujarat, mobile app development Anand, AI ML solutions India, software engineering company Gujarat, independent digital studio, custom software India"
        url="https://satvixtech.com"
        faq={[
          { question: 'What does Satvix Tech Solution do?', answer: 'Satvix Tech Solution is an independent digital product studio based in Anand, Gujarat. We design, engineer, and launch web platforms, mobile apps, AI products, and brand systems — from zero to scale.' },
          { question: 'Where is Satvix Tech Solution based?', answer: 'We are based in Anand, Gujarat, India, with clients across India, the US, UK, and Europe.' },
          { question: 'How many projects has Satvix Tech Solution shipped?', answer: 'We have shipped over 120 web and mobile products across fintech, healthcare, SaaS, commerce, legal, and more — with a 98% client satisfaction rate.' },
          { question: 'How do I start a project with Satvix Tech Solution?', answer: 'Email us at info@satvixtech.com or visit our Contact page. We respond within one business day and typically start with a free discovery call.' },
        ]}
      />

      {/* ── Hero ── */}
      <section className="hero overflow-hidden">
        <div ref={orbRef} className="hero__orb" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="hero__eyebrow">
            <span className="ping" />
            Independent digital studio · Anand, Gujarat
          </div>

          <h1 className="hero__title">
            {(['We design,', 'engineer & launch', '<em>brave</em> digital products.'] as const).map((line, i) => (
              <span key={i} className="row">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease, delay: 0.4 + i * 0.08 }}
                  style={{ display: 'inline-block' }}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              </span>
            ))}
          </h1>

          <div className="hero__foot">
            <p>Satvix Tech Solution partners with founders and forward-thinking teams to build software, brands, and experiences people love using — from zero to scale.</p>
            <Link to="/portfolio" className="cta-btn" data-hover>
              See selected work <span className="dot" />
            </Link>
            <div className="stats">
              <div>
                <div className="stat__num"><CountUp to={120} />+</div>
                <div className="stat__lbl">Projects shipped</div>
              </div>
              <div>
                <div className="stat__num"><CountUp to={98} />%</div>
                <div className="stat__lbl">Client satisfaction</div>
              </div>
              <div>
                <div className="stat__num"><CountUp to={6} /></div>
                <div className="stat__lbl">Yrs building</div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-ind">Scroll <span className="line" /></div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map(i => (
            <span key={i} className="marquee__item">
              Web platforms <span className="star">✦</span> Mobile apps <em>·</em> AI products <span className="star">✦</span> Brand systems <em>·</em> Commerce <span className="star">✦</span>{' '}
            </span>
          ))}
        </div>
      </div>

      {/* ── Services ── */}
      <section className="s services" id="services" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">What we do</div>
              <h2 className="s-title reveal" data-d="1">
                Five practices, <em>one team</em>, end-to-end.
              </h2>
            </div>
            <p className="reveal" data-d="2" style={{ maxWidth: '32ch', color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.55, margin: 0 }}>
              We don't throw work over walls. Strategy, design and engineering sit at the same table — for the entire build.
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--line)' }}>
            {services.map(svc => (
              <Link key={svc.num} to={svc.href} className="svc reveal" data-hover>
                <div className="svc__num">{svc.num}</div>
                <div className="svc__name">{svc.pre} <em>{svc.em}</em></div>
                <div className="svc__tags">
                  {svc.tags.map(t => <span key={t}>{t}</span>)}
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

      {/* ── Work ── */}
      <section style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '140px 0' }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal" style={{ color: 'rgba(244,239,230,.6)' }}>
                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'rgba(244,239,230,.4)', flexShrink: 0 }} />
                Selected work
              </div>
              <h2 className="s-title reveal" data-d="1" style={{ color: 'var(--bg)' }}>
                Built with teams who <em>ship</em>.
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="cta-btn reveal"
              data-d="2"
              data-hover
              style={{ background: 'var(--accent)', color: 'var(--ink)' }}
            >
              View archive <span className="dot" style={{ background: 'var(--ink)' }} />
            </Link>
          </div>

          <div className="work-grid">
            {workCards.map(c => (
              <Link key={c.title} to={c.href} className={`work-card ${c.cls} reveal`} data-hover>
                <div className="work-card__bg">
                  {c.ph === 'circle' && <div className="ph circle" />}
                  {c.ph === 'grid' && <div className="ph grid" />}
                  {c.ph === 'bars' && <div className="ph bars"><i /><i /><i /><i /><i /></div>}
                  {c.ph === 'poly' && <div className="ph poly" />}
                  {c.ph === 'wave' && <div className="ph wave" />}
                </div>
                <div className="work-card__inner">
                  <div className="work-card__meta">
                    <span>{c.year}</span>
                    {c.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                  <div className="work-card__title">{c.title}</div>
                </div>
                <div className="work-card__cta">↗</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="band">
        <div className="wrap">
          <div className="band-grid">
            {bandStats.map((s, i) => (
              <div key={i} className="reveal" data-d={String(i)}>
                <div className="b-stat__n">
                  <CountUp to={s.n} /><span className="unit">{s.unit}</span>
                </div>
                <div className="b-stat__l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="eyebrow reveal" style={{ color: 'rgba(244,239,230,.55)', justifyContent: 'center', marginBottom: 24 }}>
            Let&apos;s build
          </div>
          <h2 className="reveal" data-d="1">
            Got an idea worth <em>shipping?</em>
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
        </div>
      </section>
    </div>
  );
}
