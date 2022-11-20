import Link from "next/link"
import React from "react"
import { BsBag } from "react-icons/bs"
const Bag = () => {
  return (
    <Link href={`/bag`} className="relative">
      <button aria-label="Bag" className="btn grid place-items-center opacity-80 hover:opacity-100">
        <BsBag size={26} />
      </button>
      <div className="absolute bg-green-500 text-white right-0 rounded-full text-xs font-bold grid place-items-center w-4 h-4 -translate-y-5">0</div>
    </Link>
  )
}

export default Bag
