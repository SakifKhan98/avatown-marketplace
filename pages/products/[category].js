import data from '@/utils/data'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Layout from '@/components/Layout/Layout'
import SelectMenu from '@/components/SelectMenu/SelectMenu'
import ProductItem from '@/components/ProductItem/ProductItem'
import Pagination from '@/components/Pagination/Pagination'
import Sidebar from '@/components/Sidebar/Sidebar'
let PageSize = 12

const ProductsScreen = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const query = useRouter()
  const { category } = query.query
  const categorizedProducts = []
  data.products.map(
    (singleProduct) =>
      singleProduct.category.toLowerCase() === category.toLowerCase() &&
      categorizedProducts.push(singleProduct)
  )
  // console.log(category, data.products)
  console.log('SEARCHED PRODUCT', categorizedProducts)
  return (
    <Layout title='Home Page'>
      <div className='flex flex-row justify-between gap-2'>
        <div className='w-2/12'>
          <Sidebar
          // contentTypes={contentTypes}
          // autoUploadTypes={autoUploadTypes}
          // handleChangeChecked={handleChangeChecked}
          />
        </div>
        <div className='w-10/12 p-10'>
          <div className='flex flex-row justify-between'>
            <h1 className='text-2xl font-medium'>
              All Items {'>'} Category {'>'} {category}
            </h1>
            <div>
              <SelectMenu></SelectMenu>
            </div>
          </div>
          <div className='flex flex-row flex-wrap justify-between'>
            {categorizedProducts.map((product) => (
              <ProductItem key={product.id} product={product}></ProductItem>
            ))}
          </div>
          <div className='flex items-center justify-center my-10'>
            <Pagination
              currentPage={currentPage}
              totalCount={categorizedProducts.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductsScreen
