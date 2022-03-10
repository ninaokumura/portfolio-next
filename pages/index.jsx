import Link from 'next/link'
import TypewriterComponent from '../components/Typewriter'
import MainLayout from '../layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout title="Nina Okumura">
      <Link href={'/about'} passHref>
        <div>
          <a className="grid place-items-center">
            <TypewriterComponent />
          </a>
        </div>
      </Link>
    </MainLayout>
  )
}
