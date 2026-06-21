
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { industriesData } from '../data/industries';
import {
    ArrowLeft,
    ShieldCheck
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

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
        const ctx = gsap.context(() => {
            gsap.from(".reveal", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, [id]);

    return (
        <div ref={containerRef} className="bg-[#F3F3F3] min-h-screen text-zinc-900 font-sans pt-20 overflow-x-hidden">
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
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center bg-black text-white py-32 border-b border-zinc-800 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center space-x-2 mb-8"
                            >
                                <industry.icon className="w-5 h-5 text-zinc-500" />
                                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-500">
                                    An industry we know
                                </span>
                            </motion.div>

                            <h1 className="reveal text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                                {industry.title.toUpperCase()}.
                            </h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="text-xl md:text-2xl text-zinc-400 leading-relaxed pb-2 max-w-md lg:ml-auto"
                        >
                            {industry.tagline}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Strategic Overview */}
            <section className="bg-white border-b border-zinc-200">
                <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-12 flex items-center">
                        <span className="w-12 h-[1px] bg-zinc-200 mr-4" />
                        01 The angle we take
                    </h2>
                    <p className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-800 leading-[1.1] max-w-5xl">
                        {industry.overview}
                    </p>
                </div>
            </section>

            {/* Industry Capabilities */}
            <section className="py-24 border-b border-zinc-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-20 flex items-center">
                        <span className="w-12 h-[1px] bg-zinc-200 mr-4" />
                        02 What we have done before
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200">
                        {industry.capabilities.map((cap: any, i: number) => (
                            <div key={i} className="bg-white p-12 group hover:bg-zinc-50 transition-colors">
                                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{cap.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">{cap.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Callout */}
            <section className="relative h-[60vh] bg-black overflow-hidden flex items-center justify-center">
                <div
                    className="absolute inset-0 opacity-40 bg-cover bg-center"
                    style={{ backgroundImage: `url(${industry.image})` }}
                />
                <div className="relative z-10 text-center px-6">
                    <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">SOFTWARE THE {industry.title.toUpperCase()} TEAM CAN USE.</h3>
                    <div className="w-24 h-1 bg-white mx-auto" />
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 border-b border-zinc-200 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-16 flex items-center">
                        <span className="w-12 h-[1px] bg-zinc-200 mr-4" />
                        03 Things people often ask
                    </h2>
                    <div className="border-t border-zinc-200">
                        {faqs.map((f, i) => (
                            <div key={i} className="py-8 border-b border-zinc-200">
                                <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight text-zinc-900">{f.question}</h3>
                                <p className="text-zinc-600 leading-relaxed text-base md:text-lg">{f.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="py-24 border-t border-zinc-200 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-black text-white p-16 md:p-24 relative overflow-hidden group">
                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 group-hover:scale-[1.02] transition-transform duration-700">
                                BUILD THE NEXT<br />ONE WITH US.
                            </h2>
                            <p className="text-zinc-400 text-lg md:text-xl mb-12">
                                Tell us what you are trying to make in {industry.title.toLowerCase()}. We will reply within a working day — usually with two or three questions, sometimes with an honest ‘not us’.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                                className="bg-white text-black px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
                            >
                                Send us a note
                            </motion.button>
                        </div>
                    </div>

                    <div className="mt-20 flex flex-col md:flex-row justify-between items-center py-8 border-t border-zinc-100">
                        <Link to="/industries" className="flex items-center text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-all mb-6 md:mb-0 group">
                            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                            Back to industries
                        </Link>
                        <div className="hidden md:flex items-center space-x-12">
                            <Link to="/portfolio" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors">
                                See the work
                            </Link>
                            <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors">
                                What we do
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IndustryDetail;
