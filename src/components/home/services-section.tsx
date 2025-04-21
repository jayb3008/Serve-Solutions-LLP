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
  ArrowRight,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  link: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  delay,
  link,
}: ServiceCardProps) => (
  <ScrollReveal
    animation="slide-up"
    delay={delay}
    className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 via-brand-teal/10 to-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <div className="bg-brand-lightBlue dark:bg-gray-700 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-brand-blue dark:text-brand-teal group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-brand-blue hover:text-brand-purple font-medium transition-colors duration-200"
      >
        Learn More <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  </ScrollReveal>
);

export function ServicesSection() {
  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      description:
        "Responsive websites tailored to your brand with modern frameworks like React, Angular, or Vue.js.",
      link: "/services#web-development",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android using Flutter or React Native.",
      link: "/services#mobile-apps",
    },
    {
      icon: <Globe size={24} />,
      title: "CMS Development",
      description:
        "Custom content management systems or integration with platforms like WordPress or Strapi.",
      link: "/services#cms-development",
    },
    {
      icon: <Server size={24} />,
      title: "API Development",
      description:
        "RESTful API services and microservices architecture for seamless integration across platforms.",
      link: "/services#api-development",
    },
    {
      icon: <Layers size={24} />,
      title: "UI/UX Design",
      description:
        "User-centered design that enhances usability and creates engaging digital experiences.",
      link: "/services#ui-ux-design",
    },
    {
      icon: <Database size={24} />,
      title: "DevOps & Cloud",
      description:
        "Deployment, monitoring, and maintenance of applications on AWS, Azure, or Google Cloud.",
      link: "/services#devops-cloud",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-in">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-brand-blue/10 text-brand-blue text-sm font-medium py-1 px-3 rounded-full">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              We provide end-to-end services to bring your ideas to life, from
              concept to deployment and beyond.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100 + 200}
              link={service.link}
            />
          ))}
        </div>

        <ScrollReveal
          animation="fade-in"
          delay={800}
          className="mt-16 text-center"
        >
          <Button asChild size="lg" className="rounded-full">
            <Link to="/services">View All Services</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
