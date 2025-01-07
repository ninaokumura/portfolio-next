import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { FaHeart } from 'react-icons/fa'
import avatarImg from '../public/images/me-square.jpg'
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'

interface MainLayoutProps {
  title: string
  children: React.ReactNode
  setShouldOpenCourses?: (value: boolean | ((prev: boolean) => boolean)) => void
  setShouldOpenExperiences?: (
    value: boolean | ((prev: boolean) => boolean)
  ) => void
  setIsModalOpen?: (value: boolean | ((prev: boolean) => boolean)) => void
}

const MainLayout: React.FC<MainLayoutProps> = ({
  title,
  children,
  setShouldOpenCourses,
  setShouldOpenExperiences,
  setIsModalOpen,
}) => {
  const [sticky, setSticky] = useState(false)
  const [timelineType, setTimelineType] = useState<
    'courses' | 'experiences' | null
  >(null)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80)
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const openTimelineModal = (type: 'courses' | 'experiences') => {
    setTimelineType(type)
    setIsModalOpen(true)
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex min-h-screen w-full flex-col bg-almond">
        <header
          className={clsx(
            'visible sticky top-0 z-10 backdrop-blur-md transition-all',
            {
              'shadow-md': sticky,
            }
          )}
        >
          <div className="m-auto flex w-full justify-between bg-almond p-8 align-middle">
            <div className="flex items-center gap-4">
              <Link href="/">
                <a className="flex items-end gap-4">
                  <Image
                    className="rounded-full"
                    layout="fixed"
                    placeholder="blur"
                    src={avatarImg}
                    alt="avatar"
                    height={45}
                    width={45}
                  />
                  <div className="hidden sm:block">
                    <Logo />
                  </div>
                </a>
              </Link>
            </div>
            <Navbar
              isSticky={sticky}
              onHandleEducationTimeline={() => {
                openTimelineModal('courses')
                setShouldOpenCourses(true)
              }}
              onHanldleWorkTimeline={() => {
                openTimelineModal('experiences')
                setShouldOpenExperiences(true)
              }}
            />
          </div>
        </header>
        <main className="m-auto grid w-full flex-1 place-items-center overflow-x-hidden p-4 sm:max-w-6xl sm:p-8">
          {children}
        </main>
        <footer className="m-auto grid h-20 w-full max-w-6xl place-items-center text-[#fffffe]">
          <div className="flex items-center gap-1">
            <FaHeart />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MainLayout
