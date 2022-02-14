import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

import { ReactNode } from 'react'
import Logo from '../components/Logo'

type Props = { children: ReactNode; title: string }

export default function MainLayout(props: Props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className="flex min-h-screen flex-col bg-beige">
        <header className="m-auto flex w-full max-w-6xl p-8">
          <Link href="/">
            <Logo />
          </Link>
          <Navbar />
        </header>
        <main className="m-auto grid w-full max-w-6xl flex-1 place-items-center">
          {props.children}
        </main>
        <footer className="m-auto grid h-20 w-full max-w-6xl place-items-center">
          Made with love
        </footer>
      </div>
    </>
  )
}
