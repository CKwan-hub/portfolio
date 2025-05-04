"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface AppContextType {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return <AppContext.Provider value={{ sidebarOpen, setSidebarOpen }}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}
