import clsx from 'clsx'
import React from 'react'

function Input({ className, ...props }) {
  return (
    <input
      className={clsx(
        'focus:shadow-outline mb-3 mt-3 w-full rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none dark:bg-slate-200',
        className
      )}
      {...props}
    />
  )
}

export default Input
