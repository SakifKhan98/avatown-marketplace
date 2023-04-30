import React, { useState } from 'react'
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar
} from 'react-icons/ai'
import data from '@/utils/data'
import Image from 'next/image'
import ProductItem from '@/components/ProductItem/ProductItem'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout/Layout'
import Link from 'next/link'

const ProductScreen = () => {
  const [qty, setQty] = useState(1)
  const [index, setIndex] = useState(0)
  const query = useRouter()

  const sliderImage = [
    'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png'
  ]
  const { id } = query.query
  const product = data.products.find(
    (singleProduct) => singleProduct.id === parseInt(id)
  )
  if (!product) return <div>Product Not Found</div>
  console.log(product)
  const incQty = () => {
    setQty((prevQty) => prevQty + 1)
  }

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1
      return prevQty - 1
    })
  }
  const {
    title,
    image,
    price,
    description,
    rating,
    category,
    seller_name,
    seller_image
  } = product
  return (
    <Layout title='Item Page'>
      <div className='m-10 mb-14'>
        <div className='flex flex-row items-center gap-6 m-10'>
          <div>
            <div>
              <Image
                className='border rounded-xl bg-gray-300 min-w-[450px] min-h-[450px]'
                src={image}
                alt='product image'
                width={450}
                height={450}
              />
            </div>
            <div className='flex gap-3 mt-5'>
              {sliderImage?.map((item, i) => (
                <Image
                  key={i}
                  src={item}
                  className={
                    i === index
                      ? 'border rounded-lg cursor-pointer bg-red-500'
                      : 'border rounded-lg bg-slate-300  cursor-pointer '
                  }
                  onMouseEnter={() => setIndex(i)}
                  width={70}
                  height={70}
                  alt='image product'
                />
              ))}
            </div>
          </div>

          <div className='product-detail-desc mt-4'>
            <h1 className='font-bold text-4xl'>{title}</h1>
            <div className='flex items-center gap-2 mt-3'>
              <div className='text-yellow-500 flex items-center'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p className=''>({rating})</p>
            </div>
            <div className='my-5 mr-5'>
              <h4 className='font-medium text-lg'>Details: </h4>
              <p>{description}</p>
            </div>
            <div className='flex gap-2 items-center my-5 mr-5'>
              <h4 className='font-medium text-lg'>Category: </h4>
              <p>{category}</p>
            </div>
            <div className='flex gap-2 items-center my-5 mr-5'>
              <h4 className='font-medium text-lg'>Seller: </h4>
              <Image
                className='w-auto h-auto rounded-full object-cover'
                src={seller_image}
                alt='Seller Image'
                width={30}
                height={30}
              />
              <p>{seller_name}</p>
            </div>
            <p className='font-bold mt-4 text-2xl text-violet-700'>
              Price: ${price}
            </p>
            <div className='flex gap-5 my-3 items-center'>
              <h3>Quantity:</h3>
              <p className='flex items-center gap-3 justify-between border border-gray-500 p-3'>
                <span
                  className='border-r border-r-gray-600 p-1 text-red-500 cursor-pointer'
                  onClick={decQty}
                >
                  <AiOutlineMinus />
                </span>
                <span className='font-medium text-xl'>{qty}</span>
                <span
                  className='border-l border-l-gray-600 p-1 text-green-500 cursor-pointer'
                  onClick={incQty}
                >
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className='flex gap-8'>
              <button
                type='button'
                className='py-2 px-5 border border-violet-500 mt-8 text-xl font-base cursor-pointer hover:bg-violet-500 hover:text-white hover:scale-500 transition ease-in-out duration-500'
                onClick={() => alert(`Added ${qty} units to Cart`)}
              >
                Add to Cart
              </button>
              <button
                type='button'
                className='py-2 px-5 border border-violet-500 hover:border hover:border-violet-500 hover:bg-white hover:text-slate-700 mt-8 text-xl font-base cursor-pointer bg-violet-500 text-white hover:scale-200 transition ease-in-out duration-500'
                onClick={() => console.log('Added to Cart')}
              >
                <Link href='/cart'>Buy Now</Link>
              </button>
            </div>
          </div>
        </div>

        <div className='m-20 h-auto'>
          <h2 className='text-center font-bold text-4xl text-violet-500'>
            You may also like
          </h2>
          <div className='marquee'>
            <div className='flex justify-center gap-5 mt-5 track'>
              {data.products.map((item) => (
                <ProductItem key={item.id} product={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductScreen
