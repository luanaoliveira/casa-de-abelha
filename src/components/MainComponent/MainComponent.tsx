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
                <div className='' ref={quemSomosRef} id='quem-somos'>
                    <p className='text-left text-base py-12 px-6'>
                        O Instituto Casa de Abelhas é uma iniciativa sem fins lucrativos sediada em Juazeiro, na Bahia.
                        O instituto tem como base projetos integrados de forma sustentável e adaptados às particularidades 
                        culturais e sociogeográficas da região, e surge  a partir da compreensão de que organização, formação, 
                        produção e geração de renda são pilares da estruturação do campo e da cidade.</p>
                </div>
                <div>
                    <ul className='flex flex-col justify-center items-center text-center'>
                        <li id='missao' ref={missaoRef} className='w-full'>
                            <p className={`${baloo_tambi_2.className} text-xl text-red-600 uppercase mb-2`}>Missão</p>
                            <p  className='text-left px-6'>
                                Fortalecer o desenvolvimento sustentável por meio da participação ativa das comunidades 
                                em ações sociais, políticas, educacionais, esportivas, culturais e ambientais. Visando a
                                saúde integral, holística e formação política das pessoas, impulsionando um progresso 
                                sustentável baseado em equidade social e valores culturais.
                            </p>
                        </li>
                        <li id='visao' ref={visaoRef} className='w-full py-12'>
                            <p className={`${baloo_tambi_2.className} text-xl text-center text-red-600 uppercase mb-2`}>Visão</p>
                            <p className='text-left px-6'>
                                Executar ações que promovam uma abordagem ecossistêmica sobre a relação entre
                                as pessoas e seus territórios, empoderando comunidades na construção de uma sociedade mais justa,
                                saudável, solidária e participativa, valorando e valorizando os saberes na construção do Bem Viver.
                             </p>
                        </li>
                        <li id='valores' ref={valoresRef}  className='w-full pb-12'>
                            <p className={`${baloo_tambi_2.className} text-xl text-center text-red-600 uppercase mb-2`}>Valores</p>
                            <p className='text-left px-6'>
                                Respeito à diversidade, acolhimento, cuidado com o meio ambiente, construção colaborativa, 
                                inclusão, solidariedade, Gestão compartilhada e transparente.
                            </p>
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