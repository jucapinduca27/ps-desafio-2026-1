import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'

export default async function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="assets/logo.jpeg" className={styles.logo}>
                    <span>Iguana.Inc</span>
                </Link>
                <nav className={styles.nav}>
                    <Link href="/products">Produtos</Link>
                    <Link href="/categories">Categorias</Link>
                    <Link href="/contact">Contato</Link>
                </nav>
                <div className={styles.actions}>
                    <button className={styles.basketButton}>
                        Carrinho (0)
                    </button>
                </div>
            </div>
        </header>
    )
}