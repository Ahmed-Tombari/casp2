import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import SeriesDetail from '@/app/components/Series/SeriesDetail';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pages: string }>;
}): Promise<Metadata> {
  const { pages: page } = await params;
  const t = await getTranslations({ locale: page, namespace: 'arabicSeries' });

  return {
    title: t('alMufidTitle'),
    description: t('alMufidDesc'),
  };
}

export default async function AlMufidPage({
  params,
}: {
  params: Promise<{ pages: string }>;
}) {
  const { pages: page } = await params;
  const t = await getTranslations({ locale: page, namespace: 'arabicSeries' });

  // --- Al Mufid Specific Data: "Practical & Fast" ---
  const features = [
    {
      title: t('practicalUsage'), // "Practical Usage"
      desc: t('usageDesc'),
      icon: 'solar:hand-stars-bold-duotone',
    },
    {
      title: t('quickReference'), // "Quick Reference"
      desc: t('referenceDesc'),
      icon: 'solar:bookmark-opened-bold-duotone',
    },
    {
      title: t('modernVocabulary'), // "Modern Vocabulary"
      desc: t('vocabDesc'),
      icon: 'solar:chat-square-like-bold-duotone',
    },
  ];

  const books = [
    {
      level: t('level') + ' 1',
      title: t('mufidVol1Title'),
      desc: t('mufidVol1Desc'),
      color: 'bg-brand-orange', // Distinctive Orange Theme
    },
    {
      level: t('level') + ' 2',
      title: t('mufidVol2Title'),
      desc: t('mufidVol2Desc'),
      color: 'bg-brand-orange-light',
    },
    {
      level: t('level') + ' 3',
      title: t('mufidVol3Title'),
      desc: t('mufidVol3Desc'),
      color: 'bg-brand-gold',
    },
  ];

  return (
    <SeriesDetail 
      title={t('alMufidTitle')} 
      description={t('alMufidDesc')}
      features={features}
      books={books}
      locale={page}
    />
  );
}
