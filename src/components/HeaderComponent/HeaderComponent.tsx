import Image from 'next/image'
import logo from '../../assets/imagens/logo.svg'
import menu from '../../assets/imagens/menu.svg'

export default function Header() {
    return (
        <header className="flex justify-between pt-4 px-6">
            <Image className="w-1/5" src={logo} alt="Imagem da logo"/>
            <Image className="w-1/8" src={menu} alt="Imagem menu"/>
        </header>
    )
}

