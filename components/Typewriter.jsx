import React from 'react'
import Typewriter from 'typewriter-effect'

const sentences = ['Hey, I am Nina', 'A self-taught coder', 'More info...']
const lastStepIndex = sentences.length - 1

export default function TypewriterComponent() {
  return (
    <div className="cursor-pointer text-center font-typewriter text-2xl font-bold sm:text-4xl">
      <Typewriter
        onInit={(typewriter) => {
          sentences.forEach((sentence, index) => {
            typewriter.typeString(sentence)

            if (index !== lastStepIndex) {
              typewriter.pauseFor(1000).deleteAll()
            }
          })

          typewriter.start()
        }}
      />
    </div>
  )
}
