import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Squares from "../components/ui/squares";
import Magnetic from "../components/Magnetic";

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

type Card = {
  id: string;
  title: string;
  year: string;
  tags: string[];
  cat: string;
  img: string;
  wide?: boolean;
};
const cards: Card[] = [
  {
    id: "nine-finance",
    title:
      "9 Finance — a complete lending and financial services platform helping customers manage loans, investments, and financial planning digitally.",
    year: "2026",
    tags: ["Fintech", "React", "Node.js", "Web App"],
    cat: "Fintech",
    img: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1400",
    wide: true,
  },

  {
    id: "glamour-jewelry",
    title:
      "Glamour Jewelry — a premium jewelry eCommerce website showcasing collections, inquiry management, and WhatsApp-based customer engagement.",
    year: "2026",
    tags: ["Jewelry", "Ecommerce", "Next.js", "SEO"],
    cat: "Commerce",
    img: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=900",
  },

  {
    id: "nivas-realty",
    title:
      "Nivas Realty — a modern real estate platform featuring property listings, lead generation, virtual tours, and inquiry management.",
    year: "2025",
    tags: ["Real Estate", "CRM", "Lead Generation"],
    cat: "Real Estate",
    img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=900",
  },

  {
    id: "tabletrack",
    title:
      "TableTrack — restaurant management and POS software handling orders, billing, table reservations, kitchen operations, and analytics.",
    year: "2025",
    tags: ["SaaS", "POS", "Restaurant", "React"],
    cat: "SaaS",
    img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=900",
  },

  {
    id: "sd-photography",
    title:
      "SD Photography — portfolio management platform allowing photographers to showcase albums, manage clients, and share private galleries.",
    year: "2025",
    tags: ["Photography", "Portfolio", "CMS"],
    cat: "Creative",
    img: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=900",
  },

  {
    id: "clickly",
    title:
      "Clickly — an all-in-one photography website builder enabling photographers to launch professional portfolios with custom domains.",
    year: "2025",
    tags: ["SaaS", "Photography", "Next.js"],
    cat: "SaaS",
    img: "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=900",
  },

  {
    id: "proposal-generator",
    title:
      "Proposal Generator — SaaS platform for generating professional proposals, quotations, and invoices with automated workflows.",
    year: "2025",
    tags: ["SaaS", "Business Tools", "Automation"],
    cat: "SaaS",
    img: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];
const filters = ["All", "Fintech", "SaaS", "Commerce", "AI", "Health"];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const visible = cards.filter((c) => active === "All" || c.cat === active);

  return (
    <div>
      <SEO
        title="Work — case studies from Satvix Tech Solutions"
        description="Selected case studies from Satvix Tech Solutions — fintech platforms, SaaS, headless commerce, AI copilots and more. A short archive of products we have shipped since 2020."
        keywords="Satvix Tech Solutions portfolio, Satvix Tech Solutions case studies, software portfolio India, digital product case studies India, web app portfolio Gujarat, mobile app case studies India, fintech app development portfolio, SaaS case study India, AI product portfolio India, headless commerce case study India"
        url="https://satvixtech.com/portfolio"
        breadcrumb={[
          { name: "Home", item: "https://satvixtech.com" },
          { name: "Portfolio", item: "https://satvixtech.com/portfolio" },
        ]}
      />

      {/* Page hero */}
      <section className="page-hero relative overflow-hidden">
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
            Selected work
          </div> */}
          <h1>
            {(
              [
                "A short archive",
                "of things we",
                "<em>still talk about.</em>",
              ] as const
            ).map((line, i) => (
              <span key={i} className="row">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.3 + i * 0.07 }}
                  style={{ display: "inline-block" }}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              </span>
            ))}
          </h1>
          <div className="page-hero__sub">
            <div className="breadcrumb">
              Satvix Tech Solutions &nbsp;/&nbsp; Work
            </div>
            <p>
              Ten projects — the ones we are still proud of two years later.
              Fintech, AI, commerce, health, education. NDAs cover most of the
              rest.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="filters">
        <div className="wrap">
          <div className="filter-row">
            <div className="filter-chips">
              {filters.map((f) => (
                <Magnetic key={f} strength={0.25}>
                  <button
                    className={`chip${active === f ? " active" : ""}`}
                    onClick={() => setActive(f)}
                  >
                    {f}
                  </button>
                </Magnetic>
              ))}
            </div>
            <span className="filter-count">
              {visible.length}&nbsp;project{visible.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="s" style={{ padding: "80px 0 120px" }}>
        <div className="wrap">
          <div className="arch-grid">
            {visible.map((c, i) => (
              <TiltCard
                key={c.id}
                to={`/portfolio/${c.id}`}
                className={`arch reveal${c.wide ? " wide" : ""}`}
              >
                <div
                  className="arch__bg"
                  style={{
                    background: `linear-gradient(rgba(10,8,6,0.48), rgba(10,8,6,0.48)), url(${c.img}) center/cover no-repeat`,
                  }}
                />
                <div
                  className="arch__inner"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className="arch__top">
                    <div className="arch__meta">
                      <span>{c.year}</span>
                      {c.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <span className="arch__cat">{c.cat}</span>
                  </div>
                  <p className="arch__title">{c.title}</p>
                </div>
                <div
                  className="arch__cta"
                  style={{ transform: "translateZ(45px)" }}
                >
                  ↗
                </div>
              </TiltCard>
            ))}
          </div>

          {visible.length === 0 && (
            <p
              style={{
                color: "var(--muted)",
                fontFamily: "var(--mono)",
                fontSize: 13,
                marginTop: 48,
                textAlign: "center",
                letterSpacing: ".08em",
                textTransform: "uppercase",
              }}
            >
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
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
            Could your project sit here next year?
          </div>
          <h2 className="reveal" data-d="1">
            Let’s make something <em>worth keeping.</em>
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
