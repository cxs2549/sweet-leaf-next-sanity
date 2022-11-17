import Link from "next/link"
import React from "react"
import Account from "./Account"
import Cart from "./Cart"
import Menu from "./Menu"

const Logo = () => (
  <Link href={`/`} className="absolute left-1/2 -translate-x-1/2">
    <img src="/logo.png" alt="Sweet Leaf Logo" className="w-10" />
  </Link>
)

const MobileSearchbar = () => (
  <input
    type="search"
    placeholder="Search"
    className="bg-neutral-100 h-[44px] rounded-lg w-full px-3"
  />
)

const Header = () => {
  return (
    <header className="shadow">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-[66px] relative gap-5">
        <Menu />
        <Logo />
        <Account />
        <Cart />
      </div>
      <div className="max-w-7xl mx-auto px-4 flex items-center pb-4 relative">
        <MobileSearchbar />
      </div>
    </header>
  )
}

export default Header
