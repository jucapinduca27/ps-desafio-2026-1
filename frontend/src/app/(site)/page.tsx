import Banner from "./_components/Banner"
import Products from "./_components/Products"

export default async function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Banner/>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 20px' }}>
        <Products/>
      </div>
    </main>
    
  )
}
