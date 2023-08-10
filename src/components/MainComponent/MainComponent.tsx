import { LegacyRef, RefObject } from 'react';
import { Baloo_Thambi_2 } from 'next/font/google';
import { Chau_Philomene_One } from 'next/font/google';


const baloo_tambi_2 = Baloo_Thambi_2 ({
    subsets: ['latin'],
    weight: '400',
});

const chau_philomene_one = Chau_Philomene_One ({
    subsets: ['latin'],
    weight: '400',
    
});

interface MainProps { quemSomosRef: RefObject<HTMLDivElement>, missaoRef: RefObject<HTMLLIElement>, visaoRef: RefObject<HTMLLIElement>, valoresRef: RefObject<HTMLLIElement>, contatoRef: LegacyRef<HTMLDivElement>}

export default function Main(props: MainProps) {
    const { quemSomosRef, missaoRef, visaoRef, valoresRef, contatoRef  } = props
    return (
        <main className={`${baloo_tambi_2.className} flex min-h-screen flex-col`}>
            <div>
                <div className='bg-background bg-no-repeat bg-cover text-white py-12'>
                    <h1 className={`${chau_philomene_one.className} text-center text-4xl font-bold shadow-md px-2 uppercase`} >Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
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
                            <p className={`${baloo_tambi_2.className} text-xl text-red-600`}>Missão</p>
                            <p  className='m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Magnam placeat architecto explicabo eligendi non voluptate. Nisi aliquam magni ad, 
                             ipsa et repellat sit facilis autem possimus qui nam optio quibusdam.</p>
                             </li>
                        <li id='visao' ref={visaoRef} className='w-full text-center my-4 p-2'>
                            <p className={`${baloo_tambi_2.className} text-xl text-red-600`}>Visão</p>
                            <p className='m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Accusantium quasi quam aliquam fugiat expedita. Esse distinctio exercitationem nesciunt molestiae, 
                            enim consequuntur ipsam modi dicta aliquam ducimus nobis corporis incidunt repellat?</p>
                            </li>
                        <li id='valores' ref={valoresRef}  className='w-full text-center my-4 p-2'>
                            <p className={`${baloo_tambi_2.className} text-xl text-red-600`}>Valores</p>
                            <p className='m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Vero exercitationem recusandae sequi deserunt expedita nobis, veritatis cumque quisquam iste,
                             debitis, voluptates veniam consectetur numquam itaque inventore voluptatem! Maxime, ipsam culpa!</p>
                            </li>
                    </ul>
                </div>
            </div>
            <div id='contato' ref={contatoRef}  className='h-60 text-center p-3'>
                <p className={`${baloo_tambi_2.className} text-xl`}>Entre em contato conosco</p>
                <p className='text-red-600 mt-7 mb-3 text-xl'>Telefone</p>
                <p className='text-red-600 text-2xl font-bold'>+55 (74) 90000-0000</p>
                <div></div>
            </div>
        </main>
    )
}