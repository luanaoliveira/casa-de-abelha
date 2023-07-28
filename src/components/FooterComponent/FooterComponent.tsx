import Image from 'next/image'
import logo from '../../assets/imagens/logo.svg'
import instagram from '../../assets/imagens/instagram.svg'
import facebook from '../../assets/imagens/facebook.svg'


export default function Footer() {
    return (
        <footer className="flex flex-col align-center">
            <Image className="h-6 mb-1" src={logo} alt='Imagem da logo'/>
            <div >
                <ul className="flex justify-center">
                    <li><a href="#"><Image className="w-4 rounded-3xl m-0.5" src={facebook} alt='Ícone do facebook'/></a></li>
                    <li><a href="#"><Image className="w-4 rounded-3xl m-0.5" src={instagram} alt='Ícone do instagram'/></a></li>
                </ul>
            </div>
        </footer>
    )
}