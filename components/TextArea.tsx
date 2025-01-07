import clsx from 'clsx'
import React, { TextareaHTMLAttributes } from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

const TextArea: React.FC<TextAreaProps> = ({ className, ...props }) => {
  return (
    <textarea
      className={clsx(
        'focus:shadow-outline mb-3 mt-3 w-full rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none',
        className
      )}
      {...props}
    />
  )
}

export default TextArea
