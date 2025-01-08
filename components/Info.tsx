import React from 'react'

export default function Info() {
  return (
    <div className="p-2 font-sans text-[#fffffe]">
      <div className="grid sm:place-items-center sm:py-4 ">
        <h3 className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text py-2 text-center text-2xl font-semibold text-transparent sm:text-6xl">
          Hey, I'm Nina
        </h3>

        <div className="w-[100%] py-12 text-justify text-lg sm:px-[80px] ">
          <p className="p-2 text-justify leading-loose">
            I am a software engineer based in Auckland, New Zealand, currently
            working as a Frontend Developer at Spark. I focus on building
            dynamic web applications using modern technologies like React,
            TypeScript, and GraphQL.
          </p>
          <p className="p-2 text-justify leading-loose">
            Throughout my career, I’ve had the opportunity to contribute to the
            development and maintenance of design system, a journey that
            deepened my understanding of design principles and sparked a keen
            interest in web accessibility.
          </p>

          <p className="p-2 text-justify leading-loose">
            With a strong curiosity and dedication to continuous learning, I
            focus on solving complex problems while delivering scalable,
            maintainable solutions and a proactive approach to learning new
            tools and technologies.
          </p>
        </div>
      </div>
    </div>
  )
}
