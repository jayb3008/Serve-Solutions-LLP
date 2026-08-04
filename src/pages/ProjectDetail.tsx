import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Faq from "../components/Faq";
import Squares from "../components/ui/squares";
import Magnetic from "../components/Magnetic";

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

type Outcome = { n: string; label: string };

type Project = {
  title: string;
  subtitle: string;
  category: string;
  /** Build duration, e.g. "2 weeks". Not a calendar year — do not derive
      a date from it. */
  timeline: string;
  client: string;
  role: string;
  tags: string[];
  overview: string;
  challenge: string;
  solution: string;
  tech: string[];
  /* Capabilities the product actually ships, rendered under the tech stack.
     Each entry has to be traceable to the challenge/solution copy or to a
     screenshot in the gallery — this block sits next to verifiable claims, so
     an aspirational feature here reads as a lie about a live product. */
  features: string[];
  outcomes: Outcome[];
  img: string;
  /* What the screenshot actually shows. The generic fallback below describes
     every case study identically, which tells a screen-reader user and an
     image crawler nothing. Worth writing wherever the image has real content
     to describe. */
  imgAlt?: string;
  /* Social preview. `img` is a WebP sized for the page; link-preview crawlers
     want a 1200x630 JPEG, so case studies with real artwork supply one here.
     Falls back to the site default when absent. */
  ogImg?: string;
  /* Product screenshots, shown after the outcomes band. Curate rather than
     dump: near-identical screens add page weight and tell a reader nothing
     new. Every entry needs alt text describing what is actually on the
     screen — these carry the proof, so they have to be legible to someone who
     cannot see them. */
  gallery?: {
    src: string;
    alt: string;
    /* Intrinsic pixel size, used to reserve the box before a lazy image
       arrives. Defaults to the 674x1420 phone capture the HRMS shots use, so
       a desktop screenshot MUST pass its own — inheriting the phone aspect
       reserves a tall narrow hole and the image jumps the page when it loads. */
    w?: number;
    h?: number;
  }[];
  /* How to tile the gallery. Phone screenshots are tall and narrow and read
     fine several to a row; desktop screenshots need most of the column width
     before their text goes unreadable. Defaults to "phone". */
  galleryLayout?: "phone" | "desktop";
  prev: string;
  next: string;
  faq?: { question: string; answer: string }[];
};

