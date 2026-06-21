import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { industriesData } from '../data/industries';
import {
    ArrowLeft,
    ShieldCheck
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import Squares from '../components/ui/squares';
import Magnetic from '../components/Magnetic';

const IndustryDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);

    const industry = industriesData[id as string] || industriesData['healthcare'];

    const faqs = [
        {
            question: `How do you actually work with ${industry.title.toLowerCase()} teams?`,
            answer: `${industry.overview} In day-to-day terms, that usually means ${industry.capabilities.map((c: { title: string }) => c.title).join(', ')}.`,
        },
        {
            question: `What sort of ${industry.title.toLowerCase()} products have you built?`,
            answer: industry.capabilities.map((c: { title: string; desc: string }) => `${c.title} — ${c.desc}`).join(' '),
        },
        {
            question: `Do you only work with Indian ${industry.title.toLowerCase()} clients?`,
            answer: `No. We sit in Anand, but about half our ${industry.title.toLowerCase()} work is for teams in the US, UK or EU. Fully remote, hybrid, or with someone on the plane when it matters.`,
        },
        {
            question: `Why pick this studio for ${industry.title.toLowerCase()}?`,
            answer: `We have shipped 120+ products since 2020, 98% of clients renew, and we have done enough ${industry.title.toLowerCase()} work to know the compliance traps before they bite. We are senior, small, and you can call us by name.`,
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div ref={containerRef} className="bg-[var(--bg-2)] min-h-screen text-[var(--ink)] font-sans pt-20 overflow-x-hidden">
            <SEO
                title={industry.title}
                description={industry.tagline}
                keywords={industry.keywords}
                url={`https://satvixtech.com/industries/${id}`}
                breadcrumb={[
                    { name: "Home", item: "https://satvixtech.com" },
                    { name: "Industries", item: "https://satvixtech.com/industries" },
                    { name: industry.title, item: `https://satvixtech.com/industries/${id}` }
                ]}
                faq={faqs}
            />
            {/* Page hero */}
            <section className="page-hero relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
                    <Squares squareSize={65} direction="diagonal" speed={0.15} borderColor="rgba(18, 21, 24, 0.08)" hoverFillColor="rgba(227, 30, 36, 0.04)" fadeColor="var(--bg)" />
                </div>
                <div className="wrap relative z-10">
                    <div className="page-hero__eyebrow">
                        <span className="ping" />
                        <industry.icon className="w-4 h-4 text-[var(--muted)] inline-block mr-2 align-text-bottom" />
                        An industry we know
                    </div>
                    <h1>
                        <span className="row">
                            <motion.span
                                initial={{ y: '110%' }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.9, ease: [0.7, 0, 0.2, 1], delay: 0.3 }}
                                style={{ display: 'inline-block' }}
                            >
                                {industry.title.toUpperCase()} <em>EXPERTISE.</em>
                            </motion.span>
                        </span>
                    </h1>
                    <div className="page-hero__sub">
                        <div className="breadcrumb">
                            Satvix Tech Solutions &nbsp;/&nbsp; Industries &nbsp;/&nbsp; {industry.title}
                        </div>
                        <p>
                            {industry.tagline}
                        </p>
                    </div>
                </div>
            </section>

            {/* Strategic Overview */}
            <section className="bg-[var(--bg)] border-b border-[var(--line)]">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-24 lg:py-32">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-8 sm:mb-12 flex items-center">
                        <span className="w-12 h-[1px] bg-[var(--line)] mr-4" />
                        01 The angle we take
                    </h2>
                    <p className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight text-[var(--ink)] leading-[1.15] sm:leading-[1.1] max-w-5xl">
                        {industry.overview}
                    </p>
                </div>
            </section>

            {/* Industry Capabilities */}
            <section className="py-16 sm:py-24 border-b border-[var(--line)]">
                <div className="max-w-7xl mx-auto px-5 sm:px-6">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-12 sm:mb-20 flex items-center">
                        <span className="w-12 h-[1px] bg-[var(--line)] mr-4" />
                        02 What we have done before
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--line)] border border-[var(--line)]">
                        {industry.capabilities.map((cap: any, i: number) => (
                            <div key={i} className="bg-[var(--bg)] p-6 sm:p-10 lg:p-12 group hover:bg-[var(--bg-2)] transition-colors">
                                <div className="w-12 h-12 bg-[var(--ink)] text-[var(--bg)] flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{cap.title}</h3>
                                <p className="text-[var(--ink-2)] text-sm leading-relaxed">{cap.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Callout */}
            <section className="relative h-[44vh] sm:h-[55vh] lg:h-[60vh] min-h-[280px] bg-[var(--ink)] overflow-hidden flex items-center justify-center">
                <div
                    className="absolute inset-0 opacity-40 bg-cover bg-center"
                    style={{ backgroundImage: `url(${industry.image})` }}
                />
                <div className="relative z-10 text-center px-5 sm:px-6">
                    <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold text-[var(--bg)] tracking-tighter mb-4 leading-tight">SOFTWARE THE {industry.title.toUpperCase()} TEAM CAN USE.</h3>
                    <div className="w-24 h-1 bg-[var(--bg)] mx-auto" />
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 sm:py-24 border-b border-[var(--line)] bg-[var(--bg)]">
                <div className="max-w-4xl mx-auto px-5 sm:px-6">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-10 sm:mb-16 flex items-center">
                        <span className="w-12 h-[1px] bg-[var(--line)] mr-4" />
                        03 Things people often ask
                    </h2>
                    <div className="border-t border-[var(--line)]">
                        {faqs.map((f, i) => (
                            <div key={i} className="py-6 sm:py-8 border-b border-[var(--line)]">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 tracking-tight text-[var(--ink)]">{f.question}</h3>
                                <p className="text-[var(--ink-2)] leading-relaxed text-sm sm:text-base md:text-lg">{f.answer}</p>
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
                            <Squares squareSize={60} direction="up" speed={0.1} borderColor="#ffffff" hoverFillColor="rgba(227, 30, 36, 0.06)" fadeColor="var(--ink)" />
                        </div>

                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 sm:mb-8 group-hover:scale-[1.02] transition-transform duration-700">
                                BUILD THE <em>NEXT</em><br />ONE WITH US.
                            </h2>
                            <p className="text-[var(--muted)] text-base sm:text-lg md:text-xl mb-8 sm:mb-12">
                                Tell us what you are trying to make in {industry.title.toLowerCase()}. We will reply within a working day — usually with two or three questions, sometimes with an honest ‘not us’.
                            </p>
                            <Magnetic>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate('/contact')}
                                    className="bg-[var(--bg)] text-[var(--ink)] px-8 sm:px-12 py-5 sm:py-6 text-sm font-bold uppercase tracking-widest hover:bg-[var(--bg-2)] transition-colors"
                                >
                                    Send us a note
                                </motion.button>
                            </Magnetic>
                        </div>
                    </div>

                    <div className="mt-12 sm:mt-20 flex flex-col md:flex-row justify-between items-center py-6 border-t border-[var(--line)] gap-2">
                        <Magnetic>
                            <Link to="/industries" className="flex items-center text-xs font-bold uppercase tracking-widest text-[var(--muted)] hover:text-[var(--ink)] transition-all group py-3 px-1" style={{ display: 'inline-flex' }}>
                                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                                Back to industries
                            </Link>
                        </Magnetic>
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                            <Magnetic>
                                <Link to="/portfolio" className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] hover:text-[var(--ink)] transition-colors py-3 px-3" style={{ display: 'inline-block' }}>
                                    See the work
                                </Link>
                            </Magnetic>
                            <Magnetic>
                                <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] hover:text-[var(--ink)] transition-colors py-3 px-3" style={{ display: 'inline-block' }}>
                                    What we do
                                </Link>
                            </Magnetic>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IndustryDetail;
