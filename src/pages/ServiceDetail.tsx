import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { servicesData } from "../data/services";
import { buildDescription } from "../lib/meta";
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import SEO from "../components/SEO";
import Faq from "../components/Faq";
import SectionHead from "../components/ui/section-head";
import { rise } from "../lib/motion";
import MarqueeCta from "../components/ui/marquee-cta";

const ServiceDetail = ({ serviceId }: { serviceId?: string } = {}) => {
  const { id } = useParams();
  const activeId = serviceId || id;

  const service = servicesData[activeId as string] || servicesData["web-development"];

  const faqs = [
    {
      question: `What does ${service.title} actually include?`,
      answer: `${service.overview} Day-to-day, that means ${service.capabilities.map((c: { title: string }) => c.title).join(", ")}.`,
    },
    {
      question: `What is the stack?`,
      answer: `For ${service.title}, we usually reach for ${service.tech.join(", ")}. We will pick whatever your team can still maintain after we have left the room.`,
    },
    {
      question: `How does a ${service.title} project actually run?`,
      answer: `Four short stages: ${service.workflow.map((w: { title: string }) => w.title).join(" → ")}. Friday demos, fortnightly invoices, a shared board you can open at any hour.`,
    },
    {
      question: `Why pick Satvix for this?`,
      answer: `Premium digital product agency. We combine expert UI/UX design, senior software engineering, and structured QA with dedicated project managers. We shipped a fintech lending platform in two weeks and an e-commerce build in four. Reference calls and demos on request.`,
    },
  ];

  const deliverables = [
    {
      t: "Discovery and audit",
      d: "We map the real constraints, the success metric, and the bits already working — before any code gets written.",
    },
    {
      t: "Architecture and roadmap",
      d: "A technical plan you can hand to your CTO. Milestones, estimates and the trade-offs we considered and rejected.",
    },
    {
      t: "Agile, but quieter",
      d: "Two-week sprints, a demo every Friday, a shared board you can open at any hour. No status decks.",
    },
    {
      t: "Tests and performance",
      d: "Automated where it counts, exploratory where it matters. Performance budgets baked in from week one.",
    },
    {
      t: "Launch and handover",
      d: "Production deploy on a Tuesday, with documentation a new joiner can actually read and a runbook for the worst day.",
    },
    {
      t: "Stay on, quietly",
      d: "Support, monitoring and the second draft. Most clients keep us on for at least a quarter after launch.",
    },
  ];

  const stats = [
    { n: "3", l: "Shipped products, verifiable" },
    { n: "2 wks", l: "Fastest delivery — fintech" },
    { n: "7+ yrs", l: "Senior MERN, founder-led" },
    { n: "4+ hrs", l: "Overlap with US East Coast" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="overflow-x-hidden">
      <SEO
        title={service.title}
        description={service.metaDescription ?? buildDescription(service.tagline, service.overview)}
        keywords={service.keywords}
        url={`https://www.satvixtech.com${service.seoPath || `/services/${activeId}`}`}
        breadcrumb={[
          { name: "Home", item: "https://www.satvixtech.com" },
          { name: "Services", item: "https://www.satvixtech.com/services" },
          {
            name: service.title,
            item: `https://www.satvixtech.com${service.seoPath || `/services/${activeId}`}`,
          },
        ]}
        service={{
          name: `${service.title} Services`,
          serviceType: service.title,
          description: service.overview,
        }}
        faq={faqs}
      />
      {/* Page hero */}
      <section className="page-hero">
        <div className="wrap relative z-10">
          <div className="page-hero__eyebrow">
            <span className="ping" />
            A practice at the agency
          </div>
          <h1>
            <span className="row">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.7, 0, 0.2, 1],
                  delay: 0.3,
                }}
                style={{ display: "inline-block" }}
              >
                {service.title} <em>practice.</em>
              </motion.span>
            </span>
          </h1>
          <div className="page-hero__sub">
            <div className="breadcrumb">
              Satvix Tech Solutions &nbsp;/&nbsp; Services &nbsp;/&nbsp;{" "}
              {service.title}
            </div>
            <p>{service.tagline}</p>
          </div>
        </div>
      </section>

      {/* Overview & tech stack */}
      <section className="s">
        <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div {...rise()} className="lg:col-span-7">
            <div className="eyebrow">How we think about it</div>
            <p className="mt-7 text-[clamp(24px,2.8vw,38px)] font-semibold leading-[1.2] tracking-[-0.035em] text-[var(--ink)]">
              {service.overview}
            </p>
          </motion.div>
          <motion.div {...rise(1)} className="lg:col-span-5 lg:pt-14">
            <div className="rounded-[24px] border border-[var(--line)] bg-[var(--bg-2)] p-7">
              <h2 className="text-[15px] font-semibold text-[var(--ink)]">
                Tools we reach for first
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.tech.map((tool: string) => (
                  <span key={tool} className="tool-chip">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's included */}
      <section className="s bg-[var(--bg-2)]">
        <div className="wrap">
          <SectionHead
            eyebrow="What you walk away with"
            title={
              <>
                Six things, <em>every engagement.</em>
              </>
            }
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d, i) => (
              <motion.div key={d.t} {...rise(i)} className="cap-card">
                <span className="case-card__n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{d.t}</h3>
                <p>{d.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="s">
        <div className="wrap">
          <SectionHead
            eyebrow="What we are good at"
            title={
              <>
                Where {service.title} <em>earns its keep.</em>
              </>
            }
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.capabilities.map((cap, i) => (
              <motion.div key={cap.title} {...rise(i)} className="cap-card">
                <span className="tile-icon">
                  <ShieldCheck size={20} />
                </span>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="s dark band-dark band-dark--grid">
        <div className="wrap relative">
          <SectionHead
            eyebrow="How a project goes"
            title={
              <>
                Four stages, <em>no relay race.</em>
              </>
            }
            note="Four short stages and a Friday demo in every week. No status decks, no surprise invoices, no silence."
          />
          <ol className="process-rail process-rail--4">
            {service.workflow.map((item, i) => (
              <motion.li key={item.title} {...rise(i)}>
                <span className="process-rail__n">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Satvix — stats */}
      <section className="band">
        <div className="wrap">
          <div className="band-grid">
            {stats.map((s, i) => (
              <motion.div key={s.l} {...rise(i)}>
                <div className="b-stat__n">{s.n}</div>
                <div className="b-stat__l">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq faqs={faqs} eyebrow="Things people often ask" />

      {/* CTA */}
      <MarqueeCta
        label="Tell us in two paragraphs"
        words={`${service.title} · Satvix · `}
        title={
          <>
            Shall we make a <em>start?</em>
          </>
        }
        note={
          <>
            Tell us, in two paragraphs, what you are building. We will tell you,
            honestly, whether {service.title} is the right place to start.
          </>
        }
      >
        <Link to="/contact" className="mcta__btn" data-hover>
          Send us a note
          <span className="mcta__btn-arrow">
            <ArrowUpRight size={18} />
          </span>
        </Link>
        <nav className="mcta__links" aria-label="More from Satvix">
          <Link to="/services" data-hover>
            <ArrowLeft size={15} /> Back to all practices
          </Link>
          <Link to="/portfolio" data-hover>
            See the work
          </Link>
          <Link to="/about" data-hover>
            About the agency
          </Link>
        </nav>
      </MarqueeCta>
    </div>
  );
};

export default ServiceDetail;
