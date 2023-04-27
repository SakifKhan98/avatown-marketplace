import React, { useState } from 'react'
import Checkbox from '../Checkbox/Checkbox'
import { TbTriangleInvertedFilled, TbTriangleFilled } from 'react-icons/tb'

const Sidebar = ({ contentTypes, handleChangeChecked }) => {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>SIDEBAR</h1>
      {/* Category filter */}
      <div className='my-3'>
        <p className='font-medium text-xl'>Categories</p>
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
