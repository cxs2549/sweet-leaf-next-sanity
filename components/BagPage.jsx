import React, {useState, useEffect} from "react"
import Layout from "./Layout"
import { IoStorefrontOutline } from "react-icons/io5"
import { MdClose } from "react-icons/md"
import { useStateContext } from "../context/StateContext"
const EmptyBag = () => (
  <div
    id="cartCard"
    className="flex flex-col items-center justify-center mt-4 mb-12 pt-12 pb-2 max-w-2xl mx-4"
  >
    <h1 className="text-3xl font-bold">Your bag is empty</h1>
    <p className="mt-2">Have an account? Sign in to see your bag</p>
    <button className="bg-[#02C970] text-white font-bold w-full max-w-[260px] py-2.5 rounded-full mt-2.5">
      Sign in
    </button>
    <img src="/bag.png" className="w-48 mt-5" alt="" />
  </div>
)

const NotEmptyBag = () => (
  <>
    <div className="p-4 pb-16">
      <div className="h-24 flex gap-2 flex-col items-start justify-center">
        <h1 className="font-bold text-3xl">Bag</h1>
        <h3 className="text-xl font-bold text-neutral-500">
          $9.99 subtotal (1 item)
        </h3>
      </div>
      <div className="mt-4" id="cartCard">
        <div className="h-[66px] border-b flex gap-5 items-center px-4">
          <div>
            <IoStorefrontOutline size={26} />
          </div>
          <div>
            <h3 className="font-bold text-lg">Order Pickup</h3>
            <p className="text-sm text-neutral-500">
              1 item at Los Angeles Koreatown
            </p>
          </div>
        </div>
        <div className="flex gap-5 px-4 py-4">
          <img src="http://unsplash.it/70/100?random&gravity=center" alt="" />
          <div className="w-full">
            <div className="h-6 w-full flex items-center flex-1 justify-between">
              <p className="font-bold text-sm tracking-tighter">$9.99</p>
              <button className="btn self-start -translate-y-1 grid place-items-center">
                <MdClose size={26} />
              </button>
            </div>
            <p className="text-xs uppercase text-neutral-500">Sativa</p>
            <p className="-translate-y-0.5">Sour Diesel</p>
            <div className="w-full flex items-center justify-between">
              <p className="text-xs">Qty 1</p>
              <button className="border rounded px-2 py-2">
                <p className="text-xs">Save for later</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="fixed z-10 bottom-0 inset-x-0 bg-white pt-2 pb-4 shadow-lg border rounded-t-xl flex flex-col items-center justify-center">
      <p className="font-bold text-sm tracking-tight">
        $9.99 subtotal (1 item)
      </p>
      <button className="bg-[#02C970] text-white font-bold w-full max-w-[260px] py-2.5 rounded-full mt-2.5">
        Sign in to check out
      </button>
    </div>
  </>
)

const Bag = () => {
  const [color, setColor] = useState('blue')
  useEffect(() => setColor('red'), [])
  const { signedIn } = useStateContext()
  return <Layout>{signedIn ? <NotEmptyBag /> : <EmptyBag />}</Layout>
}

export default Bag
