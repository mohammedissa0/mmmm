"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Satellite,
  Smartphone,
  Building,
  Users,
  Globe,
  BarChart,
  Zap,
  Award,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Database,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ScrollToTop from "@/components/scroll-to-top"
import { useLanguage } from "@/contexts/language-context"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const MapBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Grid Lines */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </motion.div>

      {/* Animated Map Points */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 md:w-3 md:h-3 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Animated Connection Lines */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <path d="M20,20 Q50,80 80,20 T120,80" stroke="white" strokeWidth="1" fill="none" opacity="0.2" />
        <path d="M10,60 Q40,20 70,60 T110,20" stroke="white" strokeWidth="1" fill="none" opacity="0.2" />
      </motion.svg>

      {/* Floating Map Icons */}
      {[MapPin, Globe, Satellite].map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute text-white/20 hidden md:block"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 2,
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}
    </div>
  )
}

// Custom Link component that scrolls to top
const ScrollLink = ({ href, children, className, ...props }: any) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  )
}

export default function HomePage() {
  const { t, dir } = useLanguage()

  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight

  const stats = [
    { number: "2022", label: t("stats.founded"), icon: <Award className="w-5 h-5 md:w-6 md:h-6" /> },
    { number: "100+", label: t("stats.projects"), icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6" /> },
    { number: "50+", label: t("stats.clients"), icon: <Users className="w-5 h-5 md:w-6 md:h-6" /> },
    { number: "24/7", label: t("stats.support"), icon: <Zap className="w-5 h-5 md:w-6 md:h-6" /> },
  ]

  const services = [
    {
      icon: <Satellite className="w-8 h-8 md:w-12 md:h-12" />,
      title: t("services.spatial_data"),
      description: t("services.spatial_data_desc"),
      features: [
        dir === "rtl" ? "تحليل مرئيات الأقمار الصناعية" : "Satellite imagery analysis",
        dir === "rtl" ? "جمع البيانات الميدانية" : "Field data collection",
        dir === "rtl" ? "معالجة البيانات الجغرافية" : "Geographic data processing",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Smartphone className="w-8 h-8 md:w-12 md:h-12" />,
      title: t("services.digital_maps"),
      description: t("services.digital_maps_desc"),
      features: [
        dir === "rtl" ? "خرائط تفاعلية" : "Interactive maps",
        dir === "rtl" ? "تطبيقات محمولة" : "Mobile applications",
        dir === "rtl" ? "واجهات برمجة التطبيقات" : "API interfaces",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Building className="w-8 h-8 md:w-12 md:h-12" />,
      title: t("services.google_business"),
      description: t("services.google_business_desc"),
      features: [
        dir === "rtl" ? "توثيق الحساب" : "Account verification",
        dir === "rtl" ? "تحسين الظهور" : "Visibility optimization",
        dir === "rtl" ? "إدارة المراجعات" : "Review management",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MapPin className="w-8 h-8 md:w-12 md:h-12" />,
      title: t("services.the_dot"),
      description: t("services.the_dot_desc"),
      features: [
        dir === "rtl" ? "رقمنة الخرائط" : "Map digitization",
        dir === "rtl" ? "إضافة المباني" : "Building addition",
        dir === "rtl" ? "تطوير واجهات برمجية" : "API development",
      ],
      color: "from-orange-500 to-red-500",
    },
  ]

  const projects = [
    {
      title: t("projects.mosque_project"),
      description: t("projects.mosque_desc"),
      image: "/placeholder.svg?height=300&width=400",
      category: dir === "rtl" ? "مشروع تطوعي" : "Volunteer Project",
      status: dir === "rtl" ? "مكتمل" : "Completed",
    },
    {
      title: t("projects.voting_app"),
      description: t("projects.voting_desc"),
      image: "/placeholder.svg?height=300&width=400",
      category: dir === "rtl" ? "تطبيق حكومي" : "Government App",
      status: dir === "rtl" ? "نشط" : "Active",
    },
    {
      title: t("projects.ummah_guide"),
      description: t("projects.ummah_desc"),
      image: "/placeholder.svg?height=300&width=400",
      category: dir === "rtl" ? "منصة معلومات" : "Information Platform",
      status: dir === "rtl" ? "قيد التطوير" : "In Development",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20" dir={dir}>
      <ScrollToTop />

      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-[#1996CE] via-[#2BA3D4] to-[#3A3A3C] text-white py-16 md:py-32 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <MapBackground />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div variants={fadeInLeft} initial="initial" animate="animate" className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Badge className="bg-white/20 text-white border-white/30 text-sm md:text-lg px-3 md:px-4 py-1 md:py-2 mb-4 md:mb-6">
                    {t("home.hero.badge")}
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 leading-tight">
                    {t("home.hero.title")}{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                      {dir === "rtl" ? "الكويت" : ""}
                    </span>
                  </h1>
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-blue-100">
                    {t("home.hero.subtitle")}
                  </h2>
                </motion.div>

                <motion.p
                  className="text-base md:text-xl lg:text-2xl leading-relaxed text-blue-50 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {t("home.hero.description")}
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 md:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-[#1996CE] hover:bg-gray-100 text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-full font-bold shadow-2xl w-full sm:w-auto"
                  >
                    <ScrollLink href="/services" className="flex items-center justify-center gap-2">
                      {t("home.hero.discover_services")}
                      <ArrowIcon className="w-4 h-4 md:w-5 md:h-5" />
                    </ScrollLink>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#1996CE] text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-full font-bold w-full sm:w-auto"
                  >
                    <ScrollLink href="/projects">{t("home.hero.view_work")}</ScrollLink>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInRight} initial="initial" animate="animate" className="relative mt-8 lg:mt-0">
              <div className="relative">
                <motion.div
                  className="w-full h-64 md:h-96 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 p-6 md:p-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="h-full flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="relative"
                    >
                      <Globe className="w-20 h-20 md:w-32 md:h-32 text-white/80" />
                      <motion.div
                        className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-4 h-4 md:w-8 md:h-8 bg-yellow-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                      <motion.div
                        className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 w-3 h-3 md:w-6 md:h-6 bg-green-400 rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-3 md:-top-6 -right-3 md:-right-6 w-8 h-8 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <MapPin className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-3 md:-bottom-6 -left-3 md:-left-6 w-8 h-8 md:w-12 md:h-12 bg-green-400 rounded-full flex items-center justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Satellite className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-12 md:py-20 px-4 bg-gray-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center shadow-xl border-0 bg-white hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-4 md:p-8">
                    <div className="text-[#1996CE] mb-2 md:mb-4 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl md:text-4xl font-black text-[#3A3A3C] mb-1 md:mb-2">{stat.number}</div>
                    <div className="text-sm md:text-lg font-semibold text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="py-20 md:py-32 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-10 md:top-20 right-10 md:right-20 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-[#1996CE]/10 to-[#2BA3D4]/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 md:bottom-20 left-10 md:left-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-[#3A3A3C]/8 to-[#1996CE]/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div variants={fadeInUp} className="text-center mb-16 md:mb-24">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <Badge className="bg-gradient-to-r from-[#1996CE]/10 to-[#3A3A3C]/10 text-[#1996CE] border-[#1996CE]/20 text-lg md:text-xl px-8 py-3 mb-8 rounded-full font-bold shadow-lg">
                <Globe className="w-5 h-5 mr-2" />
                {t("about.badge")}
              </Badge>
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-black text-[#3A3A3C] mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("about.title")}
            </motion.h2>
            <motion.div
              className="w-32 md:w-40 h-2 bg-gradient-to-r from-[#1996CE] via-[#2BA3D4] to-[#3A3A3C] mx-auto mb-8 rounded-full shadow-lg"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.p
              className="text-xl md:text-2xl text-[#3A3A3C]/80 max-w-4xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t("about.description")}
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div variants={fadeInLeft} className="space-y-8 md:space-y-12">
              {/* Vision Card */}
              <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-white to-blue-50/50 hover:shadow-3xl transition-all duration-500">
                  <CardHeader className="bg-gradient-to-r from-[#1996CE] via-[#2BA3D4] to-[#1996CE] text-white p-8 md:p-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-6 mb-6">
                        <motion.div
                          className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                        >
                          <Globe className="w-10 h-10 md:w-12 md:h-12" />
                        </motion.div>
                        <div>
                          <CardTitle className="text-3xl md:text-4xl font-black mb-2">{t("about.vision")}</CardTitle>
                          <div className="w-16 h-1 bg-white/60 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8">
                    <motion.p
                      className="text-2xl md:text-3xl font-bold text-[#3A3A3C] leading-relaxed text-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      {t("about.vision_text")}
                    </motion.p>
                    <motion.div
                      className="mt-6 flex justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="w-12 h-12 bg-[#1996CE]/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-[#1996CE]" />
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Mission Card */}
              <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-white to-gray-50/50 hover:shadow-3xl transition-all duration-500">
                  <CardHeader className="bg-gradient-to-r from-[#3A3A3C] via-[#4A4A4E] to-[#3A3A3C] text-white p-8 md:p-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-6 mb-6">
                        <motion.div
                          className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30"
                          whileHover={{ rotate: -360 }}
                          transition={{ duration: 0.8 }}
                        >
                          <BarChart className="w-10 h-10 md:w-12 md:h-12" />
                        </motion.div>
                        <div>
                          <CardTitle className="text-3xl md:text-4xl font-black mb-2">{t("about.mission")}</CardTitle>
                          <div className="w-16 h-1 bg-white/60 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8">
                    <motion.p
                      className="text-xl md:text-2xl text-[#3A3A3C] leading-relaxed text-center font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      {t("about.mission_text")}
                    </motion.p>
                    <motion.div
                      className="mt-6 flex justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="w-12 h-12 bg-[#3A3A3C]/10 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-[#3A3A3C]" />
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInRight} className="mt-8 lg:mt-0">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="shadow-3xl border-0 overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 hover:shadow-4xl transition-all duration-500">
                  <CardHeader className="bg-gradient-to-br from-gray-50 via-white to-blue-50/50 p-8 md:p-10 border-b border-gray-100">
                    <div className="flex items-center gap-6 mb-6">
                      <motion.div
                        className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#1996CE]/10 to-[#3A3A3C]/10 rounded-2xl flex items-center justify-center border border-[#1996CE]/20"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Building className="w-10 h-10 md:w-12 md:h-12 text-[#1996CE]" />
                      </motion.div>
                      <div>
                        <CardTitle className="text-3xl md:text-4xl font-black text-[#3A3A3C] mb-3">
                          {t("about.company_history")}
                        </CardTitle>
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <Badge className="bg-gradient-to-r from-[#1996CE] to-[#2BA3D4] text-white text-lg md:text-xl px-6 py-3 rounded-full font-bold shadow-lg">
                            {t("about.founded_in")}
                          </Badge>
                        </motion.div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 md:p-10">
                    <motion.p
                      className="text-lg md:text-xl text-[#3A3A3C] leading-relaxed mb-8 font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {t("about.history_text")}
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      {[
                        {
                          text:
                            dir === "rtl"
                              ? "مشاريع جمع ومعالجة البيانات الجغرافية"
                              : "Geographic data collection and processing projects",
                          icon: <Satellite className="w-5 h-5" />,
                          color: "text-blue-500",
                        },
                        {
                          text: dir === "rtl" ? "حلول قواعد البيانات الضخمة" : "Big data solutions",
                          icon: <Database className="w-5 h-5" />,
                          color: "text-green-500",
                        },
                        {
                          text: dir === "rtl" ? "خدمة قطاع الشركات الخاصة" : "Private sector services",
                          icon: <Building className="w-5 h-5" />,
                          color: "text-purple-500",
                        },
                        {
                          text:
                            dir === "rtl"
                              ? "دعم التجارة الإلكترونية والتقليدية"
                              : "E-commerce and traditional commerce support",
                          icon: <Globe className="w-5 h-5" />,
                          color: "text-orange-500",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                          initial={{ opacity: 0, x: dir === "rtl" ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          whileHover={{ scale: 1.02, x: dir === "rtl" ? -5 : 5 }}
                        >
                          <div className={`${item.color} bg-gray-50 p-2 rounded-lg flex-shrink-0`}>{item.icon}</div>
                          <span className="text-[#3A3A3C] font-medium text-sm md:text-base leading-relaxed">
                            {item.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className="mt-8 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <Button
                        asChild
                        className="bg-gradient-to-r from-[#1996CE] to-[#2BA3D4] hover:from-[#1580B8] hover:to-[#1996CE] text-white font-bold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        <ScrollLink href="/about" className="flex items-center gap-2">
                          {t("common.learn_more")}
                          <ArrowIcon className="w-5 h-5" />
                        </ScrollLink>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-16 md:py-24 px-4 bg-gray-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-20">
            <Badge className="bg-[#1996CE]/10 text-[#1996CE] border-[#1996CE]/20 text-sm md:text-lg px-4 md:px-6 py-1 md:py-2 mb-4 md:mb-6">
              {t("services.badge")}
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#3A3A3C] mb-6 md:mb-8">
              {t("services.title")}
            </h2>
            <div className="w-24 md:w-32 h-1 md:h-2 bg-gradient-to-r from-[#1996CE] to-[#3A3A3C] mx-auto mb-6 md:mb-8 rounded-full"></div>
            <p className="text-base md:text-xl text-[#3A3A3C] max-w-3xl mx-auto leading-relaxed">
              {t("services.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full shadow-2xl border-0 overflow-hidden hover:shadow-3xl transition-all duration-500">
                  <CardHeader className={`bg-gradient-to-r ${service.color} text-white p-4 md:p-8`}>
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        {service.icon}
                      </div>
                      <CardTitle className="text-lg md:text-2xl font-bold">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-8">
                    <CardDescription className="text-[#3A3A3C] text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2 md:space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 md:gap-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#1996CE] rounded-full flex-shrink-0"></div>
                          <span className="text-sm md:text-base text-[#3A3A3C] font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12 md:mt-16">
            <Button
              asChild
              size="lg"
              className="bg-[#1996CE] hover:bg-[#1580B8] text-white text-lg md:text-xl px-8 md:px-10 py-3 md:py-4 rounded-full font-bold shadow-xl w-full sm:w-auto"
            >
              <ScrollLink href="/services" className="flex items-center justify-center gap-2">
                {t("services.view_all")}
                <ArrowIcon className="w-4 h-4 md:w-5 md:h-5" />
              </ScrollLink>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Showcase */}
      <motion.section
        className="py-16 md:py-24 px-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-20">
            <Badge className="bg-[#3A3A3C]/10 text-[#3A3A3C] border-[#3A3A3C]/20 text-sm md:text-lg px-4 md:px-6 py-1 md:py-2 mb-4 md:mb-6">
              {t("projects.badge")}
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#3A3A3C] mb-6 md:mb-8">
              {t("projects.title")}
            </h2>
            <div className="w-24 md:w-32 h-1 md:h-2 bg-gradient-to-r from-[#1996CE] to-[#3A3A3C] mx-auto mb-6 md:mb-8 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden shadow-2xl border-0 hover:shadow-3xl transition-all duration-500">
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-3 md:top-4 right-3 md:right-4 flex flex-col gap-2">
                      <Badge className="bg-white/90 text-[#3A3A3C] font-semibold text-xs md:text-sm">
                        {project.category}
                      </Badge>
                      <Badge
                        className={`${
                          project.status === "مكتمل" || project.status === "Completed"
                            ? "bg-green-500"
                            : project.status === "نشط" || project.status === "Active"
                              ? "bg-blue-500"
                              : "bg-orange-500"
                        } text-white font-semibold text-xs md:text-sm`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-lg md:text-xl font-bold text-[#3A3A3C] mb-2">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0">
                    <CardDescription className="text-[#3A3A3C] text-sm md:text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12 md:mt-16">
            <Button
              asChild
              size="lg"
              className="bg-[#3A3A3C] hover:bg-[#2A2A2E] text-white text-lg md:text-xl px-8 md:px-10 py-3 md:py-4 rounded-full font-bold shadow-xl w-full sm:w-auto"
            >
              <ScrollLink href="/projects" className="flex items-center justify-center gap-2">
                {t("projects.view_all")}
                <ArrowIcon className="w-4 h-4 md:w-5 md:h-5" />
              </ScrollLink>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 md:py-24 px-4 bg-gradient-to-r from-[#1996CE] via-[#2BA3D4] to-[#3A3A3C] text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <MapBackground />

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-white/20 text-white border-white/30 text-sm md:text-lg px-4 md:px-6 py-1 md:py-2 mb-6 md:mb-8">
              {t("cta.badge")}
            </Badge>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8">{t("cta.title")}</h2>
            <p className="text-lg md:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#1996CE] hover:bg-gray-100 text-lg md:text-xl px-8 md:px-10 py-3 md:py-4 rounded-full font-bold shadow-2xl w-full sm:w-auto"
                >
                  <ScrollLink href="/contact" className="flex items-center justify-center gap-2">
                    {t("cta.contact_now")}
                    <ArrowIcon className="w-4 h-4 md:w-5 md:h-5" />
                  </ScrollLink>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1996CE] text-lg md:text-xl px-8 md:px-10 py-3 md:py-4 rounded-full font-bold w-full sm:w-auto"
                >
                  <ScrollLink href="/services">{t("cta.explore_services")}</ScrollLink>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
