import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Signin from '@/app/components/Auth/SignIn';
import AuthWrapper from '@/app/components/Auth/AuthWrapper';

export async function generateMetadata({ params }: { params: Promise<{ pages: string }> }): Promise<Metadata> {
  const { pages: page } = await params;
  const t = await getTranslations({ locale: page, namespace: 'nav' });

  return {
    title: t('login'),
    description: `Login to your ${t('educationalPlatform')} account`,
  };
}

export default async function LoginPage({ params }: { params: Promise<{ pages: string }> }) {
  const { pages: page } = await params;
  const tAuth = await getTranslations({ locale: page, namespace: 'auth' });

  return (
    <AuthWrapper 
      title={tAuth('signInTitle')} 
      subtitle={tAuth('signInSubtitle')}
    >
      <Signin />
    </AuthWrapper>
  );
}

