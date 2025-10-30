import Link from "next/link";
import {
  Code2,
  Smartphone,
  Palette,
  Shield,
  CheckCircle,
  ArrowRight,
  Zap,
  Cloud,
  Layers,
  BarChart3,
  Users,
  Settings,
  Target,
  Clock,
  Award,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import ScrollFloat from "../components/ScrollFloat";
import ScrollReveal from "../components/ScrollReveal";
import SpotlightCard from "../components/SpotlightCard";
import ReadyToTransformCTA from "../components/ReadyToTransformCTA";

const Services = () => {
  return (
    <div className="pt-20">
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive digital solutions to accelerate your business growth and digital transformation"
      />

      {/* Main Services Grid */}
      <section className="py-8 max-[393px]:py-6 min-[430px]:py-10 sm:py-16 md:py-20 lg:py-24 min-[1559px]:py-28 bg-white">
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
              What We Do
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              From concept to deployment, we provide end-to-end technology
              solutions
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 min-[820px]:grid-cols-2 lg:grid-cols-3 min-[1559px]:grid-cols-3 gap-4 max-[393px]:gap-3 min-[430px]:gap-6 sm:gap-8">
            {/* Web Development */}
            <SpotlightCard
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-blue-500/20"
              spotlightColor="rgba(59, 130, 246, 0.3)"
            >
              <div className="relative z-10 p-4 max-[393px]:p-3 sm:p-6">
                <div className="inline-flex p-4 max-[393px]:p-3 sm:p-5 rounded-2xl mb-4 max-[393px]:mb-3 sm:mb-6 transition-colors duration-300 bg-blue-100 group-hover:bg-blue-200">
                  <Code2 className="h-6 w-6 max-[393px]:h-5 max-[393px]:w-5 sm:h-8 sm:w-8 transition-colors duration-300 text-blue-600 group-hover:text-blue-700" />
                </div>
                <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl font-semibold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                  Web Development
                </h3>
                <p className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-600 mb-4 max-[393px]:mb-3 sm:mb-6 leading-relaxed">
                  Custom websites and web applications built with modern
                  technologies like React, Next.js, and Node.js for optimal
                  performance and scalability.
                </p>

                <div className="mb-4 max-[393px]:mb-3 sm:mb-6">
                  <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                    Technologies We Use:
                  </h4>
                  <div className="flex flex-wrap gap-1.5 max-[393px]:gap-1 min-[430px]:gap-2">
                    {[
                      "React",
                      "Next.js",
                      "Node.js",
                      "TypeScript",
                      "MongoDB",
                      "PostgreSQL",
                    ].map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 px-2 max-[393px]:px-1.5 min-[430px]:px-3 py-0.5 max-[393px]:py-0 min-[430px]:py-1 rounded-full text-xs max-[393px]:text-[10px] min-[430px]:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 max-[393px]:mb-3 sm:mb-6">
                  <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                    What You Get:
                  </h4>
                  <ul
                    className="space-y-2 max-[393px]:space-y-1.5 sm:space-y-3"
                    role="list"
                  >
                    {[
                      "Responsive Design",
                      "SEO Optimized",
                      "Fast Loading",
                      "Scalable Architecture",
                      "Security Features",
                    ].map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-xs max-[393px]:text-[10px] min-[430px]:text-sm text-gray-600"
                        role="listitem"
                      >
                        <CheckCircle className="h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 text-green-500 mr-1.5 max-[393px]:mr-1 min-[430px]:mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs max-[393px]:text-[10px] min-[430px]:text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-blue-600 hover:text-blue-700 focus:ring-blue-500"
                  aria-label="Learn more about Web Development"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-1 max-[393px]:ml-0.5 min-[430px]:ml-1.5 h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </SpotlightCard>

            {/* Mobile App Development */}
            <SpotlightCard
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-purple-500/20"
              spotlightColor="rgba(139, 92, 246, 0.3)"
            >
              <div className="relative z-10 p-4 max-[393px]:p-3 sm:p-6">
                <div className="inline-flex p-4 max-[393px]:p-3 sm:p-5 rounded-2xl mb-4 max-[393px]:mb-3 sm:mb-6 transition-colors duration-300 bg-purple-100 group-hover:bg-purple-200">
                  <Smartphone className="h-6 w-6 max-[393px]:h-5 max-[393px]:w-5 sm:h-8 sm:w-8 transition-colors duration-300 text-purple-600 group-hover:text-purple-700" />
                </div>
                <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl font-semibold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                  Mobile App Development
                </h3>
                <p className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-600 mb-4 max-[393px]:mb-3 sm:mb-6 leading-relaxed">
                  Native and cross-platform mobile applications for iOS and
                  Android using React Native and Flutter for maximum reach and
                  performance.
                </p>

                <div className="mb-4 max-[393px]:mb-3 sm:mb-6">
                  <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                    Technologies We Use:
                  </h4>
                  <div className="flex flex-wrap gap-1.5 max-[393px]:gap-1 min-[430px]:gap-2">
                    {[
                      "React Native",
                      "Flutter",
                      "Swift",
                      "Kotlin",
                      "Firebase",
                      "App Store",
                    ].map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-100 text-purple-800 px-2 max-[393px]:px-1.5 min-[430px]:px-3 py-0.5 max-[393px]:py-0 min-[430px]:py-1 rounded-full text-xs max-[393px]:text-[10px] min-[430px]:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 max-[393px]:mb-3 sm:mb-6">
                  <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                    What You Get:
                  </h4>
                  <ul
                    className="space-y-2 max-[393px]:space-y-1.5 sm:space-y-3"
                    role="list"
                  >
                    {[
                      "Cross-Platform",
                      "Native Performance",
                      "App Store Ready",
                      "Push Notifications",
                      "Offline Support",
                    ].map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-xs max-[393px]:text-[10px] min-[430px]:text-sm text-gray-600"
                        role="listitem"
                      >
                        <CheckCircle className="h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 text-green-500 mr-1.5 max-[393px]:mr-1 min-[430px]:mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs max-[393px]:text-[10px] min-[430px]:text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-purple-600 hover:text-purple-700 focus:ring-purple-500"
                  aria-label="Learn more about Mobile App Development"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-1 max-[393px]:ml-0.5 min-[430px]:ml-1.5 h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </SpotlightCard>

            {/* Cloud & DevOps */}
            <SpotlightCard
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-green-500/20"
              spotlightColor="rgba(16, 185, 129, 0.3)"
            >
              <div className="relative z-10 p-4 max-[393px]:p-3 sm:p-6">
                <div className="inline-flex p-4 max-[393px]:p-3 sm:p-5 rounded-2xl mb-4 max-[393px]:mb-3 sm:mb-6 transition-colors duration-300 bg-green-100 group-hover:bg-green-200">
                  <Cloud className="h-6 w-6 max-[393px]:h-5 max-[393px]:w-5 sm:h-8 sm:w-8 transition-colors duration-300 text-green-600 group-hover:text-green-700" />
                </div>
                <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl font-semibold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                  Cloud & DevOps
                </h3>
                <p className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-600 mb-4 max-[393px]:mb-3 sm:mb-6 leading-relaxed">
                  Cloud infrastructure setup, deployment automation, and
                  scalable solutions on AWS, Azure, and Google Cloud Platform.
                </p>

                <div className="mb-4 max-[393px]:mb-3 sm:mb-6">
                  <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                    Technologies We Use:
                  </h4>
                  <div className="flex flex-wrap gap-1.5 max-[393px]:gap-1 min-[430px]:gap-2">
                    {[
                      "AWS",
                      "Azure",
                      "Google Cloud",
                      "Docker",
                      "Kubernetes",
                      "Terraform",
                    ].map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-green-100 text-green-800 px-2 max-[393px]:px-1.5 min-[430px]:px-3 py-0.5 max-[393px]:py-0 min-[430px]:py-1 rounded-full text-xs max-[393px]:text-[10px] min-[430px]:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 max-[393px]:mb-3 sm:mb-6">
                  <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                    What You Get:
                  </h4>
                  <ul
                    className="space-y-2 max-[393px]:space-y-1.5 sm:space-y-3"
                    role="list"
                  >
                    {[
                      "Auto Scaling",
                      "CI/CD Pipeline",
                      "Monitoring",
                      "Security",
                      "Cost Optimization",
                    ].map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-xs max-[393px]:text-[10px] min-[430px]:text-sm text-gray-600"
                        role="listitem"
                      >
                        <CheckCircle className="h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 text-green-500 mr-1.5 max-[393px]:mr-1 min-[430px]:mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs max-[393px]:text-[10px] min-[430px]:text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-green-600 hover:text-green-700 focus:ring-green-500"
                  aria-label="Learn more about Cloud & DevOps"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-1 max-[393px]:ml-0.5 min-[430px]:ml-1.5 h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </SpotlightCard>

            {/* UI/UX Design */}
            <SpotlightCard
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-pink-500/20"
              spotlightColor="rgba(236, 72, 153, 0.3)"
            >
              <div className="relative z-10 p-4 max-[393px]:p-3 sm:p-6">
                <div className="inline-flex p-4 max-[393px]:p-3 sm:p-5 rounded-2xl mb-4 max-[393px]:mb-3 sm:mb-6 transition-colors duration-300 bg-pink-100 group-hover:bg-pink-200">
                  <Palette className="h-6 w-6 max-[393px]:h-5 max-[393px]:w-5 sm:h-8 sm:w-8 transition-colors duration-300 text-pink-600 group-hover:text-pink-700" />
                </div>
                <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl font-semibold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                  UI/UX Design
                </h3>
                <p className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-600 mb-4 max-[393px]:mb-3 sm:mb-6 leading-relaxed">
                  User-centered design that creates intuitive and engaging
                  digital experiences for your customers across all platforms.
                </p>

                <div className="mb-4 max-[393px]:mb-3 sm:mb-6">
                  <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                    Our Process:
                  </h4>
                  <div className="flex flex-wrap gap-1.5 max-[393px]:gap-1 min-[430px]:gap-2">
                    {[
                      "User Research",
                      "Wireframing",
                      "Prototyping",
                      "Design Systems",
                      "Usability Testing",
                    ].map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-pink-100 text-pink-800 px-2 max-[393px]:px-1.5 min-[430px]:px-3 py-0.5 max-[393px]:py-0 min-[430px]:py-1 rounded-full text-xs max-[393px]:text-[10px] min-[430px]:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 max-[393px]:mb-3 sm:mb-6">
                  <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                    What You Get:
                  </h4>
                  <ul
                    className="space-y-2 max-[393px]:space-y-1.5 sm:space-y-3"
                    role="list"
                  >
                    {[
                      "User Research",
                      "Wireframing",
                      "Prototyping",
                      "Design Systems",
                      "Usability Testing",
                    ].map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-xs max-[393px]:text-[10px] min-[430px]:text-sm text-gray-600"
                        role="listitem"
                      >
                        <CheckCircle className="h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 text-green-500 mr-1.5 max-[393px]:mr-1 min-[430px]:mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs max-[393px]:text-[10px] min-[430px]:text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-pink-600 hover:text-pink-700 focus:ring-pink-500"
                  aria-label="Learn more about UI/UX Design"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-1 max-[393px]:ml-0.5 min-[430px]:ml-1.5 h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </SpotlightCard>

            {/* Digital Marketing */}
            <SpotlightCard
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-orange-500/20"
              spotlightColor="rgba(245, 158, 11, 0.3)"
            >
              <div className="relative z-10 p-4 max-[393px]:p-3 sm:p-6">
                <div className="inline-flex p-4 max-[393px]:p-3 sm:p-5 rounded-2xl mb-4 max-[393px]:mb-3 sm:mb-6 transition-colors duration-300 bg-orange-100 group-hover:bg-orange-200">
                  <BarChart3 className="h-6 w-6 max-[393px]:h-5 max-[393px]:w-5 sm:h-8 sm:w-8 transition-colors duration-300 text-orange-600 group-hover:text-orange-700" />
                </div>
                <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl font-semibold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                  Digital Marketing
                </h3>
                <p className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-600 mb-4 max-[393px]:mb-3 sm:mb-6 leading-relaxed">
                  SEO, social media marketing, and digital advertising
                  strategies to boost your online presence and drive qualified
                  leads.
                </p>

                <div className="mb-4 max-[393px]:mb-3 sm:mb-6">
                  <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                    Services Include:
                  </h4>
                  <div className="flex flex-wrap gap-1.5 max-[393px]:gap-1 min-[430px]:gap-2">
                    {[
                      "SEO",
                      "Social Media",
                      "PPC Campaigns",
                      "Content Marketing",
                      "Analytics",
                      "Email Marketing",
                    ].map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-100 text-orange-800 px-2 max-[393px]:px-1.5 min-[430px]:px-3 py-0.5 max-[393px]:py-0 min-[430px]:py-1 rounded-full text-xs max-[393px]:text-[10px] min-[430px]:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 max-[393px]:mb-3 sm:mb-6">
                  <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                    What You Get:
                  </h4>
                  <ul
                    className="space-y-2 max-[393px]:space-y-1.5 sm:space-y-3"
                    role="list"
                  >
                    {[
                      "SEO Optimization",
                      "Social Media Strategy",
                      "PPC Management",
                      "Content Creation",
                      "Performance Analytics",
                    ].map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-xs max-[393px]:text-[10px] min-[430px]:text-sm text-gray-600"
                        role="listitem"
                      >
                        <CheckCircle className="h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 text-green-500 mr-1.5 max-[393px]:mr-1 min-[430px]:mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs max-[393px]:text-[10px] min-[430px]:text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-orange-600 hover:text-orange-700 focus:ring-orange-500"
                  aria-label="Learn more about Digital Marketing"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-1 max-[393px]:ml-0.5 min-[430px]:ml-1.5 h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </SpotlightCard>

            {/* IT Consulting */}
            <SpotlightCard
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-indigo-500/20"
              spotlightColor="rgba(99, 102, 241, 0.3)"
            >
              <div className="relative z-10 p-4 max-[393px]:p-3 sm:p-6">
                <div className="inline-flex p-4 max-[393px]:p-3 sm:p-5 rounded-2xl mb-4 max-[393px]:mb-3 sm:mb-6 transition-colors duration-300 bg-indigo-100 group-hover:bg-indigo-200">
                  <Shield className="h-6 w-6 max-[393px]:h-5 max-[393px]:w-5 sm:h-8 sm:w-8 transition-colors duration-300 text-indigo-600 group-hover:text-indigo-700" />
                </div>
                <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl font-semibold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                  IT Consulting
                </h3>
                <p className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-600 mb-4 max-[393px]:mb-3 sm:mb-6 leading-relaxed">
                  Strategic technology consulting to help you make informed
                  decisions about your digital infrastructure and digital
                  transformation.
                </p>

                <div className="mb-4 max-[393px]:mb-3 sm:mb-6">
                  <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                    Our Expertise:
                  </h4>
                  <div className="flex flex-wrap gap-1.5 max-[393px]:gap-1 min-[430px]:gap-2">
                    {[
                      "Technology Audit",
                      "Strategy Planning",
                      "Security Assessment",
                      "Process Optimization",
                      "Digital Transformation",
                    ].map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-indigo-100 text-indigo-800 px-2 max-[393px]:px-1.5 min-[430px]:px-3 py-0.5 max-[393px]:py-0 min-[430px]:py-1 rounded-full text-xs max-[393px]:text-[10px] min-[430px]:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 max-[393px]:mb-3 sm:mb-6">
                  <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                    What You Get:
                  </h4>
                  <ul
                    className="space-y-2 max-[393px]:space-y-1.5 sm:space-y-3"
                    role="list"
                  >
                    {[
                      "Technology Audit",
                      "Strategy Planning",
                      "Security Assessment",
                      "Process Optimization",
                      "Implementation Support",
                    ].map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-xs max-[393px]:text-[10px] min-[430px]:text-sm text-gray-600"
                        role="listitem"
                      >
                        <CheckCircle className="h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 text-green-500 mr-1.5 max-[393px]:mr-1 min-[430px]:mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs max-[393px]:text-[10px] min-[430px]:text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-indigo-600 hover:text-indigo-700 focus:ring-indigo-500"
                  aria-label="Learn more about IT Consulting"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-1 max-[393px]:ml-0.5 min-[430px]:ml-1.5 h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-8 max-[393px]:py-6 min-[430px]:py-10 sm:py-16 md:py-20 lg:py-24 min-[1559px]:py-28 bg-gray-50">
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
              How We Deliver Excellence
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Our proven methodology ensures successful project delivery and
              client satisfaction
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 min-[1559px]:grid-cols-4 gap-6 max-[393px]:gap-4 min-[430px]:gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description:
                  "We start by understanding your business goals, challenges, and requirements through detailed consultation.",
                icon: Target,
              },
              {
                step: "02",
                title: "Design & Architecture",
                description:
                  "Our team develops a comprehensive strategy and technical roadmap tailored to your specific needs.",
                icon: Layers,
              },
              {
                step: "03",
                title: "Development & Testing",
                description:
                  "We build your solution using agile methodologies, with regular updates and milestone reviews.",
                icon: Code2,
              },
              {
                step: "04",
                title: "Deployment & Support",
                description:
                  "We deploy your solution and provide ongoing support to ensure continued success and growth.",
                icon: Zap,
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 max-[393px]:mb-3 sm:mb-6">
                  <div className="w-12 h-12 max-[393px]:w-10 max-[393px]:h-10 sm:w-16 sm:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-base max-[393px]:text-sm sm:text-xl font-bold">
                    {process.step}
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 max-[393px]:w-5 max-[393px]:h-5 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <process.icon className="h-3 w-3 max-[393px]:h-2.5 max-[393px]:w-2.5 sm:h-4 sm:w-4 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl font-semibold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                  {process.title}
                </h3>
                <p className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-8 max-[393px]:py-6 min-[430px]:py-10 sm:py-16 md:py-20 lg:py-24 min-[1559px]:py-28 bg-white">
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
              Why Choose Our Services?
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              We combine technical expertise with business acumen to deliver
              solutions that drive real results
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 min-[1559px]:grid-cols-3 gap-4 max-[393px]:gap-3 min-[430px]:gap-6 sm:gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Our skilled developers and designers bring years of experience across multiple industries and technologies.",
              },
              {
                icon: Clock,
                title: "On-Time Delivery",
                description:
                  "We respect deadlines and deliver projects on time, every time, without compromising quality.",
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description:
                  "Rigorous testing and quality control processes ensure your project meets the highest standards.",
              },
              {
                icon: Shield,
                title: "Security First",
                description:
                  "We implement industry best practices and security measures to protect your data and applications.",
              },
              {
                icon: Zap,
                title: "Scalable Solutions",
                description:
                  "Our solutions are built to grow with your business, handling increased load and user base seamlessly.",
              },
              {
                icon: Settings,
                title: "Ongoing Support",
                description:
                  "We provide comprehensive support and maintenance to ensure your solution continues to perform optimally.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-5 max-[393px]:p-4 sm:p-6 bg-gray-50 rounded-2xl"
              >
                <div className="inline-flex p-3 max-[393px]:p-2.5 sm:p-4 rounded-full bg-blue-100 mb-4 max-[393px]:mb-3 sm:mb-6">
                  <feature.icon className="h-6 w-6 max-[393px]:h-5 max-[393px]:w-5 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl font-semibold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}

      {/* CTA Section */}
      <ReadyToTransformCTA />
    </div>
  );
};

export default Services;
