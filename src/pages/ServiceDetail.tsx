
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import {
    ArrowLeft,
    ArrowRight,
    ShieldCheck
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Squares from '../components/ui/squares';

gsap.registerPlugin(ScrollTrigger);

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);

    const service = servicesData[id as string] || servicesData['web-engineering'];

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
                                <service.icon className="w-5 h-5 text-zinc-500" />
                                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-500">
                                    Service Excellence
                                </span>
                            </motion.div>

                            <h1 className="reveal text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                                {service.title.toUpperCase()}.
                            </h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="text-xl md:text-2xl text-zinc-400 leading-relaxed pb-2 max-w-md lg:ml-auto"
                        >
                            {service.tagline}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Overview & Tech Stack */}
            <section className="bg-white border-b border-zinc-200">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="lg:col-span-7 p-12 lg:p-24 border-r border-zinc-200">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-12 flex items-center">
                                <span className="w-12 h-[1px] bg-zinc-200 mr-4" />
                                01 Architecture
                            </h2>
                            <p className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-800 leading-[1.15]">
                                {service.overview}
                            </p>
                        </div>

                        <div className="lg:col-span-5 p-12 lg:p-24 flex flex-col justify-center">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">Technical Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {service.tech.map((tool: string) => (
                                    <span key={tool} className="px-5 py-3 border border-zinc-100 bg-[#F8F8F8] text-xs font-mono font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors cursor-default">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-24 border-b border-zinc-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-20 flex items-center">
                        <span className="w-12 h-[1px] bg-zinc-200 mr-4" />
                        02 Capabilities
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200">
                        {service.capabilities.map((cap: any, i: number) => (
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

            {/* Methodology */}
            <section className="bg-zinc-900 py-32 text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-8 flex items-center">
                                <span className="w-12 h-[1px] bg-zinc-800 mr-4" />
                                03 Methodology
                            </h2>
                            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">OUR PROCESS<br />PIPELINE.</h3>
                        </div>
                        <div className="lg:max-w-md">
                            <p className="text-zinc-500 leading-relaxed text-lg">
                                We utilize a battle-tested agile framework designed for speed, transparency, and technical precision.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {service.workflow.map((item: any, i: number) => (
                            <div key={i} className="relative">
                                <span className="text-6xl font-bold text-white/5 absolute -top-10 -left-4 pointer-events-none">
                                    {item.step}
                                </span>
                                <div className="relative pt-8">
                                    <h4 className="text-xl font-bold mb-4 flex items-center">
                                        {item.title}
                                        <ArrowRight className="w-4 h-4 ml-2 opacity-20" />
                                    </h4>
                                    <p className="text-zinc-500 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="py-24 border-t border-zinc-200 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-black text-white p-16 md:p-24 relative overflow-hidden group">
                        <div className="absolute inset-0 z-0 opacity-20">
                            <Squares squareSize={60} direction="up" speed={0.1} borderColor="#ffffff" />
                        </div>

                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 group-hover:scale-[1.02] transition-transform duration-700">
                                READY TO<br />ENGINEER SUCCESS?
                            </h2>
                            <p className="text-zinc-400 text-lg md:text-xl mb-12">
                                Let's discuss how our {service.title} expertise can accelerate your digital roadmap.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                                className="bg-white text-black px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
                            >
                                Start Technical Consultation
                            </motion.button>
                        </div>
                    </div>

                    <div className="mt-20 flex flex-col md:flex-row justify-between items-center py-8 border-t border-zinc-100">
                        <Link to="/services" className="flex items-center text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-all mb-6 md:mb-0 group">
                            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                            All Capabilities
                        </Link>
                        <div className="hidden md:flex items-center space-x-12">
                            <Link to="/portfolio" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors">
                                View Portfolio
                            </Link>
                            <Link to="/about" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors">
                                Our Ethos
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
