'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Companies = () => {
  const t = useTranslations('home')

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 700,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 2 },
      },
    ],
  }

  const [companies, setCompianes] = useState<{ imgSrc: string }[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setCompianes(data.Companiesdata)
      } catch (error) {
        console.error('Error fetching companies:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <section className='py-12 bg-white border-y border-thom-light/30'>
      <div className='container mx-auto max-w-7xl px-4'>
        <p className='text-sm font-bold text-thom-dark/40 text-center mb-10 uppercase tracking-widest'>
          {t('trustedByFull')}
        </p>
        <div className='opacity-40 hover:opacity-100 transition-opacity duration-500'>
          <Slider {...settings}>
            {companies.map((item, i) => (
              <div key={i} className='px-8'>
                <div className='relative h-12 grayscale hover:grayscale-0 transition-all duration-500'>
                  <Image
                    src={item.imgSrc}
                    alt='Partner Logo'
                    fill
                    className='object-contain'
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Companies
