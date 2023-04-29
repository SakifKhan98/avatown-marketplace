import Layout from '@/components/Layout/Layout'
import ProductItem from '@/components/ProductItem/ProductItem'
import SelectMenu from '@/components/SelectMenu/SelectMenu'
import Pagination from '@/components/Pagination/Pagination'
import data from '@/utils/data'
import { useEffect, useMemo, useState } from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'

let PageSize = 12
export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const [productList, setProductList] = useState(data.products)
  const [resultsFound, setResultsFound] = useState(true)
  const [contentTypes, setContentTypes] = useState(data.contentData)
  // eslint-disable-next-line no-unused-vars
  const [categoryTypes, setCategoryTypes] = useState(data.categoryData)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleChangeChecked = (id) => {
    const contentTypeList = contentTypes
    const changeContentTypeList = contentTypeList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setContentTypes(changeContentTypeList)
  }

  const handleChangedCategory = (e, id) => {
    e.stopPropagation()
    console.log(id)
    // const categoryTypeList = categoryTypes
    // const changeCategoryType = categoryTypeList.map(
    //   (item) => item.id === id && item
    // )
    setSelectedCategory(id)
    console.log('selectedCategory', selectedCategory)
  }

  const applyFilters = () => {
    let updatedProductList = data.products

    // Category Filter
    if (selectedCategory) {
      updatedProductList = updatedProductList.filter(
        (item) => item.category.toLowerCase() === selectedCategory
      )
    }

    // Content Type Filter
    const cuisinesChecked = contentTypes
      .filter((item) => item.checked)
      .map((item) => item.title)
    if (cuisinesChecked.length) {
      updatedProductList = updatedProductList.filter((item) =>
        cuisinesChecked.includes(item.device)
      )
    }

    setProductList(updatedProductList)

    !updatedProductList.length ? setResultsFound(false) : setResultsFound(true)
  }

  useEffect(() => {
    applyFilters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentTypes, selectedCategory])

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return productList.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, productList])

  return (
    <Layout title='Home Page'>
      <div className='flex flex-row justify-between gap-2'>
        <div className='w-2/12'>
          <Sidebar
            categoryTypes={categoryTypes}
            contentTypes={contentTypes}
            handleChangeChecked={handleChangeChecked}
            handleChangedCategory={handleChangedCategory}
          />
        </div>

        <div className='w-10/12 p-10'>
          {resultsFound && (
            <div className='flex flex-row justify-between'>
              <h1 className='text-2xl font-medium'>All Items</h1>
              <div>
                <SelectMenu></SelectMenu>
              </div>
            </div>
          )}
          {resultsFound ? (
            <div className='flex flex-row flex-wrap justify-between'>
              {currentData.map((product) => (
                <ProductItem key={product.id} product={product}></ProductItem>
              ))}
            </div>
          ) : (
            <div className='text-2xl flex items-start justify-center'>
              <h2>No Products Found</h2>
            </div>
          )}
          <div className='flex items-center justify-center my-10'>
            <Pagination
              currentPage={currentPage}
              totalCount={productList.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
