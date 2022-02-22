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
        <div className="-mb-8 grid place-items-center gap-6 sm:mt-14">
          <h1 className="m-auto inline-flex text-center text-2xl font-semibold text-teal">
            See my journey here
          </h1>
          <a href="#timeline">
            <BsArrowDownCircle className="text-5xl text-terracota hover:animate-bounce" />
          </a>
        </div>
      </div>
      <div id="timeline" className="w-full pt-36 sm:mt-60 sm:grid sm:pt-96">
        <Timeline />
      </div>
    </MainLayout>
  )
}
