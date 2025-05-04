"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { ProjectFilters } from "@/components/projects/project-filters"
import { useProjects } from "@/hooks/use-projects"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function ProjectsSection() {
  const { projects, categories, isLoading, error } = useProjects()
  const [activeFilter, setActiveFilter] = useState<string>("all")

  // Show only featured projects on home page
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 20)
  console.log("featuredProjects: ", featuredProjects)

  const filteredProjects =
    activeFilter === "all" ? featuredProjects : featuredProjects.filter((project) => project.category === activeFilter)

  // Render loading state
  if (isLoading) {
    return (
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">A selection of my most significant work.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Skeleton className="h-10 w-20 rounded-full" />
            <Skeleton className="h-10 w-32 rounded-full" />
            <Skeleton className="h-10 w-28 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-[400px] w-full rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Render error state
  if (error) {
    return (
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">A selection of my most significant work.</p>
          </div>

          <Alert variant="destructive" className="max-w-3xl mx-auto">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      </section>
    )
  }

  // If no projects, show empty state
  if (projects.length === 0) {
    return (
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">A selection of my most significant work.</p>
          </div>

          <div className="text-center py-12 text-muted-foreground">No projects available.</div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">A selection of my most significant work.</p>
        </div>

        <ProjectFilters categories={categories} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

        <ProjectsGrid projects={filteredProjects} />

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
