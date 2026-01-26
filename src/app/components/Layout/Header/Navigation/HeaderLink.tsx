'use client'
import { useState } from 'react'
import { Link } from '@/i18n/routing'
import { HeaderItem } from '../../../../types/menu'
import { usePathname } from '@/i18n/routing'
import { motion, AnimatePresence } from 'framer-motion'

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const path = usePathname()
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true)
    }
  }
  const handleMouseLeave = () => {
    setSubmenuOpen(false)
  }

  return (
    <div
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={() => item.submenu && setSubmenuOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setSubmenuOpen(false)
        }
      }}
    >
      <Link
        href={item.href}
        className={`text-sm flex items-center gap-1.5 font-semibold hover:text-brand-orange transition-colors whitespace-nowrap rounded-lg px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 ${
          path === item.href 
            ? 'text-brand-orange bg-brand-orange/10 dark:bg-white/10' 
            : 'text-brand-navy/80 dark:text-white/90 hover:text-brand-orange hover:bg-brand-sky/10 dark:hover:bg-white/5'
        }`}
        aria-current={path === item.href ? 'page' : undefined}
        aria-expanded={item.submenu ? submenuOpen : undefined}
        aria-haspopup={item.submenu ? 'true' : undefined}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            className={`transition-transform duration-200 ${submenuOpen ? 'rotate-180' : ''}`}
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m7 10l5 5l5-5'
            />
          </svg>
        )}
      </Link>
      <AnimatePresence>
        {submenuOpen && item.submenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute py-2 start-0 mt-2 w-64 bg-white dark:bg-brand-navy-dark shadow-soft-lg rounded-xl border border-brand-sky/20 dark:border-white/10 z-50 overflow-hidden`}
            role="menu"
          >
            {item.submenu.map((subItem, index) => (
              <Link
                key={index}
                href={subItem.href}
                role="menuitem"
                className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                  path === subItem.href
                    ? 'bg-brand-sky/10 text-brand-orange font-semibold'
                    : 'text-brand-navy/80 dark:text-white/80 hover:bg-brand-sky/5 hover:text-brand-orange'
                }`}
                aria-current={path === subItem.href ? 'page' : undefined}
              >
                {subItem.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HeaderLink
