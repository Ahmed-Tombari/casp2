import { redirect } from 'next/navigation';

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/platform/login`);
}

