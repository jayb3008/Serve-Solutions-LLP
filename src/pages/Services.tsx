import { Link } from "react-router-dom";
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              What We Do
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal"
            >
              From concept to deployment, we provide end-to-end technology
              solutions
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <SpotlightCard
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-blue-500/20"
              spotlightColor="rgba(59, 130, 246, 0.3)"
            >
              <div className="relative z-10">
                <div className="inline-flex p-5 rounded-2xl mb-6 transition-colors duration-300 bg-blue-100 group-hover:bg-blue-200">
                  <Code2 className="h-8 w-8 transition-colors duration-300 text-blue-600 group-hover:text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Web Development
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Custom websites and web applications built with modern
                  technologies like React, Next.js, and Node.js for optimal
                  performance and scalability.
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Technologies We Use:
                  </h4>
                  <div className="flex flex-wrap gap-2">
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
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    What You Get:
                  </h4>
                  <ul className="space-y-3" role="list">
                    {[
                      "Responsive Design",
                      "SEO Optimized",
                      "Fast Loading",
                      "Scalable Architecture",
                      "Security Features",
                    ].map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                        role="listitem"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-blue-600 hover:text-blue-700 focus:ring-blue-500"
                  aria-label="Learn more about Web Development"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </SpotlightCard>

            {/* Mobile App Development */}
            <SpotlightCard
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-purple-500/20"
              spotlightColor="rgba(139, 92, 246, 0.3)"
            >
              <div className="relative z-10">
                <div className="inline-flex p-5 rounded-2xl mb-6 transition-colors duration-300 bg-purple-100 group-hover:bg-purple-200">
                  <Smartphone className="h-8 w-8 transition-colors duration-300 text-purple-600 group-hover:text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Mobile App Development
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Native and cross-platform mobile applications for iOS and
                  Android using React Native and Flutter for maximum reach and
                  performance.
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Technologies We Use:
                  </h4>
                  <div className="flex flex-wrap gap-2">
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
                        className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    What You Get:
                  </h4>
                  <ul className="space-y-3" role="list">
                    {[
                      "Cross-Platform",
                      "Native Performance",
                      "App Store Ready",
                      "Push Notifications",
                      "Offline Support",
                    ].map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                        role="listitem"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-purple-600 hover:text-purple-700 focus:ring-purple-500"
                  aria-label="Learn more about Mobile App Development"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </SpotlightCard>

            {/* Cloud & DevOps */}
            <SpotlightCard
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-green-500/20"
              spotlightColor="rgba(16, 185, 129, 0.3)"
            >
              <div className="relative z-10">
                <div className="inline-flex p-5 rounded-2xl mb-6 transition-colors duration-300 bg-green-100 group-hover:bg-green-200">
                  <Cloud className="h-8 w-8 transition-colors duration-300 text-green-600 group-hover:text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Cloud & DevOps
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cloud infrastructure setup, deployment automation, and
                  scalable solutions on AWS, Azure, and Google Cloud Platform.
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Technologies We Use:
                  </h4>
                  <div className="flex flex-wrap gap-2">
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
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    What You Get:
                  </h4>
                  <ul className="space-y-3" role="list">
                    {[
                      "Auto Scaling",
                      "CI/CD Pipeline",
                      "Monitoring",
                      "Security",
                      "Cost Optimization",
                    ].map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                        role="listitem"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-green-600 hover:text-green-700 focus:ring-green-500"
                  aria-label="Learn more about Cloud & DevOps"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </SpotlightCard>

            {/* UI/UX Design */}
            <SpotlightCard
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-pink-500/20"
              spotlightColor="rgba(236, 72, 153, 0.3)"
            >
              <div className="relative z-10">
                <div className="inline-flex p-5 rounded-2xl mb-6 transition-colors duration-300 bg-pink-100 group-hover:bg-pink-200">
                  <Palette className="h-8 w-8 transition-colors duration-300 text-pink-600 group-hover:text-pink-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  UI/UX Design
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  User-centered design that creates intuitive and engaging
                  digital experiences for your customers across all platforms.
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Our Process:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "User Research",
                      "Wireframing",
                      "Prototyping",
                      "Design Systems",
                      "Usability Testing",
                    ].map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    What You Get:
                  </h4>
                  <ul className="space-y-3" role="list">
                    {[
                      "User Research",
                      "Wireframing",
                      "Prototyping",
                      "Design Systems",
                      "Usability Testing",
                    ].map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                        role="listitem"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-pink-600 hover:text-pink-700 focus:ring-pink-500"
                  aria-label="Learn more about UI/UX Design"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </SpotlightCard>

            {/* Digital Marketing */}
            <SpotlightCard
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-orange-500/20"
              spotlightColor="rgba(245, 158, 11, 0.3)"
            >
              <div className="relative z-10">
                <div className="inline-flex p-5 rounded-2xl mb-6 transition-colors duration-300 bg-orange-100 group-hover:bg-orange-200">
                  <BarChart3 className="h-8 w-8 transition-colors duration-300 text-orange-600 group-hover:text-orange-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Digital Marketing
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  SEO, social media marketing, and digital advertising
                  strategies to boost your online presence and drive qualified
                  leads.
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Services Include:
                  </h4>
                  <div className="flex flex-wrap gap-2">
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
                        className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    What You Get:
                  </h4>
                  <ul className="space-y-3" role="list">
                    {[
                      "SEO Optimization",
                      "Social Media Strategy",
                      "PPC Management",
                      "Content Creation",
                      "Performance Analytics",
                    ].map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                        role="listitem"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-orange-600 hover:text-orange-700 focus:ring-orange-500"
                  aria-label="Learn more about Digital Marketing"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </SpotlightCard>

            {/* IT Consulting */}
            <SpotlightCard
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-indigo-500/20"
              spotlightColor="rgba(99, 102, 241, 0.3)"
            >
              <div className="relative z-10">
                <div className="inline-flex p-5 rounded-2xl mb-6 transition-colors duration-300 bg-indigo-100 group-hover:bg-indigo-200">
                  <Shield className="h-8 w-8 transition-colors duration-300 text-indigo-600 group-hover:text-indigo-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  IT Consulting
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic technology consulting to help you make informed
                  decisions about your digital infrastructure and digital
                  transformation.
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Our Expertise:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Technology Audit",
                      "Strategy Planning",
                      "Security Assessment",
                      "Process Optimization",
                      "Digital Transformation",
                    ].map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    What You Get:
                  </h4>
                  <ul className="space-y-3" role="list">
                    {[
                      "Technology Audit",
                      "Strategy Planning",
                      "Security Assessment",
                      "Process Optimization",
                      "Implementation Support",
                    ].map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                        role="listitem"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-indigo-600 hover:text-indigo-700 focus:ring-indigo-500"
                  aria-label="Learn more about IT Consulting"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              How We Deliver Excellence
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Our proven methodology ensures successful project delivery and
              client satisfaction
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                    {process.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <process.icon className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Why Choose Our Services?
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal"
            >
              We combine technical expertise with business acumen to deliver
              solutions that drive real results
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="text-center p-6 bg-gray-50 rounded-2xl"
              >
                <div className="inline-flex p-4 rounded-full bg-blue-100 mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
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
