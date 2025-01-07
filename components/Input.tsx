import clsx from 'clsx'
import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={clsx(
        'focus:shadow-outline mb-3 mt-3 w-full rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none dark:bg-slate-200',
        className
      )}
      {...props}
    />
  )
}

export default Input
