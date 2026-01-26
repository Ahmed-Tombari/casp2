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
    title: t('account'),
    description: `Manage your ${t('account')} settings`,
  };
}

export default async function AccountPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <main className="min-h-screen pt-24 bg-brand-sky/5">
      <section className="container py-12">
        <h1 className="text-3xl font-bold text-brand-navy">My Account</h1>
        {/* Content will be added */}
      </section>
    </main>
  );
}

