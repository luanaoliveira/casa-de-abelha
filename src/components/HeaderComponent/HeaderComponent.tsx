import Image from 'next/image'
import logo from '../../assets/imagens/logo.svg'
import menu from '../../assets/imagens/menu.svg'
import close from '../../assets/imagens/close.svg'
import { useState } from 'react'

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <>
            <header >
                <div className='flex justify-between px-6 py-0 bg-white z-20 relative'>
                    <Image className="w-28" src={logo} alt="Imagem da logo"/>
                    <Image className="w-1/8" src={menu} alt="Imagem menu" onClick={() => setOpenMenu(!openMenu)}/>
                </div>
                <div className={`flex justify-center text-center w-full h-full py-2 bg-white z-10 relative  transform duration-300 ${openMenu ? 'mt-0' : '-mt-28'}`} id='itens'>
                    <ul className='flex flex-col'>
                        <li className='my-1'>Quem somos</li>
                        <li className='my-1'>Apoiadores</li>
                        <li className='my-1'>Contato</li>
                    </ul>
                </div>
            </header>
        </>
    )
}

