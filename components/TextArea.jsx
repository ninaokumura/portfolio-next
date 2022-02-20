import clsx from 'clsx'
import React from 'react'

function TextArea({ className, ...props }) {
  return (
    <textarea
      className={clsx(
        'focus:shadow-outline mb-3 mt-3 w-full rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none',
        className
      )}
      {...props}
    />
  )
}

export default TextArea
