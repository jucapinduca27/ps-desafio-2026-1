import styles from "./productCard.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { sportsItem } from "@/types/sportsItem"



export default function ProductCard(artigo: sportsItem){
    console.log(artigo)
    return (
        
        <div className = {styles.productCard}>
        <Link href={`/artigo/${artigo.id}`} className={styles.productLinks}>
            <Image className={styles.productImage} src={artigo.image_url} alt={artigo.name} width={300} height={300} style={{ objectFit: 'contain' }}/>
        </Link>
        <h1 className={styles.productName}>{artigo.name}</h1>
        <p className={styles.productCategory}>{artigo.category}</p>
        <p className={styles.productBrand}>{artigo.brand}</p>
        <p className={styles.productGender}>{artigo.gender}</p>
        <p className={styles.productSport}>{artigo.sport}</p>
        <p className={styles.productType}>{artigo.type}</p>
        <p className={styles.productYear}>{artigo.year}</p>
        <p className={styles.productPrice}>{artigo.price}</p>
        <p className={styles.productStock}>{artigo.quantity}</p>
        </div>
    )
}