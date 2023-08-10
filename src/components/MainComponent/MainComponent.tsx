import { LegacyRef, RefObject } from 'react';
import { Baloo_Thambi_2 } from 'next/font/google';
import { Chau_Philomene_One } from 'next/font/google';


const lato = Baloo_Thambi_2 ({
    subsets: ['latin'],
    weight: '400',
});

const inter = Chau_Philomene_One ({
    subsets: ['latin'],
    weight: '400',
    
});

interface MainProps { quemSomosRef: RefObject<HTMLDivElement>, missaoRef: RefObject<HTMLLIElement>, visaoRef: RefObject<HTMLLIElement>, valoresRef: RefObject<HTMLLIElement>, apoiadoresRef: LegacyRef<HTMLDivElement>, contatoRef: LegacyRef<HTMLDivElement>}

export default function Main(props: MainProps) {
    const { quemSomosRef, missaoRef, visaoRef, valoresRef, apoiadoresRef, contatoRef  } = props
    return (
        <main className={`${lato.className} flex min-h-screen flex-col`}>
            <div>
                <div className='bg-background bg-no-repeat bg-cover text-white py-12'>
                    <h1 className={`${inter.className} text-center text-4xl font-bold shadow-inner px-2 uppercase`} >Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                </div>
                <div className='py-4' ref={quemSomosRef} id='quem-somos'>
                    <p className='text-center text-base mx-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Necessitatibus nulla fugiat nostrum delectus odit impedit? Provident,
                    ipsum voluptatibus rerum voluptate maxime, dolore ducimus dicta magnam, 
                    modi atque quos maiores ex.</p>
                </div>
                <div>
                    <ul className='flex flex-col justify-center items-center my-4 pb-6'>
                        <li id='missao' ref={missaoRef} className='w-60 h-40 bg-gray-200 hover:bg-gray-300 rounded-3xl text-center my-4 p-2'>
                            <p className={`${lato.className} text-lg`}>Missão</p>
                            <p  className='m-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas amet consequatur ipsam!</p></li>
                        <li id='visao' ref={visaoRef} className='w-60 h-40 bg-gray-200 hover:bg-gray-300 rounded-3xl text-center my-4 p-2'>
                            <p className={`${lato.className} text-lg`}>Visão</p>
                            <p className='m-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas amet consequatur ipsam!</p></li>
                        <li id='valores' ref={valoresRef}  className='w-60 h-40 bg-gray-200  hover:bg-gray-300 rounded-3xl text-center my-4 p-2'>
                            <p className={`${lato.className} text-lg`}>Valores</p>
                            <p className='m-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas amet consequatur ipsam!</p>
                            </li>
                    </ul>
                </div>

            </div>
            <div id='apoiadores' ref={apoiadoresRef}  className='bg-red-600 text-center h-60 p-3'>
                <p className={`${lato.className} text-white text-lg`}>Apoiadores</p>
            </div>
            <div id='contato' ref={contatoRef}  className='h-60 text-center p-3'>
                <p className={`${lato.className} text-lg shadow-sm`}>Entre em contato conosco</p>
                <p className='text-red-600 mt-7 mb-3'>Telefone</p>
                <p className='text-red-600'>+55 (74) 90000-0000</p>
                <div></div>
            </div>
        </main>
    )
}