import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Faq from "../components/Faq";
import { industryPath } from "../data/routes";
import Squares from "../components/ui/squares";
import Magnetic from "../components/Magnetic";

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

const industries = [
  {
    slug: "finance",
    num: "01",
    name: "Fintech & banking",
    desc: "Card-issuing platforms, wallets, lending, payments. Built to clear an RBI audit the week you launch — not the quarter after.",
    tags: ["Payments", "Lending", "PCI-DSS", "KYC"],
  },
  {
    slug: "healthcare",
    num: "02",
    name: "Healthcare & wellness",
    desc: "Telehealth, patient records, wellness apps. We treat HIPAA and India’s DPDP as design constraints, not as a final pass before launch.",
    tags: ["Telehealth", "EHR", "HIPAA", "Wellness"],
  },
  {
    slug: "retail",
    num: "03",
    name: "Commerce & retail",
    desc: "Headless storefronts, marketplaces, loyalty, POS. Stacks that survive a Diwali Saturday — and the analytics to tell you what really moved.",
    tags: ["Headless", "Shopify", "Marketplace", "Loyalty"],
  },
  {
    slug: "legal",
    num: "04",
    name: "Legal & regtech",
    desc: "Document automation, contract review, AI-assisted research. Designed for partners who will only forgive one wrong answer.",
    tags: ["AI review", "Contracts", "Compliance", "Audit"],
  },
  {
    slug: "logistics",
    num: "05",
    name: "Logistics & supply chain",
    desc: "Fleet tracking, last-mile optimisation, warehouse ops. Real-time visibility that survives the warehouse Wi-Fi, not just the demo.",
    tags: ["Tracking", "Fleet", "Warehouse", "Last-mile"],
  },
  {
    slug: "education",
    num: "06",
    name: "EdTech & training",
    desc: "Learning platforms, AI tutors, cohorts, certificates. Tools learners actually open on day fourteen — not just day one.",
    tags: ["LMS", "AI tutor", "Cohorts", "Certificates"],
  },
  {
    slug: "media-ott",
    num: "07",
    name: "Media & entertainment",
    desc: "OTT, creator tools, audience analytics. Latency budgets and caching tables we sweat over so the play button just works.",
    tags: ["OTT", "CDN", "Creator tools", "Analytics"],
  },
  {
    slug: "manufacturing",
    num: "08",
    name: "Manufacturing & IoT",
    desc: "Factory dashboards, sensor pipelines, predictive maintenance, inventory. Software that talks to the PLC and to the boardroom in the same week.",
    tags: ["IoT", "Predictive", "SCADA", "Inventory"],
  },
];

const reasons = [
  {
    n: "01",
    title: "We have done this before",
    body: "Eight verticals, six years of receipts. We know the compliance traps, the table-stakes features and the gap your competitor has not noticed yet.",
  },
  {
    n: "02",
    title: "No ramp-up tax",
    body: "You will not spend the first month teaching us your business. We arrive with the questions already written down.",
  },
  {
    n: "03",
    title: "References worth calling",
    body: "Founders in your vertical that have shipped with us. Phone numbers, not testimonials.",
  },
  {
    n: "04",
    title: "Audit-friendly engineering",
    body: "HIPAA, PCI-DSS, GDPR, DPDP, SOC 2. We design with the auditor in the room from the start, not at the end.",
  },
];

/* FAQPage schema plus a real block on the page. This index had neither, which
   left the "which vertical are you actually good at" question — the one every
   buyer arrives with — unanswered. */
const industriesFaqs = [
  {
    question: "Which industries have you actually shipped in?",
    answer:
      "Fintech (Nine Finance — a live lending platform), commerce (Glamour Jewelry — a live storefront), manufacturing (Charotar Soap Factory — production and stock), and retail operations (Shreeji HRMS — attendance, payroll and customer ledgers). The other verticals here are ones our stack fits; we will tell you plainly which is which.",
  },
  {
    question: "Do you understand our compliance requirements?",
    answer:
      "We treat them as design constraints rather than a final-week scramble — HIPAA and India's DPDP on healthcare work, RBI and PCI-DSS on payments and lending. Where a rule is specific to your business, we bring in your compliance people during the discovery sprint, not after the build.",
  },
  {
    question: "Do you need domain experience to build our product?",
    answer:
      "We need access to someone who has it. The best builds we have shipped came from sitting with the people who do the work daily — the field agent collecting EMIs, the owner marking attendance in Gujarati. We bring the engineering; you bring the domain, and we ask a lot of questions.",
  },
  {
    question: "Can you white-label a product for our industry?",
    answer:
      "Yes — Charotar Soap Factory was built that way from day one: multi-tenant, deployable per manufacturer. If your industry has the same shape (many similar businesses, same core workflow), that is the model we would propose.",
  },
];

