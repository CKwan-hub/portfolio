"use client"

import { useState, useEffect } from "react"
import type { TimelineItem } from "@/types/timeline"
import { fetchTimeline } from "@/lib/api"

export function useTimeline() {
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadTimeline() {
      try {
        setIsLoading(true)
        const data = await fetchTimeline()
        console.log("date from timeline: ", data)
        setTimelineItems(data.timelineItems)
        setError(null)
      } catch (err) {
        console.error("Error loading timeline:", err)
        setError("Failed to load timeline. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    loadTimeline()
  }, [])

  return { timelineItems, isLoading, error }
}
