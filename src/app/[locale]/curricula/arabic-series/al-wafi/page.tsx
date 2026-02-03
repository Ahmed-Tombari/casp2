import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import SeriesDetail from '@/app/components/Series/SeriesDetail'; // Adjust path if needed

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'arabicSeries' });

  return {
    title: t('alWafiTitle'),
    description: t('alWafiDesc'),
  };
}

export default async function AlWafiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'arabicSeries' });

  // --- Al Wafi Specific Data (Mocked for now, but structured) ---
  const features = [
    {
      title: t('comprehensiveGrammar'), // "Detailed Grammar"
      desc: t('grammarDesc'),
      icon: 'solar:ruler-pen-bold-duotone',
    },
    {
      title: t('audioSupport'), // "Audio Included"
      desc: t('audioDesc'),
      icon: 'solar:headphones-round-sound-bold-duotone',
    },
    {
      title: t('exercises'), // "Practice Exercises"
      desc: t('exercisesDesc'),
      icon: 'solar:document-add-bold-duotone',
    },
  ];

  const books = [
    {
      level: t('level') + ' 1',
      title: t('wafiVol1Title'),
      desc: t('wafiVol1Desc'),
      color: 'bg-brand-navy',
    },
    {
      level: t('level') + ' 2',
      title: t('wafiVol2Title'),
      desc: t('wafiVol2Desc'),
      color: 'bg-brand-orange',
    },
    {
      level: t('level') + ' 3',
      title: t('wafiVol3Title'),
      desc: t('wafiVol3Desc'),
      color: 'bg-brand-sky',
    },
    {
      level: t('level') + ' 4',
      title: t('wafiVol4Title'),
      desc: t('wafiVol4Desc'),
      color: 'bg-brand-gold',
    },
  ];

  return (
    <SeriesDetail 
      title={t('alWafiTitle')} 
      description={t('alWafiDesc')}
      features={features}
      books={books}
      locale={locale}
    />
  );
}

