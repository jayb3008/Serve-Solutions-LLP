import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Palette,
  BarChart3,
  Award,
  Zap,
  Shield,
  Layers,
  GitBranch,
  Terminal,
  Cpu,
  Server,
  Lock,
  FileText,
  Search,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import ScrollFloat from "../components/ScrollFloat";
import ScrollReveal from "../components/ScrollReveal";
import SpotlightCard from "../components/SpotlightCard";
import ReadyToTransformCTA from "../components/ReadyToTransformCTA";
import LogoLoop from "../components/LogoLoop";
import SwipeButton from "../components/SwipeButton";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "MediCare Pro - Healthcare Management Platform",
      category: "Healthcare",
      description:
        "A comprehensive healthcare management system for hospitals and clinics, featuring patient management, appointment scheduling, and medical record digitization.",
      image: "MC",
      color: "bg-red-100 text-red-600",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "HIPAA"],
      metrics: {
        users: "10,000+",
        efficiency: "40%",
        satisfaction: "95%",
        timeline: "6 months",
      },
      challenge:
        "A major hospital chain needed to digitize their patient records and streamline their appointment management system while maintaining HIPAA compliance.",
      solution:
        "We developed a comprehensive healthcare management platform with secure patient data handling, automated appointment scheduling, and integrated medical record management.",
      outcome:
        "The platform reduced appointment scheduling time by 40%, improved patient satisfaction to 95%, and successfully handled 10,000+ patient records while maintaining full HIPAA compliance.",
    },
    {
      id: 2,
      title: "PayFlow - FinTech Payment Platform",
      category: "FinTech",
      description:
        "A secure payment processing platform for small to medium businesses, featuring fraud detection, real-time analytics, and multi-currency support.",
      image: "PF",
      color: "bg-green-100 text-green-600",
      technologies: [
        "React Native",
        "Python",
        "PostgreSQL",
        "Stripe",
        "PCI DSS",
      ],
      metrics: {
        transactions: "$50M+",
        fraudRate: "0.1%",
        uptime: "99.9%",
        timeline: "8 months",
      },
      challenge:
        "A growing FinTech startup needed a scalable payment platform that could handle high transaction volumes while maintaining security and compliance.",
      solution:
        "We built a robust payment processing platform with advanced fraud detection, real-time analytics, and seamless integration with multiple payment gateways.",
      outcome:
        "The platform processed over $50M in transactions with a fraud rate of just 0.1%, achieved 99.9% uptime, and helped the client scale to serve 5,000+ merchants.",
    },
    {
      id: 3,
      title: "EduLearn - Online Learning Platform",
      category: "EdTech",
      description:
        "An interactive online learning platform for educational institutions, featuring course management, student progress tracking, and virtual classroom capabilities.",
      image: "EL",
      color: "bg-purple-100 text-purple-600",
      technologies: ["Next.js", "TypeScript", "Prisma", "WebRTC", "AWS"],
      metrics: {
        students: "25,000+",
        courses: "500+",
        completion: "85%",
        timeline: "7 months",
      },
      challenge:
        "A university needed to transition to online learning during the pandemic while maintaining student engagement and academic quality.",
      solution:
        "We created a comprehensive online learning platform with interactive courses, real-time virtual classrooms, and detailed progress tracking for both students and instructors.",
      outcome:
        "The platform successfully onboarded 25,000+ students, hosted 500+ courses, achieved an 85% course completion rate, and received positive feedback from 90% of users.",
    },
    {
      id: 4,
      title: "ShopMax - E-commerce Marketplace",
      category: "E-commerce",
      description:
        "A multi-vendor e-commerce marketplace connecting buyers and sellers, featuring advanced search, inventory management, and secure payment processing.",
      image: "SM",
      color: "bg-blue-100 text-blue-600",
      technologies: ["React", "Node.js", "MongoDB", "Elasticsearch", "Redis"],
      metrics: {
        vendors: "1,000+",
        products: "50,000+",
        sales: "300%",
        timeline: "9 months",
      },
      challenge:
        "An e-commerce company wanted to expand from a single-vendor store to a multi-vendor marketplace while maintaining performance and user experience.",
      solution:
        "We developed a scalable marketplace platform with advanced search capabilities, automated vendor onboarding, and integrated inventory management systems.",
      outcome:
        "The marketplace grew to 1,000+ vendors selling 50,000+ products, increased sales by 300%, and maintained sub-2-second page load times even during peak traffic.",
    },
    {
      id: 5,
      title: "ManufactureIQ - Industrial IoT Platform",
      category: "Manufacturing",
      description:
        "An IoT platform for manufacturing companies to monitor production lines, predict maintenance needs, and optimize operational efficiency.",
      image: "MI",
      color: "bg-orange-100 text-orange-600",
      technologies: ["React", "Python", "InfluxDB", "MQTT", "TensorFlow"],
      metrics: {
        machines: "500+",
        efficiency: "25%",
        downtime: "60%",
        timeline: "10 months",
      },
      challenge:
        "A manufacturing company needed to reduce equipment downtime and improve production efficiency through real-time monitoring and predictive maintenance.",
      solution:
        "We built an IoT platform that collects real-time data from production equipment, uses machine learning for predictive maintenance, and provides actionable insights for optimization.",
      outcome:
        "The platform monitored 500+ machines, improved production efficiency by 25%, reduced unplanned downtime by 60%, and saved the client over $2M annually in maintenance costs.",
    },
    {
      id: 6,
      title: "HelpHub - Non-Profit Volunteer Platform",
      category: "Non-Profit",
      description:
        "A volunteer management platform for non-profit organizations, featuring volunteer matching, event coordination, and impact tracking.",
      image: "HH",
      color: "bg-pink-100 text-pink-600",
      technologies: ["Vue.js", "Laravel", "MySQL", "Twilio", "AWS"],
      metrics: {
        volunteers: "5,000+",
        events: "200+",
        impact: "150%",
        timeline: "5 months",
      },
      challenge:
        "A non-profit organization struggled to coordinate volunteers, track their impact, and demonstrate value to donors and stakeholders.",
      solution:
        "We created a comprehensive volunteer management platform with automated matching, event coordination tools, and detailed impact reporting capabilities.",
      outcome:
        "The platform coordinated 5,000+ volunteers across 200+ events, increased volunteer engagement by 150%, and helped the organization secure 40% more funding through better impact reporting.",
    },
  ];

  const techLogos = [
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Code2 className="h-8 w-8 text-blue-600" />
          <span className="text-sm font-medium text-gray-700">React</span>
        </div>
      ),
      title: "React",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Globe className="h-8 w-8 text-green-600" />
          <span className="text-sm font-medium text-gray-700">Node.js</span>
        </div>
      ),
      title: "Node.js",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Database className="h-8 w-8 text-yellow-600" />
          <span className="text-sm font-medium text-gray-700">Python</span>
        </div>
      ),
      title: "Python",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Cloud className="h-8 w-8 text-orange-600" />
          <span className="text-sm font-medium text-gray-700">AWS</span>
        </div>
      ),
      title: "AWS",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Database className="h-8 w-8 text-green-500" />
          <span className="text-sm font-medium text-gray-700">MongoDB</span>
        </div>
      ),
      title: "MongoDB",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Cloud className="h-8 w-8 text-blue-500" />
          <span className="text-sm font-medium text-gray-700">Docker</span>
        </div>
      ),
      title: "Docker",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Smartphone className="h-8 w-8 text-purple-600" />
          <span className="text-sm font-medium text-gray-700">
            React Native
          </span>
        </div>
      ),
      title: "React Native",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Code2 className="h-8 w-8 text-blue-700" />
          <span className="text-sm font-medium text-gray-700">TypeScript</span>
        </div>
      ),
      title: "TypeScript",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Database className="h-8 w-8 text-indigo-600" />
          <span className="text-sm font-medium text-gray-700">PostgreSQL</span>
        </div>
      ),
      title: "PostgreSQL",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Cloud className="h-8 w-8 text-blue-600" />
          <span className="text-sm font-medium text-gray-700">Kubernetes</span>
        </div>
      ),
      title: "Kubernetes",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Palette className="h-8 w-8 text-pink-600" />
          <span className="text-sm font-medium text-gray-700">Figma</span>
        </div>
      ),
      title: "Figma",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <BarChart3 className="h-8 w-8 text-green-600" />
          <span className="text-sm font-medium text-gray-700">Analytics</span>
        </div>
      ),
      title: "Analytics",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Code2 className="h-8 w-8 text-red-600" />
          <span className="text-sm font-medium text-gray-700">Vue.js</span>
        </div>
      ),
      title: "Vue.js",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Database className="h-8 w-8 text-orange-500" />
          <span className="text-sm font-medium text-gray-700">Laravel</span>
        </div>
      ),
      title: "Laravel",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Cloud className="h-8 w-8 text-cyan-600" />
          <span className="text-sm font-medium text-gray-700">Azure</span>
        </div>
      ),
      title: "Azure",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Globe className="h-8 w-8 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">Next.js</span>
        </div>
      ),
      title: "Next.js",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Zap className="h-8 w-8 text-yellow-500" />
          <span className="text-sm font-medium text-gray-700">GraphQL</span>
        </div>
      ),
      title: "GraphQL",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Shield className="h-8 w-8 text-red-500" />
          <span className="text-sm font-medium text-gray-700">Firebase</span>
        </div>
      ),
      title: "Firebase",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Layers className="h-8 w-8 text-purple-500" />
          <span className="text-sm font-medium text-gray-700">Redux</span>
        </div>
      ),
      title: "Redux",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <GitBranch className="h-8 w-8 text-orange-700" />
          <span className="text-sm font-medium text-gray-700">Git</span>
        </div>
      ),
      title: "Git",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Terminal className="h-8 w-8 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Linux</span>
        </div>
      ),
      title: "Linux",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Cpu className="h-8 w-8 text-blue-500" />
          <span className="text-sm font-medium text-gray-700">TensorFlow</span>
        </div>
      ),
      title: "TensorFlow",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Server className="h-8 w-8 text-green-700" />
          <span className="text-sm font-medium text-gray-700">Nginx</span>
        </div>
      ),
      title: "Nginx",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Lock className="h-8 w-8 text-indigo-500" />
          <span className="text-sm font-medium text-gray-700">JWT</span>
        </div>
      ),
      title: "JWT",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <FileText className="h-8 w-8 text-teal-600" />
          <span className="text-sm font-medium text-gray-700">Jest</span>
        </div>
      ),
      title: "Jest",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Search className="h-8 w-8 text-amber-600" />
          <span className="text-sm font-medium text-gray-700">
            Elasticsearch
          </span>
        </div>
      ),
      title: "Elasticsearch",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Code2 className="h-8 w-8 text-emerald-600" />
          <span className="text-sm font-medium text-gray-700">Go</span>
        </div>
      ),
      title: "Go",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Database className="h-8 w-8 text-rose-600" />
          <span className="text-sm font-medium text-gray-700">Redis</span>
        </div>
      ),
      title: "Redis",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Cloud className="h-8 w-8 text-violet-600" />
          <span className="text-sm font-medium text-gray-700">GCP</span>
        </div>
      ),
      title: "GCP",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Globe className="h-8 w-8 text-sky-600" />
          <span className="text-sm font-medium text-gray-700">Svelte</span>
        </div>
      ),
      title: "Svelte",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Zap className="h-8 w-8 text-lime-600" />
          <span className="text-sm font-medium text-gray-700">Webpack</span>
        </div>
      ),
      title: "Webpack",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Shield className="h-8 w-8 text-amber-700" />
          <span className="text-sm font-medium text-gray-700">SSL/TLS</span>
        </div>
      ),
      title: "SSL/TLS",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Code2 className="h-8 w-8 text-cyan-500" />
          <span className="text-sm font-medium text-gray-700">Deno</span>
        </div>
      ),
      title: "Deno",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Layers className="h-8 w-8 text-purple-600" />
          <span className="text-sm font-medium text-gray-700">Prisma</span>
        </div>
      ),
      title: "Prisma",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Cloud className="h-8 w-8 text-emerald-500" />
          <span className="text-sm font-medium text-gray-700">Vercel</span>
        </div>
      ),
      title: "Vercel",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Zap className="h-8 w-8 text-yellow-600" />
          <span className="text-sm font-medium text-gray-700">Vite</span>
        </div>
      ),
      title: "Vite",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <Server className="h-8 w-8 text-indigo-600" />
          <span className="text-sm font-medium text-gray-700">Express</span>
        </div>
      ),
      title: "Express",
    },
  ];

  const clientLogos = [
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <div className="text-2xl font-bold text-blue-600">MediCare</div>
          <span className="text-sm font-medium text-gray-700">Healthcare</span>
        </div>
      ),
      title: "MediCare Hospital",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <div className="text-2xl font-bold text-green-600">PayFlow</div>
          <span className="text-sm font-medium text-gray-700">FinTech</span>
        </div>
      ),
      title: "PayFlow Inc.",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <div className="text-2xl font-bold text-purple-600">EduLearn</div>
          <span className="text-sm font-medium text-gray-700">Education</span>
        </div>
      ),
      title: "University of Technology",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <div className="text-2xl font-bold text-orange-600">ShopMax</div>
          <span className="text-sm font-medium text-gray-700">E-commerce</span>
        </div>
      ),
      title: "ShopMax Marketplace",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <div className="text-2xl font-bold text-indigo-600">
            ManufactureIQ
          </div>
          <span className="text-sm font-medium text-gray-700">
            Manufacturing
          </span>
        </div>
      ),
      title: "ManufactureIQ",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <div className="text-2xl font-bold text-pink-600">HelpHub</div>
          <span className="text-sm font-medium text-gray-700">Non-Profit</span>
        </div>
      ),
      title: "HelpHub Non-Profit",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <div className="text-2xl font-bold text-cyan-600">TechCorp</div>
          <span className="text-sm font-medium text-gray-700">Technology</span>
        </div>
      ),
      title: "TechCorp Solutions",
    },
    {
      node: (
        <div className="flex flex-col items-center space-y-2">
          <div className="text-2xl font-bold text-red-600">InnovateLab</div>
          <span className="text-sm font-medium text-gray-700">Innovation</span>
        </div>
      ),
      title: "InnovateLab",
    },
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Our Portfolio"
        subtitle="Explore our successful projects and see how we've helped businesses transform their digital presence"
      />

      {/* Portfolio Stats */}
      <section className="py-8 max-[393px]:py-6 min-[430px]:py-10 sm:py-12 md:py-16 lg:py-20 min-[1559px]:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 max-[393px]:px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 min-[480px]:grid-cols-4 lg:grid-cols-4 min-[1559px]:grid-cols-4 gap-4 max-[393px]:gap-3 min-[430px]:gap-6 sm:gap-8 text-center">
            {[
              { number: "200+", label: "Projects Completed" },
              { number: "150+", label: "Happy Clients" },
              { number: "50+", label: "Industries Served" },
              { number: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-xl max-[393px]:text-lg min-[430px]:text-2xl min-[480px]:text-3xl md:text-4xl min-[1559px]:text-5xl font-bold text-blue-600 mb-1 max-[393px]:mb-0.5 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs max-[393px]:text-[10px] min-[430px]:text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
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
              Featured Case Studies
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Detailed look at some of our most successful projects and the
              impact they've created
            </ScrollReveal>
          </div>

          <div className="space-y-8 max-[393px]:space-y-6 min-[430px]:space-y-10 sm:space-y-12 lg:space-y-16">
            {projects.map((project) => (
              <SpotlightCard
                key={project.id}
                className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-blue-500/20"
                spotlightColor="rgba(59, 130, 246, 0.3)"
              >
                <div className="relative z-10">
                  <div className="grid grid-cols-1 min-[820px]:grid-cols-2 min-[1559px]:grid-cols-2 gap-6 max-[393px]:gap-4 min-[430px]:gap-8 sm:gap-8 min-[820px]:gap-8 p-6 max-[393px]:p-4 sm:p-8">
                    <div>
                      <div className="flex items-center mb-3 max-[393px]:mb-2 sm:mb-4">
                        <div
                          className={`w-10 h-10 max-[393px]:w-8 max-[393px]:h-8 sm:w-12 sm:h-12 rounded-full ${project.color} flex items-center justify-center mr-2 max-[393px]:mr-1.5 sm:mr-4 text-lg max-[393px]:text-base sm:text-xl font-bold`}
                        >
                          {project.image}
                        </div>
                        <div>
                          <span className="bg-gray-100 text-gray-800 px-2 max-[393px]:px-1.5 sm:px-3 py-0.5 max-[393px]:py-0 sm:py-1 rounded-full text-xs max-[393px]:text-[10px] sm:text-sm font-medium">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl md:text-2xl font-bold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                        {project.title}
                      </h3>

                      <p className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-600 mb-4 max-[393px]:mb-3 sm:mb-6">
                        {project.description}
                      </p>

                      <div className="mb-4 max-[393px]:mb-3 sm:mb-6">
                        <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-1.5 max-[393px]:gap-1 min-[430px]:gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-100 text-blue-800 px-2 max-[393px]:px-1.5 min-[430px]:px-3 py-0.5 max-[393px]:py-0 min-[430px]:py-1 rounded-full text-xs max-[393px]:text-[10px] min-[430px]:text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 max-[393px]:gap-2 min-[430px]:gap-4 sm:gap-4 mb-4 max-[393px]:mb-3 sm:mb-6">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div
                            key={key}
                            className="text-center p-2.5 max-[393px]:p-2 sm:p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="text-base max-[393px]:text-sm min-[430px]:text-lg font-bold text-blue-600">
                              {value}
                            </div>
                            <div className="text-xs max-[393px]:text-[10px] min-[430px]:text-sm text-gray-600 capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>

                      <Link
                        to={`/portfolio/${project.id}`}
                        className="inline-flex items-center text-xs max-[393px]:text-[10px] min-[430px]:text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-blue-600 hover:text-blue-700 focus:ring-blue-500"
                        aria-label={`View full case study for ${project.title}`}
                      >
                        View Full Case Study
                        <ArrowRight className="ml-1 max-[393px]:ml-0.5 min-[430px]:ml-1.5 h-3 max-[393px]:h-2.5 max-[393px]:w-2.5 min-[430px]:h-3.5 min-[430px]:w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>

                    <div className="bg-gray-800 rounded-2xl p-5 max-[393px]:p-4 sm:p-6 min-[1559px]:p-8 text-white">
                      <h4 className="text-base max-[393px]:text-sm min-[430px]:text-lg font-semibold mb-3 max-[393px]:mb-2 sm:mb-4">
                        Project Overview
                      </h4>

                      <div className="space-y-3 max-[393px]:space-y-2 sm:space-y-4">
                        <div>
                          <h5 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-blue-400 mb-1 max-[393px]:mb-0.5 sm:mb-2">
                            Challenge:
                          </h5>
                          <p className="text-gray-300 text-xs max-[393px]:text-[10px] min-[430px]:text-sm">
                            {project.challenge}
                          </p>
                        </div>

                        <div>
                          <h5 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-green-400 mb-1 max-[393px]:mb-0.5 sm:mb-2">
                            Solution:
                          </h5>
                          <p className="text-gray-300 text-xs max-[393px]:text-[10px] min-[430px]:text-sm">
                            {project.solution}
                          </p>
                        </div>

                        <div>
                          <h5 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-purple-400 mb-1 max-[393px]:mb-0.5 sm:mb-2">
                            Outcome:
                          </h5>
                          <p className="text-gray-300 text-xs max-[393px]:text-[10px] min-[430px]:text-sm">
                            {project.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
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
              Technologies We Master
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              We work with cutting-edge technologies to build robust, scalable,
              and future-proof solutions
            </ScrollReveal>
          </div>

          <div className="space-y-6 max-[393px]:space-y-4 min-[430px]:space-y-6 sm:space-y-8">
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              width="100%"
              logoHeight={80}
              gap={50}
              pauseOnHover={true}
              fadeOut={true}
              scaleOnHover={true}
              ariaLabel="Technologies we master"
              className="py-6 max-[393px]:py-4 sm:py-8"
            />

            <div className="text-center space-y-4 max-[393px]:space-y-3 sm:space-y-6">
              <p className="text-sm max-[393px]:text-xs min-[430px]:text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                We work with cutting-edge technologies to build robust,
                scalable, and future-proof solutions for our clients.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-[393px]:gap-2 min-[430px]:gap-4 justify-center items-center">
                <SwipeButton
                  className="rounded-lg"
                  firstClass="bg-blue-600 text-white px-6 max-[393px]:px-4 min-[430px]:px-6 sm:px-8 py-2.5 max-[393px]:py-2 min-[430px]:py-2.5 sm:py-3 rounded-lg text-xs max-[393px]:text-[10px] min-[430px]:text-sm sm:text-base font-semibold"
                  secondClass="bg-blue-700 text-white px-6 max-[393px]:px-4 min-[430px]:px-6 sm:px-8 py-2.5 max-[393px]:py-2 min-[430px]:py-2.5 sm:py-3 rounded-lg text-xs max-[393px]:text-[10px] min-[430px]:text-sm sm:text-base font-semibold"
                  firstContent={<>View All Technologies</>}
                  secondContent={<>View All Technologies</>}
                />
                <SwipeButton
                  className="rounded-lg"
                  firstClass="bg-transparent border-2 border-blue-600 text-blue-600 px-6 max-[393px]:px-4 min-[430px]:px-6 sm:px-8 py-2.5 max-[393px]:py-2 min-[430px]:py-2.5 sm:py-3 rounded-lg text-xs max-[393px]:text-[10px] min-[430px]:text-sm sm:text-base font-semibold"
                  secondClass="bg-blue-600 text-white border-2 border-blue-600 px-6 max-[393px]:px-4 min-[430px]:px-6 sm:px-8 py-2.5 max-[393px]:py-2 min-[430px]:py-2.5 sm:py-3 rounded-lg text-xs max-[393px]:text-[10px] min-[430px]:text-sm sm:text-base font-semibold"
                  firstContent={<>Request Tech Consultation</>}
                  secondContent={<>Request Tech Consultation</>}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
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
              Hear from the clients whose businesses we've transformed
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 min-[1559px]:grid-cols-3 gap-4 max-[393px]:gap-3 min-[430px]:gap-6 sm:gap-8">
            {[
              {
                quote:
                  "SarveSolutions transformed our healthcare operations completely. Their platform reduced our appointment scheduling time by 40% and improved patient satisfaction significantly.",
                author: "Dr. Sarah Johnson",
                role: "CEO, MediCare Hospital",
                project: "MediCare Pro Platform",
              },
              {
                quote:
                  "The payment platform they built for us processed over $50M in transactions with minimal fraud. Their attention to security and compliance was exceptional.",
                author: "Michael Chen",
                role: "CTO, PayFlow Inc.",
                project: "PayFlow Payment Platform",
              },
              {
                quote:
                  "Our online learning platform went from concept to 25,000+ students in just 7 months. The team's expertise in EdTech was evident throughout the project.",
                author: "Emily Rodriguez",
                role: "Dean, University of Technology",
                project: "EduLearn Platform",
              },
            ].map((testimonial, index) => (
              <SpotlightCard
                key={index}
                className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-blue-500/20"
                spotlightColor="rgba(59, 130, 246, 0.3)"
              >
                <div className="relative z-10 p-6 max-[393px]:p-4 sm:p-8">
                  <div className="flex items-center mb-3 max-[393px]:mb-2 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Award
                        key={i}
                        className="h-4 w-4 max-[393px]:h-3 max-[393px]:w-3 sm:h-5 sm:w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-sm max-[393px]:text-xs min-[430px]:text-base sm:text-lg text-gray-600 mb-4 max-[393px]:mb-3 sm:mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-3 max-[393px]:pt-2 sm:pt-4">
                    <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-semibold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-500 text-xs max-[393px]:text-[10px] min-[430px]:text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-blue-600 text-xs max-[393px]:text-[10px] min-[430px]:text-sm font-medium mt-0.5 max-[393px]:mt-0 sm:mt-1">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-8 max-[393px]:py-6 min-[430px]:py-10 sm:py-12 md:py-16 lg:py-20 min-[1559px]:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 max-[393px]:px-2 sm:px-6 lg:px-8">
          <div className="text-center mb-8 max-[393px]:mb-6 sm:mb-10 md:mb-12">
            <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl min-[480px]:text-2xl font-bold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-600 max-w-2xl mx-auto">
              We're proud to work with innovative companies across various
              industries
            </p>
          </div>

          <LogoLoop
            logos={clientLogos}
            speed={60}
            direction="right"
            width="100%"
            logoHeight={70}
            gap={80}
            pauseOnHover={true}
            fadeOut={true}
            scaleOnHover={true}
            ariaLabel="Client companies"
            className="py-4 max-[393px]:py-3"
          />

          <div className="text-center mt-6 max-[393px]:mt-4 sm:mt-8">
            <SwipeButton
              className="rounded-xl"
              firstClass="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 max-[393px]:px-4 min-[430px]:px-6 sm:px-10 py-3 max-[393px]:py-2 min-[430px]:py-3 sm:py-4 rounded-xl text-sm max-[393px]:text-xs min-[430px]:text-sm sm:text-lg font-bold"
              secondClass="bg-gradient-to-r from-blue-700 to-purple-700 text-white px-6 max-[393px]:px-4 min-[430px]:px-6 sm:px-10 py-3 max-[393px]:py-2 min-[430px]:py-3 sm:py-4 rounded-xl text-sm max-[393px]:text-xs min-[430px]:text-sm sm:text-lg font-bold"
              firstContent={<>Become Our Next Success Story</>}
              secondContent={<>Become Our Next Success Story</>}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ReadyToTransformCTA />
    </div>
  );
};

export default Portfolio;
