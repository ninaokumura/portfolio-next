import React from 'react'
import Image from 'next/image'

function Card(props) {
  return (
    <div className="grid place-items-center gap-2 rounded-xl bg-beige p-2 shadow-2xl dark:bg-slate-600">
      {props.children}
    </div>
  )
}

Card.Title = function Title(props) {
  return <div className="pb-4 text-lg font-medium">{props.children}</div>
}

Card.Img = function Img(props) {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <Image
        layout="responsive"
        placeholder="blur"
        src={props.src}
        alt={props.alt}
      ></Image>
    </div>
  )
}

Card.Body = function Body(props) {
  return <div className="min-h-[5rem] text-base">{props.children}</div>
}

Card.Text = function Text(props) {
  return <div className="text-sm">{props.children}</div>
}

export default Card
