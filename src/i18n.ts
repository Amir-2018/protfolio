import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      about: "About Me",
      experience: "Experience",
      skills: "Skills & Expertise",
      projects: "Projects",
      education: "Education",
      certificates: "Certificates",

      // About Section
      aboutMe: "About Me",
      description: "I am a passionate and driven Software Development Engineer with a knack for building scalable, high-performance web and mobile applications. With a razor-sharp eye for detail and an insatiable curiosity for solving complex problems, I design innovative solutions that not only enhance user experiences but also drive measurable, real-world impact. I thrive in collaborative environments, where I can transform bold ideas into reality alongside talented teams, constantly pushing the boundaries of what's possible. Always hungry to learn and adapt, I embrace emerging technologies and methodologies to stay ahead of the curve. My mission is to craft elegant, efficient, and sustainable software that not only solves today's challenges but also paves the way for tomorrow's innovations. Whether it's optimizing code for peak performance or architecting systems that scale seamlessly, I'm committed to delivering excellence in every line of code. Beyond technical expertise, I bring a creative mindset and a relentless drive to innovate, ensuring that every project I touch leaves a lasting legacy. Let's build the future, one line of code at a time.",
      hello: "Hello, I'm",
      whatIDo: "What I Do",
      webDev: "Web Development",
      webDevDesc: "Building responsive web applications with modern technologies",
      mobileApps: "Mobile Apps",
      mobileAppsDesc: "Creating cross-platform mobile applications",
      gpsCartography: "GPS & Cartography",
      gpsCartographyDesc: "Developing advanced mapping and location-based solutions",
      problemSolving: "Problem Solving",
      problemSolvingDesc: "Finding elegant solutions to complex problems",
      downloadCV: "Download CV",

      // Sidebar
      softwareEngineer: "Software Development Engineer",

      // About Stats
      internships: "Internships",
      projectsStats: "Projects",
      technologies: "Technologies",
      dedication: "Dedication"
    }
  },
  fr: {
    translation: {
      // Navigation
      about: "À Propos de Moi",
      experience: "Expérience",
      skills: "Compétences & Expertise",
      projects: "Projets",
      education: "Éducation",
      certificates: "Certificats",

      // About Section
      aboutMe: "À Propos de Moi",
      description: "Je suis un ingénieur de développement logiciel passionné et motivé avec un don pour créer des applications web et mobiles évolutives et performantes. Avec un œil aiguisé pour les détails et une curiosité insatiable pour résoudre des problèmes complexes, je conçois des solutions innovantes qui améliorent non seulement l'expérience utilisateur mais génèrent aussi un impact mesurable et réel. Je m'épanouis dans des environnements collaboratifs, où je peux transformer des idées audacieuses en réalité aux côtés d'équipes talentueuses, repoussant constamment les limites du possible. Toujours avide d'apprendre et d'adapter, j'adopte les technologies et méthodologies émergentes pour rester à la pointe. Ma mission est de créer des logiciels élégants, efficaces et durables qui résolvent non seulement les défis d'aujourd'hui mais ouvrent aussi la voie aux innovations de demain. Que ce soit en optimisant le code pour des performances optimales ou en architecturant des systèmes qui évoluent parfaitement, je m'engage à livrer l'excellence dans chaque ligne de code. Au-delà de l'expertise technique, j'apporte un état d'esprit créatif et une détermination implacable à innover, garantissant que chaque projet que je touche laisse un héritage durable. Construisons l'avenir, une ligne de code à la fois.",
      hello: "Bonjour, je suis",
      whatIDo: "Ce Que Je Fais",
      webDev: "Développement Web",
      webDevDesc: "Création d'applications web responsives avec des technologies modernes",
      mobileApps: "Applications Mobiles",
      mobileAppsDesc: "Création d'applications mobiles multiplateformes",
      gpsCartography: "GPS & Cartographie",
      gpsCartographyDesc: "Développement de solutions avancées de cartographie et de localisation",
      problemSolving: "Résolution de Problèmes",
      problemSolvingDesc: "Trouver des solutions élégantes aux problèmes complexes",
      downloadCV: "Télécharger CV",

      // Sidebar
      softwareEngineer: "Ingénieur Développement Logiciel",

      // About Stats
      internships: "Stages",
      projectsStats: "Projets",
      technologies: "Technologies",
      dedication: "Dévouement"
    }
  },
  ar: {
    translation: {
      // Navigation
      about: "معلومات عني",
      experience: "الخبرة",
      skills: "المهارات والخبرة",
      projects: "المشاريع",
      education: "التعليم",
      certificates: "الشهادات",

      // About Section
      aboutMe: "معلومات عني",
      description: "أنا مهندس تطوير برمجيات شغوف ومخلص مع موهبة في بناء تطبيقات الويب والموبايل القابلة للتوسع وعالية الأداء. مع عين حادة للتفاصيل وفضول لا يشبع للحلول المشكلات المعقدة، أصمم حلولاً مبتكرة لا تعزز تجربة المستخدم فحسب، بل تولد أيضاً تأثيراً مقاساً وعالمياً حقيقياً. أزدهر في البيئات التعاونية، حيث يمكنني تحويل الأفكار الجريئة إلى واقع ملموس إلى جانب فرق موهوبة، مدفوعاً دائماً حدود ما هو ممكن. دائماً جائع للتعلم والتكيف، أتبنى التقنيات والمنهجيات الناشئة للبقاء في المقدمة. مهمتي هي صياغة برمجيات أنيقة وفعالة ومستدامة تحل ليس فقط تحديات اليوم، بل تمهد الطريق أيضاً لابتكارات الغد. سواء كان تحسين الكود لأداء أقصى أو تصميم أنظمة تتوسع بسلاسة، أنا ملتزم بتقديم التميز في كل سطر من الكود. بالإضافة إلى الخبرة التقنية، أجلب عقلية إبداعية ودافعاً لا هوادة فيه للابتكار، مما يضمن أن كل مشروع ألمسه يترك إرثاً دائماً. دعونا نبني المستقبل، سطر كود في كل مرة.",
      hello: "مرحباً، أنا",
      whatIDo: "ما أفعله",
      webDev: "تطوير الويب",
      webDevDesc: "بناء تطبيقات الويب المتجاوبة باستخدام التقنيات الحديثة",
      mobileApps: "تطبيقات الهواتف",
      mobileAppsDesc: "إنشاء تطبيقات الهواتف متعددة المنصات",
      gpsCartography: "GPS والخرائط",
      gpsCartographyDesc: "تطوير حلول الخرائط وتحديد المواقع المتقدمة",
      problemSolving: "حل المشكلات",
      problemSolvingDesc: "العثور على حلول أنيقة للمشكلات المعقدة",
      downloadCV: "تحميل السيرة الذاتية",

      // Sidebar
      softwareEngineer: "مهندس تطوير برمجيات",

      // About Stats
      internships: "التدريبات",
      projectsStats: "المشاريع",
      technologies: "التقنيات",
      dedication: "الإخلاص"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
