import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import SeriesDetail from '@/app/components/Series/SeriesDetail'; // Adjust path if needed
import PdfBookGrid from '@/app/components/Store/PdfBookGrid';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'store.alWafi' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function AlWafiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'store.alWafi' });
  const tLevels = await getTranslations({ locale: locale, namespace: 'store.levels' });

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
    { level: tLevels('kg'), title: t('wafiVol1Title'), desc: t('wafiVol1Desc'), color: 'bg-brand-navy' },
    { level: tLevels('prep'), title: t('wafiVol1Title'), desc: t('wafiVol1Desc'), color: 'bg-brand-navy' },
    { level: tLevels('1'), title: t('wafiVol1Title'), desc: t('wafiVol1Desc'), color: 'bg-brand-navy' },
    { level: tLevels('2'), title: t('wafiVol2Title'), desc: t('wafiVol2Desc'), color: 'bg-brand-orange' },
    { level: tLevels('3'), title: t('wafiVol3Title'), desc: t('wafiVol3Desc'), color: 'bg-brand-sky' },
    { level: tLevels('4'), title: t('wafiVol4Title'), desc: t('wafiVol4Desc'), color: 'bg-brand-gold' },
    { level: tLevels('5'), title: t('wafiVol4Title'), desc: t('wafiVol4Desc'), color: 'bg-brand-gold' },
    { level: tLevels('6'), title: t('wafiVol4Title'), desc: t('wafiVol4Desc'), color: 'bg-brand-gold' },
    { level: tLevels('7'), title: t('wafiVol4Title'), desc: t('wafiVol4Desc'), color: 'bg-brand-gold' },
    { level: tLevels('8'), title: t('wafiVol4Title'), desc: t('wafiVol4Desc'), color: 'bg-brand-gold' },
    { level: tLevels('9'), title: t('wafiVol4Title'), desc: t('wafiVol4Desc'), color: 'bg-brand-gold' },
    { level: tLevels('10'), title: t('wafiVol4Title'), desc: t('wafiVol4Desc'), color: 'bg-brand-gold' },
  ];

  return (
    <SeriesDetail 
      title={t('title')} 
      description={t('description')}
      features={features}
      books={books}
      locale={locale}
    >
      <PdfBookGrid 
        levels={books.map(b => ({ 
          id: b.level, 
          title: b.level,
          bookCover: "/images/books/سلسلة-في-حديقة-اللغة-العربية-213x300.png",
          pdfUrl: "#" // Placeholder since it wasn't provided before
        }))} 
      />
    </SeriesDetail>
  );
}

