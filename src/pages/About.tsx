import React from 'react';
import { Target, Eye, Heart, Calendar, Users, Code2, Palette, Search } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-[4.5rem]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About SarveSolutions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Empowering businesses with innovative digital solutions since 2021
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6">
                SarveSolutions is a full-service digital solutions company committed to helping businesses thrive in the digital era. From cutting-edge web apps to user-friendly mobile solutions, we empower brands with technology-driven growth.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of experienced developers, designers, and digital strategists work together to deliver solutions that not only meet your current needs but also scale with your future ambitions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl text-center">
                  <Code2 className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900">Development</h3>
                </div>
                <div className="bg-white p-6 rounded-xl text-center">
                  <Palette className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900">Design</h3>
                </div>
                <div className="bg-white p-6 rounded-xl text-center">
                  <Search className="h-8 w-8 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900">SEO</h3>
                </div>
                <div className="bg-white p-6 rounded-xl text-center">
                  <Users className="h-8 w-8 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900">Consulting</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="inline-flex p-4 rounded-full bg-blue-100 mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600">
                Deliver world-class digital solutions that combine innovation, design, and performance to help businesses achieve their goals.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="inline-flex p-4 rounded-full bg-purple-100 mb-6">
                <Eye className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600">
                To become a trusted global partner for digital transformation, empowering businesses worldwide with cutting-edge technology.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="inline-flex p-4 rounded-full bg-red-100 mb-6">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Values</h3>
              <p className="text-gray-600">
                Integrity, Innovation, and Customer Success guide everything we do, ensuring exceptional results and lasting partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a trusted digital partner
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {[
                {
                  year: "2021",
                  title: "Founded",
                  description: "Founded with a focus on web development and digital solutions."
                },
                {
                  year: "2022",
                  title: "Expansion",
                  description: "Expanded into mobile app and CMS solutions, serving more clients."
                },
                {
                  year: "2023",
                  title: "Growth",
                  description: "Established design & SEO services, building a comprehensive service portfolio."
                },
                {
                  year: "Today",
                  title: "Global Reach",
                  description: "Serving clients worldwide with complete digital solutions and innovation."
                }
              ].map((milestone, index) => (
                <div
                  key={index}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'md:text-right'
                  }`}
                >
                  <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                      <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full ${
                    index % 2 === 0 ? 'md:left-1/2' : 'md:left-1/2'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the talented professionals behind SarveSolutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "CEO/Founder",
                role: "Chief Executive Officer",
                description: "Visionary leader driving innovation and growth",
                color: "blue"
              },
              {
                name: "Project Manager",
                role: "Project Management",
                description: "Ensuring timely delivery and quality execution",
                color: "purple"
              },
              {
                name: "Lead Developer",
                role: "Development Team",
                description: "Building robust and scalable applications",
                color: "green"
              },
              {
                name: "Design Lead",
                role: "UI/UX & SEO",
                description: "Creating beautiful experiences and driving visibility",
                color: "orange"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className={`w-20 h-20 bg-${member.color}-100 rounded-full mx-auto mb-6 flex items-center justify-center`}>
                  <Users className={`h-10 w-10 text-${member.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className={`text-${member.color}-600 font-semibold mb-4`}>{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;