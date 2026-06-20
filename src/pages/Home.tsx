import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { industriesData } from '../data/industries';

const industryList = Object.entries(industriesData) as [string, { title: string }][];

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
  { 
    cls: 'wc-1 wide', 
    year: '2025', 
    tags: ['Fintech', 'Web + iOS'], 
    title: 'LendingFlow — a card-issuing platform for the next million SMEs', 
    href: '/portfolio/lendingflow',
    img: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1400'
  },
  { 
    cls: 'wc-2', 
    year: '2025', 
    tags: ['SaaS'], 
    title: 'TailorPro — analytics and operations for boutique shops', 
    href: '/portfolio/tailorpro',
    img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  { 
    cls: 'wc-3', 
    year: '2024', 
    tags: ['Commerce'], 
    title: 'Stillwood Co. — headless storefront for a heritage outdoor brand', 
    href: '/portfolio/stillwood',
    img: 'https://images.pexels.com/photos/1366944/pexels-photo-1366944.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  { 
    cls: 'wc-4', 
    year: '2024', 
    tags: ['AI'], 
    title: 'Pelican — an agentic copilot for legal review', 
    href: '/portfolio/pelican',
    img: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  { 
    cls: 'wc-5', 
    year: '2023', 
    tags: ['Health'], 
    title: 'Verbena Care — a calmer way to manage chronic conditions', 
    href: '/portfolio/verbena',
    img: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
];

const bandStats = [
  { n: 6, unit: '+', label: 'Years building digital products' },
  { n: 120, unit: '+', label: 'Web & mobile launches' },
  { n: 98, unit: '%', label: 'Client satisfaction rate' },
  { n: 40, unit: '+', label: 'Expert engineers' },
];

const clients = ['LendingFlow', 'TailorPro', 'Stillwood', 'Pelican AI', 'Verbena', 'Nordhavn', 'Aurum', 'Traxis'];

const process = [
  { n: '01', title: 'Discover', desc: 'We start by understanding the problem, the users and the business — before a single screen gets designed.' },
  { n: '02', title: 'Design', desc: 'Flows, prototypes and a visual language, tested with real people so we build the right thing.' },
  { n: '03', title: 'Build', desc: 'Senior engineers ship in agile sprints with continuous integration and weekly demos.' },
  { n: '04', title: 'Launch', desc: 'Hardened, tested and observable — we ship to production with confidence, not crossed fingers.' },
  { n: '05', title: 'Scale', desc: 'We stay on as partners: measuring, iterating and growing the product alongside your team.' },
];

const techStack = [
  { cat: 'Frontend', tools: 'React · Next.js · TypeScript · Tailwind' },
  { cat: 'Mobile', tools: 'React Native · Swift · Kotlin · Flutter' },
  { cat: 'Backend', tools: 'Node.js · Python · PostgreSQL · GraphQL' },
  { cat: 'AI / ML', tools: 'LLMs · RAG · PyTorch · LangChain' },
  { cat: 'Cloud', tools: 'AWS · Vercel · Docker · Kubernetes' },
  { cat: 'Data', tools: 'Snowflake · dbt · Airflow · Redis' },
];

const testimonials = [
  { quote: "Satvix shipped our card-issuing platform from zero to 50,000 active cards. They treated regulatory complexity as a design problem, not an excuse.", name: 'Head of Product', org: 'LendingFlow' },
  { quote: "The one team owned strategy, design and engineering end to end. We've worked with five agencies — none came close to this level of ownership.", name: 'Founder & CEO', org: 'TailorPro' },
  { quote: "Our Lighthouse score went from 22 to 98 and conversions tripled. They reproduced our brand pixel-for-pixel while making everything faster.", name: 'Brand Director', org: 'Stillwood Co.' },
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
        description="Satvix Tech Solutions is an independent digital studio in Anand, Gujarat. We design, engineer and launch web platforms, mobile apps, AI products, and brand systems for founders and forward-thinking teams."
        keywords="SATVIX TECH SOLUTIONS, Satvix Tech Solutions, digital product studio India, web development agency Gujarat, mobile app development Anand, AI ML solutions India, software engineering company Gujarat, independent digital studio, custom software India"
        url="https://satvixtech.com"
        faq={[
          { question: 'What does Satvix Tech Solutions do?', answer: 'Satvix Tech Solutions is an independent digital product studio based in Anand, Gujarat. We design, engineer, and launch web platforms, mobile apps, AI products, and brand systems — from zero to scale.' },
          { question: 'Where is Satvix Tech Solutions based?', answer: 'We are based in Anand, Gujarat, India, with clients across India, the US, UK, and Europe.' },
          { question: 'How many projects has Satvix Tech Solutions shipped?', answer: 'We have shipped over 120 web and mobile products across fintech, healthcare, SaaS, commerce, legal, and more — with a 98% client satisfaction rate.' },
          { question: 'How do I start a project with Satvix Tech Solutions?', answer: 'Email us at info@satvixtech.com or visit our Contact page. We respond within one business day and typically start with a free discovery call.' },
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
            <p>Satvix Tech Solutions partners with founders and forward-thinking teams to build software, brands, and experiences people love using — from zero to scale.</p>
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

      {/* ── Clients strip ── */}
      <section style={{ borderBottom: '1px solid var(--line)', padding: '40px 0' }}>
        <div className="wrap">
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.16em', color: 'var(--muted)', textAlign: 'center', marginBottom: 28 }}>
            Trusted by teams shipping real products
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '24px 56px' }}>
            {clients.map((c) => (
              <span
                key={c}
                style={{
                  fontFamily: 'var(--display)', fontSize: 'clamp(18px, 2.2vw, 28px)',
                  fontWeight: 500, letterSpacing: '-.02em', color: 'var(--ink)',
                  opacity: 0.32, transition: 'opacity .3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.32')}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

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

      {/* ── Industries ── */}
      <section className="s" id="industries" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">Who we build for</div>
              <h2 className="s-title reveal" data-d="1">
                Deep expertise across <em>17 industries</em>.
              </h2>
            </div>
            <p className="reveal" data-d="2" style={{ maxWidth: '34ch', color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.55, margin: 0 }}>
              From fintech and healthcare to logistics, education and AI — we pair engineering with real domain knowledge, so software turns into measurable outcomes.
            </p>
          </div>

          <div className="reveal" data-d="2" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 8 }}>
            {industryList.map(([key, ind]) => (
              <Link
                key={key}
                to={`/industries/${key}`}
                data-hover
                style={{
                  fontFamily: 'var(--mono)', fontSize: 13, padding: '10px 18px',
                  border: '1px solid var(--line)', borderRadius: 999,
                  color: 'var(--ink-2)', textDecoration: 'none',
                  transition: 'background .2s ease, color .2s ease, border-color .2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--bg)'; e.currentTarget.style.borderColor = 'var(--ink)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'var(--ink-2)'; e.currentTarget.style.borderColor = 'var(--line)'; }}
              >
                {ind.title}
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
              <div className="eyebrow reveal" style={{ color: 'rgba(255, 255, 255,.6)' }}>
                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'rgba(255, 255, 255,.4)', flexShrink: 0 }} />
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
                <div
                  className="work-card__bg"
                  style={{
                    background: `linear-gradient(rgba(10, 8, 6, 0.48), rgba(10, 8, 6, 0.48)), url(${c.img}) center/cover no-repeat`,
                  }}
                />
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

      {/* ── Process ── */}
      <section className="s" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">How we work</div>
              <h2 className="s-title reveal" data-d="1">
                One team, <em>five stages</em>, zero handoffs.
              </h2>
            </div>
            <p className="reveal" data-d="2" style={{ maxWidth: '32ch', color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.55, margin: 0 }}>
              A clear, transparent process — from first conversation to a product that scales. You always know what's happening and why.
            </p>
          </div>
          <div className="tl-rows">
            {process.map((p, i) => (
              <div key={p.n} className="tl-row reveal" data-d={String(i)}>
                <div className="tl-year">{p.n}</div>
                <div className="tl-title">{p.title}</div>
                <div className="tl-body">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech stack ── */}
      <section className="s" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">Our stack</div>
              <h2 className="s-title reveal" data-d="1">
                Modern tools, <em>chosen on merit.</em>
              </h2>
            </div>
            <p className="reveal" data-d="2" style={{ maxWidth: '32ch', color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.55, margin: 0 }}>
              We're not religious about frameworks. We pick the right tool for each job — and we keep up so you don't have to.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
            {techStack.map((t, i) => (
              <div
                key={t.cat}
                className="reveal"
                data-d={String(i % 4)}
                style={{ background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 14, padding: '24px 26px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }} />
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--muted)' }}>{t.cat}</span>
                </div>
                <div style={{ fontFamily: 'var(--display)', fontSize: 20, fontWeight: 500, letterSpacing: '-.01em', lineHeight: 1.35 }}>{t.tools}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="s">
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">In their words</div>
              <h2 className="s-title reveal" data-d="1">
                Teams who <em>trusted us.</em>
              </h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {testimonials.map((t, i) => (
              <figure
                key={t.org}
                className="reveal"
                data-d={String(i)}
                style={{ margin: 0, background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', padding: 32, display: 'flex', flexDirection: 'column', gap: 24 }}
              >
                <div style={{ fontFamily: 'var(--display)', fontSize: 40, lineHeight: 0.6, color: 'var(--accent)' }}>&ldquo;</div>
                <blockquote style={{ margin: 0, fontFamily: 'var(--display)', fontSize: 'clamp(18px, 1.8vw, 22px)', fontWeight: 400, lineHeight: 1.4, letterSpacing: '-.01em', color: 'var(--ink)' }}>
                  {t.quote}
                </blockquote>
                <figcaption style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--ink)', color: 'var(--bg)', display: 'grid', placeItems: 'center', fontFamily: 'var(--display)', fontWeight: 600 }}>
                    {t.org.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em' }}>{t.org}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="band" style={{ borderTop: '1px solid var(--line)' }}>
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
          <div className="eyebrow reveal" style={{ color: 'rgba(255, 255, 255,.55)', justifyContent: 'center', marginBottom: 24 }}>
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
