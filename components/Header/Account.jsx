'use client'

import React, { useState, useRef, useEffect } from "react"
import { FiUser } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"
import { MdClose } from "react-icons/md"
import { useStateContext } from "../../context/StateContext"

const Account = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef()
  useOnClickOutside(ref, () => setOpen(false))
  const { signIn, signOut, signedIn } = useStateContext()
  const handleSignIn = () => {
    setTimeout(() => signIn(), 1000)
    setTimeout(() => setOpen(false), 1000)
  }
  const handleSignOut = () => {
    setTimeout(() => signOut(), 1000)
    setTimeout(() => setOpen(false), 1000)
  }
  return (
    <div ref={ref}>
      <button
        onClick={() => setOpen(true)}
        aria-label="Account"
        className="btn grid place-items-center opacity-80 hover:opacity-100"
      >
        <FiUser size={26} />
      </button>
      <AnimatePresence>
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 z-10"
          ></div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed w-full max-w-[375px] h-full overflow-y-auto right-0  z-50 top-0 bg-white dark:bg-neutral-900"
          >
            <div className="h-[66px] flex items-center justify-between px-4 border-b dark:border-neutral-700">
              <h1 className="text-2xl font-bold">Account</h1>
              <button
                onClick={() => setOpen(false)}
                className="btn grid place-items-center"
              >
                <MdClose size={26} />
              </button>
            </div>
            <ul className="px-4 divide-y dark:divide-neutral-700">
              {signedIn ? (
                <li
                  onClick={handleSignOut}
                  className="h-[52px]  flex items-center font-medium text-lg group cursor-pointer"
                >
                  <p className="group-hover:underline">Sign out</p>
                </li>
              ) : (
                <li
                  onClick={handleSignIn}
                  className="h-[52px]  flex items-center font-medium text-lg group cursor-pointer"
                >
                  <p className="group-hover:underline">Sign in</p>
                </li>
              )}

              <li className="h-[52px]  flex items-center  text-lg group cursor-pointer justify-between">
                <p className="group-hover:underline font-medium">Orders</p>
                <p className="text-base text-neutral-500 dark:text-neutral-400 group-hover:underline">
                  Track + manage
                </p>
              </li>
              <li className="h-[52px]  flex items-center  text-lg group cursor-pointer justify-between">
                <p className="group-hover:underline font-medium">My Store</p>
                <p className="text-base text-neutral-500 dark:text-neutral-400  group-hover:underline">
                  Los Angeles Koreatown
                </p>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}

export default Account
