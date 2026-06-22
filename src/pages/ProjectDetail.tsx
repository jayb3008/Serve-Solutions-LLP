import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Squares from "../components/ui/squares";
import Magnetic from "../components/Magnetic";

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
  faq?: { question: string; answer: string }[];
};

const projectsData: Record<string, Project> = {
  "nine-finance": {
    title: "9 Finance",
    subtitle: "Digital lending and financial services platform",
    category: "Fintech · Web Platform",
    year: "2026",
    client: "9 Finance",
    role: "Full Stack Development",
    tags: ["Fintech", "React", "Node.js", "Finance"],
    overview:
      "A complete financial services platform helping users manage loans, investments, and financial planning through a modern digital experience.",
    challenge:
      "Building secure financial workflows, managing customer onboarding, and creating a scalable architecture for financial transactions.",
    solution:
      "Developed a robust web platform with role-based access, customer management, reporting dashboards, and secure APIs.",
    tech: ["React", "Node.js", "Express", "MongoDB", "AWS"],
    outcomes: [
      { n: "10k+", label: "Users Managed" },
      { n: "99.9%", label: "Platform Uptime" },
      { n: "40%", label: "Process Automation" },
      { n: "24/7", label: "Availability" },
    ],
    img: "/images/projects/nine-finance.jpg",
    prev: "proposal-generator",
    next: "glamour-jewelry",
    faq: [
      { question: "What security measures are implemented in 9 Finance?", answer: "We implemented role-based access control, bank-grade encryption for transaction data, and secure third-party payment integrations." },
      { question: "How long did it take to build the 9 Finance platform?", answer: "The initial platform was shipped in 18 weeks, followed by iterative feature rollouts for loan management and reports." }
    ]
  },

  "glamour-jewelry": {
    title: "Glamour Jewelry",
    subtitle: "Luxury jewelry eCommerce experience",
    category: "Ecommerce · Jewelry",
    year: "2026",
    client: "Glamour Jewelry",
    role: "Web Development & SEO",
    tags: ["Next.js", "Jewelry", "SEO", "Ecommerce"],
    overview:
      "Premium jewelry showcase website focused on product discovery and WhatsApp-based inquiries.",
    challenge:
      "Creating a luxury brand experience while maintaining fast loading speeds and SEO performance.",
    solution:
      "Built a responsive Next.js website with category management, product galleries, and lead generation flows.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "SEO"],
    outcomes: [
      { n: "95+", label: "Lighthouse Score" },
      { n: "3x", label: "Lead Growth" },
      { n: "60%", label: "Mobile Traffic" },
      { n: "1s", label: "Load Time" },
    ],
    img: "/images/projects/glamour-jewelry.jpg",
    prev: "nine-finance",
    next: "nivas-realty",
    faq: [
      { question: "How did Next.js help Glamour Jewelry's SEO?", answer: "Next.js provided server-side rendering (SSR), fast static generation, and optimized image delivery, improving Core Web Vitals and organic search discoverability." },
      { question: "Why was a WhatsApp-based inquiry system used?", answer: "WhatsApp-based ordering allows luxury buyers to establish a direct, personal contact channel with designers, leading to a 3x increase in lead conversion compared to a standard cart checkout." }
    ]
  },

  "nivas-realty": {
    title: "Nivas Realty",
    subtitle: "Property listing and lead generation platform",
    category: "Real Estate",
    year: "2025",
    client: "Nivas Realty",
    role: "Full Stack Development",
    tags: ["Real Estate", "CRM", "Property Management"],
    overview:
      "A real estate platform allowing users to browse properties, submit inquiries, and connect with agents.",
    challenge:
      "Managing large property inventories while ensuring excellent search and filtering performance.",
    solution:
      "Developed advanced search filters, inquiry workflows, and admin management tools.",
    tech: ["React", "Node.js", "MongoDB"],
    outcomes: [
      { n: "1000+", label: "Properties Listed" },
      { n: "500+", label: "Monthly Leads" },
      { n: "80%", label: "Mobile Users" },
      { n: "99%", label: "Uptime" },
    ],
    img: "/images/projects/nivas.jpg",
    prev: "glamour-jewelry",
    next: "tabletrack",
    faq: [
      { question: "What is the lead generation process in Nivas Realty?", answer: "Users can submit inquiry forms directly on listing pages, which automatically route to registered brokers via our internal CRM panel." }
    ]
  },

  tabletrack: {
    title: "TableTrack",
    subtitle: "Restaurant POS & management software",
    category: "SaaS · Restaurant",
    year: "2025",
    client: "TableTrack",
    role: "Product Design & Development",
    tags: ["POS", "Restaurant", "SaaS"],
    overview:
      "Restaurant management software handling orders, billing, inventory, table reservations, and kitchen operations.",
    challenge:
      "Creating a system that works efficiently for restaurant owners, managers, and kitchen staff.",
    solution:
      "Developed a complete restaurant ecosystem with real-time order management and reporting.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    outcomes: [
      { n: "500+", label: "Orders Daily" },
      { n: "50%", label: "Faster Billing" },
      { n: "20+", label: "Restaurants" },
      { n: "99.9%", label: "Reliability" },
    ],
    img: "/images/projects/tabletrack.jpg",
    prev: "nivas-realty",
    next: "sd-photography",
    faq: [
      { question: "Does TableTrack POS work offline?", answer: "Yes, TableTrack is built with offline-first synchronization using local databases, syncing automatically to the cloud when internet connection is restored." },
      { question: "How does the kitchen workflow update in real-time?", answer: "We used Socket.io for instantaneous real-time updates between the POS billing counter, servers' handheld devices, and the kitchen display monitor." }
    ]
  },

  "sd-photography": {
    title: "SD Photography",
    subtitle: "Photography portfolio & client gallery platform",
    category: "Creative · Photography",
    year: "2025",
    client: "SD Photography",
    role: "Web Development",
    tags: ["Photography", "Portfolio", "Gallery"],
    overview:
      "Professional photography showcase platform with album management and client galleries.",
    challenge:
      "Delivering high-quality image experiences while maintaining performance.",
    solution:
      "Created a responsive gallery system with private album sharing and portfolio management.",
    tech: ["Next.js", "Cloudinary", "TypeScript"],
    outcomes: [
      { n: "1000+", label: "Photos Managed" },
      { n: "95+", label: "Performance Score" },
      { n: "50+", label: "Albums Created" },
      { n: "100%", label: "Mobile Responsive" },
    ],
    img: "/images/projects/sd-photography.jpg",
    prev: "tabletrack",
    next: "clickly",
    faq: [
      { question: "How are photos optimized in SD Photography?", answer: "We integrated Cloudinary's dynamic CDN for auto-formatting, compression, and delivery of progressive images based on client network bandwidth." }
    ]
  },

  clickly: {
    title: "Clickly",
    subtitle: "Photography website builder platform",
    category: "SaaS · Photography",
    year: "2025",
    client: "Clickly",
    role: "Founder & Developer",
    tags: ["SaaS", "Photography", "Website Builder"],
    overview:
      "A platform that allows photographers to create portfolio websites without coding.",
    challenge:
      "Making website creation simple while offering customization and scalability.",
    solution:
      "Built a multi-tenant SaaS architecture with templates, galleries, and custom domains.",
    tech: ["Next.js", "Node.js", "Supabase", "Cloudinary"],
    outcomes: [
      { n: "100+", label: "Sites Created" },
      { n: "10+", label: "Templates" },
      { n: "95%", label: "User Satisfaction" },
      { n: "24/7", label: "Availability" },
    ],
    img: "/images/projects/clickly.jpg",
    prev: "sd-photography",
    next: "tailorpro",
    faq: [
      { question: "How does Clickly handle custom domains?", answer: "We built a routing layer using proxy configurations that dynamically maps custom domains to multi-tenant portfolios hosted on Supabase." },
      { question: "Is Clickly optimized for mobile photography?", answer: "Yes, the portfolio pages use dynamic image resizing and lazy-loading to ensure portfolio websites load instantly on any mobile device." }
    ]
  },

  tailorpro: {
    title: "TailorPro",
    subtitle: "Tailoring business management system",
    category: "SaaS",
    year: "2025",
    client: "TailorPro",
    role: "Full Stack Development",
    tags: ["Tailor Shop", "SaaS", "Management"],
    overview:
      "Complete tailoring management platform for orders, measurements, billing, and customer management.",
    challenge:
      "Digitizing traditional tailoring workflows without making the software complex.",
    solution:
      "Created easy-to-use dashboards with order tracking and customer history.",
    tech: ["React", "Node.js", "MongoDB"],
    outcomes: [
      { n: "500+", label: "Orders Managed" },
      { n: "40%", label: "Time Saved" },
      { n: "100+", label: "Customers" },
      { n: "99%", label: "Reliability" },
    ],
    img: "/images/projects/tailorpro.jpg",
    prev: "clickly",
    next: "proposal-generator",
    faq: [
      { question: "Does TailorPro support custom measurements?", answer: "Yes, users can create tailored metric sheets for each customer containing custom fields for custom dress patterns." }
    ]
  },

  "proposal-generator": {
    title: "Proposal Generator",
    subtitle: "Business proposal automation platform",
    category: "SaaS · Automation",
    year: "2025",
    client: "Serve Solutions",
    role: "Founder & Developer",
    tags: ["SaaS", "Automation", "Business"],
    overview:
      "Generate proposals, quotations, and invoices in minutes using predefined templates.",
    challenge:
      "Reducing manual document creation time for agencies and freelancers.",
    solution:
      "Built a dynamic template engine with PDF generation and branding customization.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    outcomes: [
      { n: "80%", label: "Time Saved" },
      { n: "1000+", label: "Documents Generated" },
      { n: "10x", label: "Faster Workflow" },
      { n: "99.9%", label: "Uptime" },
    ],
    img: "/images/projects/proposal-generator.jpg",
    prev: "tailorpro",
    next: "nine-finance",
    faq: [
      { question: "How are PDFs generated in Proposal Generator?", answer: "PDFs are generated on the server using headless browser rendering, ensuring consistent branding, font styles, and layout dimensions across all devices." },
      { question: "Can we customize colors and typography?", answer: "Yes, users can store branding presets (colors, fonts, logo images) which are applied dynamically to every quotation or invoice generated." }
    ]
  },
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const heroRef = useRef<HTMLDivElement>(null);

  const project = projectsData[id as string] ?? projectsData["nine-finance"];
  const nextProject = project ? projectsData[project.next] : undefined;

  return (
    <div>
      <SEO
        title={`${project.title} — ${project.subtitle}`}
        description={project.overview}
        keywords={`${project.title}, ${project.tags.join(", ")}, ${project.tech.join(", ")}, case study, Satvix Tech Solutions portfolio, ${project.category}`}
        image={project.img}
        url={`https://satvixtech.com/portfolio/${id}`}
        type="article"
        datePublished={`${project.year}-01-01`}
        faq={project.faq}
        breadcrumb={[
          { name: "Home", item: "https://satvixtech.com" },
          { name: "Portfolio", item: "https://satvixtech.com/portfolio" },
          {
            name: project.title,
            item: `https://satvixtech.com/portfolio/${id}`,
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
                { label: "Year", value: project.year },
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

      {/* ── Hero image ── */}
      <div style={{ position: "relative", height: "72vh", overflow: "hidden" }}>
        <motion.img
          src={project.img}
          alt={project.title}
          initial={{ scale: 1.07, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.7, 0, 0.2, 1] }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 55%, rgba(21,17,13,0.45) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

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
