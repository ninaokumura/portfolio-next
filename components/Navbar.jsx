import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { HiMenu, HiX } from 'react-icons/hi'

const links = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Hire me',
    href: '/contact',
  },
]

export default function Navbar() {
  const router = useRouter()
  const currentPath = router.asPath

  const [isMenuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative flex flex-1 items-end justify-end">
      <ul
        className={clsx(
          'absolute bottom-0 flex items-center justify-center gap-4 text-sm sm:-bottom-0',
          {
            'hidden sm:flex': !isMenuOpen,
          }
        )}
      >
        {links.map((link) => (
          <li
            key={link.label}
            className="flex-1 whitespace-nowrap text-center sm:min-w-[125px]"
          >
            <Link href={link.href}>
              <a
                className={clsx(
                  'cursor-pointer text-sm opacity-90 transition-transform hover:scale-[102%] hover:font-bold sm:text-xl',
                  { 'font-bold': link.href === currentPath }
                )}
              >
                {link.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="absolute top-0 text-3xl sm:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </button>
    </div>
  )
}
