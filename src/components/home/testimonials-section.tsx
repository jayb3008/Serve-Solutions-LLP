import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  content: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
}

export function TestimonialsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const sliderRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonsRef = useRef(null);

  const testimonials: Testimonial[] = [
    {
      content:
        "Sarve Solutions helped us develop a custom CRM that perfectly fits our business processes. Their team was extremely professional and delivered beyond our expectations.",
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechVentures Inc",
      avatar:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=200&auto=format&fit=facearea&facepad=3.0",
    },
    {
      content:
        "We've worked with several development teams before, but none matched the technical expertise and attention to detail that Sarve Solutions provided. Our e-commerce platform has never performed better.",
      name: "Michael Chen",
      position: "CTO",
      company: "RetailNova",
      avatar:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=200&auto=format&fit=facearea&facepad=3.0",
    },
    {
      content:
        "The mobile app they built for us has received outstanding feedback from our users. Their approach to UX design and development created an intuitive experience that our customers love.",
      name: "Emily Rodriguez",
      position: "Product Manager",
      company: "HealthTech Solutions",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      sliderRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });

      // Animate buttons on click
      gsap.to(buttonsRef.current.children, {
        scale: 1.1,
        duration: 0.2,
        ease: "power2.out",
        overwrite: true,
        onComplete: () =>
          gsap.to(buttonsRef.current.children, { scale: 1, duration: 0.2 }),
      });
    }
  };

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current.children,
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

    // Cards animation with stagger
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    // Buttons animation
    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 60%",
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
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block bg-brand-teal/10 text-brand-teal text-xs sm:text-sm font-medium py-1 px-3 rounded-full">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 mb-4 sm:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg">
            Don't take our word for it. Hear from the businesses we've helped
            transform with our custom digital solutions.
          </p>
        </div>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-4 sm:pb-6 hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            role="region"
            aria-label="Testimonials slider"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="flex-shrink-0 w-[90%] sm:w-[70%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
              >
                <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-md h-full flex flex-col">
                  <Quote className="h-8 sm:h-10 w-8 sm:w-10 text-brand-purple/20 mb-3 sm:mb-4" />
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 flex-grow">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name}, ${testimonial.position} at ${testimonial.company}`}
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-full mr-3 sm:mr-4 object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            ref={buttonsRef}
            className="flex justify-center mt-6 sm:mt-8 gap-3 sm:gap-4"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              aria-label="Previous testimonial"
              className="w-10 h-10 sm:w-12 sm:h-12"
            >
              <ArrowLeft className="h-4 sm:h-5 w-4 sm:w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              aria-label="Next testimonial"
              className="w-10 h-10 sm:w-12 sm:h-12"
            >
              <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
