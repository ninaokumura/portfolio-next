import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Info() {
  return (
    <div className="grid grid-cols-2">
      <div className="grid place-items-center">
        <img
          className="w-6/12 rounded-xl transition-all ease-in-out hover:-rotate-12"
          src="/images/me.jpg"
          alt="avatar"
        />
      </div>

      <div className="grid place-items-center">
        <h3 className="bg-brush px-12 text-4xl text-beige">Hi, I am Nina!</h3>
        <p className="max-w-[26rem] p-2 text-justify">
          I am a self-taught web developer with a passion to learn more about
          Web Design and accessibility. I believe that software development can
          be a powerful tool to help improving other people's lives by being
          accessible and inclusive and am very excited to be in this career
          path.
        </p>

        <span className="flex gap-2 text-2xl">
          <a href="https://www.linkedin.com/in/nina-7b4377221/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ninaokumura">
            <FaGithub />
          </a>
        </span>
      </div>
    </div>
  )
}
