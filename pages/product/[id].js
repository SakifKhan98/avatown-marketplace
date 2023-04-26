import data from '@/utils/data'
import { useRouter } from 'next/router'
import React from 'react'

const ProductScreen = () => {
  const query = useRouter()
  const { id } = query.query
  const product = data.products.find(
    (singleProduct) => singleProduct.id === parseInt(id)
  )
  console.log('SEARCHED PRODUCT', product)
  return <div>SINGLE PRODUCT TITLE: {product.title}</div>
}

export default ProductScreen
