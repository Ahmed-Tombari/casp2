'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { TestimonialType } from '@/app/types/testimonial'
import TestimonialSkeleton from '../../Skeleton/Testimonial'
import { useTranslations } from 'next-intl'
import { Icon } from '@iconify/react/dist/iconify.js'

const Testimonial = () => {
  const t = useTranslations('home')

  const [testimonial, setTestimonial] = useState<TestimonialType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setTestimonial(data.TestimonialData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <section id='testimonial-section' className='py-24 bg-white'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center mb-16'>
          <p className='text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4'>
            {t('feedback')}
          </p>
          <h2 className='text-3xl md:text-5xl font-bold text-thom-dark mb-6'>
            {t('testimonialsTitle')}
          </h2>
        </div>

        <Slider {...settings} className='testimonial-slider'>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <TestimonialSkeleton key={i} />
              ))
            : testimonial.map((items, i) => (
                <div key={i} className='px-4 pb-12'>
                  <div className='bg-cream p-10 rounded-[3rem] relative h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-500 border border-orange/10'>
                    <div className='absolute -top-6 start-10'>
                      <div className='bg-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg'>
                        <Icon icon='ri:double-quotes-l' className='text-white text-2xl' />
                      </div>
                    </div>
                    
                    <p className='text-lg md:text-xl font-medium leading-relaxed text-thom-dark/80 italic mb-8'>
                      &quot;{items.detail}&quot;
                    </p>

                    <div className='mt-auto flex items-center gap-4'>
                      <div className='relative w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-white shadow-md'>
                        <Image
                          src={items.imgSrc}
                          alt={items.name}
                          fill
                          className='object-cover'
                        />
                      </div>
                      <div>
                        <h4 className='text-lg font-bold text-thom-dark'>{items.name}</h4>
                        <p className='text-primary text-sm font-semibold'>{items.profession}</p>
                      </div>
                      <div className='ms-auto hidden sm:flex'>
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Icon key={s} icon='solar:star-bold' className='text-orange text-lg' />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonial
