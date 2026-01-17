import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ContactForm from '@/app/components/Contact/Form';
import { Icon } from '@iconify/react/dist/iconify.js';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('contact'),
    description: `Get in touch with CASP Education`,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        'ar': '/ar/contact',
        'fr': '/fr/contact',
        'en': '/en/contact',
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  const contactInfo = [
    {
      title: t('phoneTitle'),
      value: '+216 22 123 456',
      icon: 'solar:phone-calling-bold-duotone',
      color: 'bg-green-50 text-green-600',
    },
    {
      title: t('emailTitle'),
      value: 'info@caspeducation.com',
      icon: 'solar:letter-bold-duotone',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: t('officeTitle'),
      value: t('officeAddress'),
      icon: 'solar:map-point-bold-duotone',
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-20 relative overflow-hidden text-center">
        <div className="absolute top-0 start-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {t('title')}
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-thom-light text-center group hover:-translate-y-2 transition-all duration-500">
                <div className={`w-16 h-16 rounded-2xl ${info.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon icon={info.icon} className="text-3xl" />
                </div>
                <h3 className="text-lg font-bold text-thom-dark/40 uppercase tracking-widest mb-2">
                  {info.title}
                </h3>
                <p className="text-xl font-bold text-thom-dark">
                  {info.value}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
             <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

