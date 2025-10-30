import { Link } from "react-router-dom";
import {
  Star,
  ArrowRight,
  Award,
  Users,
  Globe,
  Heart,
  DollarSign,
  Target,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import ScrollFloat from "../components/ScrollFloat";
import ScrollReveal from "../components/ScrollReveal";
import ReadyToTransformCTA from "../components/ReadyToTransformCTA";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "SarveSolutions transformed our healthcare operations completely. Their platform reduced our appointment scheduling time by 40% and improved patient satisfaction significantly. The team's attention to detail and understanding of healthcare compliance was exceptional.",
      author: "Dr. Sarah Johnson",
      role: "CEO",
      company: "MediCare Hospital",
      project: "MediCare Pro Platform",
      industry: "Healthcare",
      image: "SJ",
      color: "bg-red-100 text-red-600",
      rating: 5,
      metrics: {
        efficiency: "40%",
        satisfaction: "95%",
        timeline: "6 months",
      },
    },
    {
      id: 2,
      quote:
        "The payment platform they built for us processed over $50M in transactions with minimal fraud. Their attention to security and compliance was exceptional. We couldn't have achieved this level of success without their expertise.",
      author: "Michael Chen",
      role: "CTO",
      company: "PayFlow Inc.",
      project: "PayFlow Payment Platform",
      industry: "FinTech",
      image: "MC",
      color: "bg-green-100 text-green-600",
      rating: 5,
      metrics: {
        transactions: "$50M+",
        fraudRate: "0.1%",
        uptime: "99.9%",
      },
    },
    {
      id: 3,
      quote:
        "Our online learning platform went from concept to 25,000+ students in just 7 months. The team's expertise in EdTech was evident throughout the project. They understood our needs and delivered beyond our expectations.",
      author: "Emily Rodriguez",
      role: "Dean",
      company: "University of Technology",
      project: "EduLearn Platform",
      industry: "EdTech",
      image: "ER",
      color: "bg-purple-100 text-purple-600",
      rating: 5,
      metrics: {
        students: "25,000+",
        courses: "500+",
        completion: "85%",
      },
    },
    {
      id: 4,
      quote:
        "The marketplace platform they developed helped us scale from a single-vendor store to 1,000+ vendors. Sales increased by 300% while maintaining excellent performance. Their technical expertise and business understanding made all the difference.",
      author: "David Kim",
      role: "Founder",
      company: "ShopMax",
      project: "E-commerce Marketplace",
      industry: "E-commerce",
      image: "DK",
      color: "bg-blue-100 text-blue-600",
      rating: 5,
      metrics: {
        vendors: "1,000+",
        products: "50,000+",
        sales: "300%",
      },
    },
    {
      id: 5,
      quote:
        "Their IoT platform revolutionized our manufacturing operations. We improved production efficiency by 25% and reduced downtime by 60%. The ROI was incredible, and the ongoing support has been outstanding.",
      author: "Lisa Wang",
      role: "Operations Director",
      company: "ManufactureIQ",
      project: "Industrial IoT Platform",
      industry: "Manufacturing",
      image: "LW",
      color: "bg-orange-100 text-orange-600",
      rating: 5,
      metrics: {
        efficiency: "25%",
        downtime: "60%",
        savings: "$2M+",
      },
    },
    {
      id: 6,
      quote:
        "The volunteer management platform they created helped us coordinate 5,000+ volunteers across 200+ events. Volunteer engagement increased by 150%, and we secured 40% more funding through better impact reporting.",
      author: "Alex Thompson",
      role: "Executive Director",
      company: "HelpHub Non-Profit",
      project: "Volunteer Management Platform",
      industry: "Non-Profit",
      image: "AT",
      color: "bg-pink-100 text-pink-600",
      rating: 5,
      metrics: {
        volunteers: "5,000+",
        events: "200+",
        engagement: "150%",
      },
    },
  ];

  const stats = [
    {
      number: "150+",
      label: "Happy Clients",
      description: "Companies that trust us with their digital transformation",
    },
    {
      number: "200+",
      label: "Projects Delivered",
      description: "Successful projects across various industries",
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      description: "Clients who would recommend us to others",
    },
    {
      number: "5+",
      label: "Years Experience",
      description: "Delivering exceptional technology solutions",
    },
  ];

  const industries = [
    {
      name: "Healthcare",
      clients: 25,
      icon: Heart,
      color: "bg-red-100 text-red-600",
    },
    {
      name: "FinTech",
      clients: 18,
      icon: DollarSign,
      color: "bg-green-100 text-green-600",
    },
    {
      name: "E-commerce",
      clients: 32,
      icon: Globe,
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "EdTech",
      clients: 15,
      icon: Users,
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: "Manufacturing",
      clients: 12,
      icon: Target,
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "Non-Profit",
      clients: 8,
      icon: Heart,
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Client Testimonials"
        subtitle="Hear from our clients about their success stories and the impact we've made on their businesses"
      />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat containerClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </ScrollFloat>
            <ScrollReveal containerClassName="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The results speak for themselves
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat containerClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </ScrollFloat>
            <ScrollReveal containerClassName="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients
            </ScrollReveal>
          </div>

          <div className="space-y-12">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center mr-4 text-xl font-bold`}
                      >
                        {testimonial.image}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {testimonial.author}
                        </h3>
                        <p className="text-gray-600">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    <blockquote className="text-lg text-gray-700 mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center text-sm text-gray-500">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full mr-3">
                        {testimonial.industry}
                      </span>
                      <span className="font-medium">{testimonial.project}</span>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-2xl p-6 text-white">
                    <h4 className="text-lg font-semibold mb-4">Key Results</h4>
                    <div className="space-y-3">
                      {Object.entries(testimonial.metrics).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between items-center"
                          >
                            <span className="text-gray-300 capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}:
                            </span>
                            <span className="font-semibold text-green-400">
                              {value}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat containerClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </ScrollFloat>
            <ScrollReveal containerClassName="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Testimonials from across all industries
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="border-t pt-4">
                  <div className="flex items-center mb-2">
                    <div
                      className={`w-8 h-8 rounded-full ${testimonial.color} flex items-center justify-center mr-3 text-sm font-bold`}
                    >
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {testimonial.industry}
                    </span>
                    <span className="text-gray-500">{testimonial.project}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat containerClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </ScrollFloat>
            <ScrollReveal containerClassName="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by companies across diverse industries
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-full ${industry.color} mb-3`}
                >
                  <industry.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {industry.clients} clients
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat containerClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </ScrollFloat>
            <ScrollReveal containerClassName="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Industry recognition for our commitment to excellence
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Best Tech Startup 2023",
                organization: "TechCrunch",
                description:
                  "Recognized for innovation in healthcare technology",
                icon: Award,
              },
              {
                title: "Top Development Agency",
                organization: "Clutch",
                description: "Ranked among top development agencies globally",
                icon: Award,
              },
              {
                title: "Excellence in Design",
                organization: "Awwwards",
                description: "Awarded for outstanding UI/UX design work",
                icon: Award,
              },
              {
                title: "Client Satisfaction Leader",
                organization: "GoodFirms",
                description:
                  "Highest client satisfaction ratings in our category",
                icon: Award,
              },
            ].map((award, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-2xl"
              >
                <div className="inline-flex p-4 rounded-full bg-yellow-100 mb-4">
                  <award.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {award.title}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {award.organization}
                </p>
                <p className="text-gray-600 text-sm">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollFloat containerClassName="text-4xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </ScrollFloat>
          <ScrollReveal containerClassName="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve
            similar results.
          </ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              View Our Work
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

export default Testimonials;
