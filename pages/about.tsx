import React, { useState } from 'react'
import { BsArrowDownCircle } from 'react-icons/bs'
import { timelineItems } from '../data/Timeline.data'

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
} from 'react-icons/fa'
import { SiJavascript, SiMongodb, SiTypescript } from 'react-icons/si'
import { GrCertificate, GrCodeSandbox, GrStar } from 'react-icons/gr'

export default function About() {
  const [shouldOpenCourses, setShouldOpenCourses] = useState<boolean>(false)
  const [shouldOpenExperiences, setShouldOpenExperiences] =
    useState<boolean>(false)

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
  } as const
  // Example of dynamic timelineItems data
  const timelineItems2 = [
    {
      timelineIconId: 'react',
      title: 'React Developer',
      subtitle: 'Building amazing UIs',
      duration: '2021 - Present',
      footerIcons: [
        { id: 'github', url: 'https://github.com' },
        { id: 'certificate', url: 'https://freecodecamp.org' },
      ],
    },
    {
      timelineIconId: 'node',
      title: 'Backend Developer',
      subtitle: 'Developing robust APIs',
      duration: '2020 - 2021',
      footerIcons: [{ id: 'github', url: 'https://github.com' }],
    },
  ]

  return (
    <MainLayout title="About me">
      <div className="grid place-items-center border-2 border-black">
        <Info
          setShouldOpenCourses={setShouldOpenCourses}
          setShouldOpenExperiences={setShouldOpenExperiences}
        />
      </div>

      {shouldOpenCourses && (
        <div id="timeline" className="w-full ">
          <Timeline timelineItems={timelineItems} icons={icons} />
        </div>
      )}

      {shouldOpenExperiences && (
        <div id="timeline" className="w-full ">
          <Timeline timelineItems={timelineItems2} icons={icons} />
        </div>
      )}
    </MainLayout>
  )
}
