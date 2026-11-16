import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import RevealText from "../components/ui/reveal-text";
import MarqueeCta from "../components/ui/marquee-cta";
import Faq from "../components/Faq";

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
    body: "Most of us are in the agency office in Anand on Tuesdays and Thursdays. The rest of the week is up to you. What matters is the craft and the communication, not the chair.",
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

/* Candidates ask these before they apply, and the answers are also what a
   search result should show. Neither existed on the page. */
const careersFaqs = [
  {
    question: "Where is the role based?",
    answer:
      "Anand, Gujarat, hybrid. We work in the same room often enough to design together, and we do not count hours in a chair.",
  },
  {
    question: "What is the interview process?",
    answer:
      "A conversation about work you have shipped, a practical exercise close to real work (paid if it takes real time), and a session with the founder. No whiteboard puzzles, no unpaid take-homes that run for days.",
  },
  {
    question: "Do you hire juniors?",
    answer:
      "We hire people who can own work end to end, which usually means some real experience — but we care more about how you think than years on a CV. If you can show us something you built and explain the decisions in it, apply.",
  },
  {
    question: "What will I actually work on?",
    answer:
      "Client products that ship — React, React Native, Node, and AI-augmented delivery on real codebases. Small teams, direct client contact, and your name on the work rather than three layers of account management between you and the person using it.",
  },
];

export default function Careers() {
  return (
    <div>
      <SEO
        title="Careers at Satvix Tech Solutions — Anand, Gujarat"
        description="Careers at Satvix Tech Solutions. No open positions right now, but we're always looking for great people. Drop us a line if you care about craft."
        keywords="careers Satvix Tech Solutions, Satvix Tech Solutions jobs, IT jobs Anand Gujarat, software developer jobs India, software company careers Gujarat"
        faq={careersFaqs}
        url="https://www.satvixtech.com/careers"
        breadcrumb={[
          { name: "Home", item: "https://www.satvixtech.com" },
          { name: "Careers", item: "https://www.satvixtech.com/careers" },
        ]}
      />

      {/* Hero */}
      <section className="page-hero relative overflow-hidden">
        <div className="wrap relative z-10">
          {/* <div className="page-hero__eyebrow">
            <span className="ping" />
            No open roles right now · we still read every message
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
              Founder-led, AI-augmented, based in Anand, working across three
              continents. If you're senior, care about craft, and would rather
              ship a fintech MVP in two weeks than sit through a two-quarter
              planning cycle — you'd like it here.
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
                <RevealText>An agency that is <em>built around the work.</em></RevealText>
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
                <RevealText>Eight things, <em>no fine print.</em></RevealText>
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
                <RevealText>Four steps, no <em>vibes interviews.</em></RevealText>
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

      <Faq faqs={careersFaqs} eyebrow="What candidates ask us" />

      {/* CTA */}
      <MarqueeCta
        label="One inbox. A person reads it."
        words="rough draft · Satvix · "
        title={<>Send something — even a <em>rough draft.</em></>}
      >
        <a href="mailto:infosatvixtech@gmail.com" className="mcta__btn" data-hover>
          infosatvixtech@gmail.com
          <span className="mcta__btn-arrow">
            <ArrowUpRight size={18} />
          </span>
        </a>
      </MarqueeCta>
    </div>
  );
}
