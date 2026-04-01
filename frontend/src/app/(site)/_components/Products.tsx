import styles from "./products.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { sportsItem } from "@/types/sportsItem";
import ProductCard from "./ProductCard";
'use-client'
export default function Products() {
    const artigos: sportsItem[] = [{
        id: "1",
        name: "Chuteira Speed Pro",
        brand: "Nike",
        price: 299.90,
        sport: "Futebol",
        gender: "Masculino",
        type: "Chuteira",
        year: 2024,
        quantity: 15,
        image_url: "/assets/vapor.jpg",
        category: "Calçados",
    },
    {
        id: "2",
        name: "Chuteira Mercurial",
        brand: "Nike",
        price: 299.90,
        sport: "Futebol",
        gender: "Feminino",
        type: "Chuteira",
        year: 2023,
        quantity: 0,
        image_url: "/assets/mercurial.jpg",
        category: "Calçados",
    },
    {
        id: "3",
        name: "Chuteira F500",
        brand: "Umbro",
        price: 299.90,
        sport: "Futebol",
        gender: "Unissex",
        type: "Chuteira",
        year: 2020,
        quantity: 20,
        image_url: "/assets/f500.jpg",
        category: "Calçados",
    }];

    return (
        <section className={styles.products} id="products">
            <div className={styles.container}>
                <h1 className={styles.title}>Nossos produtos</h1>
                <div className={styles.productsList}>
                    {artigos.map((artigo)=>(
                        <ProductCard key={artigo.id} {...artigo}/>
                    ))}
                </div>
            </div>
        </section>
    )
}