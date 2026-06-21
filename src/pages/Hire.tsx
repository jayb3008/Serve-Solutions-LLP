import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Code2, Smartphone, Cpu, Server, Palette, ShieldCheck, ArrowRight,
} from 'lucide-react';
import SEO from '../components/SEO';
import Magnetic from '../components/Magnetic';

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

const models = [
  {
    title: 'A team that becomes yours',
    desc: 'Two to eight people from the studio — engineers, a designer, QA, a delivery lead — working only on your product, treating your standup as their own.',
    points: ['Monthly, rolling', 'Scale up or down with a month’s notice', 'You set the roadmap, we set the standard'],
  },
  {
    title: 'A specialist or two',
    desc: 'You already have a team. You need one senior person who has done this before. We send them, in your tools, on your process.',
    points: ['Individual experts, by the month', 'Your stack, your standards', 'Real overlap with your working day'],
  },
  {
    title: 'A fixed-scope build',
    desc: 'You know what needs making and when. We agree the scope, the price and the date — and we sign for it.',
    points: ['Milestone billing', 'Fixed cost, fixed timeline', 'Clean handover on day one of week N'],
  },
];

const roles = [
  { icon: Code2, title: 'Web engineers', stack: 'React · Next.js · Node.js · TypeScript' },
  { icon: Smartphone, title: 'Mobile developers', stack: 'React Native · Swift · Kotlin · Flutter' },
  { icon: Cpu, title: 'AI / ML engineers', stack: 'Python · LLMs · RAG · PyTorch' },
  { icon: Server, title: 'DevOps & cloud', stack: 'AWS · Docker · Kubernetes · Terraform' },
  { icon: Palette, title: 'Product designers', stack: 'Figma · Design systems · UX research' },
  { icon: ShieldCheck, title: 'QA engineers', stack: 'Playwright · Cypress · Automation' },
];

const steps = [
  { n: '01', title: 'Tell us what you need', desc: 'Two paragraphs is plenty: the roles, the rough skills, the date. You will hear back from a real person, usually same day.' },
  { n: '02', title: 'Meet a small shortlist', desc: 'Three people, not thirty. People we would put on our own projects. You interview them; you decide.' },
  { n: '03', title: 'Start inside a fortnight', desc: 'Most engagements begin within five to ten working days, with a fortnight to confirm fit before anything is locked in.' },
  { n: '04', title: 'Grow, shrink, rotate', desc: 'As the roadmap changes, the team changes with it — without losing the context the original team built up.' },
];

const faqs = [
  { question: 'How fast can someone start?', answer: 'Five to ten working days, usually. Send the brief, hear back within twenty-four hours, see a shortlist within forty-eight, interview, onboard.' },
  { question: 'Do I interview the people you propose?', answer: 'Always. We only put forward people we would happily put on our own projects, and you decide whether they join yours.' },
  { question: 'What time zones do you cover?', answer: 'We are in Anand, Gujarat — IST. We guarantee at least four hours of real overlap with India, Europe, the UK, the Middle East, and most US time zones (including the US east-coast morning).' },
  { question: 'Is there a long contract?', answer: 'No. Dedicated and embedded engagements are month-by-month. You can scale up or down with reasonable notice; we have never asked for a multi-year lock-in.' },
  { question: 'What if someone is the wrong fit?', answer: 'Two-week trial on every engagement. If it is not working, we swap people quickly, without charging you for the cross-over.' },
];

