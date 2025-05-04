"use client"

import { useState, useEffect } from "react"
import type { Project } from "@/types/project"

export function useMockProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    // Mock projects data
    const mockProjects: Project[] = [
      {
        id: "1",
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with product management, cart, and checkout functionality.",
        image: "/placeholder.svg?height=400&width=600",
        category: "Web Application",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        year: "2023",
        featured: true,
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: "2",
        title: "Task Management Dashboard",
        description: "A collaborative task management tool with real-time updates and team collaboration features.",
        image: "/placeholder.svg?height=400&width=600",
        category: "Web Application",
        technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
        year: "2022",
        featured: true,
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: "3",
        title: "Financial Analytics Platform",
        description: "Data visualization dashboard for financial metrics with interactive charts and reports.",
        image: "/placeholder.svg?height=400&width=600",
        category: "Data Visualization",
        technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
        year: "2022",
        featured: true,
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: "4",
        title: "Mobile Fitness App",
        description: "Cross-platform mobile application for fitness tracking and workout planning.",
        image: "/placeholder.svg?height=400&width=600",
        category: "Mobile App",
        technologies: ["React Native", "Redux", "Firebase"],
        year: "2021",
        featured: true,
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: "5",
        title: "Real Estate Listing Platform",
        description: "Property listing and search platform with map integration and filtering options.",
        image: "/placeholder.svg?height=400&width=600",
        category: "Web Application",
        technologies: ["Angular", "Node.js", "MongoDB", "Google Maps API"],
        year: "2021",
        featured: false,
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: "6",
        title: "AI Content Generator",
        description: "Tool that uses AI to generate marketing content based on user inputs and preferences.",
        image: "/placeholder.svg?height=400&width=600",
        category: "AI/ML",
        technologies: ["Python", "TensorFlow", "React", "FastAPI"],
        year: "2023",
        featured: true,
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: "7",
        title: "Blockchain Voting System",
        description: "Secure voting platform built on blockchain technology for transparent elections.",
        image: "/placeholder.svg?height=400&width=600",
        category: "Blockchain",
        technologies: ["Solidity", "Ethereum", "React", "Web3.js"],
        year: "2022",
        featured: false,
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: "8",
        title: "Social Media Analytics Tool",
        description: "Platform for tracking and analyzing social media performance across multiple platforms.",
        image: "/placeholder.svg?height=400&width=600",
        category: "Data Visualization",
        technologies: ["React", "Python", "Django", "Chart.js"],
        year: "2021",
        featured: true,
        demoUrl: "#",
        githubUrl: "#",
      },
    ]

    setProjects(mockProjects)

    // Extract unique categories
    const uniqueCategories = Array.from(new Set(mockProjects.map((project) => project.category)))
    setCategories(uniqueCategories)
  }, [])

  return { projects, categories }
}
