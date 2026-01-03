
import { useEffect, useRef } from 'react';
import { Code2, Smartphone, Globe, Palette, Search, ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={2} />
            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
                    <MeshDistortMaterial
                        color="#27272a"
                        attach="material"
                        distort={0.4}
                        speed={1.5}
                        roughness={0}
                    />
                </Sphere>
            </Float>
        </>
    );
};

const Services = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Title Animation
            gsap.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.2
            });

            // Reveal sections on scroll
            gsap.utils.toArray<HTMLElement>('.reveal').forEach((elem) => {
                gsap.from(elem, {
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const services = [
        {
            icon: Code2,
            title: "Web Engineering",
            description: "High-performance web applications built on scalable React & Node.js architectures.",
            features: ["Next.js SSR", "Cloud Infrastructure", "API Integration"]
        },
        {
            icon: Smartphone,
            title: "Mobile Solutions",
            description: "Native-grade cross-platform applications deployed to iOS and Android.",
            features: ["React Native", "Offline-first", "Hardware Integration"]
        },
        {
            icon: Globe,
            title: "Enterprise CMS",
            description: "Custom content management systems tailored for complex workflows.",
            features: ["Headless CMS", "Workflow Automation", "Role-based Access"]
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Data-driven interface design focused on user conversion and retention.",
            features: ["Design Systems", "Prototyping", "User Testing"]
        },
        {
            icon: Search,
            title: "SEO Data & Analytics",
            description: "Technical SEO and analytics implementation for measurable growth.",
            features: ["Core Web Vitals", "Schema Implementation", "Performance Audits"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div ref={containerRef} className="bg-[#F3F3F3] min-h-screen text-zinc-900 font-sans selection:bg-black selection:text-white pt-20 overflow-x-hidden">

            {/* Hero Section */}
            <section ref={heroRef} className="relative bg-black text-white py-32 border-b border-zinc-800 overflow-hidden">
                {/* Three.js Background */}
                <div className="absolute inset-0 z-0 opacity-50">
                    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                        <Scene />
                    </Canvas>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                        <div>
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="block text-xs font-bold tracking-widest uppercase mb-4 text-zinc-500"
                            >
                                Our Expertise
                            </motion.span>
                            <h1 ref={titleRef} className="text-5xl md:text-8xl font-bold tracking-tighter max-w-4xl leading-[0.9]">
                                TECHNICAL<br />CAPABILITIES.
                            </h1>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="text-xl text-zinc-400 leading-relaxed pb-2 max-w-md"
                        >
                            We deploy cross-functional teams to deliver end-to-end digital solutions. From architecture to deployment.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="bg-white border-b border-zinc-200">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-200 border-l border-r border-zinc-200"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="p-12 group hover:bg-zinc-50 transition-colors border-b border-zinc-200 cursor-default"
                            >
                                <div className="overflow-hidden mb-8">
                                    <service.icon className="h-10 w-10 text-black group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-300">{service.title}</h2>
                                <p className="text-zinc-500 text-lg mb-8 leading-relaxed">{service.description}</p>

                                <div className="space-y-4 mb-8">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center text-sm font-medium text-zinc-700">
                                            <motion.div
                                                whileHover={{ scale: 1.5 }}
                                                className="w-1.5 h-1.5 bg-black rounded-full mr-3"
                                            />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="flex items-center text-xs font-bold uppercase tracking-widest text-black cursor-pointer inline-flex"
                                >
                                    Explore Solution <ArrowRight className="ml-2 h-4 w-4" />
                                </motion.div>
                            </motion.div>
                        ))}

                        {/* Process Card / Last Grid Item */}
                        <motion.div
                            variants={itemVariants}
                            className="p-12 bg-zinc-900 text-white flex flex-col justify-between"
                        >
                            <div>
                                <Terminal className="h-10 w-10 text-white mb-8" />
                                <h2 className="text-3xl font-bold tracking-tight mb-4">Our Methodology</h2>
                                <p className="text-zinc-400 text-lg mb-8">
                                    We follow a rigorous agile process: Discovery, Architecture, Development, and Quality Assurance.
                                </p>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 border border-zinc-700 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                            >
                                View Full Process
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 text-center reveal">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">READY TO SCALE?</h2>
                    <p className="text-zinc-500 text-lg mb-12 max-w-xl mx-auto">
                        Book a technical consultation to discuss your infrastructure needs and digital transformation strategy.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-black text-white px-10 py-5 text-sm font-bold uppercase tracking-widest transition-colors"
                    >
                        Start Conversation
                    </motion.button>
                </motion.div>
            </section>
        </div>
    );
};

export default Services;
