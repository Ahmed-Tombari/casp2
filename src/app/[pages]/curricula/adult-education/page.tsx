import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Icon } from '@iconify/react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pages: string }>;
}): Promise<Metadata> {
  const { pages: page } = await params;
  const t = await getTranslations({ locale: page, namespace: 'adultEducation' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${page}/curricula/adult-education`,
      languages: {
        ar: '/ar/curricula/adult-education',
        fr: '/fr/curricula/adult-education',
        en: '/en/curricula/adult-education',
      },
    },
  };
}

export default async function AdultEducationPage({
  params,
}: {
  params: Promise<{ pages: string }>;
}) {
  const { pages: page } = await params;
  const t = await getTranslations({ locale: page, namespace: 'adultEducation' });
  const isRTL = page === 'ar';

  // Excellent Idea: "Goal-Oriented Streams" instead of just levels
  const streams = [
    {
      id: 'business',
      title: t('businessTitle'), // e.g., "Business Arabic"
      description: t('businessDesc'), // e.g., "Master meetings, emails, and negotiation."
      icon: 'solar:case-bold-duotone',
      color: 'bg-brand-navy',
      lightColor: 'bg-brand-navy/10 text-brand-navy',
      href: '/curricula/adult-education/business',
    },
    {
      id: 'media',
      title: t('mediaTitle'), // e.g., "Media & News"
      description: t('mediaDesc'), // e.g., "Understand Al Jazeera and daily newspapers."
      icon: 'solar:tv-bold-duotone',
      color: 'bg-brand-orange',
      lightColor: 'bg-brand-orange/10 text-brand-orange',
      href: '/curricula/adult-education/media',
    },
    {
      id: 'travel',
      title: t('travelTitle'), // e.g., "Travel & Culture"
      description: t('travelDesc'), // e.g., "Navigate airports, hotels, and restaurants with ease."
      icon: 'solar:map-point-bold-duotone',
      color: 'bg-brand-sky',
      lightColor: 'bg-brand-sky/10 text-brand-sky',
      href: '/curricula/adult-education/travel',
    },
  ];

  // Feature List for Adults (Time-saving focus)
  const features = [
    {
      title: t('microLearning'),
      desc: t('microLearningDesc'),
      icon: 'solar:clock-circle-bold-duotone',
    },
    {
      title: t('speakingFocus'),
      desc: t('speakingFocusDesc'),
      icon: 'solar:chat-round-line-duotone',
    },
    {
      title: t('nativeContext'),
      desc: t('nativeContextDesc'),
      icon: 'solar:users-group-rounded-bold-duotone',
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-24 text-center rounded-b-[4rem] shadow-soft-lg z-10">
        
        {/* Decorative Patterns */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
             <Icon icon="solar:graph-up-bold" className="absolute top-10 right-10 text-9xl text-white animate-pulse-slow" />
             <Icon icon="solar:globus-bold-duotone" className="absolute bottom-10 left-10 text-9xl text-brand-sky animate-pulse-slow" style={{animationDelay: '1s'}} />
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <span className="inline-block py-2 px-4 rounded-full bg-white/10 border border-white/20 text-brand-sky-light text-sm font-bold mb-6 backdrop-blur-md">
            {t('forProfessionals')}
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-emerald-50/80 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
      </section>

      {/* --- Section 1: Methodology / Why Us (The "Adult" advantage) --- */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="bg-white dark:bg-brand-navy-dark p-8 rounded-3xl shadow-soft border border-brand-sky/10 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-sky/10 text-brand-sky flex items-center justify-center mb-4">
                   <Icon icon={feature.icon} className="text-3xl" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 2: The Streams (Cards) --- */}
      <section className="py-10 pb-32 bg-brand-sky/5 dark:bg-[#050a11]">
        <div className="container mx-auto max-w-7xl px-4">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy dark:text-white mb-4">
              {t('chooseYourPath')}
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              {t('pathDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {streams.map((stream) => (
              <Link
                key={stream.id}
                href={stream.href}
                locale={page}
                className="group relative flex flex-col bg-white dark:bg-brand-navy-dark rounded-[3rem] p-8 md:p-10 shadow-soft border border-brand-sky/10 dark:border-brand-navy-light/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-soft-hover"
              >
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 rounded-[3rem] opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${stream.color}`} />

                {/* Icon Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-20 h-20 rounded-[2rem] ${stream.lightColor} flex items-center justify-center shadow-inner-soft`}>
                    <Icon icon={stream.icon} className="text-4xl" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    <Icon icon="solar:arrow-right-up-linear" className={`text-xl ${isRTL ? 'rotate-90' : ''}`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-4 group-hover:text-brand-orange transition-colors">
                  {stream.title}
                </h3>
                <p className="text-brand-navy/60 dark:text-gray-400 text-lg mb-8 leading-relaxed flex-grow">
                  {stream.description}
                </p>

                {/* Footer / CTA */}
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-navy/40 dark:text-gray-500 group-hover:text-brand-orange transition-colors">
                   <span>{t('startLearning')}</span>
                   <Icon icon="solar:alt-arrow-right-linear" className="text-lg rtl:rotate-180" />
                </div>
              </Link>
            ))}
          </div>

          {/* Special Banner for Corporate (Optional Idea) */}
          <div className="mt-20 p-12 rounded-[3rem] bg-linear-to-r from-brand-navy to-brand-navy-light text-white relative overflow-hidden shadow-soft-lg">
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:rtl:text-right md:ltr:text-left">
                   <h2 className="text-3xl font-bold mb-2">{t('corporateTitle')}</h2>
                   <p className="text-brand-sky-100">{t('corporateDesc')}</p>
                </div>
                <button className="bg-white text-brand-navy px-8 py-4 rounded-2xl font-bold shadow-3d hover:shadow-3d-pressed hover:translate-y-1 transition-all flex items-center gap-2">
                   <Icon icon="solar:buildings-bold-duotone" className="text-xl" />
                   {t('contactSales')}
                </button>
             </div>
             {/* Background decorative blob */}
             <div className="absolute right-0 top-0 h-full w-1/2 bg-white/5 skew-x-12 blur-2xl"></div>
          </div>

        </div>
      </section>
    </main>
  );
}
