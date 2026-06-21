import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import Squares from "../components/ui/squares";
import Magnetic from "../components/Magnetic";

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

const values = [
  {
    n: "01",
    title: "You own the thing, not the ticket",
    body: "Engineers here talk to users, argue about scope, choose the trade-offs. Tickets are a side effect of doing the work, not the work itself.",
  },
  {
    n: "02",
    title: "Senior by default",
    body: "Small team, high trust. There is no approval queue between you and good work. Real responsibility from week one.",
  },
  {
    n: "03",
    title: "Time to learn things properly",
    body: "New stacks, new domains, hard problems. We pair people deliberately and protect deep-work time — even on the weeks the deadline is closing in.",
  },
  {
    n: "04",
    title: "Anand by default, remote by choice",
    body: "Most of us are in the studio in Anand on Tuesdays and Thursdays. The rest of the week is up to you. What matters is the craft and the communication, not the chair.",
  },
];

const perks = [
  "Salary that is honest about the market",
  "Hybrid by default — Anand on Tue + Thu",
  "Annual learning and conference budget",
  "Whatever laptop you actually want",
  "Health cover for you and family",
  "Real ownership on real products",
  "A real leave policy people actually use",
  "A team that ships every fortnight",
];

const openings = [
  {
    role: "Senior React engineer",
    team: "Web",
    type: "Full-time",
    loc: "Anand / Hybrid",
  },
  {
    role: "React Native developer",
    team: "Mobile",
    type: "Full-time",
    loc: "Anand / Hybrid",
  },
  {
    role: "AI / ML engineer",
    team: "AI",
    type: "Full-time",
    loc: "Anand / Hybrid",
  },
  {
    role: "Product designer",
    team: "Design",
    type: "Full-time",
    loc: "Anand / Hybrid",
  },
  {
    role: "DevOps engineer",
    team: "Platform",
    type: "Full-time",
    loc: "Anand / Hybrid",
  },
  {
    role: "QA automation engineer",
    team: "Quality",
    type: "Full-time",
    loc: "Anand / Hybrid",
  },
];

const hiring = [
  {
    n: "01",
    title: "Send something",
    desc: "A CV, a portfolio, a GitHub, or just a paragraph about what you have built. Every application is read by a person on the team you would join.",
  },
  {
    n: "02",
    title: "A real conversation",
    desc: "Thirty minutes about you, us, and what good work looks like to you. No personality quizzes.",
  },
  {
    n: "03",
    title: "A piece of the work",
    desc: "A short, paid exercise close to what the role actually does. No whiteboard trivia, no leetcode in a fluorescent room.",
  },
  {
    n: "04",
    title: "Meet the room",
    desc: "You meet the people you would sit next to. We meet the questions you still have. Then we make an offer and you pick the start date.",
  },
];

