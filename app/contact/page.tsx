"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Globe, Clock, Send, MessageCircle, Users, CheckCircle } from "lucide-react"
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

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "العنوان",
      details: "دولة الكويت",
      color: "text-[#1996CE]",
      bgColor: "bg-[#1996CE]/10",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "الهاتف",
      details: "+965 XXXX XXXX",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "البريد الإلكتروني",
      details: "info@kuwaitmap.com",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "الموقع الإلكتروني",
      details: "www.kuwaitmap.com",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "ساعات العمل",
      details: "الأحد - الخميس: 8:00 ص - 5:00 م",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ]

  const contactStats = [
    { number: "24", label: "ساعة استجابة", icon: <Clock className="w-6 h-6" /> },
    { number: "100%", label: "معدل الرد", icon: <MessageCircle className="w-6 h-6" /> },
    { number: "50+", label: "عميل راضي", icon: <Users className="w-6 h-6" /> },
    { number: "99%", label: "معدل الرضا", icon: <CheckCircle className="w-6 h-6" /> },
  ]

  const faqs = [
    {
      question: "ما هي الخدمات التي تقدمونها؟",
      answer:
        "نقدم حلول متكاملة في مجال الخرائط الإلكترونية والبيانات المكانية وتحليل مرئيات الأقمار الصناعية، بالإضافة إلى خدمات الحساب التجاري في خرائط قوقل وخدمة النقطة (The Dot).",
    },
    {
      question: "كم تستغرق مدة تنفيذ المشروع؟",
      answer:
        "تختلف مدة التنفيذ حسب حجم وتعقيد المشروع، ولكن نلتزم بالمواعيد المتفق عليها مع العميل. المشاريع البسيطة تستغرق 2-4 أسابيع، بينما المشاريع المعقدة قد تستغرق 2-6 أشهر.",
    },
    {
      question: "هل تقدمون الدعم الفني؟",
      answer:
        "نعم، نقدم دعماً فنياً شاملاً لجميع عملائنا على مدار الساعة مع ضمان الجودة والصيانة الدورية. كما نوفر التدريب اللازم لفرق العمل.",
    },
    {
      question: "كيف يمكنني الحصول على عرض سعر؟",
      answer:
        "يمكنك التواصل معنا عبر النموذج أدناه أو الاتصال المباشر للحصول على استشارة مجانية وعرض سعر مفصل خلال 24 ساعة من تلقي طلبك.",
    },
    {
      question: "هل تعملون مع الشركات الصغيرة؟",
      answer:
        "بالطبع، نعمل مع جميع أحجام الشركات من الشركات الناشئة إلى المؤسسات الكبيرة. لدينا حلول مرنة تناسب جميع الميزانيات والاحتياجات.",
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer:
        "نقبل جميع طرق الدفع المحلية والدولية بما في ذلك التحويل البنكي والدفع الإلكتروني. كما نوفر خطط دفع مرنة للمشاريع الكبيرة.",
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
              <Send className="w-5 h-5 mr-2" />
              نحن هنا لمساعدتك
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black mb-6">تواصل معنا</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              نحن هنا لمساعدتك في تحقيق أهدافك التقنية وتقديم أفضل الحلول المبتكرة
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Stats */}
      <motion.section
        className="py-20 px-4 bg-gray-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {contactStats.map((stat, index) => (
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

      {/* Contact Form & Info */}
      <motion.section
        className="py-20 px-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card className="shadow-2xl border-0 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-[#1996CE] to-[#2BA3D4] text-white p-10">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Send className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-black">أرسل لنا رسالة</CardTitle>
                      <p className="text-xl text-white/80 mt-2">سنرد عليك خلال 24 ساعة</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-10">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-[#3A3A3C] font-semibold text-lg">
                          الاسم الأول *
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="أدخل اسمك الأول"
                          className="border-2 border-gray-200 focus:border-[#1996CE] h-12 text-lg"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-[#3A3A3C] font-semibold text-lg">
                          الاسم الأخير *
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="أدخل اسمك الأخير"
                          className="border-2 border-gray-200 focus:border-[#1996CE] h-12 text-lg"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#3A3A3C] font-semibold text-lg">
                        البريد الإلكتروني *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="أدخل بريدك الإلكتروني"
                        className="border-2 border-gray-200 focus:border-[#1996CE] h-12 text-lg"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#3A3A3C] font-semibold text-lg">
                        رقم الهاتف *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="أدخل رقم هاتفك"
                        className="border-2 border-gray-200 focus:border-[#1996CE] h-12 text-lg"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-[#3A3A3C] font-semibold text-lg">
                        اسم الشركة
                      </Label>
                      <Input
                        id="company"
                        placeholder="اسم شركتك (اختياري)"
                        className="border-2 border-gray-200 focus:border-[#1996CE] h-12 text-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-[#3A3A3C] font-semibold text-lg">
                        الموضوع *
                      </Label>
                      <Input
                        id="subject"
                        placeholder="موضوع الرسالة"
                        className="border-2 border-gray-200 focus:border-[#1996CE] h-12 text-lg"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#3A3A3C] font-semibold text-lg">
                        الرسالة *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="اكتب رسالتك هنا... أخبرنا عن مشروعك أو استفسارك"
                        rows={6}
                        className="border-2 border-gray-200 focus:border-[#1996CE] text-lg"
                        required
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-[#1996CE] to-[#2BA3D4] hover:from-[#1580B8] hover:to-[#1996CE] text-white text-xl py-4 rounded-full font-bold shadow-xl"
                      >
                        إرسال الرسالة
                        <Send className="w-5 h-5 mr-2" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="text-center mb-12">
                <Badge className="bg-[#3A3A3C]/10 text-[#3A3A3C] border-[#3A3A3C]/20 text-lg px-6 py-2 mb-6">
                  معلومات التواصل
                </Badge>
                <h2 className="text-3xl md:text-4xl font-black text-[#3A3A3C] mb-4">تواصل معنا</h2>
                <div className="w-32 h-2 bg-gradient-to-r from-[#1996CE] to-[#3A3A3C] mx-auto mb-6 rounded-full"></div>
                <p className="text-lg text-[#3A3A3C]">تواصل معنا عبر أي من الطرق التالية</p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-6">
                          <div className={`${info.bgColor} p-4 rounded-2xl`}>
                            <div className={info.color}>{info.icon}</div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[#3A3A3C] mb-2">{info.title}</h3>
                            <p className="text-[#3A3A3C] text-lg">{info.details}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div variants={fadeInUp}>
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-[#3A3A3C] to-[#4A4A4E] text-white p-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        <MapPin className="w-8 h-8" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold">موقعنا</CardTitle>
                        <p className="text-white/80">دولة الكويت</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="text-center text-[#3A3A3C]">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <MapPin className="w-16 h-16 mx-auto mb-4 text-[#1996CE]" />
                        </motion.div>
                        <p className="text-lg font-bold">خريطة الموقع</p>
                        <p className="text-sm">دولة الكويت</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-20 px-4 bg-gray-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Badge className="bg-[#1996CE]/10 text-[#1996CE] border-[#1996CE]/20 text-lg px-6 py-2 mb-6">
              الأسئلة الشائعة
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-[#3A3A3C] mb-6">أسئلة يتكرر طرحها</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#1996CE] to-[#3A3A3C] mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 h-full">
                  <CardHeader className="p-8">
                    <CardTitle className="text-xl font-bold text-[#1996CE] leading-relaxed">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <p className="text-[#3A3A3C] leading-relaxed text-lg">{faq.answer}</p>
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
              لا تتردد في التواصل
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-6">مستعدون لمساعدتك</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              فريقنا من الخبراء جاهز لتقديم الاستشارة المجانية ومساعدتك في اختيار الحل الأمثل لاحتياجاتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#1996CE] hover:bg-gray-100 text-xl px-8 py-4 rounded-full font-bold shadow-2xl"
                >
                  <a href="tel:+965XXXXXXXX">اتصل بنا الآن</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1996CE] text-xl px-8 py-4 rounded-full font-bold"
                >
                  <a href="mailto:info@kuwaitmap.com">أرسل إيميل</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
