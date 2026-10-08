import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Faq from "../components/Faq";
import SectionHead from "../components/ui/section-head";
import { rise } from "../lib/motion";
import MarqueeCta from "../components/ui/marquee-cta";
import { locationsData } from "../data/locations";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const MotionLink = motion.create(Link);

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

export default function LocationLanding({ slug }: { slug: string }) {

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
    <div className="overflow-x-hidden">
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

      {/* Hero */}
      <section className="page-hero">
        <div className="wrap relative z-10">
          <div className="page-hero__eyebrow">
            <span className="ping" />
            {data.city}
          </div>
          <h1>
            <span className="row">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.3 }}
                style={{ display: "inline-block" }}
              >
                {data.h1}
              </motion.span>
            </span>
          </h1>
          <div className="page-hero__sub">
            <div className="breadcrumb">
              Satvix Tech Solutions &nbsp;/&nbsp; {data.city}
            </div>
            <p>{data.overview}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="s">
        <div className="wrap">
          <SectionHead
            eyebrow={`What we do for businesses in ${data.city}`}
            title={
              <>
                Three practices, <em>one senior team.</em>
              </>
            }
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {featuredServices.map((svc, i) => (
              <MotionLink
                key={svc.key}
                {...rise(i)}
                to={svc.path}
                className="cap-card group flex min-h-[300px] flex-col"
                data-hover
              >
                <span className="case-card__n">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="!text-[24px]">{svc.label}</h3>
                <p>{svc.desc}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[14px] font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
                  Explore practice <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </MotionLink>
            ))}
          </div>
        </div>
      </section>

      {/* Selected case studies (dark) */}
      <section className="s dark band-dark band-dark--grid">
        <div className="wrap relative">
          <SectionHead
            eyebrow="Selected case studies"
            title={
              <>
                Shipped, live, <em>and reachable.</em>
              </>
            }
            action={
              <Link to="/portfolio" className="btn-outline btn-outline--dark" data-hover>
                All case studies <ArrowUpRight size={16} />
              </Link>
            }
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {localProjects.map((proj, i) => (
              <MotionLink
                key={proj.title}
                {...rise(i)}
                to={proj.path}
                className="glow-card group flex flex-col"
                data-hover
              >
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-[12px] font-medium text-white/75">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-6 text-[22px] font-semibold tracking-[-0.03em] text-white">{proj.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/60">{proj.desc}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[14px] font-semibold text-white">
                  Read case study <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </MotionLink>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="s">
        <div className="wrap max-w-4xl text-center">
          {/* No testimonial here until a client gives us one on the record. This
              block used to carry a quote signed "Rohan Mehta — Founder & CEO,
              TailorPro": neither the person nor the company exists, on a site
              whose whole argument is that our work is verifiable. */}
          <motion.div {...rise()}>
            <div className="eyebrow">Proof, not promises</div>
            <blockquote className="mx-auto mt-8 text-[clamp(22px,2.6vw,34px)] font-semibold leading-[1.3] tracking-[-0.03em] text-[var(--ink)]">
              Four products, shipped and live: a lending platform running real EMI
              collections, a jewellery store processing real orders, a manufacturing
              SaaS, and a bilingual HR app a Gujarat trading business uses daily.{" "}
              <span className="text-[var(--accent)]">
                Ask us for a demo of any of them — or for the client's number.
              </span>
            </blockquote>
            <Link to="/portfolio" className="btn-outline mt-10" data-hover>
              See the case studies <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <Faq faqs={data.faqs} eyebrow="Frequently asked questions" />

      {/* CTA */}
      <MarqueeCta
        label={`Working with teams in ${data.city}`}
        words={`${data.city} · Satvix · `}
        title={
          <>
            Start a project with us <em>today.</em>
          </>
        }
        note="A premium software development agency built to ship high-performance digital products. Tell us what you're making — a representative replies within one business day."
      >
        <Link to="/contact" className="mcta__btn" data-hover>
          Send us a note
          <span className="mcta__btn-arrow">
            <ArrowUpRight size={18} />
          </span>
        </Link>
      </MarqueeCta>
    </div>
  );
}
