'use client'

import { Link } from '@/i18n/routing'
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 120
      }
    }
  }

  return (
    <section
      id="Home"
      aria-label="Hero section"
      className="relative overflow-hidden pt-40 pb-20 bg-transparent"
    >
      {/* ================= FIXED BACKGROUND (NO ZOOM, NO SHIFT) ================= */}
      <div
        className="absolute inset-0 -z-10"
        dir="ltr"
        aria-hidden="true"
      >
        <Image
          src="/images/logo/realbg2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
            opacity-95
            transform-none
            scale-100
          "
          style={{
            objectPosition: 'center top'
          }}
        />
      </div>

      {/* ================= CONTENT 1 ================= */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center"
        >
          {/* ================= TEXT COLUMN ================= */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-center lg:text-start">
            <motion.div
              variants={itemVariants}
              className="mx-auto lg:mx-0 flex items-center gap-2 w-fit rounded-full border border-brand-gold/30 bg-brand-sky/10 backdrop-blur-md px-4 py-2"
            >
              <Icon icon="solar:star-bold" className="text-brand-gold text-lg" />
              <span className="text-brand-gold text-sm font-semibold">
                {t('littleTitle')}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight text-brand-navy mb-2"
            >
              <span className="block mb-4 opacity-90">
                {t('heroTitle2')}
              </span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-navy via-brand-navy-light to-brand-sky">
                {t('heroTitle')}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-2xl text-brand-navy/80 max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              {t('heroDescription')}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link href="/store">
                <PremiumButton variant="primary" size="lg" glow>
                  {t('premiumButton1')}
                </PremiumButton>
              </Link>

              <Link href="/teacher-guide">
                <PremiumButton variant="secondary" size="lg">
                  {t('premiumButton2')}
                </PremiumButton>
              </Link>
            </motion.div>
          </div>

          {/* ================= IMAGE COLUMN ================= */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <Image
              src="/images/logo/logo.png"
              alt="CASP Education"
              width={600}
              height={600}
              priority
              className="relative z-10 drop-shadow-2xl"
            />

            <GlassCard
              className="absolute bottom-10 -end-6 hidden md:flex items-center gap-3 px-4 py-3 min-w-[230px] rounded-full"
              hoverEffect
            >
              <div className="flex size-12 items-center justify-center rounded-full bg-linear-to-br from-brand-gold to-amber-600 text-white shadow-md">
                <Icon icon="solar:cup-star-bold" width="22" height="22" />
              </div>

              <div className="flex flex-col text-end leading-tight">
                <span className="text-[11px] font-semibold text-white/70">
                  أكثر من
                </span>
                <span className="text-lg font-bold text-white">
                  10,000 طالب
                </span>
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Banner
