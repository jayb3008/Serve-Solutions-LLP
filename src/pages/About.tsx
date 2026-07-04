import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Squares from "../components/ui/squares";
import Magnetic from "../components/Magnetic";

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

const principles = [
  {
    n: "01",
    title: "Craft, then speed",
    body: "Velocity without taste is just churn. We move quickly, but the second-last sentence of every meeting is still ‘is this actually good?’",
  },
  {
    n: "02",
    title: "Receipts, not promises",
    body: "Weekly demos, a shared board, a phone you can call. The work is in the open from day one. No status decks, no smoke.",
  },
  {
    n: "03",
    title: "Co-owners, not vendors",
    body: "We treat your product like ours — which sometimes means telling you a feature is a bad idea, even when it’s billable.",
  },
  {
    n: "04",
    title: "Quiet over clever",
    body: "The best software disappears. We delete more than we ship; the surface that remains should feel inevitable.",
  },
  {
    n: "05",
    title: "Built to outlast us",
    body: "We pick stacks your team can maintain after we leave. Boring tools used carefully, not the framework of the month.",
  },
  {
    n: "06",
    title: "Rooted, not regional",
    body: "Based in Anand, Gujarat. Working with founders and agencies in the US, UK, EU and Australia — four-plus hours of US East overlap, full UK overlap.",
  },
];

const team = [
  {
    init: "J",
    name: "Jay Sarvaiya",
    role: "Founder — 7+ years MERN, architecture, code review, delivery",
  },
  {
    init: "+",
    name: "The team",
    role: "A small senior team of engineers, designers and product folks in Anand — growing carefully",
  },
];

const timeline = [
  {
    year: "2020",
    title: "Studio founded in Anand",
    body: "Jay starts Satvix as a founder-led studio in Anand, Gujarat. Focus from day one: senior-only builds for founders who need to ship fast.",
  },
  {
    year: "2024",
    title: "AI-augmented delivery becomes the default",
    body: "Claude Code, Cursor and agentic workflows fold into the daily rhythm. Every AI-generated diff still goes through senior code review before it lands.",
  },
  {
    year: "2025",
    title: "Nine Finance — two-week fintech build",
    body: "A React Native + Node.js lending platform for borrowers and field agents, live and running structured daily EMI collections. Shipped in two weeks.",
  },
  {
    year: "2025",
    title: "Glamour Jewelry — four-week e-commerce build",
    body: "A full jewelry e-commerce platform on React + Node + MongoDB — catalog, orders, inventory, admin. Live and processing real orders in four weeks.",
  },
  {
    year: "2025",
    title: "Charotar Soap Factory — reusable white-label SaaS",
    body: "Inventory, production tracking and sales orders for soap manufacturers. Built on React + Next.js + Node as a proprietary product available for white-label licensing.",
  },
  {
    year: "2026",
    title: "Working with founders across three continents",
    body: "Engagements with founders and agencies in the US, UK, EU and Australia. Four-plus hours US East overlap, full UK overlap, based out of Anand.",
  },
];

