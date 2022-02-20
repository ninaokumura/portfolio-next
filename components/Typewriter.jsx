import React from 'react'
import Typewriter from 'typewriter-effect'

const sentences = ['Hey, ', 'A self-taught coder', 'Learn more...']
const lastStepIndex = sentences.length - 1

export default function TypewriterComponent() {
  return (
    <div className="font-typewriter text-4xl font-bold">
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
