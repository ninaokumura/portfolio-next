import React from 'react'
import clsx from 'clsx'

function Button({ className, ...props }) {
  return (
    <button
      className={clsx(
        '... transform rounded-lg bg-teal py-2 text-beige transition-all hover:opacity-90',
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button
