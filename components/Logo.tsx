import clsx from 'clsx'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <div
      className={clsx(
        'text-left font-brand text-xl hover:scale-[102%] hover:font-bold',
        props.className
      )}
    >
      Nina Okumura
    </div>
  )
}

export default Logo
