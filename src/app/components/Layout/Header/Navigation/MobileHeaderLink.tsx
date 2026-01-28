'use client'
import { useState } from 'react'
import { Link } from '@/i18n/routing'
import { HeaderItem } from '../../../../types/menu'
import { usePathname } from '@/i18n/routing'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const path = usePathname()

  const handleToggle = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault()
      setSubmenuOpen(!submenuOpen)
    }
  }

  return (
    <div className='relative w-full'>
      <Link
        href={item.href}
        onClick={handleToggle}
        className={`flex items-center justify-between w-full py-3 px-4 rounded-xl text-lg font-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange ${
          path === item.href
            ? 'text-brand-orange bg-brand-orange/10'
            : 'text-brand-navy dark:text-white hover:bg-brand-sky/10 dark:hover:bg-white/10'
        }`}
        aria-expanded={item.submenu ? submenuOpen : undefined}
        aria-haspopup={item.submenu ? 'true' : undefined}
        aria-current={path === item.href ? 'page' : undefined}
      >
        <span>{item.label}</span>
        {item.submenu && (
          <Icon
            icon="solar:alt-arrow-down-linear"
            className={`text-xl transition-transform duration-200 ${submenuOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        )}
      </Link>
      <AnimatePresence>
        {submenuOpen && item.submenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='overflow-hidden'
          >
            <div className='ps-4 pt-2 pb-2 space-y-1'>
              {item.submenu.map((subItem, index) => (
                <Link
                  key={index}
                  href={subItem.href}
                  className={`block py-2.5 px-4 rounded-lg text-base font-medium transition-colors ${
                    path === subItem.href
                      ? 'text-brand-orange bg-brand-orange/10 font-semibold'
                      : 'text-brand-navy/70 dark:text-white/70 hover:bg-brand-sky/10 dark:hover:bg-white/10 hover:text-brand-navy dark:hover:text-white'
                  }`}
                  aria-current={path === subItem.href ? 'page' : undefined}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileHeaderLink
