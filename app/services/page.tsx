"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Satellite,
  Smartphone,
  Building,
  MapPin,
  Database,
  Globe,
  BarChart,
  Megaphone,
  CheckCircle,
  Star,
  Zap,
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

export default function ServicesPage() {
  const mainServices = [
    {
      icon: <Satellite className="w-16 h-16" />,
      title: "حلول جمع البيانات المكانية وتحليل مرئيات الأقمار الصناعية",
      description:
        "تقدم خرائط الكويت خدمة جمع البيانات المكانية باختلاف مصادرها عن طريق تقنيات الاستشعار عن بعد وبرامج تكنولوجيا المعلومات المكانية المفتوحة المصدر",
      features: [
        "جمع البيانات من الميدان",
        "بناء نماذج المسح المخصصة",
        "مشاركة ونشر المشروع مع طاقم العمل الميداني",
        "تحليل مرئيات الأقمار الصناعية والصور الملتقطة بالدرون",
      ],
      color: "from-[#1996CE] to-blue-600",
      benefits: ["دقة عالية في البيانات", "توفير الوقت والجهد", "تقارير شاملة ومفصلة"],
    },
    {
      icon: <Smartphone className="w-16 h-16" />,
      title: "خرائط إلكترونية والهاتف المحمول",
      description:
        "خرائط إلكترونية تفاعلية على مواقع الويب وتطبيقات على الهاتف المحمول لإضافة وتعديل البيانات المكانية",
      features: [
        "خرائط تفاعلية للويب",
        "تطبيقات الهاتف المحمول",
        "إضافة وتعديل البيانات المكانية",
        "عرض الظواهر الجغرافية",
      ],
      color: "from-[#3A3A3C] to-gray-600",
      benefits: ["واجهة سهلة الاستخدام", "متوافق مع جميع الأجهزة", "تحديثات فورية"],
    },
    {
      icon: <Building className="w-16 h-16" />,
      title: "نشر وتحسين موقع النشاط التجاري",
      description: "إضافة وتعديل وتحسين بيانات موقع النشاط التجاري ونشرها على وسائل تطبيقات التواصل الاجتماعي المختلفة",
      features: [
        "تحسين الظهور في محركات البحث",
        "النشر على وسائل التواصل الاجتماعي",
        "تحديث بيانات الموقع",
        "استراتيجيات التسويق الرقمي",
      ],
      color: "from-green-500 to-green-600",
      benefits: ["زيادة الوصول للعملاء", "تحسين الرؤية الرقمية", "نمو المبيعات"],
    },
  ]

  const googleBusinessFeatures = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "توثيق الحساب التجاري في خرائط قوقل",
      description: "توثيق ملكية الحساب التجاري وصيانة الحساب",
      color: "text-blue-500",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "إدارة ومعالجة البيانات",
      description: "إدارة بيانات الحسابات ومعالجة الصور الفوتوغرافية وتعديل البيانات والأخطاء",
      color: "text-green-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "توثيق ونشر الأنشطة التجارية",
      description: "المواقع الإلكترونية ودليل الشركات ومحرك بحث خرائط قوقل",
      color: "text-purple-500",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "تقارير الأداء وتقارير تنافسية",
      description: "التنافسية على الكلمات الدالة وإدارة المراجعات وتقارير الأداء",
      color: "text-orange-500",
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "الحملات الإعلانية",
      description: "إعلانات خرائط قوقل ومحرك بحث قوقل بأنواعها المختلفة",
      color: "text-red-500",
    },
  ]

  const dotServiceFeatures = [
    "النقاط المهمة",
    "جميع البيانات الميدانية",
    "رقمنة الخريطة ثنائية الأبعاد",
    "المعالم",
    "التحقق من المعلومات التجارية",
    "وسائل الراحة",
    "معلومات العمل",
    "مواقف السيارات",
    "تطوير واجهة برمجة التطبيقات",
    "إضافة المباني",
  ]

  const serviceStats = [
    { number: "100+", label: "مشروع منجز", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "50+", label: "عميل راضي", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "دعم فني", icon: <Zap className="w-6 h-6" /> },
    { number: "99%", label: "معدل النجاح", icon: <BarChart className="w-6 h-6" /> },
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
              <Satellite className="w-5 h-5 mr-2" />
              خدمات متطورة ومبتكرة
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black mb-6">خدماتنا</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              حلول متكاملة في مجال الخرائط الإلكترونية والبيانات المكانية تلبي جميع احتياجاتك التقنية
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Stats */}
      <motion.section
        className="py-20 px-4 bg-gray-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {serviceStats.map((stat, index) => (
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

      {/* Main Services */}
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
              خدماتنا الرئيسية
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-[#3A3A3C] mb-6">حلول شاملة ومتطورة</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#1996CE] to-[#3A3A3C] mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`${index % 2 === 1 ? "md:flex-row-reverse" : ""} flex flex-col md:flex-row items-center gap-12`}
              >
                <div className="md:w-1/2">
                  <Card className="shadow-2xl border-0 overflow-hidden hover:shadow-3xl transition-all duration-500">
                    <CardHeader className={`bg-gradient-to-r ${service.color} text-white p-8`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                          {service.icon}
                        </div>
                        <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8">
                      <CardDescription className="text-[#3A3A3C] text-lg leading-relaxed mb-6">
                        {service.description}
                      </CardDescription>

                      <div className="mb-6">
                        <h4 className="font-bold text-[#3A3A3C] mb-3 text-lg">المميزات:</h4>
                        <div className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-[#1996CE] rounded-full"></div>
                              <span className="text-[#3A3A3C] font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#3A3A3C] mb-3 text-lg">الفوائد:</h4>
                        <div className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              <span className="text-[#3A3A3C] font-medium">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="md:w-1/2">
                  <div className="relative h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="text-6xl text-white/50"
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Google Business Service */}
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
              خدمة متخصصة
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-[#3A3A3C] mb-6">خدمة الحساب التجاري في خرائط قوقل</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#1996CE] to-[#3A3A3C] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-[#3A3A3C] max-w-3xl mx-auto">
              خدمات شاملة لإدارة وتحسين حسابك التجاري في خرائط قوقل لزيادة الوصول والمبيعات
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {googleBusinessFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="text-center p-8">
                    <div className={`mx-auto mb-4 ${feature.color} bg-gray-50 p-4 rounded-2xl w-fit`}>
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg text-[#3A3A3C] font-bold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <CardDescription className="text-center text-[#3A3A3C] leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* The Dot Service */}
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
              خدمة مميزة
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-[#3A3A3C] mb-6">خدمة النقطة (The Dot)</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#1996CE] to-[#3A3A3C] mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <Card className="shadow-2xl border-0 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-[#3A3A3C] to-[#4A4A4E] text-white p-10">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-12 h-12" />
                    </div>
                    <div>
                      <CardTitle className="text-4xl font-black">The Dot</CardTitle>
                      <p className="text-xl text-white/80 mt-2">حلول الخرائط المتقدمة</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-10">
                  <p className="text-lg text-[#3A3A3C] leading-relaxed mb-6">
                    تهدف شركة خرائط الكويت إلى مساعدة أصحاب الأعمال في مختلف الصناعات في إضافة كياناتهم والمعلومات ذات
                    الصلة إلى منصات الخرائط عبر الإنترنت، مع التركيز بشكل أساسي على خرائط قوقل.
                  </p>
                  <p className="text-lg text-[#3A3A3C] leading-relaxed">
                    من خلال توفير حلول شاملة لرسم الخرائط ثنائية الأبعاد تشمل المباني ومواقف السيارات والمحلات التجارية
                    والمناظر الطبيعية، تعمل الشركة على تسهيل الرؤية المحسنة وإمكانية الوصول للشركات.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="shadow-2xl border-0 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-[#1996CE] to-[#2BA3D4] text-white p-8">
                  <CardTitle className="text-2xl font-bold text-center">مميزات خدمة مشروع DOT</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 gap-4">
                    {dotServiceFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-2 h-2 bg-[#1996CE] rounded-full"></div>
                        <span className="text-[#3A3A3C] font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
              ابدأ مشروعك اليوم
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-6">هل تحتاج إلى استشارة مجانية؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              تواصل معنا اليوم واكتشف كيف يمكن لخدماتنا المتخصصة أن تساعد في تطوير عملك وتحقيق أهدافك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#1996CE] hover:bg-gray-100 text-xl px-8 py-4 rounded-full font-bold shadow-2xl"
                >
                  <Link href="/contact">احصل على استشارة مجانية</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1996CE] text-xl px-8 py-4 rounded-full font-bold"
                >
                  <Link href="/projects">شاهد أعمالنا</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
