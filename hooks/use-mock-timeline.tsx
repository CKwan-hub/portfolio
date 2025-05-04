"use client"

import { useState, useEffect } from "react"
import type { TimelineItem } from "@/types/timeline"

export function useMockTimeline() {
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([])

  useEffect(() => {
    // Mock timeline data
    const mockTimelineItems: TimelineItem[] = [
      {
        id: "1",
        company: "Tech Innovations Inc.",
        role: "Senior Full-Stack Developer",
        period: "2021 - Present",
        description:
          "Leading development of enterprise-scale web applications with focus on performance and scalability.",
        categories: ["Web Application", "Enterprise Software"],
        technologies: ["React", "Node.js", "GraphQL", "AWS"],
        projects: [
          {
            name: "Enterprise Dashboard",
            description: "Centralized dashboard for monitoring company-wide metrics and KPIs with real-time updates.",
          },
          {
            name: "Customer Portal",
            description:
              "Self-service portal for customers to manage their accounts, subscriptions, and support requests.",
          },
        ],
      },
      {
        id: "2",
        company: "Digital Solutions Co.",
        role: "Full-Stack Developer",
        period: "2018 - 2021",
        description:
          "Developed and maintained multiple client projects across various industries and technology stacks.",
        categories: ["E-commerce", "SaaS"],
        technologies: ["Vue.js", "Express", "MongoDB", "Docker"],
        projects: [
          {
            name: "E-commerce Platform",
            description: "Fully featured online store with inventory management, payment processing, and analytics.",
          },
          {
            name: "Content Management System",
            description: "Custom CMS for a media company with workflow management and publishing capabilities.",
          },
        ],
      },
      {
        id: "3",
        company: "Startup Ventures",
        role: "Frontend Developer",
        period: "2016 - 2018",
        description: "Worked in an agile team to build and iterate on the company's flagship product.",
        categories: ["Fintech", "Mobile App"],
        technologies: ["React", "Redux", "React Native", "Firebase"],
        projects: [
          {
            name: "Financial Planning App",
            description: "Mobile application for personal finance management with budgeting and investment tracking.",
          },
          {
            name: "Admin Dashboard",
            description: "Internal tool for customer support and data management with role-based access control.",
          },
        ],
      },
      {
        id: "4",
        company: "Creative Agency",
        role: "Web Developer",
        period: "2014 - 2016",
        description: "Developed interactive websites and digital experiences for various clients.",
        categories: ["Marketing", "Interactive"],
        technologies: ["JavaScript", "HTML/CSS", "PHP", "WordPress"],
        projects: [
          {
            name: "Brand Campaign Site",
            description: "Interactive website for a major product launch with animations and social media integration.",
          },
          {
            name: "Portfolio Platform",
            description: "Custom portfolio platform for creative professionals with project showcasing capabilities.",
          },
        ],
      },
    ]

    setTimelineItems(mockTimelineItems)
  }, [])

  return { timelineItems }
}
