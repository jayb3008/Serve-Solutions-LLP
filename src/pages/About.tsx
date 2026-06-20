import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

const principles = [
  { n: '01', title: 'Craft over velocity', body: 'We ship fast, but never at the cost of quality. Every decision is deliberate, every pixel intentional.' },
  { n: '02', title: 'Transparency always', body: 'Open communication at every stage — from first call to final deploy. No black boxes, no surprises.' },
  { n: '03', title: 'Ownership mindset', body: 'We treat every product as if it were our own. That means caring about outcomes, not just deliverables.' },
  { n: '04', title: 'Simple over clever', body: 'The best solutions are the ones users never notice. We strip complexity until only value remains.' },
  { n: '05', title: 'Long-term thinking', body: 'We build for the next five years, not the next sprint. Architecture decisions should age well.' },
  { n: '06', title: 'Rooted in Gujarat', body: 'Built in Anand, thinking globally. We bring global standards to every engagement, from wherever we are.' },
];

const team = [
  { init: 'B', name: 'Batukbhai Sarvaiya', role: 'Founder & CEO' },
  { init: 'R', name: 'Rahul Patel', role: 'Head of Engineering' },
  { init: 'P', name: 'Priya Mehta', role: 'Design Lead' },
  { init: 'A', name: 'Arjun Shah', role: 'AI / ML Lead' },
  { init: 'N', name: 'Nisha Desai', role: 'Product Manager' },
  { init: 'K', name: 'Karan Joshi', role: 'Mobile Lead' },
  { init: 'S', name: 'Sneha Trivedi', role: 'Brand Strategy' },
  { init: 'D', name: 'Dev Agarwal', role: 'Backend Engineer' },
];

const timeline = [
  { year: '2020', title: 'Studio founded', body: 'Started as a two-person web shop in Anand, Gujarat. First client shipped in 30 days.' },
  { year: '2021', title: 'First enterprise deal', body: 'Landed a fintech client with 200k users. Built the core team around that challenge.' },
  { year: '2022', title: 'Mobile practice opens', body: 'Added iOS and Android to the offering. First React Native app at 100k downloads.' },
  { year: '2023', title: 'Design & brand added', body: 'Hired design lead. Launched full-service branding — from naming to identity systems.' },
  { year: '2024', title: 'AI / ML practice', body: 'Formed dedicated AI team. First LLM-powered product shipped to production.' },
  { year: '2025', title: '120+ launches & 40+ team', body: 'Crossed the milestone. Began working with international clients across three continents.' },
];

