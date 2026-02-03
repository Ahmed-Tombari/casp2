import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Icon } from '@iconify/react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'store.ebooks' });
  return { title: t('title'), description: t('description') };
}

export default async function EBooksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'store.ebooks' });

  // Mock Data
  const ebooks = [
    { title: "Grammar Master", price: "$12.99", color: "bg-emerald-500" },
    { title: "Arabic Tales", price: "$9.99", color: "bg-brand-orange" },
    { title: "Daily Duas", price: "$5.99", color: "bg-brand-sky" },
    { title: "Biz Arabic", price: "$15.99", color: "bg-brand-navy" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#09121E] pt-32 pb-20 transition-colors duration-300">
      
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div>
              <h1 className="text-4xl font-extrabold text-brand-navy dark:text-white mb-2">{t('title')}</h1>
              <p className="text-gray-500 dark:text-gray-400 max-w-xl">{t('description')}</p>
           </div>
           
           {/* Filter Button */}
           <button className="px-6 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 font-bold hover:bg-brand-navy hover:text-white transition-all flex items-center gap-2">
              <Icon icon="solar:filter-bold-duotone" />
              {t('filter')}
           </button>
        </div>

        {/* E-Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {ebooks.map((book, i) => (
              <div key={i} className="group bg-white dark:bg-[#112240] p-4 rounded-[2rem] shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                 {/* Cover Art */}
                 <div className={`aspect-[3/4] rounded-2xl ${book.color} mb-4 relative overflow-hidden flex items-center justify-center shadow-inner`}>
                    <Icon icon="solar:tablet-bold" className="text-6xl text-white opacity-80 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-3 right-3 bg-black/20 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded-lg">
                       EPUB
                    </div>
                 </div>

                 <div className="px-2 pb-2">
                    <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-1 line-clamp-1">{book.title}</h3>
                    <div className="flex items-center justify-between mt-3">
                       <span className="text-xl font-bold text-brand-orange">{book.price}</span>
                       <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 text-brand-navy dark:text-white flex items-center justify-center hover:bg-brand-navy hover:text-white transition-colors">
                          <Icon icon="solar:cart-plus-bold" />
                       </button>
                    </div>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </main>
  );
}

