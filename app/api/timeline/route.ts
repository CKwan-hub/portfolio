import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET() {
  try {
    // Fetch timeline items from database using Prisma
    const timelineItems: any = await prisma.timelineItem.findMany({
      include: {
        projects: true
      },
      orderBy: {
        createdAt: 'asc', 
      },
    })

    return NextResponse.json({ timelineItems })
  } catch (error) {
    console.error("Error fetching timeline data:", error)
    return NextResponse.json({ error: "Failed to fetch timeline data" }, { status: 500 })
  }
}