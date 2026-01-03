
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Architecture of Scale",
      excerpt: "Deep dive into microservices patterns for high-traffic enterprise applications.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Sarve Dev Team",
      date: "JAN 15, 2025",
      readTime: "8 MIN",
      category: "Engineering"
    },
    {
      id: 2,
      title: "Mobile First: Beyond RWD",
      excerpt: "Why progressive enhancement strategies matter more than ever in 2025.",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Mobile Lead",
      date: "JAN 12, 2025",
      readTime: "6 MIN",
      category: "Mobile"
    },
    {
      id: 3,
      title: "Headless CMS Decoupling",
      excerpt: "Separating concerns: Why traditional CMS architectures are failing modern businesses.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Backend Team",
      date: "JAN 10, 2025",
      readTime: "10 MIN",
      category: "Architecture"
    }
  ];

  return (
    <div className="bg-[#F3F3F3] min-h-screen text-zinc-900 font-sans selection:bg-black selection:text-white pt-20">
      <SEO
        title="Blog"
        description="Technical deep dives, architectural patterns, and updates from the SarveSolutions engineering team."
        url="https://sarvesolutions.in/blog"
        breadcrumb={[
          { name: "Home", item: "https://sarvesolutions.in" },
          { name: "Blog", item: "https://sarvesolutions.in/blog" }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-black text-white py-24 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-end">
          <div>
            <span className="block text-xs font-bold tracking-widest uppercase mb-4 text-zinc-500">Insights & News</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              ENGINEERING<br />LOGS.
            </h1>
          </div>
          <div className="mt-8 md:mt-0 max-w-sm">
            <p className="text-zinc-400 text-sm leading-relaxed">
              Technical deep dives, architectural patterns, and updates from the SarveSolutions engineering team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured / List Grid */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="divide-y divide-zinc-200">
            {blogPosts.map((post) => (
              <article key={post.id} className="group grid grid-cols-1 md:grid-cols-12 gap-8 p-12 hover:bg-zinc-50 transition-colors cursor-pointer">
                {/* Meta Column */}
                <div className="md:col-span-3 flex flex-col justify-between border-l-4 border-transparent group-hover:border-black pl-4 transition-all">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">{post.category}</span>
                  <div className="text-4xl font-bold text-zinc-200 group-hover:text-black transition-colors">0{post.id}</div>
                </div>

                {/* Content Column */}
                <div className="md:col-span-6">
                  <h2 className="text-3xl font-bold tracking-tight mb-4 group-hover:underline decoration-2 underline-offset-4">{post.title}</h2>
                  <p className="text-zinc-600 leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="flex items-center space-x-6 text-xs font-mono text-zinc-400 uppercase">
                    <span>{post.date}</span>
                    <span>//</span>
                    <span>{post.readTime} READ</span>
                  </div>
                </div>

                {/* Action Column */}
                <div className="md:col-span-3 flex items-center justify-end">
                  <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-[#F3F3F3] py-24 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-12">Browse Topics</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-zinc-200 border border-zinc-200">
            {['Engineering', 'Design', 'Product', 'Culture', 'Tutorials', 'News'].map((topic) => (
              <div key={topic} className="bg-white p-6 hover:bg-zinc-50 transition-colors text-center cursor-pointer group">
                <span className="font-bold text-sm tracking-tight group-hover:text-blue-600 transition-colors">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black text-white py-24 px-6 border-b border-zinc-800">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">STAY IN THE LOOP</h2>
          <p className="text-zinc-500 mb-8">
            Get the latest technical articles delivered to your inbox. No spam, just code.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="email@address.com"
              className="flex-1 bg-zinc-900 border border-zinc-800 px-6 py-4 text-white focus:outline-none focus:border-white transition-colors"
            />
            <button className="bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;