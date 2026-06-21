import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Squares from "../components/ui/squares";
import Magnetic from "../components/Magnetic";

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

const practices = [
  {
    num: "01",
    pre: "Product",
    em: "design",
    tags: ["Research", "Design systems", "Prototyping"],
    desc: "We start with the user’s actual problem and end with a thing they reach for without thinking. Researched, then drawn, then redrawn until it disappears.",
    list: [
      "User research and jobs-to-be-done",
      "Wireframes and clickable prototypes",
      "UI design and component libraries",
      "Usability testing and iteration",
      "Design ops and handoff",
      "Accessibility audits (WCAG 2.2)",
    ],
    href: "/services/product-design",
  },
  {
    num: "02",
    pre: "Web",
    em: "engineering",
    tags: ["Next.js", "Headless CMS", "Performance"],
    desc: "Fast, quiet, hard-to-break websites and platforms. From a four-page launch site to a SaaS that sees a million weekly users — built so your team can keep it running.",
    list: [
      "Next.js and React applications",
      "Headless CMS integrations",
      "Storefronts on Shopify and headless commerce",
      "Core Web Vitals and performance audits",
      "APIs and third-party integrations",
      "Accessibility (WCAG 2.2)",
    ],
    href: "/services/web-engineering",
  },
  {
    num: "03",
    pre: "Mobile",
    em: "apps",
    tags: ["iOS", "Android", "React Native"],
    desc: "Native when it matters, cross-platform when it doesn’t. We ship to the store, sit through the review, and watch the first day of analytics with you.",
    list: [
      "iOS — Swift, SwiftUI",
      "Android — Kotlin, Jetpack Compose",
      "React Native and Flutter for cross-platform",
      "Push, offline, background sync",
      "In-app purchases and subscriptions",
      "App Store / Play Store submissions",
    ],
    href: "/services/mobile",
  },
  {
    num: "04",
    pre: "AI &",
    em: "data",
    tags: ["LLMs", "RAG", "Agents"],
    desc: "Useful AI, not a demo on stage. We embed LLM features into real products, build retrieval pipelines on your data, and automate the work nobody actually wants to do.",
    list: [
      "LLM features and prompt engineering",
      "Retrieval-augmented generation and vector stores",
      "Agentic workflow automation",
      "Fine-tuning, evals, guardrails",
      "Data pipelines and ETL",
      "Analytics dashboards",
    ],
    href: "/services/ai-ml",
  },
  {
    num: "05",
    pre: "Brand &",
    em: "editorial",
    tags: ["Positioning", "Identity", "Writing"],
    desc: "A brand is the first line of code a founder writes — usually in the wrong language. We rewrite it. Name, voice, marks, the words on the homepage.",
    list: [
      "Positioning and naming",
      "Visual identity and logo systems",
      "Brand guidelines and tone of voice",
      "Marketing site copy and editorial",
      "Content strategy",
      "Launch communications",
    ],
    href: "/services/brand",
  },
];

