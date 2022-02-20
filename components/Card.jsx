import React from 'react'
import Image from 'next/image'

function Card(props) {
  return (
    <div className="grid w-full place-items-center gap-2 rounded bg-beige p-4 shadow-2xl">
      {props.children}
    </div>
  )
}

Card.Title = function Title(props) {
  return <div className="pb-4 text-lg">{props.children}</div>
}

Card.Img = function Img(props) {
  return (
    <div className="h-48 w-80 overflow-hidden rounded">
      <Image layout="responsive" src={props.src} alt={props.alt}></Image>
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
