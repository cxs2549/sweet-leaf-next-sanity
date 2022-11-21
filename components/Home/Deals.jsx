import Image from "next/image"
import React from "react"

const Card = ({ image, title, category }) => {
  return (
    <div className="border dark:border-neutral-700 rounded-2xl overflow-hidden flex md:flex-col divide-x md:divide-x-0 dark:divide-neutral-700 relative">
      <div className="absolute bottom-0">
        <img
          src="/radial-pattern.jpg"
          className="w-40 dark:invert -left-4 opacity-50"
          alt=""
        />
      </div>
      <div className="relative md:order-2 w-4/12 md:w-[90%] md:mx-auto md:shadow-xl md:bottom-4 dark:border-neutral-700 md:rounded-2xl md:border-t border-neutral-100 bg-white h-full z-30">
        <img
          src={image}
          fill="cover"
          className="w-full h-full md:w-6/12  mx-auto py-4"
          alt="deal"
        />
      </div>
      <div className="flex flex-col md:pb-12 justify- relative w-full dark:bg-black -translate-y-1">
        <div className="absolute -right-28 bottom-10 z-10">
          <img
            src="/circle-pattern.jpg"
            className="w-56 dark:invert opacity-70"
            alt=""
          />
        </div>
        <div className="relative z-20">
          <p className="font-bold text-green-700 dark:text-green-500 translate-y-1 px-3 pt-1  max-w-fit md:text-lg">
            {title}
          </p>
          <p className="text-sm md:text-base px-3  max-w-fit">
            {category}
          </p>
          <p className="text-xs md:text-sm px-3">Today only</p>
        </div>
      </div>
    </div>
  )
}

const Deals = () => {
  return (
    <div className="p-4 gap-4 flex flex-col md:grid md:grid-cols-4 md:justify-center pt-5 max-w-7xl mx-auto">
      <Card
        image="/categories/edibles.png"
        title={`25% off`}
        category="select edibles"
      />
      <Card
        image="/categories/carts.png"
        title="BOGO 50% off"
        category={`select vape carts`}
      />
      <Card
        image="/categories/prerolls.png"
        title="35% off"
        category={`pre-rolls`}
      />
      <Card image="/categories/wax.png" title="25% off" category={`wax`} />
    </div>
  )
}

export default Deals
