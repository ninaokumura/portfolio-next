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
import Modal from '../components/Modal'

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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
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

  const closeModal = () => {
    setIsModalOpen(false)
    setTimelineType(null)
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex min-h-screen w-full flex-col bg-almond dark:text-white">
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
              onHandleEducationTimeline={() => openTimelineModal('courses')}
              onHanldleWorkTimeline={() => openTimelineModal('experiences')}
            />
          </div>
        </header>
        <main className="m-auto grid w-full max-w-6xl flex-1 place-items-center overflow-x-hidden p-4 sm:p-8">
          {children}
        </main>
        <footer className="m-auto grid h-20 w-full max-w-6xl place-items-center text-[#fffffe]">
          <div className="flex items-center gap-1">
            <FaHeart />
          </div>
        </footer>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Timeline timelineItems={timelineItems} icons={icons} />
      </Modal>
    </div>
  )
}

export default MainLayout
