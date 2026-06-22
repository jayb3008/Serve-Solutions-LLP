import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { servicesData } from "../data/services";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";
import Squares from "../components/ui/squares";
import SEO from "../components/SEO";
import Magnetic from "../components/Magnetic";

const ServiceDetail = ({ serviceId }: { serviceId?: string } = {}) => {
  const { id } = useParams();
  const activeId = serviceId || id;
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

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
      answer: `We have shipped 120+ products in six years out of a single studio in Anand. Around 98% of clients keep us on after launch — make of that what you will. The day-to-day team is senior, small, and reachable by name.`,
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
    { n: "120+", l: "Products in the wild" },
    { n: "98%", l: "Clients who renew" },
    { n: "6", l: "Years in one studio" },
    { n: "40", l: "People you can call by name" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div
      ref={containerRef}
      className="bg-[var(--bg-2)] min-h-screen text-[var(--ink)] font-sans pt-20 overflow-x-hidden"
    >
      <SEO
        title={service.title}
        description={service.tagline}
        keywords={service.keywords}
        url={`https://satvixtech.com${service.seoPath || `/services/${activeId}`}`}
        breadcrumb={[
          { name: "Home", item: "https://satvixtech.com" },
          { name: "Services", item: "https://satvixtech.com/services" },
          {
            name: service.title,
            item: `https://satvixtech.com${service.seoPath || `/services/${activeId}`}`,
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
      <section className="page-hero relative overflow-hidden">
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
                        <service.icon className="w-4 h-4 text-[var(--muted)] inline-block mr-2 align-text-bottom" />
                        A practice at the studio
                    </div> */}
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
                {service.title.toUpperCase()} <em>PRACTICE.</em>
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

      {/* Overview & Tech Stack */}
      <section className="bg-[var(--bg)] border-b border-[var(--line)]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-24 lg:border-r border-b lg:border-b-0 border-[var(--line)]">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-8 sm:mb-12 flex items-center">
                <span className="w-12 h-[1px] bg-[var(--line)] mr-4" />
                01 How we think about it
              </h2>
              <p className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[var(--ink)] leading-[1.15]">
                {service.overview}
              </p>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-24 flex flex-col justify-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-8">
                Tools we reach for first
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.tech.map((tool: string) => (
                  <span
                    key={tool}
                    className="px-5 py-3 border border-[var(--line)] bg-[var(--bg-2)] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 sm:py-24 border-b border-[var(--line)] bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-12 sm:mb-20 flex items-center">
            <span className="w-12 h-[1px] bg-[var(--line)] mr-4" />
            02 What you walk away with
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--line)] border border-[var(--line)]">
            {deliverables.map((d, i) => (
              <div
                key={i}
                className="bg-[var(--bg)] p-6 sm:p-10 group hover:bg-[var(--bg-2)] transition-colors"
              >
                <div className="text-5xl font-bold text-[var(--line)] mb-6 group-hover:text-[var(--muted)] transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{d.t}</h3>
                <p className="text-[var(--ink-2)] text-sm leading-relaxed">
                  {d.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 sm:py-24 border-b border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-12 sm:mb-20 flex items-center">
            <span className="w-12 h-[1px] bg-[var(--line)] mr-4" />
            03 What we are good at
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--line)] border border-[var(--line)]">
            {service.capabilities.map((cap: any, i: number) => (
              <div
                key={i}
                className="bg-[var(--bg)] p-6 sm:p-10 lg:p-12 group hover:bg-[var(--bg-2)] transition-colors"
              >
                <div className="w-12 h-12 bg-[var(--ink)] text-[var(--bg)] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-4">{cap.title}</h3>
                <p className="text-[var(--ink-2)] text-sm leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-[var(--ink)] py-20 sm:py-32 text-[var(--bg)] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-24 gap-8">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-8 flex items-center">
                <span className="w-12 h-[1px] bg-[var(--line)] mr-4" />
                04 How a project goes
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter">
                FOUR STAGES,
                <br />
                NO RELAY RACE.
              </h3>
            </div>
            <div className="lg:max-w-md">
              <p className="text-[var(--muted)] leading-relaxed text-base sm:text-lg">
                Four short stages and a Friday demo in every week. No status
                decks, no surprise invoices, no silence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
            {service.workflow.map((item: any, i: number) => (
              <div key={i} className="relative">
                <span className="text-6xl font-bold text-[var(--bg)]/10 absolute -top-10 -left-4 pointer-events-none">
                  {item.step}
                </span>
                <div className="relative pt-8">
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    {item.title}
                    <ArrowRight className="w-4 h-4 ml-2 opacity-20" />
                  </h4>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Satvix — stats */}
      <section className="py-14 sm:py-20 border-b border-[var(--line)] bg-[var(--bg-2)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-[var(--ink)]">
                  {s.n}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mt-3">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 border-b border-[var(--line)] bg-[var(--bg)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-10 sm:mb-16 flex items-center">
            <span className="w-12 h-[1px] bg-[var(--line)] mr-4" />
            05 Things people often ask
          </h2>
          <div className="border-t border-[var(--line)]">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="py-6 sm:py-8 border-b border-[var(--line)]"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 tracking-tight text-[var(--ink)]">
                  {f.question}
                </h3>
                <p className="text-[var(--ink-2)] leading-relaxed text-sm sm:text-base md:text-lg">
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
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 sm:mb-8 group-hover:scale-[1.02] transition-transform duration-700">
                SHALL WE
                <br />
                MAKE A <em>START?</em>
              </h2>
              <p className="text-[var(--muted)] text-base sm:text-lg md:text-xl mb-8 sm:mb-12">
                Tell us, in two paragraphs, what you are building. We will tell
                you, honestly, whether {service.title} is the right place to
                start.
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

          <div className="mt-12 sm:mt-20 flex flex-col md:flex-row justify-between items-center py-6 border-t border-[var(--line)] gap-2">
            <Link
              to="/services"
              className="flex items-center text-xs font-bold uppercase tracking-widest text-[var(--muted)] hover:text-[var(--ink)] transition-all group py-3 px-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to all practices
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              <Link
                to="/portfolio"
                className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] hover:text-[var(--ink)] transition-colors py-3 px-3"
              >
                See the work
              </Link>
              <Link
                to="/about"
                className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] hover:text-[var(--ink)] transition-colors py-3 px-3"
              >
                About the studio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
