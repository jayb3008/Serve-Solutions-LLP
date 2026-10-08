import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import RevealText from "../components/ui/reveal-text";
import { ArrowUpRight } from "lucide-react";
import MarqueeCta from "../components/ui/marquee-cta";
import Faq from "../components/Faq";
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
  /* What the product is doing now. The card is the proof, and "shipped" without
     a present tense is just a past claim. */
  outcome: string;
  year: string;
  tags: string[];
  cat: string;
  img: string;
  wide?: boolean;
};
const cards: Card[] = [
  {
    id: "nine-finance",
    title: "Nine Finance — daily EMI collections, borrower and agent apps.",
    outcome: "Live, managing real loan portfolios",
    year: "2 weeks",
    tags: ["Fintech", "React Native", "Node.js", "Live"],
    cat: "Fintech",
    img: "/images/satvix_fintech_showcase.webp",
  },

  {
    id: "glamour-jewelry",
    title: "Glamour Jewelry — storefront, orders and inventory in one.",
    outcome: "Live, processing real orders",
    year: "4 weeks",
    tags: ["Ecommerce", "React", "Node", "MongoDB"],
    cat: "Commerce",
    img: "/images/glamour-jewelry.webp",
  },

  {
    id: "charotar-soap",
    title: "Charotar Soap Factory — white-label manufacturing SaaS.",
    outcome: "Licensable to any manufacturer",
    year: "2 months",
    tags: ["SaaS", "Next.js", "Node.js", "White-label"],
    cat: "SaaS",
    img: "/images/charotar-soap.webp",
  },

  {
    id: "shreeji-hrms",
    title: "Shreeji HRMS — attendance, payroll and ledgers, in Gujarati.",
    outcome: "In daily use by owner and staff",
    year: "3 weeks",
    tags: ["SaaS", "React Native", "Node.js", "Bilingual"],
    cat: "SaaS",
    img: "/images/shreeji-hrms.webp",
  },
];
/* Answers the questions a buyer actually asks after seeing four case studies.
   Also fed to the FAQPage schema below — this page had none, which left the
   most commercially useful content on the site invisible to rich results. */
const portfolioFaqs = [
  {
    question: "Can I see these products live?",
    answer:
      "Glamour Jewelry is a public storefront — we will send you the link. Nine Finance and Shreeji HRMS are private products in daily use, so we demo them on a call with the client's screens. Charotar Soap Factory is our own product and we can give you a walkthrough any time.",
  },
  {
    question: "Can I talk to one of these clients?",
    answer:
      "Yes, with their permission, and we ask for it gladly. A reference call with a founder who has shipped with us tells you more than any case study page. Ask on the first call and we will arrange it.",
  },
  {
    question: "How do you ship a fintech platform in two weeks?",
    answer:
      "Senior engineers only, founder-led decisions, and AI-augmented delivery on the parts that deserve it — scaffolding, boilerplate, test coverage — with a senior review on every diff before it lands. No juniors learning on your budget, and no handoffs between strategy, design and engineering.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do, from day one — 100% of it, in your repository, with full access. On handover you get documentation and a recorded walkthrough so your team or a future team can run it without us.",
  },
  {
    question: "Why only four case studies?",
    answer:
      "Because these are the four we can put a name, a live product and a phone number against. We would rather show four you can verify than thirty you cannot check.",
  },
  {
    question: "What does a build like these cost?",
    answer:
      "It depends on scope, but the shapes above are the honest reference points: a two-week mobile-first MVP, a four-week transactional storefront, a two-month multi-tenant SaaS. Tell us which shape yours is closest to and we will give you a number and a timeline on the first call.",
  },
];

