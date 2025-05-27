"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Calendar, User, Clock, Code, ExternalLink } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import ScrollToTop from "@/components/scroll-to-top"
import { useLanguage } from "@/contexts/language-context"
import { ImageSlider } from "@/components/image-slider"
import { projects } from "@/data/projects"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { t, dir } = useLanguage()
  const ArrowIcon = dir === "rtl" ? ArrowRight : ArrowLeft

  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-white pt-20" dir={dir}>
      <ScrollToTop />

      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-[#1996CE] via-[#2BA3D4] to-[#3A3A3C] text-white py-20 md:py-32 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <Button asChild variant="ghost" className="text-white hover:bg-white/20 mb-8 rounded-full">
              <Link href="/projects" className="flex items-center gap-2">
                <ArrowIcon className="w-5 h-5" />
                {t("common.back_to_projects")}
              </Link>
            </Button>
            <Badge className="bg-white/20 text-white border-white/30 text-lg px-6 py-2 mb-8 rounded-full">
              {project.category[dir]}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black mb-6">{project.title[dir]}</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">{project.description[dir]}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Details */}
      <motion.section
        className="py-20 px-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div variants={fadeInUp} className="mb-12">
                <h2 className="text-3xl font-black text-[#3A3A3C] mb-6">{t("common.project_gallery")}</h2>
                <ImageSlider
                  images={project.images}
                  alt={project.title[dir]}
                  className="h-96 lg:h-[500px] shadow-2xl"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="shadow-2xl border-0">
                  <CardHeader className="bg-gradient-to-r from-[#1996CE] to-[#2BA3D4] text-white p-8">
                    <CardTitle className="text-3xl font-black">
                      {dir === "rtl" ? "تفاصيل المشروع" : "Project Details"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="prose prose-lg max-w-none">
                      <p className="text-[#3A3A3C] text-xl leading-relaxed">{project.details[dir]}</p>
                    </div>

                    {project.technologies && (
                      <div className="mt-8">
                        <h3 className="text-2xl font-bold text-[#3A3A3C] mb-4">
                          {dir === "rtl" ? "التقنيات المستخدمة" : "Technologies Used"}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-[#1996CE] border-[#1996CE] text-lg px-4 py-2"
                            >
                              <Code className="w-4 h-4 mr-2" />
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div variants={fadeInUp} className="sticky top-24">
                <Card className="shadow-2xl border-0 mb-8">
                  <CardHeader className="bg-gradient-to-r from-[#3A3A3C] to-[#4A4A4E] text-white p-6">
                    <CardTitle className="text-2xl font-bold">
                      {dir === "rtl" ? "معلومات المشروع" : "Project Information"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#1996CE]/10 rounded-full flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-[#1996CE]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">{dir === "rtl" ? "السنة" : "Year"}</p>
                        <p className="text-lg font-bold text-[#3A3A3C]">{project.year}</p>
                      </div>
                    </div>

                    {project.duration && (
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#1996CE]/10 rounded-full flex items-center justify-center">
                          <Clock className="w-6 h-6 text-[#1996CE]" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 font-medium">{dir === "rtl" ? "المدة" : "Duration"}</p>
                          <p className="text-lg font-bold text-[#3A3A3C]">{project.duration}</p>
                        </div>
                      </div>
                    )}

                    {project.client && (
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#1996CE]/10 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-[#1996CE]" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 font-medium">{dir === "rtl" ? "العميل" : "Client"}</p>
                          <p className="text-lg font-bold text-[#3A3A3C]">{project.client}</p>
                        </div>
                      </div>
                    )}

                    <div className="pt-4 border-t">
                      <Badge
                        className={`${
                          project.status[dir] === "مكتمل" || project.status[dir] === "Completed"
                            ? "bg-green-500"
                            : project.status[dir] === "نشط" || project.status[dir] === "Active"
                              ? "bg-blue-500"
                              : "bg-orange-500"
                        } text-white text-lg px-4 py-2 w-full justify-center`}
                      >
                        {project.status[dir]}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-2xl border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#3A3A3C] mb-4">
                      {dir === "rtl" ? "هل تحتاج مشروع مشابه؟" : "Need a Similar Project?"}
                    </h3>
                    <p className="text-[#3A3A3C] mb-6">
                      {dir === "rtl"
                        ? "تواصل معنا لمناقشة مشروعك والحصول على استشارة مجانية"
                        : "Contact us to discuss your project and get a free consultation"}
                    </p>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-[#1996CE] to-[#2BA3D4] hover:from-[#1580B8] hover:to-[#1996CE] text-white font-bold py-3 rounded-full"
                    >
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        {t("common.contact_us")}
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <motion.section
          className="py-20 px-4 bg-gray-50"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="container mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#3A3A3C] mb-6">
                {dir === "rtl" ? "مشاريع أخرى" : "Other Projects"}
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-[#1996CE] to-[#3A3A3C] mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="overflow-hidden shadow-2xl border-0 hover:shadow-3xl transition-all duration-500">
                    <div className="relative h-48 overflow-hidden">
                      <ImageSlider
                        images={[relatedProject.images[0]]}
                        alt={relatedProject.title[dir]}
                        className="h-full"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-[#3A3A3C] font-semibold">
                          {relatedProject.category[dir]}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="p-6">
                      <CardTitle className="text-xl font-bold text-[#3A3A3C] mb-2">
                        {relatedProject.title[dir]}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <CardDescription className="text-[#3A3A3C] leading-relaxed mb-4">
                        {relatedProject.description[dir].substring(0, 120)}...
                      </CardDescription>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-[#1996CE] text-[#1996CE] hover:bg-[#1996CE] hover:text-white"
                      >
                        <Link
                          href={`/projects/${relatedProject.id}`}
                          className="flex items-center justify-center gap-2"
                        >
                          {t("common.view_details")}
                          <ArrowIcon className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </div>
  )
}
