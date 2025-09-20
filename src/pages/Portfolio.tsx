import React, { useState } from 'react';
import { ExternalLink, Github, Code2, Smartphone, Globe, Palette, Search } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Corporate Website",
      category: "web",
      description: "Modern corporate website built with React and Next.js, featuring responsive design and optimized performance.",
      image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      type: "Web Development",
      icon: Code2,
      color: "blue"
    },
    {
      id: 2,
      title: "E-commerce Store",
      category: "cms",
      description: "Full-featured e-commerce platform with Shopify integration and custom CMS for inventory management.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Custom CMS", "JavaScript", "CSS3"],
      type: "CMS Development",
      icon: Globe,
      color: "green"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "mobile",
      description: "Secure and intuitive mobile banking application built with React Native for iOS and Android platforms.",
      image: "https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      type: "Mobile App Development",
      icon: Smartphone,
      color: "purple"
    },
    {
      id: 4,
      title: "SaaS Platform Redesign",
      category: "design",
      description: "Complete UI/UX redesign for a SaaS platform, improving user experience and conversion rates by 40%.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Figma", "Adobe XD", "Principle", "User Research"],
      type: "UI/UX Design",
      icon: Palette,
      color: "pink"
    },
    {
      id: 5,
      title: "Global Brand SEO Campaign",
      category: "seo",
      description: "Comprehensive SEO campaign that increased organic traffic by 250% and improved search rankings significantly.",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Google Analytics", "SEMrush", "Content Strategy", "Link Building"],
      type: "SEO Services",
      icon: Search,
      color: "orange"
    },
    {
      id: 6,
      title: "Healthcare Portal",
      category: "web",
      description: "Patient management system with appointment booking, medical records, and telemedicine capabilities.",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      type: "Web Development",
      icon: Code2,
      color: "blue"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'cms', label: 'CMS Development' },
    { key: 'design', label: 'UI/UX Design' },
    { key: 'seo', label: 'SEO' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-[4.5rem]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Portfolio</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our latest projects and see how we've helped businesses achieve their digital goals
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <button className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors">
                        <ExternalLink className="h-5 w-5 text-gray-900" />
                      </button>
                      <button className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors">
                        <Github className="h-5 w-5 text-gray-900" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`inline-flex p-2 rounded-lg bg-${project.color}-100 mr-3`}>
                      <project.icon className={`h-5 w-5 text-${project.color}-600`} />
                    </div>
                    <span className={`text-${project.color}-600 font-medium text-sm`}>
                      {project.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className={`w-full bg-${project.color}-600 text-white py-3 rounded-lg hover:bg-${project.color}-700 transition-colors duration-300 font-medium`}>
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing for your business
          </p>
          <button className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Start Your Project
            <ExternalLink className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;