import Head from 'next/head'
import React from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + '- Avatown' : 'Avatown - Marketplace'}</title>
        <meta name='description' content='Avatar Marketplace' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex min-h-screen flex-col justify-between'>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>Footer</footer>
      </div>
    </>
  )
}

export default Layout
