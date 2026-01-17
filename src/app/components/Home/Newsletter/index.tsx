'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Newsletter = () => {
  const t = useTranslations('footer')

  return (
    <section id='join-section' className='relative z-20 -mb-32 px-4'>
      <div className='mx-auto max-w-7xl bg-primary rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-primary/30'>
        {/* Decorative elements */}
        <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl' />
        <div className='absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl' />

        <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div>
            <h3 className='text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight'>
              {t('newsletterTitle')}
            </h3>
            <p className='text-white/80 text-lg md:text-xl font-medium mb-10'>
              {t('description')}
            </p>
            
            <form className='flex flex-col sm:flex-row gap-4' onSubmit={(e) => e.preventDefault()}>
              <input
                type='email'
                className='flex-1 py-4 px-6 bg-white/10 border border-white/20 text-white placeholder:text-white/50 transition-all duration-300 focus:bg-white focus:text-thom-dark rounded-2xl outline-none text-lg'
                placeholder={t('newsletterPlaceholder')}
                required
              />
              <button className='bg-orange hover:bg-white hover:text-orange text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg active:scale-95 text-lg whitespace-nowrap shadow-orange/20'>
                {t('subscribe')}
              </button>
            </form>
          </div>

          <div className='hidden lg:flex justify-end'>
            <div className='relative w-full max-w-sm aspect-square'>
               <Image
                src={'/images/newsletter/Free.svg'}
                alt='Educational Resources'
                fill
                className='object-contain animate-float'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
