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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              How We Work
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Our systematic approach ensures every project is delivered on
              time, within budget, and exceeds expectations
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="text-center group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-blue-200 transition-colors duration-300">
                    <process.icon className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {process.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                  {process.description}
                </p>
                <div className="text-base md:text-lg text-blue-600 font-semibold mb-6 bg-blue-50 px-4 py-2 rounded-lg inline-block">
                  Duration: {process.duration}
                </div>
                <div className="text-left bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3 text-base md:text-lg">
                    Key Deliverables:
                  </h4>
                  <ul className="space-y-2">
                    {process.deliverables.map((deliverable, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm md:text-base text-gray-600"
                      >
                        <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Engagement Models
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Flexible engagement options to match your project needs and budget
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fixed Price */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center mb-6">
                <div className="inline-flex p-6 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 mb-6 shadow-lg">
                  <DollarSign className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Fixed Price
                </h3>
                <p className="text-base md:text-lg text-gray-600">
                  Perfect for well-defined projects with clear requirements
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-base text-gray-700">
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

              <div className="bg-blue-50 p-5 rounded-xl mb-6">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">
                  Best For:
                </h4>
                <ul className="text-base text-gray-600 space-y-2">
                  <li>• Web applications</li>
                  <li>• Mobile apps</li>
                  <li>• E-commerce sites</li>
                  <li>• Landing pages</li>
                </ul>
              </div>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Fixed Price Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Dedicated Team */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full text-base font-bold shadow-lg">
                  Most Popular
                </span>
              </div>

              <div className="text-center mb-6">
                <div className="inline-flex p-6 rounded-3xl bg-gradient-to-br from-green-100 to-green-50 mb-6 shadow-lg">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Dedicated Team
                </h3>
                <p className="text-base md:text-lg text-gray-600">
                  Ideal for long-term projects requiring ongoing development
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-base text-gray-700">
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

              <div className="bg-green-50 p-5 rounded-xl mb-6">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">
                  Best For:
                </h4>
                <ul className="text-base text-gray-600 space-y-2">
                  <li>• Enterprise applications</li>
                  <li>• SaaS platforms</li>
                  <li>• Complex integrations</li>
                  <li>• Ongoing maintenance</li>
                </ul>
              </div>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center bg-green-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Hire Dedicated Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Time & Material */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center mb-6">
                <div className="inline-flex p-6 rounded-3xl bg-gradient-to-br from-purple-100 to-purple-50 mb-6 shadow-lg">
                  <Clock className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Time & Material
                </h3>
                <p className="text-base md:text-lg text-gray-600">
                  Flexible approach for projects with evolving requirements
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-base text-gray-700">
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

              <div className="bg-purple-50 p-5 rounded-xl mb-6">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">
                  Best For:
                </h4>
                <ul className="text-base text-gray-600 space-y-2">
                  <li>• MVP development</li>
                  <li>• Research projects</li>
                  <li>• Prototyping</li>
                  <li>• Consulting services</li>
                </ul>
              </div>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center bg-purple-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start T&M Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Why Our Process Works
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Our methodology is built on years of experience and proven best
              practices
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="inline-flex p-6 rounded-3xl bg-blue-100 mb-6 shadow-lg">
                  <feature.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline Example */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Typical Project Timeline
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Here's what you can expect during a typical web application
              project
            </ScrollReveal>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-8">
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
                  className="flex items-start space-x-6 bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:mb-3 mb-3 gap-3">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        {phase.phase}
                      </h3>
                      <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-base font-bold self-start">
                        {phase.week}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 text-lg">
                          Key Activities:
                        </h4>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-base text-gray-600"
                            >
                              <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 text-lg">
                          Deliverables:
                        </h4>
                        <ul className="space-y-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-base text-gray-600"
                            >
                              <FileText className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
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
