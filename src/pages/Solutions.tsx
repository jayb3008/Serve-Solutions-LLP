
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { WebhookIcon, SmartphoneIcon, Code2Icon, DatabaseIcon } from "lucide-react";

const solutionCards = [
  {
    title: "Web Development",
    description: "Custom-built responsive websites and web applications that scale with your business.",
    icon: WebhookIcon,
    href: "/services#web-development"
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: SmartphoneIcon,
    href: "/services#mobile-apps"
  },
  {
    title: "Custom Software",
    description: "Tailored software solutions to meet your specific business needs.",
    icon: Code2Icon,
    href: "/services#custom-software"
  },
  {
    title: "API & Backend",
    description: "Robust backend systems and APIs that power your applications.",
    icon: DatabaseIcon,
    href: "/services#api-backend"
  }
];

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-16 mt-16">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Solutions
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {solutionCards.map((solution, index) => (
            <ScrollReveal
              key={solution.title}
              animation="slide-up"
              delay={index * 100}
            >
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <solution.icon className="w-6 h-6" />
                    </div>
                    <CardTitle>{solution.title}</CardTitle>
                  </div>
                  <CardDescription className="mt-2">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href={solution.href}
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    Learn more
                  </a>
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

export default Solutions;
