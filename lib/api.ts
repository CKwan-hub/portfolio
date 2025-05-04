import type { Project } from "@/types/project"
import type { Skill } from "@/types/skill"
import type { TimelineItem } from "@/types/timeline"

// API response types
export interface ProjectsResponse {
  projects: Project[]
  categories: string[]
}

export interface SkillsResponse {
  skills: Skill[]
  categories: string[]
}

export interface TimelineResponse {
  timelineItems: TimelineItem[]
}

// API functions
export async function fetchProjects(): Promise<ProjectsResponse> {
  const response = await fetch("/api/projects", {
    next: { revalidate: 3600 }, // Revalidate every hour
  })

  if (!response.ok) {
    throw new Error("Failed to fetch projects")
  }

  return response.json()
}

export async function fetchSkills(): Promise<SkillsResponse> {
  const response = await fetch("/api/skills", {
    next: { revalidate: 3600 }, // Revalidate every hour
  })

  if (!response.ok) {
    throw new Error("Failed to fetch skills")
  }

  return response.json()
}

export async function fetchTimeline(): Promise<TimelineResponse> {
  const response = await fetch("/api/timeline", {
    next: { revalidate: 3600 }, // Revalidate every hour
  })

  if (!response.ok) {
    throw new Error("Failed to fetch timeline")
  }

  return response.json()
}
