import Link from "next/link"
import React from "react"
import Account from "./Account"
import Bag from "./Bag"
import Menu from "./Menu"
import Image from "next/image"
import { BiSearch } from "react-icons/bi"

const Logo = () => (
  <Link
    href={`/`}
    className="absolute left-1/2 -translate-x-1/2 md:static md:-order-1 md:left-0 md:translate-x-0 w-[44px] flex-shrink-0"
  >
    <Image
      height={44}
      width={44}
      src="/logo.png"
      alt="Sweet Leaf Logo"
      className="w-10"
    />
  </Link>
)

const MobileSearchbar = () => (
  <div className="relative w-full">
    <input
      type="search"
      placeholder="Search"
      className="bg-neutral-100 h-[44px] rounded-full w-full px-3 dark:bg-neutral-800 focus:outline-none focus:ring-0 focus:border-green-200 border border-transparent"
    />
    <button aria-label="Search" className="absolute  right-0  h-[44px] w-[44px] top-0 flex items-center justify-center rounded-r-md">
      <BiSearch size={26} />
    </button>
  </div>
)

const Searchbar = () => (
  <div className="hidden md:block max-w-xs lg:max-w-md xl:max-w-xl flex-1 relative w-full ">
   <input
      type="search"
      placeholder="Search"
      className="bg-neutral-100 h-[44px] rounded-full w-full px-3 dark:bg-neutral-800 focus:outline-none focus:ring-0 focus:border-green-200 border border-transparent"
    />
    <button aria-label="Search" className="absolute  right-0  h-[44px] w-[44px] top-0 flex items-center justify-center rounded-r-md">
      <BiSearch size={26} />
    </button>
  </div>
)

const NavLinks = () => (
  <ul className="hidden xl:flex xl:mx-8 gap-12 flex-shrink-0">
    {[
      { name: "categories" },
      { name: "trending" },
      { name: `what's new` },
      { name: "pickup & delivery" },
    ].map((link) => (
      <li key={link.name}>
        <p className="capitalize font-bold">{link.name}</p>
      </li>
    ))}
  </ul>
)

const Header = () => {
  return (
    <header className="shadow">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-[66px] relative gap-1 xl:justify-between">
        <Menu />
        <Logo />
        <NavLinks />
        <Searchbar />
        <Account />
        <Bag />
      </div>
      <div className="max-w-7xl mx-auto px-4 flex items-center pb-4 relative md:hidden">
        <MobileSearchbar />
      </div>
    </header>
  )
}

export default Header
