import React, { ReactNode } from 'react'
import Image from 'next/image'

interface CardProps {
  children: ReactNode
}

interface CardImgProps {
  src: string
  alt: string
}

const Card: React.FC<CardProps> & {
  Title: React.FC<CardProps>
  Img: React.FC<CardImgProps>
  Body: React.FC<CardProps>
  Text: React.FC<CardProps>
} = (props) => {
  return (
    <div className="grid place-items-center gap-2 rounded-xl bg-beige p-2 shadow-2xl dark:bg-slate-600">
      {props.children}
    </div>
  )
}

Card.Title = function Title(props: CardProps) {
  return <div className="pb-4 text-lg font-medium">{props.children}</div>
}

Card.Img = function Img({ src, alt }: CardImgProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <Image layout="responsive" placeholder="blur" src={src} alt={alt} />
    </div>
  )
}

Card.Body = function Body(props: CardProps) {
  return <div className="min-h-[5rem] text-base">{props.children}</div>
}

Card.Text = function Text(props: CardProps) {
  return <div className="text-sm">{props.children}</div>
}

export default Card
