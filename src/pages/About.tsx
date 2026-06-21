import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

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
    body: "We’re in Anand. Half our work is in Bangalore, London and New York. The studio travels in suitcases, not satellites.",
  },
];

const team = [
  { init: "B", name: "Batukbhai Sarvaiya", role: "Founder — keeps the lights on" },
  { init: "R", name: "Rahul Patel", role: "Engineering — architecture & code review" },
  { init: "P", name: "Priya Mehta", role: "Design — flows, systems, type" },
  { init: "A", name: "Arjun Shah", role: "AI & data — LLM features, retrieval" },
  { init: "N", name: "Nisha Desai", role: "Product — discovery & roadmap" },
  { init: "K", name: "Karan Joshi", role: "Mobile — iOS, Android, RN" },
  { init: "S", name: "Sneha Trivedi", role: "Brand — naming, narrative, editorial" },
  { init: "D", name: "Dev Agarwal", role: "Backend — Postgres, Node, the boring bits" },
];

const timeline = [
  {
    year: "2020",
    title: "Two people. One laptop.",
    body: "Batukbhai signs the lease on a single-room office in Anand. The first client — a clinic in Vadodara — ships thirty days later.",
  },
  {
    year: "2021",
    title: "First fintech, first scare",
    body: "A 200,000-user lender becomes our first regulated build. We learn the hard way that ‘compliance’ is just design with stricter constraints.",
  },
  {
    year: "2022",
    title: "Mobile gets its own room",
    body: "iOS and Android join the studio properly. By December the first React Native app passes 100k downloads.",
  },
  {
    year: "2023",
    title: "Design moves upstream",
    body: "Priya joins as design lead. We stop being ‘the engineering team that does design too’ and start naming companies, writing taglines, drawing logos.",
  },
  {
    year: "2024",
    title: "We become useful at AI",
    body: "Arjun spins up the AI desk. The first LLM-powered product — a contract assistant — goes live with a real law firm in Mumbai.",
  },
  {
    year: "2025",
    title: "Forty heads, three continents",
    body: "120 products shipped. Clients in Bangalore, London, New York, Berlin, Dubai. Still in the same building in Anand.",
  },
];

const bandStats = [
  { n: "40", label: "People you can call by name" },
  { n: "120+", label: "Products quietly in the world" },
  { n: "98%", label: "Clients who renew" },
  { n: "6", label: "Years in one building in Anand" },
];

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <SEO
        title="About Satvix Tech Solutions — forty people, one studio in Anand"
        description="About Satvix Tech Solutions: a 40-person independent digital studio in Anand, Gujarat, shipping web, mobile and AI products with founders and enterprise teams since 2020."
        keywords="about Satvix Tech Solutions, Satvix Tech Solutions team, digital product studio India, software company Anand Gujarat, independent dev studio India, Batukbhai Sarvaiya, who we are Satvix Tech Solutions, software studio Gujarat"
        url="https://satvixtech.com/about"
        breadcrumb={[
          { name: "Home", item: "https://satvixtech.com" },
          { name: "About", item: "https://satvixtech.com/about" },
        ]}
        faq={[
          {
            question: "When was the studio founded?",
            answer:
              "Batukbhai started Satvix in 2020 out of a one-room office in Anand. We have grown to a forty-person studio, still in Anand.",
          },
          {
            question: "How big is the team?",
            answer:
              "Forty designers, engineers, product people and writers. Big enough to staff a full product team end-to-end; small enough that we still know everyone’s coffee order.",
          },
          {
            question: "What makes you different from other agencies?",
            answer:
              "Two things, mostly. We don’t hand work over walls — the same team scopes the work, designs it, builds it and stays on after launch. And we take on fewer projects than we technically could.",
          },
          {
            question: "Do you only work with Indian clients?",
            answer:
              "About half of our clients are in India; the rest are in the US, UK, EU and the Middle East. We work fully remote, hybrid, or — occasionally — by getting on a plane.",
          },
        ]}
      />

      {/* Page hero */}
      <section className="page-hero" ref={heroRef}>
        <div className="wrap">
          <div className="page-hero__eyebrow">
            <span className="ping" />
            About the studio
          </div>
          <h1>
            {(
              [
                "Forty people,",
                "one studio,",
                "<em>still in Anand.</em>",
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
              We have been a small, independent studio in Anand, Gujarat since 2020.
              Six years in, we have shipped a hundred and twenty products with
              founders, operators and a few patient enterprise teams. The studio
              has grown; the front door has not moved.
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="manifesto">
        <div className="wrap">
          <p className="reveal">
            The best software is <em>invisible.</em> Nobody notices it; it just gets out of the way.
          </p>
          <p className="reveal" data-d="1">
            We don’t separate design from engineering.{" "}
            <span className="dim">We never figured out how, and it turned out to be a feature.</span>
          </p>
          <p className="reveal" data-d="2">
            Good products are made by people who <em>care, then think, then ship</em> — in that order.
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
                You will mostly be talking to <em>these eight.</em>
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
                Six years, told in <em>six paragraphs.</em>
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
      <section className="cta-section">
        <div className="wrap" style={{ position: "relative" }}>
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
        </div>
      </section>
    </div>
  );
}
