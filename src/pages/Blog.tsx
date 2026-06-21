import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Squares from "../components/ui/squares";
import Magnetic from "../components/Magnetic";
import { posts } from "../data/blog";

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

const cats = [
  "All",
  "AI",
  "Engineering",
  "Design",
  "Mobile",
  "Product",
  "Brand",
];

export default function Blog() {
  const [active, setActive] = useState("All");

  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter(
    (p) => !p.featured && (active === "All" || p.cat === active),
  );
  const showFeatured = active === "All" || active === featured.cat;

  return (
    <div>
      <SEO
        title="Journal — engineering and design notes from Satvix Tech Solutions"
        description="The Satvix Tech Solutions journal: long-form notes on engineering, product design, AI in production and what we have learned shipping software since 2020."
        keywords="Satvix Tech Solutions blog, Satvix Tech Solutions journal, software engineering blog India, product design articles India, AI ML blog India, web development insights India, React Next.js tutorials India, UX design blog India, developer blog Gujarat"
        url="https://satvixtech.com/blog"
        breadcrumb={[
          { name: "Home", item: "https://satvixtech.com" },
          { name: "Blog", item: "https://satvixtech.com/blog" },
        ]}
      />

      {/* Page hero */}
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
            Journal
          </div> */}
          <h1>
            {(["Notes", "from", "<em>the studio.</em>"] as const).map(
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
              Satvix Tech Solutions &nbsp;/&nbsp; Journal
            </div>
            <p>
              Long-form writing by the people who actually built the thing.
              Decisions we got right, ones we did not, and the slow parts of AI
              nobody wants to write about. We post when we have something to say
              — not on a schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="filters">
        <div className="wrap">
          <div className="filter-row">
            <div className="filter-chips">
              {cats.map((c) => (
                <Magnetic key={c}>
                  <button
                    className={`chip${active === c ? " active" : ""}`}
                    onClick={() => setActive(c)}
                    style={{ display: "inline-block" }}
                  >
                    {c}
                  </button>
                </Magnetic>
              ))}
            </div>
            <span className="filter-count">
              {(showFeatured ? 1 : 0) + rest.length}&nbsp;article
              {(showFeatured ? 1 : 0) + rest.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>

      {/* Featured post */}
      {showFeatured && (
        <section
          style={{ padding: "60px 0 0", borderBottom: "1px solid var(--line)" }}
        >
          <div className="wrap">
            <Link
              to={`/blog/${featured.slug}`}
              className="arch wide reveal"
              data-hover
              style={{ display: "block", marginBottom: 60 }}
            >
              <div className={`arch__bg ${featured.bg}`}>
                <div className="glyph">
                  <div className="g-poly" />
                </div>
              </div>
              <div className="arch__inner">
                <div className="arch__top">
                  <div className="arch__meta">
                    <span>{featured.date}</span>
                    <span>{featured.read} read</span>
                  </div>
                  <span className="arch__cat">{featured.cat}</span>
                </div>
                <div>
                  <p
                    className="arch__title"
                    style={{
                      fontSize: "clamp(24px,3.5vw,44px)",
                      maxWidth: "28ch",
                    }}
                  >
                    {featured.title}
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.55,
                      opacity: 0.7,
                      marginTop: 12,
                      maxWidth: "52ch",
                    }}
                  >
                    {featured.excerpt}
                  </p>
                </div>
              </div>
              <div className="arch__cta">↗</div>
            </Link>
          </div>
        </section>
      )}

      {/* Post list */}
      <section
        className="s"
        style={{
          borderTop: showFeatured ? "none" : "1px solid var(--line)",
          paddingBottom: 120,
        }}
      >
        <div className="wrap">
          {rest.length === 0 && !showFeatured && (
            <p
              style={{
                color: "var(--muted)",
                fontFamily: "var(--mono)",
                fontSize: 13,
                marginTop: 48,
                textAlign: "center",
                letterSpacing: ".08em",
                textTransform: "uppercase",
              }}
            >
              No articles in this category yet.
            </p>
          )}
          <div style={{ borderTop: "1px solid var(--line)" }}>
            {rest.map((p, i) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="svc reveal"
                data-hover
                data-d={String(i % 4)}
              >
                <div
                  className="svc__num"
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    letterSpacing: ".08em",
                    color: "var(--muted)",
                    fontWeight: 400,
                  }}
                >
                  {String(i + (showFeatured ? 2 : 1)).padStart(2, "0")}
                </div>
                <div style={{ flex: "0 0 auto" }}>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: ".12em",
                      padding: "5px 10px",
                      border: "1px solid var(--line)",
                      borderRadius: 999,
                      color: "var(--ink-2)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.cat}
                  </span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: "clamp(18px,2vw,26px)",
                      fontWeight: 500,
                      letterSpacing: "-.02em",
                      lineHeight: 1.1,
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      color: "var(--ink-2)",
                      fontSize: 14,
                      lineHeight: 1.5,
                      marginTop: 6,
                      maxWidth: "60ch",
                    }}
                  >
                    {p.excerpt}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 4,
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                  >
                    {p.date}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                  >
                    {p.read} read
                  </span>
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

      {/* Newsletter */}
      <section
        style={{
          background: "var(--ink)",
          color: "var(--bg)",
          padding: "100px 0",
          borderTop: "1px solid rgba(255, 255, 255,.08)",
        }}
      >
        <div className="wrap">
          <div style={{ maxWidth: 680 }}>
            <div
              className="eyebrow reveal"
              style={{ color: "rgba(255, 255, 255,.6)", marginBottom: 24 }}
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
              Stay in the loop
            </div>
            <h2
              className="reveal"
              data-d="1"
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(36px,5vw,72px)",
                fontWeight: 500,
                letterSpacing: "-.035em",
                lineHeight: 1,
                color: "var(--bg)",
                margin: "0 0 32px",
              }}
            >
              One letter, no{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "var(--accent)",
                }}
              >
                noise.
              </em>
            </h2>
            <p
              className="reveal"
              data-d="2"
              style={{
                color: "rgba(255, 255, 255,.65)",
                fontSize: 16,
                lineHeight: 1.55,
                marginBottom: 40,
                maxWidth: "50ch",
              }}
            >
              When we publish something, we send it to your inbox. Two or three
              issues a month at most. No marketing. No drip funnel.
            </p>
            <form
              className="reveal"
              data-d="3"
              onSubmit={(e) => e.preventDefault()}
              style={{ display: "flex", gap: 0, maxWidth: 480 }}
            >
              <input
                type="email"
                placeholder="you@example.com"
                required
                style={{
                  flex: 1,
                  background: "rgba(255, 255, 255,.07)",
                  border: "1px solid rgba(255, 255, 255,.18)",
                  borderRight: "none",
                  padding: "14px 20px",
                  color: "var(--bg)",
                  fontFamily: "var(--sans)",
                  fontSize: 15,
                  outline: "none",
                  borderRadius: "999px 0 0 999px",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255, 255, 255,.5)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255,.18)")
                }
              />
              <Magnetic>
                <button
                  type="submit"
                  className="cta-btn"
                  style={{
                    background: "var(--accent)",
                    color: "var(--ink)",
                    borderRadius: "0 999px 999px 0",
                    whiteSpace: "nowrap",
                    border: "none",
                    cursor: "pointer",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                >
                  Subscribe{" "}
                  <span className="dot" style={{ background: "var(--ink)" }} />
                </button>
              </Magnetic>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
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
            Finished reading? Want to work together?
          </div>
          <h2 className="reveal" data-d="1">
            Got something worth <em>building?</em>
          </h2>
          <Magnetic>
            <a
              href="mailto:info@satvixtech.com"
              className="big-cta reveal"
              data-d="2"
              data-hover
              style={{ display: "inline-block" }}
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
