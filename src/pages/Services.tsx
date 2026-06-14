import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

const practices = [
  {
    num: '01',
    pre: 'Product',
    em: 'design',
    tags: ['UX research', 'Design systems', 'Prototyping'],
    desc: 'We start with user insight and end with interfaces people actually want to use. Research-driven, pixel-perfect.',
    list: ['User research & jobs-to-be-done', 'Wireframes & interactive prototypes', 'UI design & component libraries', 'Usability testing & iteration', 'Design ops & handoff', 'Accessibility audits'],
    href: '/services/product-design',
  },
  {
    num: '02',
    pre: 'Web',
    em: 'engineering',
    tags: ['Next.js', 'CMS', 'Performance'],
    desc: 'Fast, accessible, rock-solid web applications. From marketing sites to complex SaaS products with millions of users.',
    list: ['Next.js & React applications', 'Headless CMS integrations', 'E-commerce & Shopify Plus', 'Performance & Core Web Vitals', 'API design & integrations', 'Accessibility (WCAG 2.2)'],
    href: '/services/web-engineering',
  },
  {
    num: '03',
    pre: 'Mobile',
    em: 'apps',
    tags: ['iOS', 'Android', 'React Native'],
    desc: 'Native experiences for iOS and Android, or cross-platform with React Native and Flutter. Built for the App Store, loved by users.',
    list: ['iOS (Swift / SwiftUI)', 'Android (Kotlin / Compose)', 'React Native cross-platform', 'Push notifications & offline', 'In-app purchases & subscriptions', 'App Store optimization'],
    href: '/services/mobile',
  },
  {
    num: '04',
    pre: 'AI &',
    em: 'data',
    tags: ['LLM', 'RAG', 'Agents'],
    desc: 'Practical AI that ships. We integrate large language models, build retrieval pipelines, and automate the workflows that slow your team down.',
    list: ['LLM integration & prompt engineering', 'RAG & vector databases', 'Agentic workflow automation', 'Fine-tuning & model evaluation', 'Data pipelines & ETL', 'Analytics dashboards'],
    href: '/services/ai-ml',
  },
  {
    num: '05',
    pre: 'Brand &',
    em: 'strategy',
    tags: ['Identity', 'Positioning', 'Content'],
    desc: 'Brand is the first code you ship. We help founders articulate their positioning, create visual identities, and build content engines.',
    list: ['Brand positioning & naming', 'Visual identity & logo systems', 'Brand guidelines & voice', 'Marketing site copy', 'Content strategy', 'Go-to-market planning'],
    href: '/services/brand',
  },
];

const deliverables = [
  {
    title: 'Discovery sprint',
    desc: 'Two-week deep-dive into your users, market, and technical constraints. We come out with a prioritised roadmap.',
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
    ),
  },
  {
    title: 'Design system',
    desc: 'A tokenised component library that scales across products and teams. Figma + code in sync.',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
    ),
  },
  {
    title: 'Full-stack application',
    desc: 'From auth and API to front-end and deploy. We own the build and hand over a production-ready system.',
    icon: (
      <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
    ),
  },
  {
    title: 'Mobile app',
    desc: 'App Store ready on iOS and/or Android. We handle submission, certificates, and first-launch support.',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
    ),
  },
  {
    title: 'AI integration',
    desc: 'LLM-powered features embedded in your product — copilots, classifiers, extraction pipelines, and agents.',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
    ),
  },
  {
    title: 'Brand identity',
    desc: 'Logo, colour, type, motion, and copy — packaged in a brand book your whole team can use.',
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
    ),
  },
];

const stackGroups = [
  {
    cat: 'Design',
    tools: ['Figma', 'Framer', 'Adobe CC'],
  },
  {
    cat: 'Frontend',
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  },
  {
    cat: 'Mobile',
    tools: ['React Native', 'Flutter', 'SwiftUI', 'Kotlin'],
  },
  {
    cat: 'Backend & DB',
    tools: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Supabase', 'Prisma'],
  },
  {
    cat: 'AI & ML',
    tools: ['OpenAI', 'Anthropic', 'LangChain', 'LlamaIndex', 'Pinecone', 'Weaviate', 'HuggingFace', 'Groq', 'Mistral AI', 'LangSmith'],
  },
  {
    cat: 'Cloud & Ops',
    tools: ['AWS', 'Vercel', 'Docker', 'GitHub Actions'],
  },
];


