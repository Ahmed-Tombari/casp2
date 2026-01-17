import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { CourseType } from '@/app/types/course'
import { Hourtype } from '@/app/types/hour'
import { CourseDetailType } from '@/app/types/coursedetail'
import { MentorType } from '@/app/types/mentor'
import { TestimonialType } from '@/app/types/testimonial'
import { FooterLinkType } from '@/app/types/footerlinks'

const HeaderData: HeaderItem[] = [
  { label: 'Home', href: '/#Home' },
  { label: 'Courses', href: '/#Courses' },
  { label: 'Mentors', href: '/#mentors-section' },
  { label: 'Testimonial', href: '/#testimonial-section' },
  { label: 'Join', href: '/#join-section' },
  { label: 'Contact Us', href: '/#contact' },
  { label: 'Docs', href: '/documentation' },
]

const CourseData: CourseType[] = [
  { name: 'Printed Books' },
  { name: 'E-Books' },
  { name: 'CDs' },
  { name: 'Teaching Tools' },
]

const HourData: Hourtype[] = [
  { name: 'Self-paced' },
  { name: 'Instructor-led' },
  { name: 'Interactive' },
]

const Companiesdata: { imgSrc: string }[] = [
  { imgSrc: '/images/slickCompany/airbnb.svg' },
  { imgSrc: '/images/slickCompany/hubspot.svg' },
  { imgSrc: '/images/slickCompany/microsoft.svg' },
  { imgSrc: '/images/slickCompany/google.svg' },
]

const CourseDetailData: CourseDetailType[] = [
  {
    course: 'Al-Wafi Series',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Comprehensive Arabic Grammar & Literature',
    price: '45',
    category: 'printed-books',
  },
  {
    course: 'Al-Mufid Series',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Essential Arabic for Beginners',
    price: '35',
    category: 'printed-books',
  },
  {
    course: 'Garden of Arabic (E-Book)',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Interactive Digital Learning',
    price: '15',
    category: 'ebooks',
  },
  {
    course: 'Educational CDs Pack',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'Multimedia Learning Resources',
    price: '25',
    category: 'cds',
  },
  {
    course: 'Arabic Calligraphy Tools',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Professional Handwriting Kits',
    price: '20',
    category: 'teaching-tools',
  },
]

const MentorData: MentorType[] = [
  {
    name: 'Author & Educator',
    href: '#',
    imageSrc: '/images/mentor/boy1.svg',
    imageAlt: 'Expert 1',
    color: 'Dr. Ahmad Ibrahim',
  },
  {
    name: 'Arabic Language Expert',
    href: '#',
    imageSrc: '/images/mentor/girl1.svg',
    imageAlt: 'Expert 2',
    color: 'Prof. Fatima Zehra',
  },
  {
    name: 'Curriculum Designer',
    href: '#',
    imageSrc: '/images/mentor/boy2.svg',
    imageAlt: 'Expert 3',
    color: 'Mr. Khalid Mansour',
  },
]

const TestimonialData: TestimonialType[] = [
  {
    profession: 'Parent',
    name: 'Sara Khan',
    imgSrc: '/images/testimonial/user-1.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "The Al-Wafi series has transformed how my children learn Arabic. It's engaging and very well structured!",
  },
  {
    profession: 'Arabic Teacher',
    name: 'Mohammad Al-Farsi',
    imgSrc: '/images/testimonial/user-2.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "As a teacher, I find the teaching tools and CDs from CASP Education to be indispensable in my classroom.",
  },
  {
    profession: 'Educational Consultant',
    name: 'Laila Hassan',
    imgSrc: '/images/testimonial/user-3.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "Highly professional resources that follow modern pedagogical standards while preserving the beauty of the language.",
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Company',
    links: [
      { label: 'Home', href: '/#Home' },
      { label: 'Courses', href: '/#Courses' },
      { label: 'Mentors', href: '/#mentors-section' },
      { label: 'Testimonial', href: '/#testimonial-section' },
      { label: 'Join', href: '/#join-section' },
      { label: 'Contact Us', href: '/#contact' },
    ],
  },
  {
    section: 'Support',
    links: [
      { label: 'Help center', href: '/' },
      { label: 'Terms of service', href: '/' },
      { label: 'Legal', href: '/' },
      { label: 'Privacy Policy', href: '/' },
      { label: 'Status', href: '/' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    CourseData,
    HourData,
    Companiesdata,
    CourseDetailData,
    MentorData,
    TestimonialData,
    FooterLinkData,
  })
}
