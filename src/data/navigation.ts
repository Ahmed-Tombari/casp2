import { HeaderItem } from '@/app/types/menu';
import { Locale } from '@/i18n/config';

/**
 * Navigation translations
 */
const navKeys = {
  ar: {
    home: 'الرئيسية',

    // curricula
    curricula: 'المناهج',

    arabicSeries: 'سلاسل اللغة العربية',
      gardenOfArabic: 'في حديقة اللغة العربية',
      alWafi: 'الوافي',
      alMufid: 'المفيد',

    islamicSeries: 'سلاسل في التربية الإسلامية',
      alTareeqAlMuneerArabic: 'الطريق المنير عربي',
      alTareeqAlMuneerFrench: 'الطريق المنير فرنسي',
      theHappyMuslim: 'the happy muslim',
      hidayah: 'hidayah',
      adultEducation: 'سلاسل تعليمية للكبار',

    teacherGuide: 'دليل المعلم',
      gardenGuide: 'دليل حديقة اللغة العربية',
      wafiGuide: 'دليل الوافي',
      mufidGuide: 'دليل المفيد',
      happyMuslimGuide: 'دليل the happy muslim',
      hidayahGuide: 'دليل hidayah',

    // quizzes
    quizzes: 'الاختبارات',
    placementTest: 'اختبار تحديد المستوى',
    educationalCDs: 'السيديات التعليمية',
    lessonsTests: 'دروس واختبارات',
      handwritingExercises: 'تمارين الخط',
      letterColoring: 'أوراق تلوين الحروف',
    
    // channel
    channel: 'القناة',
    youtubeChannel: 'قناتنا على اليوتيوب',
    facebookChannel: 'قناتنا على الفايسبوك',

    // platforms
    platforms: 'المنصات',
    qalamNetPlatform: 'منصة قلم نات',
    wafiPlatform: 'منصة الوافي',
    myBookPlatform: 'منصة كتابي',

    // services
    services: 'الخدمات',
    account: 'حساب المستخدم',
    dashboard: 'لوحة التحكم',
    contact: 'اتصل بنا',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الاستخدام',
    register: 'إنشاء حساب',
    progress: 'تتبع التقدم',
    login: 'تسجيل الدخول',
    
    // store
    store: 'المتجر',
    printedBooks: 'كتب ورقية',
    ebooks: 'كتب إلكترونية',

    gardenOfArabicCDs: 'سيديات حديقة اللغة العربية',
    teachingTools: 'الوسائل التعليمية',
    educationalPlatform: 'المنصة التعليمية',
  },

  en: {
    home: 'Home',

    // curricula
    curricula: 'Curricula',

    arabicSeries: 'Arabic Language Series',
      gardenOfArabic: 'Garden of Arabic',
      alWafi: 'Al-Wafi',
      alMufid: 'Al-Mufid',

    islamicSeries: 'Islamic Education Series',
      alTareeqAlMuneerArabic: 'Al-Tareeq Al-Muneer Arabic',
      alTareeqAlMuneerFrench: 'Al-Tareeq Al-Muneer French',
      theHappyMuslim: 'the happy muslim',
      hidayah: 'hidayah',
      adultEducation: 'Adult Education Series',

    teacherGuide: 'Teacher Guide',
      gardenGuide: 'Garden of Arabic Guide',
      wafiGuide: 'Wafi Guide',
      mufidGuide: 'Mufid Guide',
      happyMuslimGuide: 'Happy Muslim Guide',
      hidayahGuide: 'Hidayah Guide',

    // quizzes
    quizzes: 'Quizzes',
    placementTest: 'Placement Test',
    educationalCDs: 'Educational CDs',
    lessonsTests: 'Lessons & Tests',
      handwritingExercises: 'Handwriting Exercises',
      letterColoring: 'Letter Coloring',

    // channel
    channel: 'Channel',
    youtubeChannel: 'YouTube Channel',
    facebookChannel: 'Facebook Channel',

    // platforms 
    platforms: 'Platforms', 
    qalamNetPlatform: 'Qalam-Net Platform', 
    wafiPlatform: 'Al-Wafi Platform', 
    myBookPlatform: 'Kittaby Platform',

    // services 
    services: 'Services',
    account: 'Account',
    dashboard: 'Dashboard',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    register: 'Register',
    progress: 'Progress',
    login: 'Login',

    // store
    store: 'Store',
    printedBooks: 'Printed Books',
    ebooks: 'E-Books',
  
    gardenOfArabicCDs: 'Garden of Arabic CDs',
    teachingTools: 'Teaching Tools',
    educationalPlatform: 'Educational Platform',
  },

  fr: {
    home: 'Accueil',

    // curricula
    curricula: 'Programmes',

    arabicSeries: 'Série de langue arabe',
      gardenOfArabic: 'Jardin de l’arabe',
      alWafi: 'Al-Wafi',
      alMufid: 'Al-Mufid',

    islamicSeries: 'Série éducation islamique',
      alTareeqAlMuneerArabic: 'Al-Tareeq Al-Muneer Arabic',
      alTareeqAlMuneerFrench: 'Al-Tareeq Al-Muneer French',
      theHappyMuslim: 'the happy muslim',
      hidayah: 'hidayah',
      adultEducation: 'Série éducation des adultes',

    teacherGuide: 'Guide du professeur',
      gardenGuide: 'Guide du jardin',
      wafiGuide: 'Guide du wafi',
      mufidGuide: 'Guide du mufid',
      happyMuslimGuide: 'Guide du happy muslim',
      hidayahGuide: 'Guide du hidayah',
    
    // quizzes
    quizzes: 'Tests',
    placementTest: 'Test de niveau',
    educationalCDs: 'CDs éducatifs',
    lessonsTests: 'Leçons et tests',
      handwritingExercises: 'Exercices d’écriture',
      letterColoring: 'Coloriage des lettres',
    
    // channel
    channel: 'Chaîne',
    youtubeChannel: 'Chaîne YouTube',
    facebookChannel: 'Chaîne Facebook',

    // platforms
    platforms: 'Plateformes',
    qalamNetPlatform: 'Plateforme qalam-Net',
    wafiPlatform: 'Plateforme al-Wafi',
    myBookPlatform: 'Plateforme kittaby',

    // services
    services: 'Services',
    account: 'Compte',
    dashboard: 'Tableau de bord',
    contact: 'Contact',
    privacy: 'Confidentialité',
    terms: 'Conditions d’utilisation',
    register: 'Inscription',
    login: 'Connexion',
    progress: 'Progression',

    // store
    store: 'Boutique',
    printedBooks: 'Livres imprimés',
    ebooks: 'Livres électroniques',
    
    gardenOfArabicCDs: 'CDs du jardin de l’arabe',
    teachingTools: 'Outils pédagogiques',
    educationalPlatform: 'Plateforme éducative',
  },
} as const;

