import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollFloat from "./ScrollFloat";
import ScrollReveal from "./ScrollReveal";

const ReadyToTransformCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with CSS Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "120%",
          top: "-10%",
        }}
      />

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          containerClassName="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
        >
          Ready to Transform Your Business?
        </ScrollFloat>
        <ScrollReveal
          baseOpacity={0.2}
          enableBlur={true}
          baseRotation={2}
          blurStrength={8}
          containerClassName="mb-8 max-w-2xl mx-auto"
          textClassName="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-normal drop-shadow-md"
        >
          Let's discuss your project requirements and create a solution that
          drives your business forward.
        </ScrollReveal>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            to="/contact"
            className="group inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            to="/portfolio"
            className="group inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:shadow-xl"
          >
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReadyToTransformCTA;
