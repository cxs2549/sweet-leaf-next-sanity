import Image from "next/image"
import React from "react"

const Card = ({image, title, category}) => {
  return (
    <div className="border rounded-2xl overflow-hidden flex divide-x">
      <div className="w-4/12 h-[150px] relative">
        <Image
          src={image}
          fill="contain"
          className="w-full h-full"
          alt="deal"
        />
      </div>
      <div className="flex flex-col px-3 justify-center">
        <p className="font-bold text-green-500 translate-y-1">{title}</p>
        <p className="text-sm">{category}</p>
        <p className="text-xs">Today only</p>
      </div>
    </div>
  )
}

const Deals = () => {
  return (
    <div className="p-4 gap-4 flex flex-col pt-5">
      <Card image="/categories/edibles.png" title={`25% off`} category="select edibles" />
      <Card image="/categories/carts.png" title="BOGO 50% off" category={`select vape carts`} />
      <Card image="/categories/prerolls.png" title="35% off" category={`pre-rolls`} />
      <Card image="/categories/wax.png" title="25% off" category={`wax`} />
    </div>
  )
}

export default Deals
