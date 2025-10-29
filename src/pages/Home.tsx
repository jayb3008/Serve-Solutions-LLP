import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Palette,
  Search,
  Globe,
  Users,
  Award,
  Target,
  CheckCircle,
  Shield,
  Clock,
  Building2,
  Heart,
  GraduationCap,
  ShoppingCart,
  Factory,
  CreditCard,
  ChevronDown,
} from "lucide-react";
// import Ballpit from "../components/Ballpit";
import SplitText from "../components/SplitText";
import BlurText from "../components/BlurText";
import Shuffle from "../components/Shuffle";
import ScrollFloat from "../components/ScrollFloat";
import ScrollReveal from "../components/ScrollReveal";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import LogoLoop from "../components/LogoLoop";
import SpotlightCard from "../components/SpotlightCard";
import ReadyToTransformCTA from "../components/ReadyToTransformCTA";
import SwipeButton from "../components/SwipeButton";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
        role="banner"
        aria-label="Hero section"
      >
        {/* Background Effects */}
        <div
          className="absolute inset-0 z-0 hidden lg:block"
          aria-hidden="true"
        >
          {/* <Ballpit
            className="w-full h-full"
            followCursor={false}
            count={100}
            colors={[0x3b82f6, 0x8b5cf6, 0x06b6d4]}
            ambientColor={""}
            ambientIntensity={0.2}
            lightIntensity={80}
            materialParams={{
              metalness: 0.3,
              roughness: 0.4,
              clearcoat: 0.8,
              clearcoatRoughness: 0.2,
            }}
            minSize={0.15}
            maxSize={0.5}
            gravity={0.06}
            friction={0.99}
            wallBounce={0.8}
            maxVelocity={0.06}
            maxX={8}
            maxY={6}
            maxZ={3}
          /> */}
        </div>
        {/* Main Content */}
        <main
          id="main-content"
          className="relative z-30 max-w-7xl mx-auto px-3 max-[393px]:px-2 sm:px-6 lg:px-8 text-center pt-16 max-[393px]:pt-12 sm:pt-20 lg:pt-0"
        >
          <div className="space-y-2 max-[393px]:space-y-3 sm:space-y-4 md:space-y-6">
            {/* Main Heading */}
            <div className="space-y-4">
              {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white drop-shadow-lg">
                Transforming Ideas Into
              </h1> */}
              <SplitText
                text="Transforming Ideas Into Digital Excellence"
                className="text-xl max-[393px]:text-lg min-[430px]:text-2xl min-[480px]:text-3xl min-[820px]:text-4xl lg:text-5xl xl:text-6xl min-[1559px]:text-7xl 2xl:text-8xl font-bold leading-tight text-white drop-shadow-lg px-1 max-[393px]:px-2"
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
              {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                Digital Excellence
              </h1> */}
            </div>

            {/* Company Name */}
            {/* <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-100 tracking-wide drop-shadow-md">
              SarveSolutions
            </h2> */}
            <Shuffle
              text="SarveSolutions"
              className="text-base max-[393px]:text-sm min-[430px]:text-lg min-[480px]:text-xl min-[820px]:text-2xl md:text-3xl lg:text-4xl xl:text-5xl min-[1559px]:text-6xl font-bold text-cyan-100 tracking-wide drop-shadow-md px-1 max-[393px]:px-2"
              maxDelay={100}
              duration={0.6}
              ease="power3.out"
              shuffleDirection="right"
              animationMode="evenodd"
              shuffleTimes={1}
              stagger={0.03}
              scrambleCharset=""
              colorFrom="#3b82f6"
              colorTo="#8b5cf6"
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
            />
            {/* Description */}
            {/* <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed text-slate-100 font-light drop-shadow-md">
              We craft cutting-edge web solutions, mobile apps, and digital
              experiences that engage users and drive business growth.
            </p> */}
            <BlurText
              text="We craft cutting-edge web solutions, mobile apps, and digital experiences that engage users and drive business growth."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center mx-auto max-w-4xl leading-relaxed text-slate-100 font-light drop-shadow-md px-2 max-[393px]:px-3 sm:px-4"
            />
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="mt-6 max-[393px]:mt-4 min-[430px]:mt-8 sm:mt-20 md:mt-24 flex flex-col sm:flex-row gap-2.5 max-[393px]:gap-2 min-[430px]:gap-4 sm:gap-6 justify-center items-center px-2 max-[393px]:px-3 sm:px-4">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 max-[393px]:px-3 min-[430px]:px-5 min-[480px]:px-6 min-[820px]:px-8 md:px-10 py-2 max-[393px]:py-1.5 min-[430px]:py-2.5 min-[480px]:py-3 min-[820px]:py-4 md:py-5 rounded-full text-xs max-[393px]:text-[11px] min-[430px]:text-xs min-[480px]:text-sm min-[820px]:text-base md:text-lg font-semibold flex items-center gap-1.5 max-[393px]:gap-1 min-[430px]:gap-1.5 min-[480px]:gap-2 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/30 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 w-full min-[820px]:w-auto"
              aria-label="Get a free quote for your project"
            >
              Get a Free Quote
              <ArrowRight
                className="h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 min-[480px]:h-4 min-[480px]:w-4 min-[820px]:h-5 min-[820px]:w-5 group-hover:translate-x-1 transition-transform duration-300"
                aria-hidden="true"
              />
            </Link>
            <Link
              to="/portfolio"
              className="group border-2 border-white/90 text-white hover:bg-white hover:text-slate-900 px-4 max-[393px]:px-3 min-[430px]:px-5 min-[480px]:px-6 min-[820px]:px-8 md:px-10 py-2 max-[393px]:py-1.5 min-[430px]:py-2.5 min-[480px]:py-3 min-[820px]:py-4 md:py-5 rounded-full text-xs max-[393px]:text-[11px] min-[430px]:text-xs min-[480px]:text-sm min-[820px]:text-base md:text-lg font-semibold flex items-center gap-1.5 max-[393px]:gap-1 min-[430px]:gap-1.5 min-[480px]:gap-2 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50 w-full min-[820px]:w-auto"
              aria-label="View our portfolio of completed projects"
            >
              View Our Work
              <ArrowRight
                className="h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 min-[480px]:h-4 min-[480px]:w-4 min-[820px]:h-5 min-[820px]:w-5 group-hover:translate-x-1 transition-transform duration-300"
                aria-hidden="true"
              />
            </Link>
          </div>
        </main>

        {/* Scroll Indicator */}
        <SwipeButton
          onClick={() => scrollToSection("services")}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce rounded-full"
          aria-label="Scroll to services section"
          firstClass="rounded-full p-2"
          secondClass="rounded-full p-2 bg-white/10"
          firstContent={
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-white/70 mt-1.5 sm:mt-2" />
            </div>
          }
          secondContent={
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/70 rounded-full flex justify-center">
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-white mt-1.5 sm:mt-2" />
            </div>
          }
        />
      </section>

      {/* Main Service Pillars */}
      <section
        id="services"
        className="py-8 max-[393px]:py-6 min-[430px]:py-10 sm:py-16 md:py-20 lg:py-24 min-[1559px]:py-28 bg-gradient-to-b from-white to-gray-50"
        role="region"
        aria-label="Our services"
      >
        <div className="max-w-7xl mx-auto px-3 max-[393px]:px-2 sm:px-6 lg:px-8">
          <div className="text-center mb-8 max-[393px]:mb-6 sm:mb-12 md:mb-16 lg:mb-20">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-lg max-[393px]:text-base min-[430px]:text-xl min-[480px]:text-2xl min-[820px]:text-3xl md:text-4xl lg:text-5xl min-[1559px]:text-6xl font-bold text-gray-900 mb-3 max-[393px]:mb-2.5 sm:mb-4 md:mb-6"
            >
              Comprehensive Digital Solutions
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              We provide end-to-end digital services that accelerate your
              business growth and drive digital transformation success
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 min-[820px]:grid-cols-2 lg:grid-cols-3 min-[1559px]:grid-cols-3 gap-4 max-[393px]:gap-3 min-[430px]:gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                icon: Code2,
                title: "Web Development",
                description:
                  "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
                features: [
                  "Responsive Design",
                  "SEO Optimized",
                  "Fast Loading",
                  "Scalable Architecture",
                ],
                color: "blue",
                spotlightColor: "rgba(59, 130, 246, 0.3)" as const,
              },
              {
                icon: Smartphone,
                title: "Mobile App Development",
                description:
                  "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
                features: [
                  "Cross-Platform",
                  "Native Performance",
                  "App Store Ready",
                  "Push Notifications",
                ],
                color: "green",
                spotlightColor: "rgba(16, 185, 129, 0.3)" as const,
              },
              {
                icon: Globe,
                title: "Cloud & DevOps",
                description:
                  "Cloud infrastructure setup, deployment automation, and scalable solutions on AWS, Azure, and Google Cloud.",
                features: [
                  "Auto Scaling",
                  "CI/CD Pipeline",
                  "Monitoring",
                  "Security",
                ],
                color: "purple",
                spotlightColor: "rgba(139, 92, 246, 0.3)" as const,
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description:
                  "User-centered design that creates intuitive and engaging digital experiences for your customers.",
                features: [
                  "User Research",
                  "Wireframing",
                  "Prototyping",
                  "Design Systems",
                ],
                color: "pink",
                spotlightColor: "rgba(236, 72, 153, 0.3)" as const,
              },
              {
                icon: Search,
                title: "Digital Marketing",
                description:
                  "SEO, social media marketing, and digital advertising strategies to boost your online presence.",
                features: [
                  "SEO Optimization",
                  "Social Media",
                  "PPC Campaigns",
                  "Analytics",
                ],
                color: "orange",
                spotlightColor: "rgba(245, 158, 11, 0.3)" as const,
              },
              {
                icon: Shield,
                title: "IT Consulting",
                description:
                  "Strategic technology consulting to help you make informed decisions about your digital infrastructure.",
                features: [
                  "Technology Audit",
                  "Strategy Planning",
                  "Security Assessment",
                  "Process Optimization",
                ],
                color: "indigo",
                spotlightColor: "rgba(99, 102, 241, 0.3)" as const,
              },
            ].map((service, index) => (
              <SpotlightCard
                key={index}
                className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-blue-500/20"
                spotlightColor={service.spotlightColor}
              >
                <div className="relative z-10">
                  <div
                    className={`inline-flex p-5 rounded-2xl mb-6 transition-colors duration-300 ${
                      service.color === "blue"
                        ? "bg-blue-100 group-hover:bg-blue-200"
                        : service.color === "green"
                        ? "bg-green-100 group-hover:bg-green-200"
                        : service.color === "purple"
                        ? "bg-purple-100 group-hover:bg-purple-200"
                        : service.color === "pink"
                        ? "bg-pink-100 group-hover:bg-pink-200"
                        : service.color === "orange"
                        ? "bg-orange-100 group-hover:bg-orange-200"
                        : "bg-indigo-100 group-hover:bg-indigo-200"
                    }`}
                  >
                    <service.icon
                      className={`h-4 max-[393px]:h-3.5 w-4 max-[393px]:w-3.5 min-[430px]:h-6 min-[430px]:w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 min-[1559px]:h-9 min-[1559px]:w-9 transition-colors duration-300 ${
                        service.color === "blue"
                          ? "text-blue-600 group-hover:text-blue-700"
                          : service.color === "green"
                          ? "text-green-600 group-hover:text-green-700"
                          : service.color === "purple"
                          ? "text-purple-600 group-hover:text-purple-700"
                          : service.color === "pink"
                          ? "text-pink-600 group-hover:text-pink-700"
                          : service.color === "orange"
                          ? "text-orange-600 group-hover:text-orange-700"
                          : "text-indigo-600 group-hover:text-indigo-700"
                      }`}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl font-semibold text-gray-900 mb-3 max-[393px]:mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-600 mb-4 max-[393px]:mb-3 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8" role="list">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-xs max-[393px]:text-[11px] min-[430px]:text-sm text-gray-600"
                        role="listitem"
                      >
                        <CheckCircle
                          className="h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 text-green-500 mr-1.5 max-[393px]:mr-1 min-[430px]:mr-2 flex-shrink-0"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/services"
                    className={`inline-flex items-center text-xs max-[393px]:text-[11px] min-[430px]:text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      service.color === "blue"
                        ? "text-blue-600 hover:text-blue-700 focus:ring-blue-500"
                        : service.color === "green"
                        ? "text-green-600 hover:text-green-700 focus:ring-green-500"
                        : service.color === "purple"
                        ? "text-purple-600 hover:text-purple-700 focus:ring-purple-500"
                        : service.color === "pink"
                        ? "text-pink-600 hover:text-pink-700 focus:ring-pink-500"
                        : service.color === "orange"
                        ? "text-orange-600 hover:text-orange-700 focus:ring-orange-500"
                        : "text-indigo-600 hover:text-indigo-700 focus:ring-indigo-500"
                    }`}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                    <ArrowRight
                      className="ml-1 max-[393px]:ml-0.5 min-[430px]:ml-1.5 h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        id="why-choose-us"
        className="py-8 max-[393px]:py-6 min-[430px]:py-10 sm:py-16 md:py-20 lg:py-24 min-[1559px]:py-28 bg-background"
        role="region"
        aria-label="Why choose us"
      >
        <div className="max-w-7xl mx-auto px-3 max-[393px]:px-2 sm:px-6 lg:px-8">
          <div className="text-center mb-8 max-[393px]:mb-6 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-3 max-[393px]:px-2 py-1.5 max-[393px]:py-1 rounded-full bg-green-100 text-green-600 dark:bg-white/10 dark:text-green-300 text-xs max-[393px]:text-[10px] sm:text-sm font-medium mb-4 max-[393px]:mb-3 sm:mb-6">
              <span
                className="w-1.5 max-[393px]:w-1 h-1.5 max-[393px]:h-1 bg-green-600 dark:bg-green-400 rounded-full mr-1.5 max-[393px]:mr-1 animate-pulse"
                aria-hidden="true"
              ></span>
              Why Choose Us
            </div>
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-lg max-[393px]:text-base min-[430px]:text-xl min-[480px]:text-2xl min-[820px]:text-3xl md:text-4xl lg:text-5xl min-[1559px]:text-6xl font-bold text-foreground mb-3 max-[393px]:mb-2.5 sm:mb-4 md:mb-6"
            >
              Your Trusted Digital Partner
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-muted-foreground leading-relaxed font-normal"
            >
              We combine technical expertise with business acumen to deliver
              solutions that drive real results and exceed expectations
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 min-[1559px]:grid-cols-4 gap-4 max-[393px]:gap-3 min-[430px]:gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                icon: Target,
                title: "Client-Focused Approach",
                description:
                  "We prioritize your business goals and work closely with you to achieve measurable results.",
                color: "blue",
              },
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Our skilled developers and designers bring years of experience across multiple industries.",
                color: "green",
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description:
                  "Rigorous testing and quality control processes ensure your project meets the highest standards.",
                color: "purple",
              },
              {
                icon: Clock,
                title: "On-Time Delivery",
                description:
                  "We respect deadlines and deliver projects on time, every time, without compromising quality.",
                color: "orange",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                tabIndex={0}
                role="article"
                aria-label={feature.title}
              >
                <div
                  className={`inline-flex p-6 rounded-3xl mb-6 transition-colors duration-300 dark:bg-white/10 dark:group-hover:bg-white/15 ${
                    feature.color === "blue"
                      ? "bg-blue-100 group-hover:bg-blue-200"
                      : feature.color === "green"
                      ? "bg-green-100 group-hover:bg-green-200"
                      : feature.color === "purple"
                      ? "bg-purple-100 group-hover:bg-purple-200"
                      : "bg-orange-100 group-hover:bg-orange-200"
                  }`}
                >
                  <feature.icon
                    className={`h-7 w-7 min-[430px]:h-8 min-[430px]:w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 min-[1559px]:h-12 min-[1559px]:w-12 transition-colors duration-300 ${
                      feature.color === "blue"
                        ? "text-blue-600 group-hover:text-blue-700"
                        : feature.color === "green"
                        ? "text-green-600 group-hover:text-green-700"
                        : feature.color === "purple"
                        ? "text-purple-600 group-hover:text-purple-700"
                        : "text-orange-600 group-hover:text-orange-700"
                    }`}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl font-semibold text-foreground mb-3 max-[393px]:mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm max-[393px]:text-xs min-[430px]:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section
        id="industries"
        className="py-8 max-[393px]:py-6 min-[430px]:py-10 sm:py-16 md:py-20 lg:py-24 min-[1559px]:py-28 bg-white"
        role="region"
        aria-label="Industries we serve"
      >
        <div className="max-w-7xl mx-auto px-3 max-[393px]:px-2 sm:px-6 lg:px-8">
          <div className="text-center mb-8 max-[393px]:mb-6 sm:mb-12 md:mb-16 lg:mb-20">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-lg max-[393px]:text-base min-[430px]:text-xl min-[480px]:text-2xl min-[820px]:text-3xl md:text-4xl lg:text-5xl min-[1559px]:text-6xl font-bold text-gray-900 mb-3 max-[393px]:mb-2.5 sm:mb-4 md:mb-6"
            >
              Industries We Serve
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              We have experience across diverse industries, understanding unique
              challenges and delivering tailored solutions
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 min-[480px]:grid-cols-3 min-[820px]:grid-cols-4 lg:grid-cols-6 min-[1559px]:grid-cols-6 gap-2.5 max-[393px]:gap-2 min-[430px]:gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: Building2, name: "Healthcare", color: "text-red-600" },
              { icon: CreditCard, name: "FinTech", color: "text-green-600" },
              {
                icon: ShoppingCart,
                name: "E-commerce",
                color: "text-blue-600",
              },
              { icon: GraduationCap, name: "EdTech", color: "text-purple-600" },
              {
                icon: Factory,
                name: "Manufacturing",
                color: "text-orange-600",
              },
              { icon: Heart, name: "Non-Profit", color: "text-pink-600" },
            ].map((industry, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                tabIndex={0}
                role="article"
                aria-label={`${industry.name} industry`}
              >
                <div className="inline-flex p-3 min-[430px]:p-4 sm:p-5 md:p-6 rounded-2xl bg-gray-50 mb-2.5 min-[430px]:mb-3 sm:mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                  <industry.icon
                    className={`h-7 w-7 min-[430px]:h-8 min-[430px]:w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 min-[1559px]:h-14 min-[1559px]:w-14 ${industry.color}`}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-[10px] max-[393px]:text-[9px] min-[430px]:text-xs min-[480px]:text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section
        id="case-study"
        className="py-8 max-[393px]:py-6 min-[430px]:py-10 sm:py-16 md:py-20 lg:py-24 min-[1559px]:py-28 bg-gray-900"
        role="region"
        aria-label="Featured case study"
      >
        <div className="max-w-7xl mx-auto px-3 max-[393px]:px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 min-[820px]:grid-cols-2 min-[1559px]:grid-cols-2 gap-6 min-[430px]:gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
            <div>
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
                containerClassName="text-lg max-[393px]:text-base min-[430px]:text-xl min-[480px]:text-2xl min-[820px]:text-3xl md:text-4xl lg:text-5xl min-[1559px]:text-6xl font-bold text-white mb-3 max-[393px]:mb-2.5 sm:mb-4 md:mb-6"
              >
                Featured Case Study
              </ScrollFloat>
              <ScrollReveal
                baseOpacity={0.2}
                enableBlur={true}
                baseRotation={2}
                blurStrength={8}
                containerClassName="mb-4 sm:mb-6"
                textClassName="text-sm max-[393px]:text-xs min-[430px]:text-base min-[480px]:text-lg min-[820px]:text-xl md:text-2xl min-[1559px]:text-3xl font-semibold text-blue-400"
              >
                E-commerce Platform Transformation
              </ScrollReveal>
              <ScrollReveal
                baseOpacity={0.2}
                enableBlur={true}
                baseRotation={2}
                blurStrength={8}
                containerClassName="mb-8"
                textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-300 leading-relaxed font-normal"
              >
                We helped a leading retail company increase their online sales
                by 300% through a complete digital transformation.
              </ScrollReveal>

              <div
                className="grid grid-cols-2 gap-3 min-[430px]:gap-4 sm:gap-6 mb-6 min-[430px]:mb-8 sm:mb-10"
                role="region"
                aria-label="Project results"
              >
                <div>
                  <div className="text-lg min-[430px]:text-xl sm:text-2xl md:text-3xl min-[1559px]:text-4xl font-bold text-white mb-1 sm:mb-1.5 md:mb-2">
                    300%
                  </div>
                  <div className="text-gray-400 text-[10px] min-[430px]:text-xs sm:text-sm md:text-base">
                    Increase in Sales
                  </div>
                </div>
                <div>
                  <div className="text-lg min-[430px]:text-xl sm:text-2xl md:text-3xl min-[1559px]:text-4xl font-bold text-white mb-1 sm:mb-1.5 md:mb-2">
                    50%
                  </div>
                  <div className="text-gray-400 text-[10px] min-[430px]:text-xs sm:text-sm md:text-base">
                    Faster Load Time
                  </div>
                </div>
                <div>
                  <div className="text-lg min-[430px]:text-xl sm:text-2xl md:text-3xl min-[1559px]:text-4xl font-bold text-white mb-1 sm:mb-1.5 md:mb-2">
                    95%
                  </div>
                  <div className="text-gray-400 text-[10px] min-[430px]:text-xs sm:text-sm md:text-base">
                    User Satisfaction
                  </div>
                </div>
                <div>
                  <div className="text-lg min-[430px]:text-xl sm:text-2xl md:text-3xl min-[1559px]:text-4xl font-bold text-white mb-1 sm:mb-1.5 md:mb-2">
                    6
                  </div>
                  <div className="text-gray-400 text-[10px] min-[430px]:text-xs sm:text-sm md:text-base">
                    Months Timeline
                  </div>
                </div>
              </div>

              <Link
                to="/portfolio"
                className="inline-flex items-center bg-blue-600 text-white px-3 max-[393px]:px-2.5 min-[430px]:px-4 min-[480px]:px-5 min-[820px]:px-6 py-1.5 max-[393px]:py-1 min-[430px]:py-2 min-[480px]:py-2.5 min-[820px]:py-3 rounded-full text-xs max-[393px]:text-[11px] min-[430px]:text-xs min-[480px]:text-sm min-[820px]:text-base font-semibold hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 w-full min-[820px]:w-auto justify-center"
                aria-label="View full case study details"
              >
                View Full Case Study
                <ArrowRight
                  className="ml-1 max-[393px]:ml-0.5 min-[430px]:ml-1.5 min-[480px]:ml-2 h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 min-[480px]:h-4 min-[480px]:w-4 min-[820px]:h-5 min-[820px]:w-5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <div className="bg-gray-800 rounded-2xl p-4 min-[430px]:p-6 sm:p-8 min-[1559px]:p-10">
              <div className="bg-gray-700 rounded-lg p-3 min-[430px]:p-4 sm:p-6 mb-3 min-[430px]:mb-4 sm:mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Tech Stack Used
                </h4>
                <div
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label="Technologies used"
                >
                  {[
                    "React",
                    "Node.js",
                    "MongoDB",
                    "AWS",
                    "Stripe",
                    "Redis",
                  ].map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-600 text-white px-1.5 min-[430px]:px-2 sm:px-3 py-0.5 min-[430px]:py-1 rounded-full text-xs max-[393px]:text-[10px] min-[430px]:text-xs sm:text-sm"
                      role="listitem"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg p-3 min-[430px]:p-4 sm:p-6">
                <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg min-[1559px]:text-xl font-semibold text-white mb-2 max-[393px]:mb-1.5 min-[430px]:mb-2.5 min-[480px]:mb-3 sm:mb-4">
                  Key Features
                </h4>
                <ul className="space-y-3" role="list">
                  {[
                    "Responsive Design",
                    "Payment Integration",
                    "Inventory Management",
                    "Analytics Dashboard",
                    "Mobile App",
                  ].map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-xs max-[393px]:text-[11px] min-[430px]:text-sm text-gray-300"
                      role="listitem"
                    >
                      <CheckCircle
                        className="h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 text-green-500 mr-1.5 max-[393px]:mr-1 min-[430px]:mr-2 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section
        id="testimonials"
        className="py-8 max-[393px]:py-6 min-[430px]:py-10 sm:py-16 md:py-20 lg:py-24 min-[1559px]:py-28 bg-gradient-to-b from-white to-gray-50"
        role="region"
        aria-label="Client testimonials"
      >
        <div className="max-w-7xl mx-auto px-3 max-[393px]:px-2 sm:px-6 lg:px-8">
          <div className="text-center mb-8 max-[393px]:mb-6 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-3 max-[393px]:px-2 py-1.5 max-[393px]:py-1 rounded-full bg-purple-100 text-purple-600 text-xs max-[393px]:text-[10px] sm:text-sm font-medium mb-4 max-[393px]:mb-3 sm:mb-6">
              <span
                className="w-1.5 max-[393px]:w-1 h-1.5 max-[393px]:h-1 bg-purple-600 rounded-full mr-1.5 max-[393px]:mr-1 animate-pulse"
                aria-hidden="true"
              ></span>
              Client Testimonials
            </div>
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-lg max-[393px]:text-base min-[430px]:text-xl min-[480px]:text-2xl min-[820px]:text-3xl md:text-4xl lg:text-5xl min-[1559px]:text-6xl font-bold text-gray-900 mb-3 max-[393px]:mb-2.5 sm:mb-4 md:mb-6"
            >
              What Our Clients Say
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Don't just take our word for it - hear from some of our satisfied
              clients who have transformed their businesses with us
            </ScrollReveal>
          </div>

          <InfiniteMovingCards
            items={[
              {
                quote:
                  "SarveSolutions transformed our online presence completely. Their attention to detail and professional approach exceeded our expectations.",
                name: "Sarah Johnson",
                title: "CEO, TechStart Inc.",
              },
              {
                quote:
                  "The mobile app they built for us increased customer engagement by 200%. The user experience is incredible and our customers love it.",
                name: "Michael Chen",
                title: "CTO, RetailCorp",
              },
              {
                quote:
                  "Working with SarveSolutions was a game-changer. They delivered our project on time and within budget, exceeding all our requirements.",
                name: "Emily Rodriguez",
                title: "Marketing Director, HealthTech",
              },
              {
                quote:
                  "Their cloud infrastructure solutions helped us scale our business 10x faster. The team's expertise in AWS and DevOps is outstanding.",
                name: "David Kim",
                title: "Founder, CloudScale",
              },
              {
                quote:
                  "The UI/UX design they created for our platform increased user retention by 150%. Simply amazing work!",
                name: "Lisa Wang",
                title: "Product Manager, DesignFlow",
              },
              {
                quote:
                  "SarveSolutions helped us modernize our legacy systems. The digital transformation was seamless and exceeded all expectations.",
                name: "Robert Taylor",
                title: "CTO, LegacyCorp",
              },
            ]}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="max-w-7xl mx-auto"
          />
        </div>
      </section>

      {/* Client Logos */}
      <section
        className="py-5 max-[393px]:py-4 min-[430px]:py-6 sm:py-12 md:py-16 min-[1559px]:py-20 bg-gray-50"
        role="region"
        aria-label="Client logos"
      >
        <div className="max-w-7xl mx-auto px-3 max-[393px]:px-2 sm:px-6 lg:px-8">
          <div className="text-center mb-8 max-[393px]:mb-6 sm:mb-12">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-lg max-[393px]:text-base sm:text-xl md:text-2xl min-[1559px]:text-3xl font-semibold text-gray-600 mb-4"
            >
              Trusted by Leading Companies
            </ScrollFloat>
          </div>
          <LogoLoop
            logos={[
              {
                node: (
                  <div className="bg-gray-200 rounded-lg p-4 h-16 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300">
                    <span className="text-gray-600 font-semibold text-lg">
                      TechCorp
                    </span>
                  </div>
                ),
                title: "TechCorp",
                ariaLabel: "TechCorp logo",
              },
              {
                node: (
                  <div className="bg-gray-200 rounded-lg p-4 h-16 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300">
                    <span className="text-gray-600 font-semibold text-lg">
                      InnovateLab
                    </span>
                  </div>
                ),
                title: "InnovateLab",
                ariaLabel: "InnovateLab logo",
              },
              {
                node: (
                  <div className="bg-gray-200 rounded-lg p-4 h-16 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300">
                    <span className="text-gray-600 font-semibold text-lg">
                      DigitalFirst
                    </span>
                  </div>
                ),
                title: "DigitalFirst",
                ariaLabel: "DigitalFirst logo",
              },
              {
                node: (
                  <div className="bg-gray-200 rounded-lg p-4 h-16 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300">
                    <span className="text-gray-600 font-semibold text-lg">
                      CloudTech
                    </span>
                  </div>
                ),
                title: "CloudTech",
                ariaLabel: "CloudTech logo",
              },
              {
                node: (
                  <div className="bg-gray-200 rounded-lg p-4 h-16 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300">
                    <span className="text-gray-600 font-semibold text-lg">
                      NextGen
                    </span>
                  </div>
                ),
                title: "NextGen",
                ariaLabel: "NextGen logo",
              },
              {
                node: (
                  <div className="bg-gray-200 rounded-lg p-4 h-16 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300">
                    <span className="text-gray-600 font-semibold text-lg">
                      FutureSoft
                    </span>
                  </div>
                ),
                title: "FutureSoft",
                ariaLabel: "FutureSoft logo",
              },
              {
                node: (
                  <div className="bg-gray-200 rounded-lg p-4 h-16 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300">
                    <span className="text-gray-600 font-semibold text-lg">
                      DataFlow
                    </span>
                  </div>
                ),
                title: "DataFlow",
                ariaLabel: "DataFlow logo",
              },
              {
                node: (
                  <div className="bg-gray-200 rounded-lg p-4 h-16 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300">
                    <span className="text-gray-600 font-semibold text-lg">
                      WebCraft
                    </span>
                  </div>
                ),
                title: "WebCraft",
                ariaLabel: "WebCraft logo",
              },
            ]}
            speed={80}
            direction="left"
            logoHeight={64}
            gap={32}
            pauseOnHover={true}
            fadeOut={true}
            scaleOnHover={true}
            ariaLabel="Trusted client companies"
            className="opacity-60"
          />
        </div>
      </section>

      {/* Secondary CTA */}
      <ReadyToTransformCTA />
    </div>
  );
};

export default Home;
