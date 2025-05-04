"use client";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

export function HeroSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const scrollToTimeline = () => {
    const timelineSection = document.getElementById("timeline");
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 hero-gradient z-0" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
            Christopher Kwandrans
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium text-primary mb-6">
            <Typewriter
              words={[
                "Software Engineer",
                "Technology Generalist",
                "Creative Technologist",
                "Builder of Systems & Experiences",
                "Problem Solver...",
                "Builder. Collaborator. Innovator.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2500}
            />
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            Solving business challenges through user-focused engineering, robust APIs, and intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="/projects">View My Work</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="/contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToTimeline}
          className="rounded-full text-primary hover:text-primary hover:bg-primary/10"
        >
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll Down</span>
        </Button>
      </div>
    </section>
  );
}
