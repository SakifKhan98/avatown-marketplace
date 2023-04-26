import React from 'react'
import Checkbox from '../Checkbox/Checkbox'

const Sidebar = ({ contentTypes, handleChangeChecked }) => {
  return (
    <>
      <h1>SIDEBAR</h1>
      {/* Category filter */}
      <div></div>
      {/* Contents filter */}
      <div>
        <p>Contents</p>
        {contentTypes.map((contentType) => (
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
      <div>
        <p>Auto Upload Support</p>
      </div>
    </>
  )
}

export default Sidebar
