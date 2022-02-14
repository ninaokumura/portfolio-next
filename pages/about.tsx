import React from 'react'
import Info from '../components/Info'
import Timeline from '../components/Timeline/Timeline'
import MainLayout from '../layouts/MainLayout'
import { BsArrowDownCircle } from 'react-icons/bs'

export default function About() {
  return (
    <MainLayout title="about">
      <div className="grid h-[calc(100vh-120px)] place-items-center">
        <Info />
        <div className="-mb-16 grid place-items-center gap-6">
          <h1 className="m-auto inline-flex text-center text-2xl font-semibold text-teal">
            My learning journey
          </h1>
          <a href="#timeline">
            <BsArrowDownCircle className="text-4xl text-terracota hover:animate-bounce" />
          </a>
        </div>
      </div>
      <div id="timeline" className="w-full pt-36">
        <Timeline />
      </div>
    </MainLayout>
  )
}
