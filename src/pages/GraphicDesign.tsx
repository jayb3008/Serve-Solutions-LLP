import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Squares from "../components/ui/squares";
import Magnetic from "../components/Magnetic";

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

const gallery = {
  main: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200",
  s1: "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=700",
  s2: "https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=700",
};

const capabilities = [
  {
    num: "01",
    pre: "Brand",
    em: "identity",
    tags: ["Logo", "Colour", "Typography"],
    desc: "A mark that works at 16px and 6 metres. We build complete identity systems — logo, colour, type, iconography — that stay coherent across every surface your brand touches.",
    list: [
      "Logo design & variation set",
      "Colour system with accessible tokens",
      "Typography selection & pairing",
      "Iconography & illustration style",
      "Photography & art direction",
      "Brand identity guidelines",
    ],
  },
  {
    num: "02",
    pre: "Print &",
    em: "collateral",
    tags: ["Stationery", "Packaging", "Brochures"],
    desc: "Tangible brand moments — the business card someone keeps, the packaging that gets photographed, the brochure that closes a deal in a meeting room.",
    list: [
      "Business cards & stationery",
      "Product packaging & labels",
      "Brochures, leaflets & catalogues",
      "Signage & wayfinding",
      "Event & exhibition materials",
      "Annual reports & pitch decks",
    ],
  },
  {
    num: "03",
    pre: "Digital &",
    em: "social",
    tags: ["Social kit", "Banners", "Templates"],
    desc: "Assets built for the pixel grid — social media kits, ad creatives, and template systems your team can deploy without breaking the brand.",
    list: [
      "Social media templates & kits",
      "Display & digital ad creatives",
      "Email header & newsletter design",
      "Web banners & hero graphics",
      "Infographics & data visualisation",
      "Editable Canva / Figma template libraries",
    ],
  },
  {
    num: "04",
    pre: "Motion &",
    em: "video",
    tags: ["Animation", "Reels", "Logo motion"],
    desc: "Brand in motion — logo animations, social reels, explainer sequences, and the kind of motion language that makes still assets look planned, not accidental.",
    list: [
      "Animated logo & brand reveal",
      "Social reels & stories (15–60s)",
      "Motion graphics & kinetic type",
      "Explainer & product videos",
      "Lottie / web animation assets",
      "Presentation & slide templates",
    ],
  },
];

const useCases = [
  {
    title: "Complete brand identity",
    desc: "Logo, colour, type, and every asset your brand needs to show up consistently from day one.",
    img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Product packaging",
    desc: "Packaging that communicates quality at a glance — shelf-ready files with print specs included.",
    img: "https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Social media system",
    desc: "A template kit your marketing team can run every week without calling a designer.",
    img: "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Trade show & events",
    desc: "Banners, booths, name badges, and stage design that land at the right scale and resolution.",
    img: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Campaign creative",
    desc: "Ad sets, landing page art, and OOH assets for a product launch or seasonal push.",
    img: "https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Animated brand kit",
    desc: "Logo motion, intro sequences, and Lottie assets so the brand looks alive — not static.",
    img: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const toolStack = [
  { name: "Adobe Illustrator", cat: "Vector" },
  { name: "Adobe Photoshop", cat: "Raster" },
  { name: "Adobe InDesign", cat: "Layout" },
  { name: "Adobe After Effects", cat: "Motion" },
  { name: "Figma", cat: "UI & Screens" },
  { name: "Canva Pro", cat: "Templates" },
  { name: "Framer", cat: "Interactive" },
  { name: "Lottie", cat: "Web Animation" },
  { name: "Premiere Pro", cat: "Video" },
  { name: "Notion", cat: "Handover" },
];

const process = [
  {
    n: "01",
    title: "Brief",
    body: "We sit with you, your audience, and your competitors. A design brief that captures what needs to be said — and what needs to be felt — before a single mark is drawn.",
  },
  {
    n: "02",
    title: "Concept",
    body: "Two or three directions, each grounded in the brief. Not infinite options — focused choices with a clear rationale so you can make a decision, not a committee.",
  },
  {
    n: "03",
    title: "Design",
    body: "The chosen direction developed into a full system. Every variation, every size, every surface. Tested in context before anything is signed off.",
  },
  {
    n: "04",
    title: "Delivery",
    body: "Print-ready files, screen assets, animation exports, and a handover document your team can use without calling us. Organised, labelled, and exportable from day one.",
  },
];

export default function GraphicDesign() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <SEO
        title="Graphic Design & Branding — Satvix Tech Solutions, Anand, Gujarat"
        description="Satvix Tech Solutions delivers graphic design and branding — identity systems, print collateral, social media kits, packaging, and motion graphics — built to last, not just to launch."
        keywords="graphic design company India, branding agency Gujarat, logo design services India, brand identity design Gujarat, print design agency India, social media design India, packaging design company Gujarat, motion graphics India, creative agency Anand Gujarat, visual identity design India, corporate branding India, advertising design agency Gujarat"
        url="https://satvixtech.com/graphic-design-branding"
        breadcrumb={[
          { name: "Home", item: "https://satvixtech.com" },
          { name: "Services", item: "https://satvixtech.com/services" },
          {
            name: "Graphic Design & Branding",
            item: "https://satvixtech.com/graphic-design-branding",
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
          <h1>
            {(
              ["Design that", "holds up in", "<em>print and pixels.</em>"] as const
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
              Satvix Tech Solutions &nbsp;/&nbsp; Services &nbsp;/&nbsp; Graphic
              Design &amp; Branding
            </div>
            <p>
              Identity systems, print collateral, social media kits, packaging,
              and motion graphics — everything a brand needs to look intentional
              at every size and on every surface.
            </p>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((i) => (
            <span key={i} className="marquee__item">
              Brand identity <span className="star">✦</span> Print design{" "}
              <em>·</em> Social media kits <span className="star">✦</span>{" "}
              Packaging <em>·</em> Motion graphics <span className="star">✦</span>{" "}
              Logo systems <em>·</em>
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
                alt="Graphic design workspace with brand materials"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:flex flex-col gap-3">
              <div className="flex-1 rounded-[18px] overflow-hidden">
                <img
                  src={gallery.s1}
                  alt="Brand collateral and print design"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 rounded-[18px] overflow-hidden">
                <img
                  src={gallery.s2}
                  alt="Product packaging and visual identity"
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
                Four disciplines, <em>one design team.</em>
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
                Design that <em>earns attention.</em>
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

      {/* Tool stack */}
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
              Industry-standard tools chosen for quality and compatibility —
              files you can open, edit, and hand to any printer or developer.
            </p>
          </div>
          <div className="stack-grid">
            {toolStack.map((t, i) => (
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
                From brief to <em>print-ready.</em>
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
            Let's make something worth looking at
          </div>
          <h2 className="reveal" data-d="1">
            Ready to look the <em>part?</em>
          </h2>
          <Magnetic>
            <a
              href="mailto:satvixtechsolutions@gmail.com"
              className="big-cta reveal"
              data-d="2"
              data-hover
            >
              satvixtechsolutions@gmail.com
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