const bandStats = [
  { n: "3", label: "Shipped products you can verify" },
  { n: "2 wks", label: "Fastest delivery — Nine Finance" },
  { n: "7+ yrs", label: "Founder MERN experience" },
  { n: "4+ hrs", label: "Overlap with US East Coast" },
];

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <SEO
        title="About Satvix Tech Solutions — a founder-led, AI-augmented studio in Anand"
        description="Satvix Tech Solutions is a founder-led, AI-augmented engineering studio in Anand, Gujarat. A small senior team led by Jay Sarvaiya — you talk directly to the engineer writing your code."
        keywords="about Satvix Tech Solutions, Jay Sarvaiya, founder-led studio India, AI-augmented software studio, senior MERN engineers, offshore engineering for US UK founders, software studio Anand Gujarat"
        url="https://satvixtech.com/about"
        breadcrumb={[
          { name: "Home", item: "https://satvixtech.com" },
          { name: "About", item: "https://satvixtech.com/about" },
        ]}
        faq={[
          {
            question: "Who runs the studio?",
            answer:
              "Jay Sarvaiya. Seven-plus years of full-stack MERN (MongoDB, Express, React, Node). Every engagement — scope, architecture, code review, delivery — runs through Jay.",
          },
          {
            question: "How big is the team?",
            answer:
              "A small senior team in Anand — engineers, designers and product folks led by Jay Sarvaiya. Senior-only: no juniors on your budget, no account managers between you and the person writing your code. Growing carefully — see the careers page for the roles currently open.",
          },
          {
            question: "What makes you different from other agencies?",
            answer:
              "No account managers between you and the engineer. No juniors learning on your budget. AI-augmented delivery lets us ship fintech in two weeks and e-commerce in four — but every AI-generated line is reviewed by a senior engineer before it lands.",
          },
          {
            question: "Do you work with foreign clients?",
            answer:
              "Yes. Founders and agencies in the US, UK, EU and Australia. Four-plus hours overlap with US East Coast, full working-day overlap with the UK. We invoice in USD, GBP or INR and sign standard SaaS/dev contracts and NDAs.",
          },
        ]}
      />

      {/* Page hero */}
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
            About the studio
          </div> */}
          <h1>
            {(
              [
                "Founder-led.",
                "AI-augmented.",
                "<em>Senior by design.</em>",
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
              Satvix Tech Solutions &nbsp;/&nbsp; About
            </div>
            <p>
              Satvix is a small, senior engineering studio in Anand, Gujarat.
              Founder-led by Jay Sarvaiya, with a small team of senior
              engineers, designers and product folks. You talk directly to the
              engineer writing your code — no account managers, no juniors,
              no timezone black holes. Three shipped products so far; every
              claim on this site is one you can verify.
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="manifesto">
        <div className="wrap">
          <p className="reveal">
            The best software is <em>invisible.</em> Nobody notices it; it just
            gets out of the way.
          </p>
          <p className="reveal" data-d="1">
            We don’t separate design from engineering.{" "}
            <span className="dim">
              We never figured out how, and it turned out to be a feature.
            </span>
          </p>
          <p className="reveal" data-d="2">
            Good products are made by people who{" "}
            <em>care, then think, then ship</em> — in that order.
          </p>
          <p className="reveal" data-d="3">
            That’s the studio we built.{" "}
            <span className="dim">
              That’s the one you would be working with.
            </span>
          </p>
        </div>
      </section>

      {/* Principles */}
      <section
        className="s"
        style={{ borderTop: "1px solid var(--line)", paddingBottom: "120px" }}
      >
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">House rules</div>
              <h2 className="s-title reveal" data-d="1">
                Six things we have <em>stopped arguing about.</em>
              </h2>
            </div>
          </div>
          <div className="pgrid">
            {principles.map((p) => (
              <div key={p.n} className="prin reveal">
                <div className="prin__n">{p.n}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        className="s"
        style={{
          background: "var(--ink)",
          color: "var(--bg)",
          paddingBottom: "120px",
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
                The people
              </div>
              <h2
                className="s-title reveal"
                data-d="1"
                style={{ color: "var(--bg)" }}
              >
                You will be talking to <em>the founder.</em>
              </h2>
            </div>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <div key={m.name} className={`tm reveal`} data-d={String(i % 4)}>
                <div className="tm__ph">
                  <div className="pmark">{m.init}</div>
                </div>
                <h4>{m.name}</h4>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="s" style={{ paddingBottom: "120px" }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">A short history</div>
              <h2 className="s-title reveal" data-d="1">
                A short, honest <em>timeline.</em>
              </h2>
            </div>
          </div>
          <div className="tl-rows">
            {timeline.map((row, i) => (
              <div key={row.year} className="tl-row reveal" data-d={String(i)}>
                <div className="tl-year">{row.year}</div>
                <div className="tl-title">{row.title}</div>
                <div className="tl-body">{row.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="band">
        <div className="wrap">
          <div className="band-grid">
            {bandStats.map((s, i) => (
              <div key={i} className="reveal" data-d={String(i)}>
                <div className="b-stat__n">{s.n}</div>
                <div className="b-stat__l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none">
          <Squares
            squareSize={60}
            direction="down"
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
            Partners — not vendors, not retainers
          </div>
          <h2 className="reveal" data-d="1">
            Want to <em>build the next one</em> with us?
          </h2>
          <Magnetic>
            <Link
              to="/contact"
              className="cta-btn reveal"
              data-d="2"
              data-hover
              style={{
                background: "var(--accent)",
                color: "var(--ink)",
                marginTop: 40,
              }}
            >
              Say hello{" "}
              <span className="dot" style={{ background: "var(--ink)" }} />
            </Link>
          </Magnetic>
        </div>
      </section>
    </div>
  );
}
