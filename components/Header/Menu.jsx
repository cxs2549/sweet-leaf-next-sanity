import React, { useState, useRef, useEffect } from "react"
import { HiMenuAlt4 } from "react-icons/hi"
import { motion, AnimatePresence } from "framer-motion"
import { MdClose } from "react-icons/md"
import { BsChevronRight } from "react-icons/bs"
const Menu = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef()
  useOnClickOutside(ref, () => setOpen(false))
  return (
    <div ref={ref} className="flex-1 xl:hidden relative">
      <button
        onClick={() => setOpen(true)}
        aria-label="Menu"
        className="btn grid place-items-center"
      >
        <HiMenuAlt4 size={26} />
      </button>
      <AnimatePresence>
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed z-10 inset-0 bg-black/25"
          ></div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween" }}
            className="fixed max-w-[375px] h-full overflow-y-auto left-0  z-10 top-0"
          >
            <div className="bg-white shadow max-w-[375px] overflow-y-auto h-full">
              <div className="h-[66px] flex items-center justify-between px-4 border-b">
                <h1 className="text-2xl font-bold">Menu</h1>
                <button
                  onClick={() => setOpen(false)}
                  className="btn grid place-items-center"
                >
                  <MdClose size={26} />
                </button>
              </div>

              {/* categories */}
              <div className="border-b pb-4">
                <div className="h-[66px] flex items-center justify-between px-4">
                  <h2 className="text-xl font-bold">Categories</h2>
                  <button
                    onClick={() => setOpen(false)}
                    className="btn grid place-items-center"
                  >
                    <BsChevronRight size={26} />
                  </button>
                </div>
                <ul className="px-4 pt-2 grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <li
                      key={item}
                      className="flex flex-col items-center justify-center gap-2"
                    >
                      <div className="rounded-full bg-neutral-100 h-20 w-20"></div>
                      <p className="text-xs">Title</p>
                    </li>
                  ))}
                </ul>
              </div>
              {/* deals */}
              <div className="border-b pb-4">
                <div className="h-[66px] flex items-center justify-between px-4">
                  <h2 className="text-xl font-bold">Deals</h2>
                </div>
                <ul className="px-4 pt-2 grid grid-cols-4 gap-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <li
                      key={item}
                      className="flex flex-col items-center justify-center gap-2"
                    >
                      <div className="rounded-full bg-neutral-100 h-20 w-20"></div>
                      <p className="text-xs">Title</p>
                    </li>
                  ))}
                </ul>
              </div>
              {/* pickup */}
              <div className="border-b pb-4">
                <div className="h-[66px] flex items-center justify-between px-4">
                  <h2 className="text-xl font-bold">Pickup & Delivery</h2>
                </div>
                <div className="px-4 grid grid-cols-2 gap-4">
                  <div className="bg-neutral-100 rounded-md p-4">pickup</div>
                  <div className="bg-neutral-100 rounded-md p-4">delivery</div>
                </div>
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
