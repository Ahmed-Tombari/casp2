import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Signin from '@/app/components/Auth/SignIn';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('login'),
    description: `Login to your ${t('educationalPlatform')} account`,
  };
}

export default async function LoginPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <main className="min-h-screen pt-24">
      <section className="container py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-center mb-8">Login</h1>
          <Signin />
        </div>
      </section>
    </main>
  );
}

