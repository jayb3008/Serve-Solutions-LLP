
import { Target, Eye, Heart, Users, Code2, Palette, Search } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-[#F3F3F3] min-h-screen text-zinc-900 font-sans selection:bg-black selection:text-white pt-20">

      {/* Hero Section */}
      <section className="bg-black text-white py-24 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="block text-xs font-bold tracking-widest uppercase mb-4 text-zinc-500">About Us</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-4xl leading-none">
            ENGINEERING <br /> DIGITAL EXCELLENCE.
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            SarveSolutions is a technical consultancy focused on building robust, scalable digital infrastructure for forward-thinking enterprises.
          </p>
        </div>
      </section>

      {/* Mission Grid */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
            {[
              { icon: Target, title: "Mission", desc: "To deliver precision-engineered software solutions that drive measurable business growth." },
              { icon: Eye, title: "Vision", desc: "To set the global standard for code quality and technical innovation in digital services." },
              { icon: Heart, title: "Values", desc: "Integrity in code, transparency in process, and dedication to client success." }
            ].map((item, i) => (
              <div key={i} className="p-12 hover:bg-zinc-50 transition-colors">
                <item.icon className="h-8 w-8 text-black mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-bold tracking-tight mb-3">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Numbers */}
      <section className="bg-[#F3F3F3] py-24 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Projects Shipped", value: "50+" },
            { label: "Happy Clients", value: "30+" },
            { label: "Team Strength", value: "15+" },
            { label: "Years Active", value: "4" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 max-w-[100px]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-16">OUR EVOLUTION</h2>
          <div className="space-y-0 relative border-l border-zinc-200 ml-4 md:ml-0">
            {[
              { year: "2021", title: "Inception", desc: "Started as a specialized web development unit." },
              { year: "2022", title: "Expansion", desc: "Launched mobile engineering division." },
              { year: "2023", title: "Integration", desc: "Added comprehensive design and SEO capabilities." },
              { year: "2024", title: "Scale", desc: "Partnering with global enterprises for digital transformation." }
            ].map((item, i) => (
              <div key={i} className="relative pl-12 pb-12 last:pb-0 group">
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-zinc-200 rounded-full group-hover:bg-black transition-colors ring-4 ring-white"></div>
                <div className="md:flex items-baseline">
                  <span className="text-sm font-mono font-bold text-zinc-400 w-24 flex-shrink-0">{item.year}</span>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-zinc-600 max-w-lg">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-[#FAFAFA] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="p-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold tracking-tight">LEADERSHIP</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200 border-b border-zinc-200">
            {[
              { name: "CEO", role: "Strategy", icon: Users },
              { name: "CTO", role: "Technology", icon: Code2 },
              { name: "Head of Design", role: "Creative", icon: Palette },
              { name: "Head of Growth", role: "Marketing", icon: Search }
            ].map((member, i) => (
              <div key={i} className="p-10 bg-white hover:bg-zinc-50 transition-colors group">
                <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                  <member.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;