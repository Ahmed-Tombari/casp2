import { Documentation } from '@/app/components/Documentation/Documentation'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ pages: string }> }): Promise<Metadata> {
  const { pages: page } = await params;
  // Use a generic namespace or home for now if documentation specific doesn't exist
  return {
    title: 'Documentation | CASP Education',
  };
}

export default function DocumentPage() {
  return <Documentation />
}
