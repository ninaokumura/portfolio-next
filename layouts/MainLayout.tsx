import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { FaHeart } from 'react-icons/fa'
import avatarImg from '../public/images/me-square.jpg'

import Navbar from '../components/Navbar'
import Logo from '../components/Logo'

interface MainLayoutProps {
  title: string
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80)
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex min-h-screen w-full flex-col bg-beige dark:bg-slate-700 dark:text-white">
        <header
          className={clsx(
            'visible sticky top-0 z-10 text-terracota transition-all dark:text-orange-300',
            {
              'bg-terracota text-beige shadow-sm shadow-terracota dark:bg-teal dark:shadow-teal':
                sticky,
            }
          )}
        >
          <div className="m-auto flex w-full max-w-6xl justify-between p-8 align-middle">
            <div className="flex items-center gap-4">
              <Link href="/">
                <a className="flex items-end gap-4">
                  <Image
                    className="rounded-full"
                    layout="fixed"
                    placeholder="blur"
                    src={avatarImg}
                    alt="avatar"
                    height={80}
                    width={80}
                  />
                  <Logo className={clsx({ 'text-beige': sticky })} />
                </a>
              </Link>
            </div>
            <Navbar isSticky={sticky} />
          </div>
        </header>
        <main className="m-auto grid w-full max-w-6xl flex-1 place-items-center overflow-x-hidden p-4  sm:p-8">
          {children}
        </main>
        <footer className="m-auto grid h-20 w-full max-w-6xl place-items-center">
          <div className="flex items-center gap-1 ">
            Made with <FaHeart className="text-terracota" /> by Nina
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MainLayout
