import Image from 'next/image'
import Link from 'next/link'
import styles from './banner.module.css'


export default function Banner(){
    return (
        <div className={styles.container}>
            <Image className={styles.bannerImage} src="/assets/images/banner" width={100} height={150} alt="banner"/>
        </div>
    )
}