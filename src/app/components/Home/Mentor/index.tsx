'use client'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useEffect, useState } from 'react'
import { MentorType } from '@/app/types/mentor'
import MentorSkeleton from '../../Skeleton/Mentor'
import { useTranslations } from 'next-intl'

const Mentor = () => {
  const t = useTranslations('home')
  const commonT = useTranslations('common')

  const [mentor, setMentor] = useState<MentorType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setMentor(data.MentorData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='mentors-section' className='py-20 bg-thom-light/50'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='flex flex-col sm:flex-row gap-5 justify-between sm:items-center mb-16'>
          <div className='max-w-2xl'>
            <h2 className='text-3xl md:text-5xl font-bold tracking-tight text-thom-dark mb-4'>
              {t('expertsTitle')}
            </h2>
          </div>
          <Link
            href='/contact'
            className='bg-primary hover:bg-secondary text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 text-center'>
            {commonT('learnMore')}
          </Link>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <MentorSkeleton key={i} />
              ))
            : mentor.map((item, index) => (
                <div key={index} className='group relative flex flex-col items-center animate-fade-in'>
                  <div className='relative w-full aspect-square overflow-hidden rounded-[40px] bg-cream group-hover:shadow-2xl transition-all duration-500'>
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className='object-cover object-top group-hover:scale-105 transition duration-500'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                  </div>
                  
                  <div className='relative -mt-12 bg-white px-8 py-6 rounded-3xl shadow-mentor-shadow w-[85%] text-center border border-thom-light group-hover:-translate-y-2 transition-transform duration-500'>
                    <h3 className='text-2xl font-bold text-thom-dark mb-1'>
                      {/* Using item.color as Name and item.name as Profession based on API structure */}
                      {item.color}
                    </h3>
                    <p className='text-primary font-bold text-sm uppercase tracking-wider'>
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Mentor