export default function Industries() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <SEO
        title="Industries — verticals Satvix Tech Solutions has shipped in"
        description="Satvix Tech Solutions builds software for fintech, healthcare, commerce, legal, logistics, EdTech, OTT and manufacturing. Eight verticals, six years, one agency in Anand."
        keywords="industry software development India, fintech software company India, healthcare tech India, edtech development company, logistics software India, legal tech company India, OTT platform development, insurtech India, travel tech development, manufacturing software India, retail tech company, telecom software India, construction tech India, marketplace development India, on demand app India, sports tech India, domain specific software development India, vertical SaaS India"
        faq={industriesFaqs}
        url="https://www.satvixtech.com/industries"
        breadcrumb={[
          { name: "Home", item: "https://www.satvixtech.com" },
          { name: "Industries", item: "https://www.satvixtech.com/industries" },
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
            hoverFillColor="rgba(227, 30, 36, 0.04)"
            fadeColor="var(--bg)"
          />
        </div>
        <div className="wrap relative z-10">
          {/* <div className="page-hero__eyebrow">
            <span className="ping" />
            Industries
          </div> */}
          <h1>
            {(
              [
                "Eight verticals.",
                "Already",
                "<em>shipped in.</em>",
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
              Satvix Tech Solutions &nbsp;/&nbsp; Industries
            </div>
            <p>
              Domain knowledge saves quarters. We know which features are
              table stakes, which audits are real, and where the opportunity
              nobody else noticed actually lives.
            </p>
          </div>
        </div>
      </section>

      {/* Industry rows */}
      <section className="s" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div style={{ borderTop: "1px solid var(--line)" }}>
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                to={industryPath(ind.slug)}
                className="svc reveal"
                data-hover
              >
                <div className="svc__num">{ind.num}</div>
                <div className="svc__name" style={{ flex: "0 0 280px" }}>
                  {ind.name}
                </div>
                <div
                  style={{
                    flex: 1,
                    color: "var(--ink-2)",
                    fontSize: 15,
                    lineHeight: 1.55,
                  }}
                >
                  {ind.desc}
                </div>
                <div className="svc__tags">
                  {ind.tags.map((t) => (
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

      {/* Why domain matters */}
      <section
        className="s"
        style={{
          background: "var(--ink)",
          color: "var(--bg)",
          padding: "120px 0",
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
                Why it matters
              </div>
              <h2
                className="s-title reveal"
                data-d="1"
                style={{ color: "var(--bg)" }}
              >
                Industry context is <em>compounding interest.</em>
              </h2>
            </div>
          </div>
          <div
            className="pgrid"
            style={{ borderTopColor: "rgba(255, 255, 255,.1)" }}
          >
            {reasons.map((r) => (
              <div
                key={r.n}
                className="prin reveal"
                style={{
                  borderBottomColor: "rgba(255, 255, 255,.1)",
                  borderRightColor: "rgba(255, 255, 255,.1)",
                }}
              >
                <div className="prin__n">{r.n}</div>
                <div>
                  <h3 style={{ color: "var(--bg)" }}>{r.title}</h3>
                  <p style={{ color: "rgba(255, 255, 255,.65)" }}>{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="band">
        <div className="wrap">
          <div className="band-grid">
            {[
              { n: "3", l: "Shipped products, verifiable" },
              { n: "2 wks", l: "Fastest delivery — fintech" },
              { n: "7+ yrs", l: "Senior MERN, founder-led" },
              { n: "1", l: "Working demo, every Friday" },
            ].map((s, i) => (
              <div key={i} className="reveal" data-d={String(i)}>
                <div className="b-stat__n">{s.n}</div>
                <div className="b-stat__l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq faqs={industriesFaqs} eyebrow="Questions before you pick a vertical" />

      {/* CTA */}
      <section className="cta-section relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Squares
            squareSize={60}
            direction="up"
            speed={0.08}
            borderColor="#ffffff"
            hoverFillColor="rgba(227, 30, 36, 0.08)"
            fadeColor="var(--ink)"
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
            Don’t see your industry? Tell us anyway.
          </div>
          <h2 className="reveal" data-d="1">
            Build the <em>eleventh</em> with us.
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
                display: "inline-flex",
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
