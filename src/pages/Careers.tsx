import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

const values = [
  { n: '01', title: 'Ownership, not tickets', body: 'You own outcomes, not just tasks. Engineers here talk to users, shape the work, and ship things they are proud to put their name on.' },
  { n: '02', title: 'Senior by default', body: 'Small team, high trust. No layers of approval to do good work. You will be given real responsibility from week one.' },
  { n: '03', title: 'Learn on the job', body: 'New stacks, new domains, hard problems. We pair people deliberately and give time for deep work, not just delivery.' },
  { n: '04', title: 'Remote-friendly, Anand-rooted', body: 'Work from our Anand studio or remotely. What matters is the craft and communication, not the chair you sit in.' },
];

const perks = [
  'Competitive salary + performance bonus',
  'Flexible & remote-friendly hours',
  'Annual learning & conference budget',
  'Latest hardware of your choice',
  'Health cover for you & family',
  'Real ownership on real products',
  'Generous leave & wellness days',
  'A team that actually ships',
];

const openings = [
  { role: 'Senior React Engineer', team: 'Web', type: 'Full-time', loc: 'Anand / Remote' },
  { role: 'React Native Developer', team: 'Mobile', type: 'Full-time', loc: 'Anand / Remote' },
  { role: 'AI / ML Engineer', team: 'AI', type: 'Full-time', loc: 'Anand / Remote' },
  { role: 'Product Designer', team: 'Design', type: 'Full-time', loc: 'Anand / Remote' },
  { role: 'DevOps Engineer', team: 'Platform', type: 'Full-time', loc: 'Anand / Remote' },
  { role: 'QA Automation Engineer', team: 'Quality', type: 'Full-time', loc: 'Anand / Remote' },
];

const hiring = [
  { n: '01', title: 'Apply', desc: 'Send your CV and a line on what you have built. We read every application.' },
  { n: '02', title: 'Intro call', desc: 'A relaxed 30-minute chat about you, us, and what you want next.' },
  { n: '03', title: 'Craft round', desc: 'A practical exercise close to real work — no whiteboard trivia.' },
  { n: '04', title: 'Offer', desc: 'Meet the team, get an offer, and pick your start date.' },
];

export default function Careers() {
  return (
    <div>
      <SEO
        title="Careers — Build your career at Satvix Tech Solutions"
        description="Join Satvix Tech Solutions in Anand, Gujarat. We're hiring React, React Native, AI/ML, design, DevOps and QA talent. Remote-friendly roles, real ownership, and work you'll be proud of."
        keywords="careers Satvix Tech Solutions, IT jobs Anand Gujarat, software developer jobs India, react developer jobs Gujarat, remote developer jobs India, AI ML engineer jobs India, design jobs India, DevOps jobs India, tech jobs Anand, software company careers Gujarat"
        url="https://satvixtech.com/careers"
        breadcrumb={[
          { name: 'Home', item: 'https://satvixtech.com' },
          { name: 'Careers', item: 'https://satvixtech.com/careers' },
        ]}
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="wrap">
          <div className="page-hero__eyebrow">
            <span className="ping" />
            Careers · we're hiring
          </div>
          <h1>
            {(['Do the best', 'work of your <em>life.</em>'] as const).map((line, i) => (
              <span key={i} className="row">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.3 + i * 0.08 }}
                  style={{ display: 'inline-block' }}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              </span>
            ))}
          </h1>
          <div className="page-hero__sub">
            <div className="breadcrumb">Satvix Tech Solutions &nbsp;/&nbsp; Careers</div>
            <p>
              We're a small, senior team in Anand building products for founders around the world. If you care about craft, ownership and shipping things that matter, you'll feel at home here.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="s">
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">Why work here</div>
              <h2 className="s-title reveal" data-d="1">A studio built for <em>makers.</em></h2>
            </div>
          </div>
          <div className="pgrid">
            {values.map((v) => (
              <div key={v.n} className="prin reveal">
                <div className="prin__n">{v.n}</div>
                <div>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="s" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">The good stuff</div>
              <h2 className="s-title reveal" data-d="1">Perks &amp; <em>benefits.</em></h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
            {perks.map((p, i) => (
              <div
                key={p}
                className="reveal"
                data-d={String(i % 4)}
                style={{
                  display: 'flex', gap: 14, alignItems: 'center',
                  padding: '20px 22px', background: 'var(--bg)',
                  border: '1px solid var(--line)', borderRadius: 12,
                  fontSize: 15, fontWeight: 500,
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="s">
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">Open positions</div>
              <h2 className="s-title reveal" data-d="1">Find your <em>seat.</em></h2>
            </div>
          </div>
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {openings.map((o, i) => (
              <Link
                key={o.role}
                to="/contact"
                className="svc reveal"
                data-hover
                data-d={String(i % 4)}
                style={{ gridTemplateColumns: '1.6fr 1fr 1fr auto' }}
              >
                <div className="svc__name" style={{ fontSize: 'clamp(22px,2.6vw,34px)' }}>{o.role}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--ink-2)' }}>
                  <Clock size={14} /> {o.type}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--ink-2)' }}>
                  <MapPin size={14} /> {o.loc}
                </div>
                <div className="svc__arrow"><ArrowUpRight size={18} /></div>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 28, color: 'var(--muted)', fontSize: 15 }}>
            Don't see your role?{' '}
            <Link to="/contact" style={{ color: 'var(--accent)', fontWeight: 500 }}>
              Tell us why we should hire you
            </Link>{' '}
            — we always make room for exceptional people.
          </p>
        </div>
      </section>

      {/* Hiring process */}
      <section className="s" style={{ background: 'var(--ink)', color: 'var(--bg)', paddingTop: 120, paddingBottom: 120 }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal" style={{ color: 'rgba(255,255,255,.6)' }}>
                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'rgba(255,255,255,.4)', flexShrink: 0 }} />
                How we hire
              </div>
              <h2 className="s-title reveal" data-d="1" style={{ color: 'var(--bg)' }}>Simple &amp; <em>human.</em></h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
            {hiring.map((h) => (
              <div key={h.n} className="reveal">
                <div style={{ fontFamily: 'var(--display)', fontSize: 48, fontWeight: 500, color: 'var(--accent)', lineHeight: 1, marginBottom: 16 }}>{h.n}</div>
                <h3 style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 500, margin: '0 0 10px' }}>{h.title}</h3>
                <p style={{ margin: 0, color: 'rgba(255,255,255,.65)', fontSize: 15, lineHeight: 1.6 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="eyebrow reveal" style={{ color: 'rgba(255,255,255,.55)', justifyContent: 'center', marginBottom: 24 }}>
            Your move
          </div>
          <h2 className="reveal" data-d="1">Come build with <em>us.</em></h2>
          <a href="mailto:careers@satvixtech.com" className="big-cta reveal" data-d="2" data-hover>
            careers@satvixtech.com
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
