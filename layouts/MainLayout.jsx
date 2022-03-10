import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { FaHeart } from 'react-icons/fa'

import Navbar from '../components/Navbar'
import Logo from '../components/Logo'

export default function MainLayout(props) {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setSticky(window.scrollY >= 80)
    })
  }, [])

  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className="flex min-h-screen w-full flex-col bg-beige">
        <header
          className={clsx(
            'visible sticky top-0 z-10 text-terracota transition-all',
            {
              'bg-terracota text-beige shadow-sm shadow-terracota': sticky,
            }
          )}
        >
          <div className="m-auto flex w-full max-w-6xl p-8">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
            <Navbar />
          </div>
        </header>
        <main className="m-auto grid w-full max-w-6xl flex-1 place-items-center overflow-x-hidden p-4 sm:p-8">
          {props.children}
        </main>
        <footer className="m-auto grid h-20 w-full max-w-6xl place-items-center">
          <div className="flex items-center gap-1 ">
            Made with <FaHeart className="text-terracota" /> by Nina
          </div>
        </footer>
      </div>
    </>
  )
}
