import Link from "next/link"
import React from "react"
import { BsBag } from "react-icons/bs"
const Bag = () => {
  return (
    <Link href={`/bag`}>
      <button aria-label="Bag" className="btn grid place-items-center opacity-80 hover:opacity-100">
        <BsBag size={26} />
      </button>
    </Link>
  )
}

export default Bag
