import { HeaderItem } from '@/app/types/menu';
import { Locale } from '@/i18n/config';

/**
 * Navigation translations
 */
const navKeys = {
  ar: {
    home: 'الرئيسية',

    teacherGuide: 'دليل المعلم',
      gardenGuide: 'دليل في حديقة اللغة العربية',
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
    alMufid: 'المفيد',
    alShamil: 'الشامل',
    alWafi: 'الوافي',
    ebooks: 'كتب إلكترونية',
    gardenOfArabic: 'في حديقة اللغة العربية',
    hidayah: 'hidayah',
    hidayahFr: 'hidayah فرنسي',
    printedBooks: 'كتب ورقية',
    qawedMobasta: 'قواعد مبسطة',
    alTareeqAlMuneerArabic: 'الطريق المنير عربي',
    alTareeqAlMuneerFrench: 'الطريق المنير فرنسي',
    theHappyMuslim: 'the happy muslim',
  },

  en: {
    home: 'Home',

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
    alMufid: 'Al-Mufid',
    alShamil: 'Al-Shamil',
    alWafi: 'Al-Wafi',
    ebooks: 'E-Books',
    gardenOfArabic: 'Garden of Arabic',
    hidayah: 'hidayah',
    hidayahFr: 'hidayah French',
    printedBooks: 'Printed Books',
    qawedMobasta: 'Qawaed Mobasta',
    alTareeqAlMuneerArabic: 'Al-Tareeq Al-Muneer Arabic',
    alTareeqAlMuneerFrench: 'Al-Tareeq Al-Muneer French',
    theHappyMuslim: 'the happy muslim',
  },

  fr: {
    home: 'Accueil',

    teacherGuide: 'Guide prof',
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
    alMufid: 'Al-Mufid',
    alShamil: 'Al-Shamil',
    alWafi: 'Al-Wafi',
    ebooks: 'Livres électroniques',
    gardenOfArabic: 'Jardin de l’arabe',
    hidayah: 'Hidayah',
    hidayahFr: 'Hidayah Francais',
    printedBooks: 'Livres imprimés',
    qawedMobasta: 'Qawaed Mobasta',
    alTareeqAlMuneerArabic: 'Al-Tareeq Al-Muneer Arab',
    alTareeqAlMuneerFrench: 'Al-Tareeq Al-Muneer Francais',
    theHappyMuslim: 'Happy Muslim',
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
      label: t.store,
      href: '/store',
      submenu: [
        { label: t.alMufid, href: '/store/al-mufid' },
        { label: t.alShamil, href: '/store/al-shamil' },
        { label: t.alWafi, href: '/store/al-wafi' },
        { label: t.ebooks, href: '/store/ebooks' },
        { label: t.gardenOfArabic, href: '/store/garden-of-arabic' },
        { label: t.hidayah, href: '/store/hidayah' },
        { label: t.hidayahFr, href: '/store/hidayah-fr' },
        { label: t.printedBooks, href: '/store/printed-books' },
        { label: t.qawedMobasta, href: '/store/qawaed-mobasta' },
        { label: t.alTareeqAlMuneerArabic, href: '/store/tareeq-al-muneer' },
        { label: t.alTareeqAlMuneerFrench, href: '/store/tareeq-al-muneer-fr' },
        { label: t.theHappyMuslim, href: '/store/the-happy-muslim' },
        
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
          label: t.teacherGuide,
          href: '/teacher-guide',
          submenu: [
            {
              label: t.gardenGuide,
              href: '/teacher-guide/garden-guide',
            },
            {
              label: t.wafiGuide,
              href: '/teacher-guide/wafi-guide',
            },
            {
              label: t.mufidGuide,
              href: '/teacher-guide/mufid-guide',
            },
            {
              label: t.happyMuslimGuide,
              href: '/teacher-guide/happyMuslim-guide',
            },
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
      label: t.channel,
      href: '/channel',
     submenu: [
        { label: t.youtubeChannel, href: 'https://www.youtube.com/@%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D9%84%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%88%D9%8A%D8%A9-%D9%83%D9%86' },
        { label: t.facebookChannel, href: 'https://www.facebook.com/caspeducation?rdid=gMP9FoFjFiCWfr4W&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HDVhzFqx4%2F#' },
      ],
    },

    /**************** old navigation ******************/
    // {
    //   label: t.curricula,
    //   href: '/curricula',
    //   submenu: [
    //     {
    //       label: t.arabicSeries,
    //       href: '/curricula/arabic-series',
    //       submenu: [
    //         {
    //           label: t.gardenOfArabic,
    //           href: '/curricula/arabic-series/garden-of-arabic',
    //         },
    //         {
    //           label: t.alWafi,
    //           href: '/curricula/arabic-series/al-wafi',
    //         },
    //         {
    //           label: t.alMufid,
    //           href: '/curricula/arabic-series/al-mufid',
    //         },
    //       ],
    //     },
    //     {
    //       label: t.islamicSeries,
    //       href: '/curricula/islamic-series',
    //       submenu: [
    //         {
    //           label: t.alTareeqAlMuneerArabic,
    //           href: '/curricula/islamic-series/tareeq-al-muneer',
    //         },
    //         {
    //           label: t.alTareeqAlMuneerFrench,
    //           href: '/curricula/islamic-series/tareeq-al-muneer-fr',
    //         },
    //         {
    //           label: t.theHappyMuslim,
    //           href: '/curricula/islamic-series/the-happy-muslim',
    //         },
    //         {
    //           label: t.hidayah,
    //           href: '/curricula/islamic-series/hidayah',
    //         },
    //       ],
    //     },
    //     {
    //       label: t.adultEducation,
    //       href: '/curricula/adult-education',
    //     },
        
    //   ],
    // },
    // {
    //   label: t.quizzes,
    //   href: '/quizzes',
    //   submenu: [
    //     { label: t.placementTest, href: '/quizzes/placement-test' },
    //     { label: t.lessonsTests, href: '/quizzes/lessons-tests', 
    //       submenu: [
    //         {
    //           label: t.handwritingExercises,
    //           href: '/quizzes/lessons-tests/handwriting-exercises',
    //         },
    //         {
    //           label: t.letterColoring,
    //           href: '/quizzes/lessons-tests/letter-coloring',
    //         },
    //       ],
    //     },
    //     { label: t.educationalCDs, href: '/quizzes/educational-cds' },
    //   ],
    // }, 
  ];
}
