import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  ClipboardCheck,
  Code2,
  Compass,
  Gauge,
  Layers,
  MessagesSquare,
  Palette,
  PenTool,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import SEO from "../components/SEO";
import RevealText from "../components/ui/reveal-text";
import Faq from "../components/Faq";
import RollingText from "../components/RollingText";
import InfiniteMarquee from "../components/InfiniteMarquee";
import Spotlight from "../components/ui/spotlight";
import MarqueeCta from "../components/ui/marquee-cta";
import StackingCards from "../components/ui/stacking-cards";
import ParallaxShots from "../components/ui/parallax-shots";
import SectionHead from "../components/ui/section-head";
import { ease, rise } from "../lib/motion";
import { industriesData } from "../data/industries";
import { activeIndustryKeys, industryPath } from "../data/routes";

const MotionLink = motion.create(Link);

// Active verticals only, each at its canonical URL (see data/routes.ts).
const industryList = activeIndustryKeys().map(
  (k) => [k, industriesData[k] as { title: string }] as const,
);

/* ── Animated counter ── */
/* These are the page's proof numbers, so the prerendered HTML has to carry
   them: starting the state at 0 shipped `<span>0</span>` to every crawler and
   to anyone with JS off — "0 shipped products" under a heading arguing the
   opposite. State starts at the real value (SSR and hydration agree), and the
   client resets to 0 in a layout effect, before paint, so the count-up still
   plays with no flash of the final number. */
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(to);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reduced motion: leave the number where the server put it.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setVal(0);
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

const heroStats = [
  { n: 4, unit: "", label: "shipped products" },
  { n: 2, unit: " wks", label: "fintech MVP" },
  { n: 7, unit: "+ yrs", label: "senior MERN" },
];

const heroShots = [
  {
    img: "/images/glamour-jewelry.webp",
    alt: "Glamour Jewelry storefront",
    href: "/portfolio/glamour-jewelry",
  },
  {
    img: "/images/satvix_fintech_showcase.webp",
    alt: "Nine Finance borrower and agent apps",
    href: "/portfolio/nine-finance",
  },
  {
    img: "/images/charotar-soap.webp",
    alt: "Charotar Soap Factory manufacturing SaaS",
    href: "/portfolio/charotar-soap",
  },
];

const techMarquee = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "React Native",
  "Python",
  "Flutter",
  "AWS",
  "PostgreSQL",
  "MongoDB",
  "Figma",
  "Docker",
  "GraphQL",
  "Tailwind CSS",
];

const workCards = [
  {
    year: "2 weeks",
    tags: ["Fintech", "React Native", "Node.js", "Live"],
    title: "Nine Finance",
    desc: "Daily EMI collections, borrower and agent apps.",
    href: "/portfolio/nine-finance",
    img: "/images/satvix_fintech_showcase.webp",
    tint: "from-[#2a0a0b]",
  },
  {
    year: "4 weeks",
    tags: ["Ecommerce", "React", "Node", "MongoDB"],
    title: "Glamour Jewelry",
    desc: "Storefront, orders and inventory in one.",
    href: "/portfolio/glamour-jewelry",
    img: "/images/glamour-jewelry.webp",
    tint: "from-[#221a10]",
  },
  {
    year: "2 months",
    tags: ["SaaS", "Next.js", "White-label"],
    title: "Charotar Soap Factory",
    desc: "White-label manufacturing SaaS.",
    href: "/portfolio/charotar-soap",
    img: "/images/charotar-soap.webp",
    tint: "from-[#0c1a24]",
  },
  {
    year: "3 weeks",
    tags: ["SaaS", "React Native", "Node.js"],
    title: "Shreeji HRMS",
    desc: "Attendance, payroll and ledgers, in Gujarati.",
    href: "/portfolio/shreeji-hrms",
    img: "/images/shreeji-hrms.webp",
    tint: "from-[#141022]",
  },
];