/**
 * Navigation structure
 */
export function getNavigationData(locale: Locale): HeaderItem[] {
  const t = navKeys[locale];

  return [
    {
      label: t.home,
      href: '/',
    },
    {
      label: t.curricula,
      href: '/curricula',
      submenu: [
        {
          label: t.arabicSeries,
          href: '/curricula/arabic-series',
          submenu: [
            {
              label: t.gardenOfArabic,
              href: '/curricula/arabic-series/garden-of-arabic',
            },
            {
              label: t.alWafi,
              href: '/curricula/arabic-series/al-wafi',
            },
            {
              label: t.alMufid,
              href: '/curricula/arabic-series/al-mufid',
            },
          ],
        },
        {
          label: t.islamicSeries,
          href: '/curricula/islamic-series',
          submenu: [
            {
              label: t.alTareeqAlMuneerArabic,
              href: '/curricula/islamic-series/tareeq-al-muneer',
            },
            {
              label: t.alTareeqAlMuneerFrench,
              href: '/curricula/islamic-series/tareeq-al-muneer-fr',
            },
            {
              label: t.theHappyMuslim,
              href: '/curricula/islamic-series/the-happy-muslim',
            },
            {
              label: t.hidayah,
              href: '/curricula/islamic-series/hidayah',
            },
          ],
        },
        {
          label: t.adultEducation,
          href: '/curricula/adult-education',
        },
        {
          label: t.teacherGuide,
          href: '/curricula/teacher-guide',
          submenu: [
            {
              label: t.gardenGuide,
              href: '/curricula/teacher-guide/garden-guide',
            },
            {
              label: t.wafiGuide,
              href: '/curricula/teacher-guide/wafi-guide',
            },
            {
              label: t.mufidGuide,
              href: '/curricula/teacher-guide/mufid-guide',
            },
            {
              label: t.happyMuslimGuide,
              href: '/curricula/teacher-guide/happyMuslim-guide',
            },
          ],
        },
      ],
    },
    {
      label: t.quizzes,
      href: '/quizzes',
      submenu: [
        { label: t.placementTest, href: '/quizzes/placement-test' },
        { label: t.lessonsTests, href: '/quizzes/lessons-tests', 
          submenu: [
            {
              label: t.handwritingExercises,
              href: '/quizzes/lessons-tests/handwriting-exercises',
            },
            {
              label: t.letterColoring,
              href: '/quizzes/lessons-tests/letter-coloring',
            },
          ],
        },
        { label: t.educationalCDs, href: '/quizzes/educational-cds' },
      ],
    },
    {
      label: t.channel,
      href: '/channel',
      submenu: [
        { label: t.youtubeChannel, href: 'https://www.youtube.com/@%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D9%84%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%88%D9%8A%D8%A9-%D9%83%D9%86' },
        { label: t.facebookChannel, href: 'https://www.facebook.com/caspeducation?rdid=gMP9FoFjFiCWfr4W&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HDVhzFqx4%2F#' },
      ],
    },
    {
      label: t.platforms,
      href: '/platform',
      submenu: [
        { label: t.qalamNetPlatform, href: '/platform/qalamnet-platform' },
        { label: t.wafiPlatform, href: '/platform/wafi-platform' },
        { label: t.myBookPlatform, href: '/platform/mybook-platform' },
      ],
    },
    {
      label: t.services,
      href: '/services',
      submenu: [
        { label: t.account, href: '/services/account' },
        { label: t.dashboard, href: '/services/dashboard' },
        { label: t.contact, href: '/services/contact' },
        { label: t.privacy, href: '/services/privacy' },
        { label: t.terms, href: '/services/terms' },
        { label: t.register, href: '/services/register' },
        { label: t.login, href: '/services/login' },
        { label: t.progress, href: '/services/progress' },
      ],
    },
    {
      label: t.store,
      href: '/store',
      submenu: [
        { label: t.printedBooks, href: '/store/printed-books' },
        { label: t.ebooks, href: '/store/ebooks' },
      ],
    },
  ];
}
