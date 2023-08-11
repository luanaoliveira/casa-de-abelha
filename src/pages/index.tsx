import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/HeaderComponent/HeaderComponent'
import Main from '../components/MainComponent/MainComponent'
import Footer from '../components/FooterComponent/FooterComponent'
import { useEffect, useRef, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const quemSomosRef = useRef<HTMLDivElement>(null)
  const [quemSomosTop, setQuemSomosTop] = useState<number | undefined>()

  useEffect(() => {
      if(quemSomosRef.current?.offsetTop) {
        setQuemSomosTop(quemSomosRef.current?.offsetTop)
      }
  }, [])

  const missaoRef = useRef<HTMLLIElement>(null)
  const [missaoTop, setMissaoTop] = useState<number | undefined>()
  
  useEffect(() => {
      if(missaoRef.current?.offsetTop) {
        setMissaoTop(missaoRef.current?.offsetTop)
      }
  }, [])

  const visaoRef = useRef<HTMLLIElement>(null)
  const [visaoTop, setVisaoTop] = useState<number | undefined>()

  useEffect(() => {
    if(visaoRef.current?.offsetTop) {
      setVisaoTop(visaoRef.current?.offsetTop)
    }
}, [])

const valoresRef = useRef<HTMLLIElement>(null)
  const [valoresTop, setValoresTop] = useState<number | undefined>()

  useEffect(() => {
    if(valoresRef.current?.offsetTop) {
      setValoresTop(valoresRef.current?.offsetTop)
    }
}, [])

const contatoRef = useRef<HTMLDivElement>(null)
  const [contatoTop, setContatoTop] = useState<number | undefined>()

  useEffect(() => {
    if(contatoRef.current?.offsetTop) {
      setContatoTop(contatoRef.current?.offsetTop)
    }
}, [])


  return (
    <>
    <Header quemSomosTopDistance={Number(quemSomosTop) + 178} missaoTopDistance={Number(missaoTop) + 178} visaoTopDistance={Number(visaoTop) + 178} valoresTopDistance={Number(valoresTop) + 178} contatoTopDistance={Number(contatoTop) + 178} />
    <Main quemSomosRef={quemSomosRef} missaoRef={missaoRef} visaoRef={visaoRef} valoresRef={valoresRef} contatoRef={contatoRef}/>
    <Footer/>
    </>
  )
}

