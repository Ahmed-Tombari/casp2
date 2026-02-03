'use client'

import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { motion, Variants } from 'framer-motion'
import { Icon } from '@iconify/react'
import PremiumButton from '@/app/components/UI/PremiumButton'
import GlassCard from '@/app/components/UI/GlassCard'

const Banner = () => {
  const t = useTranslations('home')

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }



  const floatAnimation: Variants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const floatAnimationReverse: Variants = {
    animate: {
      y: [10, -10, 10],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  }

  return (
    <section
      id="Home"
      aria-label="Hero section"
      className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 bg-transparent"
    >
      {/* ================= BACKGROUND ELEMENTS ================= */}
      <div className="absolute inset-0 -z-20 pointer-events-none select-none overflow-hidden">
        {/* Main Background Image */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
           <Image
            src="/images/logo/bgn.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>

        {/* Gradient Blobs */}
        <div className="absolute top-0 start-0 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[800px] bg-brand-sky/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-0 end-0 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-navy/5 rounded-full blur-[80px]" />
      </div>

      {/* ================= CONTENT ================= */}
      {/* ================= CONTENT ================= */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center gap-12 lg:gap-16"
        >
          {/* ================= TEXT COLUMN ================= */}
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-brand-navy/10 backdrop-blur-md shadow-sm"
            >
              <div className="flex items-center justify-center size-6 rounded-full bg-brand-gold/20 text-brand-gold">
                <Icon icon="solar:star-bold" className="text-sm" />
              </div>
              <span className="text-brand-navy dark:text-white font-bold text-sm tracking-wide">
                {t('littleTitle')}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div 
               className="space-y-6"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] text-brand-navy dark:text-white">
                <span className="block mb-2">{t('heroTitle2')}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-gold to-brand-orange">
                  {t('heroTitle')}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-brand-navy/70 dark:text-white/70 leading-relaxed font-medium max-w-2xl mx-auto">
                {t('heroDescription')}
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
            >
              <Link href="/store" className="w-full sm:w-auto">
                <PremiumButton variant="primary" size="lg" glow className="w-full sm:w-auto justify-center px-10">
                  <Icon icon="solar:cart-large-2-bold" className="text-xl" />
                  {t('premiumButton1')}
                </PremiumButton>
              </Link>

              <Link href="/teacher-guide" className="w-full sm:w-auto">
                <PremiumButton variant="secondary" size="lg" className="w-full sm:w-auto justify-center px-10">
                  <Icon icon="solar:book-bookmark-bold" className="text-xl" />
                  {t('premiumButton2')}
                </PremiumButton>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-2 flex items-center justify-center gap-6 text-brand-navy/60 dark:text-white/60 text-sm font-semibold"
            >
               <div className="flex items-center gap-2">
                 <Icon icon="solar:verified-check-bold" className="text-brand-sky" />
                 <span>Verified Content</span>
               </div>
               <div className="flex items-center gap-2">
                 <Icon icon="solar:shield-check-bold" className="text-brand-sky" />
                 <span>Safe for Kids</span>
               </div>
            </motion.div>
          </div>

          {/* ================= IMAGE COLUMN ================= */}
          <div className="relative w-full max-w-3xl mx-auto perspective-[1000px]">
             <motion.div
               initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
               animate={{ opacity: 1, scale: 1, rotateX: 0 }}
               transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
               className="relative z-10"
             >
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Banner