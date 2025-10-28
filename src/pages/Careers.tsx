import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Heart,
  Award,
  Laptop,
  Briefcase,
  GraduationCap,
  DollarSign,
  CheckCircle,
  Star,
  X,
  Upload,
  Mail,
  Phone,
  User,
  FileText,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import ScrollFloat from "../components/ScrollFloat";
import ScrollReveal from "../components/ScrollReveal";
import ReadyToTransformCTA from "../components/ReadyToTransformCTA";

interface JobPosition {
  id: number;
  title: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const Careers = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resume: null as File | null,
  });

  const openPositions: JobPosition[] = [
    // {
    //   id: 1,
    //   title: "Full Stack Developer",
    //   location: "Anand, Gujarat / Remote",
    //   type: "Full-time",
    //   experience: "2-4 years",
    //   salary: "₹5-8 LPA",
    //   description:
    //     "We're looking for a passionate Full Stack Developer to join our team and help build cutting-edge web and mobile applications using modern technologies.",
    //   requirements: [
    //     "2+ years of experience in React, Node.js, or similar frameworks",
    //     "Strong knowledge of TypeScript and modern JavaScript",
    //     "Experience with REST APIs and database design (MongoDB, PostgreSQL)",
    //     "Familiarity with version control (Git) and agile methodologies",
    //     "Good understanding of UI/UX principles",
    //   ],
    //   benefits: [
    //     "Competitive salary and performance bonuses",
    //     "Health insurance coverage",
    //     "Flexible work hours and remote work options",
    //     "Professional development and training budget",
    //     "Team building activities and annual retreats",
    //   ],
    // },
    // {
    //   id: 2,
    //   title: "UI/UX Designer",
    //   location: "Anand, Gujarat / Remote",
    //   type: "Full-time",
    //   experience: "1-3 years",
    //   salary: "₹4-7 LPA",
    //   description:
    //     "Join our design team to create beautiful, intuitive user experiences that delight our clients and their users across web and mobile platforms.",
    //   requirements: [
    //     "1+ years of UI/UX design experience",
    //     "Proficiency in Figma, Adobe Creative Suite",
    //     "Strong portfolio showcasing user-centered design",
    //     "Experience with design systems and component libraries",
    //     "Knowledge of responsive design and accessibility standards",
    //   ],
    //   benefits: [
    //     "Competitive salary and performance bonuses",
    //     "Health insurance coverage",
    //     "Flexible work hours and remote work options",
    //     "Design tools and software provided",
    //     "Creative freedom and professional growth",
    //   ],
    // },
    // {
    //   id: 3,
    //   title: "React Native Developer",
    //   location: "Anand, Gujarat / Remote",
    //   type: "Full-time",
    //   experience: "2-4 years",
    //   salary: "₹5-9 LPA",
    //   description:
    //     "Build cross-platform mobile applications using React Native. You'll work on exciting projects creating native experiences for both iOS and Android.",
    //   requirements: [
    //     "2+ years of React Native development experience",
    //     "Strong knowledge of JavaScript, ES6+",
    //     "Experience with state management (Redux, Context API)",
    //     "Knowledge of native iOS/Android development is a plus",
    //     "Experience with app deployment and store guidelines",
    //   ],
    //   benefits: [
    //     "Competitive salary and performance bonuses",
    //     "Health insurance coverage",
    //     "Flexible work hours and remote work options",
    //     "Latest mobile devices for testing",
    //     "Exposure to cutting-edge mobile technologies",
    //   ],
    // },
    // {
    //   id: 4,
    //   title: "Digital Marketing Specialist",
    //   location: "Anand, Gujarat / Remote",
    //   type: "Full-time / Part-time",
    //   experience: "1-3 years",
    //   salary: "₹3-6 LPA",
    //   description:
    //     "Help grow our client's online presence through SEO, social media marketing, content creation, and digital advertising strategies.",
    //   requirements: [
    //     "1+ years of digital marketing experience",
    //     "Knowledge of SEO, SEM, and social media platforms",
    //     "Experience with Google Analytics and Ads",
    //     "Strong communication and copywriting skills",
    //     "Creative mindset with analytical thinking",
    //   ],
    //   benefits: [
    //     "Competitive salary and performance bonuses",
    //     "Health insurance coverage",
    //     "Flexible work arrangements",
    //     "Marketing tools and software access",
    //     "Opportunity to work with diverse clients",
    //   ],
    // },
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "SJ",
      color: "bg-blue-100 text-blue-600",
      interests: ["Leadership", "Strategy", "Coffee"],
      quote: "I love building teams that create amazing products together.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "MC",
      color: "bg-green-100 text-green-600",
      interests: ["Technology", "Architecture", "Gaming"],
      quote: "Every day brings new challenges and opportunities to learn.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "ER",
      color: "bg-purple-100 text-purple-600",
      interests: ["Design", "Art", "Photography"],
      quote: "Great design is about solving real problems beautifully.",
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "DK",
      color: "bg-orange-100 text-orange-600",
      interests: ["Coding", "Music", "Books"],
      quote: "I'm passionate about writing clean, maintainable code.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your interest! We'll get back to you soon.");
    setIsFormOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      message: "",
      resume: null,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const perks = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, mental health support, and wellness programs.",
    },
    {
      icon: Laptop,
      title: "Flexible Work",
      description:
        "Work from anywhere with flexible hours and remote-first culture.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      description:
        "Annual learning budget, conference attendance, and mentorship programs.",
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description:
        "Competitive salaries, equity options, and performance bonuses.",
    },
    {
      icon: Users,
      title: "Team Events",
      description:
        "Regular team building events, annual retreats, and social activities.",
    },
    {
      icon: Award,
      title: "Recognition",
      description:
        "Employee recognition programs and career advancement opportunities.",
    },
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Join Our Team"
        subtitle="Be part of a team that's building the future of technology. We're looking for passionate individuals who want to make a difference."
      />

      {/* Company Culture */}
      <section className="py-8 max-[393px]:py-6 min-[430px]:py-10 sm:py-16 md:py-20 lg:py-24 min-[1559px]:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-3 max-[393px]:px-2 sm:px-6 lg:px-8">
          <div className="text-center mb-8 max-[393px]:mb-6 sm:mb-12 md:mb-16 lg:mb-20">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-lg max-[393px]:text-base min-[430px]:text-xl min-[480px]:text-2xl min-[820px]:text-3xl md:text-4xl lg:text-5xl min-[1559px]:text-6xl font-bold text-gray-900 mb-3 max-[393px]:mb-2.5 sm:mb-4 md:mb-6"
            >
              Life at SarveSolutions
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              We believe in creating an environment where everyone can thrive,
              grow, and do their best work.
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 min-[1559px]:grid-cols-4 gap-4 max-[393px]:gap-3 min-[430px]:gap-6 sm:gap-8 mb-12 max-[393px]:mb-8 sm:mb-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 max-[393px]:p-4 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 max-[393px]:w-12 max-[393px]:h-12 sm:w-20 sm:h-20 rounded-full ${member.color} flex items-center justify-center mx-auto mb-4 max-[393px]:mb-3 sm:mb-6 text-xl max-[393px]:text-lg sm:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {member.image}
                  </div>
                  <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl font-bold text-gray-900 mb-2 max-[393px]:mb-1.5 sm:mb-3">
                    {member.name}
                  </h3>
                  <p className="text-sm max-[393px]:text-xs min-[430px]:text-base sm:text-lg text-blue-600 font-semibold mb-3 max-[393px]:mb-2 sm:mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm max-[393px]:text-xs min-[430px]:text-base italic mb-4 max-[393px]:mb-3 sm:mb-6 leading-relaxed text-gray-600">
                    "{member.quote}"
                  </p>
                  <div className="flex flex-wrap justify-center gap-1.5 max-[393px]:gap-1 sm:gap-2">
                    {member.interests.map((interest, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-800 px-2 max-[393px]:px-1.5 sm:px-3 py-1 max-[393px]:py-0.5 sm:py-1.5 rounded-full text-xs max-[393px]:text-[10px] min-[430px]:text-sm font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 max-[393px]:p-4 sm:p-8 min-[1559px]:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-[393px]:gap-4 min-[430px]:gap-6 sm:gap-8 text-center">
              <div>
                <div className="text-3xl max-[393px]:text-2xl min-[430px]:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-2 max-[393px]:mb-1 sm:mb-3">
                  25+
                </div>
                <div className="text-sm max-[393px]:text-xs min-[430px]:text-base sm:text-lg md:text-xl text-gray-700 font-medium">
                  Team Members
                </div>
              </div>
              <div>
                <div className="text-3xl max-[393px]:text-2xl min-[430px]:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-2 max-[393px]:mb-1 sm:mb-3">
                  15+
                </div>
                <div className="text-sm max-[393px]:text-xs min-[430px]:text-base sm:text-lg md:text-xl text-gray-700 font-medium">
                  Countries Represented
                </div>
              </div>
              <div>
                <div className="text-3xl max-[393px]:text-2xl min-[430px]:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-2 max-[393px]:mb-1 sm:mb-3">
                  95%
                </div>
                <div className="text-sm max-[393px]:text-xs min-[430px]:text-base sm:text-lg md:text-xl text-gray-700 font-medium">
                  Employee Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-8 max-[393px]:py-6 min-[430px]:py-10 sm:py-16 md:py-20 lg:py-24 min-[1559px]:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 max-[393px]:px-2 sm:px-6 lg:px-8">
          <div className="text-center mb-8 max-[393px]:mb-6 sm:mb-12 md:mb-16 lg:mb-20">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-lg max-[393px]:text-base min-[430px]:text-xl min-[480px]:text-2xl min-[820px]:text-3xl md:text-4xl lg:text-5xl min-[1559px]:text-6xl font-bold text-gray-900 mb-3 max-[393px]:mb-2.5 sm:mb-4 md:mb-6"
            >
              Perks & Benefits
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              We invest in our team's well-being and professional growth
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 min-[1559px]:grid-cols-3 gap-4 max-[393px]:gap-3 min-[430px]:gap-6 sm:gap-8">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="bg-white p-6 max-[393px]:p-4 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex p-4 max-[393px]:p-3 sm:p-6 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 mb-4 max-[393px]:mb-3 sm:mb-6 shadow-lg">
                  <perk.icon className="h-8 w-8 max-[393px]:h-6 max-[393px]:w-6 sm:h-10 sm:w-10 text-blue-600" />
                </div>
                <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl font-bold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                  {perk.title}
                </h3>
                <p className="text-sm max-[393px]:text-xs min-[430px]:text-base leading-relaxed text-gray-600">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-8 max-[393px]:py-6 min-[430px]:py-10 sm:py-16 md:py-20 lg:py-24 min-[1559px]:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-3 max-[393px]:px-2 sm:px-6 lg:px-8">
          <div className="text-center mb-8 max-[393px]:mb-6 sm:mb-12 md:mb-16 lg:mb-20">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-lg max-[393px]:text-base min-[430px]:text-xl min-[480px]:text-2xl min-[820px]:text-3xl md:text-4xl lg:text-5xl min-[1559px]:text-6xl font-bold text-gray-900 mb-3 max-[393px]:mb-2.5 sm:mb-4 md:mb-6"
            >
              Open Positions
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Join our team and help us build amazing products
            </ScrollReveal>
          </div>

          {openPositions.length > 0 ? (
            <div className="space-y-6 max-[393px]:space-y-4 min-[430px]:space-y-6 sm:space-y-8">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className="bg-white p-6 max-[393px]:p-4 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 max-[393px]:mb-4 sm:mb-8">
                    <div className="flex-1">
                      <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl md:text-2xl font-bold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 max-[393px]:gap-1.5 min-[430px]:gap-3 sm:gap-4 text-sm max-[393px]:text-xs min-[430px]:text-base text-gray-700 mb-3 max-[393px]:mb-2 sm:mb-4">
                        <div className="flex items-center font-medium">
                          <MapPin className="h-4 max-[393px]:h-3 max-[393px]:w-3 min-[430px]:h-4 min-[430px]:w-4 sm:h-5 sm:w-5 mr-1 max-[393px]:mr-0.5 sm:mr-2 text-blue-600" />
                          {position.location}
                        </div>
                        <div className="flex items-center font-medium">
                          <Briefcase className="h-4 max-[393px]:h-3 max-[393px]:w-3 min-[430px]:h-4 min-[430px]:w-4 sm:h-5 sm:w-5 mr-1 max-[393px]:mr-0.5 sm:mr-2 text-blue-600" />
                          {position.type}
                        </div>
                        <div className="flex items-center font-medium">
                          <Clock className="h-4 max-[393px]:h-3 max-[393px]:w-3 min-[430px]:h-4 min-[430px]:w-4 sm:h-5 sm:w-5 mr-1 max-[393px]:mr-0.5 sm:mr-2 text-blue-600" />
                          {position.experience}
                        </div>
                        <div className="flex items-center font-medium">
                          <DollarSign className="h-4 max-[393px]:h-3 max-[393px]:w-3 min-[430px]:h-4 min-[430px]:w-4 sm:h-5 sm:w-5 mr-1 max-[393px]:mr-0.5 sm:mr-2 text-blue-600" />
                          {position.salary}
                        </div>
                      </div>
                      <p className="text-sm max-[393px]:text-xs min-[430px]:text-base sm:text-lg text-gray-600 mb-4 max-[393px]:mb-3 sm:mb-6 leading-relaxed">
                        {position.description}
                      </p>
                    </div>
                    <div className="lg:ml-6 max-[393px]:lg:ml-4 sm:lg:ml-8">
                      <Link
                        to={`/careers/${position.id}`}
                        className="inline-flex items-center bg-blue-600 text-white px-6 max-[393px]:px-4 min-[430px]:px-6 sm:px-8 py-3 max-[393px]:py-2 sm:py-4 rounded-xl text-sm max-[393px]:text-xs min-[430px]:text-sm sm:text-base font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Apply Now
                        <ArrowRight className="ml-1.5 max-[393px]:ml-1 min-[430px]:ml-2 h-4 max-[393px]:h-3 max-[393px]:w-3 min-[430px]:h-4 min-[430px]:w-4 sm:h-5 sm:w-5" />
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-[393px]:gap-3 min-[430px]:gap-6 sm:gap-8">
                    <div className="bg-gray-50 p-5 max-[393px]:p-4 sm:p-6 rounded-xl">
                      <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-bold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                        Requirements:
                      </h4>
                      <ul className="space-y-2 max-[393px]:space-y-1.5 sm:space-y-3">
                        {position.requirements.map((req, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-xs max-[393px]:text-[10px] min-[430px]:text-sm sm:text-base text-gray-700"
                          >
                            <CheckCircle className="h-4 max-[393px]:h-3 max-[393px]:w-3 min-[430px]:h-4 min-[430px]:w-4 sm:h-5 sm:w-5 text-green-600 mr-2 max-[393px]:mr-1.5 sm:mr-3 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-5 max-[393px]:p-4 sm:p-6 rounded-xl">
                      <h4 className="text-sm max-[393px]:text-xs min-[430px]:text-base font-bold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                        Benefits:
                      </h4>
                      <ul className="space-y-2 max-[393px]:space-y-1.5 sm:space-y-3">
                        {position.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-xs max-[393px]:text-[10px] min-[430px]:text-sm sm:text-base text-gray-700"
                          >
                            <Star className="h-4 max-[393px]:h-3 max-[393px]:w-3 min-[430px]:h-4 min-[430px]:w-4 sm:h-5 sm:w-5 text-yellow-600 mr-2 max-[393px]:mr-1.5 sm:mr-3 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-3xl p-8 max-[393px]:p-6 sm:p-12 md:p-16 min-[1559px]:p-20 border-2 border-blue-100 shadow-xl overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full -mr-32 -mt-32 opacity-20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full -ml-32 -mb-32 opacity-20 blur-3xl"></div>

              <div className="relative max-w-2xl mx-auto text-center">
                <div className="mb-6 max-[393px]:mb-4 sm:mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 max-[393px]:w-16 max-[393px]:h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 max-[393px]:mb-3 sm:mb-6 shadow-lg">
                    <Briefcase className="h-10 w-10 max-[393px]:h-8 max-[393px]:w-8 sm:h-12 sm:w-12 text-white" />
                  </div>
                </div>

                <h3 className="text-xl max-[393px]:text-lg min-[430px]:text-2xl md:text-3xl font-bold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                  No Open Positions at the Moment
                </h3>

                <p className="text-sm max-[393px]:text-xs min-[430px]:text-base sm:text-lg text-gray-600 mb-6 max-[393px]:mb-5 sm:mb-10 leading-relaxed max-w-xl mx-auto">
                  We're not actively hiring right now, but we're always looking
                  for talented people to join our team. Feel free to reach out
                  with your resume!
                </p>

                <div className="flex flex-col sm:flex-row gap-3 max-[393px]:gap-2 min-[430px]:gap-4 justify-center items-center">
                  <Link
                    to="/contact/"
                    className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 max-[393px]:px-4 min-[430px]:px-6 sm:px-8 py-3 max-[393px]:py-2 sm:py-4 rounded-xl text-sm max-[393px]:text-xs min-[430px]:text-sm sm:text-base lg:text-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Contact Us
                    <ArrowRight className="ml-1.5 max-[393px]:ml-1 min-[430px]:ml-2 h-4 max-[393px]:h-3 max-[393px]:w-3 min-[430px]:h-4 min-[430px]:w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="mailto:careers@sarvesolutions.in"
                    className="group inline-flex items-center border-2 border-blue-600 bg-white text-blue-600 px-6 max-[393px]:px-4 min-[430px]:px-6 sm:px-8 py-3 max-[393px]:py-2 sm:py-4 rounded-xl text-sm max-[393px]:text-xs min-[430px]:text-sm sm:text-base lg:text-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    Send Resume
                    <ArrowRight className="ml-1.5 max-[393px]:ml-1 min-[430px]:ml-2 h-4 max-[393px]:h-3 max-[393px]:w-3 min-[430px]:h-4 min-[430px]:w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-8 max-[393px]:py-6 min-[430px]:py-10 sm:py-16 md:py-20 lg:py-24 min-[1559px]:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 max-[393px]:px-2 sm:px-6 lg:px-8">
          <div className="text-center mb-8 max-[393px]:mb-6 sm:mb-12 md:mb-16 lg:mb-20">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-lg max-[393px]:text-base min-[430px]:text-xl min-[480px]:text-2xl min-[820px]:text-3xl md:text-4xl lg:text-5xl min-[1559px]:text-6xl font-bold text-gray-900 mb-3 max-[393px]:mb-2.5 sm:mb-4 md:mb-6"
            >
              Our Hiring Process
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-xs max-[393px]:text-[11px] min-[430px]:text-sm min-[480px]:text-base min-[820px]:text-lg md:text-xl text-gray-600 leading-relaxed font-normal"
            >
              We've designed a fair and transparent process to find the best fit
              for our team
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 min-[1559px]:grid-cols-4 gap-4 max-[393px]:gap-3 min-[430px]:gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Application",
                description:
                  "Submit your resume and cover letter through our application form.",
                duration: "1-2 days",
              },
              {
                step: "02",
                title: "Initial Review",
                description:
                  "Our team reviews your application and reaches out if there's a good fit.",
                duration: "3-5 days",
              },
              {
                step: "03",
                title: "Interviews",
                description:
                  "Technical and cultural fit interviews with team members.",
                duration: "1-2 weeks",
              },
              {
                step: "04",
                title: "Decision",
                description:
                  "We make our decision and extend an offer to successful candidates.",
                duration: "1-2 days",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 max-[393px]:p-4 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 max-[393px]:w-12 max-[393px]:h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 max-[393px]:mb-3 sm:mb-6 text-xl max-[393px]:text-lg sm:text-2xl font-bold shadow-lg">
                  {process.step}
                </div>
                <h3 className="text-lg max-[393px]:text-base min-[430px]:text-xl font-bold text-gray-900 mb-3 max-[393px]:mb-2 sm:mb-4">
                  {process.title}
                </h3>
                <p className="text-sm max-[393px]:text-xs min-[430px]:text-base leading-relaxed text-gray-600 mb-3 max-[393px]:mb-2 sm:mb-4">
                  {process.description}
                </p>
                <div className="text-sm max-[393px]:text-xs min-[430px]:text-base text-blue-600 font-semibold bg-blue-50 px-3 max-[393px]:px-2 sm:px-4 py-1.5 max-[393px]:py-1 sm:py-2 rounded-lg inline-block">
                  {process.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 max-[393px]:py-6 min-[430px]:py-10 sm:py-16 md:py-20 lg:py-24 min-[1559px]:py-28 bg-blue-600">
        <div className="max-w-7xl mx-auto px-3 max-[393px]:px-2 sm:px-6 lg:px-8 text-center">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="text-2xl max-[393px]:text-xl min-[430px]:text-3xl md:text-4xl lg:text-5xl min-[1559px]:text-6xl font-bold text-white mb-3 max-[393px]:mb-2 sm:mb-4"
          >
            Don't See Your Role?
          </ScrollFloat>
          <ScrollReveal
            baseOpacity={0.2}
            enableBlur={true}
            baseRotation={2}
            blurStrength={8}
            containerClassName="mb-6 max-[393px]:mb-4 sm:mb-8 max-w-2xl mx-auto"
            textClassName="text-sm max-[393px]:text-xs min-[430px]:text-base sm:text-lg md:text-xl text-white leading-relaxed font-normal"
          >
            We're always looking for talented individuals. Send us your resume
            and let us know how you'd like to contribute.
          </ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-4 max-[393px]:gap-3 min-[430px]:gap-5 sm:gap-6 justify-center items-center">
            <button
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center bg-white text-blue-600 px-6 max-[393px]:px-4 min-[430px]:px-6 sm:px-8 py-3 max-[393px]:py-2 sm:py-4 rounded-xl text-sm max-[393px]:text-xs min-[430px]:text-sm sm:text-base lg:text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Send Your Resume
              <ArrowRight className="ml-1.5 max-[393px]:ml-1 min-[430px]:ml-2 h-4 max-[393px]:h-3 max-[393px]:w-3 min-[430px]:h-4 min-[430px]:w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            </button>
            <Link
              to="/about"
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 max-[393px]:px-4 min-[430px]:px-6 sm:px-8 py-3 max-[393px]:py-2 sm:py-4 rounded-xl text-sm max-[393px]:text-xs min-[430px]:text-sm sm:text-base lg:text-xl font-bold transition-all duration-300 hover:shadow-lg"
            >
              Learn More About Us
              <ArrowRight className="ml-1.5 max-[393px]:ml-1 min-[430px]:ml-2 h-4 max-[393px]:h-3 max-[393px]:w-3 min-[430px]:h-4 min-[430px]:w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ReadyToTransformCTA />

      {/* Resume Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 max-[393px]:p-2 sm:p-4 bg-black-50/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 max-[393px]:p-3 sm:p-6 border-b border-gray-200">
              <h2 className="text-lg max-[393px]:text-base min-[430px]:text-xl sm:text-2xl font-bold text-gray-900">
                Submit Your Resume
              </h2>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5 max-[393px]:h-4 max-[393px]:w-4 sm:h-6 sm:w-6" />
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-4 max-[393px]:p-3 sm:p-6 space-y-4 max-[393px]:space-y-3 sm:space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-[393px]:gap-3 min-[430px]:gap-5 sm:gap-6">
                <div>
                  <label className="block text-xs max-[393px]:text-[10px] min-[430px]:text-sm font-semibold text-gray-700 mb-1.5 max-[393px]:mb-1 sm:mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-2 max-[393px]:left-1.5 sm:left-3 top-1/2 transform -translate-y-1/2 h-4 max-[393px]:h-3 max-[393px]:w-3 sm:h-5 sm:w-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-8 max-[393px]:pl-7 sm:pl-10 pr-3 max-[393px]:pr-2 sm:pr-4 py-2.5 max-[393px]:py-2 sm:py-3 border-2 border-gray-300 rounded-xl text-sm max-[393px]:text-xs sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs max-[393px]:text-[10px] min-[430px]:text-sm font-semibold text-gray-700 mb-1.5 max-[393px]:mb-1 sm:mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-2 max-[393px]:left-1.5 sm:left-3 top-1/2 transform -translate-y-1/2 h-4 max-[393px]:h-3 max-[393px]:w-3 sm:h-5 sm:w-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-8 max-[393px]:pl-7 sm:pl-10 pr-3 max-[393px]:pr-2 sm:pr-4 py-2.5 max-[393px]:py-2 sm:py-3 border-2 border-gray-300 rounded-xl text-sm max-[393px]:text-xs sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs max-[393px]:text-[10px] min-[430px]:text-sm font-semibold text-gray-700 mb-1.5 max-[393px]:mb-1 sm:mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-2 max-[393px]:left-1.5 sm:left-3 top-1/2 transform -translate-y-1/2 h-4 max-[393px]:h-3 max-[393px]:w-3 sm:h-5 sm:w-5 text-gray-400" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full pl-8 max-[393px]:pl-7 sm:pl-10 pr-3 max-[393px]:pr-2 sm:pr-4 py-2.5 max-[393px]:py-2 sm:py-3 border-2 border-gray-300 rounded-xl text-sm max-[393px]:text-xs sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs max-[393px]:text-[10px] min-[430px]:text-sm font-semibold text-gray-700 mb-1.5 max-[393px]:mb-1 sm:mb-2">
                    Desired Position *
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-2 max-[393px]:left-1.5 sm:left-3 top-1/2 transform -translate-y-1/2 h-4 max-[393px]:h-3 max-[393px]:w-3 sm:h-5 sm:w-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.position}
                      onChange={(e) =>
                        setFormData({ ...formData, position: e.target.value })
                      }
                      className="w-full pl-8 max-[393px]:pl-7 sm:pl-10 pr-3 max-[393px]:pr-2 sm:pr-4 py-2.5 max-[393px]:py-2 sm:py-3 border-2 border-gray-300 rounded-xl text-sm max-[393px]:text-xs sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="e.g., Full Stack Developer"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs max-[393px]:text-[10px] min-[430px]:text-sm font-semibold text-gray-700 mb-1.5 max-[393px]:mb-1 sm:mb-2">
                    Experience Level *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-2 max-[393px]:left-1.5 sm:left-3 top-1/2 transform -translate-y-1/2 h-4 max-[393px]:h-3 max-[393px]:w-3 sm:h-5 sm:w-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({ ...formData, experience: e.target.value })
                      }
                      className="w-full pl-8 max-[393px]:pl-7 sm:pl-10 pr-3 max-[393px]:pr-2 sm:pr-4 py-2.5 max-[393px]:py-2 sm:py-3 border-2 border-gray-300 rounded-xl text-sm max-[393px]:text-xs sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="e.g., 2-4 years"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs max-[393px]:text-[10px] min-[430px]:text-sm font-semibold text-gray-700 mb-1.5 max-[393px]:mb-1 sm:mb-2">
                    Cover Letter *
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-2 max-[393px]:left-1.5 sm:left-3 top-3 max-[393px]:top-2 h-4 max-[393px]:h-3 max-[393px]:w-3 sm:h-5 sm:w-5 text-gray-400" />
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full pl-8 max-[393px]:pl-7 sm:pl-10 pr-3 max-[393px]:pr-2 sm:pr-4 py-2.5 max-[393px]:py-2 sm:py-3 border-2 border-gray-300 rounded-xl text-sm max-[393px]:text-xs sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us why you're interested in joining our team..."
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs max-[393px]:text-[10px] min-[430px]:text-sm font-semibold text-gray-700 mb-1.5 max-[393px]:mb-1 sm:mb-2">
                    Resume / CV *
                  </label>
                  <div className="relative">
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-28 max-[393px]:h-24 sm:h-32 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className="flex flex-col items-center justify-center pt-4 pb-5 max-[393px]:pt-3 max-[393px]:pb-4 sm:pt-5 sm:pb-6">
                          <Upload className="h-8 w-8 max-[393px]:h-6 max-[393px]:w-6 sm:h-10 sm:w-10 text-gray-400 mb-2" />
                          <p className="mb-1.5 max-[393px]:mb-1 sm:mb-2 text-xs max-[393px]:text-[10px] sm:text-sm text-gray-500">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs max-[393px]:text-[10px] text-gray-500">
                            PDF, DOC, DOCX (MAX. 5MB)
                          </p>
                        </div>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                          required
                        />
                      </label>
                    </div>
                    {formData.resume && (
                      <p className="mt-2 text-xs max-[393px]:text-[10px] sm:text-sm text-gray-600">
                        Selected: {formData.resume.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 max-[393px]:gap-2 min-[430px]:gap-4 pt-4 max-[393px]:pt-3 sm:pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 max-[393px]:px-4 min-[430px]:px-6 sm:px-8 py-3 max-[393px]:py-2 min-[430px]:py-3 sm:py-4 rounded-xl text-sm max-[393px]:text-xs min-[430px]:text-sm sm:text-base lg:text-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                >
                  Submit Application
                  <ArrowRight className="ml-1.5 max-[393px]:ml-1 min-[430px]:ml-2 h-4 max-[393px]:h-3 max-[393px]:w-3 min-[430px]:h-4 min-[430px]:w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-6 max-[393px]:px-4 min-[430px]:px-6 sm:px-8 py-3 max-[393px]:py-2 min-[430px]:py-3 sm:py-4 border-2 border-gray-300 text-gray-700 rounded-xl text-sm max-[393px]:text-xs min-[430px]:text-sm sm:text-base lg:text-lg font-bold hover:bg-gray-50 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
