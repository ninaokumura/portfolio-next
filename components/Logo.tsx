import clsx from 'clsx'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <div
      className={clsx(
        'text-left font-brand text-lg font-bold text-[#C4B5FD] hover:text-[#A78BFA]',
        props.className
      )}
    >
      Nina Okumura
    </div>
  )
}

export default Logo
