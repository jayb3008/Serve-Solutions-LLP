import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  read: string;
  cat: string;
  featured?: boolean;
  bg?: string;
};

const posts: Post[] = [
  {
    slug: 'llm-production-checklist',
    title: 'The LLM production checklist: 12 things we check before every AI launch',
    excerpt: "Streaming, cost caps, fallback models, eval harnesses — what we've learned shipping AI features that actually hold up under real traffic.",
    author: 'Jay Sarvaiya',
    date: 'May 2025',
    read: '9 min',
    cat: 'AI',
    featured: true,
    bg: 'bg-violet',
  },
  {
    slug: 'rag-architecture-patterns',
    title: 'RAG architecture patterns: when to chunk, when to chunk differently',
    excerpt: 'Document structure, token budgets, and re-ranking — the decisions that separate a janky chatbot from a reliable knowledge assistant.',
    author: 'Rahul Patel',
    date: 'Apr 2025',
    read: '11 min',
    cat: 'AI',
  },
  {
    slug: 'design-system-at-scale',
    title: 'Building a design system that survives a team of 40',
    excerpt: 'Token architecture, decision logs, and the governance model that keeps 40 engineers from accidentally forking your UI.',
    author: 'Priya Mehta',
    date: 'Apr 2025',
    read: '7 min',
    cat: 'Design',
  },
  {
    slug: 'nextjs-app-router-lessons',
    title: "Six months with Next.js App Router: what we'd do differently",
    excerpt: "Server components, caching gotchas, and the moment we realised our mental model was entirely wrong. Real project lessons.",
    author: 'Rahul Patel',
    date: 'Mar 2025',
    read: '10 min',
    cat: 'Engineering',
  },
  {
    slug: 'react-native-new-arch',
    title: 'Migrating a 150k-user app to the React Native new architecture',
    excerpt: 'What broke, what got faster, and the one bridging bug that took three days to find.',
    author: 'Karan Joshi',
    date: 'Mar 2025',
    read: '8 min',
    cat: 'Mobile',
  },
  {
    slug: 'discovery-sprint-template',
    title: 'Our discovery sprint template: two weeks that save six months',
    excerpt: "The exact artefacts, interviews, and decisions we make in week one before a single line of code gets written.",
    author: 'Nisha Desai',
    date: 'Feb 2025',
    read: '6 min',
    cat: 'Product',
  },
  {
    slug: 'supabase-at-scale',
    title: 'Supabase at scale: what no one tells you about row-level security',
    excerpt: 'Performance traps, policy debugging, and the indexing strategy that dropped our p99 from 800ms to 40ms.',
    author: 'Dev Agarwal',
    date: 'Feb 2025',
    read: '12 min',
    cat: 'Engineering',
  },
  {
    slug: 'brand-for-b2b',
    title: 'Brand strategy for B2B SaaS: why boring loses deals',
    excerpt: "Positioning, voice, and visual identity advice for founders who think branding is for consumer apps.",
    author: 'Sneha Trivedi',
    date: 'Jan 2025',
    read: '5 min',
    cat: 'Brand',
  },
];

const cats = ['All', 'AI', 'Engineering', 'Design', 'Mobile', 'Product', 'Brand'];

