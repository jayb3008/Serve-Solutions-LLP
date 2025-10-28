import { Link } from "react-router-dom";
import {
  Building2,
  CreditCard,
  ShoppingCart,
  GraduationCap,
  Factory,
  Heart,
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Target,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import ScrollFloat from "../components/ScrollFloat";
import ScrollReveal from "../components/ScrollReveal";
import SpotlightCard from "../components/SpotlightCard";
import ReadyToTransformCTA from "../components/ReadyToTransformCTA";

const Industries = () => {
  const industries = [
    {
      id: "healthcare",
      name: "Healthcare",
      icon: Building2,
      color: "red",
      description:
        "HIPAA-compliant solutions for hospitals, clinics, and healthcare providers. Patient management systems, telemedicine platforms, and medical record digitization.",
      challenges: [
        "HIPAA compliance requirements",
        "Patient data security",
        "Integration with existing systems",
        "Telemedicine capabilities",
      ],
      solutions: [
        "Patient Management Systems",
        "Telemedicine Platforms",
        "Medical Record Digitization",
        "HIPAA Compliance",
        "Integration Services",
      ],
    },
    {
      id: "fintech",
      name: "FinTech",
      icon: CreditCard,
      color: "green",
      description:
        "Secure financial applications, payment processing systems, and digital banking solutions. PCI DSS compliant and fraud-resistant platforms.",
      challenges: [
        "Regulatory compliance",
        "Security and fraud prevention",
        "Real-time transaction processing",
        "Scalability requirements",
      ],
      solutions: [
        "Digital Banking Apps",
        "Payment Processing",
        "Fraud Detection",
        "Regulatory Compliance",
        "Blockchain Integration",
      ],
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      icon: ShoppingCart,
      color: "blue",
      description:
        "Complete e-commerce platforms, marketplace solutions, and online retail systems. From B2C to B2B, we build scalable online businesses.",
      challenges: [
        "High traffic handling",
        "Payment gateway integration",
        "Inventory management",
        "Mobile optimization",
      ],
      solutions: [
        "E-commerce Platforms",
        "Marketplace Solutions",
        "Payment Integration",
        "Inventory Management",
        "Mobile Commerce",
      ],
    },
    {
      id: "edtech",
      name: "EdTech",
      icon: GraduationCap,
      color: "purple",
      description:
        "Learning management systems, online course platforms, and educational applications. Empowering educators and students with technology.",
      challenges: [
        "User engagement",
        "Content management",
        "Progress tracking",
        "Accessibility compliance",
      ],
      solutions: [
        "Learning Management Systems",
        "Online Course Platforms",
        "Student Portals",
        "Assessment Tools",
        "Mobile Learning Apps",
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      icon: Factory,
      color: "orange",
      description:
        "Industrial IoT solutions, supply chain management systems, and production monitoring platforms. Digitizing manufacturing processes.",
      challenges: [
        "Legacy system integration",
        "Real-time monitoring",
        "Supply chain visibility",
        "Predictive maintenance",
      ],
      solutions: [
        "Industrial IoT Platforms",
        "Supply Chain Management",
        "Production Monitoring",
        "Quality Control Systems",
        "Predictive Analytics",
      ],
    },
    {
      id: "nonprofit",
      name: "Non-Profit",
      icon: Heart,
      color: "pink",
      description:
        "Donor management systems, volunteer platforms, and fundraising solutions. Helping non-profits maximize their impact through technology.",
      challenges: [
        "Limited budgets",
        "Donor engagement",
        "Volunteer coordination",
        "Impact measurement",
      ],
      solutions: [
        "Donor Management Systems",
        "Volunteer Platforms",
        "Fundraising Tools",
        "Impact Tracking",
        "Community Portals",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: {
      [key: string]: {
        bg: string;
        text: string;
        hover: string;
        border: string;
        spotlight: string;
        iconBg: string;
        iconHover: string;
        iconText: string;
        challenges: string;
        bullet: string;
        button: string;
        buttonHover: string;
      };
    } = {
      red: {
        bg: "bg-red-50",
        text: "text-red-600",
        hover: "text-red-700",
        border: "hover:border-red-200",
        spotlight: "rgba(239, 68, 68, 0.3)",
        iconBg: "bg-red-100",
        iconHover: "group-hover:bg-red-200",
        iconText: "text-red-600",
        challenges: "bg-red-50",
        bullet: "text-red-500",
        button: "bg-red-600",
        buttonHover: "hover:bg-red-700",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        hover: "text-green-700",
        border: "hover:border-green-200",
        spotlight: "rgba(34, 197, 94, 0.3)",
        iconBg: "bg-green-100",
        iconHover: "group-hover:bg-green-200",
        iconText: "text-green-600",
        challenges: "bg-green-50",
        bullet: "text-green-500",
        button: "bg-green-600",
        buttonHover: "hover:bg-green-700",
      },
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        hover: "text-blue-700",
        border: "hover:border-blue-200",
        spotlight: "rgba(59, 130, 246, 0.3)",
        iconBg: "bg-blue-100",
        iconHover: "group-hover:bg-blue-200",
        iconText: "text-blue-600",
        challenges: "bg-blue-50",
        bullet: "text-blue-500",
        button: "bg-blue-600",
        buttonHover: "hover:bg-blue-700",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        hover: "text-purple-700",
        border: "hover:border-purple-200",
        spotlight: "rgba(168, 85, 247, 0.3)",
        iconBg: "bg-purple-100",
        iconHover: "group-hover:bg-purple-200",
        iconText: "text-purple-600",
        challenges: "bg-purple-50",
        bullet: "text-purple-500",
        button: "bg-purple-600",
        buttonHover: "hover:bg-purple-700",
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        hover: "text-orange-700",
        border: "hover:border-orange-200",
        spotlight: "rgba(249, 115, 22, 0.3)",
        iconBg: "bg-orange-100",
        iconHover: "group-hover:bg-orange-200",
        iconText: "text-orange-600",
        challenges: "bg-orange-50",
        bullet: "text-orange-500",
        button: "bg-orange-600",
        buttonHover: "hover:bg-orange-700",
      },
      pink: {
        bg: "bg-pink-50",
        text: "text-pink-600",
        hover: "text-pink-700",
        border: "hover:border-pink-200",
        spotlight: "rgba(236, 72, 153, 0.3)",
        iconBg: "bg-pink-100",
        iconHover: "group-hover:bg-pink-200",
        iconText: "text-pink-600",
        challenges: "bg-pink-50",
        bullet: "text-pink-500",
        button: "bg-pink-600",
        buttonHover: "hover:bg-pink-700",
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="pt-20">
      <HeroSection
        title="Industries We Serve"
        subtitle="We have deep expertise across diverse industries, understanding unique challenges and delivering tailored solutions"
      />

      {/* Industries Overview */}
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
              Our Industry Expertise
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              From startups to enterprise, we understand the unique challenges
              each industry faces and deliver solutions that drive real business
              value.
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 min-[820px]:grid-cols-2 lg:grid-cols-3 min-[1559px]:grid-cols-3 gap-4 max-[393px]:gap-3 min-[430px]:gap-6 sm:gap-8">
            {industries.map((industry) => {
              const colors = getColorClasses(industry.color);
              const IconComponent = industry.icon;

              return (
                <SpotlightCard
                  key={industry.id}
                  id={industry.id}
                  className={`group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:${colors.border} focus-within:ring-4 focus-within:ring-${industry.color}-500/20`}
                  spotlightColor={colors.spotlight}
                >
                  <div className="relative z-10">
                    <div className="p-6 max-[393px]:p-4 sm:p-8">
                      <div
                        className={`inline-flex p-3 max-[393px]:p-2.5 sm:p-4 rounded-full ${colors.iconBg} mb-4 max-[393px]:mb-3 sm:mb-6 ${colors.iconHover} transition-colors duration-300`}
                      >
                        <IconComponent
                          className={`h-6 w-6 max-[393px]:h-5 max-[393px]:w-5 sm:h-8 sm:w-8 transition-colors duration-300 ${colors.iconText} group-hover:${colors.hover}`}
                        />
                      </div>
                      <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl font-semibold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                        {industry.name}
                      </h3>
                      <p className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-600 mb-4 max-[393px]:mb-3 sm:mb-6 leading-relaxed">
                        {industry.description}
                      </p>

                      <div className="mb-4 max-[393px]:mb-3 sm:mb-6">
                        <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                          Key Challenges:
                        </h4>
                        <ul className="space-y-1.5 max-[393px]:space-y-1 sm:space-y-2 text-xs max-[393px]:text-[10px] min-[430px]:text-sm text-gray-600">
                          {industry.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start">
                              <span
                                className={`${colors.bullet} mr-1 max-[393px]:mr-0.5 sm:mr-2`}
                              >
                                •
                              </span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4 max-[393px]:mb-3 sm:mb-6">
                        <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                          Our Solutions:
                        </h4>
                        <ul className="space-y-1.5 max-[393px]:space-y-1 sm:space-y-2">
                          {industry.solutions.map((solution, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-xs max-[393px]:text-[10px] min-[430px]:text-sm text-gray-600"
                            >
                              <CheckCircle className="h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 text-green-500 mr-1 max-[393px]:mr-0.5 min-[430px]:mr-2" />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to="/contact"
                        className={`inline-flex items-center text-xs max-[393px]:text-[10px] min-[430px]:text-sm ${colors.text} hover:${colors.hover} font-medium transition-colors`}
                      >
                        Discuss {industry.name} Solutions
                        <ArrowRight className="ml-1 max-[393px]:ml-0.5 min-[430px]:ml-1.5 h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5" />
                      </Link>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
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
              Our Industry Impact
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Numbers that reflect our commitment to delivering exceptional
              results across industries
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 min-[1559px]:grid-cols-4 gap-4 max-[393px]:gap-3 min-[430px]:gap-6 sm:gap-8">
            {[
              {
                number: "50+",
                label: "Healthcare Projects",
                description: "HIPAA-compliant solutions delivered",
              },
              {
                number: "30+",
                label: "FinTech Applications",
                description: "Secure financial platforms built",
              },
              {
                number: "80+",
                label: "E-commerce Platforms",
                description: "Online businesses launched",
              },
              {
                number: "25+",
                label: "EdTech Solutions",
                description: "Educational platforms created",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-5 max-[393px]:p-4 sm:p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="text-xl max-[393px]:text-lg min-[430px]:text-2xl md:text-3xl lg:text-4xl min-[1559px]:text-5xl font-bold text-blue-600 mb-1 max-[393px]:mb-0.5 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-gray-900 mb-1 max-[393px]:mb-0.5 sm:mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600 text-xs max-[393px]:text-[10px] min-[430px]:text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
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
              Why Industry Expertise Matters
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Deep industry knowledge enables us to deliver solutions that truly
              address your specific challenges
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 min-[1559px]:grid-cols-3 gap-4 max-[393px]:gap-3 min-[430px]:gap-6 sm:gap-8">
            {[
              {
                icon: Target,
                title: "Regulatory Compliance",
                description:
                  "We understand industry-specific regulations and ensure your solutions meet all compliance requirements.",
              },
              {
                icon: Shield,
                title: "Security Standards",
                description:
                  "Industry-specific security protocols and best practices are built into every solution we deliver.",
              },
              {
                icon: Users,
                title: "User Experience",
                description:
                  "We design solutions that match how your industry users actually work and think.",
              },
              {
                icon: Zap,
                title: "Performance Requirements",
                description:
                  "We understand the performance demands of your industry and build solutions that scale accordingly.",
              },
              {
                icon: Globe,
                title: "Integration Needs",
                description:
                  "We know which systems and platforms your industry relies on and ensure seamless integration.",
              },
              {
                icon: BarChart3,
                title: "Business Metrics",
                description:
                  "We focus on KPIs and metrics that matter most to your specific industry and business model.",
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
      <ReadyToTransformCTA />
    </div>
  );
};

export default Industries;
