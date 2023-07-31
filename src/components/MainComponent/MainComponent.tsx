import { Inter } from 'next/font/google'
import Image from "next/image"
import pessoas from "../../assets/imagens/pessoas.svg"

export default function Main() {
    return (
        <main className="flex min-h-screen flex-col">
            <div className='m-5'>
                <div>
                    <h1 className="text-center text-xl p-3 font">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                    <Image  src={pessoas} alt='Imagem da logo'/>
                </div>
                <div className='py-5'>
                    <p className='text-center text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Necessitatibus nulla fugiat nostrum delectus odit impedit? Provident,
                    ipsum voluptatibus rerum voluptate maxime, dolore ducimus dicta magnam, 
                    modi atque quos maiores ex.</p>
                </div>
                <div>
                    <ul className='flex flex-col justify-center items-center my-4'>
                        <li className='w-60 h-40 bg-gray-200 rounded-3xl text-center my-4'>Missão</li>
                        <li className='w-60 h-40 bg-gray-200 rounded-3xl text-center my-4'>Visão</li>
                        <li className='w-60 h-40 bg-gray-200 rounded-3xl text-center my-4'>Valores</li>
                    </ul>
                </div>

            </div>
            <div className='bg-red-600 text-center h-60'>
                <p className='text-white '>Apoiadores</p>
            </div>
            <div className='h-60 text-center'>
                <p>Contato</p>
            </div>
        </main>
    )
}