import React, { useState, useRef, useEffect } from "react"
import { HiMenuAlt4 } from "react-icons/hi"
import { motion, AnimatePresence } from "framer-motion"
import { MdClose } from "react-icons/md"
import { BsChevronRight } from "react-icons/bs"
const Menu = () => {
  const [open, setOpen] = useState(false)
  const [openCats, setOpenCats] = useState(false)
  const ref = useRef()
  useOnClickOutside(ref, () => setOpen(false))
  return (
    <div ref={ref} className="flex-1 xl:hidden relative">
      <button
        onClick={() => setOpen(true)}
        aria-label="Menu"
        className="btn grid place-items-center opacity-80 hover:opacity-100"
      >
        <HiMenuAlt4 size={26} />
      </button>
      <AnimatePresence>
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed z-10 inset-0 bg-black/50"
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
            className="fixed max-w-[375px] h-full overflow-y-auto left-0  z-20 top-0"
          >
            <div className="bg-white dark:bg-neutral-900 shadow max-w-[375px] overflow-y-auto h-full">
              <div className="h-[66px] flex items-center justify-between px-4 border-b dark:border-neutral-700">
                <h1 className="text-2xl font-bold">Menu</h1>
                <button
                  onClick={() => setOpen(false)}
                  className="btn grid place-items-center"
                >
                  <MdClose size={26} />
                </button>
              </div>

              {/* categories */}
              <div className="border-b dark:border-neutral-700 pb-4">
                <div
                  onClick={() => setOpenCats(true)}
                  className="h-[66px] flex items-center justify-between px-4 cursor-pointer"
                >
                  <h2 className="text-xl font-bold">Categories</h2>
                  <button className="btn grid place-items-center">
                    <BsChevronRight size={26} />
                  </button>
                </div>
                <ul className="px-4 pt-2 grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <li
                      key={item}
                      className="flex flex-col items-center justify-center gap-2 group cursor-pointer"
                    >
                      <div className="rounded-full bg-neutral-100 h-[70px] w-[70px]"></div>
                      <p className="text-xs group-hover:underline">Title</p>
                    </li>
                  ))}
                </ul>
                {/* cats subpage */}
                <AnimatePresence>
                  {openCats && (
                    <motion.div
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{ type: "tween" }}
                      className="fixed max-w-[375px] w-full h-full overflow-y-auto left-0  z-20 bg-white dark:bg-neutral-900 top-0"
                    >
                      <div className="h-[66px] flex items-center justify-between px-4 border-b dark:border-neutral-700">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setOpenCats(false)}
                            className="btn grid place-items-center rotate-180"
                          >
                            <BsChevronRight size={26} />
                          </button>
                          <h1 className="text-2xl font-bold">Categories</h1>
                        </div>
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
              {/* deals */}
              <div className="border-b dark:border-neutral-700 pb-4">
                <div className="h-[66px] flex items-center justify-between px-4">
                  <h2 className="text-xl font-bold">Deals</h2>
                </div>
                <ul className="px-4 pt-2 grid grid-cols-4 gap-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <li
                      key={item}
                      className="flex flex-col items-center justify-center gap-2 group cursor-pointer"
                    >
                      <div className="rounded-full bg-neutral-100 h-[70px] w-[70px]"></div>
                      <p className="text-xs group-hover:underline">Title</p>
                    </li>
                  ))}
                </ul>
              </div>
              {/* pickup */}
              <div className=" pb-4">
                <div className="h-[66px] flex items-center justify-between px-4">
                  <h2 className="text-xl font-bold">Pickup & Delivery</h2>
                </div>
                <div className="px-4 grid grid-cols-2 gap-4">
                  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md p-4">
                    <p className="font-bold capitalize text-sm">pickup</p>
                    <p className="text-xs mt-1 text-neutral-600 dark:text-neutral-400">
                      Order ahead & pickup in-store
                    </p>
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md p-4">
                    <p className="font-bold capitalize text-sm">delivery</p>
                    <p className="text-xs mt-1 text-neutral-600 dark:text-neutral-400">
                      Brought to you by UberEats
                    </p>
                  </div>
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
