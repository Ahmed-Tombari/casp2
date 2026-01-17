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
    title: t('gardenOfArabic'),
    description: `Explore the ${t('gardenOfArabic')}`,
  };
}

export default async function GardenOfArabicPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <main className="min-h-screen pt-24">
      <section className="container py-12">
        <h1>Garden of Arabic</h1>
        {/* Content will be added */}
      </section>
    </main>
  );
}

