
import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "web",
    image: "photo-1531297484001-80022131f5a1", // gray and black laptop
    description: "Full-stack e-commerce solution with integrated payment processing"
  },
  {
    title: "Healthcare App",
    category: "mobile",
    image: "photo-1526374965328-7f61d4dc18c5", // Matrix movie still (tech effect)
    description: "Mobile application for patient management and telemedicine"
  },
  {
    title: "Analytics Dashboard",
    category: "web",
    image: "photo-1487058792275-0ad4aaf24ca7", // Colorful software/webcode
    description: "Real-time data visualization and reporting platform"
  }
];

const categories = ["all", "web", "mobile", "custom"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(
    project => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-16 mt-16">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Portfolio
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Discover our latest projects and success stories
          </p>
        </ScrollReveal>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              animation="fade-in"
              delay={index * 100}
            >
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${project.image}?q=80&w=800&auto=format&fit=crop`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                  <Button
                    variant="link"
                    className="mt-4 p-0 text-primary hover:no-underline"
                  >
                    View Case Study →
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
