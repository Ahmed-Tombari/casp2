'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Icon } from '@iconify/react/dist/iconify.js'

const About = () => {
  const t = useTranslations('home')

  const points = [
    { key: 'aboutPoint1', icon: 'solar:verified-check-bold-duotone' },
    { key: 'aboutPoint2', icon: 'solar:laptop-minimalistic-bold-duotone' },
    { key: 'aboutPoint3', icon: 'solar:user-speak-bold-duotone' },
  ]

  return (
    <section id='about-section' className='py-20 bg-white overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          {/* Image Column */}
          <div className='flex-1 relative animate-fade-in-right'>
            <div className='relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/20 bg-cream'>
              <Image
                src='/images/home/about-casp.png'
                alt='About CASP Education'
                width={600}
                height={600}
                className='w-full h-auto object-cover hover:scale-105 transition duration-700'
              />
            </div>
            {/* Decorative blobs */}
            <div className='absolute -top-10 -start-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl' />
            <div className='absolute -bottom-10 -end-10 w-40 h-40 bg-orange/10 rounded-full blur-3xl' />
          </div>

          {/* Content Column */}
          <div className='flex-1 animate-fade-in-left'>
            <div className='max-w-xl'>
              <p className='text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4'>
                {t('aboutTitle')}
              </p>
              <h2 className='text-3xl md:text-5xl font-extrabold text-thom-dark mb-8 leading-tight'>
                {t('aboutTitle')}
              </h2>
              <p className='text-lg text-thom-dark/70 leading-relaxed mb-10'>
                {t('aboutDescription')}
              </p>

              <div className='space-y-6'>
                {points.map((point, index) => (
                  <div key={index} className='flex gap-4 items-start group'>
                    <div className='w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300'>
                      <Icon icon={point.icon} className='text-2xl text-primary group-hover:text-white transition-colors duration-300' />
                    </div>
                    <div>
                      <p className='text-lg font-bold text-thom-dark mb-1 transition-colors duration-300'>
                        {t(point.key)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
