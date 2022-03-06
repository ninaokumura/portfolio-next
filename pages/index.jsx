import Link from 'next/link'
import TypewriterComponent from '../components/Typewriter'
import MainLayout from '../layouts/MainLayout'
import Image from 'next/image'
import tree from '../public/images/tree.svg'

export default function Home() {
  return (
    <MainLayout title="Nina Okumura">
      <Link href={'/about'} passHref>
        <div className="grid grid-cols-2">
          <div className=" w-[90%] opacity-80">
            {<Image src={tree} alt="tree" />}
          </div>
          <a className="grid place-items-center">
            <TypewriterComponent />
          </a>
        </div>
      </Link>
    </MainLayout>
  )
}
