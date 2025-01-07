import React from 'react'

export default function Info() {
  return (
    <div className="p-2 font-sans text-[#fffffe]">
      <div className="grid sm:place-items-center sm:py-4 ">
        <h3 className="text-center text-2xl font-semibold sm:text-6xl">
          Hey, I'm Nina
        </h3>

        <div className="w-[100%] py-12 text-justify text-lg sm:px-[80px] ">
          <p className="md:leading-12 p-2 text-justify leading-loose">
            I'm a self-taught web developer based in Auckland, New Zealand. My
            passion for programming began in early 2021, and since then I've
            been actively learning new technologies and tools, such as HTML,
            CSS, JavaScript, Node, React, Tailwindcss, and most recently
            Typescript and A11y.
          </p>

          <p className="p-2 text-justify leading-loose md:leading-8">
            I am a quick learner and team player keen to leverage my technical
            and people skills to contribute to meaningful projects.
          </p>
        </div>
      </div>
    </div>
  )
}