export default function Hire() {
  return (
    <div>
      <SEO
        title="Hire — Borrow a small team from our studio"
        description="Embed a senior engineer, lift an entire team from Anand, or hire a fixed-scope build. Real overlap with India, EU, UK, the Middle East, and the US."
        keywords="hire dedicated developers India, hire react developers India, staff augmentation company India, hire remote developers Gujarat, dedicated development team India, hire node.js developers, hire react native developers India, hire AI ML engineers India, IT staff augmentation Anand, hire software developers India, offshore development team India, hire designers India"
        url="https://satvixtech.com/hire"
        breadcrumb={[
          { name: 'Home', item: 'https://satvixtech.com' },
          { name: 'Hire Developers', item: 'https://satvixtech.com/hire' },
        ]}
        faq={faqs}
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="wrap">
          <div className="page-hero__eyebrow">
            <span className="ping" />
            Borrow a team · senior people only
          </div>
          <h1>
            {(['Borrow a small', 'team from <em>our studio.</em>'] as const).map((line, i) => (
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
            <div className="breadcrumb">Satvix Tech Solutions &nbsp;/&nbsp; Hire</div>
            <p>
              Lift engineers, designers and QA out of our Anand studio and into your project — as a team, as a specialist, or as a fixed-scope build. Senior people, monthly billing, real overlap with your working day.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="s">
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">Three ways to work together</div>
              <h2 className="s-title reveal" data-d="1">Pick the <em>shape</em> that fits.</h2>
            </div>
          </div>
          <div className="dlv-grid">
            {models.map((m) => (
              <div key={m.title} className="dlv reveal" style={{ minHeight: 280 }}>
                <h4>{m.title}</h4>
                <p style={{ marginBottom: 'auto' }}>{m.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {m.points.map((p) => (
                    <li key={p} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13, fontFamily: 'var(--mono)', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="s" style={{ background: 'var(--ink)', color: 'var(--bg)', paddingTop: 120, paddingBottom: 120 }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal" style={{ color: 'rgba(255,255,255,.6)' }}>
                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'rgba(255,255,255,.4)', flexShrink: 0 }} />
                Roles in the bullpen
              </div>
              <h2 className="s-title reveal" data-d="1" style={{ color: 'var(--bg)' }}>Specialists who have actually <em>shipped one of these.</em></h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.1)' }}>
            {roles.map((r) => (
              <div key={r.title} className="reveal" style={{ background: 'var(--ink)', padding: 36, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <r.icon className="w-7 h-7" style={{ color: 'var(--accent)' }} />
                <h3 style={{ fontFamily: 'var(--display)', fontSize: 24, fontWeight: 500, margin: 0 }}>{r.title}</h3>
                <p style={{ margin: 0, color: 'rgba(255,255,255,.6)', fontFamily: 'var(--mono)', fontSize: 13, letterSpacing: '.02em' }}>{r.stack}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="s">
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">How it goes</div>
              <h2 className="s-title reveal" data-d="1">Brief, shortlist, start, scale — in <em>that order.</em></h2>
            </div>
          </div>
          <div className="tl-rows">
            {steps.map((s, i) => (
              <div key={s.n} className="tl-row reveal" data-d={String(i)}>
                <div className="tl-year">{s.n}</div>
                <div className="tl-title">{s.title}</div>
                <div className="tl-body">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="s" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)' }}>
        <div className="wrap" style={{ maxWidth: 900 }}>
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">Before you write</div>
              <h2 className="s-title reveal" data-d="1">Five answers, <em>plainly.</em></h2>
            </div>
          </div>
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {faqs.map((f, i) => (
              <div key={i} className="reveal" style={{ padding: '28px 0', borderBottom: '1px solid var(--line)' }}>
                <h3 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(20px,2.2vw,26px)', fontWeight: 500, letterSpacing: '-.015em', margin: '0 0 10px' }}>{f.question}</h3>
                <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.6 }}>{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="eyebrow reveal" style={{ color: 'rgba(255,255,255,.55)', justifyContent: 'center', marginBottom: 24 }}>
            We will reply within a working day
          </div>
          <h2 className="reveal" data-d="1">Tell us what your <em>team is missing.</em></h2>
          <Magnetic>
            <Link to="/contact" className="big-cta reveal" data-d="2" data-hover>
              Send a brief
              <span className="arrow"><ArrowRight size={18} /></span>
            </Link>
          </Magnetic>
        </div>
      </section>
    </div>
  );
}