const filters = ["All", "Fintech", "SaaS", "Commerce"];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const visible = cards.filter((c) => active === "All" || c.cat === active);

  return (
    <div>
      <SEO
        title="Case studies — shipped products from Satvix Tech Solutions"
        description="Four shipped products you can verify: Nine Finance, Glamour Jewelry, Charotar Soap Factory and Shreeji HRMS. Live, named, and open to a reference call."
        keywords="Satvix Tech Solutions case studies, fintech case study React Native Node.js, jewelry e-commerce case study, white-label manufacturing SaaS, Shreeji HRMS attendance app"
        url="https://www.satvixtech.com/portfolio"
        faq={portfolioFaqs}
        breadcrumb={[
          { name: "Home", item: "https://www.satvixtech.com" },
          { name: "Portfolio", item: "https://www.satvixtech.com/portfolio" },
        ]}
      />

      {/* Page hero */}
      <section className="page-hero relative overflow-hidden">
        <div className="wrap relative z-10">
          {/* <div className="page-hero__eyebrow">
            <span className="ping" />
            Selected work
          </div> */}
          <h1>
            {(
              [
                "Shipped products.",
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
              Fintech in two weeks. E-commerce in four. Manufacturing & HRMS
              SaaS solutions. Ask for a live demo or a reference call —
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
            {visible.map((c) => (
              <TiltCard
                key={c.id}
                to={`/portfolio/${c.id}`}
                className={`arch reveal${c.wide ? " wide" : ""}`}
              >
                <div
                  className="arch__bg"
                  style={{
                    background: `linear-gradient(180deg, rgba(10, 8, 6, 0.5) 0%, rgba(10, 8, 6, 0.32) 28%, rgba(10, 8, 6, 0.5) 48%, rgba(10, 8, 6, 0.88) 70%, rgba(10, 8, 6, 0.96) 100%), url(${c.img}) center/cover no-repeat`,
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
                  <div>
                    <p className="arch__title">{c.title}</p>
                    <p
                      style={{ fontWeight: 500,
                        fontSize: 13,
                        letterSpacing: "-0.005em",
                        color: "rgba(255,255,255,.72)",
                        margin: "10px 0 0",
                      }}
                    >
                      <span style={{ color: "var(--accent)" }}>●</span> {c.outcome}
                    </p>
                  </div>
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
              style={{ fontWeight: 500,
                color: "var(--muted)",
                fontSize: 13,
                marginTop: 48,
                textAlign: "center",
                letterSpacing: "-0.005em",
              }}
            >
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* What "verifiable" actually means — the terms, in the open */}
      <section className="s" style={{ borderTop: "1px solid var(--line)", background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">The terms</div>
              <h2 className="s-title" data-d="1">
                <RevealText>Four products. <em>Check any of them.</em></RevealText>
              </h2>
            </div>
            <p
              className="reveal"
              data-d="2"
              style={{ maxWidth: "34ch", color: "var(--ink-2)", fontSize: 16, lineHeight: 1.55, margin: 0 }}
            >
              Every case study on this page names the client, the stack and the
              real timeline — and every one is still running. Here is what you
              can ask us for.
            </p>
          </div>

          <div className="scroll-x" style={{ overflowX: "auto", border: "1px solid var(--line)", borderRadius: 14, background: "var(--bg)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
              <thead>
                <tr>
                  {["Product", "Built in", "Stack", "Status today"].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "14px 18px",
                        fontSize: 13,
                        letterSpacing: "-0.005em",
                        color: "var(--muted)",
                        fontWeight: 400,
                        borderBottom: "1px solid var(--line)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Nine Finance", "2 weeks", "React Native · Node.js · MongoDB", "Live — managing real loan portfolios"],
                  ["Glamour Jewelry", "4 weeks", "React · Node.js · MongoDB", "Live — processing real orders"],
                  ["Charotar Soap Factory", "2 months", "Next.js · Node.js · TypeScript", "Licensable white-label product"],
                  ["Shreeji HRMS", "3 weeks", "React Native · Node.js · MongoDB", "In daily use — owner and staff"],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        style={{
                          padding: "14px 18px",
                          borderBottom: "1px solid var(--line)",
                          color: i === 0 ? "var(--ink)" : "var(--ink-2)",
                          fontWeight: i === 0 ? 500 : 400,
                          whiteSpace: i === 1 ? "nowrap" : "normal",
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
              gap: 24,
              marginTop: 40,
            }}
          >
            {[
              {
                h: "Ask for a demo",
                p: "We will walk you through any of the four on a call — the real product with real data on screen, not a slide deck.",
              },
              {
                h: "Ask for a reference call",
                p: "With the client's permission we will put you on a call with a founder who has shipped with us. We offer this; we do not wait to be asked.",
              },
              {
                h: "Ask what went wrong",
                p: "Every build had something that did not go to plan. Ask, and we will tell you what it was and what we changed because of it.",
              },
            ].map((b, i) => (
              <div key={b.h} className="reveal" data-d={String(i)}>
                <h3
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 20,
                    fontWeight: 500,
                    margin: "0 0 10px",
                  }}
                >
                  {b.h}
                </h3>
                <p style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.6, margin: 0 }}>{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq faqs={portfolioFaqs} eyebrow="Questions we get about this page" />

      {/* CTA */}
      <MarqueeCta
        label="Could your project sit here next year?"
        words="worth keeping · Satvix · "
        title={<>Let’s make something <em>worth keeping.</em></>}
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