const projectsData: Record<string, Project> = {
  "nine-finance": {
    title: "Nine Finance",
    subtitle: "Fintech lending platform, shipped in two weeks",
    category: "Fintech · Mobile-first",
    timeline: "2 weeks",
    client: "Nine Finance (confidential)",
    role: "Full-stack build — founder-led",
    tags: ["Fintech", "React Native", "Node.js", "Live"],
    overview:
      "A lending platform where borrowers and field agents run structured daily EMI collections through a mobile app. Live and managing real loan portfolios.",
    challenge:
      "Ship a mobile-first, multi-tenant lending workflow — borrowers on one side, collection agents on the other — with EMI schedules and reconciliation, on a two-week timeline.",
    solution:
      "React Native for both borrower and agent apps sharing a single codebase. Node.js backend handling EMI calculations, collections, reconciliation and role-based access. AI-augmented delivery on scaffolding and tests, senior review on every diff.",
    tech: ["React Native", "Node.js", "Express", "MongoDB"],
    features: [
      "Borrower and field-agent apps from one React Native codebase",
      "Structured daily EMI collection schedules",
      "Collection recording with reconciliation",
      "Role-based access separating borrower from agent",
      "Multi-tenant lending workflow",
    ],
    outcomes: [
      { n: "2 wks", label: "Kickoff to live" },
      { n: "Live", label: "Managing real portfolios" },
      { n: "2", label: "User types shipped (borrower + agent)" },
      { n: "1x", label: "Codebase, both apps" },
    ],
    img: "/images/satvix_fintech_showcase.webp",
    ogImg: "/images/satvix_fintech_showcase-og.jpg",
    prev: "shreeji-hrms",
    next: "glamour-jewelry",
    faq: [
      {
        question: "How did you ship a fintech app in two weeks?",
        answer:
          "AI-augmented scaffolding on the boilerplate (auth, screens, forms, migrations), founder-led decisions on every architecture and data model choice, and senior review on every diff before it lands. No junior developers, no handoffs.",
      },
      {
        question: "Can we see it live or talk to the client?",
        answer:
          "The product is live and confidential. We can show screenshots on a call and, with client permission, arrange a reference conversation.",
      },
    ],
  },

  "glamour-jewelry": {
    title: "Glamour Jewelry",
    subtitle: "Full jewelry e-commerce platform in four weeks",
    category: "E-commerce · Full-stack",
    timeline: "4 weeks",
    client: "Glamour Jewelry",
    role: "Full-stack build — founder-led",
    tags: ["Ecommerce", "React", "Node", "MongoDB"],
    overview:
      "A complete jewelry e-commerce platform: product catalog, order flow, inventory, and an admin dashboard. Live and processing real orders.",
    challenge:
      "Ship a real transaction-heavy storefront — with catalog, orders, inventory and back-office admin — on a four-week timeline, without cutting corners on payment reliability or admin usability.",
    solution:
      "React frontend, Node.js + Express API, MongoDB for products, orders and inventory. One coherent codebase from customer-facing store through admin dashboard. Shipped, hardened, live.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "Product catalog with custom attribute handling",
      "Customer-facing storefront and order flow",
      "Inventory tracking tied to orders",
      "Admin dashboard sharing the storefront codebase",
      "Bespoke catalog, order and inventory logic",
    ],
    outcomes: [
      { n: "4 wks", label: "Kickoff to live" },
      { n: "Live", label: "Processing real orders" },
      { n: "1", label: "Admin dashboard + storefront, unified" },
      { n: "E2E", label: "Catalog → order → inventory" },
    ],
    img: "/images/glamour-jewelry.webp",
    ogImg: "/images/glamour-jewelry-og.jpg",
    prev: "nine-finance",
    next: "charotar-soap",
    faq: [
      {
        question: "Is the site live?",
        answer:
          "Yes — live and processing real orders. We can share a link on a call or point you at it directly.",
      },
      {
        question: "Why React + Node + MongoDB rather than a pre-built platform?",
        answer:
          "The client needed custom catalog, order and inventory logic that Shopify-style platforms don't fit cleanly. A tight React + Node + MongoDB build gave us full control on schema and behavior, and shipped inside four weeks.",
      },
    ],
  },

  "charotar-soap": {
    title: "Charotar Soap Factory",
    subtitle: "White-label manufacturing SaaS — reusable, licensable",
    category: "SaaS · White-label · B2B",
    timeline: "2 months",
    client: "Proprietary product (Satvix)",
    role: "Product design + full-stack build",
    tags: ["SaaS", "Next.js", "Node.js", "White-label"],
    overview:
      "Inventory, production tracking and sales order management built specifically for soap manufacturers — architected from day one as a reusable, white-label product for other manufacturers and distributors.",
    challenge:
      "Small manufacturers had no affordable, focused tooling for production tracking, inventory and sales orders. Bigger ERP systems were overkill and expensive; spreadsheets couldn't handle real production runs.",
    solution:
      "React + Next.js frontend, Node.js backend. Modular, multi-tenant architecture so the same product can be deployed for any manufacturer we sign. Domain modeled around production batches, inventory movements and sales orders.",
    tech: ["React", "Next.js", "Node.js", "TypeScript"],
    features: [
      "Production batch tracking",
      "Stock ledger with per-SKU movements and low-stock alerts",
      "Sales orders through to dispatch",
      "Invoices, payments in/out and a customer ledger",
      "Price lists per customer type",
      "Multi-tenant — deployable white-label per manufacturer",
    ],
    outcomes: [
      { n: "1", label: "Reusable product, many manufacturers" },
      { n: "2 mo", label: "Initial build" },
      { n: "B2B", label: "White-label licensing available" },
      { n: "Demo", label: "On request" },
    ],
    img: "/images/charotar-soap.webp",
    imgAlt:
      "The Charotar Soap Factory ERP dashboard: sales, stock value, open orders and outstanding payments across the top, a six-month revenue chart and customer-type split below, with recent orders and low-stock alerts.",
    ogImg: "/images/charotar-soap-og.jpg",
    prev: "glamour-jewelry",
    next: "shreeji-hrms",
    faq: [
      {
        question: "Is Charotar Soap Factory available to license?",
        answer:
          "Yes. It was built as a white-label product from day one. If you run a manufacturing operation and want inventory / production / sales order tracking, we can deploy a branded instance for you. Ask for a demo.",
      },
      {
        question: "Why build a proprietary product rather than a one-off?",
        answer:
          "Recurring-revenue economics and better software. A product used by multiple manufacturers gets stress-tested harder and matures faster than a bespoke build used by one client.",
      },
    ],
  },

  "shreeji-hrms": {
    title: "Shreeji HRMS",
    subtitle: "Bilingual HR, attendance, salary & ledger app for small business",
    category: "SaaS · Mobile App · Operations",
    timeline: "3 weeks",
    client: "Shreeji Traders",
    role: "Full-stack build — founder-led",
    tags: ["SaaS", "React Native", "Node.js", "Bilingual"],
    overview:
      "A bilingual (Gujarati / Hindi / English) React Native app that runs a small business end to end — employee & daily-wage attendance, salary calculations, advances, customer ledger (khatu), and income-expense accounting.",
    challenge:
      "Small business owners relied on paper registers for daily-wage workers, struggled with manual salary calculations (half-days, advance deductions), uncollected customer receivables (udhaar), and unorganised income-expense bookkeeping.",
    solution:
      "React Native mobile app with tailored dual sign-in roles (Owner Cockpit & Employee View). Features one-tap attendance marking, automated daily-wage payroll (payable days x daily rate), customer credit ledger with direct call actions, and complete monthly transaction tracking.",
    tech: ["React Native", "Node.js", "Express", "MongoDB", "TypeScript"],
    features: [
      "Dual sign-in — owner cockpit and employee view",
      "One-tap attendance for daily-wage staff",
      "Payroll from payable days x daily rate, half-days at 0.5",
      "Advance tracking, deducted at payout",
      "Leave requests routed to the owner for approval",
      "Customer credit ledger (khatu) with one-tap call",
      "Income-expense daybook with monthly totals",
      "Gujarati, Hindi and English throughout",
    ],
    outcomes: [
      { n: "1 App", label: "Dual sign-in (Owner + Employee)" },
      { n: "E2E", label: "Staff, payroll & accounting" },
      { n: "3 wks", label: "Kickoff to live" },
      { n: "3", label: "Languages (Gujarati, Hindi, Eng)" },
    ],
    img: "/images/shreeji-hrms.webp",
    imgAlt:
      "Shreeji HRMS mobile application showing Owner Cockpit, daily-wage attendance calendar, customer credit ledger (khatu), and employee profile screens.",
    ogImg: "/images/shreeji-hrms-og.jpg",
    /* Owner-side screens first, then the same days seen from the worker's
       phone — the split the app is actually built around. */
    gallery: [
      {
        src: "/images/hrms/hrms-owner-dashboard.webp",
        alt: "Owner dashboard in Gujarati: headcount, how many staff are marked present today, cash in and out for the day, and a ₹6,79,000 outstanding-collection card above a row of quick actions.",
      },
      {
        src: "/images/hrms/hrms-owner-menu.webp",
        alt: "Owner navigation drawer listing dashboard, employees, attendance and attendance calendar, reports, salary, advances, leave requests with two pending, customers, receipts, outstanding balances and the ledger.",
      },
      {
        src: "/images/hrms/hrms-employee-list.webp",
        alt: "Employee list showing seven staff — helper, loader, driver, accountant, supervisor and field sales — each with their daily wage and whether they are marked present today.",
      },
      {
        src: "/images/hrms/hrms-attendance-calendar.webp",
        alt: "Monthly attendance calendar for July 2026, each day dotted by status, with a button to close out the current day's attendance.",
      },
      {
        src: "/images/hrms/hrms-customer-accounts.webp",
        alt: "Customer accounts screen totalling ₹6,79,000 outstanding across wholesalers, agencies, supermarkets and kirana stores, each row with a one-tap call button.",
      },
      {
        src: "/images/hrms/hrms-daybook.webp",
        alt: "Daybook for July 2026 listing money out for salary alongside customer collections in, each entry tagged with the counterparty and date.",
      },
      {
        src: "/images/hrms/hrms-employee-home.webp",
        alt: "Employee home screen prompting the worker to mark today's attendance, with their advance balance, working days so far and daily wage summarised underneath.",
      },
      {
        src: "/images/hrms/hrms-employee-menu.webp",
        alt: "The worker's own navigation drawer, headed Ramesh Solanki, Supervisor on ₹850 a day, listing home, my attendance, my day, my month and my leave, then my salary and my advances, today's collections, and my profile above a sign-out link.",
      },
      {
        src: "/images/hrms/hrms-employee-attendance.webp",
        alt: "The worker's own attendance calendar for July 2026, present days in green and absent in red, with a month summary of days worked and days off.",
      },
      {
        src: "/images/hrms/hrms-employee-salary.webp",
        alt: "Employee salary screen showing ₹16,150 earned this month at ₹850 a day across 19 days, with paid history for June and May including an advance deduction.",
      },
      {
        src: "/images/hrms/hrms-employee-profile.webp",
        alt: "Employee profile for Ramesh Solanki, Supervisor: daily wage ₹850, joined 11 March 2024, marked active, based in Katargam, Surat, with an advances card reading nothing outstanding, employer details for Shreeji Traders, and a language selector.",
      },
    ],
    prev: "charotar-soap",
    next: "nine-finance",
    faq: [
      {
        question: "What makes Shreeji HRMS unique for local Indian businesses?",
        answer:
          "It is Gujarati-first and designed around how small trade and manufacturing businesses operate — supporting daily-wage models (half-days counted as 0.5), advance salary tracking, and an integrated customer credit ledger (khatu) alongside income-expense bookkeeping.",
      },
      {
        question: "How does the dual sign-in model work?",
        answer:
          "Owners log in with email and password to access the full cockpit (staff management, receivables, expense logs, payroll). Employees sign in with a simple 4-digit PIN to mark attendance and view their personal earnings and advance history.",
      },
    ],
  },
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const heroRef = useRef<HTMLDivElement>(null);

  const project = projectsData[id as string] ?? projectsData["nine-finance"];
  const nextProject = project ? projectsData[project.next] : undefined;

  /* No datePublished is passed below: `timeline` holds a build duration
     ("2 weeks"), not a year, so the field was emitting the literal string "2 weeks-01-01"
     into the Article schema on all three case studies. An invalid date is worse
     than an absent one — Google can reject the whole item over it. Restoring the
     field needs a real publication date per case study, which is not in the
     data. */
  return (
    <div>
      <SEO
        title={`${project.title} — ${project.subtitle}`}
        description={project.overview}
        keywords={`${project.title}, ${project.tags.join(", ")}, ${project.tech.join(", ")}, case study, Satvix Tech Solutions portfolio, ${project.category}`}
        image={project.ogImg ?? undefined}
        url={`https://www.satvixtech.com/portfolio/${id}`}
        type="article"
        faq={project.faq}
        breadcrumb={[
          { name: "Home", item: "https://www.satvixtech.com" },
          { name: "Portfolio", item: "https://www.satvixtech.com/portfolio" },
          {
            name: project.title,
            item: `https://www.satvixtech.com/portfolio/${id}`,
          },
        ]}
      />

      {/* ── Page hero ── */}
      <section className="page-hero relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
          <Squares
            squareSize={65}
            direction="diagonal"
            speed={0.15}
            borderColor="rgba(18, 21, 24, 0.08)"
            hoverFillColor="rgba(18, 21, 24, 0.03)"
          />
        </div>
        <div className="wrap relative z-10">
          {/* <div className="page-hero__eyebrow">
            <span className="ping" />
            {project.category}
          </div> */}
          <h1>
            {[project.title, `<em>${project.subtitle}</em>`].map((line, i) => (
              <span key={i} className="row">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.3 + i * 0.08 }}
                  style={{ display: "inline-block" }}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              </span>
            ))}
          </h1>
          <div className="page-hero__sub">
            <div className="breadcrumb">
              <Magnetic>
                <Link
                  to="/portfolio"
                  style={{
                    color: "var(--accent)",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  ← Portfolio
                </Link>
              </Magnetic>
              &nbsp;/&nbsp; {project.title}
            </div>
            <div
              style={{
                display: "flex",
                gap: 48,
                flexWrap: "wrap",
                alignItems: "flex-start",
              }}
            >
              {[
                { label: "Client", value: project.client },
                { label: "Timeline", value: project.timeline },
                { label: "Role", value: project.role },
              ].map((m) => (
                <div key={m.label}>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: ".12em",
                      color: "var(--muted)",
                      marginBottom: 6,
                    }}
                  >
                    {m.label}
                  </div>
                  <div style={{ fontWeight: 500, fontSize: 15 }}>{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Browser mockup screenshot ── */}
      <section
        style={{
          background: "var(--bg-2)",
          borderBottom: "1px solid var(--line)",
          padding: "72px 0 80px",
        }}
      >
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.7, 0, 0.2, 1], delay: 0.25 }}
            style={{
              borderRadius: 14,
              overflow: "hidden",
              border: "1px solid var(--line)",
              boxShadow:
                "0 48px 140px rgba(0,0,0,0.13), 0 12px 40px rgba(0,0,0,0.07)",
            }}
          >
            {/* Browser chrome bar */}
            <div
              style={{
                background: "var(--bg)",
                borderBottom: "1px solid var(--line)",
                padding: "11px 18px",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              {/* Traffic-light dots */}
              <div style={{ display: "flex", gap: 7, flexShrink: 0 }}>
                {["#ff5f57", "#ffbd2e", "#28c940"].map((c) => (
                  <span
                    key={c}
                    style={{
                      width: 13,
                      height: 13,
                      borderRadius: "50%",
                      background: c,
                      display: "inline-block",
                    }}
                  />
                ))}
              </div>
              {/* URL bar */}
              <div
                style={{
                  flex: 1,
                  background: "var(--bg-2)",
                  border: "1px solid var(--line)",
                  borderRadius: 6,
                  padding: "5px 14px",
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  color: "var(--muted)",
                  textAlign: "center",
                  letterSpacing: ".02em",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                satvixtech.com · {project.client}
              </div>
            </div>

            {/* Screenshot */}
            <img
              src={project.img}
              alt={project.imgAlt ?? `${project.title} — live preview`}
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
                objectPosition: "top",
                maxHeight: "68vh",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── Tags strip ── */}
      <div style={{ borderBottom: "1px solid var(--line)", padding: "24px 0" }}>
        <div
          className="wrap"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          {project.tags.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: ".12em",
                color: "var(--ink-2)",
                padding: "6px 14px",
                border: "1px solid var(--line)",
                borderRadius: 999,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Overview + tech ── */}
      <section
        className="s"
        style={{ padding: "120px 0", borderBottom: "1px solid var(--line)" }}
      >
        <div className="wrap">
          <div
            className="grid md:grid-cols-2 gap-16 md:gap-20"
            style={{ alignItems: "start" }}
          >
            {/* Overview */}
            <div className="reveal">
              <div className="eyebrow" style={{ marginBottom: 32 }}>
                Overview
              </div>
              <p
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(22px, 2.4vw, 34px)",
                  fontWeight: 400,
                  letterSpacing: "-.02em",
                  lineHeight: 1.3,
                  color: "var(--ink)",
                  margin: 0,
                }}
              >
                {project.overview}
              </p>
            </div>

            {/* Tech + features */}
            <div className="reveal" data-d="1">
              <div className="eyebrow" style={{ marginBottom: 32 }}>
                Tech stack
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 56,
                }}
              >
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 12,
                      padding: "8px 16px",
                      border: "1px solid var(--line)",
                      borderRadius: 8,
                      color: "var(--ink-2)",
                      transition: "background .25s ease, color .25s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--ink)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--bg)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--ink-2)";
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="eyebrow" style={{ marginBottom: 32 }}>
                What it does
              </div>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "grid",
                  gap: 14,
                }}
              >
                {project.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "baseline",
                      color: "var(--ink-2)",
                      fontSize: 16,
                      lineHeight: 1.55,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        flexShrink: 0,
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        transform: "translateY(-2px)",
                      }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Challenge & Solution ── */}
      <section
        style={{
          background: "var(--ink)",
          color: "var(--bg)",
          padding: "120px 0",
        }}
      >
        <div className="wrap">
          <div className="s-head" style={{ marginBottom: 60 }}>
            <div>
              <div
                className="eyebrow reveal"
                style={{ color: "rgba(255, 255, 255,.55)" }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 24,
                    height: 1,
                    background: "rgba(255, 255, 255,.3)",
                    flexShrink: 0,
                  }}
                />
                The brief — and the way out
              </div>
              <h2
                className="s-title reveal"
                data-d="1"
                style={{ color: "var(--bg)", maxWidth: "14ch" }}
              >
                Where we <em>landed.</em>
              </h2>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255, 255, 255,.1)" }}>
            {/* Challenge */}
            <div
              className="tl-row reveal"
              style={{
                borderBottom: "1px solid rgba(255, 255, 255,.1)",
                paddingTop: 48,
                paddingBottom: 48,
              }}
            >
              <div
                className="tl-year"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: ".12em",
                  color: "rgba(255, 255, 255,.45)",
                  fontWeight: 400,
                }}
              >
                Challenge
              </div>
              <div
                className="tl-title"
                style={{
                  color: "var(--bg)",
                  fontFamily: "var(--display)",
                  fontSize: "clamp(20px,2vw,28px)",
                  fontWeight: 500,
                  letterSpacing: "-.015em",
                }}
              >
                What was hard
              </div>
              <div
                className="tl-body"
                style={{
                  color: "rgba(255, 255, 255,.7)",
                  lineHeight: 1.65,
                  maxWidth: "54ch",
                  fontSize: 17,
                }}
              >
                {project.challenge}
              </div>
            </div>

            {/* Solution */}
            <div
              className="tl-row reveal"
              data-d="1"
              style={{ paddingTop: 48, paddingBottom: 48 }}
            >
              <div
                className="tl-year"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: ".12em",
                  color: "rgba(255, 255, 255,.45)",
                  fontWeight: 400,
                }}
              >
                Solution
              </div>
              <div
                className="tl-title"
                style={{
                  color: "var(--bg)",
                  fontFamily: "var(--display)",
                  fontSize: "clamp(20px,2vw,28px)",
                  fontWeight: 500,
                  letterSpacing: "-.015em",
                }}
              >
                What we did about it
              </div>
              <div
                className="tl-body"
                style={{
                  color: "rgba(255, 255, 255,.7)",
                  lineHeight: 1.65,
                  maxWidth: "54ch",
                  fontSize: 17,
                }}
              >
                {project.solution}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section
        style={{
          background: "var(--bg-2)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          padding: "100px 0",
        }}
      >
        <div className="wrap">
          <div className="eyebrow reveal" style={{ marginBottom: 56 }}>
            What it actually moved
          </div>
          <div className="band-grid">
            {project.outcomes.map((o, i) => (
              <div key={o.label} className="reveal" data-d={String(i)}>
                <div className="b-stat__n" style={{ color: "var(--ink)" }}>
                  {o.n}
                </div>
                <div className="b-stat__l">{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screenshot gallery ── */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="s" style={{ padding: "100px 0" }}>
          <div className="wrap">
            <div className="eyebrow reveal" style={{ marginBottom: 56 }}>
              Inside the product
            </div>
            <div
              style={{
                display: "grid",
                /* auto-fit rather than a fixed column count, so the row rewraps
                   instead of shrinking shots past legibility. The track floor
                   depends on orientation — a desktop dashboard needs far more
                   width than a phone screen before its text stops being
                   readable. min(..., 100%) keeps the track from overflowing a
                   viewport narrower than the floor itself. */
                gridTemplateColumns: `repeat(auto-fit, minmax(min(${
                  project.galleryLayout === "desktop" ? 420 : 190
                }px, 100%), 1fr))`,
                gap: 20,
              }}
            >
              {project.gallery.map((shot, i) => (
                <img
                  key={shot.src}
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.w ?? 674}
                  height={shot.h ?? 1420}
                  /* Below the fold on every viewport, and there are a dozen of
                     them — deferring keeps them out of the LCP path. The
                     intrinsic size above reserves the box so they cost no CLS
                     when they do arrive. */
                  loading="lazy"
                  decoding="async"
                  className="reveal"
                  data-d={String(i)}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "var(--radius)",
                    border: "1px solid var(--line)",
                    background: "var(--bg-2)",
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {project.faq && project.faq.length > 0 && (
        <Faq faqs={project.faq} eyebrow="Project FAQ" />
      )}

      {/* ── Next project ── */}
      <section
        className="cta-section relative overflow-hidden"
        style={{ position: "relative" }}
      >
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
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
              color: "rgba(255, 255, 255,.45)",
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            Up next in the archive
          </div>
          {nextProject && (
            <p
              className="reveal"
              data-d="0"
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: ".14em",
                color: "rgba(255, 255, 255,.5)",
                marginBottom: 16,
              }}
            >
              {nextProject.category}
            </p>
          )}
          {nextProject ? (
            <Link
              to={`/portfolio/${project.next}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "inline-block",
              }}
            >
              <Magnetic>
                <h2
                  className="reveal animate-pulse-subtle"
                  data-d="1"
                  style={{
                    fontSize: "clamp(36px,6vw,96px)",
                    cursor: "pointer",
                  }}
                >
                  {nextProject.title} <em>→</em>
                </h2>
              </Magnetic>
            </Link>
          ) : (
            <h2
              className="reveal"
              data-d="1"
              style={{ fontSize: "clamp(36px,6vw,96px)" }}
            >
              See more <em>→</em>
            </h2>
          )}
          <div style={{ marginTop: 48 }}>
            <Magnetic>
              <Link
                to="/portfolio"
                className="btn-ghost reveal"
                data-d="3"
                data-hover
                style={{ display: "inline-block" }}
              >
                Back to the archive <span className="arr" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </div>
  );
}
