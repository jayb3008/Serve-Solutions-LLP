
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Code2, Cpu, Globe, Layers, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);

    // Mock project data (In a real app, this would come from a data file or API)
    const projects = [
        {
            id: 1,
            title: "FinTech Dashboard",
            category: "Web Engineering",
            year: "2023",
            client: "Capital Solutions",
            overview: "A comprehensive real-time financial tracking and visualization platform designed for institutional investors. The system processes millions of data points per second to provide sub-second latency updates.",
            challenge: "The primary challenge was managing high-frequency data updates without compromising UI responsiveness. We needed a solution that could handle rapid state changes while maintaining a buttery-smooth 60fps experience for complex interactive charts.",
            solution: "We implemented a custom data-streaming architecture using WebSockets and a optimized Web Worker layer for data processing. For visualization, we leveraged D3.js integrated with React for surgical DOM updates, and Canvas for the highly dense data layers.",
            tech: ["React", "TypeScript", "D3.js", "WebSockets", "Node.js", "PostgreSQL"],
            features: ["Real-time Market Data", "Predictive Analytics", "Automated Reporting", "Institutional-grade Security"],
            image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
            nextId: 2
        },
        {
            id: 2,
            title: "E-Commerce Architecture",
            category: "Enterprise CMS",
            year: "2023",
            client: "Vogue Collective",
            overview: "A headless commerce transformation for a global luxury fashion retailer. Transitioning from a monolithic legacy system to a modern, decoupled architecture to improve performance and agility.",
            challenge: "The client faced 5+ second load times and a rigid backend that made international expansion difficult. They needed multi-currency, multi-language support with localized inventories across 12 regions.",
            solution: "We architected a headless solution using Shopify Plus as the commerce engine and Next.js for a high-performance frontend. Implementing a Redis-backed caching layer and edge-optimized image delivery resulted in sub-second page loads globally.",
            tech: ["Next.js", "Shopify Plus", "GraphQL", "Redis", "Vercel"],
            features: ["Global Multi-storefront", "Omnichannel Inventory", "Advanced Personalization", "Lightning-fast Search"],
            image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200",
            nextId: 3
        },
        {
            id: 3,
            title: "Mobile Banking Core",
            category: "Mobile Solutions",
            year: "2024",
            client: "Neo Bank",
            overview: "Designing and building the core mobile experience for a next-generation neo-bank targeting Gen-Z users with innovative social saving features.",
            challenge: "Traditional banking apps feel heavy and intimidating. The goal was to build a mobile platform that felt more like a social app while maintaining the highest levels of security and regulatory compliance.",
            solution: "We built a native-parity experience using React Native with a focus on micro-interactions and haptic feedback. A robust security layer with biometric authentication and hardware-level encryption ensures user data remains protected.",
            tech: ["React Native", "Swift", "Kotlin", "AWS Lambda", "DynamoDB"],
            features: ["Social Saving Pools", "Instant P2P Payments", "Spending Insights", "Card Freeze/Unfreeze"],
            image: "https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg?auto=compress&cs=tinysrgb&w=1200",
            nextId: 4
        }
    ];

    const project = projects.find(p => p.id === Number(id)) || projects[0];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });

            gsap.from(".grid-line", {
                scaleX: 0,
                duration: 1.5,
                ease: "power2.inOut",
                delay: 0.5
            });
        }, containerRef);

        return () => ctx.revert();
    }, [id]);

    return (
        <div ref={containerRef} className="bg-white min-h-screen text-zinc-900 font-sans selection:bg-black selection:text-white pt-20">

            {/* Header Info */}
            <section className="px-6 lg:px-12 py-16 border-b border-zinc-200">
                <div className="max-w-7xl mx-auto">
                    <Link to="/portfolio" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors mb-12 group">
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Portfolio
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                        <div className="lg:col-span-8">
                            <span className="reveal block text-xs font-bold tracking-[0.3em] uppercase mb-4 text-zinc-400">
                                {project.category}
                            </span>
                            <h1 className="reveal text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                                {project.title.toUpperCase()}
                            </h1>
                        </div>
                        <div className="lg:col-span-4 grid grid-cols-2 gap-8 border-l border-zinc-200 pl-12 reveal pb-4">
                            <div>
                                <span className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Year</span>
                                <span className="font-bold">{project.year}</span>
                            </div>
                            <div>
                                <span className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Client</span>
                                <span className="font-bold">{project.client}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Image */}
            <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "anticipate" }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 pointer-events-none" />
            </section>

            {/* Overview & Tech */}
            <section className="py-24 px-6 lg:px-12 border-b border-zinc-200">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-7">
                        <h2 className="text-xs font-bold uppercase tracking-widest mb-10 text-zinc-400 flex items-center">
                            <span className="w-8 h-[1px] bg-zinc-200 mr-4"></span>
                            Project Overview
                        </h2>
                        <p className="text-2xl md:text-3xl font-medium leading-relaxed text-zinc-800">
                            {project.overview}
                        </p>
                    </div>

                    <div className="lg:col-span-5 bg-zinc-50 p-12 border border-zinc-100">
                        <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-black">Technologies</h3>
                        <div className="flex flex-wrap gap-3">
                            {project.tech.map((item) => (
                                <span key={item} className="px-4 py-2 bg-white border border-zinc-200 text-sm font-mono text-zinc-600">
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="mt-12 space-y-6">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-black">Core Features</h3>
                            <ul className="space-y-4">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm text-zinc-600">
                                        <Zap className="h-4 w-4 mr-3 text-black shrink-0 mt-0.5" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge & Solution */}
            <section className="py-24 px-6 lg:px-12 bg-zinc-900 text-white">
                <div className="max-w-7xl mx-auto divide-y divide-zinc-800">
                    <div className="pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4 self-start">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="bg-white/10 p-3">
                                    <Cpu className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold">The Challenge</h3>
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                                {project.challenge}
                            </p>
                        </div>
                    </div>

                    <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4 self-start">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="bg-white p-3">
                                    <Layers className="h-6 w-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold">The Solution</h3>
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                                {project.solution}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Nav */}
            <section className="py-24 px-6 lg:px-12 border-t border-zinc-200">
                <div className="max-w-7xl mx-auto bg-black p-12 md:p-20 text-center relative overflow-hidden group hover:scale-[0.99] transition-transform duration-700">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="block text-xs font-bold uppercase tracking-[0.4em] text-zinc-500 mb-8">Next Case Study</span>
                    <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-12">
                        READY TO SEE MORE?
                    </h2>
                    <button
                        onClick={() => navigate(`/portfolio/${project.nextId}`)}
                        className="inline-flex items-center text-sm font-bold uppercase tracking-widest bg-white text-black px-12 py-6 hover:bg-zinc-200 transition-colors"
                    >
                        Next Project
                        <ArrowRight className="ml-3 h-4 w-4" />
                    </button>
                </div>
            </section>

        </div>
    );
};

export default ProjectDetail;
