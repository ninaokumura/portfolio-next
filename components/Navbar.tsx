import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { MdSchool, MdWork } from 'react-icons/md'

interface NavbarProps {
  isSticky?: boolean
  setShouldOpenCourses?: (value: boolean | ((prev: boolean) => boolean)) => void
  setShouldOpenExperiences?: (
    value: boolean | ((prev: boolean) => boolean)
  ) => void
  onHandleEducationTimeline?: () => void
  onHanldleWorkTimeline?: () => void
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

const Navbar: React.FC<NavbarProps> = ({
  onHandleEducationTimeline,
  onHanldleWorkTimeline,
}) => {
  const router = useRouter()
  const currentPath = router.asPath

  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <div className="flex flex-1 items-end justify-end text-[#94a1b2]">
      <span className="flex gap-6 py-4 text-3xl">
        <a target="blank" href="https://github.com/ninaokumura">
          <FaGithub color="#2cb67d" size="24px" />
        </a>
        <a target="blank" href="">
          <FaLinkedin color="#2cb67d" size="24px" />
        </a>
        <button onClick={onHandleEducationTimeline}>
          <MdSchool color="#2cb67d" size="24px" />
        </button>
        <button onClick={onHanldleWorkTimeline}>
          <MdWork color="#2cb67d" size="24px" />
        </button>
      </span>
    </div>
  )
}

export default Navbar
