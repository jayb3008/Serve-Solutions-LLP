import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Users, Award } from "lucide-react";
import HeroSection from "../components/HeroSection";
import ScrollFloat from "../components/ScrollFloat";
import ScrollReveal from "../components/ScrollReveal";
import ReadyToTransformCTA from "../components/ReadyToTransformCTA";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwJcNux31f9BKHcOUF2vnc-Urkw7zyVmldPaVZffQUICoOqIQkyfP-v5GraM4EiLtm1TQ/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
      if (result.status === "success") {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      <HeroSection
        title="Get In Touch"
        subtitle="We'd love to discuss your next project. Reach out today and let's create something amazing together!"
      />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
                containerClassName="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8"
              >
                Contact Information
              </ScrollFloat>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl shadow-lg">
                    <Mail className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Email
                    </h3>
                    <p className="text-lg text-gray-700 font-medium">
                      contact@sarvesolutions.in
                    </p>
                    <p className="text-base text-gray-600 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl shadow-lg">
                    <Phone className="h-7 w-7 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Phone
                    </h3>
                    <p className="text-lg text-gray-700 font-medium">
                      +91-9904055986
                    </p>
                    <p className="text-base text-gray-600 mt-1">
                      Mon-Fri 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-green-100 to-green-50 rounded-xl shadow-lg">
                    <MapPin className="h-7 w-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Office
                    </h3>
                    <p className="text-lg text-gray-700 font-medium">
                      Anand, Gujarat
                    </p>
                    <p className="text-base text-gray-600 mt-1">
                      Visit us by appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Why Choose Us?
                </h3>
                <div className="space-y-5">
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <span className="text-lg text-gray-700 font-medium">
                      24-hour response time
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Users className="h-6 w-6 text-purple-600 flex-shrink-0" />
                    <span className="text-lg text-gray-700 font-medium">
                      5+ years experience
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Award className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-lg text-gray-700 font-medium">
                      100% client satisfaction
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                  containerClassName="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                >
                  Send us a Message
                </ScrollFloat>
                <ScrollReveal
                  baseOpacity={0.2}
                  enableBlur={true}
                  baseRotation={2}
                  blurStrength={8}
                  containerClassName="mb-8"
                  textClassName="text-base md:text-lg text-gray-600 leading-relaxed font-normal"
                >
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </ScrollReveal>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-base font-semibold text-gray-900 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-base font-semibold text-gray-900 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-base font-semibold text-gray-900 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-base"
                    >
                      <option value="">Select a service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">
                        Mobile App Development
                      </option>
                      <option value="CMS Development">CMS Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="SEO Services">SEO Services</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-base font-semibold text-gray-900 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none text-base"
                      placeholder="Tell us about your project requirements, timeline, and any specific details..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Send className="h-6 w-6" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Frequently Asked Questions
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-2xl mx-auto"
              textClassName="text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Get answers to the most common questions about our services
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity. Web development projects typically take 4-8 weeks, while mobile apps can take 8-16 weeks.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes, we offer comprehensive support and maintenance packages to keep your digital solutions running smoothly after launch.",
              },
              {
                question: "What's your development process?",
                answer:
                  "We follow an agile methodology with regular updates, starting with discovery, then planning, development, testing, and launch.",
              },
              {
                question: "Can you help with existing projects?",
                answer:
                  "Absolutely! We can help improve, maintain, or completely redesign existing websites and applications.",
              },
              {
                question: "What are your payment terms?",
                answer:
                  "We typically work with a 50% upfront payment and 50% upon project completion, with milestone payments for larger projects.",
              },
              {
                question: "Do you work with international clients?",
                answer:
                  "Yes, we serve clients globally and are experienced in working across different time zones and requirements.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {faq.answer}
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

export default Contact;
