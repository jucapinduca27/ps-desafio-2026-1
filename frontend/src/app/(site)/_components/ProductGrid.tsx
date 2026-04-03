'use client';
import ProductCard from './ProductCard'
import { sportsItem } from '@/types/sportsItem'
import {useState} from 'react';
import styles from './productgrid.module.css'

interface ProductGridProps {
    artigosIniciais: sportsItem[];
}

export default function GridFilter({artigosIniciais}: ProductGridProps) {
  const arrayartigosIniciais= Array.isArray(artigosIniciais) ? artigosIniciais: [] // Transformar artigos em array pra n quebrar filtro
  const [categoria, setCategoria] = useState('Todos')

  const artigosFiltrados  = categoria == 'Todos'
  ? artigosIniciais
  : arrayartigosIniciais.filter(item => item.category == categoria);
  const arrayartigosFiltrados= Array.isArray(artigosFiltrados) ? artigosFiltrados: []

  const Categorias = ['Todos', ...new Set(arrayartigosIniciais.map(item=> item.category))];

  return(
    <div className={styles.Wrapper}>
      <main className={styles.main}>
        <div className={styles.filter}>
          <button className={`${styles.button} ${categoria === 'Todos' ? styles.active : ''}`}
          onClick={()=>setCategoria('Todos')}>Todos</button>
          <button className={`${styles.button} ${categoria === 'Vestuário' ? styles.active : ''}`}
          onClick={()=>setCategoria('Vestuário')}>Vestuário</button>
          <button className={`${styles.button} ${categoria === 'Calçados' ? styles.active : ''}`}
          onClick={()=>setCategoria('Calçados')}>Calçados</button>
          <button className={`${styles.button} ${categoria === 'Equipamentos' ? styles.active : ''}`}
          onClick={()=>setCategoria('Equipamentos')}>Equipamentos</button>
        </div>
        <div className={styles.productgrid}>
          {arrayartigosFiltrados.map(item=>(<ProductCard key={item.id} {...item}/>))}
        </div>
      </main>
    </div>
  );
}