import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Target,
  Zap,
  Shield,
  Award,
  Code2,
  Palette,
  Settings,
  DollarSign,
  FileText,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import ScrollFloat from "../components/ScrollFloat";
import ScrollReveal from "../components/ScrollReveal";
import ReadyToTransformCTA from "../components/ReadyToTransformCTA";

const Process = () => {
  return (
    <div className="pt-20">
      <HeroSection
        title="Our Process"
        subtitle="A proven methodology that ensures successful project delivery and client satisfaction"
      />

      {/* Process Overview */}
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
              How We Work
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Our systematic approach ensures every project is delivered on
              time, within budget, and exceeds expectations
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 min-[1559px]:grid-cols-4 gap-4 max-[393px]:gap-3 min-[430px]:gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description:
                  "We start by understanding your business goals, challenges, and requirements through detailed consultation and analysis.",
                icon: Target,
                duration: "1-2 weeks",
                deliverables: [
                  "Project Scope",
                  "Technical Requirements",
                  "Timeline",
                  "Budget Estimate",
                ],
              },
              {
                step: "02",
                title: "Design & Architecture",
                description:
                  "Our team develops a comprehensive strategy, technical architecture, and design system tailored to your specific needs.",
                icon: Palette,
                duration: "2-3 weeks",
                deliverables: [
                  "UI/UX Design",
                  "Technical Architecture",
                  "Database Design",
                  "API Specifications",
                ],
              },
              {
                step: "03",
                title: "Development & Testing",
                description:
                  "We build your solution using agile methodologies, with regular updates, milestone reviews, and comprehensive testing.",
                icon: Code2,
                duration: "4-12 weeks",
                deliverables: [
                  "MVP Development",
                  "Quality Assurance",
                  "Performance Testing",
                  "Security Audits",
                ],
              },
              {
                step: "04",
                title: "Deployment & Support",
                description:
                  "We deploy your solution and provide ongoing support, maintenance, and optimization to ensure continued success.",
                icon: Zap,
                duration: "Ongoing",
                deliverables: [
                  "Production Deployment",
                  "Training",
                  "Documentation",
                  "Support & Maintenance",
                ],
              },
            ].map((process, index) => (
              <div
                key={index}
                className="text-center group bg-white p-6 max-[393px]:p-4 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative mb-4 max-[393px]:mb-3 sm:mb-6">
                  <div className="w-16 h-16 max-[393px]:w-12 max-[393px]:h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mx-auto text-xl max-[393px]:text-lg sm:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 max-[393px]:w-6 max-[393px]:h-6 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-blue-200 transition-colors duration-300">
                    <process.icon className="h-4 w-4 max-[393px]:h-3 max-[393px]:w-3 sm:h-5 sm:w-5 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl font-bold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                  {process.title}
                </h3>
                <p className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-600 mb-4 max-[393px]:mb-3 sm:mb-6 leading-relaxed">
                  {process.description}
                </p>
                <div className="text-sm max-[393px]:text-xs min-[430px]:text-base text-blue-600 font-semibold mb-4 max-[393px]:mb-3 sm:mb-6 bg-blue-50 px-3 max-[393px]:px-2 sm:px-4 py-1.5 max-[393px]:py-1 sm:py-2 rounded-lg inline-block">
                  Duration: {process.duration}
                </div>
                <div className="text-left bg-gray-50 p-4 max-[393px]:p-3 sm:p-4 rounded-xl">
                  <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-bold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                    Key Deliverables:
                  </h4>
                  <ul className="space-y-1.5 max-[393px]:space-y-1 sm:space-y-2">
                    {process.deliverables.map((deliverable, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-xs max-[393px]:text-[10px] min-[430px]:text-sm text-gray-600"
                      >
                        <CheckCircle className="h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 text-green-600 mr-1.5 max-[393px]:mr-1 min-[430px]:mr-2 flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
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
              Engagement Models
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Flexible engagement options to match your project needs and budget
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 min-[820px]:grid-cols-2 lg:grid-cols-3 min-[1559px]:grid-cols-3 gap-4 max-[393px]:gap-3 min-[430px]:gap-6 sm:gap-8">
            {/* Fixed Price */}
            <div className="bg-white p-6 max-[393px]:p-4 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center mb-4 max-[393px]:mb-3 sm:mb-6">
                <div className="inline-flex p-4 max-[393px]:p-3 sm:p-6 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 mb-4 max-[393px]:mb-3 sm:mb-6 shadow-lg">
                  <DollarSign className="h-8 w-8 max-[393px]:h-6 max-[393px]:w-6 sm:h-10 sm:w-10 text-blue-600" />
                </div>
                <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl md:text-2xl font-bold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                  Fixed Price
                </h3>
                <p className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-600">
                  Perfect for well-defined projects with clear requirements
                </p>
              </div>

              <div className="space-y-3 max-[393px]:space-y-2 sm:space-y-4 mb-4 max-[393px]:mb-3 sm:mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 max-[393px]:h-4 max-[393px]:w-4 sm:h-6 sm:w-6 text-green-600 mr-2 max-[393px]:mr-1.5 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-700">
                    Predictable budget
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-base text-gray-700">
                    Clear deliverables
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-base text-gray-700">
                    Fixed timeline
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-base text-gray-700">
                    Quality guarantee
                  </span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 max-[393px]:p-3 sm:p-5 rounded-xl mb-4 max-[393px]:mb-3 sm:mb-6">
                <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-bold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                  Best For:
                </h4>
                <ul className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-600 space-y-1.5 max-[393px]:space-y-1 sm:space-y-2">
                  <li>• Web applications</li>
                  <li>• Mobile apps</li>
                  <li>• E-commerce sites</li>
                  <li>• Landing pages</li>
                </ul>
              </div>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center bg-blue-600 text-white px-4 max-[393px]:px-3 min-[430px]:px-5 sm:px-6 py-3 max-[393px]:py-2 min-[430px]:py-3 sm:py-4 rounded-xl text-sm max-[393px]:text-xs min-[430px]:text-sm sm:text-base font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Fixed Price Quote
                <ArrowRight className="ml-1.5 max-[393px]:ml-1 min-[430px]:ml-2 h-4 max-[393px]:h-3 max-[393px]:w-3 min-[430px]:h-4 min-[430px]:w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>

            {/* Dedicated Team */}
            <div className="bg-white p-6 max-[393px]:p-4 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-200 relative">
              <div className="absolute -top-3 max-[393px]:-top-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 max-[393px]:px-3 sm:px-6 py-1.5 max-[393px]:py-1 sm:py-2 rounded-full text-xs max-[393px]:text-[10px] min-[430px]:text-sm sm:text-base font-bold shadow-lg">
                  Most Popular
                </span>
              </div>

              <div className="text-center mb-4 max-[393px]:mb-3 sm:mb-6">
                <div className="inline-flex p-4 max-[393px]:p-3 sm:p-6 rounded-3xl bg-gradient-to-br from-green-100 to-green-50 mb-4 max-[393px]:mb-3 sm:mb-6 shadow-lg">
                  <Users className="h-8 w-8 max-[393px]:h-6 max-[393px]:w-6 sm:h-10 sm:w-10 text-green-600" />
                </div>
                <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl md:text-2xl font-bold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                  Dedicated Team
                </h3>
                <p className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-600">
                  Ideal for long-term projects requiring ongoing development
                </p>
              </div>

              <div className="space-y-3 max-[393px]:space-y-2 sm:space-y-4 mb-4 max-[393px]:mb-3 sm:mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 max-[393px]:h-4 max-[393px]:w-4 sm:h-6 sm:w-6 text-green-600 mr-2 max-[393px]:mr-1.5 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-700">
                    Dedicated resources
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-base text-gray-700">
                    Flexible scope
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-base text-gray-700">
                    Direct communication
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-base text-gray-700">
                    Scalable team size
                  </span>
                </div>
              </div>

              <div className="bg-green-50 p-4 max-[393px]:p-3 sm:p-5 rounded-xl mb-4 max-[393px]:mb-3 sm:mb-6">
                <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-bold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                  Best For:
                </h4>
                <ul className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-600 space-y-1.5 max-[393px]:space-y-1 sm:space-y-2">
                  <li>• Enterprise applications</li>
                  <li>• SaaS platforms</li>
                  <li>• Complex integrations</li>
                  <li>• Ongoing maintenance</li>
                </ul>
              </div>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center bg-green-600 text-white px-4 max-[393px]:px-3 min-[430px]:px-5 sm:px-6 py-3 max-[393px]:py-2 min-[430px]:py-3 sm:py-4 rounded-xl text-sm max-[393px]:text-xs min-[430px]:text-sm sm:text-base font-bold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Hire Dedicated Team
                <ArrowRight className="ml-1.5 max-[393px]:ml-1 min-[430px]:ml-2 h-4 max-[393px]:h-3 max-[393px]:w-3 min-[430px]:h-4 min-[430px]:w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>

            {/* Time & Material */}
            <div className="bg-white p-6 max-[393px]:p-4 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center mb-4 max-[393px]:mb-3 sm:mb-6">
                <div className="inline-flex p-4 max-[393px]:p-3 sm:p-6 rounded-3xl bg-gradient-to-br from-purple-100 to-purple-50 mb-4 max-[393px]:mb-3 sm:mb-6 shadow-lg">
                  <Clock className="h-8 w-8 max-[393px]:h-6 max-[393px]:w-6 sm:h-10 sm:w-10 text-purple-600" />
                </div>
                <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl md:text-2xl font-bold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                  Time & Material
                </h3>
                <p className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-600">
                  Flexible approach for projects with evolving requirements
                </p>
              </div>

              <div className="space-y-3 max-[393px]:space-y-2 sm:space-y-4 mb-4 max-[393px]:mb-3 sm:mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 max-[393px]:h-4 max-[393px]:w-4 sm:h-6 sm:w-6 text-green-600 mr-2 max-[393px]:mr-1.5 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-700">
                    Maximum flexibility
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-base text-gray-700">
                    Pay for actual work
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-base text-gray-700">
                    Easy to modify scope
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-base text-gray-700">
                    Transparent billing
                  </span>
                </div>
              </div>

              <div className="bg-purple-50 p-4 max-[393px]:p-3 sm:p-5 rounded-xl mb-4 max-[393px]:mb-3 sm:mb-6">
                <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-bold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                  Best For:
                </h4>
                <ul className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-600 space-y-1.5 max-[393px]:space-y-1 sm:space-y-2">
                  <li>• MVP development</li>
                  <li>• Research projects</li>
                  <li>• Prototyping</li>
                  <li>• Consulting services</li>
                </ul>
              </div>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center bg-purple-600 text-white px-4 max-[393px]:px-3 min-[430px]:px-5 sm:px-6 py-3 max-[393px]:py-2 min-[430px]:py-3 sm:py-4 rounded-xl text-sm max-[393px]:text-xs min-[430px]:text-sm sm:text-base font-bold hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start T&M Project
                <ArrowRight className="ml-1.5 max-[393px]:ml-1 min-[430px]:ml-2 h-4 max-[393px]:h-3 max-[393px]:w-3 min-[430px]:h-4 min-[430px]:w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
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
              Why Our Process Works
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Our methodology is built on years of experience and proven best
              practices
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 min-[1559px]:grid-cols-3 gap-4 max-[393px]:gap-3 min-[430px]:gap-6 sm:gap-8">
            {[
              {
                icon: Shield,
                title: "Risk Mitigation",
                description:
                  "Early identification and mitigation of potential risks through thorough planning and regular checkpoints.",
              },
              {
                icon: Users,
                title: "Client Collaboration",
                description:
                  "Continuous communication and collaboration ensure your vision is realized throughout the development process.",
              },
              {
                icon: Zap,
                title: "Agile Methodology",
                description:
                  "Flexible, iterative approach allows for adjustments and improvements based on feedback and changing requirements.",
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description:
                  "Comprehensive testing and quality control processes ensure your solution meets the highest standards.",
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                description:
                  "Structured timeline management and milestone tracking ensure projects are delivered on schedule.",
              },
              {
                icon: Settings,
                title: "Ongoing Support",
                description:
                  "Post-launch support and maintenance ensure your solution continues to perform optimally.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 max-[393px]:p-4 sm:p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="inline-flex p-4 max-[393px]:p-3 sm:p-6 rounded-3xl bg-blue-100 mb-4 max-[393px]:mb-3 sm:mb-6 shadow-lg">
                  <feature.icon className="h-8 w-8 max-[393px]:h-6 max-[393px]:w-6 sm:h-10 sm:w-10 text-blue-600" />
                </div>
                <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl font-bold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm max-[393px]:text-xs min-[430px]:text-base leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline Example */}
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
              Typical Project Timeline
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Here's what you can expect during a typical web application
              project
            </ScrollReveal>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 max-[393px]:p-4 sm:p-8 min-[1559px]:p-10">
            <div className="space-y-6 max-[393px]:space-y-4 min-[430px]:space-y-6 sm:space-y-8">
              {[
                {
                  week: "Week 1-2",
                  phase: "Discovery & Planning",
                  activities: [
                    "Requirements gathering",
                    "Technical analysis",
                    "Project scoping",
                    "Timeline creation",
                  ],
                  deliverables: [
                    "Project brief",
                    "Technical specification",
                    "Design mockups",
                  ],
                },
                {
                  week: "Week 3-4",
                  phase: "Design & Architecture",
                  activities: [
                    "UI/UX design",
                    "Database design",
                    "API planning",
                    "Architecture setup",
                  ],
                  deliverables: [
                    "Design system",
                    "Database schema",
                    "API documentation",
                  ],
                },
                {
                  week: "Week 5-10",
                  phase: "Development",
                  activities: [
                    "Frontend development",
                    "Backend development",
                    "Database implementation",
                    "Integration",
                  ],
                  deliverables: ["MVP", "Core features", "Testing reports"],
                },
                {
                  week: "Week 11-12",
                  phase: "Testing & Deployment",
                  activities: [
                    "Quality assurance",
                    "Performance testing",
                    "Security audit",
                    "Production deployment",
                  ],
                  deliverables: [
                    "Test reports",
                    "Deployment guide",
                    "User documentation",
                  ],
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 max-[393px]:space-x-3 min-[430px]:space-x-4 sm:space-x-6 bg-gray-50 p-5 max-[393px]:p-4 sm:p-6 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 max-[393px]:w-10 max-[393px]:h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-base max-[393px]:text-sm sm:text-xl font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:mb-3 mb-2 max-[393px]:mb-1.5 sm:mb-3 gap-2 max-[393px]:gap-1.5 min-[430px]:gap-2 sm:gap-3">
                      <h3 className="text-base max-[393px]:text-sm min-[430px]:text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                        {phase.phase}
                      </h3>
                      <span className="bg-blue-100 text-blue-800 px-3 max-[393px]:px-2 sm:px-4 py-1.5 max-[393px]:py-1 sm:py-2 rounded-full text-xs max-[393px]:text-[10px] min-[430px]:text-sm sm:text-base font-bold self-start">
                        {phase.week}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-[393px]:gap-3 min-[430px]:gap-4 sm:gap-6">
                      <div>
                        <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-bold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                          Key Activities:
                        </h4>
                        <ul className="space-y-1.5 max-[393px]:space-y-1 sm:space-y-2">
                          {phase.activities.map((activity, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-xs max-[393px]:text-[10px] min-[430px]:text-sm sm:text-base text-gray-600"
                            >
                              <CheckCircle className="h-4 max-[393px]:h-3 max-[393px]:w-3 min-[430px]:h-4 min-[430px]:w-4 sm:h-5 sm:w-5 text-green-600 mr-2 max-[393px]:mr-1.5 min-[430px]:mr-2 sm:mr-3 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-bold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                          Deliverables:
                        </h4>
                        <ul className="space-y-1.5 max-[393px]:space-y-1 sm:space-y-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-xs max-[393px]:text-[10px] min-[430px]:text-sm sm:text-base text-gray-600"
                            >
                              <FileText className="h-4 max-[393px]:h-3 max-[393px]:w-3 min-[430px]:h-4 min-[430px]:w-4 sm:h-5 sm:w-5 text-blue-600 mr-2 max-[393px]:mr-1.5 min-[430px]:mr-2 sm:mr-3 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ReadyToTransformCTA />
    </div>
  );
};

export default Process;
