"use client";

import { useState, useEffect, useRef } from "react";
import { useTimeline } from "@/hooks/use-timeline";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";

// Debounce function to limit how often a function can be called
function debounce(func: Function, wait: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function executedFunction(...args: any[]) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

export function TimelineSection() {
  const { timelineItems, isLoading, error } = useTimeline();
  const [activeItemId, setActiveItemId] = useState<string>("");
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Set initial active item when data loads
  useEffect(() => {
    if (timelineItems.length > 0 && !activeItemId) {
      setActiveItemId(timelineItems[0].id);
    }
  }, [timelineItems, activeItemId]);

  // Register refs for each timeline item
  useEffect(() => {
    timelineItems.forEach((item) => {
      itemRefs.current[item.id] = null;
    });
  }, [timelineItems]);

  // Handle scroll to update active item
  useEffect(() => {
    if (timelineItems.length === 0) return;

    const handleScroll = () => {
      if (!timelineRef.current) return;

      // Get all timeline items with valid refs
      const validItemEntries = Object.entries(itemRefs.current).filter(
        ([_, ref]) => ref !== null
      );

      if (validItemEntries.length === 0) return;

      // Find which item is most visible in the viewport
      let bestVisibleItem = null;
      let bestVisibility = -1;

      validItemEntries.forEach(([id, ref]) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();

        // Calculate how much of the element is in the viewport
        const viewportHeight = window.innerHeight;
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);

        // If element is not visible at all, skip it
        if (visibleBottom <= visibleTop) return;

        const visibleHeight = visibleBottom - visibleTop;
        const visibilityRatio = visibleHeight / rect.height;

        // Weight central elements more (elements closer to the middle of the screen)
        const distanceFromCenter = Math.abs(
          (rect.top + rect.bottom) / 2 - viewportHeight / 2
        );
        const centralityFactor = 1 - distanceFromCenter / (viewportHeight / 2);

        // Combined score favoring both visibility and centrality
        const score = visibilityRatio * 0.7 + centralityFactor * 0.3;

        if (score > bestVisibility) {
          bestVisibility = score;
          bestVisibleItem = id;
        }
      });

      if (bestVisibleItem && bestVisibleItem !== activeItemId) {
        setActiveItemId(bestVisibleItem);
      }
    };

    // Debounce the scroll handler for better performance
    const debouncedHandleScroll = debounce(handleScroll, 50);

    window.addEventListener("scroll", debouncedHandleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [activeItemId, timelineItems]);

  // Render loading state
  if (isLoading) {
    return (
      <section id="timeline" className="py-24 bg-muted/50 relative">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Career Timeline
            </h2>
            <p className="text-xl text-muted-foreground">
              My professional journey and key milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
            {/* Skeleton for sidebar */}
            <div className="hidden lg:block">
              <Skeleton className="h-[calc(100vh-12rem)] w-full" />
            </div>

            {/* Skeleton for timeline items */}
            <div className="space-y-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="pl-12 relative">
                  <Skeleton className="h-8 w-8 rounded-full absolute left-0 top-1.5" />
                  <Skeleton className="h-[300px] w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Render error state
  if (error) {
    return (
      <section id="timeline" className="py-24 bg-muted/50 relative">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Career Timeline
            </h2>
            <p className="text-xl text-muted-foreground">
              My professional journey and key milestones.
            </p>
          </div>

          <Alert variant="destructive" className="max-w-3xl mx-auto">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      </section>
    );
  }

  // If no timeline items, show empty state
  if (timelineItems.length === 0) {
    return (
      <section id="timeline" className="py-24 bg-muted/50 relative">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Career Timeline
            </h2>
            <p className="text-xl text-muted-foreground">
              My professional journey and key milestones.
            </p>
          </div>

          <div className="text-center py-12 text-muted-foreground">
            No timeline data available.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="timeline" className="py-24 bg-muted/50 relative">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Career Timeline
          </h2>
          <p className="text-xl text-muted-foreground">
            My professional journey and key milestones.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8"
          ref={timelineRef}
        >
          {/* Sticky Sidebar */}
          <div className="hidden lg:block sticky top-24 self-start h-[calc(100vh-12rem)]">
            <div className="bg-card rounded-lg shadow-sm p-6 h-full border border-border/50 backdrop-blur-sm bg-opacity-80">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-primary">
                    {
                      timelineItems.find((item) => item.id === activeItemId)
                        ?.company
                    }
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {
                      timelineItems.find((item) => item.id === activeItemId)
                        ?.period
                    }
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Project Type</h4>
                  <div className="flex flex-wrap gap-2">
                    {timelineItems
                      .find((item) => item.id === activeItemId)
                      ?.categories.map((category) => (
                        <span
                          key={category}
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
                        >
                          {category}
                        </span>
                      ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {timelineItems
                      .find((item) => item.id === activeItemId)
                      ?.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Content */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-secondary/30 to-accent/30" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineItems.map((item) => (
                <div
                  key={item.id}
                  ref={(el: any) => (itemRefs.current[item.id] = el)}
                  className={cn(
                    "relative pl-12 transition-all duration-300",
                    activeItemId === item.id ? "opacity-100" : "opacity-70"
                  )}
                >
                  {/* Timeline Dot */}
                  <div
                    className={cn(
                      "absolute left-0 top-1.5 h-8 w-8 rounded-full border-4 flex items-center justify-center transition-all duration-300",
                      activeItemId === item.id
                        ? "border-primary bg-background timeline-item-active"
                        : "border-muted-foreground/20 bg-muted"
                    )}
                  >
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full transition-all duration-300",
                        activeItemId === item.id
                          ? "bg-primary"
                          : "bg-muted-foreground/40"
                      )}
                    />
                  </div>

                  {/* Timeline Content */}
                  <div
                    className={cn(
                      "bg-card rounded-lg shadow-sm p-6 border transition-all duration-300",
                      activeItemId === item.id
                        ? "border-primary/20 shadow-lg shadow-primary/5"
                        : "border-border/50"
                    )}
                  >
                    {/* Mobile-only header info */}
                    <div className="lg:hidden mb-4">
                      <h3 className="text-lg font-semibold mb-1 text-primary">
                        {item.company}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.period}
                      </p>

                      <div className="mt-3">
                        <h4 className="text-sm font-medium mb-2">
                          Project Type
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.categories.map((category) => (
                            <span
                              key={category}
                              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-3">
                        <h4 className="text-sm font-medium mb-2">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {item.role}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>

                    {/* Project Details */}
                    <div className="space-y-4">
                      {item.projects.map((project, idx) => (
                        <div
                          key={idx}
                          className="border-t border-border/50 pt-4"
                        >
                          <h4 className="font-medium mb-2 text-accent">
                            {project.name}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            {project.description}
                          </p>

                          {/* Placeholder for project images */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                            <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground text-sm border border-border/30 hover:border-primary/30 transition-colors relative">
                              <Image
                                src={
                                  project.techImage ||
                                  "/placeholder.svg?height=400&width=600"
                                }
                                alt={project.name}
                                className="object-cover rounded-md"
                                fill
                              />
                            </div>
                            <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground text-sm border border-border/30 hover:border-primary/30 transition-colors relative">
                            <Image
                                src={
                                  project.uiImage ||
                                  "/placeholder.svg?height=400&width=600"
                                }
                                alt={project.description}
                                className="object-cover rounded-md"
                                fill
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
