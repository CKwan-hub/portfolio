import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { Project } from "@/types/project"


export async function GET() {
  try {
    // Fetch projects from database using Prisma
    const projects = await prisma.project.findMany()

    // Extract unique categories
    const categories = Array.from(new Set(projects.map((project: any) => project.category)))

    return NextResponse.json({
      projects,
      categories,
    })
  } catch (error) {
    console.error("Error fetching projects data:", error)
    return NextResponse.json({ error: "Failed to fetch projects data: " }, { status: 500 })
  }
}