
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { 
  Users, 
  Award, 
  Target, 
  CheckCircle2, 
  Briefcase, 
  ThumbsUp, 
  HeartHandshake,
  Globe
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Briefcase className="h-6 w-6 text-brand-blue" />, value: 100, suffix: "+", label: "Projects Completed" },
    { icon: <Users className="h-6 w-6 text-brand-teal" />, value: 50, suffix: "+", label: "Happy Clients" },
    { icon: <Globe className="h-6 w-6 text-brand-purple" />, value: 15, suffix: "+", label: "Countries Served" },
    { icon: <Award className="h-6 w-6 text-brand-blue" />, value: 10, suffix: "+", label: "Years Experience" },
  ];

  const values = [
    {
      icon: <Target className="h-12 w-12 text-brand-blue mb-4" />,
      title: "Innovation",
      description: "We push boundaries to create cutting-edge solutions that give our clients a competitive edge."
    },
    {
      icon: <CheckCircle2 className="h-12 w-12 text-brand-teal mb-4" />,
      title: "Quality",
      description: "We maintain the highest standards in our code, designs, and client interactions."
    },
    {
      icon: <HeartHandshake className="h-12 w-12 text-brand-purple mb-4" />,
      title: "Partnership",
      description: "We view ourselves as an extension of your team, committed to your long-term success."
    },
    {
      icon: <ThumbsUp className="h-12 w-12 text-brand-blue mb-4" />,
      title: "Transparency",
      description: "We believe in open communication and keeping you informed at every stage."
    },
  ];

  const team = [
    {
      name: "Alex Johnson",
      position: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      description: "15+ years of experience in software development and team leadership."
    },
    {
      name: "Sophia Chen",
      position: "CTO",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      description: "Expert in cloud architecture and emerging technologies."
    },
    {
      name: "Marcus Williams",
      position: "Lead Developer",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      description: "Full-stack developer specializing in React and Node.js."
    },
    {
      name: "Olivia Rodriguez",
      position: "UX/UI Designer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      description: "Creates intuitive and beautiful user experiences."
    },
  ];

  const timeline = [
    {
      year: "2014",
      title: "Founded",
      description: "WebFlow Architects was established with a mission to create custom digital solutions."
    },
    {
      year: "2016",
      title: "Team Expansion",
      description: "Grew to a team of 10 specialists and opened our first dedicated office."
    },
    {
      year: "2018",
      title: "International Projects",
      description: "Started working with clients across Europe and North America."
    },
    {
      year: "2020",
      title: "Technology Innovation",
      description: "Launched our proprietary development framework for faster project delivery."
    },
    {
      year: "2022",
      title: "Major Milestones",
      description: "Completed our 100th project and expanded to a team of 25 experts."
    },
    {
      year: "2024",
      title: "New Horizons",
      description: "Continuing to innovate and expand our service offerings to meet evolving client needs."
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
                <span className="bg-brand-purple/10 text-brand-purple text-sm font-medium py-1 px-3 rounded-full">About Us</span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">We Build Digital Solutions That Drive Growth</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  WebFlow Architects is a team of dedicated professionals passionate about creating custom web and mobile applications that help businesses thrive in the digital landscape.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal animation="slide-in">
                <div className="relative">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-brand-blue/10 via-brand-teal/10 to-brand-purple/10 rounded-xl transform rotate-3"></div>
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop"
                    alt="Our team collaborating"
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-in">
                <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Founded in 2014, WebFlow Architects has grown from a small group of passionate developers to a full-service digital agency with expertise across web development, mobile applications, and custom software solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We combine technical excellence with strategic thinking to create digital experiences that not only look beautiful but also deliver measurable business results.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our team of developers, designers, and strategists work collaboratively to solve complex business challenges through innovative technology solutions.
                </p>
              </ScrollReveal>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <ScrollReveal 
                  key={index} 
                  animation="slide-up" 
                  delay={index * 100}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center"
                >
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <ScrollReveal animation="fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Vision</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Guided by a clear purpose and forward-thinking approach.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ScrollReveal animation="slide-up" className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4 text-brand-blue">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To empower businesses with custom technology solutions that solve real-world problems, enhance user experiences, and drive measurable growth and success.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={200} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4 text-brand-teal">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To be the leading digital transformation partner for businesses worldwide, known for our technical excellence, innovative approach, and lasting client relationships.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <ScrollReveal animation="fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  The principles that guide our work and interactions every day.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <ScrollReveal 
                  key={index} 
                  animation="slide-up" 
                  delay={index * 100}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center"
                >
                  <div className="flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <ScrollReveal animation="fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  The talented individuals behind our successful projects.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <ScrollReveal 
                  key={index} 
                  animation="fade-in" 
                  delay={index * 100}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6">
                          <p className="text-white">{member.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-brand-blue dark:text-brand-teal">{member.position}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <ScrollReveal animation="fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  The key milestones that have shaped our company over the years.
                </p>
              </ScrollReveal>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <ScrollReveal 
                    key={index} 
                    animation="fade-in" 
                    delay={index * 150}
                    className="relative"
                  >
                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className="w-1/2"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue text-white z-10">
                        <span className="text-sm font-bold">{item.year}</span>
                      </div>
                      <div className="w-1/2 pl-12 pr-4">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
