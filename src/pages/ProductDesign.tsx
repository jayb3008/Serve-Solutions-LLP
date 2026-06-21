import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

const gallery = {
  main: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
  s1: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=700",
  s2: "https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=700",
};

const capabilities = [
  {
    num: "01",
    pre: "UX",
    em: "research",
    tags: ["User interviews", "JTBD", "Analytics"],
    desc: "We uncover what users actually need — not what they say they want — through research methods that surface real behaviour and pain points.",
    list: [
      "User interviews & surveys",
      "Jobs-to-be-done mapping",
      "Competitive analysis",
      "Analytics & heatmap review",
      "Persona & journey mapping",
      "Opportunity scoring",
    ],
  },
  {
    num: "02",
    pre: "Wireframes &",
    em: "prototypes",
    tags: ["Figma", "FigJam", "Framer"],
    desc: "Low-fidelity flows validated with real users before a pixel of final UI is produced. Speed and confidence at every stage.",
    list: [
      "Information architecture",
      "Low-fi wireframes",
      "Interactive Figma prototypes",
      "User-testing sessions",
      "Rapid iteration cycles",
      "Stakeholder walkthroughs",
    ],
  },
  {
    num: "03",
    pre: "UI",
    em: "design",
    tags: ["Design systems", "Tokens", "Components"],
    desc: "Pixel-perfect interfaces built on a tokenised design system — so every screen feels intentional and every component ships clean.",
    list: [
      "Visual design direction",
      "Component library (Figma)",
      "Design token architecture",
      "Responsive breakpoints",
      "Dark mode & themes",
      "Micro-interaction specs",
    ],
  },
  {
    num: "04",
    pre: "Design",
    em: "operations",
    tags: ["Handoff", "QA", "Accessibility"],
    desc: "We don't throw specs over a wall. We work alongside engineering to ensure every design intention survives the build.",
    list: [
      "Dev-ready Figma annotations",
      "Design QA in staging",
      "Accessibility audits (WCAG 2.2)",
      "Design system documentation",
      "Component naming conventions",
      "Ongoing design retainers",
    ],
  },
];

const useCases = [
  {
    title: "SaaS product redesign",
    desc: "End-to-end redesign of complex dashboards and workflows to increase activation and reduce churn.",
    img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Mobile app onboarding",
    desc: 'Onboarding flows that guide users to their first "aha moment" without friction or confusion.',
    img: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Design system build",
    desc: "A tokenised component library in Figma and React that keeps design and code in sync at scale.",
    img: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "E-commerce checkout",
    desc: "Streamlined purchase flows that cut abandonment and lift conversion with evidence-based design.",
    img: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Dashboard & data viz",
    desc: "Complex data made legible — charts, tables, and filters that analysts actually enjoy using.",
    img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Brand-new startup UI",
    desc: "From blank canvas to launch-ready product UI in weeks, not months.",
    img: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const techStack = [
  { name: "Figma", cat: "Design" },
  { name: "Framer", cat: "Prototyping" },
  { name: "FigJam", cat: "Workshopping" },
  { name: "Storybook", cat: "Component docs" },
  { name: "Zeroheight", cat: "Design ops" },
  { name: "React", cat: "Implementation" },
  { name: "Tailwind", cat: "Styling" },
  { name: "Lottie", cat: "Animation" },
  { name: "Hotjar", cat: "Research" },
  { name: "Maze", cat: "User testing" },
];

const process = [
  {
    n: "01",
    title: "Discovery",
    body: "We map your users, jobs-to-be-done, and business goals before sketching a single screen. No assumptions — only evidence.",
  },
  {
    n: "02",
    title: "Wireframes",
    body: "Low-fidelity flows validated with real users. We find the holes before visual polish makes them expensive to fix.",
  },
  {
    n: "03",
    title: "Visual design",
    body: "Pixel-perfect UI built on a tokenised system — Figma components wired to production-ready design tokens.",
  },
  {
    n: "04",
    title: "Handoff & QA",
    body: "Annotated specs, dev-ready tokens, and design QA in staging. We stay in the room until the build matches the vision.",
  },
];

export default function ProductDesign() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <SEO
        title="Product design — Satvix Tech Solutions, Anand, Gujarat"
        description="Product design at Satvix Tech Solutions: research, interaction design, UI, prototyping and design systems. We design products people reach for without thinking about it."
        keywords="Satvix Tech Solutions design, product design company India, UX design agency Gujarat, UI UX design India, Figma design agency India, design system development India, prototyping agency India, user research company India, interaction design India, SaaS product design India, design studio Anand Gujarat"
        url="https://satvixtech.com/services/product-design"
        breadcrumb={[
          { name: "Home", item: "https://satvixtech.com" },
          { name: "Services", item: "https://satvixtech.com/services" },
          {
            name: "Product Design",
            item: "https://satvixtech.com/services/product-design",
          },
        ]}
      />

      {/* Page hero */}
      <section className="page-hero" ref={heroRef}>
        <div className="wrap">
          <div className="page-hero__eyebrow">
            <span className="ping" />
            Product Design
          </div>
          <h1>
            {(
              [
                "Interfaces people",
                "reach for without",
                "<em>thinking about it.</em>",
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
              Satvix Tech Solutions &nbsp;/&nbsp; Services &nbsp;/&nbsp; Product
              Design
            </div>
            <p>
              We start with the user’s actual problem and end with the screen
              they do not need to think about. Research, prototypes, design
              systems, and the careful documentation that keeps the work
              consistent after we have left the room.
            </p>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((i) => (
            <span key={i} className="marquee__item">
              UX research <span className="star">✦</span> Wireframes <em>·</em>{" "}
              Prototyping <span className="star">✦</span> UI design <em>·</em>{" "}
              Design systems <span className="star">✦</span> Handoff{" "}
              <em>·</em>{" "}
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
                alt="Product design workspace"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:flex flex-col gap-3">
              <div className="flex-1 rounded-[18px] overflow-hidden">
                <img
                  src={gallery.s1}
                  alt="Design collaboration session"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 rounded-[18px] overflow-hidden">
                <img
                  src={gallery.s2}
                  alt="User research and sticky notes"
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
                Four practices, <em>one design team.</em>
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
                Problems we <em>solve.</em>
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
              <div className="eyebrow reveal">Tools</div>
              <h2 className="s-title reveal" data-d="1">
                Our design <em>toolkit.</em>
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
              We pick the right tool for each job — not the one we're most
              comfortable with.
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
                From insight to <em>shipped UI.</em>
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
            Let's design something worth using
          </div>
          <h2 className="reveal" data-d="1">
            Got a product worth <em>designing?</em>
          </h2>
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
          <div style={{ marginTop: 48 }}>
            <Link
              to="/services"
              className="btn-ghost reveal"
              data-d="3"
              data-hover
            >
              All services <span className="arr" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
