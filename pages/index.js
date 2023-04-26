import Layout from '@/components/Layout/Layout'
import ProductItem from '@/components/ProductItem/ProductItem'
import SelectMenu from '@/components/SelectMenu/SelectMenu'
import Pagination from '@/components/pagination/pagination'
import data from '@/utils/data'
import { useMemo, useState } from 'react'

let PageSize = 12

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return data.products.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])
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
            {currentData.map((product) => (
              <ProductItem key={product.id} product={product}></ProductItem>
            ))}
          </div>
          <div className='flex items-center justify-center my-10'>
            <Pagination
              currentPage={currentPage}
              totalCount={data.products.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
