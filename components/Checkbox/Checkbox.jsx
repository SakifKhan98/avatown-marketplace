import React from 'react'

const Checkbox = ({ option, handleChangeChecked }) => {
  // https://youtu.be/VVhnuOKVHRs
  const { id, checked, name, title } = option
  return (
    <div className='pt-1 px-1'>
      <input
        className='mx-2'
        id={id}
        type='checkbox'
        name={name}
        onChange={() => handleChangeChecked(id)}
        checked={checked}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  )
}

export default Checkbox
