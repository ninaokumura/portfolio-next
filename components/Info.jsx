import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { GrCodeSandbox } from 'react-icons/gr'
import Image from 'next/image'
import avatarImg from '../public/images/me-square.jpg'

export default function Info() {
  return (
    <div className="lg:grid lg:grid-cols-2">
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
        <h3 className="bg-brush px-8 text-center text-sm text-beige sm:text-xl">
          Thank you for stopping by 👋
        </h3>

        <div className="w-[100%] p-2 text-justify text-sm sm:text-base">
          <p className="p-2 text-justify leading-loose md:leading-10">
            My passion for programming began in early 2021 when I started
            learning HTML, CSS, and Vanilla JavaScript. At the time I was
            working as an ECE teacher and had just decided to switch career.
          </p>
          <p className="p-2 text-justify  leading-loose md:leading-10">
            Since then, I've been focusing my learning on the MERN stack and at
            the moment I'm looking for my first job opportunity within a company
            that can help me leverage my technical skills.
          </p>
          <p className="p-2 text-justify leading-loose md:leading-10">
            One of the things I really enjoy in programming is the ability to
            bring an idea to life and I am really excited to begin this career
            path.
          </p>
          <p className="p-2 text-justify leading-loose md:leading-10">
            Now, I am studying React and building my portfolio. When I'm not
            coding, I enjoy being outdoors and bird photography. You can check
            my journey below.
          </p>
        </div>

        <span className="flex gap-6 py-4 text-3xl">
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
