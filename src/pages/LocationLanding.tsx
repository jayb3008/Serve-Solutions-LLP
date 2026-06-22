import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Squares from "../components/ui/squares";
import Magnetic from "../components/Magnetic";
import { locationsData } from "../data/locations";
import { servicesData } from "../data/services";
import { ShieldCheck, ArrowRight } from "lucide-react";

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

  // Selected case studies to display
  const localProjects = [
    { title: "Glamour Jewelry", tags: ["Next.js", "SEO", "Ecommerce"], desc: "A premium luxury jewelry platform with localized discovery.", path: "/portfolio/glamour-jewelry" },
    { title: "TableTrack", tags: ["SaaS", "POS", "Real-time"], desc: "All-in-one restaurant workflow and billing POS platform.", path: "/portfolio/tabletrack" },
    { title: "Proposal Generator", tags: ["SaaS", "Automation", "Tooling"], desc: "Automated B2B document generation and client signing pipelines.", path: "/portfolio/proposal-generator" }
  ];

  return (
    <div className="bg-[var(--bg-2)] min-h-screen text-[var(--ink)] font-sans pt-20 overflow-x-hidden">
      <SEO
        title={data.title}
        description={data.description}
        keywords={data.keywords}
        url={`https://satvixtech.com/${data.slug}`}
        breadcrumb={[
          { name: "Home", item: "https://satvixtech.com" },
          { name: data.h1, item: `https://satvixtech.com/${data.slug}` }
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
            03 Trusted Globally, Delivered Locally
          </h2>
          <blockquote className="text-2xl sm:text-3xl font-light italic leading-relaxed text-[var(--ink)] mb-8">
            "Satvix is the first team that did not hand work between strategy, design, and engineering — they just owned the whole thing, end to end. Having them based in Anand made real-time collaboration seamless."
          </blockquote>
          <cite className="block text-sm font-bold uppercase tracking-widest text-[var(--muted)] not-italic">
            Rohan Mehta — Founder & CEO, TailorPro
          </cite>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-24 border-b border-[var(--line)] bg-[var(--bg)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-12 sm:mb-16 flex items-center">
            <span className="w-12 h-[1px] bg-[var(--line)] mr-4" />
            04 Frequently Asked Questions
          </h2>
          <div className="border-t border-[var(--line)]">
            {data.faqs.map((f, i) => (
              <div key={i} className="py-6 sm:py-8 border-b border-[var(--line)]">
                <h3 className="text-lg sm:text-xl font-bold mb-3 tracking-tight text-[var(--ink)]">
                  {f.question}
                </h3>
                <p className="text-[var(--ink-2)] leading-relaxed text-sm sm:text-base">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                We're forty designers and engineers working together to build software that lasts. Let us know what you want to construct, and we'll tell you how we can help.
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
