'use client'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('footer')
  const navT = useTranslations('nav')

  return (
    <footer className='bg-thom-dark text-white overflow-hidden' id='footer'>
      <div className='container mx-auto max-w-7xl px-4 pt-48 pb-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Brand Column */}
          <div className='flex flex-col gap-6'>
            <Link href="/" className='inline-block w-fit'>
              <Image
                src='/images/logo/logo-casp.png'
                alt='CASP Education Logo'
                width={80}
                height={80}
                className='brightness-0 invert h-20 w-auto'
              />
            </Link>
            <p className='text-white/70 text-lg leading-relaxed'>
              {t('description')}
            </p>
            <div className='flex gap-4'>
              {[
                { icon: 'ri:facebook-fill', href: '#' },
                { icon: 'ri:twitter-x-fill', href: '#' },
                { icon: 'ri:instagram-line', href: '#' },
                { icon: 'ri:youtube-fill', href: '#' },
              ].map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  className='w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-white/10'>
                  <Icon icon={social.icon} className='text-xl' />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-xl font-bold mb-8 relative inline-block after:content-[""] after:absolute after:bottom-[-8px] after:start-0 after:w-1/2 after:h-1 after:bg-primary after:rounded-full'>
              {t('links')}
            </h4>
            <ul className='space-y-4'>
              {[
                { label: navT('home'), href: '/' },
                { label: navT('store'), href: '/store' },
                { label: navT('teacherGuide'), href: '/teacher-guide' },
                { label: navT('placementTest'), href: '/placement-test' },
                { label: navT('contact'), href: '/contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className='text-white/60 hover:text-white hover:ps-2 transition-all duration-300 text-base flex items-center gap-2'>
                    <Icon icon='solar:alt-arrow-left-linear' className='rtl:rotate-0 rotate-180 text-primary opacity-0 group-hover:opacity-100' />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / More */}
          <div>
            <h4 className='text-xl font-bold mb-8 relative inline-block after:content-[""] after:absolute after:bottom-[-8px] after:start-0 after:w-1/2 after:h-1 after:bg-primary after:rounded-full'>
              {t('about')}
            </h4>
            <ul className='space-y-4'>
              {[
                { label: t('privacy'), href: '/privacy' },
                { label: t('terms'), href: '/terms' },
                { label: navT('educationalPlatform'), href: '#' },
                { label: navT('educationalChannel'), href: '#' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className='text-white/60 hover:text-white hover:ps-2 transition-all duration-300 text-base'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-xl font-bold mb-8 relative inline-block after:content-[""] after:absolute after:bottom-[-8px] after:start-0 after:w-1/2 after:h-1 after:bg-primary after:rounded-full'>
              {t('contact')}
            </h4>
            <ul className='space-y-6'>
              <li className='flex items-start gap-4'>
                <div className='w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10'>
                  <Icon icon='solar:map-point-wave-linear' className='text-2xl text-primary' />
                </div>
                <p className='text-white/60 text-sm leading-relaxed'>
                  الرياض، المملكة العربية السعودية<br />
                  شارع المنهل، حي الياسمين
                </p>
              </li>
              <li className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10'>
                  <Icon icon='solar:phone-calling-linear' className='text-2xl text-primary' />
                </div>
                <div>
                  <p className='text-white/40 text-xs mb-1 uppercase tracking-wider'>Call Us</p>
                  <p className='text-white font-bold tracking-wider'>+966 11 000 0000</p>
                </div>
              </li>
              <li className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10'>
                  <Icon icon='solar:letter-linear' className='text-2xl text-primary' />
                </div>
                <div>
                  <p className='text-white/40 text-xs mb-1 uppercase tracking-wider'>Email Us</p>
                  <p className='text-white font-bold'>info@caspeducation.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-white/40 text-sm'>
            © {new Date().getFullYear()} CASP Education. {t('rights')}
          </p>
          <div className='flex items-center gap-8'>
             <Image src="/images/footer/payment.webp" alt="Payment Methods" width={250} height={30} className='opacity-50 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
