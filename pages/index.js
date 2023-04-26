import Layout from '@/components/Layout/Layout'
import ProductItem from '@/components/ProductItem/ProductItem'
import data from '@/utils/data'

export default function Home() {
  return (
    <Layout title='Home Page'>
      <div className='flex flex-row flex-wrap justify-around'>
        {data.products.map((product) => (
          <ProductItem key={product.id} product={product}></ProductItem>
        ))}
      </div>
    </Layout>
  )
}
