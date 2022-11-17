import React, { useState, useRef, useEffect } from "react"
import { FiUser } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"
import { MdClose } from "react-icons/md"

const Account = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef()
  useOnClickOutside(ref, () => setOpen(false))
  return (
    <div ref={ref}>
      <button
        onClick={() => setOpen(true)}
        aria-label="Account"
        className="btn grid place-items-center"
      >
        <FiUser size={26} />
      </button>
      <AnimatePresence>
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/25 z-10"
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
            className="fixed w-full max-w-[375px] h-full overflow-y-auto right-0  z-10 top-0 bg-white"
          >
            <div className="h-[66px] flex items-center justify-between px-4 border-b">
              <h1 className="text-2xl font-bold">Account</h1>
              <button
                onClick={() => setOpen(false)}
                className="btn grid place-items-center"
              >
                <MdClose size={26} />
              </button>
            </div>
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
