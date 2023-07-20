import { Inter } from 'next/font/google'
import Header from '@/components/HeaderComponent/HeaderComponent'
import Footer from '@/components/FooterComponent/FooterComponent'

const inter = Inter({ subsets: ['latin'] })

export default function QuemSomosPage() {
  return (
    <>
      <Header/>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <h1>Quem Somos</h1>
      </main>
      <Footer/>
    </>
  )
}