const bandStats = [
  { n: '40+', label: 'Designers & engineers' },
  { n: '120+', label: 'Products launched' },
  { n: '98%', label: 'Client satisfaction rate' },
  { n: '6+', label: 'Years of craft' },
];

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <SEO
        title="About — A studio of builders, makers & thinkers"
        description="Satvix Tech Solutions is an independent digital studio based in Anand, Gujarat. Founded in 2020, we partner with founders and forward-thinking teams to build software, brands, and experiences people love."
        keywords="about Satvix Tech Solutions, digital product studio India, software company Anand Gujarat, independent dev studio, who we are Satvix Tech Solutions, founders team India"
        url="https://satvixtech.com/about"
        breadcrumb={[
          { name: 'Home', item: 'https://satvixtech.com' },
          { name: 'About', item: 'https://satvixtech.com/about' },
        ]}
        faq={[
          { question: 'When was Satvix Tech Solutions founded?', answer: 'Satvix Tech Solutions was founded in 2020 in Anand, Gujarat, India, starting as a two-person web studio and growing into a full-service digital product team.' },
          { question: 'How big is the Satvix Tech Solutions team?', answer: 'We are a focused team of 40+ engineers, designers, and strategists. We keep the team small enough to care deeply about every project and large enough to cover the full stack.' },
          { question: 'What makes Satvix Tech Solutions different from other agencies?', answer: 'We don\'t hand off between strategy, design, and engineering. One team owns the entire build. We also refuse to take on more projects than we can give our full attention — quality over volume.' },
          { question: 'Does Satvix Tech Solutions only work with Indian clients?', answer: 'No. While we are based in Gujarat, India, we work with clients globally — including the US, UK, Europe, and the Middle East — fully remotely or in hybrid arrangements.' },
        ]}
      />

      {/* Page hero */}
      <section className="page-hero" ref={heroRef}>
        <div className="wrap">
          <div className="page-hero__eyebrow">
            <span className="ping" />
            About the studio
          </div>
          <h1>
            {(['A studio of', 'builders, makers', '<em>&amp; thinkers.</em>'] as const).map((line, i) => (
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
              Satvix Tech Solutions &nbsp;/&nbsp; About
            </div>
            <p>
              We're an independent digital studio headquartered in Anand, Gujarat. Since 2020 we've partnered with founders, operators, and enterprise teams to design, engineer, and launch digital products that last.
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="manifesto">
        <div className="wrap">
          <p className="reveal">
            We believe the best software is <em>invisible</em> — it just works.
          </p>
          <p className="reveal" data-d="1">
            We don't separate design from engineering. <span className="dim">We never have.</span>
          </p>
          <p className="reveal" data-d="2">
            Great products are built by teams who <em>care deeply</em> and move with intention.
          </p>
          <p className="reveal" data-d="3">
            That's the studio we built. <span className="dim">That's the studio you're partnering with.</span>
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="s" style={{ borderTop: '1px solid var(--line)', paddingBottom: '120px' }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">How we work</div>
              <h2 className="s-title reveal" data-d="1">
                Six principles we <em>refuse to compromise.</em>
              </h2>
            </div>
          </div>
          <div className="pgrid">
            {principles.map(p => (
              <div key={p.n} className="prin reveal">
                <div className="prin__n">{p.n}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="s" style={{ background: 'var(--ink)', color: 'var(--bg)', paddingBottom: '120px' }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal" style={{ color: 'rgba(255, 255, 255,.6)' }}>
                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'rgba(255, 255, 255,.4)', flexShrink: 0 }} />
                The people
              </div>
              <h2 className="s-title reveal" data-d="1" style={{ color: 'var(--bg)' }}>
                Every product is <em>people-first.</em>
              </h2>
            </div>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <div key={m.name} className={`tm reveal`} data-d={String(i % 4)}>
                <div className="tm__ph">
                  <div className="pmark">{m.init}</div>
                </div>
                <h4>{m.name}</h4>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="s" style={{ paddingBottom: '120px' }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">Our journey</div>
              <h2 className="s-title reveal" data-d="1">
                Five years of <em>shipping.</em>
              </h2>
            </div>
          </div>
          <div className="tl-rows">
            {timeline.map((row, i) => (
              <div key={row.year} className="tl-row reveal" data-d={String(i)}>
                <div className="tl-year">{row.year}</div>
                <div className="tl-title">{row.title}</div>
                <div className="tl-body">{row.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="band">
        <div className="wrap">
          <div className="band-grid">
            {bandStats.map((s, i) => (
              <div key={i} className="reveal" data-d={String(i)}>
                <div className="b-stat__n">{s.n}</div>
                <div className="b-stat__l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="eyebrow reveal" style={{ color: 'rgba(255, 255, 255,.55)', justifyContent: 'center', marginBottom: 24 }}>
            Long-term partners, not vendors
          </div>
          <h2 className="reveal" data-d="1">
            Ready to build <em>together?</em>
          </h2>
          <Link
            to="/contact"
            className="cta-btn reveal"
            data-d="2"
            data-hover
            style={{ background: 'var(--accent)', color: 'var(--ink)', marginTop: 40 }}
          >
            Start a conversation <span className="dot" style={{ background: 'var(--ink)' }} />
          </Link>
        </div>
      </section>
    </div>
  );
}
