import { useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

type Outcome = { n: string; label: string };

type Project = {
    title: string;
    subtitle: string;
    category: string;
    year: string;
    client: string;
    role: string;
    tags: string[];
    overview: string;
    challenge: string;
    solution: string;
    tech: string[];
    outcomes: Outcome[];
    img: string;
    prev: string;
    next: string;
};

const projectsData: Record<string, Project> = {
    lendingflow: {
        title: 'LendingFlow',
        subtitle: 'Card-issuing platform for the next million SMEs',
        category: 'Fintech · Web + iOS',
        year: '2025',
        client: 'LendingFlow Inc.',
        role: 'Product design, Web, iOS',
        tags: ['Fintech', 'Web', 'iOS', 'Payments'],
        overview: 'A full-stack card-issuing and credit platform built for India\'s underserved SME segment. From KYC flows to real-time transaction monitoring, we designed and built the entire product — zero to 50,000 active cards in 18 months.',
        challenge: 'Building a financial product means navigating RBI compliance, integrating with multiple banking partners, and convincing first-time borrowers to trust a new app with their money. Every flow had a regulatory dependency we couldn\'t shortcut.',
        solution: 'We built a modular compliance engine that adapts per banking partner, a sub-100ms transaction pipeline on AWS, and an onboarding flow informed by 40+ user interviews that cut drop-off by 62% versus industry average.',
        tech: ['Next.js', 'React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe', 'Supabase'],
        outcomes: [
            { n: '50k+', label: 'Active cards issued' },
            { n: '62%', label: 'Drop-off reduction' },
            { n: '<100ms', label: 'Transaction latency' },
            { n: '18mo', label: 'Zero to launch' },
        ],
        img: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1400',
        prev: 'vaulter',
        next: 'tailorpro',
    },
    tailorpro: {
        title: 'TailorPro',
        subtitle: 'Analytics and operations for boutique shops',
        category: 'SaaS',
        year: '2025',
        client: 'TailorPro Ltd.',
        role: 'Full-stack, Product design',
        tags: ['SaaS', 'Analytics', 'Retail'],
        overview: 'A vertical SaaS platform giving independent boutique owners the kind of analytics and inventory intelligence previously only affordable for enterprise retailers. Built for non-technical users who live in their shop, not their laptop.',
        challenge: 'Boutique owners have no time for complex dashboards. They need answers in seconds — not after filtering twelve dropdowns. The existing tools in the market were either too simple or too enterprise-heavy to adopt.',
        solution: 'We designed a "daily brief" model: one screen per morning that surfaces every actionable insight. Under the hood, a multi-tenant data pipeline normalises sales from Shopify, Square, and manual entry into a single source of truth.',
        tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Recharts', 'Vercel'],
        outcomes: [
            { n: '3min', label: 'Average daily review time' },
            { n: '2,400+', label: 'Shops onboarded' },
            { n: '94%', label: 'Week-3 retention' },
            { n: '4.8★', label: 'App Store rating' },
        ],
        img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1400',
        prev: 'lendingflow',
        next: 'stillwood',
    },
    stillwood: {
        title: 'Stillwood Co.',
        subtitle: 'Headless storefront for a heritage outdoor brand',
        category: 'Commerce',
        year: '2024',
        client: 'Stillwood Co.',
        role: 'Headless commerce, Brand',
        tags: ['Commerce', 'Headless', 'Shopify Plus'],
        overview: 'A headless Shopify Plus storefront for a 30-year-old heritage outdoor equipment brand entering direct-to-consumer. Balancing the weight of the brand\'s legacy with the speed expectations of modern shoppers.',
        challenge: 'Their legacy site scored 22 on Lighthouse mobile. International shipping rules were hardcoded in five places. The checkout hadn\'t changed since 2016. And the brand team was protective of every pixel of the visual identity.',
        solution: 'We rebuilt on Next.js with Shopify Plus as the commerce engine, achieving a 98 Lighthouse score. A custom internationalisation layer handles 8 currencies and 14 shipping zones from a single Sanity CMS. Visual identity reproduced pixel-for-pixel.',
        tech: ['Next.js', 'Shopify Plus', 'Sanity', 'GraphQL', 'Vercel', 'Algolia'],
        outcomes: [
            { n: '98', label: 'Lighthouse score' },
            { n: '3.1×', label: 'Conversion uplift' },
            { n: '0.8s', label: 'Average page load' },
            { n: '14', label: 'Shipping zones' },
        ],
        img: 'https://images.pexels.com/photos/1366944/pexels-photo-1366944.jpeg?auto=compress&cs=tinysrgb&w=1400',
        prev: 'tailorpro',
        next: 'pelican',
    },
    pelican: {
        title: 'Pelican',
        subtitle: 'An agentic copilot for legal document review',
        category: 'AI · LegalTech',
        year: '2024',
        client: 'Pelican AI',
        role: 'AI engineering, Product design',
        tags: ['AI', 'LegalTech', 'RAG', 'Agents'],
        overview: 'An AI-powered legal review copilot that extracts clauses, flags risk, and generates structured summaries across contract types. Designed for in-house legal teams who review hundreds of documents a month.',
        challenge: 'Legal documents are high-stakes. Hallucinations aren\'t acceptable. The system had to be accurate enough for lawyers to stake their professional reputation on, and fast enough to actually save them time.',
        solution: 'We built a hybrid retrieval system combining dense semantic search with sparse keyword matching, layered on Claude for structured output. Every claim is traceable to a source clause. The UI surfaces confidence scores so lawyers know exactly when to verify.',
        tech: ['Python', 'Claude API', 'LangChain', 'Pinecone', 'Next.js', 'PostgreSQL'],
        outcomes: [
            { n: '91%', label: 'Clause extraction accuracy' },
            { n: '6×', label: 'Review speed improvement' },
            { n: '0', label: 'Unverifiable claims surfaced' },
            { n: '340+', label: 'Contracts reviewed daily' },
        ],
        img: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1400',
        prev: 'stillwood',
        next: 'verbena',
    },
    verbena: {
        title: 'Verbena Care',
        subtitle: 'A calmer way to manage chronic conditions',
        category: 'Health · Mobile',
        year: '2023',
        client: 'Verbena Health',
        role: 'iOS, Android, Product design',
        tags: ['Health', 'iOS', 'Android', 'Wellness'],
        overview: 'A mobile health companion for people living with chronic conditions — designed to reduce the cognitive load of daily management without making them feel like a patient every time they open their phone.',
        challenge: 'Health apps are either clinical and cold, or oversimplified and patronising. People with chronic conditions don\'t want to be reminded they\'re sick — they want just enough structure to stay on top of things without anxiety.',
        solution: 'We ran 30+ generative research sessions before designing a single screen. The result is a "quiet" information hierarchy: urgent items surface, everything else stays tucked. HealthKit and Google Fit sync passively so users don\'t have to log manually.',
        tech: ['React Native', 'Expo', 'Supabase', 'HealthKit', 'Google Fit', 'RevenueCat'],
        outcomes: [
            { n: '4.9★', label: 'App Store rating' },
            { n: '78%', label: 'Day-30 retention' },
            { n: '2.2×', label: 'Medication adherence' },
            { n: '12k+', label: 'Active users' },
        ],
        img: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1400',
        prev: 'pelican',
        next: 'nordhavn',
    },
    nordhavn: {
        title: 'Nordhavn',
        subtitle: 'B2B procurement platform for Nordic manufacturers',
        category: 'SaaS · B2B',
        year: '2023',
        client: 'Nordhavn A/S',
        role: 'Full-stack, Product design',
        tags: ['SaaS', 'B2B', 'Procurement'],
        overview: 'A modern procurement and supplier management platform for mid-market Nordic manufacturers, replacing spreadsheets and email chains with structured workflows, approval routing, and spend analytics.',
        challenge: 'Procurement at this scale runs on Excel and tribal knowledge. The challenge wasn\'t building a better tool — it was designing something that matched existing mental models closely enough that a 55-year-old plant manager would actually adopt it.',
        solution: 'Four months of on-site research in three countries shaped every design decision. We mapped existing spreadsheet structures directly to the data model so migration felt like an upgrade, not a replacement. Approval chains are visual and configurable without code.',
        tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Vercel'],
        outcomes: [
            { n: '83%', label: 'Manual process reduction' },
            { n: '14wk', label: 'Average implementation time' },
            { n: '€2.4M', label: 'Avg. annual spend visibility gained' },
            { n: '97%', label: 'Renewal rate' },
        ],
        img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1400',
        prev: 'verbena',
        next: 'aurum',
    },
    aurum: {
        title: 'Aurum',
        subtitle: 'Luxury jewellery brand identity & digital presence',
        category: 'Brand · Commerce',
        year: '2023',
        client: 'Aurum Jewellery',
        role: 'Brand identity, Web, Commerce',
        tags: ['Brand', 'Luxury', 'Commerce', 'Figma'],
        overview: 'End-to-end brand identity and digital presence for a new luxury jewellery brand launching across India and UAE. From naming rationale to the flagship digital boutique — every touchpoint crafted to the standard the price point demands.',
        challenge: 'Luxury brand perception is built over decades, not quarters. Launching a new luxury brand digitally — without the heritage of an established house — required every element to signal permanence, restraint, and craft from day one.',
        solution: 'We developed a visual language grounded in the geometry of the pieces themselves: precise angles, negative space, and a type system drawn from art deco proportion. The digital boutique loads in under a second and uses natural product photography shot against materials, not white cyc.',
        tech: ['Figma', 'Next.js', 'Shopify Plus', 'Sanity', 'Adobe CC', 'Framer'],
        outcomes: [
            { n: '₹4.2Cr', label: 'Revenue in launch quarter' },
            { n: '8.1%', label: 'Digital conversion rate' },
            { n: '94', label: 'Lighthouse performance' },
            { n: '2', label: 'Awards won' },
        ],
        img: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1400',
        prev: 'nordhavn',
        next: 'traxis',
    },
    traxis: {
        title: 'Traxis',
        subtitle: 'Real-time logistics dashboard for last-mile delivery',
        category: 'Fintech · Mobile',
        year: '2022',
        client: 'Traxis Logistics',
        role: 'Web, Mobile, Data',
        tags: ['Logistics', 'Mobile', 'Real-time', 'Maps'],
        overview: 'A real-time operations dashboard and driver mobile app for a last-mile delivery network operating across 12 Indian cities. Replacing WhatsApp-coordinated chaos with structured dispatch, live tracking, and automated settlement.',
        challenge: 'Coordinating 800+ drivers across 12 cities via WhatsApp messages and phone calls. No single source of truth for order status. Settlement disputes were eating 3 hours of ops team time daily.',
        solution: 'A WebSocket-driven dispatch engine pushes order assignments to drivers in under 2 seconds. The ops dashboard aggregates live GPS, delivery confirmations, and COD settlement into one view. Automated settlement reduced disputes by 91%.',
        tech: ['React', 'React Native', 'Node.js', 'WebSockets', 'PostgreSQL', 'Google Maps API'],
        outcomes: [
            { n: '<2s', label: 'Assignment delivery latency' },
            { n: '91%', label: 'Settlement dispute reduction' },
            { n: '800+', label: 'Drivers on platform' },
            { n: '3hr', label: 'Daily ops time saved' },
        ],
        img: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1400',
        prev: 'aurum',
        next: 'lumio',
    },
    lumio: {
        title: 'Lumio',
        subtitle: 'AI-powered lesson builder for K–12 educators',
        category: 'AI · SaaS · EdTech',
        year: '2022',
        client: 'Lumio Education',
        role: 'AI engineering, Full-stack',
        tags: ['AI', 'EdTech', 'SaaS', 'K-12'],
        overview: 'An AI lesson-planning assistant for K-12 teachers that turns a curriculum objective into a structured, differentiated lesson plan in under 60 seconds — complete with activities, assessments, and slide exports.',
        challenge: 'Teachers spend 7+ hours a week on lesson planning. Existing AI writing tools produce generic content with no curriculum alignment. The challenge was building AI output good enough that a teacher would trust it with their classroom.',
        solution: 'We fine-tuned output using a corpus of 40,000 high-quality lesson plans rated by teachers, combined with curriculum standard embeddings per US state and Indian board. A feedback loop lets teachers rate outputs, which feeds back into prompt refinement weekly.',
        tech: ['Python', 'OpenAI API', 'LangChain', 'Next.js', 'Supabase', 'Vercel'],
        outcomes: [
            { n: '7hr', label: 'Weekly teacher time saved' },
            { n: '60s', label: 'Lesson plan generation' },
            { n: '4.7★', label: 'Teacher satisfaction score' },
            { n: '18k+', label: 'Teachers active' },
        ],
        img: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1400',
        prev: 'traxis',
        next: 'vaulter',
    },
    vaulter: {
        title: 'Vaulter',
        subtitle: 'Crypto portfolio tracker with tax reporting',
        category: 'Fintech · Mobile',
        year: '2022',
        client: 'Vaulter Inc.',
        role: 'iOS, Android, Web',
        tags: ['Fintech', 'Crypto', 'Mobile', 'Tax'],
        overview: 'A portfolio tracking and tax reporting app for retail crypto investors, connecting to 40+ exchanges and wallets to give a single view of holdings, P&L, and tax liability in real time.',
        challenge: 'Crypto tax in India changed twice during the product\'s build. Exchange APIs are inconsistent, undocumented, and rate-limited. Users hold assets across 12+ platforms on average, and none of them talk to each other.',
        solution: 'A normalisation layer abstracts the idiosyncrasies of each exchange API into a unified transaction schema. Tax calculations update in real time as regulations change — the engine is rule-based and auditable, not a black box.',
        tech: ['React Native', 'Expo', 'Python', 'PostgreSQL', 'Redis', 'AWS Lambda'],
        outcomes: [
            { n: '40+', label: 'Exchange integrations' },
            { n: '35k+', label: 'Active portfolios tracked' },
            { n: '4.6★', label: 'App Store rating' },
            { n: '100%', label: 'Tax calculation accuracy' },
        ],
        img: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1400',
        prev: 'lumio',
        next: 'lendingflow',
    },
};

export default function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const heroRef = useRef<HTMLDivElement>(null);

    const project = projectsData[id as string] ?? projectsData['lendingflow'];
    const nextProject = projectsData[project.next];

    return (
        <div>
            <SEO
                title={`${project.title} — ${project.subtitle}`}
                description={project.overview}
                url={`https://satvixtech.com/portfolio/${id}`}
                breadcrumb={[
                    { name: 'Home', item: 'https://satvixtech.com' },
                    { name: 'Portfolio', item: 'https://satvixtech.com/portfolio' },
                    { name: project.title, item: `https://satvixtech.com/portfolio/${id}` },
                ]}
            />

            {/* ── Page hero ── */}
            <section className="page-hero" ref={heroRef}>
                <div className="wrap">
                    <div className="page-hero__eyebrow">
                        <span className="ping" />
                        {project.category}
                    </div>
                    <h1>
                        {[project.title, `<em>${project.subtitle}</em>`].map((line, i) => (
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
                        <div className="breadcrumb">
                            <Link to="/portfolio" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                                ← Portfolio
                            </Link>
                            &nbsp;/&nbsp; {project.title}
                        </div>
                        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', alignItems: 'flex-start' }}>
                            {[
                                { label: 'Client', value: project.client },
                                { label: 'Year', value: project.year },
                                { label: 'Role', value: project.role },
                            ].map(m => (
                                <div key={m.label}>
                                    <div style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--muted)', marginBottom: 6 }}>
                                        {m.label}
                                    </div>
                                    <div style={{ fontWeight: 500, fontSize: 15 }}>{m.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Hero image ── */}
            <div style={{ position: 'relative', height: '72vh', overflow: 'hidden' }}>
                <motion.img
                    src={project.img}
                    alt={project.title}
                    initial={{ scale: 1.07, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.6, ease: [0.7, 0, 0.2, 1] }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom, transparent 55%, rgba(21,17,13,0.45) 100%)',
                    pointerEvents: 'none',
                }} />
            </div>

            {/* ── Tags strip ── */}
            <div style={{ borderBottom: '1px solid var(--line)', padding: '24px 0' }}>
                <div className="wrap" style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                    {project.tags.map(t => (
                        <span key={t} style={{
                            fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase',
                            letterSpacing: '.12em', color: 'var(--ink-2)',
                            padding: '6px 14px', border: '1px solid var(--line)', borderRadius: 999,
                        }}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* ── Overview + tech ── */}
            <section className="s" style={{ padding: '120px 0', borderBottom: '1px solid var(--line)' }}>
                <div className="wrap">
                    <div className="grid md:grid-cols-2 gap-16 md:gap-20" style={{ alignItems: 'start' }}>

                        {/* Overview */}
                        <div className="reveal">
                            <div className="eyebrow" style={{ marginBottom: 32 }}>Overview</div>
                            <p style={{
                                fontFamily: 'var(--display)', fontSize: 'clamp(22px, 2.4vw, 34px)',
                                fontWeight: 400, letterSpacing: '-.02em', lineHeight: 1.3,
                                color: 'var(--ink)', margin: 0,
                            }}>
                                {project.overview}
                            </p>
                        </div>

                        {/* Tech + features */}
                        <div className="reveal" data-d="1">
                            <div className="eyebrow" style={{ marginBottom: 32 }}>Tech stack</div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 56 }}>
                                {project.tech.map(t => (
                                    <span key={t} style={{
                                        fontFamily: 'var(--mono)', fontSize: 12,
                                        padding: '8px 16px', border: '1px solid var(--line)',
                                        borderRadius: 8, color: 'var(--ink-2)',
                                        transition: 'background .25s ease, color .25s ease',
                                    }}
                                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ink)'; (e.currentTarget as HTMLElement).style.color = 'var(--bg)'; }}
                                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ''; (e.currentTarget as HTMLElement).style.color = 'var(--ink-2)'; }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Challenge & Solution ── */}
            <section style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '120px 0' }}>
                <div className="wrap">
                    <div className="s-head" style={{ marginBottom: 60 }}>
                        <div>
                            <div className="eyebrow reveal" style={{ color: 'rgba(255, 255, 255,.55)' }}>
                                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'rgba(255, 255, 255,.3)', flexShrink: 0 }} />
                                Problem &amp; approach
                            </div>
                            <h2 className="s-title reveal" data-d="1" style={{ color: 'var(--bg)', maxWidth: '14ch' }}>
                                How we <em>solved it.</em>
                            </h2>
                        </div>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255, 255, 255,.1)' }}>
                        {/* Challenge */}
                        <div className="tl-row reveal" style={{ borderBottom: '1px solid rgba(255, 255, 255,.1)', paddingTop: 48, paddingBottom: 48 }}>
                            <div className="tl-year" style={{ fontFamily: 'var(--mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255, 255, 255,.45)', fontWeight: 400 }}>
                                Challenge
                            </div>
                            <div className="tl-title" style={{ color: 'var(--bg)', fontFamily: 'var(--display)', fontSize: 'clamp(20px,2vw,28px)', fontWeight: 500, letterSpacing: '-.015em' }}>
                                The problem
                            </div>
                            <div className="tl-body" style={{ color: 'rgba(255, 255, 255,.7)', lineHeight: 1.65, maxWidth: '54ch', fontSize: 17 }}>
                                {project.challenge}
                            </div>
                        </div>

                        {/* Solution */}
                        <div className="tl-row reveal" data-d="1" style={{ paddingTop: 48, paddingBottom: 48 }}>
                            <div className="tl-year" style={{ fontFamily: 'var(--mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255, 255, 255,.45)', fontWeight: 400 }}>
                                Solution
                            </div>
                            <div className="tl-title" style={{ color: 'var(--bg)', fontFamily: 'var(--display)', fontSize: 'clamp(20px,2vw,28px)', fontWeight: 500, letterSpacing: '-.015em' }}>
                                Our approach
                            </div>
                            <div className="tl-body" style={{ color: 'rgba(255, 255, 255,.7)', lineHeight: 1.65, maxWidth: '54ch', fontSize: 17 }}>
                                {project.solution}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Outcomes ── */}
            <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '100px 0' }}>
                <div className="wrap">
                    <div className="eyebrow reveal" style={{ marginBottom: 56 }}>Results</div>
                    <div className="band-grid">
                        {project.outcomes.map((o, i) => (
                            <div key={o.label} className="reveal" data-d={String(i)}>
                                <div className="b-stat__n" style={{ color: 'var(--ink)' }}>{o.n}</div>
                                <div className="b-stat__l">{o.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Next project ── */}
            <section className="cta-section" style={{ position: 'relative' }}>
                <div className="wrap" style={{ position: 'relative' }}>
                    <div className="eyebrow reveal" style={{ color: 'rgba(255, 255, 255,.45)', justifyContent: 'center', marginBottom: 20 }}>
                        Next case study
                    </div>
                    {nextProject && (
                        <p className="reveal" data-d="0" style={{
                            fontFamily: 'var(--mono)', fontSize: 12, textTransform: 'uppercase',
                            letterSpacing: '.14em', color: 'rgba(255, 255, 255,.5)',
                            marginBottom: 16,
                        }}>
                            {nextProject.category}
                        </p>
                    )}
                    <h2 className="reveal" data-d="1" style={{ fontSize: 'clamp(36px,6vw,96px)' }}>
                        {nextProject ? nextProject.title : 'See more'} <em>→</em>
                    </h2>
                    {/* <button
                        onClick={() => navigate(`/portfolio/${project.next}`)}
                        className="big-cta reveal"
                        data-d="2"
                        data-hover
                        style={{ cursor: 'pointer', border: 'none', marginTop: 8 }}
                    >
                        View project
                        <span className="arrow">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14m-6-6 6 6-6 6" />
                            </svg>
                        </span>
                    </button> */}
                    <div style={{ marginTop: 48 }}>
                        <Link to="/portfolio" className="btn-ghost reveal" data-d="3" data-hover>
                            All work <span className="arr" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
