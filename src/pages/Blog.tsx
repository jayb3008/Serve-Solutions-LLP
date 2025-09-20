import React from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Web Development Trends in 2025",
      excerpt: "Explore the cutting-edge web development trends that are shaping the digital landscape in 2025, from AI integration to progressive web apps.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "SarveSolutions Team",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Web Development",
      color: "blue"
    },
    {
      id: 2,
      title: "Why Your Business Needs a Mobile App",
      excerpt: "Discover how mobile applications can transform your business, increase customer engagement, and drive revenue growth in today's mobile-first world.",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Mobile Team",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "Mobile Development",
      color: "purple"
    },
    {
      id: 3,
      title: "The Future of CMS: Headless & Beyond",
      excerpt: "Learn about headless CMS architecture and how it's revolutionizing content management for modern businesses and developers.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "CMS Experts",
      date: "January 10, 2025",
      readTime: "10 min read",
      category: "CMS",
      color: "green"
    },
    {
      id: 4,
      title: "Design That Converts: UI/UX Best Practices",
      excerpt: "Master the art of conversion-focused design with proven UI/UX strategies that turn visitors into customers.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Design Team",
      date: "January 8, 2025",
      readTime: "7 min read",
      category: "Design",
      color: "pink"
    },
    {
      id: 5,
      title: "SEO in 2025: What Really Works",
      excerpt: "Stay ahead of the competition with the latest SEO strategies and techniques that deliver real results in search rankings.",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "SEO Specialists",
      date: "January 5, 2025",
      readTime: "12 min read",
      category: "SEO",
      color: "orange"
    },
    {
      id: 6,
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for creating React applications that scale efficiently as your user base grows.",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "React Developers",
      date: "January 3, 2025",
      readTime: "9 min read",
      category: "Development",
      color: "blue"
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="pt-[4.5rem]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in web development, design, and digital marketing
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-96 object-cover hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-6 left-6">
                <span className={`px-4 py-2 bg-${featuredPost.color}-600 text-white rounded-full text-sm font-medium`}>
                  {featuredPost.category}
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{featuredPost.title}</h3>
              <p className="text-lg text-gray-600 mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center space-x-6 mb-8 text-gray-500">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              <button className={`inline-flex items-center bg-${featuredPost.color}-600 text-white px-6 py-3 rounded-lg hover:bg-${featuredPost.color}-700 transition-colors duration-300`}>
                Read Full Article
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">
              Discover insights, tips, and best practices from our team of experts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-${post.color}-600 text-white rounded-full text-sm font-medium`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{post.date}</span>
                    </div>
                    <button className={`text-${post.color}-600 hover:text-${post.color}-700 font-medium transition-colors group-hover:translate-x-1 transform duration-300`}>
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find articles that interest you most</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Web Development", count: 12, color: "blue" },
              { name: "Mobile Apps", count: 8, color: "purple" },
              { name: "CMS", count: 6, color: "green" },
              { name: "Design", count: 10, color: "pink" },
              { name: "SEO", count: 7, color: "orange" },
              { name: "Tech News", count: 15, color: "gray" }
            ].map((category, index) => (
              <div
                key={index}
                className={`p-6 bg-${category.color}-50 rounded-xl text-center hover:bg-${category.color}-100 transition-colors duration-300 cursor-pointer group`}
              >
                <Tag className={`h-8 w-8 text-${category.color}-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className={`font-semibold text-${category.color}-900 mb-1`}>{category.name}</h3>
                <p className={`text-sm text-${category.color}-600`}>{category.count} articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest insights and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;