import React, { useState } from 'react'
import { TbTriangleInvertedFilled, TbTriangleFilled } from 'react-icons/tb'

const SelectMenu = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(0)

  const optionsList = [
    'Featured',
    'Price: Low to High',
    'Price: High to Low',
    'Customer Review',
    'New',
    'Ploygon: Low to High',
    'Polygon: High to Low'
  ]

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen)
  }

  const setSelectedThenCloseDropdown = (index) => {
    setSelectedOption(index)
    setIsOptionsOpen(false)
  }

  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault()
        setSelectedThenCloseDropdown(index)
        break
      default:
        break
    }
  }

  const handleListKeyDown = (e) => {
    switch (e.key) {
      case 'Escape':
        e.preventDefault()
        setIsOptionsOpen(false)
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedOption(
          selectedOption - 1 >= 0 ? selectedOption - 1 : optionsList.length - 1
        )
        break
      case 'ArrowDown':
        e.preventDefault()
        setSelectedOption(
          selectedOption == optionsList.length - 1 ? 0 : selectedOption + 1
        )
        break
      default:
        break
    }
  }

  return (
    <div className='flex items-center p-5'>
      <div className='w-auto text-sm'>
        <button
          type='button'
          aria-haspopup='listbox'
          aria-expanded={isOptionsOpen}
          className='flex relative items-center gap-2 py-0.5 px-2 border border-gray-500 rounded hover:pointer mb-2'
          onClick={toggleOptions}
          onKeyDown={handleListKeyDown}
        >
          Sort by {optionsList[selectedOption]}
          {isOptionsOpen ? <TbTriangleFilled /> : <TbTriangleInvertedFilled />}
        </button>
        <ul
          className={`${
            isOptionsOpen
              ? 'block absolute border border-gray-500 bg-white'
              : 'hidden absolute'
          }`}
          role='listbox'
          aria-activedescendant={optionsList[selectedOption]}
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
        >
          {optionsList.map((option, index) => (
            <li
              className='px-2 py-0.5 active:bg-gray-400 hover:bg-gray-400 focus:bg-gray-400 cursor-pointer'
              key={index}
              id={option}
              role='option'
              aria-selected={selectedOption == index}
              tabIndex={0}
              onKeyDown={handleKeyDown(index)}
              onClick={() => {
                setSelectedThenCloseDropdown(index)
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SelectMenu
