import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { GrCodeSandbox } from 'react-icons/gr'
import Image from 'next/image'
import avatarImg from '../public/images/me-square.jpg'

export default function Info() {
  return (
    <div className="p-2 lg:grid lg:grid-cols-2">
      <div className="m-auto w-[50%] lg:w-[75%]">
        <Image
          className="rounded-full"
          layout="responsive"
          placeholder="blur"
          src={avatarImg}
          alt="avatar"
        />
      </div>

      <div className="grid place-items-center py-4">
        <h3 className="text-dark text-center text-sm font-semibold sm:text-xl">
          Thank you for stopping by 👋
        </h3>

        <div className="w-[100%] p-2 text-justify text-sm sm:text-base">
          <p className="p-2 text-justify leading-loose md:leading-8">
            I'm a self-taught web developer based in Auckland, New Zealand. My
            passion for programming began in early 2021, and since then I've
            been actively learning new technologies and tools, such as HTML,
            CSS, JavaScript, Node, React, Tailwindcss, and most recently
            Typescript and A11y.
          </p>
          <p className="p-2 text-justify  leading-loose md:leading-8">
            Although in the beginning, I was focused on full-stack-development,
            for the last few months, I've been working on improving my Frontend
            skills.
          </p>
          <p className="p-2 text-justify leading-loose md:leading-8">
            I am a quick learner and team player keen to leverage my technical
            and people skills to contribute to meaningful projects.
          </p>
        </div>

        <span className="flex gap-6 py-4 text-3xl">
          <a target="blank" href="https://github.com/ninaokumura">
            <FaGithub />
          </a>
          <a
            target="blank"
            href="https://codesandbox.io/dashboard/all/?workspace=28f95194-dcbc-4c8f-822a-3d489b1f4a1b"
          >
            <GrCodeSandbox className="dark:invert" />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/nina-okumura-7b4377221/"
          >
            <FaLinkedin />
          </a>
          <a target="blank" href="https://www.instagram.com/ninabirdgram/">
            <FaInstagram />
          </a>
        </span>
      </div>
    </div>
  )
}
