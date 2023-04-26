import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
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
  const [isContextMenuActive, setContextMenuActive] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
  }
  const handleContextMenu = (e) => {
    e.stopPropagation()
    setContextMenuActive(true)
  }

  const handleCopyToClipboard = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 4000)
    // setContextMenuActive(false)
  }

  // Component for tooltip - Closes if clicked outside
  // https://blog.logrocket.com/detect-click-outside-react-component-how-to/
  const ToolTipBox = (props) => {
    const ref = useRef(null)
    const { onClickOutside } = props

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside && onClickOutside()
          setIsCopied(false)
        }
      }
      document.addEventListener('click', handleClickOutside, true)
      return () => {
        document.removeEventListener('click', handleClickOutside, true)
      }
    }, [onClickOutside])

    if (!props.show) return null

    return (
      <div
        className='absolute flex px-1.5 py-0.5 -top-4 right-4 bg-white rounded-md border border-gray-700 text-gray-700 hover:cursor-pointer gap-1'
        ref={ref}
        onClick={() => handleCopyToClipboard(`/product/${product.id}`)}
      >
        <AiOutlineLink className='w-5 h-5' />
        <span className='text-sm'>Copy Link</span>
      </div>
    )
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
            <div className='flex gap-2 my-2'>
              <Image
                className='w-auto h-auto rounded-full object-cover'
                src={product.seller_image}
                alt='Seller Image'
                width={16}
                height={16}
              />
              <p className='text-sm'>{product.seller_name}</p>
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
              <ToolTipBox
                show={isContextMenuActive}
                onClickOutside={() => {
                  setContextMenuActive(false)
                }}
              />
              {isCopied && (
                <div className='absolute flex px-1.5 py-0.5 -top-10 right-4 bg-gray-700 rounded-md border border-gray-700 text-white hover:cursor-pointer gap-1'>
                  {/* <AiOutlineLink className='w-5 h-5' /> */}
                  <span className='text-xs'>Copied!</span>
                </div>
              )}
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
