import clsx from 'clsx'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <div
      className={clsx(
        'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-left font-brand text-lg font-bold text-transparent hover:from-purple-600 hover:via-pink-600 hover:to-purple-600',
        props.className
      )}
    >
      Nina Okumura
    </div>
  )
}

export default Logo
