import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Search,
  HelpCircle,
  Clock,
  Users,
  DollarSign,
  Shield,
  Code2,
  BarChart3,
  Globe,
  Zap,
  ArrowRight,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import ScrollFloat from "../components/ScrollFloat";
import ScrollReveal from "../components/ScrollReveal";
import ReadyToTransformCTA from "../components/ReadyToTransformCTA";
import SwipeButton from "../components/SwipeButton";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const generalFAQs = [
    {
      question: "What services does SarveSolutions offer?",
      answer:
        "We offer comprehensive digital solutions including web development, mobile app development, cloud & DevOps services, UI/UX design, digital marketing, and IT consulting. Our team specializes in creating scalable, secure, and innovative solutions tailored to your business needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity and scope. A simple website typically takes 4-8 weeks, while complex web applications can take 3-6 months. Mobile apps usually require 2-4 months, and enterprise solutions may take 6-12 months. We provide detailed timelines during the planning phase.",
    },
    {
      question: "Do you work with startups or only established companies?",
      answer:
        "We work with businesses of all sizes, from startups to enterprise companies. We understand that startups have unique needs and budget constraints, so we offer flexible engagement models including MVP development and phased approaches to help you launch quickly and scale efficiently.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in modern web technologies including React, Next.js, Node.js, TypeScript, Python, and various databases. For mobile development, we use React Native and Flutter. Our cloud expertise includes AWS, Azure, and Google Cloud Platform. We also work with design tools like Figma and Adobe Creative Suite.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer comprehensive post-launch support including maintenance, updates, bug fixes, and feature enhancements. Our support packages are tailored to your needs and can include 24/7 monitoring, regular updates, and priority support for critical issues.",
    },
  ];

  const technicalFAQs = [
    {
      question: "How do you ensure the security of our applications?",
      answer:
        "Security is built into every project from the ground up. We follow industry best practices including secure coding standards, regular security audits, penetration testing, and compliance with relevant standards (HIPAA, PCI DSS, GDPR). We also implement proper authentication, encryption, and access controls.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Absolutely. We have extensive experience integrating with various systems including CRMs, ERPs, payment gateways, third-party APIs, and legacy systems. We use modern integration patterns and ensure seamless data flow between systems while maintaining security and performance.",
    },
    {
      question: "Do you follow agile development methodologies?",
      answer:
        "Yes, we follow agile methodologies including Scrum and Kanban. We work in sprints with regular client communication, demo sessions, and feedback loops. This approach ensures transparency, allows for changes during development, and delivers value incrementally.",
    },
    {
      question: "How do you handle scalability and performance?",
      answer:
        "We design applications with scalability in mind from the start. This includes proper architecture planning, database optimization, caching strategies, CDN implementation, and cloud auto-scaling. We also conduct performance testing and optimization to ensure your application can handle growth.",
    },
    {
      question: "What happens if we need changes during development?",
      answer:
        "We understand that requirements can evolve during development. Our agile approach allows for changes, and we work with you to prioritize modifications. Changes are handled through our change management process, and we'll provide updated timelines and costs for any scope changes.",
    },
  ];

  const pricingFAQs = [
    {
      question: "How do you price your projects?",
      answer:
        "We offer flexible pricing models: Fixed Price for well-defined projects, Dedicated Team for ongoing development, and Time & Material for evolving requirements. Pricing depends on project complexity, timeline, and team size. We provide detailed quotes after understanding your requirements.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes, we offer flexible payment options including milestone-based payments, monthly retainers, and payment plans for larger projects. We work with you to create a payment schedule that fits your budget and cash flow requirements.",
    },
    {
      question: "What's included in your pricing?",
      answer:
        "Our pricing typically includes development, testing, deployment, initial training, and documentation. Additional services like ongoing maintenance, hosting, and third-party licenses may be separate. We provide transparent pricing with no hidden costs.",
    },
    {
      question: "Do you offer discounts for long-term projects?",
      answer:
        "Yes, we offer competitive rates for long-term partnerships and dedicated team engagements. We also provide volume discounts for multiple projects and special pricing for non-profit organizations and startups.",
    },
    {
      question: "Can we get a free consultation?",
      answer:
        "Absolutely! We offer free initial consultations to understand your project requirements, discuss your goals, and provide recommendations. This helps us create accurate proposals and ensures we're the right fit for your project.",
    },
  ];

  const faqCategories = [
    {
      name: "General",
      icon: HelpCircle,
      faqs: generalFAQs,
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Technical",
      icon: Code2,
      faqs: technicalFAQs,
      color: "bg-green-100 text-green-600",
    },
    {
      name: "Pricing",
      icon: DollarSign,
      faqs: pricingFAQs,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const quickAnswers = [
    {
      icon: Clock,
      question: "How quickly can you start?",
      answer: "We can typically start within 1-2 weeks of project approval.",
    },
    {
      icon: Users,
      question: "What's your team size?",
      answer: "We have 25+ experienced developers, designers, and specialists.",
    },
    {
      icon: Shield,
      question: "Do you sign NDAs?",
      answer: "Yes, we sign NDAs and maintain strict confidentiality.",
    },
    {
      icon: Globe,
      question: "Do you work remotely?",
      answer:
        "Yes, we work with clients globally and offer flexible communication.",
    },
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, process, and pricing"
      />

      {/* Search Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* Quick Answers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-4xl font-bold text-gray-900 mb-4"
            >
              Quick Answers
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xl text-gray-600 leading-relaxed font-normal"
            >
              Get instant answers to the most common questions
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickAnswers.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-full bg-blue-100 mb-4">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-4xl font-bold text-gray-900 mb-4"
            >
              Browse by Category
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xl text-gray-600 leading-relaxed font-normal"
            >
              Find detailed answers organized by topic
            </ScrollReveal>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-8">
                  <div
                    className={`inline-flex p-3 rounded-full ${category.color} mr-4`}
                  >
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.name} Questions
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 5 + faqIndex;
                    const isOpen = openItems.includes(globalIndex);

                    return (
                      <div
                        key={faqIndex}
                        className="bg-white rounded-xl shadow-sm border border-gray-200"
                      >
                        <SwipeButton
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full text-left"
                          firstClass="w-full px-6 py-4 text-left flex items-center justify-between"
                          secondClass="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50"
                          firstContent={
                            <>
                              <span className="text-lg font-semibold text-gray-900 pr-4">
                                {faq.question}
                              </span>
                              {isOpen ? (
                                <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                              )}
                            </>
                          }
                          secondContent={
                            <>
                              <span className="text-lg font-semibold text-gray-900 pr-4">
                                {faq.question}
                              </span>
                              {isOpen ? (
                                <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                              )}
                            </>
                          }
                        />
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="text-4xl font-bold text-white mb-4"
          >
            Still Have Questions?
          </ScrollFloat>
          <ScrollReveal
            baseOpacity={0.2}
            enableBlur={true}
            baseRotation={2}
            blurStrength={8}
            containerClassName="mb-8 max-w-2xl mx-auto"
            textClassName="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-white leading-relaxed font-normal"
          >
            Our team is here to help. Get in touch and we'll answer any
            questions you have.
          </ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact/"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="mailto:contact@sarvesolutions.in"
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Send Email
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-4xl font-bold text-gray-900 mb-4"
            >
              Additional Resources
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xl text-gray-600 leading-relaxed font-normal"
            >
              Explore more information about our services and process
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Our Process",
                description:
                  "Learn about our proven methodology for project delivery",
                link: "/process/",
                icon: Zap,
              },
              {
                title: "Case Studies",
                description:
                  "See real examples of our work and client success stories",
                link: "/portfolio/",
                icon: BarChart3,
              },
              {
                title: "Blog & Insights",
                description:
                  "Read our latest articles on technology trends and best practices",
                link: "/blog/",
                icon: Globe,
              },
            ].map((resource, index) => (
              <Link
                key={index}
                to={resource.link}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="inline-flex p-3 rounded-full bg-blue-100 mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <resource.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center text-blue-600 font-medium">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ReadyToTransformCTA />
    </div>
  );
};

export default FAQ;
