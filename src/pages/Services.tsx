import React from 'react';
import { Code2, Smartphone, Globe, Palette, Search, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "We create responsive, secure, and scalable websites using modern frameworks like React, Next.js, and Node.js. From corporate sites to eCommerce platforms, we deliver digital experiences that convert.",
      features: [
        "Responsive Design",
        "Modern Frameworks (React, Next.js)",
        "SEO Optimized",
        "Fast Performance",
        "Secure Architecture",
        "Cross-browser Compatibility"
      ],
      color: "blue",
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS & Android built with React Native and Flutter. Intuitive designs, seamless performance, and scalable architecture.",
      features: [
        "Cross-platform Development",
        "Native Performance",
        "Intuitive UI/UX",
        "Push Notifications",
        "Offline Functionality",
        "App Store Optimization"
      ],
      color: "purple",
      technologies: ["React Native", "Flutter", "iOS", "Android", "Firebase"]
    },
    {
      icon: Globe,
      title: "CMS Development",
      description: "Custom CMS, WordPress, and Shopify solutions tailored to your business needs. Easy-to-manage, flexible, and built for growth.",
      features: [
        "Custom CMS Solutions",
        "WordPress Development",
        "Shopify Integration",
        "Content Management",
        "E-commerce Solutions",
        "Third-party Integrations"
      ],
      color: "green",
      technologies: ["WordPress", "Shopify", "Custom CMS", "WooCommerce", "Magento"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "We design engaging digital experiences. From wireframes to prototypes, we craft intuitive interfaces that keep users hooked.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "User Testing",
        "Responsive Design",
        "Design Systems"
      ],
      color: "pink",
      technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle"]
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "End-to-end SEO services: keyword research, on-page optimization, technical SEO, and link building strategies to improve ranking and drive traffic.",
      features: [
        "Keyword Research",
        "On-page Optimization",
        "Technical SEO",
        "Link Building",
        "Content Strategy",
        "Performance Tracking"
      ],
      color: "orange",
      technologies: ["Google Analytics", "Search Console", "SEMrush", "Ahrefs", "Screaming Frog"]
    }
  ];

  return (
    <div className="pt-[4.5rem]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth and digital transformation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex p-4 rounded-xl bg-${service.color}-100 mb-6`}>
                    <service.icon className={`h-10 w-10 text-${service.color}-600`} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                  
                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className={`h-5 w-5 text-${service.color}-600 flex-shrink-0`} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 bg-${service.color}-100 text-${service.color}-700 rounded-full text-sm font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className={`inline-flex items-center bg-${service.color}-600 text-white px-6 py-3 rounded-lg hover:bg-${service.color}-700 transition-colors duration-300`}>
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className={`bg-gradient-to-br from-${service.color}-100 to-${service.color}-200 p-8 rounded-2xl`}>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <service.icon className={`h-16 w-16 text-${service.color}-600 mx-auto mb-6`} />
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                        <p className="text-gray-600">
                          Professional {service.title.toLowerCase()} services tailored to your business needs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We understand your needs, goals, and target audience" },
              { step: "02", title: "Planning", description: "Strategic planning and technical architecture design" },
              { step: "03", title: "Development", description: "Agile development with regular progress updates" },
              { step: "04", title: "Launch", description: "Testing, deployment, and ongoing support" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-600 font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution that fits your needs
          </p>
          <button className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;