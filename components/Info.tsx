import React from 'react'

export default function Info() {
  return (
    <div className="p-2 font-sans text-[#fffffe]">
      <div className="grid sm:place-items-center sm:py-4 ">
        <h3 className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text py-2 text-center text-2xl font-semibold text-transparent sm:text-6xl">
          Hey, I'm Nina
        </h3>

        <div className="w-[100%] py-12 text-justify text-lg sm:px-[80px] ">
          <p className="md:leading-12 p-2 text-justify leading-loose">
            I am a software engineer based in Auckland, New Zealand. Currenlty
            working as a Frontend developer at Spark. I've been actively
            practicing and improving my skills in modern web technologies such
            as React, TypeScript, and GraphQL to build dynamic, user-focused web
            applications.
          </p>
          <p className="p-2 text-justify leading-loose">
            I have experience working with design systems, where I have
            developed a strong interest in web accessibility, focusing on
            improving accessibility across the website while creating inclusive
            experiences for all users.
          </p>

          <p className="p-2 text-justify leading-loose md:leading-8">
            With a strong curiosity and dedication to continuous learning, I
            focus on solving intricate problems while delivering scalable,
            maintainable solutions and a proactive approach to learning new
            tools and technologies.
          </p>
        </div>
      </div>
    </div>
  )
}
