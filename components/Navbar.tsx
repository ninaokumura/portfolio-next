import React from 'react'
import Link from 'next/link'

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
  return (
    <div className="flex flex-1 items-center justify-end">
      <ul className="flex items-center gap-4">
        {links.map((link) => (
          <li
            key={link.label}
            className="flex min-w-[125px] flex-1 justify-center whitespace-nowrap py-2"
          >
            <Link href={link.href}>
              <span className="cursor-pointer text-xl text-terracota opacity-90 transition-transform hover:scale-[102%] hover:font-bold">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
