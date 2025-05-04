import type { ReactNode } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-1 pt-20 ${className}`}>{children}</main>
      <Footer />
    </div>
  )
}
