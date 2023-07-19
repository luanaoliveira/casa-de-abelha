import Image from 'next/image'
import { Inter } from 'next/font/google'
import menu from '../assets/imagens/menu.svg'
import Style from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <header className={Style.header}>
      <p>Casa de Abelha</p>
      <Image className={Style.menu} src={menu} alt="Imagem menu"/>
    </header>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Home</h1>
    </main>
    <footer className={Style.footer}>
      <p>&copy; Copyright - Casa de Abelha</p>
    </footer>
    </>
  )
}

