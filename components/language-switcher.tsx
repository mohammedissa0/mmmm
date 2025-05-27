"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar")
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className="flex items-center gap-2 text-[#3A3A3C] hover:text-[#1996CE] hover:bg-[#1996CE]/10 rounded-full px-3 py-2"
      >
        <Globe className="w-4 h-4" />
        <span className="font-semibold text-sm">{language === "ar" ? "EN" : "العربية"}</span>
      </Button>
    </motion.div>
  )
}
