import Header from './_components/Header'
import ProductCard from './_components/ProductCard'
import { sportsItem } from '@/types/sportsItem'

export default async function Home() {
  const response = await fetch('http://localhost:8000/api/products', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  });
  const json = await response.json();
  const artigos = json.data || json;
  //const artigos: sportsItem[] = await response.json();
  console.log("Tipo de artigos:", typeof artigos);
  console.log("Conteúdo de artigos:", artigos);
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Vitrine de Equipamentos</h1>
          <p className="text-gray-500">Confira nossos artigos esportivos em destaque.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.isArray(artigos) && artigos.map(item => ( // Corrigir erro de artigos array
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </main>
    </>
  )
}