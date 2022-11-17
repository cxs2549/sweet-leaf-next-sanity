import React from "react"
import { BsBag } from "react-icons/bs"
const Bag = () => {
  return (
    <div>
      <button aria-label="Bag" className="btn grid place-items-center">
        <BsBag size={26} />
      </button>
    </div>
  )
}

export default Bag
