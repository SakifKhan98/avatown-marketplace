import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillStar,
  AiOutlineLink,
  AiOutlineStar
} from 'react-icons/ai'
import { MdCircle } from 'react-icons/md'
import { FiShare } from 'react-icons/fi'

const ProductItem = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isContextMenuOpen, setContextMenuOpen] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
  }
  const handleContextMenu = () => {
    setContextMenuOpen(!isContextMenuOpen)
  }
  return (
    <div className='my-5'>
      <div className='h-100 max-w-sm rounded overflow-hidden shadow-lg'>
        <Link href={`/product/${product.slug}`}>
          <Image
            className='w-full rounded'
            src={product.image}
            alt='first product'
            width={300}
            height={300}
          />
        </Link>
        <div className='px-6 py-4'>
          <Link href={`/product/${product.slug}`}>
            <div className='text-base mb-2 font-medium'>
              {product.title} {product.seller_name} {product.device}
            </div>
          </Link>
          <div className='flex flex-row justify-between items-end'>
            <div className='flex flex-row gap-3'>
              <div className='flex flex-row text-yellow-500'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p className='text-sm'>{product.rating} & 1000likes</p>
            </div>
            <div className='hover:cursor-pointer' onClick={handleLike}>
              {isLiked ? (
                <AiFillHeart className='w-6 h-6 text-red-600' />
              ) : (
                <AiOutlineHeart className='w-6 h-6' />
              )}
            </div>
          </div>
          <Link href='/'>
            <div className='flex gap-3 my-2'>
              <Image
                className='w-min rounded-full object-cover'
                src={product.seller_image}
                alt='Seller Image'
                width={16}
                height={16}
              />
              <p>{product.seller_name}</p>
            </div>
          </Link>
          <div className='flex flex-row'>
            <sub className='text-xs'>$</sub>
            <span className='text-xl font-medium'>{product.price}.00</span>
          </div>
          <div className='flex flex-row gap-2'>
            <MdCircle className='w-5 h-5 text-cyan-500' />
            <span className='text-sm capitalize'>{product.device}</span>
          </div>
          {product?.auto_upload ? (
            <div className='flex flex-row justify-between gap-4 relative'>
              <p className='text-sm'>
                Auto upload service ready, you can use this avatar within 24
                hours.
              </p>
              <FiShare
                className='w-8 h-8 hover:cursor-pointer'
                onClick={handleContextMenu}
              />
              <div className='absolute flex px-1.5 py-0.5 top-0 right-0 bg-white rounded-md border border-gray-700 text-gray-700 hover:cursor-pointer gap-1'>
                <AiOutlineLink className='w-5 h-5' />
                <span className='text-sm'>Copy Link</span>
              </div>
            </div>
          ) : (
            <p className='text-sm'>
              Auto Upload Not available, you can not use it withing 24 hours.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductItem
