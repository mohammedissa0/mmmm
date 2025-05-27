"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "ar" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: "rtl" | "ltr"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Translation data
const translations = {
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.projects": "مشاريعنا",
    "nav.reports": "التقارير والتحاليل",
    "nav.contact": "تواصل معنا",
    "nav.consultation": "احصل على استشارة",
    "nav.free_consultation": "احصل على استشارة مجانية",

    // Common
    "common.learn_more": "اعرف المزيد",
    "common.view_all": "عرض الكل",
    "common.contact_us": "تواصل معنا",
    "common.get_started": "ابدأ الآن",
    "common.read_more": "اقرأ المزيد",
    "common.download": "تحميل",
    "common.view_project": "عرض المشروع",
    "common.view_details": "عرض التفاصيل",
    "common.back_to_projects": "العودة للمشاريع",
    "common.project_gallery": "معرض المشروع",
    "common.next": "التالي",
    "common.previous": "السابق",

    // Home Page
    "home.hero.badge": "الرائدون في تكنولوجيا الخرائط",
    "home.hero.title": "شركة خرائط الكويت",
    "home.hero.subtitle": "للحلول المتكاملة الحاسوبية",
    "home.hero.description":
      "نحن متخصصون في أنظمة الخرائط الإلكترونية المتقدمة باستخدام تكنولوجيا قوقل السحابية والمعلومات المكانية المفتوحة لخدمة القطاع الخاص والأهلي في دولة الكويت",
    "home.hero.discover_services": "اكتشف خدماتنا",
    "home.hero.view_work": "شاهد أعمالنا",

    // Stats
    "stats.founded": "سنة التأسيس",
    "stats.projects": "مشروع منجز",
    "stats.clients": "عميل راضي",
    "stats.support": "دعم فني",

    // About Section
    "about.badge": "من نحن؟",
    "about.title": "رؤيتنا ومهمتنا",
    "about.description": "نحن نؤمن بقوة التكنولوجيا في تشكيل مستقبل أفضل من خلال الحلول المبتكرة والرؤية الواضحة",
    "about.vision": "رؤيتنا",
    "about.mission": "مهمتنا",
    "about.vision_text": "بيانات مكانية صحيحة من أجل خرائط موضوعية وخاصة",
    "about.mission_text":
      "رفع كفاءة محتوى الخرائط في مواقع الانترنت وتطبيقات التواصل الإجتماعي لتحقيق تطلعات رواد الأعمال والمستخدمين",
    "about.company_history": "تاريخ الشركة",
    "about.founded_in": "تأسست في عام 2022",
    "about.history_text":
      "تأسست خرائط الكويت للحلول المتكاملة الحاسوبية في عام 2022، وتسعى الشركة إلى التوسع في مشاريع نظم المعلومات المكانية وسوق مرئيات الأقمار الصناعية.",

    // Services
    "services.badge": "خدماتنا المتميزة",
    "services.title": "حلول متكاملة ومبتكرة",
    "services.description": "نقدم مجموعة شاملة من الخدمات المتطورة في مجال الخرائط الإلكترونية والبيانات المكانية",
    "services.spatial_data": "حلول البيانات المكانية",
    "services.spatial_data_desc": "جمع وتحليل البيانات المكانية باستخدام تقنيات الاستشعار عن بعد والذكاء الاصطناعي",
    "services.digital_maps": "خرائط إلكترونية ومحمولة",
    "services.digital_maps_desc": "تطوير خرائط تفاعلية متقدمة للويب وتطبيقات الهاتف المحمول",
    "services.google_business": "الحساب التجاري في قوقل",
    "services.google_business_desc": "إدارة وتحسين الحسابات التجارية في خرائط قوقل لزيادة الظهور",
    "services.the_dot": "خدمة النقطة (The Dot)",
    "services.the_dot_desc": "حلول شاملة لرسم الخرائط ثنائية الأبعاد للمباني والمحلات التجارية",
    "services.view_all": "عرض جميع الخدمات",

    // Projects
    "projects.badge": "مشاريعنا المميزة",
    "projects.title": "إنجازات نفتخر بها",
    "projects.view_all": "عرض جميع المشاريع",

    // Project Details
    "project.ummah_guide.title": "مشروع خرائط تطبيق دليل الأمة 2024",
    "project.ummah_guide.description":
      "بوابة معلومات مكانية شاملة لخرائط الانتخابات والإحصائيات الخاصة بالمناطق والدوائر الانتخابية في دولة الكويت",
    "project.ummah_guide.details":
      "يهدف هذا المشروع إلى توفير منصة تفاعلية متقدمة تجمع بين البيانات الجغرافية والإحصائيات الانتخابية، مما يساعد المواطنين والباحثين في الوصول إلى معلومات دقيقة ومحدثة حول الدوائر الانتخابية والتوزيع السكاني في الكويت.",

    "project.walk_mall.title": "مشروع The Walk Mall",
    "project.walk_mall.description":
      "تطوير نظام خرائط تفاعلي شامل لمجمع The Walk Mall التجاري مع رسم طبقة الطرق المحيطة وتحسين البيانات المكانية",
    "project.walk_mall.details":
      "مشروع متكامل يهدف إلى تحسين تجربة الزوار من خلال توفير خرائط دقيقة ومفصلة للمجمع التجاري، بما في ذلك المحلات والخدمات والطرق المحيطة، مع تحسين دقة البيانات المكانية وتسهيل الوصول للزوار.",

    "project.voting_app.title": "تطبيق الاستعلام الآلي",
    "project.voting_app.description":
      "موقع لمحرك بحث بالاسم الثلاثي للناخب في مجلس الأمة الكويتي حسب الدائرة الانتخابية",
    "project.voting_app.details":
      "تطبيق متطور يوفر للمواطنين إمكانية البحث السريع والدقيق عن معلومات القيد الانتخابي باستخدام الاسم الثلاثي، مع توفير روابط مباشرة لمواقع مراكز التصويت باستخدام تطبيق خرائط قوقل والهواتف الذكية.",

    "project.mosques.title": "مشروع مساجد الكويت",
    "project.mosques.description":
      "مشروع تقني تطوعي يهدف إلى رسم وتصحيح بيانات المساجد في دولة الكويت والتي تشرف عليها وزارة الأوقاف والشؤون الإسلامية",
    "project.mosques.details":
      "مبادرة تطوعية نبيلة تهدف إلى توثيق وتصحيح بيانات جميع المساجد في دولة الكويت ضمن بنية قواعد بيانات خريطة الطرق المفتوحة، بالتعاون مع وزارة الأوقاف والشؤون الإسلامية الكويتية، مما يساهم في تسهيل وصول المصلين إلى أقرب المساجد.",

    "project.research.title": "المشاريع البحثية",
    "project.research.description":
      "مجموعة من المشاريع البحثية المتقدمة في مجال تكنولوجيا المعلومات المكانية والخرائط الرقمية",
    "project.research.details":
      "تشمل هذه المشاريع البحثية تطوير تقنيات متقدمة في معالجة البيانات المكانية، وتحليل مرئيات الأقمار الصناعية، وتطوير خوارزميات جديدة لتحسين دقة الخرائط الرقمية، بالإضافة إلى البحث في تطبيقات الذكاء الاصطناعي في مجال نظم المعلومات الجغرافية.",

    // CTA
    "cta.badge": "ابدأ رحلتك معنا",
    "cta.title": "هل أنت مستعد لبدء مشروعك؟",
    "cta.description": "تواصل معنا اليوم واكتشف كيف يمكن لحلولنا المتقدمة أن تساعد في نمو عملك وتحقيق أهدافك التقنية",
    "cta.contact_now": "تواصل معنا الآن",
    "cta.explore_services": "استكشف خدماتنا",

    // Footer
    "footer.company_desc": "شركة متخصصة في أنظمة الخرائط الإلكترونية وتكنولوجيا المعلومات المكانية المفتوحة",
    "footer.quick_links": "روابط سريعة",
    "footer.our_services": "خدماتنا",
    "footer.contact_info": "تواصل معنا",
    "footer.follow_us": "تابعنا",
    "footer.rights": "جميع الحقوق محفوظة",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.reports": "Reports & Analytics",
    "nav.contact": "Contact Us",
    "nav.consultation": "Get Consultation",
    "nav.free_consultation": "Get Free Consultation",

    // Common
    "common.learn_more": "Learn More",
    "common.view_all": "View All",
    "common.contact_us": "Contact Us",
    "common.get_started": "Get Started",
    "common.read_more": "Read More",
    "common.download": "Download",
    "common.view_project": "View Project",
    "common.view_details": "View Details",
    "common.back_to_projects": "Back to Projects",
    "common.project_gallery": "Project Gallery",
    "common.next": "Next",
    "common.previous": "Previous",

    // Home Page
    "home.hero.badge": "Leaders in Mapping Technology",
    "home.hero.title": "Kuwait Maps Company",
    "home.hero.subtitle": "For Integrated Computing Solutions",
    "home.hero.description":
      "We specialize in advanced electronic mapping systems using Google cloud technology and open spatial information to serve the private and civil sectors in the State of Kuwait",
    "home.hero.discover_services": "Discover Our Services",
    "home.hero.view_work": "View Our Work",

    // Stats
    "stats.founded": "Year Founded",
    "stats.projects": "Completed Projects",
    "stats.clients": "Satisfied Clients",
    "stats.support": "Technical Support",

    // About Section
    "about.badge": "Who We Are?",
    "about.title": "Our Vision & Mission",
    "about.description":
      "We believe in the power of technology to shape a better future through innovative solutions and clear vision",
    "about.vision": "Our Vision",
    "about.mission": "Our Mission",
    "about.vision_text": "Accurate spatial data for objective and specialized maps",
    "about.mission_text":
      "Improving the efficiency of map content on websites and social media applications to achieve the aspirations of entrepreneurs and users",
    "about.company_history": "Company History",
    "about.founded_in": "Founded in 2022",
    "about.history_text":
      "Kuwait Maps for Integrated Computing Solutions was established in 2022, and the company seeks to expand in spatial information systems projects and the satellite imagery market.",

    // Services
    "services.badge": "Our Distinguished Services",
    "services.title": "Integrated and Innovative Solutions",
    "services.description":
      "We provide a comprehensive range of advanced services in electronic mapping and spatial data",
    "services.spatial_data": "Spatial Data Solutions",
    "services.spatial_data_desc":
      "Collecting and analyzing spatial data using remote sensing techniques and artificial intelligence",
    "services.digital_maps": "Digital and Mobile Maps",
    "services.digital_maps_desc": "Developing advanced interactive maps for web and mobile applications",
    "services.google_business": "Google Business Account",
    "services.google_business_desc": "Managing and optimizing business accounts on Google Maps to increase visibility",
    "services.the_dot": "The Dot Service",
    "services.the_dot_desc": "Comprehensive solutions for 2D mapping of buildings and commercial stores",
    "services.view_all": "View All Services",

    // Projects
    "projects.badge": "Our Featured Projects",
    "projects.title": "Achievements We're Proud Of",
    "projects.view_all": "View All Projects",

    // Project Details
    "project.ummah_guide.title": "Ummah Guide 2024 Maps Application Project",
    "project.ummah_guide.description":
      "A comprehensive spatial information portal for election maps and statistics for regions and electoral districts in Kuwait",
    "project.ummah_guide.details":
      "This project aims to provide an advanced interactive platform that combines geographic data with electoral statistics, helping citizens and researchers access accurate and updated information about electoral districts and population distribution in Kuwait.",

    "project.walk_mall.title": "The Walk Mall Project",
    "project.walk_mall.description":
      "Development of a comprehensive interactive mapping system for The Walk Mall commercial complex with surrounding road layer mapping and spatial data improvement",
    "project.walk_mall.details":
      "An integrated project aimed at improving visitor experience by providing accurate and detailed maps of the commercial complex, including stores, services, and surrounding roads, while improving spatial data accuracy and facilitating visitor access.",

    "project.voting_app.title": "Automated Inquiry Application",
    "project.voting_app.description":
      "A website with a search engine by voter's triple name in the Kuwaiti National Assembly by electoral district",
    "project.voting_app.details":
      "An advanced application that provides citizens with the ability to quickly and accurately search for electoral registration information using the triple name, with direct links to voting center locations using Google Maps application and smartphones.",

    "project.mosques.title": "Kuwait Mosques Project",
    "project.mosques.description":
      "A voluntary technical project aimed at mapping and correcting mosque data in Kuwait under the supervision of the Ministry of Awqaf and Islamic Affairs",
    "project.mosques.details":
      "A noble voluntary initiative aimed at documenting and correcting data for all mosques in Kuwait within the open road map database structure, in cooperation with the Kuwaiti Ministry of Awqaf and Islamic Affairs, contributing to facilitating worshippers' access to the nearest mosques.",

    "project.research.title": "Research Projects",
    "project.research.description":
      "A collection of advanced research projects in spatial information technology and digital mapping",
    "project.research.details":
      "These research projects include developing advanced techniques in spatial data processing, satellite imagery analysis, developing new algorithms to improve digital map accuracy, in addition to research in artificial intelligence applications in geographic information systems.",

    // CTA
    "cta.badge": "Start Your Journey With Us",
    "cta.title": "Are You Ready to Start Your Project?",
    "cta.description":
      "Contact us today and discover how our advanced solutions can help grow your business and achieve your technical goals",
    "cta.contact_now": "Contact Us Now",
    "cta.explore_services": "Explore Our Services",

    // Footer
    "footer.company_desc":
      "A company specialized in electronic mapping systems and open spatial information technology",
    "footer.quick_links": "Quick Links",
    "footer.our_services": "Our Services",
    "footer.contact_info": "Contact Us",
    "footer.follow_us": "Follow Us",
    "footer.rights": "All Rights Reserved",
  },
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("ar")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "ar" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  const dir = language === "ar" ? "rtl" : "ltr"

  return <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>{children}</LanguageContext.Provider>
}
