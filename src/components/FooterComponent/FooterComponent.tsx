import Image from 'next/image'
import logo from '../../assets/imagens/logo.svg'
import instagram from '../../assets/imagens/instagram.svg'
import facebook from '../../assets/imagens/facebook.svg'
import { Lato } from 'next/font/google'

const lato = Lato ({
    subsets: ['latin'],
    weight: '400',
});

export default function Footer() {
    return (
        <footer className="flex flex-col text-white bg-red-600">
            <Image className="w-20 m-3" src={logo} alt='Imagem da logo'/>
            <div >
                <ul className="flex ml-3">
                    <li><a href="#"><Image className="w-8 m-0.5" src={facebook} alt='Ícone do facebook'/></a></li>
                    <li><a href="#"><Image className="w-8 m-0.5" src={instagram} alt='Ícone do instagram'/></a></li>
                </ul>
            </div>
            <div>
                <p className={`${lato.className} ml-3 mt-3 text-xs mb-2 text-white`}>Copyright &copy; Casa de Abelha </p>
            </div>
        </footer>
    )
}