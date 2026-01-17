'use client'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import { CourseDetailType } from '@/app/types/coursedetail'
import CourseDetailSkeleton from '../../Skeleton/CourseDetail'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

const NamesList = () => {
  const t = useTranslations('home')
  const commonT = useTranslations('common')
  const navT = useTranslations('nav')

  const [courseDetail, setCourseDetail] = useState<CourseDetailType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch.')
        const data = await res.json()
        setCourseDetail(data.CourseDetailData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const [selectedButton, setSelectedButton] = useState<
    | 'printed-books'
    | 'ebooks'
    | 'cds'
    | 'teaching-tools'
    | 'all'
  >('printed-books')

  const filteredCourses = courseDetail.filter(
    (item) => item.category === selectedButton
  )

  const categories: { id: 'printed-books' | 'ebooks' | 'cds' | 'teaching-tools'; label: string; icon: string }[] = [
    { id: 'printed-books', label: navT('printedBooks'), icon: 'solar:book-2-line-duotone' },
    { id: 'ebooks', label: navT('ebooks'), icon: 'solar:tablet-line-duotone' },
    { id: 'cds', label: navT('educationalCDs'), icon: 'solar:disk-line-duotone' },
    { id: 'teaching-tools', label: navT('teachingTools'), icon: 'solar:pen-new-square-line-duotone' },
  ]

  return (
    <section id='courses-section' className='bg-white py-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='flex flex-col sm:flex-row justify-between sm:items-center gap-5 mb-10'>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-thom-dark'>
            {t('popularResources')}
          </h2>
          <Link
            href='/store'
            className='bg-transparent cursor-pointer hover:bg-primary text-primary font-bold hover:text-white py-3 px-8 border-2 border-primary rounded-full duration-300 text-center'>
            {commonT('viewAll')}
          </Link>
        </div>

        <div className='flex items-center gap-4 overflow-x-auto pb-4 mb-10 scrollbar-hide'>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedButton(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedButton === cat.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-cream text-thom-dark/60 hover:bg-primary/5 hover:text-primary'
              }`}>
              <Icon icon={cat.icon} className='text-2xl' />
              {cat.label}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <CourseDetailSkeleton key={i} />
            ))
          ) : filteredCourses.length > 0 ? (
            filteredCourses.map((name, index) => (
              <div key={index} className='bg-white rounded-3xl overflow-hidden shadow-mentor-shadow group flex flex-col hover:shadow-2xl transition-all duration-500 border border-thom-light'>
                <div className='relative overflow-hidden aspect-[4/3]'>
                  <Image
                    src={name.imageSrc}
                    alt={name.course}
                    fill
                    className='object-cover group-hover:scale-110 transition duration-700 ease-in-out'
                  />
                  <div className='absolute top-4 end-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-bold text-primary shadow-sm'>
                    {name.price} ر.س
                  </div>
                </div>
                <div className='p-6 flex flex-col gap-4 flex-1'>
                  <div className='flex flex-col gap-2'>
                    <h3 className='text-xl font-bold text-thom-dark group-hover:text-primary transition-colors line-clamp-1'>
                      {name.course}
                    </h3>
                    <p className='text-thom-dark/60 text-sm line-clamp-2 min-h-[40px]'>
                      {name.profession}
                    </p>
                  </div>
                  <div className='mt-auto pt-4 border-t border-thom-light flex items-center justify-between'>
                    <div className='flex items-center gap-1 text-orange font-bold text-sm'>
                      <Icon icon='solar:star-bold' className='text-lg' />
                      <span>4.9</span>
                    </div>
                    <Link
                      href={`/store/${name.category}`}
                      className='text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all'>
                      {commonT('readMore')}
                      <Icon icon='solar:arrow-left-linear' className='rtl:rotate-0 rotate-180' />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='col-span-full py-20 text-center bg-cream rounded-3xl'>
              <p className='text-thom-dark/40 text-lg font-medium'>No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default NamesList
