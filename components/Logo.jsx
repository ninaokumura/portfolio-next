import clsx from 'clsx'

export default function Logo(props) {
  return (
    <div
      className={clsx(
        'text-left font-brand text-xl hover:scale-[102%] hover:font-bold ',
        props.className
      )}
    >
      Nina Okumura
    </div>
  )
}
