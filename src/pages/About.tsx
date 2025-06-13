import { useRef, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import {
  Users,
  Award,
  Target,
  CheckCircle2,
  Briefcase,
  ThumbsUp,
  HeartHandshake,
  Globe,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const statsRef = useRef([]);
  const missionVisionRef = useRef(null);
  const valuesRef = useRef([]);
  const teamRef = useRef([]);
  const timelineRef = useRef([]);

  const stats = [
    {
      icon: <Briefcase className="h-5 sm:h-6 w-5 sm:w-6 text-brand-blue" />,
      value: 100,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      icon: <Users className="h-5 sm:h-6 w-5 sm:w-6 text-brand-teal" />,
      value: 50,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      icon: <Globe className="h-5 sm:h-6 w-5 sm:w-6 text-brand-purple" />,
      value: 15,
      suffix: "+",
      label: "Countries Served",
    },
    {
      icon: <Award className="h-5 sm:h-6 w-5 sm:w-6 text-brand-blue" />,
      value: 10,
      suffix: "+",
      label: "Years Experience",
    },
  ];

  const values = [
    {
      icon: (
        <Target className="h-10 sm:h-12 w-10 sm:w-12 text-brand-blue mb-3 sm:mb-4" />
      ),
      title: "Innovation",
      description:
        "We push boundaries to create cutting-edge solutions that give our clients a competitive edge.",
    },
    {
      icon: (
        <CheckCircle2 className="h-10 sm:h-12 w-10 sm:w-12 text-brand-teal mb-3 sm:mb-4" />
      ),
      title: "Quality",
      description:
        "We maintain the highest standards in our code, designs, and client interactions.",
    },
    {
      icon: (
        <HeartHandshake className="h-10 sm:h-12 w-10 sm:w-12 text-brand-purple mb-3 sm:mb-4" />
      ),
      title: "Partnership",
      description:
        "We view ourselves as an extension of your team, committed to your long-term success.",
    },
    {
      icon: (
        <ThumbsUp className="h-10 sm:h-12 w-10 sm:w-12 text-brand-blue mb-3 sm:mb-4" />
      ),
      title: "Transparency",
      description:
        "We believe in open communication and keeping you informed at every stage.",
    },
  ];

  const team = [
    {
      name: "Alex Johnson",
      position: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      description:
        "15+ years of experience in software development and team leadership.",
    },
    {
      name: "Sophia Chen",
      position: "CTO",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      description: "Expert in cloud architecture and emerging technologies.",
    },
    {
      name: "Marcus Williams",
      position: "Lead Developer",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      description: "Full-stack developer specializing in React and Node.js.",
    },
    {
      name: "Olivia Rodriguez",
      position: "UX/UI Designer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      description: "Creates intuitive and beautiful user experiences.",
    },
  ];

  const timeline = [
    {
      year: "2014",
      title: "Founded",
      description:
        "Sarve Solutions was established with a mission to create custom digital solutions.",
    },
    {
      year: "2016",
      title: "Team Expansion",
      description:
        "Grew to a team of 10 specialists and opened our first dedicated office.",
    },
    {
      year: "2018",
      title: "International Projects",
      description:
        "Started working with clients across Europe and North America.",
    },
    {
      year: "2020",
      title: "Technology Innovation",
      description:
        "Launched our proprietary development framework for faster project delivery.",
    },
    {
      year: "2022",
      title: "Major Milestones",
      description:
        "Completed our 100th project and expanded to a team of 25 experts.",
    },
    {
      year: "2024",
      title: "New Horizons",
      description:
        "Continuing to innovate and expand our service offerings to meet evolving client needs.",
    },
  ];

  useEffect(() => {
    // Hero Section Animation
    gsap.fromTo(
      heroRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Company Overview Animation
    gsap.fromTo(
      overviewRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: overviewRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Stats Animation
    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: overviewRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    // Mission & Vision Animation
    gsap.fromTo(
      missionVisionRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: missionVisionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Values Animation
    gsap.fromTo(
      valuesRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: valuesRef.current[0].parentElement,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Team Animation
    gsap.fromTo(
      teamRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: teamRef.current[0].parentElement,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 bg-gradient-to-b from-brand-lightBlue to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={heroRef} className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-brand-purple/10 text-brand-purple text-xs sm:text-sm font-medium py-1 px-3 rounded-full">
                About Us
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4 sm:mb-6">
                We Build Digital Solutions That Drive Growth
              </h1>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                Sarve Solutions is a team of dedicated professionals passionate
                about creating custom web and mobile applications that help
                businesses thrive in the digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={overviewRef}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
            >
              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-brand-blue/10 via-brand-teal/10 to-brand-purple/10 rounded-xl transform rotate-3 hidden sm:block"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop"
                  alt="Our team collaborating at Sarve Solutions"
                  className="rounded-xl shadow-lg w-full h-auto max-h-[400px] sm:max-h-[500px] object-cover"
                  loading="lazy"
                />
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                  Who We Are
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                  Founded in 2014, Sarve Solutions has grown from a small group
                  of passionate developers to a full-service digital agency with
                  expertise across web development, mobile applications, and
                  custom software solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                  We combine technical excellence with strategic thinking to
                  create digital experiences that not only look beautiful but
                  also deliver measurable business results.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                  Our team of developers, designers, and strategists work
                  collaboratively to solve complex business challenges through
                  innovative technology solutions.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12 lg:mt-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  ref={(el) => (statsRef.current[index] = el)}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6 text-center"
                >
                  <div className="flex justify-center mb-2 sm:mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
              <div ref={missionVisionRef}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                  Our Mission & Vision
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                  Guided by a clear purpose and forward-thinking approach.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-blue">
                  Our Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  To empower businesses with custom technology solutions that
                  solve real-world problems, enhance user experiences, and drive
                  measurable growth and success.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-teal">
                  Our Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  To be the leading digital transformation partner for
                  businesses worldwide, known for our technical excellence,
                  innovative approach, and lasting client relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Our Core Values
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                The principles that guide our work and interactions every day.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  ref={(el) => (valuesRef.current[index] = el)}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 sm:p-6 text-center"
                >
                  <div className="flex justify-center">{value.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Meet Our Team
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                The talented individuals behind our successful projects.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  ref={(el) => (teamRef.current[index] = el)}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={`${member.name}, ${member.position} at Sarve Solutions`}
                        className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 sm:p-6">
                          <p className="text-white text-sm sm:text-base">
                            {member.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-brand-blue dark:text-brand-teal text-sm sm:text-base">
                        {member.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
