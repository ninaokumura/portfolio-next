import React, { useState } from 'react'
import { timelineItems } from '../data/education-timeline.data'
import { timelineWorkItems } from '../data/work-timeline.data'

import Info from '../components/Info'
import Timeline from '../components/Timeline/Timeline'
import MainLayout from '../layouts/MainLayout'

import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaGithub,
  FaGraduationCap,
  FaFreeCodeCamp,
  FaAws,
} from 'react-icons/fa'
import { MdLaptopMac } from 'react-icons/md'
import { SiJavascript, SiMongodb, SiTypescript } from 'react-icons/si'
import { GrCertificate, GrCodeSandbox } from 'react-icons/gr'
import Modal from '../components/Modal'

export default function MainPage() {
  const [shouldOpenCourses, setShouldOpenCourses] = useState<boolean>(false)
  const [shouldOpenExperiences, setShouldOpenExperiences] =
    useState<boolean>(false)
  const [timelineType, setTimelineType] = useState<
    'courses' | 'experiences' | null
  >(null)

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  // Define the icons object that you want to pass
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
    aws: FaAws,
    mac: MdLaptopMac,
  } as const

  const closeModal = () => {
    setIsModalOpen(false)
    setTimelineType(null)
    setShouldOpenCourses(false)
    setShouldOpenExperiences(false)
  }

  return (
    <MainLayout
      title="About me"
      setShouldOpenCourses={setShouldOpenCourses}
      setShouldOpenExperiences={setShouldOpenExperiences}
      setIsModalOpen={setIsModalOpen}
    >
      <Info />

      {shouldOpenCourses && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Timeline timelineItems={timelineItems} icons={icons} />
        </Modal>
      )}

      {shouldOpenExperiences && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Timeline timelineItems={timelineWorkItems} icons={icons} />
        </Modal>
      )}
    </MainLayout>
  )
}
