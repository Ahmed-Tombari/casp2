import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import SeriesDetail from '@/app/components/EducationalSeries/SeriesDetail';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'educationalSeries' });

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
  const t = await getTranslations({ locale, namespace: 'educationalSeries' });

  return (
    <SeriesDetail 
      title={t('alWafiTitle')} 
      description={t('alWafiDesc')} 
    />
  );
}

