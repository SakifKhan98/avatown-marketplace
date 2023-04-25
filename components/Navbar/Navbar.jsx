import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import avaTownLogo from '../../public/avatown_logo_white.png'
import bellAlertIcon from '../../public/icons/BellAlert.svg'
import shoppingCartIcon from '../../public/icons/ShoppingCart.svg'
import userIcon from '../../public/icons/User.svg'

// https://dev.to/dmuraco3/responsive-global-navbar-in-nextjs-with-tailwindcss-45p4

// function NavLink({ to, children }) {
//   return (
//     <a href={to} className={`mx-4`}>
//       {children}
//     </a>
//   )
// }

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className='flex items-center justify-center filter drop-shadow-md bg-white h-20'>
        {' '}
        {/*logo container*/}
        <Link className='text-xl font-semibold' href='/'>
          LOGO
        </Link>
      </div>
      <div className='flex flex-col ml-4'>
        <a
          className='text-xl font-medium my-4'
          href='/about'
          onClick={() =>
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }
        >
          About
        </a>
        <a
          className='text-xl font-normal my-4'
          href='/contact'
          onClick={() =>
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }
        >
          Contact
        </a>
      </div>
    </div>
  )
}

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className='flex filter drop-shadow-md bg-violet-900 px-4 py-4 h-14 items-center justify-evenly text-white'>
      <MobileNav open={open} setOpen={setOpen} />
      <div className='w-2/12'>
        <Link className='text-2xl font-semibold' href='/'>
          <Image className='w-40' src={avaTownLogo} alt='Avatown Logo' />
        </Link>
      </div>
      <div className='w-4/12'>
        <Link className='text-xl underline' href='/'>
          <span>Go to Marketpage</span>
        </Link>
      </div>
      {/* https://www.tailwindcsscomponent.com/searchbar */}
      <div className='w-4/12 '>
        <div className='mx-auto'>
          <div className='relative flex items-center w-full h-8 rounded-md focus-within:shadow-lg bg-white overflow-hidden'>
            <input
              className='peer h-full w-full outline-none text-sm text-gray-700 px-4'
              type='text'
              id='search'
              placeholder='Search something..'
            />
            <div className='grid place-items-center h-full w-10 text-gray-300'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className='w-1/12'>
        {/*
        <div
          className='z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden'
          onClick={() => {
            setOpen(!open)
          }}
        >
          // hamburger button 
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? 'rotate-45 translate-y-3.5' : ''
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? '-rotate-45 -translate-y-3.5' : ''
            }`}
          />
        </div>
      */}

        <div className='flex justify-end gap-3'>
          {/* <NavLink to='/contact'>CONTACT</NavLink>
          <NavLink to='/about'>ABOUT</NavLink> */}
          <Link className='bg-gray-800 rounded relative' href='/'>
            <Image
              stroke='white'
              className='h-10 w-10 p-1'
              src={bellAlertIcon}
              alt='Bell Icon'
            />
            <div className='absolute -top-1 -right-1 block text-white text-center bg-red-500 rounded-full h-4 w-4'>
              <span className='absolute right-1 text-xs'>6</span>
            </div>
          </Link>
          <Link className='bg-gray-800 rounded relative' href='/'>
            <Image
              stroke='white'
              className='h-10 w-10 p-1'
              src={shoppingCartIcon}
              alt='Bell Icon'
            />
            <div className='absolute -top-1 -right-1 block text-white text-center bg-red-500 rounded-full h-4 w-4'>
              <span className='absolute right-1 text-xs'>2</span>
            </div>
          </Link>
          <Link className='bg-gray-800 rounded' href='/'>
            <Image
              stroke='white'
              className='h-10 w-10 p-1'
              src={userIcon}
              alt='Bell Icon'
            />
          </Link>
        </div>
      </div>
    </nav>
  )

  // return (
  // <nav className='bg-gray-800'>
  //   <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
  //     <div className='relative flex h-16 items-center justify-between'>
  //       <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
  //         <button
  //           type='button'
  //           className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
  //           aria-controls='mobile-menu'
  //           aria-expanded='false'
  //         >
  //           <span className='sr-only'>Open main menu</span>
  //           <svg
  //             className='block h-6 w-6'
  //             fill='none'
  //             viewBox='0 0 24 24'
  //             stroke-width='1.5'
  //             stroke='currentColor'
  //             aria-hidden='true'
  //           >
  //             <path
  //               stroke-linecap='round'
  //               stroke-linejoin='round'
  //               d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
  //             />
  //           </svg>
  //           <svg
  //             className='hidden h-6 w-6'
  //             fill='none'
  //             viewBox='0 0 24 24'
  //             stroke-width='1.5'
  //             stroke='currentColor'
  //             aria-hidden='true'
  //           >
  //             <path
  //               stroke-linecap='round'
  //               stroke-linejoin='round'
  //               d='M6 18L18 6M6 6l12 12'
  //             />
  //           </svg>
  //         </button>
  //       </div>
  //       <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
  //         <div className='flex flex-shrink-0 items-center'>
  //           <img
  //             className='block h-8 w-auto lg:hidden'
  //             src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
  //             alt='Your Company'
  //           />
  //           <img
  //             className='hidden h-8 w-auto lg:block'
  //             src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
  //             alt='Your Company'
  //           />
  //         </div>
  //         <div className='hidden sm:ml-6 sm:block'>
  //           <div className='flex space-x-4'>
  //             <a
  //               href='#'
  //               className='hover:bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium'
  //               aria-current='page'
  //             >
  //               Dashboard
  //             </a>
  //             <a
  //               href='#'
  //               className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
  //             >
  //               Team
  //             </a>
  //             <a
  //               href='#'
  //               className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
  //             >
  //               Projects
  //             </a>
  //             <a
  //               href='#'
  //               className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
  //             >
  //               Calendar
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //       <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
  //         <button
  //           type='button'
  //           className='rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
  //         >
  //           <span className='sr-only'>View notifications</span>
  //           <svg
  //             className='h-6 w-6'
  //             fill='none'
  //             viewBox='0 0 24 24'
  //             stroke-width='1.5'
  //             stroke='currentColor'
  //             aria-hidden='true'
  //           >
  //             <path
  //               stroke-linecap='round'
  //               stroke-linejoin='round'
  //               d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
  //             />
  //           </svg>
  //         </button>

  //         <div className='relative ml-3'>
  //           <div>
  //             <button
  //               type='button'
  //               className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
  //               id='user-menu-button'
  //               aria-expanded='false'
  //               aria-haspopup='true'
  //             >
  //               <span className='sr-only'>Open user menu</span>
  //               <img
  //                 className='h-8 w-8 rounded-full'
  //                 src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  //                 alt=''
  //               />
  //             </button>
  //           </div>
  //           <div
  //             className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
  //             role='menu'
  //             aria-orientation='vertical'
  //             aria-labelledby='user-menu-button'
  //             tabindex='-1'
  //           >
  //             <a
  //               href='#'
  //               className='block px-4 py-2 text-sm text-gray-700'
  //               role='menuitem'
  //               tabindex='-1'
  //               id='user-menu-item-0'
  //             >
  //               Your Profile
  //             </a>
  //             <a
  //               href='#'
  //               className='block px-4 py-2 text-sm text-gray-700'
  //               role='menuitem'
  //               tabindex='-1'
  //               id='user-menu-item-1'
  //             >
  //               Settings
  //             </a>
  //             <a
  //               href='#'
  //               className='block px-4 py-2 text-sm text-gray-700'
  //               role='menuitem'
  //               tabindex='-1'
  //               id='user-menu-item-2'
  //             >
  //               Sign out
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  //   <div className='sm:hidden' id='mobile-menu'>
  //     <div className='space-y-1 px-2 pb-3 pt-2'>
  //       <a
  //         href='#'
  //         className='bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium'
  //         aria-current='page'
  //       >
  //         Dashboard
  //       </a>
  //       <a
  //         href='#'
  //         className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
  //       >
  //         Team
  //       </a>
  //       <a
  //         href='#'
  //         className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
  //       >
  //         Projects
  //       </a>
  //       <a
  //         href='#'
  //         className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
  //       >
  //         Calendar
  //       </a>
  //     </div>
  //   </div>
  // </nav>
  // )
}

export default Navbar
