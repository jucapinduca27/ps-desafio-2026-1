import Image from 'next/image'
import styles from './banner.module.css'
import Link from 'next/link'


export default function Banner(){
    return (
        <section className={styles.bannerContainer}>
            <Image className={styles.bannerImage} src="/assets/banner.jpg" fill priority alt="banner"/>
            <div className={styles.bannerOverlay}>
                <div>
                    <h1 style={{ fontSize: '3rem', margin: 0 }}>OFF SEASON</h1>
                    <p style={{ fontSize: '1.2rem' }}>Os melhores artigos esportivos de 2026.</p>
                </div>
            </div>
        </section>
    )
}