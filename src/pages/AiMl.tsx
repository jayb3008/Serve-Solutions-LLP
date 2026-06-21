import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Squares from "../components/ui/squares";
import Magnetic from "../components/Magnetic";

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

const gallery = {
  main: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
  s1: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=700",
  s2: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=700",
};

const capabilities = [
  {
    num: "01",
    pre: "LLM",
    em: "integration",
    tags: ["GPT-4o", "Claude", "Gemini"],
    desc: "We embed large language models where they actually add value — not as demos, but as production features users depend on.",
    list: [
      "Prompt engineering & system design",
      "Multi-model routing & fallback",
      "Streaming responses & SSE",
      "Cost optimisation & caching",
      "Structured output & JSON mode",
      "Function / tool calling",
    ],
  },
  {
    num: "02",
    pre: "RAG &",
    em: "knowledge bases",
    tags: ["Embeddings", "Vector DB", "Retrieval"],
    desc: "Ground your AI in your own data. We design retrieval pipelines that keep answers accurate, current, and auditable.",
    list: [
      "Document ingestion & chunking",
      "Embedding models (OpenAI, Cohere)",
      "Vector databases (Pinecone, Weaviate, pgvector)",
      "Hybrid search (dense + sparse)",
      "Re-ranking & contextual compression",
      "Evaluation & hallucination testing",
    ],
  },
  {
    num: "03",
    pre: "AI",
    em: "agents",
    tags: ["Orchestration", "Tools", "Memory"],
    desc: "Autonomous workflows that reason, plan, and act — connected to your APIs, databases, and external services.",
    list: [
      "ReAct & plan-and-execute agents",
      "Tool / function orchestration",
      "Long-term memory stores",
      "Multi-agent systems",
      "Human-in-the-loop checkpoints",
      "Tracing & observability",
    ],
  },
  {
    num: "04",
    pre: "Data",
    em: "pipelines",
    tags: ["ETL", "Analytics", "Dashboards"],
    desc: "Clean, reliable data is the foundation of every AI system. We build pipelines that flow from raw source to production model.",
    list: [
      "ETL & event streaming",
      "Data warehouse integration",
      "Feature engineering",
      "Analytics dashboards",
      "Real-time data pipelines",
      "Data quality monitoring",
    ],
  },
];

