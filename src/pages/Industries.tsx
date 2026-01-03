
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    HeartPulse,
    Scale,
    Truck,
    Banknote,
    GraduationCap,
    MessageSquareShare,
    Play,
    Umbrella,
    Plane,
    Factory,
    ShoppingBag,
    Signal,
    HardHat,
    Sparkles,
    Trophy,
    Zap,
    Store,
    ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const Industries = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.2
            });

            gsap.utils.toArray<HTMLElement>('.reveal-item').forEach((elem) => {
                gsap.from(elem, {
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const industries = [
        { name: "Healthcare", icon: HeartPulse, desc: "Digital health solutions, patient management, and telemedicine platforms." },
        { name: "Legal", icon: Scale, desc: "Secure document management, case tracking, and legal tech automation." },
        { name: "Logistics", icon: Truck, desc: "Supply chain visibility, fleet management, and real-time tracking systems." },
        { name: "Finance", icon: Banknote, desc: "Fintech applications, digital banking, and secure payment processing." },
        { name: "Education", icon: GraduationCap, desc: "Learning management systems, ed-tech tools, and virtual classrooms." },
        { name: "Social Media", icon: MessageSquareShare, desc: "Community platforms, content sharing, and engagement analytics." },
        { name: "Media & OTT", icon: Play, desc: "Streaming services, content delivery networks, and digital publishing." },
        { name: "Insurance", icon: Umbrella, desc: "Claims processing, risk assessment, and policy management systems." },
        { name: "Travel", icon: Plane, desc: "Booking engines, travel itinerary management, and tourism tech." },
        { name: "Manufacturing", icon: Factory, desc: "Industrial IoT, smart factory solutions, and inventory optimization." },
        { name: "Retail", icon: ShoppingBag, desc: "E-commerce platforms, POS systems, and omni-channel experiences." },
        { name: "IT & Telecom", icon: Signal, desc: "Network management, infrastructure monitoring, and communication tools." },
        { name: "Construction", icon: HardHat, desc: "Project management, BIM integration, and site safety monitoring." },
        { name: "Beauty & Lifestyle", icon: Sparkles, desc: "Consumer apps, wellness platforms, and personalized brand experiences." },
        { name: "Sports", icon: Trophy, desc: "Performance analytics, fan engagement apps, and event management." },
        { name: "On Demand", icon: Zap, desc: "Courier services, specialized delivery, and real-time service matching." },
        { name: "Marketplace", icon: Store, desc: "B2B/B2C trade platforms, vendor management, and transaction hubs." }
    ];

    return (
        <div ref={containerRef} className="bg-[#F3F3F3] min-h-screen text-zinc-900 font-sans selection:bg-black selection:text-white pt-20 overflow-x-hidden">
            <SEO
                title="Industry Expertise"
                description="We build specialized digital ecosystems tailored to the unique requirements of global vertical markets including Healthcare, Finance, Logistics, and more."
                url="https://sarvesolutions.in/industries"
                breadcrumb={[
                    { name: "Home", item: "https://sarvesolutions.in" },
                    { name: "Industries", item: "https://sarvesolutions.in/industries" }
                ]}
            />

            {/* Hero Section */}
            <section ref={heroRef} className="relative bg-black text-white py-32 border-b border-zinc-800 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                        <div>
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="block text-xs font-bold tracking-widest uppercase mb-4 text-zinc-500"
                            >
                                Vertical Markets
                            </motion.span>
                            <h1 ref={titleRef} className="text-5xl md:text-8xl font-bold tracking-tighter max-w-4xl leading-[0.9]">
                                INDUSTRY<br />EXPERTISE.
                            </h1>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="text-xl text-zinc-400 leading-relaxed pb-2 max-w-md lg:ml-auto"
                        >
                            We build specialized digital ecosystems tailored to the unique requirements of global vertical markets.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-24 border-b border-zinc-200 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
                        {industries.map((industry, index) => (
                            <Link
                                key={index}
                                to={`/industries/${industry.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                className="bg-white p-12 group hover:bg-zinc-50 transition-colors reveal-item block"
                            >
                                <div className="mb-8 overflow-hidden inline-block">
                                    <industry.icon className="h-8 w-8 text-black group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                    {industry.name.toUpperCase()}
                                </h3>
                                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                                    {industry.desc}
                                </p>
                                <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Protocol <ArrowRight className="ml-2 h-3 w-3" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Value Section */}
            <section className="py-32 bg-black text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500 mb-8 flex items-center">
                                <span className="w-12 h-[1px] bg-zinc-800 mr-4" />
                                Strategic Alignment
                            </h2>
                            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
                                TAILORED SOLUTIONS<br />FOR CORE DOMAINS.
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
                                We don't believe in one-size-fits-all. Every industry we serve has its own regulatory landscape, user behavior patterns, and infrastructure benchmarks.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-3xl font-bold mb-2 tracking-tighter">99.9%</div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Uptime Reliability</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2 tracking-tighter">150+</div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Industry Protocols</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden flex items-center justify-center group">
                            <div className="absolute inset-0 opacity-20 bg-[url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"></div>
                            <div className="relative z-10 p-12 text-center">
                                <div className="w-20 h-20 border border-white/20 flex items-center justify-center mx-auto mb-8 bg-black/50 backdrop-blur-sm">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Accelerated Deployment</h4>
                                <p className="text-zinc-500 text-sm max-w-xs mx-auto">Proprietary industry frameworks that cut development time by 40%.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 text-center bg-white reveal-item">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">READY TO LEAD YOUR SECTOR?</h2>
                <p className="text-zinc-500 text-lg mb-12 max-w-xl mx-auto">
                    Let's discuss how our domain-specific engineering can redefine your competitive advantage.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="bg-black text-white px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95">
                        Initiate Consultation
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Industries;
