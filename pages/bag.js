"use client"
import dynamic from "next/dynamic"

const Page = dynamic(() => import("../components/BagPage"), { ssr: false })
const Bag = () => {
  return (
    <>
      <Page />
    </>
  )
}

export default Bag
