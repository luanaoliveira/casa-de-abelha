import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Contato() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Quem Somos</h1>
    </main>
  )
}
