import styles from "./productCard.module.css"
import Image from 'next/image'
import Link from 'next/link'
import {Product } from "@/types/product"



export default function ProductCard(artigo: Product){
    const semEstoque = artigo.quantity === 0; 
    return (
        <div className ={`${styles.productCard} ${semEstoque ? styles.semEstoque: ""}`}>
        <Link href={`/artigo/${artigo.id}`} className={styles.productLinks}>
            <div className={styles.imageWrapper}>
                <Image className={styles.productImage} 
                src={artigo.image_url} 
                alt={artigo.name}
                fill 
                style={{ objectFit: 'contain' }}
                />
            </div>
        </Link>
        <div className={styles.productInfo}>
            <span className = {styles.CategoryBadge}>{artigo.category}</span>
            <h3 className={styles.productName}>{artigo.name}</h3>

            <div className={styles.productDetails}>
                <span>{artigo.brand}</span>
            </div>

            <div className={styles.priceRow}>
                <p className={styles.productPrice}>
                    {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(artigo.price)}
                </p>
                <span className={`${styles.productStock} ${semEstoque ? styles.textEsgotado: ""}`}>
                    {semEstoque ? "Produto Esgotado": `${artigo.quantity} em estoque`}
                </span>
            </div>
            <button className={styles.productButton} disabled={semEstoque}>
                {semEstoque ? "Produto Indisponível": "Comprar"}
            </button>
        </div>
    </div>
    )
}