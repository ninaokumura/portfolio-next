import clsx from 'clsx'

type Props = {
  className?: string
}

export default function Logo({ className }: Props) {
  return (
    <div
      className={clsx(
        'w-32 cursor-pointer text-left font-brand text-2xl font-black leading-7 text-terracota hover:text-teal',
        className
      )}
    >
      Nina Okumura
    </div>
  )
}
