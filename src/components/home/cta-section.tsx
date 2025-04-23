import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Phone } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Content animation (heading, paragraph)
    gsap.fromTo(
      contentRef.current.children,
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

    // Buttons animation
    gsap.fromTo(
      buttonsRef.current.children,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    // Button hover and click animations
    const buttons = buttonsRef.current.children;
    Array.from(buttons).forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });
      button.addEventListener("mouseleave", () => {
        gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
      button.addEventListener("click", () => {
        gsap.to(button, {
          scale: 0.95,
          duration: 0.1,
          ease: "power2.in",
          overwrite: true,
          onComplete: () => gsap.to(button, { scale: 1, duration: 0.2 }),
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      Array.from(buttons).forEach((button) => {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
        button.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-darkBlue to-brand-purple z-0"></div>
      <div className="absolute inset-0 opacity-10 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yNCAyNGMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00LTEuNzktNC00LTQtNCAxLjc5LTQgNHpNMjQgNDRjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNC0xLjc5LTQtNC00LTQgMS43OS00IDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={contentRef}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 lg:mb-10">
            Let's discuss how we can help you achieve your business goals with
            custom technology solutions.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-brand-darkBlue hover:bg-white/10 hover:text-white rounded-full"
            >
              <Link to="/contact" aria-label="Schedule a consultation">
                <MessageSquare className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />{" "}
                Schedule a Consultation
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-brand-darkBlue hover:bg-white/10 hover:text-white rounded-full"
            >
              <Link to="tel:+9904055986" aria-label="Call us">
                <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5" /> Call Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
