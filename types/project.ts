export interface Project {
  id: string
  title: string
  description: string
  image?: string
  category: string
  technologies: string[]
  year: string
  featured: boolean
  demoUrl?: string
  githubUrl?: string
}