const bandStats = [
  { n: 4, unit: "", label: "Shipped products you can verify" },
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
  { Icon: Code2, cat: "Frontend", tools: "React · Next.js · TypeScript · Tailwind" },
  { Icon: Smartphone, cat: "Mobile", tools: "React Native · Swift · Kotlin · Flutter" },
  { Icon: Workflow, cat: "Backend", tools: "Node.js · Python · PostgreSQL · GraphQL" },
  { Icon: BrainCircuit, cat: "AI / ML", tools: "LLMs · RAG · PyTorch · LangChain" },
  { Icon: Zap, cat: "Cloud", tools: "AWS · Vercel · Docker · Kubernetes" },
  { Icon: Layers, cat: "Data", tools: "Snowflake · dbt · Airflow · Redis" },
];

const capabilities = [
  {
    Icon: Code2,
    title: "Web Engineering & Next.js",
    body: (
      <>
        We operate as a high-fidelity <strong>web development company</strong>{" "}
        focusing on custom web portals, headless e-commerce, and SaaS
        dashboards. We build lightweight interfaces that pass Core Web Vitals
        audits.
      </>
    ),
  },
  {
    Icon: Smartphone,
    title: "Mobile App Development",
    body: (
      <>
        Our team specializes in native iOS, Android, and cross-platform{" "}
        <strong>React Native development</strong>. We integrate local SQLite
        storage, background location sensors, and push channels for real-world
        reliability.
      </>
    ),
  },
  {
    Icon: BrainCircuit,
    title: "AI & Machine Learning",
    body: (
      <>
        As an independent <strong>AI development company</strong>, we construct
        custom LLM integrations, Retrieval-Augmented Generation (RAG) databases,
        and autonomous task agents with strict token budgets and evaluation
        harnesses.
      </>
    ),
  },
  {
    Icon: PenTool,
    title: "UI/UX Design & Strategy",
    body: (
      <>
        Our <strong>UI UX design agency</strong> creates documented design
        systems and interactive prototypes. We write design tokens in Figma and
        hand them off in JSON format directly to our frontend engineers.
      </>
    ),
  },
  {
    Icon: TrendingUp,
    title: "Digital Growth & SEO",
    body: (
      <>
        We combine engineering with marketing. Our{" "}
        <strong>digital marketing company</strong> and{" "}
        <strong>SEO agency India</strong> practices implement technical site
        speed optimization, schema hierarchies, and dynamic lead funnels.
      </>
    ),
  },
  {
    Icon: Compass,
    title: "Custom Software Consulting",
    body: (
      <>
        We draft technical specifications, API structures, database schemas,
        and cloud architectures (AWS / Docker) in our initial discovery sprints,
        eliminating downstream engineering risk.
      </>
    ),
  },
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
  {
    n: "04",
    tag: "SaaS · React Native + Node.js · 3 weeks",
    title: "Shreeji HRMS — HR, payroll and ledgers for a daily-wage business.",
    problem:
      "A small trading business ran attendance, daily-wage salary, staff advances and customer credit on paper — in Gujarati, across three notebooks that never agreed with each other.",
    approach:
      "React Native app with two sign-ins: an owner cockpit and an employee view. One-tap attendance, payroll from payable days x daily rate, advances deducted at payout, customer credit ledger and an income-expense daybook — in Gujarati, Hindi and English.",
    outcome:
      "Live and running the business end to end: staff, payroll and accounting in one app the owner and the workers both use in their own language.",
    href: "/portfolio/shreeji-hrms",
  },
];

const aiPoints = [
  {
    Icon: Rocket,
    k: "Faster delivery",
    v: "MVPs in two to four weeks, not two to four quarters.",
  },
  {
    Icon: Gauge,
    k: "Lower cost",
    v: "Less time on repetitive plumbing means smaller invoices for the same outcome.",
  },
  {
    Icon: ShieldCheck,
    k: "Senior review, always",
    v: "No unreviewed AI output lands in your codebase. A human reads every diff.",
  },
  {
    Icon: MessagesSquare,
    k: "Direct access",
    v: "Slack or WhatsApp with the engineer writing your code. No relay.",
  },
];

