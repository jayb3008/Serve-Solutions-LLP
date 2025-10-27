import SplitText from "./SplitText";
import BlurText from "./BlurText";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  className?: string;
}

const HeroSection = ({ title, subtitle, className = "" }: HeroSectionProps) => {
  return (
    <section
      className={`py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SplitText
          text={title}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <div className="flex justify-center w-full">
          <div className="max-w-4xl text-center">
            <BlurText
              text={subtitle}
              delay={150}
              animateBy="words"
              direction="top"
              className="text-lg sm:text-xl md:text-2xl text-blue-100 leading-relaxed"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
