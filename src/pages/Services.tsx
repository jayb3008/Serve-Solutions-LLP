import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Code,
  Smartphone,
  Globe,
  Server,
  Layers,
  Database,
  Rocket,
  Search,
  LineChart,
  ShieldCheck,
  Clock,
  Headphones,
  CheckCircle2,
} from "lucide-react";

interface ServiceProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  imageSrc: string;
  reverseLayout?: boolean;
  delay?: number;
}

const ServiceSection = ({
  id,
  icon,
  title,
  description,
  features,
  technologies,
  imageSrc,
  reverseLayout = false,
  delay = 0,
}: ServiceProps) => (
  <section
    id={id}
    className="py-20 border-b border-gray-200 dark:border-gray-800"
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          reverseLayout ? "lg:flex-row-reverse" : ""
        }`}
      >
        <ScrollReveal
          animation="slide-in"
          delay={delay}
          className={`order-2 ${reverseLayout ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-brand-blue/10 via-brand-teal/10 to-brand-purple/10 rounded-xl transform rotate-2"></div>
            <img
              src={imageSrc}
              alt={title}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal
          animation="fade-in"
          delay={delay}
          className={`order-1 ${reverseLayout ? "lg:order-2" : "lg:order-1"}`}
        >
          <div className="flex items-center mb-4">
            <div className="bg-brand-lightBlue dark:bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center mr-4 text-brand-blue dark:text-brand-teal">
              {icon}
            </div>
            <h2 className="text-3xl font-bold">{title}</h2>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            {description}
          </p>

          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-brand-blue mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-200">{feature}</p>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-4">Technologies We Use</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <Button asChild>
            <Link to="/contact">Discuss Your Project</Link>
          </Button>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      id: "web-development",
      icon: <Code size={24} />,
      title: "Web Development",
      description:
        "Custom websites and web applications tailored to your specific business needs. From responsive designs to complex web platforms, we create solutions that engage users and drive conversions.",
      features: [
        "Responsive design that works across all devices",
        "Custom CMS integration for easy content management",
        "E-commerce functionality with secure payment processing",
        "Performance optimization for fast loading speeds",
        "Accessibility compliance and SEO best practices",
      ],
      technologies: [
        "React",
        "Vue.js",
        "Angular",
        "Node.js",
        "PHP",
        "WordPress",
        "Shopify",
        "Next.js",
      ],
      imageSrc:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1564&auto=format&fit=crop",
    },
    {
      id: "mobile-apps",
      icon: <Smartphone size={24} />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that provide seamless user experiences across iOS and Android devices. We build apps that are both beautiful and functional.",
      features: [
        "Native iOS and Android app development",
        "Cross-platform solutions for wider reach",
        "Offline functionality and data synchronization",
        "Push notifications and user engagement features",
        "Integration with device features (camera, GPS, etc.)",
      ],
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "Redux",
        "GraphQL",
      ],
      imageSrc:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop",
      reverseLayout: true,
    },
    {
      id: "cms-development",
      icon: <Globe size={24} />,
      title: "CMS Development",
      description:
        "Custom content management systems that give you complete control over your digital content. We build solutions that make content creation and management intuitive and efficient.",
      features: [
        "Custom admin dashboards tailored to your workflow",
        "User role management and access controls",
        "Content versioning and scheduling capabilities",
        "Media library with advanced asset management",
        "Multilingual support for global businesses",
      ],
      technologies: [
        "WordPress",
        "Strapi",
        "Sanity",
        "Contentful",
        "Drupal",
        "Custom CMS",
        "Headless CMS",
      ],
      imageSrc:
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: "api-development",
      icon: <Server size={24} />,
      title: "API Development",
      description:
        "Robust and scalable API services that enable seamless communication between different software systems. We create well-documented APIs that help integrate your existing systems.",
      features: [
        "RESTful and GraphQL API design and implementation",
        "Microservices architecture for scalability",
        "API documentation and developer resources",
        "Authentication and security best practices",
        "Performance optimization and caching strategies",
      ],
      technologies: [
        "Node.js",
        "Express",
        "Django",
        "Laravel",
        "GraphQL",
        "REST",
        "Swagger",
        "JSON Web Tokens",
      ],
      imageSrc:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1470&auto=format&fit=crop",
      reverseLayout: true,
    },
    {
      id: "ui-ux-design",
      icon: <Layers size={24} />,
      title: "UI/UX Design",
      description:
        "User-centered design that creates intuitive, engaging, and accessible digital experiences. We focus on understanding your users' needs and translating them into elegant design solutions.",
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Visual design and branding consistency",
        "Usability testing and iteration",
        "Design systems for scalable products",
      ],
      technologies: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "InVision",
        "Principle",
        "Framer",
        "Usability Testing",
      ],
      imageSrc:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: "devops-cloud",
      icon: <Database size={24} />,
      title: "DevOps & Cloud Services",
      description:
        "Streamlined deployment, monitoring, and maintenance of your applications in the cloud. We ensure your systems are reliable, secure, and optimized for performance.",
      features: [
        "Cloud infrastructure setup and optimization",
        "Continuous integration and deployment pipelines",
        "Monitoring and alerting systems",
        "Security audits and implementation",
        "Backup and disaster recovery solutions",
      ],
      technologies: [
        "AWS",
        "Google Cloud",
        "Microsoft Azure",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Terraform",
        "GitHub Actions",
      ],
      imageSrc:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1528&auto=format&fit=crop",
      reverseLayout: true,
    },
  ];

  const processSteps = [
    {
      icon: <Clock size={24} />,
      title: "Discovery & Planning",
      description:
        "We start by understanding your business objectives, target audience, and project requirements to create a detailed roadmap.",
    },
    {
      icon: <Layers size={24} />,
      title: "Design & Prototyping",
      description:
        "Our design team creates wireframes and interactive prototypes that visualize the user experience before development begins.",
    },
    {
      icon: <Code size={24} />,
      title: "Development",
      description:
        "Our engineers build your solution using the latest technologies and best practices for clean, maintainable code.",
    },
    {
      icon: <Search size={24} />,
      title: "Testing & QA",
      description:
        "Rigorous testing ensures your product is bug-free, secure, and provides an excellent user experience across all devices.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Deployment",
      description:
        "We carefully launch your solution and ensure a smooth transition to the live environment.",
    },
    {
      icon: <Headphones size={24} />,
      title: "Support & Maintenance",
      description:
        "Our relationship continues with ongoing support, updates, and improvements to keep your solution running optimally.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-brand-lightBlue to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal animation="fade-in">
                <span className="bg-brand-blue/10 text-brand-blue text-sm font-medium py-1 px-3 rounded-full">
                  Our Services
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                  Comprehensive Digital Solutions
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  From concept to deployment, we provide end-to-end services to
                  bring your digital vision to life with expertise and
                  precision.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services Highlight */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 3).map((service, index) => (
                <ScrollReveal
                  key={index}
                  animation="slide-up"
                  delay={index * 100}
                  className="bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <a href={`#${service.id}`} className="block p-6">
                    <div className="bg-brand-lightBlue dark:bg-gray-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-brand-blue dark:text-brand-teal">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                      {service.description}
                    </p>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        {services.map((service, index) => (
          <ServiceSection
            key={index}
            id={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={service.features}
            technologies={service.technologies}
            imageSrc={service.imageSrc}
            reverseLayout={service.reverseLayout}
            delay={0}
          />
        ))}

        {/* Our Process */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <ScrollReveal animation="fade-in">
                <span className="bg-brand-teal/10 text-brand-teal text-sm font-medium py-1 px-3 rounded-full">
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                  How We Work
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Our proven development approach ensures transparent
                  communication and successful project delivery.
                </p>
              </ScrollReveal>
            </div>

            <div className="relative">
              {/* Process line */}
              <div className="hidden md:block absolute left-1/2 top-24 bottom-24 w-1 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

              <div className="space-y-12 md:space-y-0 grid md:grid-cols-2 gap-x-12 gap-y-16">
                {processSteps.map((step, index) => (
                  <ScrollReveal
                    key={index}
                    animation="fade-in"
                    delay={index * 100}
                    className={`relative ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 relative">
                      <div
                        className={`hidden md:flex absolute top-12 ${
                          index % 2 === 0
                            ? "right-0 transform translate-x-1/2"
                            : "left-0 transform -translate-x-1/2"
                        } items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-4 border-brand-blue dark:border-brand-teal z-10`}
                      >
                        <span className="text-xl font-bold">{index + 1}</span>
                      </div>

                      <div className="md:hidden mb-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-700 border-2 border-brand-blue dark:border-brand-teal text-brand-blue dark:text-brand-teal">
                        <span className="text-lg font-bold">{index + 1}</span>
                      </div>

                      <div className="flex items-center mb-4 md:mb-6">
                        <div
                          className={`bg-brand-lightBlue dark:bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center text-brand-blue dark:text-brand-teal ${
                            index % 2 === 0 ? "md:order-last md:ml-4" : "mr-4"
                          }`}
                        >
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-brand-blue to-brand-purple rounded-2xl overflow-hidden shadow-xl">
              <div className="px-6 py-16 md:px-12 text-center text-white">
                <ScrollReveal animation="fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Start Your Project?
                  </h2>
                  <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-10">
                    Let's discuss how we can help you achieve your business
                    goals with our custom technology solutions.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    variant="default"
                    className="bg-white text-brand-darkBlue hover:bg-gray-100 rounded-full"
                  >
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
