"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  TrendingUp,
  PieChart,
  Activity,
  FileText,
  Eye,
  Users,
  Database,
  Globe,
  Download,
  Calendar,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import ScrollToTop from "@/components/scroll-to-top"

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

export default function ReportsPage() {
  const reportStats = [
    { number: "500+", label: "تقرير منجز", icon: <FileText className="w-6 h-6" /> },
    { number: "50+", label: "عميل راضي", icon: <Users className="w-6 h-6" /> },
    { number: "99%", label: "دقة البيانات", icon: <Database className="w-6 h-6" /> },
    { number: "24/7", label: "تحديث مستمر", icon: <Activity className="w-6 h-6" /> },
  ]

  const reportTypes = [
    {
      icon: <BarChart className="w-12 h-12" />,
      title: "تقارير الأداء التجاري",
      description: "تحليل شامل لأداء الحساب التجاري في خرائط قوقل مع مؤشرات الأداء الرئيسية",
      features: [
        "تحليل الزيارات والمشاهدات",
        "معدل التفاعل مع المحتوى",
        "تحليل المراجعات والتقييمات",
        "مقارنة الأداء مع المنافسين",
      ],
      color: "from-blue-500 to-cyan-500",
      deliverables: ["تقرير شهري مفصل", "رسوم بيانية تفاعلية", "توصيات للتحسين"],
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "تقارير التحليل التنافسي",
      description: "دراسة مقارنة شاملة لموقعك التنافسي في السوق مع تحليل نقاط القوة والضعف",
      features: [
        "تحليل المنافسين المباشرين",
        "مقارنة الكلمات المفتاحية",
        "تحليل استراتيجيات التسويق",
        "فرص النمو والتطوير",
      ],
      color: "from-green-500 to-emerald-500",
      deliverables: ["تقرير تنافسي ربع سنوي", "خطة عمل استراتيجية", "مصفوفة المنافسين"],
    },
    {
      icon: <PieChart className="w-12 h-12" />,
      title: "تقارير البيانات المكانية",
      description: "تحليل معمق للبيانات الجغرافية والمكانية مع إحصائيات دقيقة ورؤى قيمة",
      features: [
        "تحليل التوزيع الجغرافي",
        "خرائط الكثافة السكانية",
        "تحليل أنماط الحركة",
        "إحصائيات المناطق الجغرافية",
      ],
      color: "from-purple-500 to-pink-500",
      deliverables: ["خرائط تحليلية", "قواعد بيانات مكانية", "تقارير إحصائية"],
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: "تقارير مراقبة الأداء",
      description: "مراقبة مستمرة لأداء المشاريع والأنظمة مع تنبيهات فورية وتحليل الاتجاهات",
      features: [
        "مراقبة الأداء في الوقت الفعلي",
        "تنبيهات الأخطاء والمشاكل",
        "تحليل اتجاهات الاستخدام",
        "تقارير الصيانة الوقائية",
      ],
      color: "from-orange-500 to-red-500",
      deliverables: ["لوحة تحكم تفاعلية", "تقارير أسبوعية", "تنبيهات فورية"],
    },
  ]

  const sampleReports = [
    {
      title: "تقرير أداء مول 360",
      description: "تحليل شامل لأداء الحساب التجاري لمول 360 في خرائط قوقل",
      type: "تقرير أداء",
      date: "ديسمبر 2024",
      pages: "25 صفحة",
      highlights: ["زيادة الزيارات بنسبة 45%", "تحسن التقييمات إلى 4.8/5", "نمو المراجعات بنسبة 60%"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "دراسة تنافسية للمولات التجارية",
      description: "تحليل مقارن للمولات التجارية الرئيسية في الكويت",
      type: "تحليل تنافسي",
      date: "نوفمبر 2024",
      pages: "40 صفحة",
      highlights: ["تحليل 15 مول رئيسي", "مقارنة الاستراتيجيات", "فرص النمو المحددة"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "تقرير البيانات المكانية للكويت",
      description: "تحليل شامل للبيانات المكانية والجغرافية لدولة الكويت",
      type: "بيانات مكانية",
      date: "أكتوبر 2024",
      pages: "60 صفحة",
      highlights: ["خرائط تفاعلية", "إحصائيات ديموغرافية", "تحليل التوزيع السكاني"],
      color: "from-purple-500 to-pink-500",
    },
  ]

  const reportFeatures = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "رؤى قابلة للتنفيذ",
      description: "تحليلات عملية يمكن تطبيقها مباشرة لتحسين الأداء",
      color: "text-blue-500",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "بيانات دقيقة وموثوقة",
      description: "معلومات محدثة ودقيقة من مصادر موثوقة ومتعددة",
      color: "text-green-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "تحليل شامل ومتكامل",
      description: "نظرة شاملة تغطي جميع جوانب الأداء والتطوير",
      color: "text-purple-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "توقعات مستقبلية",
      description: "تنبؤات وتوقعات مبنية على تحليل البيانات التاريخية",
      color: "text-orange-500",
    },
  ]

  return (
   <div className="min-h-screen bg-white">
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
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge className="bg-white/20 text-white border-white/30 text-lg px-6 py-2 mb-8 rounded-full">
              <BarChart className="w-5 h-5 mr-2" />
              تحليلات وتقارير متقدمة
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black mb-6">التقارير والتحاليل</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              تقارير شاملة وتحليلات متقدمة تساعدك في اتخاذ قرارات مدروسة وتحسين أداء عملك
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Report Stats */}
      <motion.section
        className="py-20 px-4 bg-gray-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {reportStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center shadow-xl border-0 bg-white hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-[#1996CE] mb-4 flex justify-center">{stat.icon}</div>
                    <div className="text-4xl font-black text-[#3A3A3C] mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Report Types */}
      <motion.section
        className="py-20 px-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Badge className="bg-[#1996CE]/10 text-[#1996CE] border-[#1996CE]/20 text-lg px-6 py-2 mb-6">
              أنواع التقارير
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-[#3A3A3C] mb-6">تقارير شاملة ومتخصصة</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#1996CE] to-[#3A3A3C] mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {reportTypes.map((report, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full shadow-2xl border-0 overflow-hidden hover:shadow-3xl transition-all duration-500">
                  <CardHeader className={`bg-gradient-to-r ${report.color} text-white p-8`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        {report.icon}
                      </div>
                      <CardTitle className="text-2xl font-bold">{report.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <CardDescription className="text-[#3A3A3C] text-lg leading-relaxed mb-6">
                      {report.description}
                    </CardDescription>

                    <div className="mb-6">
                      <h4 className="font-bold text-[#3A3A3C] mb-3 text-lg">يشمل التقرير:</h4>
                      <div className="space-y-3">
                        {report.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#1996CE] rounded-full"></div>
                            <span className="text-[#3A3A3C] font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#3A3A3C] mb-3 text-lg">المخرجات:</h4>
                      <div className="space-y-2">
                        {report.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-[#3A3A3C] font-medium">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Sample Reports */}
      <motion.section
        className="py-20 px-4 bg-gray-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Badge className="bg-[#3A3A3C]/10 text-[#3A3A3C] border-[#3A3A3C]/20 text-lg px-6 py-2 mb-6">
              نماذج من أعمالنا
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-[#3A3A3C] mb-6">تقارير منجزة</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#1996CE] to-[#3A3A3C] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-[#3A3A3C] max-w-3xl mx-auto">
              أمثلة على التقارير والتحليلات التي أنجزناها لعملائنا
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleReports.map((report, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <CardHeader className={`bg-gradient-to-r ${report.color} text-white p-6`}>
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="w-8 h-8" />
                      <div>
                        <CardTitle className="text-lg font-bold">{report.title}</CardTitle>
                        <div className="flex gap-2 mt-2">
                          <Badge className="bg-white/20 text-white text-xs">{report.type}</Badge>
                          <Badge className="bg-white/20 text-white text-xs">{report.pages}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardDescription className="text-[#3A3A3C] leading-relaxed mb-4">
                      {report.description}
                    </CardDescription>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-[#1996CE]" />
                        <span className="text-sm text-[#3A3A3C] font-medium">{report.date}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-[#3A3A3C] mb-2 text-sm">النتائج الرئيسية:</h4>
                      <div className="space-y-1">
                        {report.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#1996CE] rounded-full"></div>
                            <span className="text-[#3A3A3C] text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-[#1996CE] text-[#1996CE] hover:bg-[#1996CE] hover:text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      عرض التقرير
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Report Features */}
      <motion.section
        className="py-20 px-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Badge className="bg-[#1996CE]/10 text-[#1996CE] border-[#1996CE]/20 text-lg px-6 py-2 mb-6">
              مميزات تقاريرنا
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-[#3A3A3C] mb-6">لماذا تختار تقاريرنا؟</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#1996CE] to-[#3A3A3C] mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reportFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full text-center shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="p-8">
                    <div className={`mx-auto mb-4 ${feature.color} bg-gray-50 p-4 rounded-2xl w-fit`}>
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg text-[#3A3A3C] font-bold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <CardDescription className="text-[#3A3A3C] leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-[#1996CE] via-[#2BA3D4] to-[#3A3A3C] text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-white/20 text-white border-white/30 text-lg px-6 py-2 mb-8 rounded-full">
              احصل على تقريرك المخصص
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-6">هل تحتاج إلى تقرير مخصص؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              تواصل معنا اليوم واحصل على تقرير مفصل وتحليل شامل لعملك أو مشروعك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#1996CE] hover:bg-gray-100 text-xl px-8 py-4 rounded-full font-bold shadow-2xl"
                >
                  <Link href="/contact">اطلب تقريرك الآن</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1996CE] text-xl px-8 py-4 rounded-full font-bold"
                >
                  <Link href="/services">اكتشف خدماتنا</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
