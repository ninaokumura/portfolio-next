import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { HiMenu, HiX } from 'react-icons/hi'
import DarkModeToggle from './DarkModeToggle'

interface NavbarProps {
  isSticky?: boolean
}

const links = [
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Say Hello',
    href: '/contact',
  },
]

const Navbar: React.FC<NavbarProps> = ({ isSticky }) => {
  const router = useRouter()
  const currentPath = router.asPath

  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <div className="flex flex-1 items-end justify-end">
      <ul
        className={clsx(
          'absolute inset-0 flex h-screen w-full flex-1 flex-col items-center justify-center gap-8 bg-white/80 backdrop-blur-sm transition-all sm:relative sm:h-min sm:flex-row sm:justify-end sm:bg-transparent',
          {
            'hidden sm:flex': !isMenuOpen,
            'border opacity-100 dark:bg-slate-600/90': isMenuOpen,
            'sm:text-beige': isSticky,
          }
        )}
      >
        {links.map((link) => (
          <li
            key={link.label}
            className="whitespace-nowrap sm:flex sm:justify-end"
          >
            <Link href={link.href}>
              <a
                className={clsx(
                  'cursor-pointer text-xl opacity-90 transition-transform hover:scale-[102%] hover:font-bold',
                  { 'font-bold': link.href === currentPath }
                )}
              >
                {link.label}
              </a>
            </Link>
          </li>
        ))}
        <div className="text-xl">
          <DarkModeToggle />
        </div>
      </ul>

      <button
        className={clsx('absolute top-8 text-3xl sm:hidden', {
          'text-beige': isSticky,
          'text-terracota dark:text-orange-300': isMenuOpen,
        })}
        onClick={toggleMenu}
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </button>
    </div>
  )
}

export default Navbar