export default function Careers() {
  return (
    <div>
      <SEO
        title="Careers at Satvix Tech Solutions — Anand, Gujarat"
        description="Careers at Satvix Tech Solutions: we are hiring React, React Native, AI/ML, design, DevOps and QA roles in Anand, Gujarat. Hybrid, senior-only, real ownership of the work."
        keywords="careers Satvix Tech Solutions, Satvix Tech Solutions jobs, IT jobs Anand Gujarat, software developer jobs India, React developer jobs Gujarat, hybrid developer jobs India, AI ML engineer jobs India, product designer jobs India, DevOps jobs India, software company careers Gujarat"
        url="https://satvixtech.com/careers"
        breadcrumb={[
          { name: "Home", item: "https://satvixtech.com" },
          { name: "Careers", item: "https://satvixtech.com/careers" },
        ]}
      />

      {/* Hero */}
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
            Six rooms open · we read every application
          </div> */}
          <h1>
            {(
              [
                "Come do the work",
                "you’ll still be proud",
                "<em>of in ten years.</em>",
              ] as const
            ).map((line, i) => (
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
              Satvix Tech Solutions &nbsp;/&nbsp; Careers
            </div>
            <p>
              Forty people, one building in Anand, clients in seven countries.
              If you care about craft, the second draft, and shipping things you
              would still recommend to a friend two years later — you would
              probably like it here.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="s">
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">Why you might stay</div>
              <h2 className="s-title reveal" data-d="1">
                A studio that is <em>built around the work.</em>
              </h2>
            </div>
          </div>
          <div className="pgrid">
            {values.map((v) => (
              <div key={v.n} className="prin reveal">
                <div className="prin__n">{v.n}</div>
                <div>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
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
              <div className="eyebrow reveal">
                The benefits we actually mean
              </div>
              <h2 className="s-title reveal" data-d="1">
                Eight things, <em>no fine print.</em>
              </h2>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 12,
            }}
          >
            {perks.map((p, i) => (
              <div
                key={p}
                className="reveal"
                data-d={String(i % 4)}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "center",
                  padding: "20px 22px",
                  background: "var(--bg)",
                  border: "1px solid var(--line)",
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    flexShrink: 0,
                  }}
                />
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="s">
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">Open rooms</div>
              <h2 className="s-title reveal" data-d="1">
                Six chairs <em>currently empty.</em>
              </h2>
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--line)" }}>
            {openings.map((o, i) => (
              <Link
                key={o.role}
                to="/contact"
                className="svc reveal"
                data-hover
                data-d={String(i % 4)}
                style={{ gridTemplateColumns: "1.6fr 1fr 1fr auto" }}
              >
                <div
                  className="svc__name"
                  style={{ fontSize: "clamp(22px,2.6vw,34px)" }}
                >
                  {o.role}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: ".08em",
                    color: "var(--ink-2)",
                  }}
                >
                  <Clock size={14} /> {o.type}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: ".08em",
                    color: "var(--ink-2)",
                  }}
                >
                  <MapPin size={14} /> {o.loc}
                </div>
                <div className="svc__arrow">
                  <ArrowUpRight size={18} />
                </div>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 28, color: "var(--muted)", fontSize: 15 }}>
            Your role not on the list?{" "}
            <Link
              to="/contact"
              style={{ color: "var(--accent)", fontWeight: 500 }}
            >
              Write to us anyway.
            </Link>{" "}
            We have hired the wrong job description into the right person
            before.
          </p>
        </div>
      </section>

      {/* Hiring process */}
      <section
        className="s"
        style={{
          background: "var(--ink)",
          color: "var(--bg)",
          paddingTop: 120,
          paddingBottom: 120,
        }}
      >
        <div className="wrap">
          <div className="s-head">
            <div>
              <div
                className="eyebrow reveal"
                style={{ color: "rgba(255,255,255,.6)" }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 24,
                    height: 1,
                    background: "rgba(255,255,255,.4)",
                    flexShrink: 0,
                  }}
                />
                How we hire
              </div>
              <h2
                className="s-title reveal"
                data-d="1"
                style={{ color: "var(--bg)" }}
              >
                Four steps, no <em>vibes interviews.</em>
              </h2>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 32,
            }}
          >
            {hiring.map((h) => (
              <div key={h.n} className="reveal">
                <div
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 48,
                    fontWeight: 500,
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: 16,
                  }}
                >
                  {h.n}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 22,
                    fontWeight: 500,
                    margin: "0 0 10px",
                  }}
                >
                  {h.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "rgba(255,255,255,.65)",
                    fontSize: 15,
                    lineHeight: 1.6,
                  }}
                >
                  {h.desc}
                </p>
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
            direction="up"
            speed={0.08}
            borderColor="#ffffff"
          />
        </div>
        <div className="wrap relative z-10" style={{ position: "relative" }}>
          <div
            className="eyebrow reveal"
            style={{
              color: "rgba(255,255,255,.55)",
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            One inbox. A person reads it.
          </div>
          <h2 className="reveal" data-d="1">
            Send something — even a <em>rough draft.</em>
          </h2>
          <Magnetic>
            <a
              href="mailto:careers@satvixtech.com"
              className="big-cta reveal"
              data-d="2"
              data-hover
            >
              careers@satvixtech.com
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
