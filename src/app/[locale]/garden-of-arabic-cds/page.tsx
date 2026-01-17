import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('gardenOfArabicCDs'),
    description: `Browse ${t('gardenOfArabicCDs')}`,
  };
}

export default async function GardenOfArabicCDsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <main className="min-h-screen pt-24">
      <section className="container py-12">
        <h1>Garden of Arabic – CDs</h1>
        {/* Content will be added */}
      </section>
    </main>
  );
}

