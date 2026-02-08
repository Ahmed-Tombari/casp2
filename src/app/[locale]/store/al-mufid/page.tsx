import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import SeriesDetail from '@/app/components/Series/SeriesDetail';
import PdfBookGrid from '@/app/components/Store/PdfBookGrid';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'store.alMufid' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function AlMufidPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'store.alMufid' });
  const tLevels = await getTranslations({ locale: locale, namespace: 'store.levels' });

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
    { level: tLevels('kg'), title: t('mufidVol1Title'), desc: t('mufidVol1Desc'), color: 'bg-brand-orange' },
    { level: tLevels('prep'), title: t('mufidVol1Title'), desc: t('mufidVol1Desc'), color: 'bg-brand-orange' },
    { level: tLevels('1'), title: t('mufidVol1Title'), desc: t('mufidVol1Desc'), color: 'bg-brand-orange' },
    { level: tLevels('2'), title: t('mufidVol2Title'), desc: t('mufidVol2Desc'), color: 'bg-brand-orange-light' },
    { level: tLevels('3'), title: t('mufidVol3Title'), desc: t('mufidVol3Desc'), color: 'bg-brand-gold' },
    { level: tLevels('4'), title: t('mufidVol3Title'), desc: t('mufidVol3Desc'), color: 'bg-brand-gold' },
    { level: tLevels('5'), title: t('mufidVol3Title'), desc: t('mufidVol3Desc'), color: 'bg-brand-gold' },
    { level: tLevels('6'), title: t('mufidVol3Title'), desc: t('mufidVol3Desc'), color: 'bg-brand-gold' },
    { level: tLevels('7'), title: t('mufidVol3Title'), desc: t('mufidVol3Desc'), color: 'bg-brand-gold' },
    { level: tLevels('8'), title: t('mufidVol3Title'), desc: t('mufidVol3Desc'), color: 'bg-brand-gold' },
    { level: tLevels('9'), title: t('mufidVol3Title'), desc: t('mufidVol3Desc'), color: 'bg-brand-gold' },
    { level: tLevels('10'), title: t('mufidVol3Title'), desc: t('mufidVol3Desc'), color: 'bg-brand-gold' },
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
        levels={books.map(b => ({ id: b.level, title: b.level }))} 
        bookCover="/images/books/سلسلة-المفيد-213x300.png" 
      />
    </SeriesDetail>
  );
}

