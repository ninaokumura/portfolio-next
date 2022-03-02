import React from 'react'
import { BsArrowDownCircle } from 'react-icons/bs'

import Info from '../components/Info'
import Timeline from '../components/Timeline/Timeline'
import MainLayout from '../layouts/MainLayout'

export default function About() {
  return (
    <MainLayout title="about">
      <div className="grid place-items-center">
        <Info />
        <a href="#timeline">
          <BsArrowDownCircle className="text-5xl text-terracota hover:animate-bounce" />
        </a>
      </div>

      <div id="timeline" className="w-full">
        <Timeline />
      </div>
    </MainLayout>
  )
}
