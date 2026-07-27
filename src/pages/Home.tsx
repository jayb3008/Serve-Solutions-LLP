import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Faq from "../components/Faq";
import ImageCursorTrail from "../components/ImageCursorTrail";
import TextReveal from "../components/TextReveal";
import RollingText from "../components/RollingText";
import GradientCard from "../components/GradientCard";
import InfiniteMarquee from "../components/InfiniteMarquee";
import { servicesData } from "../data/services";
import { industriesData } from "../data/industries";
import Squares from "../components/ui/squares";
import Magnetic from "../components/Magnetic";
import AnimateIn from "../components/AnimateIn";
import ScrollVelocityMarquee from "../components/ScrollVelocityMarquee";
import FloatingShapes from "../components/FloatingShapes";

const MotionLink = motion.create(Link);

const industryList = Object.entries(industriesData) as [
  string,
  { title: string },
][];

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

/* ── Interactive Tilt Card Wrapper ── */
function TiltCard({
  children,
  className,
  to,
}: {
  children: React.ReactNode;
  className: string;
  to: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer:coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${y * -8}deg) rotateY(${x * 8}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    }
  };

  return (
    <Link
      ref={ref}
      to={to}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-hover
      style={{
        transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </Link>
  );
}

/* ── Animated counter ── */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
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
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

type Service = {
  num: string;
  pre: string;
  em: string;
  tags: string[];
  href: string;
  isNew?: boolean;
};

const services: Service[] = [
  {
    num: "01",
    pre: "Product",
    em: "design",
    tags: ["Research", "Interaction", "Design systems", "Prototyping"],
    href: "/services",
  },
  {
    num: "02",
    pre: "Web",
    em: "engineering",
    tags: ["React & Next.js", "Headless commerce", "CMS", "Performance work"],
    href: "/services",
  },
  {
    num: "03",
    pre: "Mobile",
    em: "apps",
    tags: ["iOS", "Android", "React Native", "Flutter"],
    href: "/services",
  },
  {
    num: "04",
    pre: "AI &",
    em: "data",
    tags: ["LLM features", "RAG", "Agents", "Internal tools"],
    href: "/ai-development",
  },
  {
    num: "05",
    pre: "Brand &",
    em: "strategy",
    tags: ["Positioning", "Identity", "Naming", "Editorial"],
    href: "/services",
  },
  {
    num: "06",
    pre: "Graphic design",
    em: "& branding",
    tags: ["New", "Logo", "Print", "Social kits", "Motion"],
    href: "/graphic-design-branding",
    isNew: true,
  },
];

const workCards = [
  {
    cls: "wc-1",
    year: "2 weeks",
    tags: ["Fintech", "React Native", "Node.js", "Live"],
    title:
      "Nine Finance — a lending platform where borrowers and field agents run structured daily EMI collections through a mobile app. Shipped in two weeks; live and managing real loan portfolios.",
    href: "/portfolio/nine-finance",
    img: "/images/satvix_fintech_showcase.webp",
  },
  {
    cls: "wc-2",
    year: "4 weeks",
    tags: ["Ecommerce", "React", "Node", "MongoDB"],
    title:
      "Glamour Jewelry — a full jewelry e-commerce platform: product catalog, orders, inventory, admin dashboard. React + Node + MongoDB, shipped in four weeks, live and processing orders.",
    href: "/portfolio/glamour-jewelry",
    img: "/images/glamour-jewelry.webp",
  },
  {
    cls: "wc-3",
    year: "2 months",
    tags: ["SaaS", "Next.js", "White-label"],
    title:
      "Charotar Soap Factory — inventory, production tracking and sales orders for soap manufacturers. Designed as a reusable product we can white-label to other manufacturers. Demo on request.",
    href: "/portfolio/charotar-soap",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='%23121518'/><stop offset='1' stop-color='%230a0e12'/></linearGradient></defs><rect width='800' height='500' fill='url(%23g)'/><text x='50%25' y='50%25' fill='%23e6c667' font-family='monospace' font-size='22' text-anchor='middle' letter-spacing='4'>DEMO ON REQUEST</text></svg>",
  },
];

const bandStats = [
  { n: 3, unit: "", label: "Shipped products you can verify" },
  { n: 2, unit: " wks", label: "Fastest delivery — Nine Finance (fintech)" },
  { n: 7, unit: "+ yrs", label: "Senior MERN experience — founder-led" },
  { n: 1, unit: "", label: "Working demo, every Friday" },
];

const process = [
  {
    n: "01",
    title: "Brief",
    desc: "Two weeks of listening. We sit with you, your team, your users — until we can sketch the problem on a napkin.",
  },
  {
    n: "02",
    title: "Sketch",
    desc: "Flows, prototypes, and a visual language. We put them in front of real people before a line of production code is written.",
  },
  {
    n: "03",
    title: "Build",
    desc: "Senior engineers, two-week sprints, a demo every Friday. You always know exactly where we are.",
  },
  {
    n: "04",
    title: "Ship",
    desc: "Tested, observable, hardened. We push to production on Tuesdays — quietly, with a runbook, not crossed fingers.",
  },
  {
    n: "05",
    title: "Stay",
    desc: "Most clients keep us on for years. We measure what shipped, fix what didn’t, and keep raising the floor.",
  },
];

const techStack = [
  { cat: "Frontend", tools: "React · Next.js · TypeScript · Tailwind" },
  { cat: "Mobile", tools: "React Native · Swift · Kotlin · Flutter" },
  { cat: "Backend", tools: "Node.js · Python · PostgreSQL · GraphQL" },
  { cat: "AI / ML", tools: "LLMs · RAG · PyTorch · LangChain" },
  { cat: "Cloud", tools: "AWS · Vercel · Docker · Kubernetes" },
  { cat: "Data", tools: "Snowflake · dbt · Airflow · Redis" },
];

const caseStudies = [
  {
    n: "01",
    tag: "Fintech · React Native + Node.js · 2 weeks",
    title: "Nine Finance — a lending platform, shipped in two weeks.",
    problem:
      "A lender needed a mobile app for borrowers and field agents to run structured daily EMI collections and reconciliation.",
    approach:
      "React Native for both borrower and agent apps; Node.js backend handling EMI schedules, reconciliation and role-based access. Founder-led, senior-only build.",
    outcome:
      "Live in two weeks, currently managing active loan portfolios in production. Demonstrates our ability to move fast on regulated, mission-critical systems.",
    href: "/portfolio/nine-finance",
  },
  {
    n: "02",
    tag: "E-commerce · React + Node + MongoDB · 4 weeks",
    title: "Glamour Jewelry — a full e-commerce platform in four weeks.",
    problem:
      "A jewelry retailer needed an end-to-end online storefront: product catalog, orders, inventory and an admin dashboard.",
    approach:
      "React frontend, Node.js + Express API, MongoDB. Payments, order lifecycle, inventory, and back-office admin — all shipped as one coherent system.",
    outcome:
      "Live and processing real orders. Proves we can ship polished, transaction-heavy systems on a compressed timeline.",
    href: "/portfolio/glamour-jewelry",
  },
  {
    n: "03",
    tag: "SaaS · Next.js + Node.js · 2 months · White-label",
    title: "Charotar Soap Factory — a white-label manufacturing SaaS.",
    problem:
      "Small soap manufacturers had no affordable, focused system for production tracking, inventory and sales orders.",
    approach:
      "React + Next.js frontend, Node.js backend. Built as a reusable product from day one — modular, multi-tenant, ready to white-label.",
    outcome:
      "Proprietary product available for licensing or resale to other manufacturers and distributors. Demo on request.",
    href: "/portfolio/charotar-soap",
  },
];

const homepageFaqs = [
  {
    question: "Who actually writes the code — a senior engineer, or a junior?",
    answer:
      "You talk directly to the senior engineers who write your code. There are no account managers, no juniors learning on your budget, no handoffs between strategy, design and engineering. Every line of AI-generated code is reviewed by a senior engineer before it reaches your repo.",
  },
  {
    question: "What's the timezone overlap with US and UK teams?",
    answer:
      "Four-plus hours of overlap with US East Coast, full working-day overlap with the UK and EU. We run daily async updates on Slack or email so no one is stuck waiting, and Friday demos happen at a time that suits your team.",
  },
  {
    question: "Who owns the code and the IP?",
    answer:
      "You do — 100%, from day one. Full repository access, no escrow, no vendor lock-in. On handover we include documentation, recorded walkthroughs and transition support so your team (or a future team) can run it without us.",
  },
  {
    question: "What proof do you have — real case studies, not stock work?",
    answer:
      "Three shipped products we can show: a fintech lending platform (React Native + Node.js, two weeks, live and managing real EMI collections), a jewelry e-commerce platform (React + Node + MongoDB, four weeks, live and processing orders), and a manufacturing inventory system (React + Next.js + Node, built as a white-label product). Ask for a demo or a reference call.",
  },
  {
    question: "How do you handle contracts and invoicing with foreign clients?",
    answer:
      "We invoice in USD, GBP or INR. Standard SaaS/dev contracts, NDA-friendly, wire or Wise for payment. Engagements come in three shapes: fixed-scope for defined MVPs, monthly retainer for ongoing product work, or staff augmentation where we embed with your team.",
  },
  {
    question: "How does AI-augmented delivery help — and where is the ceiling?",
    answer:
      "We use Claude Code, Cursor and agentic workflows to move faster on scaffolding, tests, migrations and repetitive plumbing. That translates into lower cost and shorter timelines (a fintech MVP in two weeks, an e-commerce build in four). The ceiling: every AI-generated change is reviewed by a senior engineer before it touches your repo.",
  },
  {
    question: "What's the communication cadence?",
    answer:
      "Direct Slack or WhatsApp access to the engineer writing your code. Daily async updates instead of a daily standup tax. A shared project board (Linear or Jira). Staging environment from week one. A working demo every Friday.",
  },
  {
    question: "What does a project cost?",
    answer:
      "Small MVPs and fixed-scope builds typically fall between USD 3,000 and USD 12,000. Ongoing product work is billed monthly on a retainer sized to how deeply we're embedded. Scoping, timeline and pricing are in writing before you commit — no surprise invoices.",
  },
  {
    question: "Where are you based, and how do we start?",
    answer:
      "Anand, Gujarat, India. A small senior team. To start, email hello@satvixtech.com with a few sentences on what you're building and why — a real person replies within one business day.",
  },
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
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div>
      {/* Fixed scroll-drawn SVG path — hero to footer */}
      <SEO
        title="Satvix Tech Solutions — Premium Software Engineering & Digital Product Agency"
        description="Satvix Tech Solutions is a premium digital product and software engineering agency in Anand, Gujarat. We build robust web platforms, mobile apps, and custom AI systems with dedicated teams."
        keywords="Satvix Tech Solutions, AI augmented development agency, software engineering agency India, senior engineers React Native Node.js, MERN development agency, offshore engineering US UK startups, Gujarat software company, custom software India, hire senior engineers India"
        url="https://www.satvixtech.com/"
        faq={homepageFaqs}
      />

      {/* ── Hero ── */}
      <section className="hero overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-[0.10] pointer-events-none">
          <Squares
            squareSize={65}
            direction="diagonal"
            speed={0.15}
            borderColor="rgba(18, 21, 24, 0.08)"
            hoverFillColor="rgba(18, 21, 24, 0.03)"
          />
        </div>
        <div ref={orbRef} className="hero__orb" />
        <div className="hero__orb-2" />
        <FloatingShapes />
        <div className="wrap relative z-10" style={{ position: "relative" }}>
          <div className="hero__eyebrow">
            <span className="ping" />
            We build{" "}
            <RollingText
              words={[
                "web platforms",
                "mobile apps",
                "AI products",
                "SaaS tools",
                "design systems",
              ]}
              style={{
                color: "var(--accent)",
                fontStyle: "italic",
                fontFamily: "var(--display)",
                fontSize: "clamp(15px, 1.4vw, 18px)",
                textTransform: "none",
                letterSpacing: "-0.01em",
                lineHeight: 1,
              }}
            />{" "}
            that ship.
          </div>

          <h1 className="hero__title">
            {(
              [
                "Digital product agency.",
                "Engineering-grade.",
                "<em>Built to scale.</em>",
              ] as const
            ).map((line, i) => (
              <span key={i} className="row">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease, delay: 0.4 + i * 0.08 }}
                  style={{ display: "inline-block" }}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              </span>
            ))}
          </h1>

          <AnimateIn direction="up" delay={0.8}>
            <div className="hero__foot">
              <p>
                A premium digital product and software engineering agency in Anand. 
                We combine senior developers, UI/UX designers, and QA with dedicated 
                project management. Fintech shipped in two weeks. Ask for a demo.
              </p>
              <Magnetic>
                <Link to="/portfolio" className="cta-btn" data-hover>
                  See the case studies <span className="dot" />
                </Link>
              </Magnetic>
              <div className="stats">
                <div>
                  <div className="stat__num">
                    <CountUp to={2} />
                    <span style={{ fontSize: "0.55em", marginLeft: 4 }}>wks</span>
                  </div>
                  <div className="stat__lbl">Fastest delivery — Nine Finance</div>
                </div>
                <div>
                  <div className="stat__num">
                    <CountUp to={3} />
                  </div>
                  <div className="stat__lbl">Shipped products, verifiable</div>
                </div>
                <div>
                  <div className="stat__num">
                    <CountUp to={7} />
                    <span style={{ fontSize: "0.55em", marginLeft: 4 }}>+ yrs</span>
                  </div>
                  <div className="stat__lbl">Senior MERN, founder-led</div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
        <div className="scroll-ind">
          Scroll <span className="line" />
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((i) => (
            <span key={i} className="marquee__item">
              {Object.values(servicesData).map((service, idx) => (
                <span key={service.title}>
                  {service.title}
                  {idx % 2 === 0 ? (
                    <span className="star">✦</span>
                  ) : (
                    <span className="star">✦</span>
                  )}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Tech marquee (reversed) ── */}
      <div style={{ background: "var(--ink)", overflow: "hidden" }}>
        <InfiniteMarquee
          items={[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Python",
            "Flutter",
            "AWS",
            "PostgreSQL",
            "Figma",
            "Docker",
            "GraphQL",
            "TailwindCSS",
          ]}
          direction="right"
          speed={28}
          separator="·"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "18px 0",
            color: "rgba(255,255,255,0.55)",
          }}
        />
      </div>

      {/* ── Velocity marquee ── */}
      <div style={{ overflow: "hidden", pointerEvents: "none" }}>
        <ScrollVelocityMarquee text="Web · Mobile · AI · SaaS · Fintech · Healthcare · Design · Engineering · Craft" baseSpeed={1.2} />
      </div>

      {/* ── Services ── */}
      <section
        className="s services"
        id="services"
        style={{ borderTop: "1px solid var(--line)" }}
      >
        <div className="wrap">
          <div className="s-head">
            <AnimateIn direction="up">
              <div>
                <div className="eyebrow reveal">What we do</div>
                <h2 className="s-title" data-d="1">
                  One team. Six disciplines. <em>Zero handoffs.</em>
                </h2>
              </div>
            </AnimateIn>
            <p
              className="reveal"
              data-d="2"
              style={{
                maxWidth: "32ch",
                color: "var(--ink-2)",
                fontSize: 16,
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              Strategy, design and engineering at one table, for the whole
              build. No briefs thrown over walls. No agency relay race.
            </p>
          </div>

          <div style={{ borderTop: "1px solid var(--line)" }}>
            {services.map((svc, i) => (
              <MotionLink
                key={svc.num}
                to={svc.href}
                className="svc"
                data-hover
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
              >
                <div className="svc__num">{svc.num}</div>
                <div className="svc__name">
                  {svc.pre} <em>{svc.em}</em>
                </div>
                <div className="svc__tags">
                  {svc.tags.map((t) => (
                    <span
                      key={t}
                      className={t === "New" ? "tag-new" : undefined}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="svc__arrow">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </div>
              </MotionLink>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expanded SEO Keywords & Competencies ── */}
      <section className="py-20 border-b border-[var(--line)] bg-[var(--bg-2)]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="eyebrow">Enterprise Delivery</span>
              <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[var(--ink)] leading-none mt-6">
                Custom software &amp; digital products built <em>to last.</em>
              </h2>
              <p className="text-[var(--ink-2)] text-base sm:text-lg leading-relaxed mt-8">
                Satvix Tech Solutions is a premium <strong>digital product and software engineering agency</strong> in Anand, Gujarat. We integrate expert UI/UX design, senior software development, and structured QA with dedicated project managers to ensure seamless end-to-end product delivery.
              </p>
              <p className="text-[var(--ink-2)] text-base leading-relaxed mt-6">
                We build for founders and agencies in the US, UK, EU and Australia. Four-plus hours overlap with US East, full working-day overlap with the UK. Full repo access from day one, USD/GBP/INR invoicing, NDA-friendly contracts.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="text-lg font-bold text-[var(--ink)]">Web Engineering &amp; Next.js</h3>
                <p className="text-[var(--ink-2)] text-sm leading-relaxed mt-3">
                  We operate as a high-fidelity <strong>web development company</strong> focusing on custom web portals, headless e-commerce, and SaaS dashboards. We build lightweight interfaces that pass Core Web Vitals audits.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--ink)]">Mobile App Development</h3>
                <p className="text-[var(--ink-2)] text-sm leading-relaxed mt-3">
                  Our team specializes in native iOS, Android, and cross-platform <strong>React Native development</strong>. We integrate local SQLite storage, background location sensors, and push channels for real-world reliability.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--ink)]">AI &amp; Machine Learning</h3>
                <p className="text-[var(--ink-2)] text-sm leading-relaxed mt-3">
                  As an independent <strong>AI development company</strong>, we construct custom LLM integrations, Retrieval-Augmented Generation (RAG) databases, and autonomous task agents with strict token budgets and evaluation harnesses.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--ink)]">UI/UX Design &amp; Strategy</h3>
                <p className="text-[var(--ink-2)] text-sm leading-relaxed mt-3">
                  Our <strong>UI UX design agency</strong> creates documented design systems and interactive prototypes. We write design tokens in Figma and hand them off in JSON format directly to our frontend engineers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--ink)]">Digital Growth &amp; SEO</h3>
                <p className="text-[var(--ink-2)] text-sm leading-relaxed mt-3">
                  We combine engineering with marketing. Our <strong>digital marketing company</strong> and <strong>SEO agency India</strong> practices implement technical site speed optimization, schema hierarchies, and dynamic lead funnels.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--ink)]">Custom Software Consulting</h3>
                <p className="text-[var(--ink-2)] text-sm leading-relaxed mt-3">
                  We draft technical specifications, API structures, database schemas, and cloud architectures (AWS / Docker) in our initial discovery sprints, eliminating downstream engineering risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design Spotlight ── */}
      <section className="design-feat">
        {/* Brand palette strip — communicates color range */}
        <div className="palette-strip" aria-hidden="true">
          {[
            "#E31E24",
            "#D4380D",
            "#D46B08",
            "#D4B106",
            "#389E0D",
            "#0958D9",
            "#531DAB",
            "#121518",
          ].map((c) => (
            <span key={c} style={{ background: c }} />
          ))}
        </div>
        <div className="wrap">
          <div className="design-feat__inner">
            {/* Left: copy */}
            <div>
              <div
                className="eyebrow reveal"
                style={{ color: "rgba(255,255,255,.5)" }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 24,
                    height: 1,
                    background: "rgba(255,255,255,.3)",
                    flexShrink: 0,
                  }}
                />
                New service
              </div>
              <h2
                className="s-title reveal"
                data-d="1"
                style={{ color: "var(--bg)", marginTop: 20, maxWidth: "14ch" }}
              >
                Design that earns <em>attention.</em>
              </h2>
              <p
                className="reveal"
                data-d="2"
                style={{
                  color: "rgba(255,255,255,.6)",
                  fontSize: 17,
                  lineHeight: 1.6,
                  maxWidth: "38ch",
                  marginTop: 28,
                  marginBottom: 0,
                }}
              >
                Logo systems, print collateral, social media kits, packaging,
                and motion graphics — everything a brand needs to look
                intentional at every size and on every surface.
              </p>
              <div style={{ marginTop: 40 }}>
                <Magnetic>
                  <Link
                    to="/graphic-design-branding"
                    className="cta-btn reveal"
                    data-d="3"
                    data-hover
                    style={{ background: "var(--accent)", color: "var(--ink)" }}
                  >
                    Explore the service{" "}
                    <span
                      className="dot"
                      style={{ background: "var(--ink)" }}
                    />
                  </Link>
                </Magnetic>
              </div>
            </div>
            {/* Right: 2×2 discipline cards */}
            <div className="design-feat-cards">
              {[
                {
                  num: "01",
                  title: "Brand identity",
                  tags: ["Logo", "Colour", "Type"],
                  bg: "linear-gradient(145deg, #1f0808, #121518)",
                },
                {
                  num: "02",
                  title: "Print & collateral",
                  tags: ["Packaging", "Stationery", "Brochures"],
                  bg: "linear-gradient(145deg, #0f1a0a, #121518)",
                },
                {
                  num: "03",
                  title: "Digital & social",
                  tags: ["Templates", "Ad creatives", "Banners"],
                  bg: "linear-gradient(145deg, #080f1f, #121518)",
                },
                {
                  num: "04",
                  title: "Motion & video",
                  tags: ["Animation", "Reels", "Lottie"],
                  bg: "linear-gradient(145deg, #110818, #121518)",
                },
              ].map((c, i) => (
                <motion.div
                  key={c.num}
                  className="design-feat-card"
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  style={{ background: c.bg }}
                >
                  <div className="design-feat-card__num">{c.num}</div>
                  <div className="design-feat-card__body">
                    <div className="design-feat-card__title">{c.title}</div>
                    <div className="design-feat-card__tags">
                      {c.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section
        className="s"
        id="industries"
        style={{ borderTop: "1px solid var(--line)" }}
      >
        <div className="wrap">
          <div className="s-head">
            <AnimateIn direction="up">
              <div>
                <div className="eyebrow reveal">Who we build for</div>
                <h2 className="s-title" data-d="1">
                  Seventeen industries. <em>One agency.</em>
                </h2>
              </div>
            </AnimateIn>
            <p
              className="reveal"
              data-d="2"
              style={{
                maxWidth: "34ch",
                color: "var(--ink-2)",
                fontSize: 16,
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              Fintech, health, logistics, education, AI. We pair engineering
              with people who have actually worked inside the domain — so the
              software does something measurable, not something photogenic.
            </p>
          </div>

          <AnimateIn direction="up" delay={0.2}>
            <div
              style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 8 }}
            >
              {industryList.map(([key, ind], index) => (
                <MotionLink
                  key={key}
                  to={`/industries/${key}`}
                  data-hover
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: index * 0.04, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    padding: "10px 18px",
                    border: "1px solid var(--line)",
                    borderRadius: 999,
                    color: "var(--ink-2)",
                    textDecoration: "none",
                    transition:
                      "background .2s ease, color .2s ease, border-color .2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--ink)";
                    e.currentTarget.style.color = "var(--bg)";
                    e.currentTarget.style.borderColor = "var(--ink)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "";
                    e.currentTarget.style.color = "var(--ink-2)";
                    e.currentTarget.style.borderColor = "var(--line)";
                  }}
                >
                  {ind.title}
                </MotionLink>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Work ── */}
      <ImageCursorTrail
        className="s"
        style={{
          background: "var(--ink)",
          color: "var(--bg)",
        }}
      >
        <div className="wrap">
          <div className="s-head">
            <div>
              <div
                className="eyebrow reveal"
                style={{ color: "rgba(255, 255, 255,.6)" }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 24,
                    height: 1,
                    background: "rgba(255, 255, 255,.4)",
                    flexShrink: 0,
                  }}
                />
                Selected work
              </div>
              <h2
                className="s-title reveal"
                data-d="1"
                style={{ color: "var(--bg)" }}
              >
                Built with teams who <em>actually ship.</em>
              </h2>
            </div>
            <Magnetic>
              <Link
                to="/portfolio"
                className="cta-btn reveal"
                data-d="2"
                data-hover
                style={{ background: "var(--accent)", color: "var(--ink)" }}
              >
                Browse the archive{" "}
                <span className="dot" style={{ background: "var(--ink)" }} />
              </Link>
            </Magnetic>
          </div>

          <div className="work-grid">
            {workCards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.06, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              >
              <TiltCard
                to={c.href}
                className={`work-card ${c.cls} reveal`}
              >
                <div
                  className="work-card__bg"
                  role="img"
                  aria-label={`Showcase screenshot of ${c.title}`}
                  style={{
                    background: `linear-gradient(rgba(10, 8, 6, 0.48), rgba(10, 8, 6, 0.48)), url(${c.img}) center/cover no-repeat`,
                  }}
                />
                <div
                  className="work-card__inner"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className="work-card__meta">
                    <span>{c.year}</span>
                    {c.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="work-card__title">{c.title}</div>
                </div>
                <div
                  className="work-card__cta"
                  style={{ transform: "translateZ(45px)" }}
                >
                  ↗
                </div>
              </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </ImageCursorTrail>

      {/* ── Statement reveal ── */}
      <section
        className="s"
        style={{
          borderTop: "1px solid var(--line)",
          background: "var(--bg-2)",
        }}
      >
        <div className="wrap">
          <TextReveal text="We believe great software is not about technology. It is about helping real people accomplish something they could not do before." />
        </div>
      </section>

      {/* ── Process ── */}
      <section className="s" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="s-head">
            <AnimateIn direction="up">
              <div>
                <div className="eyebrow reveal">The Satvix Process</div>
                <h2 className="s-title" data-d="1">
                  Brief. Sketch. Build. Ship. <em>Stay.</em>
                </h2>
              </div>
            </AnimateIn>
            <p
              className="reveal"
              data-d="2"
              style={{
                maxWidth: "32ch",
                color: "var(--ink-2)",
                fontSize: 16,
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              Five stages. No surprise invoices, no dark Slack channels. You see
              the demo every Friday, and the bill every two weeks.
            </p>
          </div>
          <div className="tl-rows">
            {process.map((p, i) => (
              <motion.div
                key={p.n}
                className="tl-row"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              >
                <div className="tl-year">{p.n}</div>
                <div className="tl-title">{p.title}</div>
                <div className="tl-body">{p.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech stack ── */}
      <section
        className="s"
        style={{
          background: "var(--bg-2)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="wrap">
          <div className="s-head">
            <AnimateIn direction="up">
              <div>
                <div className="eyebrow reveal">The stack</div>
                <h2 className="s-title" data-d="1">
                  Boring tools, used <em>well.</em>
                </h2>
              </div>
            </AnimateIn>
            <p
              className="reveal"
              data-d="2"
              style={{
                maxWidth: "32ch",
                color: "var(--ink-2)",
                fontSize: 16,
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              No framework religion here. We pick whatever the team can still
              maintain after we’ve gone home, and we keep up with the field so
              you don’t have to.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 12,
            }}
          >
            {techStack.map((t, i) => (
              <GradientCard
                key={t.cat}
                className="reveal"
                data-d={String(i % 4)}
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--line)",
                  borderRadius: 14,
                  padding: "24px 26px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 12,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "var(--accent)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: ".14em",
                      color: "var(--muted)",
                    }}
                  >
                    {t.cat}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 20,
                    fontWeight: 500,
                    letterSpacing: "-.01em",
                    lineHeight: 1.35,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {t.tools}
                </div>
              </GradientCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case studies (Problem / Approach / Outcome) ── */}
      <section className="s" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="s-head">
            <AnimateIn direction="up">
              <div>
                <div className="eyebrow reveal">Case studies</div>
                <h2 className="s-title" data-d="1">
                  Three shipped products. <em>All verifiable.</em>
                </h2>
              </div>
            </AnimateIn>
            <p
              className="reveal"
              data-d="2"
              style={{
                maxWidth: "34ch",
                color: "var(--ink-2)",
                fontSize: 16,
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              Problem, approach, outcome. Real timelines, real stacks, real
              users. Ask for a demo or a reference call — we encourage it.
            </p>
          </div>
          <div style={{ display: "grid", gap: 20 }}>
            {caseStudies.map((c, i) => (
              <motion.div
                key={c.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: 14,
                  padding: "36px clamp(24px,3vw,44px)",
                  background: "var(--bg)",
                  display: "grid",
                  gap: 20,
                  gridTemplateColumns: "minmax(0, 1fr)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 12,
                        color: "var(--muted)",
                        letterSpacing: ".14em",
                      }}
                    >
                      {c.n}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: ".12em",
                        color: "var(--ink-2)",
                      }}
                    >
                      {c.tag}
                    </span>
                  </div>
                  <Link
                    to={c.href}
                    data-hover
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: ".12em",
                      color: "var(--ink)",
                      textDecoration: "none",
                    }}
                  >
                    Read case study →
                  </Link>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: "clamp(22px, 2.4vw, 32px)",
                    fontWeight: 500,
                    letterSpacing: "-.02em",
                    lineHeight: 1.25,
                    margin: 0,
                    color: "var(--ink)",
                  }}
                >
                  {c.title}
                </h3>
                <div
                  style={{
                    display: "grid",
                    gap: 20,
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    borderTop: "1px solid var(--line)",
                    paddingTop: 24,
                  }}
                >
                  {[
                    { k: "Problem", v: c.problem },
                    { k: "Approach", v: c.approach },
                    { k: "Outcome", v: c.outcome },
                  ].map((r) => (
                    <div key={r.k}>
                      <div
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: 11,
                          textTransform: "uppercase",
                          letterSpacing: ".14em",
                          color: "var(--muted)",
                          marginBottom: 10,
                        }}
                      >
                        {r.k}
                      </div>
                      <p
                        style={{
                          margin: 0,
                          color: "var(--ink-2)",
                          fontSize: 15,
                          lineHeight: 1.55,
                        }}
                      >
                        {r.v}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI-augmented positioning ── */}
      <section
        className="s"
        style={{
          background: "var(--bg-2)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="wrap">
          <div className="s-head">
            <AnimateIn direction="up">
              <div>
                <div className="eyebrow reveal">How we deliver in weeks</div>
                <h2 className="s-title" data-d="1">
                  AI-augmented, senior-reviewed. <em>Both, not either.</em>
                </h2>
              </div>
            </AnimateIn>
            <p
              className="reveal"
              data-d="2"
              style={{
                maxWidth: "34ch",
                color: "var(--ink-2)",
                fontSize: 16,
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              We use Claude Code, Cursor and agentic workflows to move faster on
              scaffolding, tests, migrations and plumbing. Every AI-generated
              change is reviewed by a senior engineer before it reaches your
              repo. That is how we ship fintech in two weeks without cutting
              corners.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gap: 12,
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            {[
              {
                k: "Faster delivery",
                v: "MVPs in two to four weeks, not two to four quarters.",
              },
              {
                k: "Lower cost",
                v: "Less time on repetitive plumbing means smaller invoices for the same outcome.",
              },
              {
                k: "Senior review, always",
                v: "No unreviewed AI output lands in your codebase. A human reads every diff.",
              },
              {
                k: "Direct access",
                v: "Slack or WhatsApp with the engineer writing your code. No relay.",
              },
            ].map((r) => (
              <div
                key={r.k}
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: 14,
                  padding: "22px 24px",
                  background: "var(--bg)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: ".14em",
                    color: "var(--muted)",
                    marginBottom: 10,
                  }}
                >
                  {r.k}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--display)",
                    fontSize: 18,
                    letterSpacing: "-.01em",
                    lineHeight: 1.4,
                    color: "var(--ink)",
                  }}
                >
                  {r.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team: founder-led ── */}
      <section
        style={{
          background: "var(--ink)",
          color: "var(--bg)",
          padding: "120px 0",
          borderTop: "1px solid rgba(255,255,255,.06)",
        }}
      >
        <div className="wrap">
          <div className="s-head" style={{ marginBottom: 40 }}>
            <div>
              <div
                className="eyebrow reveal"
                style={{ color: "rgba(255,255,255,.5)" }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 24,
                    height: 1,
                    background: "rgba(255,255,255,.3)",
                    flexShrink: 0,
                  }}
                />
                Who you're working with
              </div>
              <h2
                className="s-title reveal"
                data-d="1"
                style={{ color: "var(--bg)" }}
              >
                Digital product agency. <em>Senior by design.</em>
              </h2>
            </div>
            <Magnetic>
              <Link
                to="/about"
                className="btn-ghost reveal"
                data-d="2"
                data-hover
                style={{
                  color: "var(--bg)",
                  borderColor: "rgba(255,255,255,.25)",
                }}
              >
                More about the agency <span className="arr" />
              </Link>
            </Magnetic>
          </div>
          <div
            style={{
              display: "grid",
              gap: 24,
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              maxWidth: 1100,
            }}
          >
            {[
              {
                k: "Expertise",
                title: "Senior Engineering",
                body:
                  "Our team brings deep enterprise MERN stack expertise — MongoDB, Express, React, Node. Every engagement benefits from robust architecture design and thorough code reviews.",
              },
              {
                k: "The Team",
                title: "Full-Service Delivery",
                body:
                  "Engineers, designers, QA, and project managers — all working together in-house. No rotating cast of freelancers. We scale resources dynamically to fit your roadmap.",
              },
              {
                k: "Our Process",
                title: "Structured Project Management",
                body:
                  "Dedicated delivery management, daily async progress updates, weekly demos, and transparent communication. Full code repository access from day one.",
              },
            ].map((r, i) => (
              <motion.div
                key={r.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: 14,
                  padding: "28px 26px",
                  background: "rgba(255,255,255,.02)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: ".14em",
                    color: "rgba(255,255,255,.5)",
                    marginBottom: 14,
                  }}
                >
                  {r.k}
                </div>
                <div
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 22,
                    fontWeight: 500,
                    letterSpacing: "-.01em",
                    lineHeight: 1.25,
                    marginBottom: 12,
                    color: "var(--bg)",
                  }}
                >
                  {r.title}
                </div>
                <p
                  style={{
                    margin: 0,
                    color: "rgba(255,255,255,.65)",
                    fontSize: 15,
                    lineHeight: 1.6,
                  }}
                >
                  {r.body}
                </p>
              </motion.div>
            ))}
          </div>
          <p
            className="reveal"
            style={{
              marginTop: 40,
              fontFamily: "var(--mono)",
              fontSize: 13,
              color: "rgba(255,255,255,.55)",
              letterSpacing: ".02em",
              maxWidth: "60ch",
            }}
          >
            Based in Anand, Gujarat. Working with founders and agencies in the
            US, UK, EU and Australia. Four-plus hours overlap with US East;
            full working-day overlap with the UK.
          </p>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="band" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="band-grid">
            {bandStats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 18 }}
              >
                <div className="b-stat__n">
                  <CountUp to={s.n} />
                  <span className="unit">{s.unit}</span>
                </div>
                <div className="b-stat__l">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <Faq
        faqs={homepageFaqs}
        sub="The questions foreign founders ask before writing a first email. If yours is not here, write anyway — hello@satvixtech.com, one senior engineer, one business day."
      />

      {/* ── CTA ── */}
      <section className="cta-section relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none">
          <Squares
            squareSize={60}
            direction="up"
            speed={0.08}
            borderColor="#ffffff"
          />
        </div>
        <div className="wrap relative z-10" style={{ position: "relative" }}>
          <div
            className="eyebrow reveal"
            style={{
              color: "rgba(255, 255, 255,.55)",
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            One inbox, one human, no funnel
          </div>
          <h2 className="reveal" data-d="1">
            Got something worth <em>building?</em>
          </h2>
          <Magnetic>
            <a
              href="mailto:hello@satvixtech.com"
              className="big-cta reveal"
              data-d="2"
              data-hover
            >
              hello@satvixtech.com
              <span className="arrow">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </span>
            </a>
          </Magnetic>
        </div>
      </section>
    </div>
  );
}
