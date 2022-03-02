import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { GrCodeSandbox } from 'react-icons/gr'
import Image from 'next/image'
import avatarImg from '../public/images/me-square.jpg'

export default function Info() {
  return (
    <div className="py-6 lg:grid lg:grid-cols-2">
      <div className="m-auto w-[60%]  lg:w-[70%]">
        <Image
          className="rounded-full"
          layout="responsive"
          placeholder="blur"
          src={avatarImg}
          alt="avatar"
        />
      </div>

      <div className="grid place-items-center py-8 text-xl">
        <h3 className="bg-brush px-10 text-center text-lg text-beige sm:text-2xl">
          Thank you for stopping by 👋
        </h3>

        <div className="w-[100%] p-2 text-justify">
          <p className="p-2 text-justify text-lg leading-loose md:leading-10">
            I'm a Brazilian coder based in Auckland, New Zealand. Last year I
            decided to start my learning journey to become a Web Developer and
            it's been very exciting so far! 😀
          </p>
          <p className="p-2 text-justify text-lg leading-loose md:leading-10">
            At first, I focused on HTML, CSS, and JavaScript. And then, started
            expanding my knowledge by studying the MERN stack. I'm currently
            looking for my first job opportunity within a company that can guide
            me in order to leverage my technical skills.
          </p>
          <p className="p-2 text-justify text-lg leading-loose md:leading-10">
            At the moment I'm learning React and when I'm not coding, I enjoy
            being outdoors and bird photography. You can check my journey below.
          </p>
        </div>

        <span className="flex gap-6 py-6 text-3xl md:py-2">
          <a target="blank" href="https://github.com/ninaokumura">
            <FaGithub />
          </a>
          <a
            target="blank"
            href="https://codesandbox.io/dashboard/all/Lab?workspace=28f95194-dcbc-4c8f-822a-3d489b1f4a1b"
          >
            <GrCodeSandbox />
          </a>
          <a target="blank" href="https://www.linkedin.com/in/nina-7b4377221/">
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
