import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false)

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
        <div className='sidebar-content'>
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <Link href={`products${item.path}` || '#'} className='sidebar-item plain'>
        {item.title}
      </Link>
    )
  }
}
