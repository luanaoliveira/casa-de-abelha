import Image from 'next/image'
import logo from '../../assets/imagens/logo.svg'
import menu from '../../assets/imagens/menu.svg'
import close from '../../assets/imagens/close.svg'
import { useState } from 'react'

interface HeaderProps { quemSomosTopDistance: number | undefined,  missaoTopDistance: number | undefined, visaoTopDistance: number | undefined, valoresTopDistance: number | undefined, contatoTopDistance: number | undefined}

export default function Header({ quemSomosTopDistance, missaoTopDistance, visaoTopDistance, valoresTopDistance, contatoTopDistance }: HeaderProps) {
    const [openMenu, setOpenMenu] = useState(false)

    const quemSomosClickHandler = (_topDistance?: number) => {
        _topDistance && window.scrollTo({
            top: _topDistance,
            left: 0,
            behavior: "smooth"
          })
    }

    const missaoClickHandler = (_topDistance?: number) => {
        _topDistance && window.scrollTo({
            top: _topDistance,
            left: 0,
            behavior: "smooth"
          })
    }

    const visaoClickHandler = (_topDistance?: number) => {
        _topDistance && window.scrollTo({
            top: _topDistance,
            left: 0,
            behavior: "smooth"
          })
    }

    const valoresClickHandler = (_topDistance?: number) => {
        _topDistance && window.scrollTo({
            top: _topDistance,
            left: 0,
            behavior: "smooth"
          })
    }

    const contatoClickHandler = (_topDistance?: number) => {
        _topDistance && window.scrollTo({
            top: _topDistance,
            left: 0,
            behavior: "smooth"
          })
    }

    return (
        <>
            <header >
                <div className='flex justify-between px-6 py-0 bg-white z-20 relative shadow-md'>
                    <Image className="w-28" src={logo} alt="Imagem da logo"/>    
                    <button className="relative group" onClick={() => setOpenMenu(!openMenu)} >
                    <div className={`relative flex flex-col overflow-hidden items-center justify-center rounded-3xl w-[40px] h-[40px] transform transition-all bg-red-600 ring-0 gray-300  ${openMenu ? 'ring-4 ring-red-400' : ''} ring-opacity-30 duration-200 shadow-md`}>
                    <div className={`transform transition-all duration-150 overflow-hidden -translate-y-5 ${openMenu ? 'translate-y-3' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                    </div>

                    <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden -translate-y-3">
                        <div className={`bg-white mb-1.5 h-[2px] w-7 transform transition-all duration-300 origin-left ${openMenu ? 'translate-y-6' : ''}`}></div>
                        <div className={`bg-white mb-1.5 h-[2px] w-7 rounded transform transition-all duration-300 ${openMenu ? 'translate-y-6' : ''} delay-75`}></div>
                        <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${openMenu ? 'translate-y-6' : ''} delay-100`}></div>
                    </div>
                    </div>
                </button>
                </div>
                <div className={`flex justify-center text-center w-full h-full py-2 bg-white z-10 relative transform duration-300 ${openMenu ? 'mt-0' : '-mt-52'}`} id='itens'>
                    <ul className='flex flex-col'>
                        <li className='my-1' onClick={() => quemSomosClickHandler(quemSomosTopDistance)}>Quem somos</li>
                        <li className='my-1' onClick={() => missaoClickHandler(missaoTopDistance)}>Missão</li>
                        <li className='my-1' onClick={() => visaoClickHandler(visaoTopDistance)}>Visão</li>
                        <li className='my-1' onClick={() => valoresClickHandler(valoresTopDistance)}>Valores</li>
                        <li className='my-1' onClick={() => contatoClickHandler(contatoTopDistance)}>Contato</li>
                    </ul>
                </div>
            </header>
        </>
    )
}

