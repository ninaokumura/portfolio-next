import React from 'react'
import clsx from 'clsx'

function Button({ className, ...props }) {
  return (
    <button
      className={clsx(
        'rounded bg-black px-4 py-2 text-beige transition-colors hover:bg-black/70',
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button
