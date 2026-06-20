import { Award, Star, Trophy, BadgeCheck, ThumbsUp } from 'lucide-react';

const awards = [
  { icon: Trophy, title: 'Top Development Studio', sub: 'Excellence in engineering · 2025' },
  { icon: Award, title: 'Design Award', sub: 'Product & brand design · 2024' },
  { icon: BadgeCheck, title: 'Verified Partner', sub: 'Vetted technology partner' },
  { icon: ThumbsUp, title: 'Top Rated', sub: '4.9 / 5 average client rating' },
];

/**
 * Recognition / credibility band. Award names are illustrative placeholders —
 * swap in real recognition once available.
 */
export default function AwardsSection({ dark = false }: { dark?: boolean }) {
  const bg = dark ? 'var(--ink)' : 'var(--bg)';
  const fg = dark ? 'var(--bg)' : 'var(--ink)';
  const sub = dark ? 'rgba(255,255,255,.6)' : 'var(--muted)';
  const line = dark ? 'rgba(255,255,255,.12)' : 'var(--line)';

  return (
    <section className="s" style={{ background: bg, color: fg, borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}` }}>
      <div className="wrap">
        <div className="s-head">
          <div>
            <div className="eyebrow reveal" style={{ color: sub }}>
              {dark && <span style={{ display: 'inline-block', width: 24, height: 1, background: 'rgba(255,255,255,.4)', flexShrink: 0 }} />}
              Recognition
            </div>
            <h2 className="s-title reveal" data-d="1" style={{ color: fg }}>
              Award-winning <em>work.</em>
            </h2>
          </div>
          <p className="reveal" data-d="2" style={{ maxWidth: '30ch', color: sub, fontSize: 16, lineHeight: 1.55, margin: 0 }}>
            Recognised for craft, reliability and results by clients and the wider industry.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, background: line, border: `1px solid ${line}`, borderRadius: 14, overflow: 'hidden' }}>
          {awards.map((a, i) => (
            <div
              key={a.title}
              className="reveal"
              data-d={String(i % 4)}
              style={{ background: bg, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}
            >
              <a.icon size={28} style={{ color: 'var(--accent)' }} />
              <div style={{ fontFamily: 'var(--display)', fontSize: 21, fontWeight: 500, letterSpacing: '-.015em' }}>{a.title}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: sub, textTransform: 'uppercase', letterSpacing: '.08em' }}>{a.sub}</div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 36, flexWrap: 'wrap' }}>
          {[...Array(5)].map((_, i) => <Star key={i} size={18} style={{ color: 'var(--accent)', fill: 'var(--accent)' }} />)}
          <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: sub, marginLeft: 8, letterSpacing: '.04em' }}>
            4.9 / 5 from 120+ projects delivered worldwide
          </span>
        </div>
      </div>
    </section>
  );
}
