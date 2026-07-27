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
      "Nine Finance — a lending platform where borrowers and field agents run structured daily EMI collections through a mobile app. React Native + Node.js. Shipped in two weeks; live and managing real loan portfolios.",
    year: "2 weeks",
    tags: ["Fintech", "React Native", "Node.js", "Live"],
    cat: "Fintech",
    img: "/images/satvix_fintech_showcase.png",
  },

  {
    id: "glamour-jewelry",
    title:
      "Glamour Jewelry — a full jewelry e-commerce platform: product catalog, orders, inventory, admin. React + Node + MongoDB, shipped in four weeks, live and processing orders.",
    year: "4 weeks",
    tags: ["Ecommerce", "React", "Node", "MongoDB"],
    cat: "Commerce",
    img: "/images/glamour-jewelry.png",
  },

  {
    id: "charotar-soap",
    title:
      "Charotar Soap Factory — inventory, production tracking and sales orders for soap manufacturers. React + Next.js + Node.js. Designed as a reusable white-label product for other manufacturers.",
    year: "2 months",
    tags: ["SaaS", "Next.js", "Node.js", "White-label"],
    cat: "SaaS",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='%23121518'/><stop offset='1' stop-color='%230a0e12'/></linearGradient></defs><rect width='800' height='500' fill='url(%23g)'/><text x='50%25' y='50%25' fill='%23e6c667' font-family='monospace' font-size='22' text-anchor='middle' letter-spacing='4'>DEMO ON REQUEST</text></svg>",
  },
];
const filters = ["All", "Fintech", "SaaS", "Commerce"];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const visible = cards.filter((c) => active === "All" || c.cat === active);

  return (
    <div>
      <SEO
        title="Case studies — three shipped products from Satvix Tech Solutions"
        description="Three shipped products you can verify: Nine Finance (fintech, React Native + Node.js, 2 weeks), Glamour Jewelry (e-commerce, React + Node + MongoDB, 4 weeks), Charotar Soap Factory (white-label manufacturing SaaS, Next.js + Node.js)."
        keywords="Satvix Tech Solutions case studies, fintech case study React Native Node.js, jewelry e-commerce case study, white-label manufacturing SaaS, shipped in two weeks fintech"
        url="https://www.satvixtech.com/portfolio"
        breadcrumb={[
          { name: "Home", item: "https://www.satvixtech.com" },
          { name: "Portfolio", item: "https://www.satvixtech.com/portfolio" },
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
                "Three shipped products.",
                "Real timelines.",
                "<em>Verify anything.</em>",
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
              Satvix Tech Solutions &nbsp;/&nbsp; Case studies
            </div>
            <p>
              Fintech in two weeks. E-commerce in four. A white-label
              manufacturing SaaS. Ask for a live demo or a reference call —
              every claim is verifiable.
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
