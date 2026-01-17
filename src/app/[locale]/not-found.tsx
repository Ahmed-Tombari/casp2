import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';

export default async function NotFound({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'ar';
  const t = await getTranslations({ locale, namespace: 'common' });

  return (
    <div className="min-h-screen flex items-center justify-center bg-thom-light">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-thom-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-thom-dark mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-accent transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

