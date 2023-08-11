import { LegacyRef, RefObject } from 'react';
import { Baloo_Thambi_2 } from 'next/font/google';
import { Chau_Philomene_One } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import { Roboto_Condensed } from 'next/font/google';


const baloo_tambi_2 = Roboto ({
    subsets: ['latin'],
    weight: '400',
});

const chau_philomene_one = Roboto_Condensed ({
    subsets: ['latin'],
    weight: '700',
    
});

interface MainProps { quemSomosRef: RefObject<HTMLDivElement>, missaoRef: RefObject<HTMLLIElement>, visaoRef: RefObject<HTMLLIElement>, valoresRef: RefObject<HTMLLIElement>, contatoRef: LegacyRef<HTMLDivElement>}

export default function Main(props: MainProps) {
    const { quemSomosRef, missaoRef, visaoRef, valoresRef, contatoRef  } = props
    return (
        <main className={`${baloo_tambi_2.className} flex min-h-screen flex-col`}>
            <div>
                <div className='bg-background bg-no-repeat bg-cover text-white py-12' style={{ position: 'relative' }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        backgroundColor: 'rgba(237, 28, 36, 0.7)',
                        zIndex: 10
                        
                    }}></div>
                    <h1 
                    style={{
                        textShadow: '2px 2px 0px #000'
                    }}
                    className={`${chau_philomene_one.className} text-center text-white text-4xl font-bold shadow-md px-2 uppercase relative z-20 `} >Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                </div>
                <div className='pt-8' ref={quemSomosRef} id='quem-somos'>
                    <p className='text-center text-base mx-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Necessitatibus nulla fugiat nostrum delectus odit impedit? Provident,
                    ipsum voluptatibus rerum voluptate maxime, dolore ducimus dicta magnam, 
                    modi atque quos maiores ex.</p>
                </div>
                <div>
                    <ul className='flex flex-col justify-center items-center my-4 pb-6'>
                        <li id='missao' ref={missaoRef} className='w-full text-center my-4 p-2'>
                            <p className={`${baloo_tambi_2.className} text-xl text-red-600 uppercase`}>Missão</p>
                            <p  className='m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Magnam placeat architecto explicabo eligendi non voluptate. Nisi aliquam magni ad, 
                             ipsa et repellat sit facilis autem possimus qui nam optio quibusdam.</p>
                             </li>
                        <li id='visao' ref={visaoRef} className='w-full text-center my-4 p-2'>
                            <p className={`${baloo_tambi_2.className} text-xl text-red-600 uppercase`}>Visão</p>
                            <p className='m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Accusantium quasi quam aliquam fugiat expedita. Esse distinctio exercitationem nesciunt molestiae, 
                            enim consequuntur ipsam modi dicta aliquam ducimus nobis corporis incidunt repellat?</p>
                            </li>
                        <li id='valores' ref={valoresRef}  className='w-full text-center my-4 p-2'>
                            <p className={`${baloo_tambi_2.className} text-xl text-red-600 uppercase`}>Valores</p>
                            <p className='m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Vero exercitationem recusandae sequi deserunt expedita nobis, veritatis cumque quisquam iste,
                             debitis, voluptates veniam consectetur numquam itaque inventore voluptatem! Maxime, ipsam culpa!</p>
                            </li>
                    </ul>
                </div>
            </div>
            <div id='contato' ref={contatoRef}  className='text-center p-3'>
                <p className={`${baloo_tambi_2.className} text-xl text-red-600 mb-3`}>Fale conosco</p>
                <p className='text-red-600 text-2xl font-bold mb-10'>casadeabelha@gmail.com</p>
                <div></div>
            </div>
        </main>
    )
}