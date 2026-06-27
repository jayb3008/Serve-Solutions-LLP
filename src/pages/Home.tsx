import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import AwardsSection from "../components/AwardsSection";
import HoverMembers, { HoverMember } from "../components/HoverMembers";
import ImageCursorTrail from "../components/ImageCursorTrail";
import SvgScrollPath from "../components/SvgScrollPath";
import TextReveal from "../components/TextReveal";
import RollingText from "../components/RollingText";
import TestimonialSlider from "../components/TestimonialSlider";
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
    img: "/images/glamour-jewelry.png",
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
    img: "/images/sd-photography.png",
  },
  {
    cls: "wc-6",
    year: "2026",
    tags: ["EPFO", "HR Services", "Compliance"],
    title:
      "SK Consultant — a fast, fully online EPFO and HR compliance platform handling payroll, ESI, and statutory services for 500+ clients.",
    href: "/portfolio/sk-consultant",
    img: "/images/sk-consultant.png",
  },
  {
    cls: "wc-7",
    year: "2025",
    tags: ["SaaS", "Photography", "Next.js"],
    title:
      "Clickly — a website builder empowering photographers to launch branded portfolio websites with custom domains and galleries.",
    href: "/portfolio/clickly",
    img: "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    cls: "wc-8",
    year: "2025",
    tags: ["Tailor Shop", "Management", "SaaS"],
    title:
      "TailorPro — a complete tailoring business management solution for measurements, orders, billing, customer history, and delivery tracking.",
    href: "/portfolio/tailorpro",
    img: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    cls: "wc-9",
    year: "2025",
    tags: ["Business Tools", "Automation", "SaaS"],
    title:
      "Proposal Generator — an automated platform for creating professional proposals, quotations, and invoices in minutes.",
    href: "/portfolio/proposal-generator",
    img: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

const teamMembers: HoverMember[] = [
  {
    name: "Jay",
    role: "Founder & CEO",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    href: "/about",
  },
  {
    name: "Aarav",
    role: "Lead Engineer",
    image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
    href: "/about",
  },
  {
    name: "Priya",
    role: "Design Lead",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    href: "/about",
  },
  {
    name: "Rohan",
    role: "AI Engineer",
    image:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
    href: "/about",
  },
  {
    name: "Diya",
    role: "Mobile Dev",
    image:
      "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
    href: "/about",
  },
  {
    name: "Karan",
    role: "DevOps Lead",
    image:
      "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400",
    href: "/about",
  },
  {
    name: "Sneha",
    role: "QA Engineer",
    image:
      "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=400",
    href: "/about",
  },
  {
    name: "Arjun",
    role: "Full-Stack Dev",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    href: "/about",
  },
  {
    name: "Neel",
    role: "Growth Lead",
    image:
      "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=400",
    href: "/about",
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
      {/* Fixed scroll-drawn SVG path — hero to footer */}
      <SEO
        title="Web Development Company in Ahmedabad | Mobile App Development | Satvix Tech Solutions"
        description="Satvix Tech Solutions offers Web Development, Mobile App Development, UI/UX Design, SEO, Digital Marketing and Custom Software Development in Ahmedabad."
        keywords="Web Development Company Ahmedabad, Software Development Company, Mobile App Development, React Native Development, Website Design Ahmedabad, SEO Company Ahmedabad, Digital Marketing Agency Ahmedabad, Satvix Tech Solutions, Satvix Tech Solutions website, Satvix Tech Solutions official website"
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
                "Custom software &",
                "mobile app development",
                "<em>company in India.</em>",
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
                We are forty people in one room at Satvix Tech Solutions. We design, build and ship web
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

      {/* ── Clients strip ── */}
      {/* <section
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
      </section> */}

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
                  Seventeen industries. <em>One studio.</em>
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
                <div className="eyebrow reveal">How we work</div>
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

      {/* ── Testimonials ── */}
      <section className="s">
        <div className="wrap">
          <div className="s-head">
            <AnimateIn direction="up">
              <div>
                <div className="eyebrow reveal">In their words</div>
                <h2 className="s-title" data-d="1">
                  Three things our clients <em>actually said.</em>
                </h2>
              </div>
            </AnimateIn>
          </div>
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      {/* ── Team: Hover Members ── */}
      <section
        style={{
          background: "var(--ink)",
          color: "var(--bg)",
          padding: "120px 0",
          borderTop: "1px solid rgba(255,255,255,.06)",
        }}
      >
        <div className="wrap">
          <div className="s-head" style={{ marginBottom: 56 }}>
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
                The people
              </div>
              <h2
                className="s-title reveal"
                data-d="1"
                style={{ color: "var(--bg)" }}
              >
                Forty people. <em>One room.</em>
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
                About us <span className="arr" />
              </Link>
            </Magnetic>
          </div>
          <AnimateIn direction="up" delay={0.3}>
            <HoverMembers
              members={teamMembers}
              defaultText="OUR STUDIO"
              globalHref="/about"
            />
          </AnimateIn>
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

      {/* ── Awards & recognition ── */}
      <AwardsSection />

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
