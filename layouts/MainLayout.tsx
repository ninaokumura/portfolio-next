import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { FaHeart } from 'react-icons/fa'
import avatarImg from '../public/images/me-square.jpg'
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import Timeline from '../components/Timeline/Timeline'

import { timelineItems } from '../data/education-timeline.data'

import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaGithub,
  FaGraduationCap,
  FaFreeCodeCamp,
} from 'react-icons/fa'
import { SiJavascript, SiMongodb, SiTypescript } from 'react-icons/si'
import { GrCertificate, GrCodeSandbox, GrStar } from 'react-icons/gr'

const icons = {
  react: FaReact,
  typescript: SiTypescript,
  certificate: GrCertificate,
  mongodb: SiMongodb,
  node: FaNodeJs,
  github: FaGithub,
  graduation: FaGraduationCap,
  html: FaHtml5,
  javascript: SiJavascript,
  freecodecamp: FaFreeCodeCamp,
  sandbox: GrCodeSandbox,
} as const

interface MainLayoutProps {
  title: string
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  const [sticky, setSticky] = useState(false)
  const [shouldOpenCourses, setShouldOpenCourses] = useState<boolean>(false)
  const [shouldOpenExperiences, setShouldOpenExperiences] =
    useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80)
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const areTimelinesOpen = shouldOpenCourses || shouldOpenExperiences

  const handleToggleCourses = () => {
    setShouldOpenCourses((prev) => !prev)
    setShouldOpenExperiences(false) // Ensure experiences timeline is closed
  }

  const handleToggleExperiences = () => {
    setShouldOpenExperiences((prev) => !prev)
    setShouldOpenCourses(false) // Ensure courses timeline is closed
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex min-h-screen w-full flex-col bg-almond dark:bg-slate-700 dark:text-white">
        <header
          className={clsx(
            'visible sticky top-0 z-10 backdrop-blur-md transition-all',
            {
              'shadow-md': sticky,
            }
          )}
        >
          <div className="m-auto flex w-full justify-between p-8 align-middle">
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
                  <Logo />
                </a>
              </Link>
            </div>
            <Navbar
              isSticky={sticky}
              onHandleEducationTimeline={handleToggleCourses}
              onHanldleWorkTimeline={handleToggleExperiences}
            />
          </div>
        </header>
        <main className="m-auto grid w-full max-w-6xl flex-1 place-items-center overflow-x-hidden p-4 sm:p-8">
          {!areTimelinesOpen && <div className="">{children}</div>}

          {shouldOpenCourses && (
            <div id="timeline" className="w-full">
              <Timeline timelineItems={timelineItems} icons={icons} />
            </div>
          )}

          {shouldOpenExperiences && (
            <div id="timeline" className="w-full">
              <Timeline timelineItems={timelineItems} icons={icons} />
            </div>
          )}
        </main>
        <footer className="m-auto grid h-20 w-full max-w-6xl place-items-center text-[#72757e]">
          <div className="flex items-center gap-1">
            Made with <FaHeart /> by Nina
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MainLayout
