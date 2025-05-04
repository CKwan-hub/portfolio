"use client"

import { useState } from "react"
import { PageLayout } from "@/components/layout/page-layout"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { ProjectFilters } from "@/components/projects/project-filters"
import { useProjects } from "@/hooks/use-projects"

export function ProjectsPage() {
  const { projects, categories, isLoading, error } = useProjects()
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
            <p className="text-xl text-muted-foreground">
              A showcase of work across various technologies and domains.
            </p>
          </div>

          <ProjectFilters categories={categories} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

          <ProjectsGrid projects={filteredProjects} />
        </div>
      </section>
    </PageLayout>
  )
}
