import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Icon } from '@iconify/react';

export async function generateMetadata({ params }: { params: Promise<{ pages: string }> }): Promise<Metadata> {
  const { pages: page } = await params;
  const t = await getTranslations({ locale: page, namespace: 'store' });
  return { title: t('title'), description: t('description') };
}

export default async function StorePage({ params }: { params: Promise<{ pages: string }> }) {
  const { pages: page } = await params;
  const t = await getTranslations({ locale: page, namespace: 'store' });
  const isRTL = page === 'ar';

  const categories = [
    {
      title: t('printedBooks1'),
      desc: t('printedDesc1'),
      href: '/store/printed-books',
      icon: 'solar:book-bookmark-bold-duotone',
      color: 'bg-brand-navy',
      textColor: 'text-brand-navy',
    },
    {
      title: t('ebooks1'),
      desc: t('ebooksDesc'),
      href: '/store/ebooks',
      icon: 'solar:tablet-bold-duotone',
      color: 'bg-brand-orange',
      textColor: 'text-brand-orange',
    },
    {
      title: t('educationalCds'),
      desc: t('cdsDesc'),
      href: '/educational-cds',
      icon: 'solar:diskette-bold-duotone',
      color: 'bg-brand-sky',
      textColor: 'text-brand-sky',
    },
    {
      title: t('merch'),
      desc: t('merchDesc'),
      href: '/store/merch',
      icon: 'solar:bag-heart-bold-duotone',
      color: 'bg-brand-gold',
      textColor: 'text-brand-gold',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#09121E] text-foreground transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="bg-brand-navy pt-32 pb-24 relative overflow-hidden text-center rounded-b-[4rem] shadow-soft-lg z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 border border-white/20 text-brand-gold text-sm font-bold mb-8 backdrop-blur-md">
             <Icon icon="solar:shop-bold" />
             <span>{t('officialStore')}</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            {t('title')}
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 -mt-16 relative z-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                href={cat.href}
                locale={page}
                className="group relative flex items-center p-8 bg-white dark:bg-[#112240] rounded-[2.5rem] shadow-soft hover:-translate-y-2 hover:shadow-soft-lg transition-all duration-300 overflow-hidden border border-transparent hover:border-brand-sky/20"
              >
                {/* Decorative Background Blob */}
                <div className={`absolute -right-10 -bottom-10 w-40 h-40 rounded-full opacity-10 ${cat.color} group-hover:scale-150 transition-transform duration-500`}></div>

                <div className={`w-20 h-20 rounded-[1.5rem] ${cat.color} flex items-center justify-center shrink-0 shadow-lg relative z-10`}>
                   <Icon icon={cat.icon} className="text-4xl text-white" />
                </div>

                <div className="px-6 relative z-10">
                   <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-2">{cat.title}</h3>
                   <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{cat.desc}</p>
                   
                   <div className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wider ${cat.textColor} group-hover:gap-3 transition-all`}>
                      <span>{t('shopNow')}</span>
                      <Icon icon="solar:arrow-right-linear" className={isRTL ? "rotate-180" : ""} />
                   </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured / Sale Banner */}
      <section className="pb-32 px-4">
         <div className="container mx-auto max-w-6xl">
            <div className="bg-brand-gold rounded-[3rem] p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-soft-lg">
               <div className="absolute inset-0 bg-black/5 pattern-dots"></div>
               <div className="relative z-10 text-brand-navy-dark text-center md:text-start rtl:md:text-right">
                  <h2 className="text-3xl md:text-5xl font-black mb-4">{t('bundleOffer')}</h2>
                  <p className="text-lg font-medium opacity-80 max-w-md">{t('bundleDesc')}</p>
               </div>
               <button className="relative z-10 mt-8 md:mt-0 px-8 py-4 bg-white text-brand-navy font-bold rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <Icon icon="solar:bag-check-bold" className="text-xl" />
                  {t('viewBundles')}
               </button>
            </div>
         </div>
      </section>

    </main>
  );
}
