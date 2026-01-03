
import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Code2, Smartphone, Globe, Palette, Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import SEO from '../components/SEO';

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

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 1,
      title: "FinTech Dashboard",
      category: "web",
      description: "Real-time financial data visualization platform with React and D3.js.",
      image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "D3.js"],
      type: "Web Engineering",
      icon: Code2
    },
    {
      id: 2,
      title: "E-Commerce Architecture",
      category: "cms",
      description: "Headless Shopify build with Next.js frontend for a luxury fashion brand.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify Plus", "Next.js", "Redis"],
      type: "Enterprise CMS",
      icon: Globe
    },
    {
      id: 3,
      title: "Mobile Banking Core",
      category: "mobile",
      description: "Secure, biometric-enabled banking application infrastructure.",
      image: "https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Node.js", "AWS"],
      type: "Mobile Solutions",
      icon: Smartphone
    },
    {
      id: 4,
      title: "SaaS Design System",
      category: "design",
      description: "Comprehensive component library and design language for a global SaaS product.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Figma", "Storybook", "React"],
      type: "UI/UX Design",
      icon: Palette
    },
    {
      id: 5,
      title: "SEO Data Warehouse",
      category: "seo",
      description: "Custom analytics tool aggregating data from multiple search APIs.",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "BigQuery", "Data Studio"],
      type: "Data & SEO",
      icon: Search
    },
    {
      id: 6,
      title: "Telehealth Platform",
      category: "web",
      description: "HIPAA-compliant video consultation portal for healthcare providers.",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["WebRTC", "PostgreSQL", "Socket.io"],
      type: "Web Engineering",
      icon: Code2
    }
  ];

  const filters = [
    { key: 'all', label: 'All Work' },
    { key: 'web', label: 'Engineering' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'cms', label: 'CMS' },
    { key: 'design', label: 'Design' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div ref={containerRef} className="bg-[#F3F3F3] min-h-screen text-zinc-900 font-sans selection:bg-black selection:text-white pt-20 overflow-x-hidden">
      <SEO
        title="Portfolio"
        description="A curated selection of technical challenges we've solved. See our case studies in Web Engineering, Mobile Solutions, and more."
        url="https://sarvesolutions.in/portfolio"
        breadcrumb={[
          { name: "Home", item: "https://sarvesolutions.in" },
          { name: "Portfolio", item: "https://sarvesolutions.in/portfolio" }
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 border-b border-zinc-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Scene />
          </Canvas>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="block text-xs font-bold tracking-widest uppercase mb-4 text-zinc-500"
          >
            Selected Work
          </motion.span>
          <h1 ref={titleRef} className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl leading-[0.9]">
            CASE STUDIES.
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-zinc-400 max-w-2xl leading-relaxed"
          >
            A curated selection of technical challenges we've solved for our partners.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-zinc-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <div className="flex space-x-8">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`py-6 text-sm font-bold uppercase tracking-widest whitespace-nowrap border-b-2 transition-colors relative ${activeFilter === filter.key
                  ? 'text-black'
                  : 'text-zinc-400 hover:text-black'
                  }`}
              >
                {filter.label}
                {activeFilter === filter.key && (
                  <motion.div
                    layoutId="filter-pill"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="border-b border-zinc-200 bg-white min-h-[600px]">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200 border-l border-zinc-200"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => navigate(`/portfolio/${project.id}`)}
                className="group border-b border-zinc-200 bg-white hover:bg-zinc-50 transition-colors cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden border-b border-zinc-100 relative">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black text-white p-2 hover:bg-zinc-800">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <project.icon className="h-4 w-4 text-zinc-400" />
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">{project.type}</span>
                    </div>
                    <span className="text-[10px] font-bold text-zinc-300">/0{project.id}</span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest border border-zinc-100 px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-zinc-100 flex items-center text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-black text-zinc-400 transition-colors">
                    View Case Study
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-32 px-6 text-center reveal">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">START A PROJECT</h2>
          <p className="text-zinc-500 text-lg mb-12 max-w-xl mx-auto">
            Ready to build something remarkable? Let's talk architecture.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="bg-white text-black px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
          >
            Initiate Project
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;