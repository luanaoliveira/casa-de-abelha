import Image from "next/image"
import pessoas from "../../assets/imagens/pessoas.svg"

export default function Main() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                <Image  src={pessoas} alt='Imagem da logo'/>
            </div>
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Necessitatibus nulla fugiat nostrum delectus odit impedit? Provident,
                ipsum voluptatibus rerum voluptate maxime, dolore ducimus dicta magnam, 
                modi atque quos maiores ex.</p>
            </div>
            <div>
                <ul>
                    <li>Missão</li>
                    <li>Visão</li>
                    <li>Valores</li>
                </ul>
            </div>
            <div>
                <p>Apoiadores</p>
            </div>
            <div>
                <p>Contato</p>
            </div>
        </main>
    )
}