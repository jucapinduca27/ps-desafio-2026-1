import styles from "./products.module.css"
import Image from 'next/image'
import Link from 'next/link'
export default function Products() {
    return (
        <section className={styles.products} id="products">
            <div className={styles.container}>
                <h1 className={styles.title}>Nossos produtos</h1>
                <div className={styles.productsList}>

                </div>
            </div>
        </section>
    )
}