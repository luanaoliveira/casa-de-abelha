import Image from 'next/image'
import style from '../HeaderComponent/HeaderComponent.module.css'
import logo from '../../assets/imagens/logo.svg'
import menu from '../../assets/imagens/menu.svg'

export default function Header() {
    return (
        <header className={style.header}>
            <Image className={style.logo} src={logo} alt="Imagem da logo"/>
            <Image className={style.menu} src={menu} alt="Imagem menu"/>
        </header>
    )
}