const team = [
  {
    Icon: Code2,
    k: "Expertise",
    title: "Senior Engineering",
    body: "Our team brings deep enterprise MERN stack expertise — MongoDB, Express, React, Node. Every engagement benefits from robust architecture design and thorough code reviews.",
  },
  {
    Icon: Users,
    k: "The Team",
    title: "Full-Service Delivery",
    body: "Engineers, designers, QA, and project managers — all working together in-house. No rotating cast of freelancers. We scale resources dynamically to fit your roadmap.",
  },
  {
    Icon: ClipboardCheck,
    k: "Our Process",
    title: "Structured Project Management",
    body: "Dedicated delivery management, daily async progress updates, weekly demos, and transparent communication. Full code repository access from day one.",
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
      "Four shipped products we can show: a fintech lending platform (React Native + Node.js, two weeks, live and managing real EMI collections), a jewelry e-commerce platform (React + Node + MongoDB, four weeks, live and processing orders), a manufacturing inventory system (React + Next.js + Node, built as a white-label product), and a bilingual HRMS app for small businesses (React Native + Node.js, three weeks, running attendance, payroll and ledgers). Ask for a demo or a reference call.",
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

/* Bento tile chrome shared by the services grid. */
const tile =
  "group relative flex min-h-[260px] flex-col overflow-hidden rounded-[24px] border p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1";
const tileLight =
  "border-[var(--line)] bg-white hover:shadow-[0_24px_60px_-30px_rgba(10,10,12,0.35)]";
const tileDark = "border-white/10 bg-[var(--dark)] text-white";

function TileArrow({ light }: { light?: boolean }) {
  return (
    <span
      className={`absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full border transition-all duration-300 group-hover:rotate-45 ${
        light
          ? "border-white/15 bg-white/5 text-white group-hover:bg-white group-hover:text-[var(--ink)]"
          : "border-[var(--line)] text-[var(--ink)] group-hover:border-[var(--ink)] group-hover:bg-[var(--ink)] group-hover:text-white"
      }`}
    >
      <ArrowUpRight size={18} />
    </span>
  );
}

function Tags({ items, light }: { items: string[]; light?: boolean }) {
  return (
    <div className="mt-4 flex flex-wrap gap-1.5">
      {items.map((t) => (
        <span
          key={t}
          className={`rounded-full px-2.5 py-1 text-[12px] font-medium ${
            light ? "bg-white/10 text-white/80" : "bg-[var(--bg-2)] text-[var(--ink-2)]"
          }`}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Title stays under ~60 characters so Google renders all of it, and the
          description under 158 so clampDescription() never has to cut it
          mid-phrase ("...mobile apps, and custom…"). */}
      <SEO
        title="Satvix Tech Solutions — Digital Product & Software Agency"
        description="Digital product and software engineering agency in Anand, Gujarat. Senior MERN teams building web platforms, mobile apps and AI systems that ship."
        keywords="Satvix Tech Solutions, AI augmented development agency, software engineering agency India, senior engineers React Native Node.js, MERN development agency, offshore engineering US UK startups, Gujarat software company, custom software India, hire senior engineers India"
        url="https://www.satvixtech.com/"
        faq={homepageFaqs}
      />

      {/* ── Hero (light) ── */}
      <Spotlight className="home-hero">
        <div className="wrap relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="stat-pill beam"
          >
            {heroStats.map((s) => (
              <span key={s.label}>
                <strong>
                  <CountUp to={s.n} />
                  {s.unit}
                </strong>{" "}
                {s.label}
              </span>
            ))}
            <span className="max-sm:hidden">
              <strong>Fri</strong> demos
            </span>
          </motion.div>

          <h1 className="home-hero__title">
            <span className="block">Digital product agency.</span>
            <span className="block">
              Engineering‑grade. <em>Built to scale.</em>
            </span>
          </h1>

          <p className="home-hero__sub">
            A premium digital product and software engineering agency in Anand.
            We combine senior developers, UI/UX designers, and QA with dedicated
            project management. Fintech shipped in two weeks. Ask for a demo.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="cta-btn !px-6 !py-3.5" data-hover>
              Start a project <span className="dot" />
            </Link>
            <Link to="/portfolio" className="btn-outline" data-hover>
              See the case studies <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="home-hero__rolling">
            We build{" "}
            <RollingText
              words={[
                "web platforms",
                "mobile apps",
                "AI products",
                "SaaS tools",
                "design systems",
              ]}
              style={{ color: "var(--accent)", fontWeight: 600 }}
            />{" "}
            that ship.
          </div>

          {/* Fanned product shots — real screenshots, linked to their case
              studies, so the first screen shows work, not decoration. */}
          <ParallaxShots shots={heroShots} />
        </div>
      </Spotlight>

      {/* ── Stack marquee ── */}
      <div className="logo-strip">
        <p>Production stack we ship with</p>
        <InfiniteMarquee
          items={techMarquee}
          speed={40}
          separator="•"
          className="logo-strip__marquee"
        />
      </div>

      {/* ── Services bento (light) ── */}
      <section className="s" id="services">
        <div className="wrap">
          <SectionHead
            eyebrow="What we do"
            title={
              <>
                One team. Six disciplines. <em>Zero handoffs.</em>
              </>
            }
            note="Strategy, design and engineering at one table, for the whole build. No briefs thrown over walls. No agency relay race."
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Web — wide dark tile with a code window */}
            <MotionLink
              {...rise(0)}
              to="/web-development"
              className={`${tile} ${tileDark} beam beam--dark lg:col-span-2`}
              data-hover
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--accent)] opacity-25 blur-[90px]" />
              <TileArrow light />
              <span className="tile-num text-white/40">02</span>
              <div className="relative z-10 mt-auto grid items-end gap-8 lg:grid-cols-[1fr_1.1fr]">
                <div>
                  <h3 className="tile-title">
                    Web <span className="text-[var(--accent)]">engineering</span>
                  </h3>
                  <p className="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-white/60">
                    Custom portals, headless commerce and SaaS dashboards that
                    pass Core Web Vitals.
                  </p>
                  <Tags
                    light
                    items={["React & Next.js", "Headless commerce", "CMS", "Performance"]}
                  />
                </div>
                <div className="code-win max-lg:hidden" aria-hidden="true">
                  <div className="code-win__bar">
                    <i />
                    <i />
                    <i />
                  </div>
                  <pre>
                    <span className="c-k">export default</span>{" "}
                    <span className="c-f">async function</span> Page() {"{"}
                    {"\n"}
                    {"  "}
                    <span className="c-k">const</span> data ={" "}
                    <span className="c-k">await</span> getOrders();
                    {"\n"}
                    {"  "}
                    <span className="c-k">return</span> {"<"}
                    <span className="c-f">Dashboard</span> data={"{"}data{"}"} /{">"};
                    {"\n"}
                    {"}"}
                    {"\n"}
                    <span className="c-c">{"// LCP 0.9s · CLS 0 · INP 48ms"}</span>
                  </pre>
                </div>
              </div>
            </MotionLink>

            {/* Mobile — red tile */}
            <MotionLink
              {...rise(1)}
              to="/mobile-app-development"
              className={`${tile} border-transparent bg-gradient-to-br from-[#ff3b3f] to-[#b3121a] text-white`}
              data-hover
            >
              <TileArrow light />
              <Smartphone size={28} strokeWidth={1.6} className="opacity-90" />
              <div className="mt-auto">
                <h3 className="tile-title">Mobile apps</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/80">
                  Native and cross-platform apps built for real-world
                  reliability.
                </p>
                <Tags light items={["iOS", "Android", "React Native", "Flutter"]} />
              </div>
            </MotionLink>

            {/* Product design */}
            <MotionLink
              {...rise(2)}
              to="/ui-ux-design"
              className={`${tile} ${tileLight}`}
              data-hover
            >
              <TileArrow />
              <span className="tile-icon">
                <PenTool size={20} />
              </span>
              <div className="mt-auto">
                <h3 className="tile-title">Product design</h3>
                <Tags items={["Research", "Interaction", "Design systems", "Prototyping"]} />
              </div>
            </MotionLink>

            {/* AI & data — dark with glow */}
            <MotionLink
              {...rise(3)}
              to="/ai-development"
              className={`${tile} ${tileDark}`}
              data-hover
            >
              <div className="pointer-events-none absolute inset-x-0 -bottom-28 mx-auto h-56 w-56 rounded-full bg-[var(--accent)] opacity-30 blur-[80px]" />
              <TileArrow light />
              <span className="tile-icon tile-icon--dark">
                <BrainCircuit size={20} />
              </span>
              <div className="relative mt-auto">
                <h3 className="tile-title">
                  AI <span className="text-[var(--accent)]">&amp;</span> data
                </h3>
                <Tags light items={["LLM features", "RAG", "Agents", "Internal tools"]} />
              </div>
            </MotionLink>

            {/* Brand & strategy */}
            <MotionLink
              {...rise(4)}
              to="/services/brand"
              className={`${tile} ${tileLight}`}
              data-hover
            >
              <TileArrow />
              <span className="tile-icon">
                <Sparkles size={20} />
              </span>
              <div className="mt-auto">
                <h3 className="tile-title">Brand &amp; strategy</h3>
                <Tags items={["Positioning", "Identity", "Naming", "Editorial"]} />
              </div>
            </MotionLink>

            {/* Graphic design — wide, with palette strip */}
            <MotionLink
              {...rise(5)}
              to="/graphic-design-branding"
              className={`${tile} ${tileLight} lg:col-span-2`}
              data-hover
            >
              <TileArrow />
              <div className="flex items-center gap-3">
                <span className="tile-icon">
                  <Palette size={20} />
                </span>
                <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[12px] font-semibold text-[var(--accent)]">
                  New service
                </span>
              </div>
              <div className="mt-auto grid items-end gap-6 md:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="tile-title">Graphic design &amp; branding</h3>
                  <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-[var(--ink-2)]">
                    Logo systems, print collateral, social kits, packaging and
                    motion — everything a brand needs to look intentional on
                    every surface.
                  </p>
                  <Tags items={["Logo", "Print", "Social kits", "Motion"]} />
                </div>
                <div className="flex gap-1.5" aria-hidden="true">
                  {["#E31E24", "#D46B08", "#D4B106", "#389E0D", "#0958D9", "#531DAB", "#0a0a0c"].map(
                    (c, i) => (
                      <span
                        key={c}
                        className="block w-6 rounded-full transition-all duration-500 group-hover:-translate-y-2"
                        style={{
                          background: c,
                          height: 56 + (i % 3) * 18,
                          transitionDelay: `${i * 40}ms`,
                        }}
                      />
                    ),
                  )}
                </div>
              </div>
            </MotionLink>

            {/* Summary tile */}
            <motion.div
              {...rise(6)}
              className={`${tile} border-[var(--line)] bg-[var(--bg-2)] hover:translate-y-0`}
            >
              <Layers size={22} className="text-[var(--accent)]" />
              <div className="mt-auto">
                <div className="text-[56px] font-semibold leading-none tracking-[-0.05em]">
                  6<span className="text-[var(--accent)]">+</span>
                </div>
                <p className="mt-2 text-[15px] text-[var(--ink-2)]">
                  disciplines, one senior team.
                </p>
                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--ink)] hover:text-[var(--accent)]"
                  data-hover
                >
                  All services <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Selected work (dark) ── */}
      <section className="s dark band-dark" id="work">
        <div className="wrap">
          <SectionHead
            eyebrow="Selected work"
            title={
              <>
                Built with teams who <em>actually ship.</em>
              </>
            }
            action={
              <Link to="/portfolio" className="btn-outline btn-outline--dark" data-hover>
                Browse the archive <ArrowUpRight size={16} />
              </Link>
            }
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {workCards.map((c, i) => (
              <MotionLink
                key={c.href}
                {...rise(i)}
                to={c.href}
                className={`work-tile group ${i === 0 || i === 3 ? "md:min-h-[520px]" : ""}`}
                data-hover
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${c.tint} to-[var(--dark-2)]`} />
                <div className="relative z-10 flex items-start justify-between gap-4 p-8">
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="rounded-full bg-[var(--accent)] px-2.5 py-1 text-[12px] font-semibold text-white">
                        {c.year}
                      </span>
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white/10 px-2.5 py-1 text-[12px] font-medium text-white/75"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-5 text-[clamp(26px,2.6vw,36px)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-[15px] text-white/60">{c.desc}</p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[var(--ink)] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className="work-tile__shot">
                  <img
                    src={c.img}
                    alt={`Screenshot of ${c.title}`}
                    loading="lazy"
                    width={1200}
                    height={750}
                  />
                </div>
              </MotionLink>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries (light) ── */}
      <section className="s" id="industries">
        <div className="wrap">
          <SectionHead
            center
            eyebrow="Who we build for"
            title={
              <>
                Seventeen industries. <em>One agency.</em>
              </>
            }
            note="Fintech, health, logistics, education, AI. We pair engineering with people who have actually worked inside the domain — so the software does something measurable, not something photogenic."
          />
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2.5">
            {industryList.map(([key, ind], index) => (
              <MotionLink
                key={key}
                to={industryPath(key)}
                data-hover
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.03, duration: 0.4, ease }}
                className="ind-chip"
              >
                {ind.title}
                <ArrowUpRight size={14} />
              </MotionLink>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process (dark) ── */}
      <section className="s dark band-dark band-dark--grid">
        <div className="wrap">
          <SectionHead
            eyebrow="The Satvix Process"
            title={
              <>
                Brief. Sketch. Build. Ship. <em>Stay.</em>
              </>
            }
            note="Five stages. No surprise invoices, no dark Slack channels. You see the demo every Friday, and the bill every two weeks."
          />
          <ol className="process-rail">
            {process.map((p, i) => (
              <motion.li key={p.n} {...rise(i)}>
                <span className="process-rail__n">{p.n}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Capabilities / SEO copy (light) ── */}
      <section className="s">
        <div className="wrap">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div {...rise()} className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <span className="eyebrow">Enterprise Delivery</span>
              <h2 className="s-title">
                <RevealText>Custom software &amp; digital products built <em>to last.</em></RevealText>
              </h2>
              <p className="mt-7 text-[17px] leading-relaxed text-[var(--ink-2)]">
                Satvix Tech Solutions is a premium{" "}
                <strong>digital product and software engineering agency</strong>{" "}
                in Anand, Gujarat. We integrate expert UI/UX design, senior
                software development, and structured QA with dedicated project
                managers to ensure seamless end-to-end product delivery.
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-[var(--ink-2)]">
                We build for founders and agencies in the US, UK, EU and
                Australia. Four-plus hours overlap with US East, full
                working-day overlap with the UK. Full repo access from day one,
                USD/GBP/INR invoicing, NDA-friendly contracts.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
              {capabilities.map(({ Icon, title, body }, i) => (
                <motion.div key={title} {...rise(i)} className="cap-card">
                  <span className="tile-icon">
                    <Icon size={20} />
                  </span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Case studies (light, tinted) ── */}
      <section className="s bg-[var(--bg-2)]">
        <div className="wrap">
          <SectionHead
            eyebrow="Case studies"
            title={
              <>
                Four shipped products. <em>All verifiable.</em>
              </>
            }
            note="Problem, approach, outcome. Real timelines, real stacks, real users. Ask for a demo or a reference call — we encourage it."
          />
          <StackingCards
            items={caseStudies.map((c) => (
              <article key={c.n} className="case-card">
                <div className="case-card__head">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="case-card__n">{c.n}</span>
                    <span className="text-[13px] font-medium text-[var(--muted)]">
                      {c.tag}
                    </span>
                  </div>
                  <Link to={c.href} className="case-card__link" data-hover>
                    Read case study <ArrowRight size={15} />
                  </Link>
                </div>
                <h3 className="case-card__title">{c.title}</h3>
                <div className="case-card__grid">
                  {[
                    { k: "Problem", v: c.problem },
                    { k: "Approach", v: c.approach },
                    { k: "Outcome", v: c.outcome },
                  ].map((r) => (
                    <div key={r.k}>
                      <div className="case-card__k">{r.k}</div>
                      <p>{r.v}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          />
        </div>
      </section>

      {/* ── AI-augmented + team (dark) ── */}
      <section className="s dark band-dark">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.12] blur-[120px]" />
        <div className="wrap relative">
          <SectionHead
            eyebrow="How we deliver in weeks"
            title={
              <>
                AI-augmented, senior-reviewed. <em>Both, not either.</em>
              </>
            }
            note="We use Claude Code, Cursor and agentic workflows to move faster on scaffolding, tests, migrations and plumbing. Every AI-generated change is reviewed by a senior engineer before it reaches your repo. That is how we ship fintech in two weeks without cutting corners."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aiPoints.map(({ Icon, k, v }, i) => (
              <motion.div key={k} {...rise(i)} className="glow-card">
                <span className="tile-icon tile-icon--dark">
                  <Icon size={20} />
                </span>
                <div className="mt-8 text-[15px] font-semibold text-white">{k}</div>
                <p className="mt-2 text-[15px] leading-relaxed text-white/60">{v}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 border-t border-white/10 pt-20">
            <SectionHead
              eyebrow="Who you're working with"
              title={
                <>
                  Digital product agency. <em>Senior by design.</em>
                </>
              }
              action={
                <Link to="/about" className="btn-outline btn-outline--dark" data-hover>
                  More about the agency <ArrowUpRight size={16} />
                </Link>
              }
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {team.map(({ Icon, k, title, body }, i) => (
                <motion.div key={k} {...rise(i)} className="glow-card">
                  <div className="flex items-center justify-between">
                    <span className="tile-icon tile-icon--dark">
                      <Icon size={20} />
                    </span>
                    <span className="text-[13px] font-medium text-white/40">{k}</span>
                  </div>
                  <h3 className="mt-8 text-[22px] font-semibold tracking-[-0.03em] text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/60">{body}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-10 max-w-[60ch] text-[14px] text-white/50">
              Based in Anand, Gujarat. Working with founders and agencies in the
              US, UK, EU and Australia. Four-plus hours overlap with US East;
              full working-day overlap with the UK.
            </p>
          </div>
        </div>
      </section>

      {/* ── Tech stack (light) ── */}
      <section className="s">
        <div className="wrap">
          <SectionHead
            eyebrow="The stack"
            title={
              <>
                Boring tools, used <em>well.</em>
              </>
            }
            note="No framework religion here. We pick whatever the team can still maintain after we’ve gone home, and we keep up with the field so you don’t have to."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map(({ Icon, cat, tools }, i) => (
              <motion.div key={cat} {...rise(i)} className="stack-card">
                <div className="flex items-center gap-2.5 text-[13px] font-semibold text-[var(--accent)]">
                  <Icon size={16} />
                  {cat}
                </div>
                <div className="mt-4 text-[20px] font-semibold leading-snug tracking-[-0.03em]">
                  {tools}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="band">
        <div className="wrap">
          <div className="band-grid">
            {bandStats.map((s, i) => (
              <motion.div key={i} {...rise(i)}>
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

      {/* ── FAQ ── */}
      <Faq
        faqs={homepageFaqs}
        sub="The questions foreign founders ask before writing a first email. If yours is not here, write anyway — hello@satvixtech.com, one senior engineer, one business day."
      />

      {/* ── CTA ── */}
      <MarqueeCta
        label="One inbox, one human, no funnel"
        words="Worth building · Worth shipping · Worth keeping · "
        title={
          <>
            Got something worth <em>building?</em>
          </>
        }
        note="No decks, no detours: one call, your problem, and a senior team that ships. A real person replies within one business day."
      >
        <a href="mailto:hello@satvixtech.com" className="mcta__btn" data-hover>
          hello@satvixtech.com
          <span className="mcta__btn-arrow">
            <ArrowUpRight size={18} />
          </span>
        </a>
      </MarqueeCta>
    </div>
  );
}
