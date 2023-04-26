import React from 'react'

const Checkbox = ({ option, handleChangeChecked }) => {
  const { id, checked, name, title } = option
  return (
    <div>
      <input
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
