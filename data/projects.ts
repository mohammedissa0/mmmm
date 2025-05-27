// Convert Google Drive links to direct image URLs
const convertGoogleDriveUrl = (url: string): string => {
  const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/)
  if (fileIdMatch) {
    return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`
  }
  return url
}

export interface Project {
  id: string
  title: {
    ar: string
    en: string
  }
  description: {
    ar: string
    en: string
  }
  details: {
    ar: string
    en: string
  }
  images: string[]
  category: {
    ar: string
    en: string
  }
  status: {
    ar: string
    en: string
  }
  technologies?: string[]
  duration?: string
  client?: string
  year?: string
}

export const projects: Project[] = [
  {
    id: "ummah-guide-2024",
    title: {
      ar: "مشروع خرائط تطبيق دليل الأمة 2024",
      en: "Ummah Guide 2024 Maps Application Project",
    },
    description: {
      ar: "بوابة معلومات مكانية شاملة لخرائط الانتخابات والإحصائيات الخاصة بالمناطق والدوائر الانتخابية في دولة الكويت",
      en: "A comprehensive spatial information portal for election maps and statistics for regions and electoral districts in Kuwait",
    },
    details: {
      ar: "يهدف هذا المشروع إلى توفير منصة تفاعلية متقدمة تجمع بين البيانات الجغرافية والإحصائيات الانتخابية، مما يساعد المواطنين والباحثين في الوصول إلى معلومات دقيقة ومحدثة حول الدوائر الانتخابية والتوزيع السكاني في الكويت. يتضمن المشروع تطوير خرائط تفاعلية متقدمة، وقواعد بيانات شاملة للعوائل والقبائل، ونظام بحث متطور يسهل على المستخدمين العثور على المعلومات المطلوبة بسرعة ودقة.",
      en: "This project aims to provide an advanced interactive platform that combines geographic data with electoral statistics, helping citizens and researchers access accurate and updated information about electoral districts and population distribution in Kuwait. The project includes developing advanced interactive maps, comprehensive databases for families and tribes, and an advanced search system that makes it easy for users to find the required information quickly and accurately.",
    },
    images: [
      convertGoogleDriveUrl("https://drive.google.com/file/d/1g6-LK9mz8mo60PNbK80bznM_AOuv6Rer/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1ox7bZwhkQmiSuKNeQTT55ZcHRolo6QVN/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1g3eHzym9e-aVFrUQvG5NNqskLu18EkWX/view?usp=drive_link"),
    ],
    category: {
      ar: "منصة معلومات",
      en: "Information Platform",
    },
    status: {
      ar: "قيد التطوير",
      en: "In Development",
    },
    technologies: ["React", "Next.js", "Google Maps API", "PostgreSQL", "Node.js"],
    duration: "6 أشهر / 6 months",
    year: "2024",
  },
  {
    id: "walk-mall",
    title: {
      ar: "مشروع The Walk Mall",
      en: "The Walk Mall Project",
    },
    description: {
      ar: "تطوير نظام خرائط تفاعلي شامل لمجمع The Walk Mall التجاري مع رسم طبقة الطرق المحيطة وتحسين البيانات المكانية",
      en: "Development of a comprehensive interactive mapping system for The Walk Mall commercial complex with surrounding road layer mapping and spatial data improvement",
    },
    details: {
      ar: "مشروع متكامل يهدف إلى تحسين تجربة الزوار من خلال توفير خرائط دقيقة ومفصلة للمجمع التجاري، بما في ذلك المحلات والخدمات والطرق المحيطة. يشمل المشروع رقمنة كاملة للمجمع، وتطوير نظام ملاحة داخلي، وتحسين دقة البيانات المكانية، وإنشاء دليل تفاعلي للمحلات والخدمات، مما يسهل على الزوار العثور على وجهاتهم المطلوبة بسهولة ويسر.",
      en: "An integrated project aimed at improving visitor experience by providing accurate and detailed maps of the commercial complex, including stores, services, and surrounding roads. The project includes complete digitization of the complex, development of an internal navigation system, improvement of spatial data accuracy, and creation of an interactive directory for stores and services, making it easy for visitors to find their desired destinations with ease.",
    },
    images: [
      convertGoogleDriveUrl("https://drive.google.com/file/d/1VraY-HtOikT8CKtBcIgPNHGu5nIxm3M8/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1FLzIqVnMou6S-3s_zef4diBWdonzccUX/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1tbFP8UFT_hegxg8Ghlb1stHaOA5CPTe9/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1jHjDyvNNxanC4qhtqMuDk6pkamKohLww/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1k0CuYDFuKItFUx-FdRZy-QKpxV2Gm-x4/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1aDcT0nuo6mkElbhZLR0zSiZKHf_JdbM-/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1WpQxIN7zqR23fnupDQ1uBPRFftwnrI_2/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1kNGb_pxkEvsUpA7GG3gFL_vWxKjnTidC/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1h5kqW_rnHaV_KnmGlQWCCvUz87h3J2Kv/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1YZWDlIogs-MMWaU1ac3M83GBKJhuHCQL/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/153gWQJ2Xa0LerCO_ESCJx0FgiG43X0Qo/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1EjUUUYiZLbwRwVbTv-GbsvZtnkXv2FpU/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1khEQv-QOY5dlHmBVht6PjDmEGMFupOcj/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1-PGMr7b4mO_s17vCKRjOYwHX_Pl-GphY/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1yB-esfl2hqZyX7EmUjUTolEq8NAgZJkx/view?usp=drive_link"),
    ],
    category: {
      ar: "مشروع تجاري",
      en: "Commercial Project",
    },
    status: {
      ar: "مكتمل",
      en: "Completed",
    },
    technologies: ["Google Maps API", "JavaScript", "HTML5", "CSS3", "PostgreSQL"],
    duration: "4 أشهر / 4 months",
    client: "The Walk Mall",
    year: "2023",
  },
  {
    id: "voting-app",
    title: {
      ar: "تطبيق الاستعلام الآلي",
      en: "Automated Inquiry Application",
    },
    description: {
      ar: "موقع لمحرك بحث بالاسم الثلاثي للناخب في مجلس الأمة الكويتي حسب الدائرة الانتخابية",
      en: "A website with a search engine by voter's triple name in the Kuwaiti National Assembly by electoral district",
    },
    details: {
      ar: "تطبيق متطور يوفر للمواطنين إمكانية البحث السريع والدقيق عن معلومات القيد الانتخابي باستخدام الاسم الثلاثي، مع توفير روابط مباشرة لمواقع مراكز التصويت باستخدام تطبيق خرائط قوقل والهواتف الذكية. يتميز التطبيق بواجهة مستخدم بسيطة وسهلة الاستخدام، ونظام بحث متقدم، وتكامل مع خرائط قوقل لتوفير الاتجاهات إلى مراكز التصويت، مما يساهم في تسهيل العملية الانتخابية للمواطنين.",
      en: "An advanced application that provides citizens with the ability to quickly and accurately search for electoral registration information using the triple name, with direct links to voting center locations using Google Maps application and smartphones. The application features a simple and easy-to-use user interface, an advanced search system, and integration with Google Maps to provide directions to voting centers, contributing to facilitating the electoral process for citizens.",
    },
    images: [
      convertGoogleDriveUrl("https://drive.google.com/file/d/1g9LD-CPWLCq2jbYirhbnjCIv9F3mKBna/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1ucUtb65Wik2P2HzNGi6HItnsXVhwcS3t/view?usp=drive_link"),
    ],
    category: {
      ar: "تطبيق حكومي",
      en: "Government Application",
    },
    status: {
      ar: "نشط",
      en: "Active",
    },
    technologies: ["React", "Node.js", "MySQL", "Google Maps API", "Bootstrap"],
    duration: "3 أشهر / 3 months",
    year: "2023",
  },
  {
    id: "mosques-kuwait",
    title: {
      ar: "مشروع مساجد الكويت",
      en: "Kuwait Mosques Project",
    },
    description: {
      ar: "مشروع تقني تطوعي يهدف إلى رسم وتصحيح بيانات المساجد في دولة الكويت والتي تشرف عليها وزارة الأوقاف والشؤون الإسلامية",
      en: "A voluntary technical project aimed at mapping and correcting mosque data in Kuwait under the supervision of the Ministry of Awqaf and Islamic Affairs",
    },
    details: {
      ar: "مبادرة تطوعية نبيلة تهدف إلى توثيق وتصحيح بيانات جميع المساجد في دولة الكويت ضمن بنية قواعد بيانات خريطة الطرق المفتوحة، بالتعاون مع وزارة الأوقاف والشؤون الإسلامية الكويتية. يشمل المشروع رسم مواقع المساجد بدقة عالية، وتحديث المعلومات الأساسية لكل مسجد، وإضافة تفاصيل مهمة مثل أوقات الصلاة والخدمات المتاحة، مما يساهم في تسهيل وصول المصلين إلى أقرب المساجد وتعزيز الخدمات الدينية في المجتمع.",
      en: "A noble voluntary initiative aimed at documenting and correcting data for all mosques in Kuwait within the open road map database structure, in cooperation with the Kuwaiti Ministry of Awqaf and Islamic Affairs. The project includes accurately mapping mosque locations, updating basic information for each mosque, and adding important details such as prayer times and available services, contributing to facilitating worshippers' access to the nearest mosques and enhancing religious services in the community.",
    },
    images: [
      convertGoogleDriveUrl("https://drive.google.com/file/d/1BX2FnUi6_zPr63pP35vWF1axig8kf0uT/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1sHKTSN8IAyXecUs6UJmbV3kvgYtjbASJ/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1_2D_kbxTojJoFLfrd7jehWvpezjYZykl/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/14fVDp_yTZ7KX1hUeI7RKNwEe7Yz-_iuG/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1HGaLkpK8GpvoRBXjb-_7uwI1xbkTQPuz/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/16Uj7SZ9KJwhA0PeBnx_x9nuPwLcIOejz/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1NiqI1DQLWJMP14aq53Nc-XeEOprYc-PM/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1BsF14MYtxTZL4Glkup3aJg48chva8yWX/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/11X6V3uNrm-AOBWxxclinUJLd4ZRFLZff/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1NpgXOMUOPSUDZhraomxFOAkd96yq5LLy/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1KOx-uFOBdLcUWXqnvdlL1D--PZ-6ofLB/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/15M6nmY8Oq69BkgBsaqb2lM0Fi2MHj5YX/view?usp=drive_link"),
    ],
    category: {
      ar: "مشروع تطوعي",
      en: "Volunteer Project",
    },
    status: {
      ar: "مكتمل",
      en: "Completed",
    },
    technologies: ["OpenStreetMap", "JOSM", "GPS", "GIS", "PostgreSQL"],
    duration: "8 أشهر / 8 months",
    client: "وزارة الأوقاف والشؤون الإسلامية / Ministry of Awqaf and Islamic Affairs",
    year: "2022-2023",
  },
  {
    id: "research-projects",
    title: {
      ar: "المشاريع البحثية",
      en: "Research Projects",
    },
    description: {
      ar: "مجموعة من المشاريع البحثية المتقدمة في مجال تكنولوجيا المعلومات المكانية والخرائط الرقمية",
      en: "A collection of advanced research projects in spatial information technology and digital mapping",
    },
    details: {
      ar: "تشمل هذه المشاريع البحثية تطوير تقنيات متقدمة في معالجة البيانات المكانية، وتحليل مرئيات الأقمار الصناعية، وتطوير خوارزميات جديدة لتحسين دقة الخرائط الرقمية. كما تتضمن البحث في تطبيقات الذكاء الاصطناعي في مجال نظم المعلومات الجغرافية، وتطوير أدوات جديدة لجمع ومعالجة البيانات الميدانية، والعمل على تحسين تقنيات التصور والعرض للبيانات المكانية. هذه المشاريع تساهم في تطوير المعرفة العلمية وتقديم حلول مبتكرة لتحديات القطاع.",
      en: "These research projects include developing advanced techniques in spatial data processing, satellite imagery analysis, and developing new algorithms to improve digital map accuracy. They also include research in artificial intelligence applications in geographic information systems, developing new tools for field data collection and processing, and working to improve visualization and display techniques for spatial data. These projects contribute to developing scientific knowledge and providing innovative solutions to sector challenges.",
    },
    images: [
      convertGoogleDriveUrl("https://drive.google.com/file/d/151Tn4ZRSOBiAlygrC_zy_UH5wlWYKCMd/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1gA2TRQfEoEQvPAzOmaeSzy2P6sUftFrV/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/192m0vr5-pd0QZtjsWq61YFWtO3aZdxOm/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1BSeTivyJl-GZ9U9KJOEbvMGKrogZ_toO/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1Gw-aQkCnPOOXGhxFmHNOmWyZY4vdLS1r/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1Gvz7EfOCXuTntErYJ7-YgrMRXAktg-2Y/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/12NW64ntM6LuRrut4IqnsgRpbgtZfBdqx/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1ishtY8msuHTblHckuJDGMlX5s5V2mcZZ/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1JkwIiFC65_Uh0N_Arn5y8qx6fTBq4p3v/view?usp=drive_link"),
      convertGoogleDriveUrl("https://drive.google.com/file/d/1GAKgphmhL7M03TOlTx27Efk_lBdoOWQV/view?usp=drive_link"),
    ],
    category: {
      ar: "مشاريع بحثية",
      en: "Research Projects",
    },
    status: {
      ar: "مستمر",
      en: "Ongoing",
    },
    technologies: ["Python", "R", "QGIS", "ArcGIS", "Machine Learning", "Deep Learning"],
    duration: "مستمر / Ongoing",
    year: "2022-2024",
  },
]
