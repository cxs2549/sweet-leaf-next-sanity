import React from "react"
import { FiUser } from "react-icons/fi"
const Account = () => {
  return (
    <div>
      <button aria-label="Account" className="btn grid place-items-center">
        <FiUser size={26} />
      </button>
    </div>
  )
}

export default Account
