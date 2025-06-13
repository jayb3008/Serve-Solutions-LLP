import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { CheckCircle2, Users, Trophy, Calendar } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutPreviewSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const keyPointsRef = useRef([]);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef([]);

  const stats = [
    {
      icon: <Trophy className="h-5 sm:h-6 w-5 sm:w-6 text-brand-blue" />,
      value: 100,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      icon: <Users className="h-5 sm:h-6 w-5 sm:w-6 text-brand-teal" />,
      value: 50,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      icon: <Calendar className="h-5 sm:h-6 w-5 sm:w-6 text-brand-purple" />,
      value: 10,
      suffix: "+",
      label: "Years Experience",
    },
  ];

  const keyPoints = [
    "Expert development team with deep technical knowledge",
    "Agile methodology for faster delivery and flexibility",
    "Dedicated support and maintenance services",
    "Complete transparency throughout the development process",
    "Scalable solutions that grow with your business",
  ];

  useEffect(() => {
    // Text content animation (header, paragraphs, badge)
    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Key points animation
    gsap.fromTo(
      keyPointsRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    // Button animation
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );

    // Image animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Stats cards animation
    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-brand-blue/10 via-brand-teal/10 to-brand-purple/10 rounded-xl transform rotate-3 hidden sm:block"></div>
              <img
                ref={imageRef}
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1470&auto=format&fit=crop"
                alt="Employee collaborating at Sarve Solutions"
                className="rounded-xl shadow-lg w-full h-auto max-h-[400px] sm:max-h-[500px] object-cover"
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    ref={(el) => (statsRef.current[index] = el)}
                    className="bg-white dark:bg-gray-700 rounded-lg shadow p-3 sm:p-4 text-center"
                  >
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div ref={textRef} className="order-1 lg:order-2">
            <span className="inline-block bg-brand-purple/10 text-brand-purple text-xs sm:text-sm font-medium py-1 px-3 rounded-full">
              About Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 mb-6">
              Delivering Digital Excellence Since 2014
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
              WebFlow Architects is a leading IT services company specialized in
              creating custom web and mobile applications that transform
              businesses.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6 sm:mb-8">
              We combine technical expertise with strategic thinking to deliver
              solutions that not only meet your current needs but are built to
              evolve with your business.
            </p>

            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {keyPoints.map((point, index) => (
                <div
                  key={index}
                  ref={(el) => (keyPointsRef.current[index] = el)}
                  className="flex items-start"
                >
                  <CheckCircle2 className="h-4 sm:h-5 w-4 sm:w-5 text-brand-blue mr-2 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div ref={buttonRef}>
              <Button
                asChild
                className="rounded-full text-sm sm:text-base"
                size="lg"
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
