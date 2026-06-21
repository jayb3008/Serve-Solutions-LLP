import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import AwardsSection from "../components/AwardsSection";
import { industriesData } from "../data/industries";
import Squares from "../components/ui/squares";
import Magnetic from "../components/Magnetic";

const industryList = Object.entries(industriesData) as [
  string,
  { title: string },
][];

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

/* ── Interactive Tilt Card Wrapper ── */
function TiltCard({ children, className, to }: { children: React.ReactNode; className: string; to: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia('(pointer:coarse)').matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${y * -8}deg) rotateY(${x * 8}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
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
        transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
        transformStyle: 'preserve-3d'
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

const services = [
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
    href: "/services/ai-ml",
  },
  {
    num: "05",
    pre: "Brand &",
    em: "strategy",
    tags: ["Positioning", "Identity", "Naming", "Editorial"],
    href: "/services",
  },
];

const workCards = [
  {
    cls: "wc-1 wide",
    year: "2026",
    tags: ["Fintech", "React", "Node.js", "Web App"],
    title:
      "9 Finance — a modern financial services platform simplifying loans, investments, and digital wealth management for growing businesses.",
    href: "/portfolio/nine-finance",
    img: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    cls: "wc-2",
    year: "2026",
    tags: ["Jewelry", "Ecommerce", "Next.js"],
    title:
      "Glamour Jewelry — a premium jewelry showcase platform with category management, WhatsApp inquiries, and SEO-driven product discovery.",
    href: "/portfolio/glamour-jewelry",
    img: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    cls: "wc-3",
    year: "2025",
    tags: ["Real Estate", "CRM", "Lead Generation"],
    title:
      "Nivas Realty — a property management and lead generation platform helping buyers discover and connect with verified listings.",
    href: "/portfolio/nivas-realty",
    img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    cls: "wc-4",
    year: "2025",
    tags: ["Restaurant", "POS", "SaaS"],
    title:
      "TableTrack — an all-in-one restaurant management system handling orders, billing, reservations, kitchen workflows, and analytics.",
    href: "/portfolio/tabletrack",
    img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    cls: "wc-5",
    year: "2025",
    tags: ["Photography", "Portfolio", "CMS"],
    title:
      "SD Photography — a professional photography portfolio platform featuring client galleries, album management, and digital delivery.",
    href: "/portfolio/sd-photography",
    img: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    cls: "wc-6",
    year: "2025",
    tags: ["SaaS", "Photography", "Next.js"],
    title:
      "Clickly — a website builder empowering photographers to launch branded portfolio websites with custom domains and galleries.",
    href: "/portfolio/clickly",
    img: "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    cls: "wc-7",
    year: "2025",
    tags: ["Tailor Shop", "Management", "SaaS"],
    title:
      "TailorPro — a complete tailoring business management solution for measurements, orders, billing, customer history, and delivery tracking.",
    href: "/portfolio/tailorpro",
    img: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    cls: "wc-8",
    year: "2025",
    tags: ["Business Tools", "Automation", "SaaS"],
    title:
      "Proposal Generator — an automated platform for creating professional proposals, quotations, and invoices in minutes.",
    href: "/portfolio/proposal-generator",
    img: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

const bandStats = [
  { n: 6, unit: "yrs", label: "Quietly shipping since 2020" },
  { n: 120, unit: "+", label: "Products in the wild" },
  { n: 98, unit: "%", label: "Clients who come back" },
  { n: 40, unit: "", label: "Engineers, designers, makers" },
];

const clients = [
  "LendingFlow",
  "TailorPro",
  "Stillwood",
  "Pelican AI",
  "Verbena",
  "Nordhavn",
  "Aurum",
  "Traxis",
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

const testimonials = [
  {
    quote:
      "Satvix shipped our card-issuing platform from zero to 50,000 active cards in eighteen months. They treated RBI compliance as a design problem, not as a reason to slow down.",
    name: "Aanya Krishnan",
    role: "Head of Product",
    org: "LendingFlow, Mumbai",
  },
  {
    quote:
      "We had worked with five agencies before this one. Satvix is the first team that did not hand work between strategy, design and engineering — they just owned the whole thing, end to end.",
    name: "Rohan Mehta",
    role: "Founder & CEO",
    org: "TailorPro",
  },
  {
    quote:
      "Our Lighthouse score went from 22 to 98 and conversions roughly tripled. They reproduced sixty years of brand pixel-for-pixel — somehow while also making the site twice as fast.",
    name: "Maeve Donovan",
    role: "Brand Director",
    org: "Stillwood Co.",
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
      <SEO
        title="Satvix Tech Solutions — a digital product studio in Anand, Gujarat"
        description="Satvix Tech Solutions is a small, senior digital studio in Anand, Gujarat. Since 2020 we have shipped 120+ web, mobile and AI products with founders and operators who care about the craft."
        keywords="Satvix Tech Solutions, satvixtech, satvix tech, digital product studio India, software development company Anand Gujarat, web development agency India, mobile app development India, AI ML services India, custom software development India, independent digital studio India, hire developers India, React Next.js development India"
        url="https://satvixtech.com"
        faq={[
          {
            question: "What does Satvix Tech Solutions do?",
            answer:
              "We are a small digital product studio in Anand, Gujarat. We design, build, and ship web platforms, mobile apps, AI products, and brand systems — usually from zero to a public launch.",
          },
          {
            question: "Where is Satvix Tech Solutions based?",
            answer:
              "We sit in Anand, Gujarat. Around half our work is for teams in the US, UK, and EU; the rest are Indian founders and operators.",
          },
          {
            question: "How many projects has Satvix Tech Solutions shipped?",
            answer:
              "About 120 web and mobile products since 2020, across fintech, health, SaaS, commerce, and legal. Roughly 98% of clients keep us on after launch.",
          },
          {
            question: "How do I start a project with Satvix Tech Solutions?",
            answer:
              "Email info@satvixtech.com or use the Contact form. You will hear back from a human, usually same day. We start with a discovery call — no pitch deck required.",
          },
        ]}
      />

      {/* ── Hero ── */}
      <section className="hero overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-[0.10] pointer-events-none">
          <Squares squareSize={65} direction="diagonal" speed={0.15} borderColor="rgba(18, 21, 24, 0.08)" hoverFillColor="rgba(18, 21, 24, 0.03)" />
        </div>
        <div ref={orbRef} className="hero__orb" />
        <div className="wrap relative z-10" style={{ position: "relative" }}>
          <div className="hero__eyebrow">
            <span className="ping" />A small studio in Anand, Gujarat — est.
            2020
          </div>

          <h1 className="hero__title">
            {(
              [
                "A studio for founders",
                "who ship software",
                "<em>that lasts.</em>",
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

          <div className="hero__foot">
            <p>
              We are forty people in one room. We design, build and ship web
              platforms, mobile apps and AI products for founders and operators
              who care about the work — and the bill.
            </p>
            <Magnetic>
              <Link to="/portfolio" className="cta-btn" data-hover>
                See the work <span className="dot" />
              </Link>
            </Magnetic>
            <div className="stats">
              <div>
                <div className="stat__num">
                  <CountUp to={120} />+
                </div>
                <div className="stat__lbl">Products shipped</div>
              </div>
              <div>
                <div className="stat__num">
                  <CountUp to={98} />%
                </div>
                <div className="stat__lbl">Clients who renew</div>
              </div>
              <div>
                <div className="stat__num">
                  <CountUp to={6} />
                </div>
                <div className="stat__lbl">Years, one studio</div>
              </div>
            </div>
          </div>
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
              Web platforms <span className="star">✦</span> Mobile apps{" "}
              <em>·</em> AI features <span className="star">✦</span> Brand
              systems <em>·</em> Commerce <span className="star">✦</span>{" "}
            </span>
          ))}
        </div>
      </div>

      {/* ── Clients strip ── */}
      <section
        style={{ borderBottom: "1px solid var(--line)", padding: "40px 0" }}
      >
        <div className="wrap">
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: ".16em",
              color: "var(--muted)",
              textAlign: "center",
              marginBottom: 28,
            }}
          >
            A few of the teams we’ve built for
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "24px 56px",
            }}
          >
            {clients.map((c) => (
              <span
                key={c}
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(18px, 2.2vw, 28px)",
                  fontWeight: 500,
                  letterSpacing: "-.02em",
                  color: "var(--ink)",
                  opacity: 0.32,
                  transition: "opacity .3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.32")}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section
        className="s services"
        id="services"
        style={{ borderTop: "1px solid var(--line)" }}
      >
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">What we do</div>
              <h2 className="s-title reveal" data-d="1">
                One team. Five disciplines. <em>Zero handoffs.</em>
              </h2>
            </div>
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
            {services.map((svc) => (
              <Link
                key={svc.num}
                to={svc.href}
                className="svc reveal"
                data-hover
              >
                <div className="svc__num">{svc.num}</div>
                <div className="svc__name">
                  {svc.pre} <em>{svc.em}</em>
                </div>
                <div className="svc__tags">
                  {svc.tags.map((t) => (
                    <span key={t}>{t}</span>
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
              </Link>
            ))}
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
            <div>
              <div className="eyebrow reveal">Who we build for</div>
              <h2 className="s-title reveal" data-d="1">
                Seventeen industries. <em>One studio.</em>
              </h2>
            </div>
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

          <div
            className="reveal"
            data-d="2"
            style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 8 }}
          >
            {industryList.map(([key, ind]) => (
              <Link
                key={key}
                to={`/industries/${key}`}
                data-hover
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work ── */}
      <section
        style={{
          background: "var(--ink)",
          color: "var(--bg)",
          padding: "140px 0",
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
            {workCards.map((c) => (
              <TiltCard
                key={c.title}
                to={c.href}
                className={`work-card ${c.cls} reveal`}
              >
                <div
                  className="work-card__bg"
                  style={{
                    background: `linear-gradient(rgba(10, 8, 6, 0.48), rgba(10, 8, 6, 0.48)), url(${c.img}) center/cover no-repeat`,
                  }}
                />
                <div className="work-card__inner" style={{ transform: "translateZ(30px)" }}>
                  <div className="work-card__meta">
                    <span>{c.year}</span>
                    {c.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="work-card__title">{c.title}</div>
                </div>
                <div className="work-card__cta" style={{ transform: "translateZ(45px)" }}>↗</div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="s" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">How we work</div>
              <h2 className="s-title reveal" data-d="1">
                Brief. Sketch. Build. Ship. <em>Stay.</em>
              </h2>
            </div>
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
              <div key={p.n} className="tl-row reveal" data-d={String(i)}>
                <div className="tl-year">{p.n}</div>
                <div className="tl-title">{p.title}</div>
                <div className="tl-body">{p.desc}</div>
              </div>
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
            <div>
              <div className="eyebrow reveal">The stack</div>
              <h2 className="s-title reveal" data-d="1">
                Boring tools, used <em>well.</em>
              </h2>
            </div>
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
              <div
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
                  }}
                >
                  {t.tools}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="s">
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">In their words</div>
              <h2 className="s-title reveal" data-d="1">
                Three things our clients <em>actually said.</em>
              </h2>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {testimonials.map((t, i) => (
              <figure
                key={t.org}
                className="reveal"
                data-d={String(i)}
                style={{
                  margin: 0,
                  background: "var(--bg)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius)",
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 64,
                    lineHeight: 0.5,
                    color: "var(--accent)",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;
                </div>
                <blockquote
                  style={{
                    margin: 0,
                    fontFamily: "var(--display)",
                    fontSize: "clamp(20px, 1.9vw, 24px)",
                    fontWeight: 400,
                    lineHeight: 1.4,
                    letterSpacing: "-.01em",
                    color: "var(--ink)",
                  }}
                >
                  {t.quote}
                </blockquote>
                <figcaption
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "var(--ink)",
                      color: "var(--bg)",
                      display: "grid",
                      placeItems: "center",
                      fontFamily: "var(--display)",
                      fontStyle: "italic",
                    }}
                  >
                    {t.org.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: 14 }}>
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        color: "var(--muted)",
                        textTransform: "uppercase",
                        letterSpacing: ".08em",
                      }}
                    >
                      {t.role} · {t.org}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="band" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="band-grid">
            {bandStats.map((s, i) => (
              <div key={i} className="reveal" data-d={String(i)}>
                <div className="b-stat__n">
                  <CountUp to={s.n} />
                  <span className="unit">{s.unit}</span>
                </div>
                <div className="b-stat__l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Awards & recognition ── */}
      <AwardsSection />

      {/* ── CTA ── */}
      <section className="cta-section relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none">
          <Squares squareSize={60} direction="up" speed={0.08} borderColor="#ffffff" />
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
              href="mailto:info@satvixtech.com"
              className="big-cta reveal"
              data-d="2"
              data-hover
            >
              info@satvixtech.com
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
