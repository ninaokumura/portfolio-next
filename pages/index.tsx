import Link from 'next/link'
import TypewriterComponent from '../components/Typewriter'
import MainLayout from '../layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout title="burra">
      <Link href={'/about'}>
        <a>
          <TypewriterComponent />
        </a>
      </Link>
    </MainLayout>
  )
}
