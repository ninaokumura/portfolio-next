import React, { ReactNode } from 'react'
import clsx from 'clsx'

type Props = JSX.IntrinsicElements['button'] & {
  // Add more properties here...
}

function Button({ className, ...props }: Props) {
  return (
    <button
      className={clsx(
        'rounded bg-black px-4 py-2 text-beige transition-colors hover:bg-teal',
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button
