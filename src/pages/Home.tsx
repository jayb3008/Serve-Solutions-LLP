
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2, Smartphone, Palette, Search, Globe, Target, Star,
  ChevronRight, Zap, ShieldCheck, BarChart3, Users, ArrowUpRight,
  CheckCircle2, Cpu, Database, Cloud, GitBranch, Layers, Server
} from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MultiDirectionSlideText } from '@/components/eldoraui/multi-direction-slide-text';
import Squares from '@/components/ui/squares';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 40, opacity: 0, duration: 1.2, stagger: 0.2, ease: 'power4.out'
      });
      gsap.from('.grid-line', {
        scaleX: 0, scaleY: 0, duration: 1.5, stagger: 0.1, ease: 'power2.inOut'
      });
      // Counter animation
      gsap.utils.toArray<HTMLElement>('.stat-number').forEach((el) => {
        const target = parseFloat(el.dataset.target || '0');
        gsap.fromTo(el, { innerText: 0 }, {
          innerText: target,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: target % 1 === 0 ? 1 : 0.1 },
          scrollTrigger: { trigger: el, start: 'top 85%' },
          onUpdate() { el.innerText = (target % 1 === 0 ? Math.round(parseFloat(el.innerText)) : parseFloat(el.innerText).toFixed(1)) + el.dataset.suffix; }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { number: 120, suffix: '+', label: 'Projects Delivered' },
    { number: 98,  suffix: '%', label: 'Client Satisfaction' },
    { number: 6,   suffix: '+', label: 'Years of Excellence' },
    { number: 40,  suffix: '+', label: 'Expert Engineers' },
  ];

  const services = [
    { icon: Code2,      title: 'Web Engineering',   desc: 'Next.js, React, Node.js — from MVPs to enterprise platforms, built to scale.' },
    { icon: Smartphone, title: 'Mobile Apps',        desc: 'Polished iOS & Android apps using React Native and Flutter.' },
    { icon: Globe,      title: 'Digital Platforms',  desc: 'Headless CMS, SaaS portals, and marketplace solutions.' },
    { icon: Palette,    title: 'Interface Design',   desc: 'Research-driven UI/UX that converts visitors into loyal users.' },
    { icon: Search,     title: 'SEO & Growth',       desc: 'Technical SEO, content strategy, and performance optimisation.' },
    { icon: Target,     title: 'Strategy',            desc: 'Digital transformation roadmaps tailored to your business goals.' },
  ];

  const process = [
    { step: '01', title: 'Discovery',     desc: 'We deep-dive into your goals, market, and users to form a clear product vision.' },
    { step: '02', title: 'Architecture',  desc: 'We design a robust tech stack and system blueprint before writing a single line of code.' },
    { step: '03', title: 'Build & Test',  desc: 'Agile sprints with continuous QA — ship fast without sacrificing quality.' },
    { step: '04', title: 'Launch & Grow', desc: 'Smooth deployments, monitoring, and iterative growth post-launch.' },
  ];

  const projects = [
    {
      index: '01',
      tag: 'FinTech',
      title: 'LendingFlow Platform',
      desc: 'End-to-end loan origination & management system built for a leading NBFC. Handles complex credit workflows, document verification, and real-time disbursement tracking.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      outcomes: [
        { value: '50k+', label: 'Monthly Transactions' },
        { value: '3×',   label: 'Faster Processing' },
        { value: '99.9%', label: 'Uptime SLA' },
      ],
      link: '/portfolio/lendingflow-platform',
    },
    {
      index: '02',
      tag: 'SaaS',
      title: 'TailorPro Suite',
      desc: 'Cloud SaaS platform for boutique tailor shops — covering order management, measurements, billing, and customer CRM. Available as both a web dashboard and mobile app.',
      tech: ['React Native', 'Express', 'MongoDB', 'Razorpay'],
      outcomes: [
        { value: '500+', label: 'Active Shops' },
        { value: '10wk', label: 'Concept to Launch' },
        { value: '40%',  label: 'Ops Cost Reduction' },
      ],
      link: '/portfolio/tailorpro-suite',
    },
  ];

  const techStack = [
    { icon: Code2,     name: 'React / Next.js' },
    { icon: Smartphone,name: 'React Native' },
    { icon: Server,    name: 'Node.js' },
    { icon: Database,  name: 'PostgreSQL' },
    { icon: Cloud,     name: 'AWS / GCP' },
    { icon: GitBranch, name: 'CI / CD' },
    { icon: Cpu,       name: 'AI / ML' },
    { icon: Layers,    name: 'Microservices' },
  ];

  const testimonials = [
    {
      quote: "They don't just write code — they utilise technology to solve real business problems. The results speak for themselves.",
      initials: 'CA', name: 'CEO', company: 'Tech Startup, Mumbai'
    },
    {
      quote: "The team delivered our platform ahead of schedule with zero downtime. Quality, communication, and commitment — all exceptional.",
      initials: 'RK', name: 'CTO', company: 'FinTech Scale-up, Bangalore'
    },
    {
      quote: "Our mobile app went from concept to App Store in 10 weeks. SARVE SOLUTIONS is our long-term technology partner.",
      initials: 'PM', name: 'Founder', company: 'Consumer App, Ahmedabad'
    },
  ];

  const pillars = [
    { icon: Zap,        title: 'Speed',     text: 'Rapid development cycles without compromising quality.' },
    { icon: ShieldCheck, title: 'Reliability', text: 'Enterprise-grade security and 99.9% uptime SLAs.' },
    { icon: BarChart3,  title: 'Scale',     text: 'Architectures built to handle millions of users.' },
    { icon: Users,      title: 'Support',   text: '24/7 dedicated post-launch maintenance and monitoring.' },
  ];

  return (
    <div ref={containerRef} className="overflow-hidden">
      <SEO
        title="Engineering Digital Excellence"
        description="SARVE SOLUTIONS engineers high-performance digital products. Web Development, Mobile Apps, AI solutions, and Digital Transformation for startups and enterprises."
        url="https://sarvesolutions.in"
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
          <div className="grid-line absolute top-1/4 left-0 w-full h-[1px] bg-black origin-left" />
          <div className="grid-line absolute top-2/4 left-0 w-full h-[1px] bg-black origin-left" />
          <div className="grid-line absolute top-3/4 left-0 w-full h-[1px] bg-black origin-left" />
          <div className="grid-line absolute left-1/4 top-0 w-[1px] h-full bg-black origin-top" />
          <div className="grid-line absolute left-2/4 top-0 w-[1px] h-full bg-black origin-top" />
          <div className="grid-line absolute left-3/4 top-0 w-[1px] h-full bg-black origin-top" />
        </div>
        <div className="absolute inset-0 z-0">
          <Squares squareSize={80} direction="diagonal" speed={0.5} borderColor="rgba(0,0,0,0.06)" hoverFillColor="rgba(0,0,0,0.03)" />
        </div>

        <div className="relative z-10 px-8 max-w-5xl w-full text-center hero-content">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center space-x-2 mb-8">
            <span className="px-4 py-1.5 text-[10px] font-black tracking-[0.3em] bg-black text-white uppercase">Beyond Boundaries</span>
          </motion.div>

          <div className="mb-12">
            <MultiDirectionSlideText textLeft="SARVE" textRight="SOLUTIONS." className="text-black" />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-lg sm:text-xl text-zinc-600 max-w-xl leading-relaxed mb-12">
              We design and engineer high-performance digital products for startups and enterprises. Precision is our baseline.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="group relative inline-flex items-center justify-center bg-black text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all overflow-hidden">
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link to="/services" className="group inline-flex items-center justify-center border-2 border-zinc-900 bg-transparent text-black px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                Our Capabilities
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-40">
          <div className="w-[1px] h-12 bg-black origin-top animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-b border-zinc-200 bg-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-800">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="py-14 px-10 text-center"
            >
              <div
                className="stat-number text-5xl font-black tracking-tight mb-2"
                data-target={s.number}
                data-suffix={s.suffix}
              >
                0{s.suffix}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-zinc-400">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-200">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ backgroundColor: '#F3F3F3' }}
              className="p-10 transition-colors cursor-default"
            >
              <p.icon className="h-7 w-7 text-black mb-5" />
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="reveal-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-zinc-200">
          <div className="lg:col-span-4 p-12 border-b lg:border-b-0 lg:border-r border-zinc-200 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-8 max-w-xs">OUR EXPERTISE</h2>
              <p className="text-zinc-600 text-lg leading-relaxed">
                We deploy cross-functional teams to deliver end-to-end digital solutions — from architecture to deployment.
              </p>
            </div>
            <Link to="/services" className="hidden lg:inline-flex items-center text-sm font-bold uppercase tracking-wide mt-12 group">
              <span className="border-b-2 border-black pb-1">View All Capabilities</span>
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2">
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 border-b border-r border-zinc-200 bg-[#F8F8F8] hover:bg-white transition-colors duration-500"
              >
                <s.icon className="h-8 w-8 text-zinc-400 group-hover:text-black transition-colors mb-6 group-hover:scale-110 duration-500" />
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="bg-black text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter max-w-sm">HOW WE WORK</h2>
            <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
              A battle-tested process that transforms ideas into production-ready software, on time and on budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-zinc-800 border border-zinc-800">
            {process.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-10 group hover:bg-zinc-900 transition-colors"
              >
                <span className="font-mono text-xs text-zinc-600 mb-6 block">{p.step}</span>
                <h3 className="text-xl font-bold mb-4">{p.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
                <CheckCircle2 className="h-5 w-5 text-zinc-700 group-hover:text-white transition-colors mt-8" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="bg-white border-b border-zinc-200">
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-8 pt-24 pb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-4">Selected Work</p>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tighter">FEATURED WORK</h2>
          </div>
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest group self-end">
            <span className="border-b-2 border-black pb-1">See Full Portfolio</span>
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Project rows */}
        <div className="border-t border-zinc-200">
          {projects.map((proj, i) => (
            <Link key={i} to={proj.link} className="group block border-b border-zinc-200">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: 0.05 }}
                className="grid grid-cols-1 lg:grid-cols-12 hover:bg-zinc-50 transition-colors duration-500"
              >
                {/* Left number panel */}
                <div className="lg:col-span-1 bg-black flex items-center justify-center py-8 lg:py-0">
                  <span className="font-mono text-zinc-600 text-sm font-bold">{proj.index}</span>
                </div>

                {/* Main info */}
                <div className="lg:col-span-5 p-10 lg:p-12 border-r border-zinc-200 flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] bg-black text-white px-3 py-1 mb-6">
                      {proj.tag}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-5 leading-tight group-hover:underline underline-offset-4">{proj.title}</h3>
                    <p className="text-zinc-500 text-sm leading-loose max-w-sm">{proj.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-10">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold uppercase tracking-widest border border-zinc-200 group-hover:border-zinc-400 px-3 py-1.5 text-zinc-400 group-hover:text-zinc-600 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="lg:col-span-5 grid grid-cols-3 divide-x divide-zinc-200">
                  {proj.outcomes.map((o, j) => (
                    <div key={j} className="flex flex-col items-center justify-center p-8 text-center border-b lg:border-b-0 border-zinc-200">
                      <span className="text-3xl lg:text-4xl font-black tracking-tight mb-2">{o.value}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-tight">{o.label}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <div className="lg:col-span-1 hidden lg:flex items-center justify-center border-l border-zinc-200">
                  <ArrowUpRight className="h-5 w-5 text-zinc-200 group-hover:text-black group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 text-center mb-12">Technologies We Master</p>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-0 divide-x divide-zinc-100 border border-zinc-100">
            {techStack.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex flex-col items-center justify-center py-8 px-4 text-center hover:bg-[#F8F8F8] transition-colors group"
              >
                <t.icon className="h-6 w-6 text-zinc-300 group-hover:text-black transition-colors mb-3" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-black transition-colors leading-tight">{t.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-[#F3F3F3] border-b border-zinc-200 py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 text-center mb-16">What Our Clients Say</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white border border-zinc-200 p-10 flex flex-col"
              >
                <div className="flex mb-6">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 text-black fill-black" />
                  ))}
                </div>
                <p className="text-zinc-700 text-base leading-relaxed flex-1 mb-10">"{t.quote}"</p>
                <div className="flex items-center space-x-4">
                  <div className="bg-black text-white w-10 h-10 flex items-center justify-center font-bold text-xs shrink-0">{t.initials}</div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest">{t.name}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">{t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-black text-white py-32 px-4 text-center overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.85]">
            READY TO<br />INTERRUPT THE NORM?
          </h2>
          <p className="text-zinc-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the forward-thinking companies building with SARVE SOLUTIONS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link to="/contact" className="inline-flex items-center bg-white text-black px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors">
                Book a Consultation
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link to="/portfolio" className="inline-flex items-center border border-zinc-700 text-white px-12 py-6 text-sm font-bold uppercase tracking-widest hover:border-white transition-colors">
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="w-[800px] h-[800px] bg-white/20 rounded-full blur-[120px] mx-auto" />
        </div>
      </section>
    </div>
  );
};

export default Home;
