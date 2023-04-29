import React from 'react'
import Checkbox from '../Checkbox/Checkbox'
import SidebarItem from './SidebarItem'
// import items from '@/utils/sidebar.json'
// Toys,Animal,Electronics,Home,Beauty,Books,Sports,Music,Fashion,Food

const Sidebar = ({
  contentTypes,
  categoryTypes,
  handleChangeChecked,
  // handleChangeCategory,
  handleChangedCategory
}) => {
  return (
    <div className='sidebar p-4 h-full'>
      {/* Category filter */}
      <div className='my-3'>
        <p className='font-medium text-xl my-3'>Categories</p>
        {categoryTypes.map((categoryType) => (
          <SidebarItem
            key={categoryType.id}
            item={categoryType}
            handleChangedCategory={handleChangedCategory}
          />
        ))}
      </div>
      {/* Contents filter */}
      <div className='my-3'>
        <p className='font-medium text-xl'>Contents</p>
        {contentTypes?.map((contentType) => (
          <Checkbox
            key={contentType.id}
            option={contentType}
            handleChangeChecked={handleChangeChecked}
          />
        ))}
      </div>
      {/* price filter */}
      <div></div>
      {/* polygon filter */}
      <div></div>
      {/* Auto-Upload filter */}
      {/* <div className='my-3'>
        <p className='font-medium text-xl'>Auto Upload Support</p>
        {autoUploadTypes.map((autoUploadType) => (
          <Checkbox
            key={autoUploadType.id}
            option={autoUploadType}
            handleChangeChecked={() => {
              console.log('Selected Support Type')
            }}
          />
        ))}
      </div> */}
    </div>
  )
}

export default Sidebar