const useCases = [
  {
    title: "Legal document review",
    desc: "Extract clauses, flag risks, and summarise contracts in seconds rather than hours.",
    img: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Customer support copilot",
    desc: "AI that drafts replies, routes tickets, and escalates edge cases to the right human.",
    img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Internal knowledge assistant",
    desc: "Ask anything about your docs, wikis, and runbooks — get cited, accurate answers.",
    img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Data extraction & classification",
    desc: "Turn unstructured PDFs, emails, and forms into structured records at scale.",
    img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "AI-powered onboarding",
    desc: 'Guide new users to their "aha moment" with personalised, conversational flows.',
    img: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Predictive analytics",
    desc: "Churn prediction, demand forecasting, anomaly detection — built on your own data.",
    img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const techStack = [
  { name: "OpenAI", cat: "LLM" },
  { name: "Anthropic", cat: "LLM" },
  { name: "LangChain", cat: "Orchestration" },
  { name: "LlamaIndex", cat: "RAG" },
  { name: "Pinecone", cat: "Vector DB" },
  { name: "pgvector", cat: "Vector DB" },
  { name: "Weaviate", cat: "Vector DB" },
  { name: "Vercel AI", cat: "SDK" },
  { name: "LangSmith", cat: "Observability" },
  { name: "Python", cat: "Language" },
];

const process = [
  {
    n: "01",
    title: "Discovery & scoping",
    body: "We map your data, users, and workflows to find where AI creates real leverage — not just novelty.",
  },
  {
    n: "02",
    title: "Prototype & evaluate",
    body: "Two-week spike: we build a working prototype, measure output quality, and stress-test edge cases before committing.",
  },
  {
    n: "03",
    title: "Build & integrate",
    body: "Production implementation wired into your product — with streaming, error handling, and cost guardrails built in.",
  },
  {
    n: "04",
    title: "Monitor & improve",
    body: "We instrument every AI call, track quality over time, and ship improvements as models and your data evolve.",
  },
];

export default function AiMl() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <SEO
        title="AI & ML services — Satvix Tech Solutions, Anand, Gujarat"
        description="Satvix Tech Solutions ships production AI — LLM features, RAG pipelines, agents and the evaluation, cost caps and observability that turn a clever demo into a real product."
        keywords="Satvix Tech Solutions AI, AI ML services India, LLM integration services India, RAG pipeline development India, AI agents development India, machine learning company India, OpenAI integration India, Anthropic Claude API India, LangChain development India, vector database India, generative AI company India, custom AI solutions India, AI consulting India"
        url="https://satvixtech.com/services/ai-ml"
        breadcrumb={[
          { name: "Home", item: "https://satvixtech.com" },
          { name: "Services", item: "https://satvixtech.com/services" },
          { name: "AI & ML", item: "https://satvixtech.com/services/ai-ml" },
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
            AI &amp; Machine Learning
          </div> */}
          <h1>
            {(
              ["Useful AI,", "not a demo on", "<em>a stage.</em>"] as const
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
              Satvix Tech Solutions &nbsp;/&nbsp; AI &amp; ML
            </div>
            <p>
              We embed LLMs and retrieval into products people already use. Cost
              caps, evaluation harnesses, fallback models, and the boring
              observability that turns a clever demo into something a regulated
              team can actually deploy.
            </p>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((i) => (
            <span key={i} className="marquee__item">
              LLM integration <span className="star">✦</span> RAG pipelines{" "}
              <em>·</em> AI agents <span className="star">✦</span> Fine-tuning{" "}
              <em>·</em> Data pipelines <span className="star">✦</span>{" "}
              Evaluation <em>·</em>{" "}
            </span>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <section
        style={{ padding: "80px 0", borderTop: "1px solid var(--line)" }}
      >
        <div className="wrap">
          <div className="grid md:grid-cols-3 gap-3" style={{ height: 480 }}>
            <div className="md:col-span-2 rounded-[18px] overflow-hidden h-[260px] md:h-auto">
              <img
                src={gallery.main}
                alt="AI and machine learning concept — neural networks"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:flex flex-col gap-3">
              <div className="flex-1 rounded-[18px] overflow-hidden">
                <img
                  src={gallery.s1}
                  alt="Data engineering team at work"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 rounded-[18px] overflow-hidden">
                <img
                  src={gallery.s2}
                  alt="Analytics dashboard and predictive charts"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section
        className="s"
        style={{ borderTop: "1px solid var(--line)", paddingTop: 0 }}
      >
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">Capabilities</div>
              <h2 className="s-title reveal" data-d="1">
                Four practices, <em>one AI team.</em>
              </h2>
            </div>
          </div>
          {capabilities.map((c) => (
            <div key={c.num} className="pract reveal">
              <div className="pract__num">{c.num}</div>
              <div className="pract__head">
                <h2>
                  {c.pre} <em>{c.em}</em>
                </h2>
                <div className="meta">
                  {c.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="pract__body">
                <p>{c.desc}</p>
                <ul className="pract__list">
                  {c.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
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
                Use cases
              </div>
              <h2
                className="s-title reveal"
                data-d="1"
                style={{ color: "var(--bg)" }}
              >
                AI that does <em>real work.</em>
              </h2>
            </div>
          </div>
          <div className="arch-grid" style={{ marginTop: 60 }}>
            {useCases.map((uc, i) => (
              <div
                key={uc.title}
                className="arch reveal"
                data-d={String(i % 3)}
                style={{ cursor: "default" }}
              >
                <div
                  className="arch__bg"
                  style={{
                    background: `linear-gradient(rgba(10,8,6,0.54), rgba(10,8,6,0.54)), url(${uc.img}) center/cover no-repeat`,
                  }}
                />
                <div className="arch__inner">
                  <div className="arch__top">
                    <div className="arch__meta">
                      <span>Use case</span>
                    </div>
                  </div>
                  <div>
                    <p className="arch__title">{uc.title}</p>
                    <p
                      style={{
                        fontSize: 14,
                        lineHeight: 1.5,
                        opacity: 0.75,
                        marginTop: 8,
                        maxWidth: "34ch",
                      }}
                    >
                      {uc.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="s" style={{ padding: "120px 0" }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">Technology</div>
              <h2 className="s-title reveal" data-d="1">
                Our AI <em>stack.</em>
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
              We're model-agnostic and cloud-agnostic — we pick the right tool
              for your use case, not the one we're most familiar with.
            </p>
          </div>
          <div className="stack-grid">
            {techStack.map((t, i) => (
              <div key={t.name} className="stk reveal" data-d={String(i % 5)}>
                <div className="stk__dot" />
                <h5>{t.name}</h5>
                <span>{t.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="s"
        style={{ borderTop: "1px solid var(--line)", paddingBottom: "120px" }}
      >
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">How we work</div>
              <h2 className="s-title reveal" data-d="1">
                From idea to <em>production.</em>
              </h2>
            </div>
          </div>
          <div className="tl-rows">
            {process.map((p, i) => (
              <div key={p.n} className="tl-row reveal" data-d={String(i)}>
                <div
                  className="tl-year"
                  style={{
                    fontSize: 20,
                    letterSpacing: ".04em",
                    fontFamily: "var(--mono)",
                    fontWeight: 400,
                    color: "var(--muted)",
                  }}
                >
                  {p.n}
                </div>
                <div className="tl-title">{p.title}</div>
                <div className="tl-body">{p.body}</div>
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
            Let's build something intelligent
          </div>
          <h2 className="reveal" data-d="1">
            Got an AI idea worth <em>shipping?</em>
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
          <div style={{ marginTop: 48 }}>
            <Magnetic>
              <Link
                to="/services"
                className="btn-ghost reveal"
                data-d="3"
                data-hover
                style={{
                  color: "var(--bg)",
                  borderColor: "rgba(255, 255, 255, 0.25)",
                }}
              >
                All services <span className="arr" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </div>
  );
}
