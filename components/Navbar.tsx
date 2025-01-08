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
      <span className="flex py-4 text-3xl sm:gap-4">
        <button
          onClick={onHandleEducationTimeline}
          className="rounded-full border-2 border-transparent p-2 ring-[#A78BFA] transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-orange-500"
        >
          <MdSchool color="#fffe" size="24px" />
        </button>
        <button
          onClick={onHanldleWorkTimeline}
          className="rounded-full border-2 border-transparent p-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-orange-500"
        >
          <MdWork color="#fffe" size="24px" />
        </button>
        <a
          target="blank"
          href="https://github.com/ninaokumura"
          className="rounded-full border-2 border-transparent p-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-orange-500"
        >
          <FaGithub color="#fffe" size="24px" />
        </a>
        <a
          target="blank"
          href=""
          className="rounded-full border-2 border-transparent p-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-orange-500"
        >
          <FaLinkedin color="#fffe" size="24px" />
        </a>
      </span>
    </div>
  )
}

export default Navbar
