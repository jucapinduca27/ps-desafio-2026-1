import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'
export default async function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Image src="/assets/logo.jpeg" alt="logo" width={100} height={100}/>
                <div>
                    <Link href=""></Link>
                </div>
            </div>
        </header>
    )
}