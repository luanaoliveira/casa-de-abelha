import Image from 'next/image'
import style from '../FooterComponent/FooterComponent.module.css'


export default function Footer() {
    return (
        <footer className={style.footer}>
            <p>&copy; Copyright - Casa de Abelha</p>
        </footer>
    )
}