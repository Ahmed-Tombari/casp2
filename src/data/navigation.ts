import { HeaderItem } from '@/app/types/menu';
import { Locale } from '@/i18n/config';

export function getNavigationData(locale: Locale): HeaderItem[] {
  const t = (key: string) => {
    // This will be replaced with actual i18n function
    return key;
  };

  return [
    {
      label: locale === 'ar' ? 'الرئيسية' : locale === 'fr' ? 'Accueil' : 'Home',
      href: `/${locale}`,
    },
    {
      label: locale === 'ar' ? 'المتجر' : locale === 'fr' ? 'Boutique' : 'Store',
      href: `/${locale}/store`,
      submenu: [
        {
          label: locale === 'ar' ? 'الكتب المطبوعة' : locale === 'fr' ? 'Livres imprimés' : 'Printed Books',
          href: `/${locale}/store/printed-books`,
        },
        {
          label: locale === 'ar' ? 'الكتب الإلكترونية' : locale === 'fr' ? 'Livres électroniques' : 'E-Books',
          href: `/${locale}/store/ebooks`,
        },
        {
          label: locale === 'ar' ? 'الاختبارات' : locale === 'fr' ? 'Quiz' : 'Quizzes',
          href: `/${locale}/store/quizzes`,
        },
        {
          label: locale === 'ar' ? 'الدروس والاختبارات' : locale === 'fr' ? 'Leçons et tests' : 'Lessons & Tests',
          href: `/${locale}/store/lessons-tests`,
        },
      ],
    },
    {
      label: locale === 'ar' ? 'السلسلة التعليمية' : locale === 'fr' ? 'Série éducative' : 'Educational Series',
      href: `/${locale}/educational-series`,
      submenu: [
        {
          label: locale === 'ar' ? 'الوافي' : 'Al-Wafi',
          href: `/${locale}/educational-series/al-wafi`,
        },
        {
          label: locale === 'ar' ? 'المفيد' : 'Al-Mufid',
          href: `/${locale}/educational-series/al-mufid`,
        },
        {
          label: locale === 'ar' ? 'حديقة العربية' : locale === 'fr' ? "Jardin de l'arabe" : 'Garden of Arabic',
          href: `/${locale}/garden-of-arabic`,
        },
        {
          label: locale === 'ar' ? 'برامج تعليم الكبار' : locale === 'fr' ? "Programmes d'éducation des adultes" : 'Adult Education Programs',
          href: `/${locale}/adult-education`,
        },
      ],
    },
    {
      label: locale === 'ar' ? 'دليل المعلم' : locale === 'fr' ? "Guide de l'enseignant" : 'Teacher Guide',
      href: `/${locale}/teacher-guide`,
    },
    {
      label: locale === 'ar' ? 'الموارد الإضافية' : locale === 'fr' ? 'Ressources' : 'Resources',
      href: '#',
      submenu: [
        {
          label: locale === 'ar' ? 'الأقراص التعليمية' : locale === 'fr' ? 'CDs éducatifs' : 'Educational CDs',
          href: `/${locale}/educational-cds`,
        },
        {
          label: locale === 'ar' ? 'حديقة العربية - أقراص' : locale === 'fr' ? "Jardin de l'arabe - CDs" : 'Garden of Arabic – CDs',
          href: `/${locale}/garden-of-arabic-cds`,
        },
        {
          label: locale === 'ar' ? 'القناة التعليمية' : locale === 'fr' ? 'Chaîne éducative' : 'Educational Channel',
          href: `/${locale}/educational-channel`,
        },
        {
          label: locale === 'ar' ? 'أدوات التدريس' : locale === 'fr' ? 'Outils pédagogiques' : 'Teaching Tools',
          href: `/${locale}/teaching-tools`,
        },
        {
          label: locale === 'ar' ? 'اختبار تحديد المستوى' : locale === 'fr' ? 'Test de placement' : 'Placement Test',
          href: `/${locale}/placement-test`,
        },
      ],
    },
    {
      label: locale === 'ar' ? 'المنصة التعليمية' : locale === 'fr' ? 'Plateforme éducative' : 'Educational Platform',
      href: `/${locale}/platform`,
      submenu: [
        {
          label: locale === 'ar' ? 'تسجيل الدخول' : locale === 'fr' ? 'Connexion' : 'Login',
          href: `/${locale}/platform/login`,
        },
        {
          label: locale === 'ar' ? 'التسجيل' : locale === 'fr' ? "S'inscrire" : 'Register',
          href: `/${locale}/platform/register`,
        },
      ],
    },
    {
      label: locale === 'ar' ? 'اتصل بنا' : locale === 'fr' ? 'Contact' : 'Contact',
      href: `/${locale}/contact`,
    },
  ];
}

