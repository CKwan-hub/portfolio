"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectFiltersProps {
  categories: string[]
  activeFilter: string
  setActiveFilter: (category: string) => void
}

export function ProjectFilters({ categories, activeFilter, setActiveFilter }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      <Button
        variant={activeFilter === "all" ? "default" : "outline"}
        size="sm"
        onClick={() => setActiveFilter("all")}
        className={cn("rounded-full", activeFilter === "all" ? "bg-primary text-primary-foreground" : "")}
      >
        All
      </Button>

      {categories.map((category) => (
        <Button
          key={category}
          variant={activeFilter === category ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveFilter(category)}
          className={cn("rounded-full", activeFilter === category ? "bg-primary text-primary-foreground" : "")}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
