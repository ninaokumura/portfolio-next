import React, { useState } from 'react'
import { BsArrowDownCircle } from 'react-icons/bs'

import Info from '../components/Info'
import Timeline from '../components/Timeline/Timeline'
import MainLayout from '../layouts/MainLayout'

export default function About() {
  const [shouldOpenCourses, setShouldOpenCourses] = useState<boolean>(false)
  const [shouldOpenExperiences, setShouldOpenExperiences] =
    useState<boolean>(false)

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
          <Timeline />
        </div>
      )}

      {shouldOpenExperiences && (
        <div id="timeline" className="w-full ">
          <Timeline />
        </div>
      )}
    </MainLayout>
  )
}
