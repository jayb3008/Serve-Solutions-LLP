import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { ArrowRight, ArrowDown, Clock } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function HeroSection() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);
  const scrollButtonRef = useRef(null);

  // Scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // GSAP Animations
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        subTextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        buttonsRef.current.children,
        { opacity: 0, y: 30, stagger: 0.2 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        scrollButtonRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        },
        "-=0.5"
      );

    return () => {
      tl.kill(); // Cleanup GSAP timeline on unmount
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[80vh] sm:min-h-screen flex items-center pt-20 sm:pt-24 pb-12 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80')`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 sm:bg-black/40 z-0"></div>

      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-brand-purple/10 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 sm:top-1/3 -left-20 sm:-left-40 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-brand-blue/10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 sm:right-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-brand-teal/10 blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 text-brand-blue text-xs sm:text-sm font-medium mb-4">
                Service-based IT Company
              </span>
            </div>

            <h1
              ref={textRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              Unlocking Business{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple">
                Potential
              </span>
            </h1>

            <div
              ref={subTextRef}
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8"
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
              <p className="mt-3 sm:mt-4 text-base sm:text-lg">
                Powering your business with reliable solutions for growth and
                innovation.
              </p>
              <div className="flex items-center justify-center lg:justify-start mt-3 sm:mt-4 gap-2">
                <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200">
                  <Clock size={14} className="mr-1" /> 24/7 Availability
                </span>
              </div>
            </div>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full bg-brand-blue hover:bg-brand-purple transition-colors text-sm sm:text-base"
              >
                <Link to="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-brand-blue text-brand-blue hover:bg-brand-blue/10 text-sm sm:text-base"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>

          <div
            ref={imageRef}
            className="hidden lg:flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue via-brand-teal to-brand-purple opacity-20 blur-xl rounded-lg"></div>
            </div>
          </div>
        </div>

        <div
          ref={scrollButtonRef}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToServices}
            className="w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
            aria-label="Scroll to services section"
          >
            <ArrowDown size={20} className="sm:size-24" />
          </button>
        </div>
      </div>
    </section>
  );
}
