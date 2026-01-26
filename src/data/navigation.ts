import { HeaderItem } from '@/app/types/menu';
import { Locale } from '@/i18n/config';

/**
 * Navigation translations
 */
const navKeys = {
  ar: {
    home: 'الرئيسية',
    curricula: 'المناهج',
    quizzes: 'الاختبارات',
    channel: 'القناة',
    platforms: 'المنصات',
    services: 'الخدمات',

    // Submenu items
    store: 'المتجر',
    printedBooks: 'كتب ورقية',
    ebooks: 'كتب إلكترونية',
    lessonsTests: 'دروس واختبارات',

    educationalSeries: 'سلاسل تعليمية',
    gardenOfArabic: 'في حديقة اللغة العربية',
    alWafi: 'الوافي',
    alMufid: 'المفيد',
    adultEducation: 'برامج تعليمية للكبار',

    educationalCDs: 'السيديات التعليمية',
    gardenOfArabicCDs: 'سيديات حديقة اللغة العربية',

    teachingTools: 'الوسائل التعليمية',
    handwritingExercises: 'تمارين الخط',
    letterColoring: 'أوراق تلوين الحروف',

    placementTest: 'اختبار تحديد المستوى',

    educationalPlatform: 'المنصة التعليمية',
    account: 'حساب المستخدم',
    dashboard: 'لوحة التحكم',
    progress: 'تتبع التقدم',
    login: 'تسجيل الدخول',
    register: 'إنشاء حساب',

    contact: 'اتصل بنا',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الاستخدام',
  },

  en: {
    home: 'Home',
    curricula: 'Curricula',
    quizzes: 'Quizzes',
    channel: 'Channel',
    platforms: 'Platforms',
    services: 'Services',

    store: 'Store',
    printedBooks: 'Printed Books',
    ebooks: 'E-Books',
    lessonsTests: 'Lessons & Tests',

    educationalSeries: 'Educational Series',
    gardenOfArabic: 'Garden of Arabic',
    alWafi: 'Al-Wafi',
    alMufid: 'Al-Mufid',
    adultEducation: 'Adult Education',

    educationalCDs: 'Educational CDs',
    gardenOfArabicCDs: 'Garden of Arabic CDs',

    teachingTools: 'Teaching Tools',
    handwritingExercises: 'Handwriting Exercises',
    letterColoring: 'Letter Coloring',

    placementTest: 'Placement Test',

    educationalPlatform: 'Educational Platform',
    account: 'Account',
    dashboard: 'Dashboard',
    progress: 'Progress',
    login: 'Login',
    register: 'Register',

    contact: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
  },

  fr: {
    home: 'Accueil',
    curricula: 'Programmes',
    quizzes: 'Tests',
    channel: 'Chaîne',
    platforms: 'Plateformes',
    services: 'Services',

    store: 'Boutique',
    printedBooks: 'Livres Imprimés',
    ebooks: 'Livres Électroniques',
    lessonsTests: 'Leçons et Tests',

    educationalSeries: 'Série Éducative',
    gardenOfArabic: "Jardin de l'Arabe",
    alWafi: 'Al-Wafi',
    alMufid: 'Al-Mufid',
    adultEducation: 'Éducation des Adultes',

    educationalCDs: 'CDs Éducatifs',
    gardenOfArabicCDs: "CDs Jardin de l'Arabe",

    teachingTools: 'Outils Pédagogiques',
    handwritingExercises: 'Exercices d’Écriture',
    letterColoring: 'Coloriage des Lettres',

    placementTest: 'Test de Niveau',

    educationalPlatform: 'Plateforme Éducative',
    account: 'Compte',
    dashboard: 'Tableau de Bord',
    progress: 'Progression',
    login: 'Connexion',
    register: 'Inscription',

    contact: 'Contact',
    privacy: 'Confidentialité',
    terms: 'Conditions d’Utilisation',
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
        { label: t.educationalSeries, href: '/educational-series' },
        { label: t.gardenOfArabic, href: '/garden-of-arabic' },
        { label: t.alWafi, href: '/educational-series/al-wafi' },
        { label: t.alMufid, href: '/educational-series/al-mufid' },
        { label: t.adultEducation, href: '/adult-education' },
      ],
    },
    {
      label: t.quizzes,
      href: '/quizzes',
      submenu: [
        { label: t.lessonsTests, href: '/lessons-tests' },
        { label: t.placementTest, href: '/placement-test' },
      ],
    },
    {
      label: t.channel,
      href: '/channel',
      submenu: [
        { label: t.gardenOfArabic, href: '/garden-of-arabic' },
        { label: t.educationalCDs, href: '/educational-cds' },
        { label: t.gardenOfArabicCDs, href: '/garden-of-arabic-cds' },
      ],
    },
    {
      label: t.platforms,
      href: '/platform',
      submenu: [
        { label: t.educationalPlatform, href: '/platform' },
        { label: t.account, href: '/platform/account' },
        { label: t.dashboard, href: '/platform/dashboard' },
        { label: t.progress, href: '/platform/progress' },
        { label: t.login, href: '/platform/login' },
        { label: t.register, href: '/platform/register' },
      ],
    },
    {
      label: t.services,
      href: '/services',
      submenu: [
        { label: t.store, href: '/store' },
        { label: t.printedBooks, href: '/store/printed-books' },
        { label: t.ebooks, href: '/store/ebooks' },
        { label: t.teachingTools, href: '/teaching-tools' },
        { label: t.handwritingExercises, href: '/teaching-tools/handwriting-exercises' },
        { label: t.letterColoring, href: '/teaching-tools/letter-coloring' },
        { label: t.contact, href: '/contact' },
        { label: t.privacy, href: '/privacy' },
        { label: t.terms, href: '/terms' },
      ],
    },
  ];
}
