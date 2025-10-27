import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  ArrowRight,
  Clock,
  TrendingUp,
  Code2,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Palette,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import ScrollFloat from "../components/ScrollFloat";
import ScrollReveal from "../components/ScrollReveal";
import SpotlightCard from "../components/SpotlightCard";
import ReadyToTransformCTA from "../components/ReadyToTransformCTA";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Explore the latest trends shaping web development, from AI integration to progressive web apps and beyond.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Web Development",
      image: "WD",
      color: "bg-blue-100 text-blue-600",
      tags: ["React", "Next.js", "AI", "PWA"],
      content:
        "Web development is evolving rapidly with new technologies and frameworks emerging constantly. In 2024, we're seeing significant trends that will shape the future of how we build and deploy web applications...",
    },
    {
      id: 2,
      title: "Building Scalable Mobile Apps with React Native",
      excerpt:
        "Learn best practices for creating mobile applications that can handle growth and maintain performance.",
      author: "Michael Chen",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Mobile Development",
      image: "MD",
      color: "bg-purple-100 text-purple-600",
      tags: ["React Native", "Mobile", "Scalability", "Performance"],
      content:
        "React Native has become the go-to framework for cross-platform mobile development. When building apps that need to scale, there are several key considerations to keep in mind...",
    },
    {
      id: 3,
      title: "Cloud Architecture Best Practices for Startups",
      excerpt:
        "Essential cloud architecture patterns that help startups scale efficiently while managing costs.",
      author: "Emily Rodriguez",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Cloud & DevOps",
      image: "CD",
      color: "bg-green-100 text-green-600",
      tags: ["AWS", "Cloud", "Architecture", "Startups"],
      content:
        "Startups need to balance rapid growth with cost efficiency. Cloud architecture plays a crucial role in this balance. Here are the best practices we've learned from building scalable solutions...",
    },
    {
      id: 4,
      title: "UI/UX Design Principles for Better User Engagement",
      excerpt:
        "Design principles that create intuitive user experiences and drive engagement across all platforms.",
      author: "David Kim",
      date: "2024-01-01",
      readTime: "4 min read",
      category: "Design",
      image: "UI",
      color: "bg-pink-100 text-pink-600",
      tags: ["UI/UX", "Design", "User Experience", "Engagement"],
      content:
        "Great design goes beyond aesthetics. It's about creating experiences that users love and that drive business results. Here are the key principles we follow...",
    },
    {
      id: 5,
      title: "Digital Marketing Strategies for Tech Companies",
      excerpt:
        "Effective digital marketing approaches specifically tailored for technology companies and SaaS products.",
      author: "Lisa Wang",
      date: "2023-12-28",
      readTime: "8 min read",
      category: "Digital Marketing",
      image: "DM",
      color: "bg-orange-100 text-orange-600",
      tags: ["Marketing", "SEO", "Content", "SaaS"],
      content:
        "Tech companies face unique challenges in digital marketing. The technical nature of products requires specialized approaches to reach and convert the right audience...",
    },
    {
      id: 6,
      title: "Cybersecurity Best Practices for Modern Applications",
      excerpt:
        "Essential security measures every development team should implement to protect user data and applications.",
      author: "Alex Thompson",
      date: "2023-12-25",
      readTime: "6 min read",
      category: "Security",
      image: "SC",
      color: "bg-red-100 text-red-600",
      tags: ["Security", "Cybersecurity", "Best Practices", "Data Protection"],
      content:
        "Security is not an afterthought—it's a fundamental requirement for any modern application. Here are the essential practices every development team should follow...",
    },
  ];

  const categories = [
    { name: "All", count: 6, icon: Globe },
    { name: "Web Development", count: 1, icon: Code2 },
    { name: "Mobile Development", count: 1, icon: Smartphone },
    { name: "Cloud & DevOps", count: 1, icon: Cloud },
    { name: "Design", count: 1, icon: Palette },
    { name: "Digital Marketing", count: 1, icon: BarChart3 },
    { name: "Security", count: 1, icon: Shield },
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Blog & Insights"
        subtitle="Stay updated with the latest trends, insights, and best practices in technology and digital innovation"
      />

      {/* Blog Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 transition-colors duration-300"
              >
                <category.icon className="h-4 w-4" />
                <span className="font-medium">{category.name}</span>
                <span className="text-sm text-gray-500">
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Featured Article
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Our most popular and impactful content
            </ScrollReveal>
          </div>

          <SpotlightCard
            className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-blue-500/20 mb-16"
            spotlightColor="rgba(59, 130, 246, 0.3)"
          >
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4 text-xl font-bold">
                      WD
                    </div>
                    <div>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Web Development
                      </span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    The Future of Web Development: Trends to Watch in 2024
                  </h3>

                  <p className="text-gray-600 mb-6 text-lg">
                    Explore the latest trends shaping web development, from AI
                    integration to progressive web apps and beyond.
                  </p>

                  <div className="flex items-center mb-6 text-sm text-gray-500">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">Sarah Johnson</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">Jan 15, 2024</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>5 min read</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {["React", "Next.js", "AI", "PWA"].map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact/"
                    className="inline-flex items-center font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 focus:ring-blue-500"
                    aria-label="Read full article about web development trends"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="bg-gray-800 rounded-2xl p-6 text-white">
                  <h4 className="text-lg font-semibold mb-4">
                    Article Preview
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Web development is evolving rapidly with new technologies
                    and frameworks emerging constantly. In 2024, we're seeing
                    significant trends that will shape the future of how we
                    build and deploy web applications.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-300">
                      <TrendingUp className="h-4 w-4 mr-2 text-green-400" />
                      AI-powered development tools
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <TrendingUp className="h-4 w-4 mr-2 text-green-400" />
                      Progressive Web Apps (PWAs)
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <TrendingUp className="h-4 w-4 mr-2 text-green-400" />
                      Edge computing integration
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <TrendingUp className="h-4 w-4 mr-2 text-green-400" />
                      Enhanced performance optimization
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Latest Articles
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Stay informed with our latest insights and technical articles
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <SpotlightCard
                key={post.id}
                className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100 hover:border-gray-200 focus-within:ring-4 focus-within:ring-blue-500/20"
                spotlightColor="rgba(59, 130, 246, 0.3)"
              >
                <div className="relative z-10">
                  <article className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-10 h-10 rounded-full ${post.color} flex items-center justify-center mr-3 text-sm font-bold`}
                      >
                        {post.image}
                      </div>
                      <div>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center mb-4 text-sm text-gray-500">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{post.date}</span>
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact/"
                      className="inline-flex items-center font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-blue-600 hover:text-blue-700 focus:ring-blue-500"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </article>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="text-4xl font-bold text-white mb-4"
          >
            Stay Updated
          </ScrollFloat>
          <ScrollReveal
            baseOpacity={0.2}
            enableBlur={true}
            baseRotation={2}
            blurStrength={8}
            containerClassName="mb-8 max-w-2xl mx-auto"
            textClassName="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-white leading-relaxed font-normal"
          >
            Subscribe to our newsletter and never miss the latest insights,
            trends, and best practices in technology.
          </ScrollReveal>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Popular Topics
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName="max-w-3xl mx-auto"
              textClassName="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal"
            >
              Explore our most discussed topics and trending technologies
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", posts: 12, icon: Code2 },
              { name: "Node.js", posts: 8, icon: Globe },
              { name: "AWS", posts: 15, icon: Cloud },
              { name: "Mobile", posts: 10, icon: Smartphone },
              { name: "Design", posts: 7, icon: Palette },
              { name: "Security", posts: 9, icon: Shield },
              { name: "AI/ML", posts: 6, icon: Zap },
              { name: "DevOps", posts: 11, icon: Database },
              { name: "Marketing", posts: 5, icon: BarChart3 },
              { name: "Startups", posts: 8, icon: TrendingUp },
              { name: "Performance", posts: 7, icon: Zap },
              { name: "Testing", posts: 6, icon: Shield },
            ].map((topic, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="inline-flex p-3 rounded-full bg-gray-100 mb-3 group-hover:bg-blue-100 transition-colors duration-300">
                  <topic.icon className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {topic.name}
                </h3>
                <p className="text-sm text-gray-500">{topic.posts} articles</p>
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

export default Blog;
