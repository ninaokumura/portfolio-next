import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { GrCodeSandbox } from 'react-icons/gr'
import Image from 'next/image'
import avatarImg from '../public/images/me.jpg'

export default function Info() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
      <div className="grid place-items-center">
        <div className="w-8/12 overflow-hidden rounded-xl transition-all ease-in-out hover:-rotate-12 ">
          <Image
            layout="responsive"
            placeholder="blur"
            src={avatarImg}
            alt="avatar"
          />
        </div>
      </div>

      <div className="grid place-items-center sm:pt-8">
        <h3 className="bg-brush px-12 text-4xl text-beige">Hello 👋</h3>
        <div className="max-w-[34rem] p-2 text-justify text-xl">
          <p className="p-2 text-justify text-lg leading-loose">
            I'm Nina, a self-taught developer based in Auckland, New Zealand.
            Last year I decided to start this journey to become a Web Developer
            and it's been very exciting so far! 😀
          </p>
          <p className="p-2 text-justify text-lg leading-loose">
            In the beginning I focused on HTML, CSS, and Vanilla JavaScript. And
            then, started expanding my knowledge by studying the MERN stack.
          </p>
          <p className="p-2 text-justify text-lg leading-loose">
            I'm currently learning React and when I'm not coding, I enjoy being
            outdoors and bird photoghraphy.
          </p>
        </div>

        <span className=" flex gap-6 text-3xl">
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
