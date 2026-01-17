'use client'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Banner = () => {
  const t = useTranslations('home')
  const commonT = useTranslations('common')

  return (
    <section id='Home' className='bg-banner-image pt-32 pb-20 overflow-hidden'>
      <div className='relative px-6 lg:px-8'>
        <div className='container'>
          <div className='flex flex-col gap-6 text-center animate-fade-in'>
            <h1 className='leading-tight font-extrabold tracking-tight max-w-5xl mx-auto text-thom-dark drop-shadow-sm'>
              {t('heroTitle')}
            </h1>
            <p className='text-lg md:text-xl leading-8 text-thom-dark/80 max-w-3xl mx-auto'>
              {t('heroDescription')}
            </p>
            <div className='flex flex-wrap items-center justify-center gap-4 mt-4'>
              <Link
                href='/store'
                className='bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-secondary transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 block'>
                {commonT('viewAll')}
              </Link>
              <Link
                href='/contact'
                className='bg-white text-primary border-2 border-primary px-10 py-4 rounded-full font-bold hover:bg-primary/5 transition-all block'>
                {commonT('learnMore')}
              </Link>
            </div>
          </div>

          <div className='relative mt-16 max-w-5xl mx-auto'>
             <div className='absolute -top-10 -start-10 w-24 h-24 bg-orange/20 rounded-full blur-3xl' />
             <div className='absolute -bottom-10 -end-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl' />
             
             {/* Rating and Social Proof */}
             <div className='backdrop-blur-md bg-white/40 border border-white/40 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto relative z-10'>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-8'>
                <div className='flex -space-x-3 rtl:space-x-reverse overflow-hidden'>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Image
                      key={i}
                      className='inline-block h-14 w-14 rounded-full ring-4 ring-white object-cover bg-cream'
                      src={`https://i.pravatar.cc/150?u=casp${i}`}
                      alt={`user-${i}`}
                      width={56}
                      height={56}
                    />
                  ))}
                </div>
                <div className='text-center sm:text-start'>
                  <div className='flex items-center justify-center sm:justify-start gap-1'>
                    <span className='text-3xl font-bold text-thom-dark'>4.9</span>
                    <div className='flex'>
                       {[1, 2, 3, 4, 5].map((s) => (
                          <Image
                            key={s}
                            src={'/images/banner/Stars.svg'}
                            alt=''
                            aria-hidden='true'
                            width={20}
                            height={20}
                            className='w-5 h-5'
                          />
                       ))}
                    </div>
                  </div>
                  <p className='text-thom-dark/70 font-medium'>
                    {t('trustedBy')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
