
import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-brand-lightBlue to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal animation="fade-in">
                <span className="bg-brand-teal/10 text-brand-teal text-sm font-medium py-1 px-3 rounded-full">Contact Us</span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Let's Start a Conversation</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We offer IT and digital solutions for your business needs. Reach out to us and ignite your company’s growth.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal animation="slide-up" delay={0} className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue/10 text-brand-blue mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Have questions? Call us directly</p>
                <a href="tel:9904055986" className="text-brand-blue font-medium hover:underline">99040 55986</a>
              </ScrollReveal>
              
              <ScrollReveal animation="slide-up" delay={100} className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-teal/10 text-brand-teal mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Send us an email anytime</p>
                <a href="mailto:jaydev3008@gmail.com" className="text-brand-blue font-medium hover:underline">jaydev3008@gmail.com</a>
              </ScrollReveal>
              
              <ScrollReveal animation="slide-up" delay={200} className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-purple/10 text-brand-purple mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">We're available</p>
                <p className="text-brand-blue font-medium">Monday-Friday: 9AM-6PM</p>
                <p className="text-brand-blue font-medium">24/7 Availability</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ScrollReveal animation="fade-in">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  
                  {formSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Thank you for contacting us. We'll get back to you as soon as possible.
                      </p>
                      <Button onClick={() => setFormSubmitted(false)}>Send Another Message</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Your Name
                          </label>
                          <Input 
                            id="name" 
                            placeholder="John Doe" 
                            required 
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Email Address
                          </label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="john@example.com" 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Subject
                        </label>
                        <Input 
                          id="subject" 
                          placeholder="How can we help you?" 
                          required 
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Message
                        </label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your project..." 
                          rows={5} 
                          required 
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Service You're Interested In
                        </label>
                        <select 
                          id="service" 
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-apps">Mobile App Development</option>
                          <option value="cms-development">CMS Development</option>
                          <option value="api-development">API Development</option>
                          <option value="ui-ux-design">UI/UX Design</option>
                          <option value="devops-cloud">DevOps & Cloud Services</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-5 w-5" /> Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-in" delay={200}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 h-full">
                  <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                  <div className="mb-6 aspect-video rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps?q=b-2,+gokuldham+greens,+Bhavanipura,+Petlad,+Anand&output=embed"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Company Location"
                    ></iframe>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Main Office</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          b-2, gokuldham greens, Bhavanipura, Petlad, Anand
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          99040 55986
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          jaydev3008@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <ScrollReveal animation="fade-in">
                <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">What is your typical project process?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our process typically involves discovery, planning, design, development, testing, and deployment phases. We maintain transparent communication throughout the entire process to ensure your vision is realized.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">How long does it take to complete a project?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex application could take several months. We'll provide a detailed timeline during the planning phase.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Do you provide ongoing support after launch?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Yes, we offer various support and maintenance packages to ensure your application continues to run smoothly after launch. We can handle updates, security patches, and feature enhancements.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">What information do you need to provide a quote?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      To provide an accurate quote, we typically need to understand your project goals, features, timeline expectations, and any specific technical requirements. The more detail you can provide, the more precise our estimate will be.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

