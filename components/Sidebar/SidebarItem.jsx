import { useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

const SidebarItem = ({ item, handleChangedCategory }) => {
  const [open, setOpen] = useState(false)
  // const handleChangeCategory = (e, id) => {
  //   e.stopPropagation()
  //   console.log(id)
  // }
  // console.log(handleChangeCategory)

  // return <li key={item.id}>{item.title}</li>

  if (item.childrens) {
    return (
      <div className={open ? 'sidebar-item open' : 'sidebar-item'}>
        <div className='sidebar-title cursor-pointer'>
          <span>{item.title}</span>
          {open ? (
            <AiOutlineArrowUp onClick={() => setOpen(!open)} />
          ) : (
            <AiOutlineArrowDown onClick={() => setOpen(!open)} />
          )}
        </div>
        <div className='sidebar-content text-red-800'>
          {item.childrens.map((child, index) => (
            <SidebarItem
              handleChangedCategory={handleChangedCategory}
              key={index}
              item={child}
            />
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div onClick={(e) => handleChangedCategory(e, item.id)}>
        <div className='sidebar-item plain text-blue-800 cursor-pointer'>
          {item.title}
        </div>
      </div>
    )
  }
}
export default SidebarItem
