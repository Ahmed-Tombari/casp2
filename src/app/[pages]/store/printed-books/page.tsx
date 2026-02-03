import { fetchData } from '@/lib/api';
import Bookshelf from '@/app/components/Bookshelf/Bookshelf';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { Icon } from '@iconify/react';

// 1. Define the Book Interface (Adjust fields based on your actual API response)
interface BookItem {
  id: string | number;
  title: string;
  category: string;
  image?: string;
  price?: string;
  // Add other fields your API returns
}

export async function generateMetadata({ params }: { params: Promise<{ pages: string }> }): Promise<Metadata> {
  const { pages: page } = await params;
  const t = await getTranslations({ locale: page, namespace: 'store.printedBooks' });

  // Data Fetching
  const data = await fetchData();

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function PrintedBooksPage({ params }: { params: Promise<{ pages: string }> }) {
  const { pages: page } = await params;
  const t = await getTranslations({ locale: page, namespace: 'store.printedBooks' });

  // Data Fetching
  const data = await fetchData();

  // 2. Use the Interface in the filter
  const books: BookItem[] = data?.CourseDetailData?.filter(
    (item: BookItem) => item.category === 'printed-books'
  ) || [];

  return (
    <main className="min-h-screen bg-[#FDFCF8] dark:bg-[#09121E] pt-32 pb-20 transition-colors duration-300">
      
      {/* Hero Header */}
      <div className="container mx-auto max-w-7xl px-4 mb-16">
         <div className="bg-brand-navy dark:bg-[#112240] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-soft-lg">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
            
            <div className="relative z-10">
               <div className="w-20 h-20 bg-white/10 rounded-2xl mx-auto flex items-center justify-center mb-6 backdrop-blur-md">
                  <Icon icon="solar:book-bookmark-bold" className="text-4xl text-brand-gold" />
               </div>
               <h1 className="text-4xl  text-white/80 md:text-6xl font-extrabold mb-4">{t('title')}</h1>
               <p className="text-xl text-white/80 max-w-2xl mx-auto">{t('description')}</p>
            </div>
         </div>
      </div>

      {/* The Bookshelf Component Wrapper */}
      <div className="container mx-auto max-w-7xl px-4">
         {books.length > 0 ? (
            <Bookshelf books={books} />
         ) : (
            <div className="text-center py-20">
               <Icon icon="solar:box-minimalistic-bold-duotone" className="text-6xl text-gray-300 mx-auto mb-4" />
               <p className="text-gray-500">{t('noBooks')}</p>
            </div>
         )}
      </div>

    </main>
  );
}
