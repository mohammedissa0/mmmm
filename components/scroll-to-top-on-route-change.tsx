"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTopOnRouteChange() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
