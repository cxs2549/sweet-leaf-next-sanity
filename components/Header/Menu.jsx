import React, { useState, useRef, useEffect } from "react"
import { HiMenuAlt4 } from "react-icons/hi"
import { motion, AnimatePresence } from "framer-motion"
import { MdClose } from "react-icons/md"
const Menu = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef()
  useOnClickOutside(ref, () => setOpen(false))
  return (
    <div ref={ref} className="flex-1 xl:hidden relative">
      <button
        onClick={() => setOpen(true)}
        className="btn grid place-items-center"
      >
        <HiMenuAlt4 size={26} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 p-2 z-10 top-0"
          >
            <div className="bg-white shadow h-[500px] p-4 rounded-md">
              <div className="h-[44px] flex items-center justify-between">
                <h1>Menu</h1>
                <button
                  onClick={() => setOpen(false)}
                  className="btn grid place-items-center"
                >
                  <MdClose size={26} />
                </button>
              </div>
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

export default Menu
