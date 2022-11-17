import Link from 'next/link'
import React from 'react'
import Account from './Account'
import Cart from './Cart'
import Menu from './Menu'

const Logo = () => <Link href={`/`} className="absolute left-1/2 -translate-x-1/2">Logo</Link>


const Header = () => {
  return (
    <header className='shadow'>
        <div className="max-w-7xl mx-auto px-4 flex items-center h-[66px] relative gap-5">
            <Menu />
            <Logo />
            <Account />
            <Cart />
        </div>
        <div className="max-w-7xl mx-auto px-4 flex items-center pb-4 relative gap-5">
            <input type="search" placeholder='Search' className='bg-neutral-100 py-3 rounded-lg w-full px-3' />
        </div>
    </header>
  )
}

export default Header