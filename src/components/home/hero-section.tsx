import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { ArrowRight, ArrowDown, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export function HeroSection() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Particle initialization
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Animation variants for staggered text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" },
    tap: { scale: 0.95 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-white via-brand-lightBlue to-brand-teal dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: ["#3b82f6", "#14b8a6", "#a855f7"] },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 3, random: true },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              out_mode: "out",
            },
          },
          interactivity: {
            events: { onhover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-purple/10 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-brand-blue/10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-brand-teal/10 blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-4">
                Service-based IT Company
              </span>
            </motion.div>

            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Unlocking Business{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple">
                Potential
              </span>
            </motion.h1>

            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              <TypingAnimation
                texts={[
                  "IT Consulting & Strategy",
                  "Web & App Development",
                  "Cloud and Automation",
                  "Digital Transformation",
                ]}
                className="font-medium text-brand-blue"
              />
              <p className="mt-4">
                Powering your business with reliable solutions for growth and
                innovation.
              </p>
              <div className="flex items-center justify-center lg:justify-start mt-4 gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200">
                  <Clock size={16} className="mr-1" /> 24/7 Availability
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-brand-blue hover:bg-brand-purple transition-colors"
                >
                  <Link to="/contact">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                >
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue via-brand-teal to-brand-purple opacity-20 blur-xl rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"
                alt="Professional IT Service Team in Workspace"
                className="relative z-10 rounded-lg shadow-2xl max-w-full object-cover max-h-[400px] w-[350px] md:w-[430px] transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <button
            onClick={scrollToServices}
            className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
