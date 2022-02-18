import React, { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  children: ReactNode
  className?: string
}

function Button(props: Props) {
  return (
    <button
      className={clsx(
        'rounded bg-black px-4 py-2 text-beige transition-colors hover:bg-teal',
        props.className
      )}
    >
      {props.children}
    </button>
  )
}

export default Button
