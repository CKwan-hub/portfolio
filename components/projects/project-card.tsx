import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@/types/project"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all project-card border-border/40 hover:border-primary/30">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={project.image || "/images/default/placeholder.png?height=400&width=600"}
          alt={project.title}
          className="object-cover"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
      </div>

      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.category}</p>
          </div>
          <Badge variant="outline" className="border-primary/50 text-primary bg-primary/5">
            {project.year}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        {project.demoUrl && (
          <Button
            variant="outline"
            size="sm"
            className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
            asChild
          >
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              Demo
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}

        {project.githubUrl && (
          <Button
            variant="outline"
            size="sm"
            className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
            asChild
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              Code
              <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
