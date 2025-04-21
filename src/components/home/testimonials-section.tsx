
import { useRef } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

interface Testimonial {
  content: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      content: "Serve Solutions helped us develop a custom CRM that perfectly fits our business processes. Their team was extremely professional and delivered beyond our expectations.",
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechVentures Inc",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=200&auto=format&fit=facearea&facepad=3.0"
    },
    {
      content: "We've worked with several development teams before, but none matched the technical expertise and attention to detail that Serve Solutions provided. Our e-commerce platform has never performed better.",
      name: "Michael Chen",
      position: "CTO",
      company: "RetailNova",
      avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=200&auto=format&fit=facearea&facepad=3.0"
    },
    {
      content: "The mobile app they built for us has received outstanding feedback from our users. Their approach to UX design and development created an intuitive experience that our customers love.",
      name: "Emily Rodriguez",
      position: "Product Manager",
      company: "HealthTech Solutions",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      sliderRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-in">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-brand-teal/10 text-brand-teal text-sm font-medium py-1 px-3 rounded-full">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">What Our Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Don't take our word for it. Hear from the businesses we've helped transform with our custom digital solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <ScrollReveal 
                key={index} 
                animation="fade-in" 
                delay={index * 100}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md h-full flex flex-col">
                  <Quote className="h-10 w-10 text-brand-purple/20 mb-4" />
                  <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => scroll('left')}
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => scroll('right')}
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
