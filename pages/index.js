import Layout from '@/components/Layout/Layout'
import ProductItem from '@/components/ProductItem/ProductItem'
import SelectMenu from '@/components/SelectMenu/SelectMenu'
import data from '@/utils/data'

export default function Home() {
  return (
    <Layout title='Home Page'>
      <div className='flex flex-row justify-between gap-2'>
        <div className='w-2/12'>
          <h1 className='text-2xl font-bold'>SIDEBAR</h1>
        </div>
        <div className='w-10/12 p-10'>
          <div className='flex flex-row justify-between'>
            <h1 className='text-2xl font-medium'>All Items</h1>
            <div>
              <SelectMenu></SelectMenu>
            </div>
          </div>
          <div className='flex flex-row flex-wrap justify-between'>
            {data.products.map((product) => (
              <ProductItem key={product.id} product={product}></ProductItem>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
