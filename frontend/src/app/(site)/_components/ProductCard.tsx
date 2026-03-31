import styles from "./productCard.module.css"
import Image from 'next/image'
import Link from 'next/link'
import Products from "./Products"


export default function ProductCard(){
    return (
        <div className = {styles.productCard}>
        <Link href={`product/${sportsItem.id}`} className={styles.productLinks}>
            <Image className={styles.productImage} src={ProductCard.images} alt="produto"></Image>
        </Link>
        <h1 className={styles.productName}>{ProductCard.name}</h1>
        <p className={styles.productCategory}>{ProductCard.category}</p>
        <p className={styles.productBrand}></p>
        <p className={styles.productYear}></p>
        <p className={styles.productPrice}></p>
        <p className={styles.productStock}>{Products.quantity}</p>
        </div>
    )
}