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
  // const [resultsFound, setResultsFound] = useState(true)
  const [contentTypes, setContentTypes] = useState([
    {
      id: 'microsoft_hololens',
      checked: false,
      name: 'Microsoft HoloLens',
      title: 'Microsoft HoloLens'
    },
    {
      id: 'oculus_rift',
      checked: false,
      name: 'Oculus Rift',
      title: 'Oculus Rift'
    },
    { id: 'htc_vive', checked: false, name: 'HTC Vive', title: 'HTC Vive' },
    {
      id: 'ps_vr',
      checked: false,
      name: 'PlayStation VR',
      title: 'PlayStation VR'
    },
    {
      id: 'samsung_vr',
      checked: false,
      name: 'Samsung Gear VR',
      title: 'Samsung Gear VR'
    },
    {
      id: 'google_daydream',
      checked: false,
      name: 'Google Daydream View',
      title: 'Google Daydream View'
    },
    { id: 'other', checked: false, name: 'Other', title: 'Other' }
  ])

  const handleChangeChecked = (id) => {
    const contentTypeList = contentTypes
    const changeContentTypeList = contentTypeList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setContentTypes(changeContentTypeList)
  }
  // Microsoft HoloLens,Oculus Rift,HTC Vive,PlayStation VR,Samsung Gear VR,Google Daydream View,Other

  // const applyFilters = () => {
  //   const filteredData = data.products.filter((product) => {
  //     return contentTypes.find((contentType) => {
  //       if (contentType.checked) {
  //         return contentType.name === product.contentType
  //       }
  //     })
  //   })
  //   return filteredData
  // }

  const applyFilters = () => {
    let updatedProductList = data.products

    // Rating Filter
    // if (selectedRating) {
    //   updatedList = updatedList.filter(
    //     (item) => parseInt(item.rating) === parseInt(selectedRating)
    //   )
    // }

    // Category Filter
    // if (selectedCategory) {
    //   updatedList = updatedList.filter(
    //     (item) => item.category === selectedCategory
    //   )
    // }

    // Cuisine Filter
    const cuisinesChecked = contentTypes
      .filter((item) => item.checked)
      .map((item) => item.title)
    if (cuisinesChecked.length) {
      updatedProductList = updatedProductList.filter((item) =>
        cuisinesChecked.includes(item.device)
      )
    }

    // Search Filter
    // if (searchInput) {
    //   updatedList = updatedList.filter(
    //     (item) =>
    //       item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
    //       -1
    //   )
    // }

    // Price Filter
    // const minPrice = selectedPrice[0]
    // const maxPrice = selectedPrice[1]

    // updatedList = updatedList.filter(
    //   (item) => item.price >= minPrice && item.price <= maxPrice
    // )

    setProductList(updatedProductList)

    // !updatedProductList.length ? setResultsFound(false) : setResultsFound(true)
  }

  useEffect(() => {
    applyFilters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentTypes])

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
            contentTypes={contentTypes}
            handleChangeChecked={handleChangeChecked}
          />
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
