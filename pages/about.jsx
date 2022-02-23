import React from 'react'
import { BsArrowDownCircle } from 'react-icons/bs'

import Info from '../components/Info'
import Timeline from '../components/Timeline/Timeline'
import MainLayout from '../layouts/MainLayout'

export default function About() {
  return (
    <MainLayout title="about">
      <div className="grid h-[calc(100vh-120px)] place-items-center">
        <Info />
        <div className="bottom-4 grid place-items-center gap-6 md:absolute">
          <h1 className="m-auto inline-flex text-center text-2xl font-semibold text-teal">
            See my journey here
          </h1>
          <a href="#timeline">
            <BsArrowDownCircle className="text-5xl text-terracota hover:animate-bounce" />
          </a>
        </div>
      </div>
      <div id="timeline" className="mt-[100vh] w-full sm:mt-32">
        <Timeline />
      </div>
    </MainLayout>
  )
}
