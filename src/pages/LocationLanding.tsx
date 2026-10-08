import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Faq from "../components/Faq";
import Squares from "../components/ui/squares";
import Magnetic from "../components/Magnetic";
import { locationsData } from "../data/locations";
import { ArrowRight } from "lucide-react";

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

export default function LocationLanding({ slug }: { slug: string }) {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);

  const data = locationsData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] text-[var(--ink)]">
        <p>Location not found</p>
      </div>
    );
  }

  // Selected services to showcase on local pages
  const featuredServices = [
    { key: "web-development", label: "Web Development", path: "/web-development", desc: "React, Next.js, and headless commerce platforms built to perform." },
    { key: "mobile-apps", label: "Mobile Apps", path: "/mobile-app-development", desc: "Native iOS and Android apps and unified React Native codebases." },
    { key: "ai-ml", label: "AI & Data Solutions", path: "/ai-development", desc: "Production-grade LLM integrations, RAG pipelines, and automated agents." }
  ];

  /* Real, shipped, and reachable — every entry here has a case study page and a
     client who will take a reference call. TableTrack and Proposal Generator
     used to sit in this list; neither was ever built, and both linked to a 404. */
  const localProjects = [
    { title: "Glamour Jewelry", tags: ["React", "Node.js", "Ecommerce"], desc: "Storefront, orders and inventory for a jewellery retailer — live and processing orders.", path: "/portfolio/glamour-jewelry" },
    { title: "Shreeji HRMS", tags: ["React Native", "Node.js", "Bilingual"], desc: "Attendance, daily-wage payroll and customer ledgers for a Gujarat trading business.", path: "/portfolio/shreeji-hrms" },
    { title: "Charotar Soap Factory", tags: ["Next.js", "Node.js", "White-label"], desc: "Production batches, stock ledger and sales orders for a soap manufacturer.", path: "/portfolio/charotar-soap" }
  ];

  return (
    <div className="bg-[var(--bg-2)] min-h-screen text-[var(--ink)] font-sans pt-20 overflow-x-hidden">
      <SEO
        title={data.title}
        description={data.description}
        keywords={data.keywords}
        url={`https://www.satvixtech.com/${data.slug}`}
        breadcrumb={[
          { name: "Home", item: "https://www.satvixtech.com" },
          { name: data.h1, item: `https://www.satvixtech.com/${data.slug}` }
        ]}
        faq={data.faqs}
      />

      {/* Hero Section */}
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
          <h1>
            <span className="row">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.3 }}
                style={{ display: "inline-block" }}
              >
                {data.h1.toUpperCase()}
              </motion.span>
            </span>
          </h1>
          <div className="page-hero__sub">
            <div className="breadcrumb">
              Satvix Tech Solutions &nbsp;/&nbsp; {data.city}
            </div>
            <p className="text-xl sm:text-2xl font-light text-[var(--ink-2)] leading-relaxed max-w-3xl">
              {data.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 border-b border-[var(--line)] bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-12 sm:mb-20 flex items-center">
            <span className="w-12 h-[1px] bg-[var(--line)] mr-4" />
            01 What we do for businesses in {data.city}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--line)] border border-[var(--line)]">
            {featuredServices.map((svc, i) => (
              <div
                key={svc.key}
                className="bg-[var(--bg)] p-8 sm:p-12 group hover:bg-[var(--bg-2)] transition-colors flex flex-col justify-between"
                style={{ minHeight: "320px" }}
              >
                <div>
                  <div className="text-4xl font-light text-[var(--line)] mb-6 group-hover:text-[var(--muted)] transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{svc.label}</h3>
                  <p className="text-[var(--ink-2)] text-sm leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                </div>
                <Link
                  to={svc.path}
                  className="flex items-center text-xs font-bold uppercase tracking-widest text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors"
                >
                  Explore practice <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Case Studies */}
      <section className="py-16 sm:py-24 border-b border-[var(--line)] bg-[var(--bg-2)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-12 sm:mb-20 flex items-center">
            <span className="w-12 h-[1px] bg-[var(--line)] mr-4" />
            02 Selected Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localProjects.map((proj) => (
              <Link
                key={proj.title}
                to={proj.path}
                className="block p-8 border border-[var(--line)] bg-[var(--bg)] rounded-2xl group hover:border-[var(--ink)] transition-colors"
                data-hover
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted)] border border-[var(--line)] px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors">{proj.title}</h3>
                <p className="text-[var(--ink-2)] text-sm leading-relaxed mb-6">
                  {proj.desc}
                </p>
                <span className="text-xs font-bold uppercase tracking-widest flex items-center">
                  Read Case Study <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Block */}
      <section className="py-16 sm:py-24 border-b border-[var(--line)] bg-[var(--bg)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-12 flex items-center justify-center">
            <span className="w-12 h-[1px] bg-[var(--line)] mr-4" />
            03 Proof, Not Promises
          </h2>
          {/* No testimonial here until a client gives us one on the record. This
              block used to carry a quote signed "Rohan Mehta — Founder & CEO,
              TailorPro": neither the person nor the company exists, on a site
              whose whole argument is that our work is verifiable. */}
          <blockquote className="text-2xl sm:text-3xl font-light italic leading-relaxed text-[var(--ink)] mb-8">
            Four products, shipped and live: a lending platform running real EMI
            collections, a jewellery store processing real orders, a manufacturing
            SaaS, and a bilingual HR app a Gujarat trading business uses daily.
            Ask us for a demo of any of them — or for the client's number.
          </blockquote>
          <cite className="block text-sm font-bold uppercase tracking-widest text-[var(--muted)] not-italic">
            <Link to="/portfolio" className="hover:text-[var(--accent)]">See the case studies →</Link>
          </cite>
        </div>
      </section>

      {/* FAQs Section */}
      <Faq faqs={data.faqs} eyebrow="04 Frequently Asked Questions" />

      {/* CTA Footer */}
      <section className="py-16 sm:py-24 border-t border-[var(--line)] bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="bg-[var(--ink)] text-[var(--bg)] p-8 sm:p-12 md:p-16 lg:p-24 relative overflow-hidden group">
            <div className="absolute inset-0 z-0 opacity-20">
              <Squares
                squareSize={60}
                direction="up"
                speed={0.1}
                borderColor="#ffffff"
                hoverFillColor="rgba(227, 30, 36, 0.06)"
                fadeColor="var(--ink)"
              />
            </div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-6 sm:mb-8 group-hover:scale-[1.02] transition-transform duration-700">
                START A PROJECT
                <br />
                WITH US <em>TODAY.</em>
              </h2>
              <p className="text-[var(--muted)] text-base sm:text-lg mb-8 sm:mb-12">
                A premium software development agency built to ship high-performance digital products. Tell us what you're making — a representative replies within one business day.
              </p>
              <Magnetic>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/contact")}
                  className="bg-[var(--bg)] text-[var(--ink)] px-8 sm:px-12 py-5 sm:py-6 text-sm font-bold uppercase tracking-widest hover:bg-[var(--bg-2)] transition-colors"
                >
                  Send us a note
                </motion.button>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
