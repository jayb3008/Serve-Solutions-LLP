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
    title: 'Dedicated team',
    desc: 'A full squad — engineers, designer, QA and a delivery lead — working only on your product, as an extension of your team.',
    points: ['Monthly rolling engagement', 'Scale up or down with notice', 'You own the roadmap'],
  },
  {
    title: 'Staff augmentation',
    desc: 'Plug senior specialists into your existing team to fill a skill gap or hit a deadline without long hiring cycles.',
    points: ['Individual experts', 'Your tools & process', 'Time-zone overlap guaranteed'],
  },
  {
    title: 'Fixed-scope build',
    desc: 'A defined deliverable, a fixed budget and a clear timeline — best for well-specified projects with a firm finish line.',
    points: ['Milestone-based billing', 'Fixed cost & timeline', 'Full handover on completion'],
  },
];

const roles = [
  { icon: Code2, title: 'Web Engineers', stack: 'React · Next.js · Node.js · TypeScript' },
  { icon: Smartphone, title: 'Mobile Developers', stack: 'React Native · Swift · Kotlin · Flutter' },
  { icon: Cpu, title: 'AI / ML Engineers', stack: 'Python · LLMs · RAG · PyTorch' },
  { icon: Server, title: 'DevOps & Cloud', stack: 'AWS · Docker · Kubernetes · Terraform' },
  { icon: Palette, title: 'Product Designers', stack: 'Figma · Design systems · UX research' },
  { icon: ShieldCheck, title: 'QA Engineers', stack: 'Playwright · Cypress · Automation' },
];

const steps = [
  { n: '01', title: 'Tell us what you need', desc: 'Share the roles, skills and timeline. We respond within one business day.' },
  { n: '02', title: 'Meet your shortlist', desc: 'We hand-pick candidates from our team and you interview them directly.' },
  { n: '03', title: 'Start in days', desc: 'Onboard your team in days, not months. Begin with a no-risk trial period.' },
  { n: '04', title: 'Scale as you grow', desc: 'Add or rotate talent as your roadmap evolves — with full continuity.' },
];

const faqs = [
  { question: 'How quickly can I hire developers from Satvix Tech Solutions?', answer: 'Most engagements start within 5–10 business days. Share your requirements and we share a hand-picked shortlist within 48 hours, then you interview and onboard.' },
  { question: 'Do I interview the developers myself?', answer: 'Yes. You interview every candidate directly and choose who joins your team. We only put forward people we would happily staff on our own projects.' },
  { question: 'What time zones do you cover?', answer: 'We are based in Anand, Gujarat, India and offer guaranteed daily overlap with India, Europe, the UK, the Middle East and US time zones, including the US morning.' },
  { question: 'Is there a minimum commitment?', answer: 'Dedicated team and staff-augmentation engagements are monthly and rolling. You can scale up or down with reasonable notice; there is no multi-year lock-in.' },
  { question: 'What if a developer is not the right fit?', answer: 'Every engagement starts with a trial period. If someone is not the right fit, we replace them quickly at no extra cost.' },
];

export default function Hire() {
  return (
    <div>
      <SEO
        title="Hire Dedicated Developers — Build your team with Satvix"
        description="Hire dedicated developers and designers from Satvix Tech Solutions, Anand, Gujarat. React, Node.js, React Native, AI/ML, DevOps and QA experts — staff augmentation and dedicated teams for clients worldwide."
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
            Hire developers · staff augmentation
          </div>
          <h1>
            {(['Build your team', 'with <em>senior</em> talent.'] as const).map((line, i) => (
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
              Hire vetted engineers, designers and QA from our Anand studio — as a dedicated team, embedded specialists, or a fixed-scope build. Senior people, real time-zone overlap, no long hiring cycles.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="s">
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">Engagement models</div>
              <h2 className="s-title reveal" data-d="1">Hire the way that <em>fits.</em></h2>
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
                Roles you can hire
              </div>
              <h2 className="s-title reveal" data-d="1" style={{ color: 'var(--bg)' }}>Specialists, <em>not generalists.</em></h2>
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
              <div className="eyebrow reveal">How it works</div>
              <h2 className="s-title reveal" data-d="1">From brief to <em>building</em> in days.</h2>
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
              <div className="eyebrow reveal">Questions</div>
              <h2 className="s-title reveal" data-d="1">Hiring, <em>answered.</em></h2>
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
            Ready when you are
          </div>
          <h2 className="reveal" data-d="1">Let's build your <em>team.</em></h2>
          <Magnetic>
            <Link to="/contact" className="big-cta reveal" data-d="2" data-hover>
              Request talent
              <span className="arrow"><ArrowRight size={18} /></span>
            </Link>
          </Magnetic>
        </div>
      </section>
    </div>
  );
}
