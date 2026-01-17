import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import SignUp from '@/app/components/Auth/SignUp';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('register'),
    description: `Register for a new ${t('educationalPlatform')} account`,
  };
}

export default async function RegisterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <main className="min-h-screen pt-24">
      <section className="container py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-center mb-8">Register</h1>
          <SignUp />
        </div>
      </section>
    </main>
  );
}

