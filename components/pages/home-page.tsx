"use client"

import { PageLayout } from "@/components/layout/page-layout"
import { HeroSection } from "@/components/sections/hero-section"
import { TimelineSection } from "@/components/sections/timeline-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactSection } from "@/components/sections/contact-section"

export function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <TimelineSection />
      <ProjectsSection />
      <ContactSection />
    </PageLayout>
  )
}
