import { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-Commerce Platform",
    category: "web",
    image: "photo-1531297484001-80022131f5a1", // gray and black laptop
    description:
      "Full-stack e-commerce solution with integrated payment processing",
  },
  {
    title: "Healthcare App",
    category: "mobile",
    image: "photo-1526374965328-7f61d4dc18c5", // Matrix movie still (tech effect)
    description: "Mobile application for patient management and telemedicine",
  },
  {
    title: "Analytics Dashboard",
    category: "web",
    image: "photo-1487058792275-0ad4aaf24ca7", // Colorful software/webcode
    description: "Real-time data visualization and reporting platform",
  },
  {
    title: "Learning Management System",
    category: "web",
    image: "photo-1516321310764-90d397d9048b", // Laptop with code editor
    description: "Scalable platform for online courses and student engagement",
  },
  {
    title: "Fitness Tracker App",
    category: "mobile",
    image: "photo-1557683316-973673baf926", // Abstract tech background
    description: "Cross-platform app for tracking workouts and health metrics",
  },
  {
    title: "Inventory Management Tool",
    category: "custom",
    image: "photo-1507238691740-187a5b1d37b8", // Server room
    description:
      "Custom solution for real-time inventory tracking and reporting",
  },
];

const categories = ["all", "web", "mobile", "custom"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const headerRef = useRef(null);
  const buttonsRef = useRef([]);
  const cardsRef = useRef([]);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  useEffect(() => {
    // Header Animation (Heading and Paragraph)
    gsap.fromTo(
      headerRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Category Buttons Animation
    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonsRef.current[0]?.parentElement,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Project Cards Animation
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0]?.parentElement,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Image Hover Animation (Background Rotation)
    cardsRef.current.forEach((card) => {
      const image = card.querySelector("img");
      const background = card.querySelector(".gradient-background");
      if (image && background) {
        const onMouseEnter = () => {
          gsap.to(background, {
            rotation: 6,
            duration: 0.3,
            ease: "power2.out",
          });
        };
        const onMouseLeave = () => {
          gsap.to(background, {
            rotation: 2,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        image.addEventListener("mouseenter", onMouseEnter);
        image.addEventListener("mouseleave", onMouseLeave);

        // Store cleanup function for each card
        card._cleanup = () => {
          image.removeEventListener("mouseenter", onMouseEnter);
          image.removeEventListener("mouseleave", onMouseLeave);
        };
      }
    });

    return () => {
      // Clean up ScrollTrigger animations
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      // Clean up hover event listeners
      cardsRef.current.forEach((card) => {
        if (card._cleanup) card._cleanup();
      });
    };
  }, []);

  useEffect(() => {
    // Re-trigger card animations when activeCategory changes
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0]?.parentElement,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [activeCategory]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-16 mt-16">
        <div ref={headerRef} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg text-muted-foreground">
            Discover our latest projects and success stories
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={category}
              ref={(el) => (buttonsRef.current[index] = el)}
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
            <div
              key={project.title}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 relative">
                <div className="aspect-video overflow-hidden relative">
                  <div className="gradient-background absolute inset-0 -z-10 bg-gradient-to-tr from-brand-blue/10 via-brand-teal/10 to-brand-purple/10 rounded-xl transform rotate-2"></div>
                  <img
                    src={`https://images.unsplash.com/${project.image}?q=80&w=800&auto=format&fit=crop`}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                  <Button
                    variant="link"
                    className="mt-4 p-0 text-primary hover:no-underline"
                  >
                    View Case Study →
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
