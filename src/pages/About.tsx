import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  Award,
  ArrowRight,
  Code2,
  Search,
  Shield,
  Zap,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import ScrollFloat from "../components/ScrollFloat";
import ScrollReveal from "../components/ScrollReveal";
import SpotlightCard from "../components/SpotlightCard";
import ReadyToTransformCTA from "../components/ReadyToTransformCTA";

const About = () => {
  return (
    <div className="pt-20">
      <HeroSection
        title="About SarveSolutions"
        subtitle="We are a team of passionate technologists dedicated to transforming businesses through innovative digital solutions."
      />

      {/* Mission, Vision, Values */}
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
              Our Mission, Vision & Values
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal"
            >
              The principles that guide everything we do
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SpotlightCard
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-blue-500/20"
              spotlightColor="rgba(59, 130, 246, 0.3)"
            >
              <div className="relative z-10 text-center p-8">
                <div className="inline-flex p-5 rounded-2xl mb-6 transition-colors duration-300 bg-blue-100 group-hover:bg-blue-200">
                  <Target className="h-8 w-8 transition-colors duration-300 text-blue-600 group-hover:text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with cutting-edge technology solutions
                  that drive growth, enhance user experiences, and create
                  lasting value in the digital landscape.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-purple-500/20"
              spotlightColor="rgba(139, 92, 246, 0.3)"
            >
              <div className="relative z-10 text-center p-8">
                <div className="inline-flex p-5 rounded-2xl mb-6 transition-colors duration-300 bg-purple-100 group-hover:bg-purple-200">
                  <Eye className="h-8 w-8 transition-colors duration-300 text-purple-600 group-hover:text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading technology partner that businesses trust to
                  transform their digital presence and achieve unprecedented
                  success in their industries.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-green-500/20"
              spotlightColor="rgba(16, 185, 129, 0.3)"
            >
              <div className="relative z-10 text-center p-8">
                <div className="inline-flex p-5 rounded-2xl mb-6 transition-colors duration-300 bg-green-100 group-hover:bg-green-200">
                  <Heart className="h-8 w-8 transition-colors duration-300 text-green-600 group-hover:text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Values
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrity, innovation, excellence, and client success are the
                  core values that drive our commitment to delivering
                  exceptional results.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
                containerClassName="text-4xl font-bold text-gray-900 mb-6"
              >
                Our Story
              </ScrollFloat>
              <ScrollReveal
                baseOpacity={0.2}
                enableBlur={true}
                baseRotation={2}
                blurStrength={8}
                containerClassName="space-y-6 text-gray-600"
                textClassName="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed font-normal"
              >
                Founded in 2019, SarveSolutions began as a small team of
                passionate developers who believed that technology should solve
                real business problems, not create new ones.
              </ScrollReveal>
              <ScrollReveal
                baseOpacity={0.2}
                enableBlur={true}
                baseRotation={2}
                blurStrength={8}
                containerClassName="space-y-6 text-gray-600"
                textClassName="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed font-normal"
              >
                What started as a vision to bridge the gap between complex
                technology and business needs has grown into a comprehensive
                digital solutions company serving clients across multiple
                industries.
              </ScrollReveal>
              <ScrollReveal
                baseOpacity={0.2}
                enableBlur={true}
                baseRotation={2}
                blurStrength={8}
                containerClassName="space-y-6 text-gray-600"
                textClassName="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed font-normal"
              >
                Today, we're proud to have delivered over 200 successful
                projects, helping businesses transform their digital presence
                and achieve their goals through innovative technology solutions.
              </ScrollReveal>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    2019
                  </div>
                  <div className="text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    5+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    200+
                  </div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    150+
                  </div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Journey</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold mb-1">2019 - The Beginning</h4>
                    <p className="text-gray-300 text-sm">
                      Founded with a vision to democratize technology solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      2020 - First Milestone
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Delivered our first major enterprise project
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      2021 - Team Expansion
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Grew our team and expanded service offerings
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      2022 - Industry Recognition
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Received awards for innovation and excellence
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold mb-1">2023 - Global Reach</h4>
                    <p className="text-gray-300 text-sm">
                      Expanded to serve clients internationally
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold mb-1">2024 - Future Ready</h4>
                    <p className="text-gray-300 text-sm">
                      Leading innovation in AI and emerging technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
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
              Meet Our Team
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal"
            >
              The talented individuals who make SarveSolutions a trusted
              technology partner
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                bio: "Visionary leader with 10+ years in technology and business strategy.",
                image: "SJ",
                color: "bg-blue-100 text-blue-600",
              },
              {
                name: "Michael Chen",
                role: "CTO",
                bio: "Technical architect specializing in scalable systems and cloud infrastructure.",
                image: "MC",
                color: "bg-green-100 text-green-600",
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Design",
                bio: "Creative director focused on user-centered design and digital experiences.",
                image: "ER",
                color: "bg-purple-100 text-purple-600",
              },
              {
                name: "David Kim",
                role: "Lead Developer",
                bio: "Full-stack developer with expertise in React, Node.js, and modern frameworks.",
                image: "DK",
                color: "bg-orange-100 text-orange-600",
              },
              {
                name: "Lisa Wang",
                role: "Project Manager",
                bio: "Agile project management expert ensuring timely delivery and quality.",
                image: "LW",
                color: "bg-pink-100 text-pink-600",
              },
              {
                name: "Alex Thompson",
                role: "DevOps Engineer",
                bio: "Infrastructure specialist focused on automation and cloud solutions.",
                image: "AT",
                color: "bg-indigo-100 text-indigo-600",
              },
            ].map((member, index) => (
              <SpotlightCard
                key={index}
                className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-blue-500/20"
                spotlightColor="rgba(59, 130, 246, 0.3)"
              >
                <div className="relative z-10">
                  <div className="text-center p-8">
                    <div
                      className={`w-20 h-20 rounded-full ${member.color} flex items-center justify-center mx-auto mb-6 text-2xl font-bold`}
                    >
                      {member.image}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
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
              Certifications & Awards
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Recognition of our commitment to excellence and industry standards
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AWS Certified Partner",
                description: "Certified cloud solutions provider",
                icon: Award,
              },
              {
                title: "ISO 27001 Certified",
                description: "Information security management",
                icon: Shield,
              },
              {
                title: "Best Tech Startup 2023",
                description: "Industry recognition award",
                icon: Award,
              },
              {
                title: "Google Cloud Partner",
                description: "Certified cloud infrastructure",
                icon: Award,
              },
            ].map((cert, index) => (
              <SpotlightCard
                key={index}
                className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-blue-500/20"
                spotlightColor="rgba(59, 130, 246, 0.3)"
              >
                <div className="relative z-10">
                  <div className="text-center p-6">
                    <div className="inline-flex p-5 rounded-2xl mb-4 transition-colors duration-300 bg-blue-100 group-hover:bg-blue-200">
                      <cert.icon className="h-8 w-8 transition-colors duration-300 text-blue-600 group-hover:text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
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
              How We Work
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Our proven process ensures successful project delivery and client
              satisfaction
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business goals, challenges, and requirements through detailed consultation.",
                icon: Search,
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Our team develops a comprehensive strategy and technical roadmap tailored to your specific needs.",
                icon: Target,
              },
              {
                step: "03",
                title: "Development",
                description:
                  "We build your solution using agile methodologies, with regular updates and milestone reviews.",
                icon: Code2,
              },
              {
                step: "04",
                title: "Launch & Support",
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

          <div className="text-center mt-12">
            <Link
              to="/process"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ReadyToTransformCTA />
    </div>
  );
};

export default About;
