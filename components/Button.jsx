import React from 'react'
import clsx from 'clsx'

function Button({ className, ...props }) {
  return (
    <button
      className={clsx(
        'transform rounded-lg bg-teal py-2 font-bold text-beige transition-all hover:opacity-90 dark:bg-orange-300 dark:text-terracota sm:text-lg',
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button
