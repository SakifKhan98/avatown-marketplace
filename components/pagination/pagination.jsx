import React from 'react'
import { usePagination, DOTS } from './usePagination'

// https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize
  } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  })

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  let lastPage = paginationRange[paginationRange.length - 1]
  return (
    <ul className='pagination-container pagination-bar'>
      <li
        className={`${
          currentPage === 1 ? 'disabled pagination-item' : 'pagination-item'
        }`}
        onClick={onPrevious}
      >
        <div className='arrow left' />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index} className='pagination-item dots'>
              &#8230;
            </li>
          )
        }

        return (
          <li
            key={index}
            className={`${
              pageNumber === currentPage
                ? 'selected pagination-item'
                : 'pagination-item'
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        )
      })}
      <li
        className={`${
          currentPage === lastPage
            ? 'disabled pagination-item'
            : 'pagination-item'
        }`}
        onClick={onNext}
      >
        <div className='arrow right' />
      </li>
    </ul>
  )
}

export default Pagination
