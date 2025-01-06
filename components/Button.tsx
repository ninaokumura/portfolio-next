import React, { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={clsx(
        'transform rounded-lg bg-teal py-2 font-bold text-almond transition-all hover:opacity-90 disabled:opacity-60 dark:bg-orange-300 dark:text-terracota sm:text-lg',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
