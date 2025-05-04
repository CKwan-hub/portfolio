export interface TimelineItem {
  id: string
  company: string
  role: string
  period: string
  description: string
  categories: string[]
  technologies: string[]
  projects: {
    name: string
    description: string
    techImage: string
    uiImage: string
  }[]
}
