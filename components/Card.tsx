import React, { ReactNode } from 'react'

type ImgProps = {
  src: string
  alt?: string
}

type CardProps = {
  children: ReactNode
}

function Card(props: CardProps) {
  return (
    <div className="grid w-full place-items-center gap-2 rounded bg-beige p-4 shadow-2xl">
      {props.children}
    </div>
  )
}

Card.Title = function (props: CardProps) {
  return <div className="pb-4 text-lg">{props.children}</div>
}

Card.Img = function (props: ImgProps) {
  return (
    <img className=" h-48 w-80 rounded" src={props.src} alt={props.alt}></img>
  )
}

Card.Body = function (props: CardProps) {
  return <div className="min-h-[5rem] text-base">{props.children}</div>
}

Card.Text = function (props: CardProps) {
  return <div className="text-sm">{props.children}</div>
}

export default Card
