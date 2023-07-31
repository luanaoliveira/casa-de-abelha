import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/HeaderComponent/HeaderComponent'
import Main from '../components/MainComponent/MainComponent'
import Footer from '../components/FooterComponent/FooterComponent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}