export default function Services() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <SEO
        title="What we do — Five practices, one team"
        description="Satvix Tech Solution offers Product Design, Web Engineering, Mobile Apps, AI & Data, and Brand Strategy — all under one roof."
        keywords="product design services india, web engineering company, mobile app development india, AI ML services Gujarat, brand strategy agency, full stack development, digital product studio"
        url="https://satvixtech.com/services"
        breadcrumb={[
          { name: 'Home', item: 'https://satvixtech.com' },
          { name: 'Services', item: 'https://satvixtech.com/services' },
        ]}
        faq={[
          { question: 'What services does Satvix Tech Solution offer?', answer: 'Satvix Tech Solution offers five core practices: Product Design (UX research, UI systems, prototyping), Web Engineering (Next.js, headless CMS, e-commerce), Mobile Apps (iOS, Android, React Native), AI & Data (LLM integration, RAG, agents), and Brand & Strategy (positioning, identity, content).' },
          { question: 'Do you work with startups or enterprise clients?', answer: 'We work with both. From early-stage founders validating their first product to scale-ups modernising legacy systems, we adapt our process to the stage and size of the engagement.' },
          { question: 'How does Satvix Tech Solution approach a new project?', answer: 'Every engagement starts with a discovery sprint — a structured deep-dive into users, market, and technical constraints. We come out with a prioritised roadmap before any production code is written.' },
          { question: 'Can Satvix Tech Solution handle design and engineering in the same team?', answer: 'Yes. Strategy, design, and engineering sit at the same table for the entire build. We don\'t hand off between departments — one team owns the full product.' },
          { question: 'What is the typical project timeline?', answer: 'A focused MVP typically takes 8–16 weeks from discovery to launch. Full-scale platforms with complex integrations can take 4–9 months. We\'ll give you a realistic estimate after the discovery sprint.' },
        ]}
      />

      {/* Page hero */}
      <section className="page-hero" ref={heroRef}>
        <div className="wrap">
          <div className="page-hero__eyebrow">
            <span className="ping" />
            What we do
          </div>
          <h1>
            {(['The work,', 'in plain', '<em>english.</em>'] as const).map((line, i) => (
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
              Satvix Tech Solution &nbsp;/&nbsp; Services
            </div>
            <p>
              Five practices. One team. No handoffs between strategy, design, and engineering — we own the whole thing, end to end.
            </p>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map(i => (
            <span key={i} className="marquee__item">
              Product design <span className="star">✦</span> Web engineering <em>·</em> Mobile apps <span className="star">✦</span> AI &amp; data <em>·</em> Brand strategy <span className="star">✦</span>{' '}
            </span>
          ))}
        </div>
      </div>

      {/* Practices */}
      <section className="s" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          {practices.map(p => (
            <div key={p.num} className="pract reveal">
              <div className="pract__num">{p.num}</div>
              <div className="pract__head">
                <h2>{p.pre} <em>{p.em}</em></h2>
                <div className="meta">
                  {p.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
              <div className="pract__body">
                <p>{p.desc}</p>
                <ul className="pract__list">
                  {p.list.map(item => <li key={item}>{item}</li>)}
                </ul>
                <Link to={p.href} className="btn-ghost" data-hover style={{ marginTop: 32 }}>
                  Learn more <span className="arr" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="s" style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '120px 0' }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal" style={{ color: 'rgba(244,239,230,.6)' }}>
                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'rgba(244,239,230,.4)', flexShrink: 0 }} />
                What you get
              </div>
              <h2 className="s-title reveal" data-d="1" style={{ color: 'var(--bg)' }}>
                Concrete outputs, <em>every time.</em>
              </h2>
            </div>
          </div>
          <div className="dlv-grid">
            {deliverables.map(d => (
              <div key={d.title} className="dlv reveal">
                <div className="dlv__icon">{d.icon}</div>
                <h4>{d.title}</h4>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="s" style={{ padding: '120px 0' }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">Technology</div>
              <h2 className="s-title reveal" data-d="1">
                Our preferred <em>stack.</em>
              </h2>
            </div>
            <p className="reveal" data-d="2" style={{ maxWidth: '32ch', color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.55, margin: 0 }}>
              We're technology-agnostic, but these are the tools we reach for first — because they're the best at what they do.
            </p>
          </div>

          <div className="stack-cats reveal" data-d="1">
            {stackGroups.map((group) => (
              <div key={group.cat} className="stack-cat">
                <div className="stack-cat__label">{group.cat}</div>
                <ul className="stack-cat__tools">
                  {group.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="eyebrow reveal" style={{ color: 'rgba(244,239,230,.55)', justifyContent: 'center', marginBottom: 24 }}>
            Tell us what you're building
          </div>
          <h2 className="reveal" data-d="1">
            Got a project in <em>mind?</em>
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
