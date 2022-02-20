import clsx from 'clsx'

export default function Logo() {
  return (
    <div
      className={clsx(
        'w-32 cursor-pointer text-left font-brand text-2xl font-black leading-7 hover:text-teal'
      )}
    >
      Nina Okumura
    </div>
  )
}
