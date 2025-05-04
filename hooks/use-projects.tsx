"use client"

import { useState, useEffect } from "react"
import type { Project } from "@/types/project"
import { fetchProjects } from "@/lib/api"

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadProjects() {
      try {
        setIsLoading(true)
        const data = await fetchProjects()
        setProjects(data.projects)
        setCategories(data.categories)
        setError(null)
      } catch (err) {
        console.error("Error loading projects:", err)
        setError("Failed to load projects. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    loadProjects()
  }, [])

  return { projects, categories, isLoading, error }
}
