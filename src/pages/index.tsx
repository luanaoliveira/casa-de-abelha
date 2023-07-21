import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/HeaderComponent/HeaderComponent'
import Footer from '../components/FooterComponent/FooterComponent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header/>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Home</h1>
    </main>
    <Footer/>
    </>
  )
}

