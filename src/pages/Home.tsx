
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Smartphone, Palette, Search, Globe, Target, Star, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const TechScene = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.1;
      meshRef.current.rotation.y = time * 0.15;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05;
    }
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[2, 0]} />
          <MeshDistortMaterial
            color="#000000"
            speed={2}
            distort={0.4}
            roughness={0.1}
            metalness={0.9}
            wireframe
          />
        </mesh>
      </Float>
      <points ref={pointsRef}>
        <sphereGeometry args={[4, 32, 32]} />
        <pointsMaterial color="#cccccc" size={0.02} transparent opacity={0.3} />
      </points>
    </group>
  );
};

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      });

      // Grid line animation
      gsap.from(".grid-line", {
        scaleX: 0,
        scaleY: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power2.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div ref={containerRef} className="bg-[#F3F3F3] min-h-screen text-zinc-900 font-sans selection:bg-black selection:text-white pt-20 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden border-b border-zinc-200">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
          <div className="grid-line absolute top-1/4 left-0 w-full h-[1px] bg-black origin-left" />
          <div className="grid-line absolute top-2/4 left-0 w-full h-[1px] bg-black origin-left" />
          <div className="grid-line absolute top-3/4 left-0 w-full h-[1px] bg-black origin-left" />
          <div className="grid-line absolute left-1/4 top-0 w-[1px] h-full bg-black origin-top" />
          <div className="grid-line absolute left-2/4 top-0 w-[1px] h-full bg-black origin-top" />
          <div className="grid-line absolute left-3/4 top-0 w-[1px] h-full bg-black origin-top" />
        </div>

        {/* 3D Visual Background */}
        <div className="absolute inset-0 z-0">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
            <TechScene />
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 max-w-5xl w-full text-center hero-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 mb-8"
          >
            <span className="px-4 py-1.5 text-[10px] font-black tracking-[0.3em] bg-black text-white uppercase">
              Beyond Boundaries
            </span>
          </motion.div>

          <h1 ref={heroTitleRef} className="text-[12vw] sm:text-[10vw] lg:text-[8vw] font-bold tracking-tighter leading-[0.8] mb-12 text-black drop-shadow-sm">
            SARVE<br />
            SOLUTIONS.
          </h1>

          <div className="flex flex-col items-center">
            <p className="text-lg sm:text-xl text-zinc-600 max-w-xl leading-relaxed mb-12">
              We design and engineer high-performance digital products for startups and enterprises. Precision is our baseline.
            </p>

            <motion.div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center bg-black text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center justify-center border-2 border-zinc-900 bg-transparent text-black px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
              >
                Our Capabilities
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-40">
          <div className="w-[1px] h-12 bg-black origin-top animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* Ticker / Brands Grid */}
      <section className="ticker-section border-b border-zinc-200 bg-white overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-200">
          {['Innovation', 'Scalability', 'Performance', 'Security'].map((item) => (
            <div key={item} className="ticker-item py-10 text-center text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors cursor-default">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="reveal-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-zinc-200">
          {/* Section Header */}
          <div className="lg:col-span-4 p-12 border-b lg:border-b-0 lg:border-r border-zinc-200 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-8 max-w-xs">OUR EXPERTISE</h2>
              <p className="text-zinc-600 text-lg leading-relaxed">
                We deploy cross-functional teams to deliver end-to-end digital solutions. From architecture to deployment.
              </p>
            </div>
            <Link to="/services" className="hidden lg:inline-flex items-center text-sm font-bold uppercase tracking-wide mt-12 group">
              <span className="border-b-2 border-black pb-1">View All Capabilities</span>
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Services List */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2">
            {[
              { icon: Code2, title: "Web Engineering", desc: "Next.js, React, and robust backend systems." },
              { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform solutions for iOS & Android." },
              { icon: Globe, title: "Digital Platforms", desc: "Scalable CMS and enterprise-grade portals." },
              { icon: Palette, title: "Interface Design", desc: "User-centric UI/UX that drives engagement." },
              { icon: Search, title: "SEO & Growth", desc: "Data-driven strategies to maximize visibility." },
              { icon: Target, title: "Strategy", desc: "Digital transformation consulting." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={serviceVariants}
                transition={{ delay: i * 0.1 }}
                className={`group p-10 border-b border-r border-zinc-200 bg-[#F8F8F8] hover:bg-white transition-colors duration-500`}
              >
                <service.icon className="h-8 w-8 text-zinc-400 group-hover:text-black transition-colors mb-6 group-hover:scale-110 duration-500" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Numbered List */}
      <section className="bg-white border-b border-zinc-200 reveal-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
            {[
              { number: "01", title: "Precision", text: "Pixel-perfect implementation of designs." },
              { number: "02", title: "Speed", text: "Rapid development cycles without compromise." },
              { number: "03", title: "Scale", text: "Architectures built to handle millions." },
              { number: "04", title: "Support", text: "24/7 dedicated maintenance teams." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ backgroundColor: "#F3F3F3" }}
                className="p-10 transition-colors cursor-default"
              >
                <span className="text-xs font-mono text-zinc-400 mb-4 block">/{item.number}</span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Minimal */}
      <section className="py-32 px-4 bg-[#F3F3F3] reveal-section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Star className="h-8 w-8 text-black mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 leading-tight">
              "They don't just write code. They utilize technology to solve real business problems. The results speak for themselves."
            </h2>
          </motion.div>
          <div className="flex items-center justify-center space-x-4">
            <div className="bg-black text-white w-12 h-12 flex items-center justify-center font-bold text-sm rounded-none">
              CA
            </div>
            <div className="text-left">
              <div className="font-bold text-sm uppercase tracking-widest">Tech Startup CEO</div>
              <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Client Partner</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-32 px-4 text-center reveal-section overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.85]">
            READY TO<br />INTERRUPT THE NORM?
          </h2>
          <p className="text-zinc-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the forward-thinking companies building with SarveSolutions.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-black px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>

        {/* Subtle background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="w-[800px] h-[800px] bg-white/20 rounded-full blur-[120px] mx-auto" />
        </div>
      </section>

    </div>
  );
};

export default Home;
