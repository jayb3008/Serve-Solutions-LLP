import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { posts, postBySlug } from '../data/blog';

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

const MONTHS: Record<string, string> = {
  Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
  Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12',
};

function toISO(date: string): string {
  const [mon, year] = date.split(' ');
  return `${year}-${MONTHS[mon] ?? '01'}-01`;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = postBySlug(slug as string) ?? posts[0];

  const idx = posts.findIndex((p) => p.slug === post.slug);
  const next = posts[(idx + 1) % posts.length];

  return (
    <div>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={`${post.title}, ${post.cat}, Satvix Tech Solutions blog, software engineering India, ${post.cat.toLowerCase()} insights`}
        url={`https://satvixtech.com/blog/${post.slug}`}
        type="article"
        datePublished={toISO(post.date)}
        breadcrumb={[
          { name: 'Home', item: 'https://satvixtech.com' },
          { name: 'Blog', item: 'https://satvixtech.com/blog' },
          { name: post.title, item: `https://satvixtech.com/blog/${post.slug}` },
        ]}
      />

      {/* Hero */}
      <article>
        <header className="page-hero" style={{ paddingBottom: 56 }}>
          <div className="wrap" style={{ maxWidth: 900 }}>
            <div className="page-hero__eyebrow">
              <span className="ping" />
              {post.cat} · {post.read} read
            </div>
            <h1 style={{ fontSize: 'clamp(34px, 6vw, 76px)', maxWidth: '20ch' }}>
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.2 }}
                style={{ display: 'inline-block' }}
              >
                {post.title}
              </motion.span>
            </h1>
            <div
              style={{
                marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--line)',
                display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  width: 44, height: 44, borderRadius: '50%', background: 'var(--ink)',
                  color: 'var(--bg)', display: 'grid', placeItems: 'center',
                  fontFamily: 'var(--display)', fontWeight: 600, fontSize: 18,
                }}
              >
                {post.author.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>{post.author}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                  {post.role} · {post.date}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Cover */}
        <div className="wrap" style={{ maxWidth: 1100 }}>
          <div
            className={`arch wide ${post.bg}`}
            style={{ aspectRatio: '16 / 7', borderRadius: 'var(--radius)', position: 'relative', overflow: 'hidden' }}
          >
            <div className="glyph"><div className="g-poly" /></div>
          </div>
        </div>

        {/* Body */}
        <div className="s" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <div className="wrap" style={{ maxWidth: 720 }}>
            {post.content.map((block, i) => {
              if (block.type === 'h2')
                return (
                  <h2
                    key={i}
                    className="reveal"
                    style={{
                      fontFamily: 'var(--display)', fontWeight: 500,
                      fontSize: 'clamp(26px, 3.2vw, 38px)', letterSpacing: '-.025em',
                      lineHeight: 1.1, margin: '48px 0 18px',
                    }}
                  >
                    {block.text}
                  </h2>
                );
              if (block.type === 'quote')
                return (
                  <blockquote
                    key={i}
                    className="reveal"
                    style={{
                      margin: '40px 0', padding: '8px 0 8px 28px',
                      borderLeft: '3px solid var(--accent)',
                      fontFamily: 'var(--display)', fontWeight: 400, fontStyle: 'italic',
                      fontSize: 'clamp(22px, 2.6vw, 30px)', lineHeight: 1.3,
                      letterSpacing: '-.02em', color: 'var(--ink)',
                    }}
                  >
                    {block.text}
                  </blockquote>
                );
              if (block.type === 'list')
                return (
                  <ul key={i} className="reveal" style={{ margin: '20px 0', padding: 0, listStyle: 'none' }}>
                    {block.items.map((it, j) => (
                      <li
                        key={j}
                        style={{
                          display: 'flex', gap: 14, alignItems: 'flex-start',
                          padding: '12px 0', borderBottom: '1px solid var(--line)',
                          fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)',
                        }}
                      >
                        <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', marginTop: 10, flexShrink: 0 }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                );
              return (
                <p
                  key={i}
                  className="reveal"
                  style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)', margin: '0 0 24px' }}
                >
                  {block.text}
                </p>
              );
            })}

            {/* Author footer */}
            <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid var(--line)', display: 'flex', gap: 16, alignItems: 'center' }}>
              <div
                style={{
                  width: 56, height: 56, borderRadius: '50%', background: 'var(--ink)',
                  color: 'var(--bg)', display: 'grid', placeItems: 'center',
                  fontFamily: 'var(--display)', fontWeight: 600, fontSize: 22, flexShrink: 0,
                }}
              >
                {post.author.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>Written by {post.author}</div>
                <div style={{ color: 'var(--muted)', fontSize: 14 }}>{post.role} at Satvix Tech Solutions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Next article */}
        <section className="s" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)', paddingTop: 80, paddingBottom: 80 }}>
          <div className="wrap">
            <div className="eyebrow reveal" style={{ marginBottom: 32 }}>Read next</div>
            <Link to={`/blog/${next.slug}`} className="svc reveal" data-hover>
              <div className="svc__num" style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>
                {next.cat}
              </div>
              <div className="svc__name" style={{ fontSize: 'clamp(22px,2.6vw,34px)' }}>{next.title}</div>
              <div className="svc__tags"><span>{next.read} read</span></div>
              <div className="svc__arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </div>
            </Link>
            <div style={{ marginTop: 40 }}>
              <Link to="/blog" className="btn-ghost" data-hover>
                All articles <span className="arr" />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
