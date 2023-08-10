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

const apoiadoresRef = useRef<HTMLLIElement>(null)
  const [apoiadoresTop, setApoiadoresTop] = useState<number | undefined>()

  useEffect(() => {
    if(apoiadoresRef.current?.offsetTop) {
      setApoiadoresTop(apoiadoresRef.current?.offsetTop)
    }
}, [])

const contatoRef = useRef<HTMLLIElement>(null)
  const [contatoTop, setContatoTop] = useState<number | undefined>()

  useEffect(() => {
    if(contatoRef.current?.offsetTop) {
      setContatoTop(contatoRef.current?.offsetTop)
    }
}, [])


  return (
    <>
    <Header quemSomosTopDistance={Number(quemSomosTop) + 210} missaoTopDistance={Number(missaoTop) + 210} visaoTopDistance={Number(visaoTop) + 210} valoresTopDistance={Number(valoresTop) + 210} apoiadoresTopDistance={Number(apoiadoresTop) + 210} contatoTopDistance={Number(contatoTop) + 210} />
    <Main quemSomosRef={quemSomosRef} missaoRef={missaoRef} visaoRef={visaoRef} valoresRef={valoresRef} apoiadoresRef={apoiadoresRef} contatoRef={contatoRef}/>
    <Footer/>
    </>
  )
}

