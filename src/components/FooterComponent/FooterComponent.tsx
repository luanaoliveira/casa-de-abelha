import Image from 'next/image'
import style from '../FooterComponent/FooterComponent.module.css'
import logo from '../../assets/imagens/logo.svg'
import instagram from '../../assets/imagens/instagram.svg'
import facebook from '../../assets/imagens/facebook.svg'


export default function Footer() {
    return (
        <footer className={style.footer}>
            <Image className={style.logo} src={logo} alt='Imagem da logo'/>
            <div >
                <ul className={style.redes_sociais}>
                    <li><a href="#"><Image className={style.facebook} src={facebook} alt='Ícone do facebook'/></a></li>
                    <li><a href="#"><Image className={style.instagram} src={instagram} alt='Ícone do instagram'/></a></li>
                </ul>


            </div>
        </footer>
    )
}