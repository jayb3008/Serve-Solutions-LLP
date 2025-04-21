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
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
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
    </div>
  );
};

export function ServicesSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);

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

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Cards animation with stagger
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );

    // Button animation
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            </div>
          ))}
        </div>

        <div ref={buttonRef} className="mt-16 text-center">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
