'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useTranslations } from 'next-intl'

type SeriesDetailProps = {
  title: string
  description: string
  image?: string
}

const SeriesDetail = ({ title, description }: SeriesDetailProps) => {
  const t = useTranslations('seriesDetail')

  const features = [
    { title: t('feature1Title'), desc: t('feature1Desc'), icon: 'solar:magic-stick-3-bold-duotone' },
    { title: t('feature2Title'), desc: t('feature2Desc'), icon: 'solar:music-note-bold-duotone' },
    { title: t('feature3Title'), desc: t('feature3Desc'), icon: 'solar:chart-2-bold-duotone' },
  ]

  return (
    <div className='min-h-screen'>
      {/* Hero */}
      <section className='bg-brand-navy pt-32 pb-20 relative overflow-hidden'>
        <div className='container mx-auto max-w-7xl px-4 relative z-10'>
          <div className='max-w-3xl'>
            <h1 className='text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight'>
              {title}
            </h1>
            <p className='text-xl text-white/80 leading-relaxed'>
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className='py-20 bg-brand-sky/5'>
        <div className='container mx-auto max-w-7xl px-4'>
          <h2 className='text-3xl font-extrabold text-brand-navy mb-12 text-center'>
            {t('featuresTitle')}
          </h2>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
            {features.map((f, i) => (
              <div key={i} className='bg-white p-10 rounded-[2.5rem] shadow-soft border border-brand-sky/20 group hover:-translate-y-2 transition-all duration-500'>
                <div className='w-16 h-16 rounded-2xl bg-brand-sky/10 flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-white transition-all'>
                  <Icon icon={f.icon} className='text-3xl text-brand-navy group-hover:text-white' />
                </div>
                <h3 className='text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-orange transition-colors'>
                  {f.title}
                </h3>
                <p className='text-brand-navy/60 leading-relaxed'>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className='flex flex-wrap justify-center gap-6'>
             <button className='px-10 py-5 rounded-2xl bg-brand-orange text-white font-bold text-lg hover:bg-brand-orange-dark transition-all shadow-xl shadow-brand-orange/20 flex items-center gap-3'>
              <Icon icon='solar:cart-large-4-bold-duotone' className='text-2xl' />
              {t('ctaBuy')}
            </button>
            <button className='px-10 py-5 rounded-2xl bg-white text-brand-navy border-2 border-brand-sky/20 font-bold text-lg hover:border-brand-orange hover:text-brand-orange transition-all flex items-center gap-3'>
              <Icon icon='solar:eye-bold-duotone' className='text-2xl' />
              {t('ctaPreview')}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SeriesDetail
