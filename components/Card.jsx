import React from 'react'

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
    <img className="h-48 w-80 rounded" src={props.src} alt={props.alt}></img>
  )
}

Card.Body = function Body(props) {
  return <div className="min-h-[5rem] text-base">{props.children}</div>
}

Card.Text = function Text(props) {
  return <div className="text-sm">{props.children}</div>
}

export default Card
