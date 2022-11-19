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

const NotEmptyBag = () => {
  const { signedIn } = useStateContext()

  return (
    <>
      <div className="p-4 pb-16">
        <div className="h-24 flex gap-2 flex-col items-start justify-center">
          <h1 className="font-bold text-3xl">Bag</h1>
          <h3 className="text-xl font-bold text-neutral-500 dark:text-neutral-400">
            $149.99 subtotal (1 item)
          </h3>
        </div>
        <div className="mt-4" id="cartCard">
          <div className="h-[66px] border-b dark:border-neutral-700 flex gap-5 items-center px-4">
            <div>
              <IoStorefrontOutline size={26} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Order Pickup</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                1 item at Los Angeles Koreatown
              </p>
            </div>
          </div>
          <div className="flex gap-5 px-4 py-4">
            <img
              src="http://unsplash.it/100/100?random&gravity=center"
              className="rounded-md object-cover"
              alt=""
            />
            <div className="w-full">
              <div className="h-6 w-full flex items-center flex-1 justify-between">
                <p className="font-bold text-sm tracking-tighter">$149.99</p>
                <button className="btn -translate-y-1 grid place-items-center">
                  <MdClose size={26} />
                </button>
              </div>
              <p className="">Sour Diesel</p>
              <p className="text-xs">Bag size 28g</p>
              <div className="w-full flex items-center justify-between mt-2">
                <div>
                  <select className="dark:bg-transparent rounded border border-gray-300 dark:border-neutral-700 h-[40px] text-xs leading-5 font-medium text-gray-700 dark:text-neutral-200 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" name="quantity" id="quantity">
                  <option value={1}>Qty 1</option>
                  <option value={2}>Qty 2</option>
                  <option value={3}>Qty 3</option>
                  <option value={4}>Qty 4</option>
                  <option value={5}>Qty 5</option>
                  <option value={6}>Qty 6</option>
                  <option value={7}>Qty 7</option>
                  <option value={8}>Qty 8</option>
                  </select>
                </div>

                <button className="border dark:border-neutral-700 rounded px-2.5 h-[40px]">
                  <p className="text-xs">Save for later</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed mx-2 z-10 bottom-0 inset-x-0 bg-white dark:bg-neutral-800 dark:border-none pt-2 pb-4 shadow-lg border rounded-t-xl flex flex-col items-center justify-center">
        <p className="font-bold text-sm tracking-tight">
          $149.99 subtotal (1 item)
        </p>
        {signedIn ? (
          <button className="bg-[#02C970] text-white font-bold w-full max-w-[260px] py-2.5 rounded-full mt-2.5">
            Check out
          </button>
        ) : (
          <button className="bg-[#02C970] text-white font-bold w-full max-w-[260px] py-2.5 rounded-full mt-2.5">
            Sign in to check out
          </button>
        )}
      </div>
    </>
  )
}

const Bag = () => {
  const { signedIn } = useStateContext()
  return <>{signedIn ? <NotEmptyBag /> : <EmptyBag />}</>
}

export default Bag