const deliverables = [
  {
    title: "Discovery sprint",
    desc: "Two weeks of interviews, audits and whiteboards. You leave with a prioritised roadmap — and the honest answer to whether you should even build this.",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: "Design system",
    desc: "Tokens, components, documentation. Figma and the codebase stay in sync because they were built that way from day one.",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "A full-stack product",
    desc: "Auth, APIs, frontend, infrastructure, the lot. We own the build and hand over a production system your team can run on Monday.",
    icon: (
      <svg viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Mobile app on the store",
    desc: "iOS, Android or both. We handle the build, the review, the certificates, and the first awkward week after launch.",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "AI features that ship",
    desc: "Copilots, classifiers, extraction, agents — wired into your existing product, with evals so you know they actually got better.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Brand and editorial",
    desc: "Mark, type, colour, motion, voice. A brand book light enough to actually read, plus the words your homepage really needs.",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
];

const stackGroups = [
  {
    cat: "Design",
    tools: ["Figma", "Framer", "Adobe CC"],
  },
  {
    cat: "Frontend",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
    ],
  },
  {
    cat: "Mobile",
    tools: ["React Native", "Flutter", "SwiftUI", "Kotlin"],
  },
  {
    cat: "Backend & DB",
    tools: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Supabase", "Prisma"],
  },
  {
    cat: "AI & ML",
    tools: [
      "OpenAI",
      "Anthropic",
      "LangChain",
      "LlamaIndex",
      "Pinecone",
      "Weaviate",
      "HuggingFace",
      "Groq",
      "Mistral AI",
      "LangSmith",
    ],
  },
  {
    cat: "Cloud & Ops",
    tools: ["AWS", "Vercel", "Docker", "GitHub Actions"],
  },
];

export default function Services() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <SEO
        title="Services — five practices, one team at Satvix Tech Solutions"
        description="Satvix Tech Solutions offers product design, web engineering, mobile apps, AI/ML and brand — five practices from one team in Anand, Gujarat, with no handoffs."
        keywords="Satvix Tech Solutions services, product design services India, web engineering company India, mobile app development India, AI ML services India, brand strategy agency India, full-stack development India, digital product studio Anand Gujarat"
        url="https://satvixtech.com/services"
        breadcrumb={[
          { name: "Home", item: "https://satvixtech.com" },
          { name: "Services", item: "https://satvixtech.com/services" },
        ]}
        faq={[
          {
            question: "What does the studio actually do?",
            answer:
              "Five things, under one roof: product design, web engineering, mobile apps, AI features, and brand or editorial work. The same team can take a product from sketch to launch and stay for what comes after.",
          },
          {
            question: "Do you take on startups or enterprises?",
            answer:
              "Both, plus a small handful of operators in between. We adapt the team size and rhythm to the stage — a two-person founder build looks nothing like an enterprise replatform, and we are honest about which we are doing.",
          },
          {
            question: "How does a project usually start?",
            answer:
              "With a two-week discovery sprint. We sit with you, your team and your users, audit what exists, and leave you with a prioritised roadmap — and, often, an honest opinion about whether to do it at all.",
          },
          {
            question: "Can one team handle design and engineering together?",
            answer:
              "It is how we have always worked. Strategy, design and engineering at one table for the whole build — the same people who scope the work also ship it.",
          },
          {
            question: "How long does a project take?",
            answer:
              "A focused first release is usually eight to sixteen weeks. Larger platforms with integrations land in four to nine months. We will give you a real number — not a hopeful one — after discovery.",
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
            What we do
          </div> */}
          <h1>
            {(["The work,", "in plain", "<em>english.</em>"] as const).map(
              (line, i) => (
                <span key={i} className="row">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease, delay: 0.3 + i * 0.07 }}
                    style={{ display: "inline-block" }}
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                </span>
              ),
            )}
          </h1>
          <div className="page-hero__sub">
            <div className="breadcrumb">
              Satvix Tech Solutions &nbsp;/&nbsp; Services
            </div>
            <p>
              Five things we do. One team that does all of them. The same people
              who scope the work also draw it, write it, build it, and stay on
              after it ships.
            </p>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((i) => (
            <span key={i} className="marquee__item">
              Product design <span className="star">✦</span> Web engineering{" "}
              <em>·</em> Mobile apps <span className="star">✦</span> AI &amp;
              data <em>·</em> Brand strategy{" "}
              <span className="star">✦</span>{" "}
            </span>
          ))}
        </div>
      </div>

      {/* Practices */}
      <section className="s" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          {practices.map((p) => (
            <div key={p.num} className="pract reveal">
              <div className="pract__num">{p.num}</div>
              <div className="pract__head">
                <h2>
                  {p.pre} <em>{p.em}</em>
                </h2>
                <div className="meta">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="pract__body">
                <p>{p.desc}</p>
                <ul className="pract__list">
                  {p.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link
                  to={p.href}
                  className="btn-ghost"
                  data-hover
                  style={{ marginTop: 32 }}
                >
                  Learn more <span className="arr" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
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
                What you get
              </div>
              <h2
                className="s-title reveal"
                data-d="1"
                style={{ color: "var(--bg)" }}
              >
                Things we hand over <em>at the end.</em>
              </h2>
            </div>
          </div>
          <div className="dlv-grid">
            {deliverables.map((d) => (
              <div key={d.title} className="dlv reveal">
                <div className="dlv__icon">{d.icon}</div>
                <h4>{d.title}</h4>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="s" style={{ padding: "120px 0" }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">The stack</div>
              <h2 className="s-title reveal" data-d="1">
                The tools we reach for <em>first.</em>
              </h2>
            </div>
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
              We are not married to any framework — but every project starts
              with a default. These are ours. They are boring, well-documented,
              and easy to hire for once we hand the keys back.
            </p>
          </div>

          <div className="stack-cats reveal" data-d="1">
            {stackGroups.map((group) => (
              <div key={group.cat} className="stack-cat">
                <div className="stack-cat__label">{group.cat}</div>
                <ul className="stack-cat__tools">
                  {group.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
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
              color: "rgba(255, 255, 255,.55)",
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            Tell us what you’re trying to build
          </div>
          <h2 className="reveal" data-d="1">
            Something <em>specific</em> in mind?
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
