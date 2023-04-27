import { useState } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false)

  if (item.childrens) {
    return (
      <div className={open ? 'sidebar-item open' : 'sidebar-item'}>
        <div className='sidebar-title cursor-pointer'>
          <span>
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </span>
          {/* <i
            className='bi-chevron-down toggle-btn'
            onClick={() => setOpen(!open)}
          ></i> */}
          <AiOutlineArrowDown onClick={() => setOpen(!open)} />
        </div>
        <div className='sidebar-content'>
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <a href={item.path || '#'} className='sidebar-item plain'>
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </a>
    )
  }
}
