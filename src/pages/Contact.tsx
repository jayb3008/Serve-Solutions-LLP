
import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const ContactScene = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={2} />
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
          <MeshDistortMaterial
            color="#18181b"
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </Float>
    </>
  );
};

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div ref={containerRef} className="bg-[#F3F3F3] min-h-screen text-zinc-900 font-sans selection:bg-black selection:text-white pt-20 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 border-b border-zinc-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ContactScene />
          </Canvas>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="block text-xs font-bold tracking-widest uppercase mb-4 text-zinc-500"
              >
                Get in Touch
              </motion.span>
              <h1 ref={titleRef} className="text-5xl md:text-8xl font-bold tracking-tighter max-w-4xl leading-[0.9]">
                INITIATE<br />PROTOCOL.
              </h1>
            </div>
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-zinc-400 leading-relaxed max-w-md md:ml-auto"
              >
                Ready to engineer your digital future? Our team is on standby to discuss your architectural needs.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 border-l border-r border-zinc-200">

            {/* Contact Information */}
            <div className="p-12 md:p-24 bg-zinc-50">
              <h2 className="text-3xl font-bold tracking-tight mb-12 uppercase tracking-tighter">COMMUNICATION CHANNELS</h2>
              <div className="space-y-12">
                {[
                  { icon: Mail, label: "Email Relay", value: "contact@sarvesolutions.in", href: "mailto:contact@sarvesolutions.in" },
                  { icon: Phone, label: "Direct Line", value: "+91-9904055986", href: "tel:+919904055986" },
                  { icon: MapPin, label: "HQ Coordinates", value: "Anand, Gujarat, India, 388001", isAddress: true }
                ].map((item, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    key={i} className="group"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-10 h-10 bg-black text-white flex items-center justify-center">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">{item.label}</span>
                    </div>
                    {item.isAddress ? (
                      <address className="text-xl md:text-2xl font-bold text-zinc-900 not-italic leading-tight">
                        Anand, Gujarat<br />
                        India, 388001
                      </address>
                    ) : (
                      <a href={item.href} className="text-xl md:text-2xl font-bold text-zinc-900 group-hover:underline underline-offset-4 decoration-2">
                        {item.value}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-12 md:p-24 bg-white">
              <h2 className="text-3xl font-bold tracking-tight mb-12 uppercase tracking-tighter">TRANSMIT MESSAGE</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Identity</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-50 border-b-2 border-zinc-200 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                      placeholder="Full Name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-2"
                  >
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Communication</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-50 border-b-2 border-zinc-200 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                      placeholder="Email Address"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2"
                >
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border-b-2 border-zinc-200 px-4 py-3 focus:outline-none focus:border-black transition-colors appearance-none"
                  >
                    <option value="">Select Protocol Inquiry</option>
                    <option value="project">New Project Architecture</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="careers">Join the Team</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Transmission</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-zinc-50 border-b-2 border-zinc-200 px-4 py-3 focus:outline-none focus:border-black transition-colors resize-none"
                    placeholder="Project details, technical requirements, or general inquiries..."
                  ></textarea>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-black text-white px-8 py-5 text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center justify-between disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-4 bg-green-50 text-green-800 text-sm font-bold flex items-center overflow-hidden"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" /> Message Received. We will respond shortly.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Hybrid */}
      <section className="bg-[#F3F3F3] py-32 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tighter mb-16 text-center uppercase">FREQUENT INQUIRIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { q: "Typical project timeline?", a: "Timelines vary by complexity. Standard web applications typically range from 4-8 weeks from architecture to deployment." },
              { q: "Engagement models?", a: "We offer fixed-cost project based engagements and dedicated team augmentation models for long-term scalability." },
              { q: "Post-launch support?", a: "Comprehensive maintenance packages are available, including server monitoring, security patches, and iterative updates." },
              { q: "Technology stack?", a: "We specialize in the React ecosystem (Next.js, React Native), Node.js backends, and cloud infrastructure via AWS/Vercel." }
            ].map((faq, i) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={i} className="bg-white p-8 border border-zinc-200 group cursor-default"
              >
                <h3 className="font-bold text-lg mb-3 group-hover:text-zinc-600 transition-colors">{faq.q}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;