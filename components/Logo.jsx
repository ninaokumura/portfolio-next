import clsx from 'clsx'

export default function Logo(props) {
  return (
    <div
      className={clsx(
        'w-32 cursor-pointer text-left font-brand text-xl font-black leading-7 hover:text-teal sm:text-2xl',
        props.className
      )}
    >
      Nina Okumura
    </div>
  )
}