export default function Blog() {
  const [active, setActive] = useState('All');

  const featured = posts.find(p => p.featured)!;
  const rest = posts.filter(p => !p.featured && (active === 'All' || p.cat === active));
  const showFeatured = active === 'All' || active === featured.cat;

  return (
    <div>
      <SEO
        title="Journal — Thinking out loud"
        description="Engineering deep dives, design decisions, AI lessons, and product thinking from the Sarve Solutions team."
        keywords="software engineering blog India, product design articles, AI ML blog India, web development insights, tech blog Gujarat, startup engineering blog, React Next.js tutorials India, UX design blog, mobile development articles, digital product blog, software architecture India, AI product thinking, developer blog India, design engineering journal, Sarve Solutions blog"
        url="https://sarvesolutions.in/blog"
        breadcrumb={[
          { name: 'Home', item: 'https://sarvesolutions.in' },
          { name: 'Blog', item: 'https://sarvesolutions.in/blog' },
        ]}
      />

      {/* Page hero */}
      <section className="page-hero">
        <div className="wrap">
          <div className="page-hero__eyebrow">
            <span className="ping" />
            Journal
          </div>
          <h1>
            {(['Thinking', 'out', '<em>loud.</em>'] as const).map((line, i) => (
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
            <div className="breadcrumb">Sarve Solutions &nbsp;/&nbsp; Journal</div>
            <p>
              Engineering deep dives, design decisions, AI lessons, and the occasional product opinion — written by the people actually shipping the work.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="filters">
        <div className="wrap">
          <div className="filter-row">
            <div className="filter-chips">
              {cats.map(c => (
                <button
                  key={c}
                  className={`chip${active === c ? ' active' : ''}`}
                  onClick={() => setActive(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <span className="filter-count">
              {(showFeatured ? 1 : 0) + rest.length}&nbsp;article{(showFeatured ? 1 : 0) + rest.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>

      {/* Featured post */}
      {showFeatured && (
        <section style={{ padding: '60px 0 0', borderBottom: '1px solid var(--line)' }}>
          <div className="wrap">
            <Link
              to={`/blog/${featured.slug}`}
              className="arch wide reveal"
              data-hover
              style={{ display: 'block', marginBottom: 60 }}
            >
              <div className={`arch__bg ${featured.bg}`}>
                <div className="glyph"><div className="g-poly" /></div>
              </div>
              <div className="arch__inner">
                <div className="arch__top">
                  <div className="arch__meta">
                    <span>{featured.date}</span>
                    <span>{featured.read} read</span>
                  </div>
                  <span className="arch__cat">{featured.cat}</span>
                </div>
                <div>
                  <p className="arch__title" style={{ fontSize: 'clamp(24px,3.5vw,44px)', maxWidth: '28ch' }}>
                    {featured.title}
                  </p>
                  <p style={{ fontSize: 15, lineHeight: 1.55, opacity: 0.7, marginTop: 12, maxWidth: '52ch' }}>
                    {featured.excerpt}
                  </p>
                </div>
              </div>
              <div className="arch__cta">↗</div>
            </Link>
          </div>
        </section>
      )}

      {/* Post list */}
      <section className="s" style={{ borderTop: showFeatured ? 'none' : '1px solid var(--line)', paddingBottom: 120 }}>
        <div className="wrap">
          {rest.length === 0 && !showFeatured && (
            <p style={{ color: 'var(--muted)', fontFamily: 'var(--mono)', fontSize: 13, marginTop: 48, textAlign: 'center', letterSpacing: '.08em', textTransform: 'uppercase' }}>
              No articles in this category yet.
            </p>
          )}
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {rest.map((p, i) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="svc reveal"
                data-hover
                data-d={String(i % 4)}
              >
                <div className="svc__num" style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '.08em', color: 'var(--muted)', fontWeight: 400 }}>
                  {String(i + (showFeatured ? 2 : 1)).padStart(2, '0')}
                </div>
                <div style={{ flex: '0 0 auto' }}>
                  <span style={{
                    fontFamily: 'var(--mono)', fontSize: 10, textTransform: 'uppercase',
                    letterSpacing: '.12em', padding: '5px 10px',
                    border: '1px solid var(--line)', borderRadius: 999,
                    color: 'var(--ink-2)', whiteSpace: 'nowrap',
                  }}>
                    {p.cat}
                  </span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(18px,2vw,26px)', fontWeight: 500, letterSpacing: '-.02em', lineHeight: 1.1 }}>
                    {p.title}
                  </div>
                  <div style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.5, marginTop: 6, maxWidth: '60ch' }}>
                    {p.excerpt}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em' }}>{p.date}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em' }}>{p.read} read</span>
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

      {/* Newsletter */}
      <section style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '100px 0', borderTop: '1px solid rgba(244,239,230,.08)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 680 }}>
            <div className="eyebrow reveal" style={{ color: 'rgba(244,239,230,.6)', marginBottom: 24 }}>
              <span style={{ display: 'inline-block', width: 24, height: 1, background: 'rgba(244,239,230,.4)', flexShrink: 0 }} />
              Stay in the loop
            </div>
            <h2 className="reveal" data-d="1" style={{
              fontFamily: 'var(--display)', fontSize: 'clamp(36px,5vw,72px)',
              fontWeight: 500, letterSpacing: '-.035em', lineHeight: 1,
              color: 'var(--bg)', margin: '0 0 32px',
            }}>
              New articles, <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent)' }}>no noise.</em>
            </h2>
            <p className="reveal" data-d="2" style={{ color: 'rgba(244,239,230,.65)', fontSize: 16, lineHeight: 1.55, marginBottom: 40, maxWidth: '50ch' }}>
              We publish a few times a month. Engineering deep dives, design decisions, and the occasional hot take. No marketing emails.
            </p>
            <form
              className="reveal"
              data-d="3"
              onSubmit={e => e.preventDefault()}
              style={{ display: 'flex', gap: 0, maxWidth: 480 }}
            >
              <input
                type="email"
                placeholder="you@example.com"
                required
                style={{
                  flex: 1, background: 'rgba(244,239,230,.07)', border: '1px solid rgba(244,239,230,.18)',
                  borderRight: 'none', padding: '14px 20px', color: 'var(--bg)',
                  fontFamily: 'var(--sans)', fontSize: 15, outline: 'none',
                  borderRadius: '999px 0 0 999px',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(244,239,230,.5)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(244,239,230,.18)')}
              />
              <button
                type="submit"
                className="cta-btn"
                style={{
                  background: 'var(--accent)', color: 'var(--ink)',
                  borderRadius: '0 999px 999px 0', whiteSpace: 'nowrap',
                  border: 'none', cursor: 'pointer', flexShrink: 0,
                }}
              >
                Subscribe <span className="dot" style={{ background: 'var(--ink)' }} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="eyebrow reveal" style={{ color: 'rgba(244,239,230,.55)', justifyContent: 'center', marginBottom: 24 }}>
            Ready to work together?
          </div>
          <h2 className="reveal" data-d="1">
            Got a project worth <em>shipping?</em>
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
        </div>
      </section>
    </div>
  );
}
