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
            My passion for programming began in early 2021 when I started
            learning the fundamentals of HTML, CSS, and Vanilla JavaScript.
          </p>
          <p className="p-2 text-justify  leading-loose md:leading-8">
            During my journey to become a full-stack dev I found a passion for
            front-end development and that's the path I want to pursue in my
            future career.
          </p>
          <p className="p-2 text-justify leading-loose md:leading-8">
            At the moment I'm learning React and looking for my first job
            opportunity within a company that can guide me in order to leverage
            not only my technical skills but also my interpersonal skills.
          </p>
          <p className="p-2 text-justify leading-loose md:leading-8">
            When I'm not coding I enjoy being outdoors and bird photography. You
            can check my learning journey below. 😀
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
