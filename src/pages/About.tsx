import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Faq from "../components/Faq";
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


const timeline = [
  {
    year: "2020",
    title: "Agency founded in Anand",
    body: "Satvix was started as a founder-led studio in Anand, Gujarat. Focus from day one: senior-only builds for founders who need to ship fast.",
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

const aboutFaqs = [
  {
    question: "Who runs the agency?",
    answer:
      "Satvix is led by an experienced team of engineering and design leads. We manage all projects internally, assigning dedicated technical architects, product designers, and project managers to each engagement.",
  },
  {
    question: "How big is the team?",
    answer:
      "We are a growing team of engineers, designers, QA specialists, and product managers based in Anand, Gujarat. Our structure ensures we can scale resource allocation dynamically to match your project's roadmap and complexity.",
  },
  {
    question: "What makes you different from standard outsourcing agencies?",
    answer:
      "We don't just supply developers; we provide end-to-end delivery teams. We combine agile project management with senior technical oversight. There are no communication gaps, no black-box development, and every line of code undergoes rigorous QA and senior peer review before deployment.",
  },
  {
    question: "Do you work with foreign clients?",
    answer:
      "Yes. Over half of our client base consists of startups and enterprises in the US, UK, EU, and Australia. We support timezone overlap, invoice in major global currencies (USD, GBP, EUR, INR), and sign comprehensive SaaS development contracts, SLAs, and NDAs.",
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
        title="About Satvix Tech Solutions — an Anand product studio"
        description="A digital product and software engineering studio in Anand, Gujarat. Senior MERN teams building web platforms, mobile apps and AI systems that ship."
        keywords="about Satvix Tech Solutions, software development company Anand, digital product agency India, custom software solutions Gujarat, offshore engineering services, software engineering agency"
        url="https://www.satvixtech.com/about"
        breadcrumb={[
          { name: "Home", item: "https://www.satvixtech.com" },
          { name: "About", item: "https://www.satvixtech.com/about" },
        ]}
        faq={aboutFaqs}
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
                "Full-service agency.",
                "Delivery-focused.",
                "<em>Built to outlast us.</em>",
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
              A full-service digital product agency in Anand. We combine product design, 
              software engineering, QA, and project management to build high-performance 
              platforms. Transparent processes, dedicated teams, and clear communication.
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
            That’s the agency we built.{" "}
            <span className="dim">
              That’s the team you would be working with.
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

      {/* FAQ */}
      <Faq faqs={aboutFaqs} eyebrow="05 Things people often ask" />

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
