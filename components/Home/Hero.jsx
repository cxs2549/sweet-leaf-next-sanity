import Image from "next/image"
import React from "react"

const Hero = () => {
  return (
    <div className="py-12 bg-bottom bg-cover flex flex-col md:flex-row md:gap-12 items-center relative justify-center">
      <Image fill="cover" src="/hero.jpg" alt="" />
      <div className="flex flex-col items-center justify-center z-10">
        <h1 className="text-8xl font-bold text-green-500 tracking-tighter">
          Green
        </h1>
        <h1 className="text-8xl font-bold text-white -translate-y-4 tracking-tighter">
          Friday
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center z-10">
        <p className="text-center max-w-xs text-white text-2xl font-bold">
          Save on the loudest strains to get zooted this holiday
        </p>
        <a
          href="/shop"
          className="text-white font-bold bg-green-500 py-3 text-lg rounded-full px-6 mt-4"
        >
          Shop early & save
        </a>
      </div>
    </div>
  )
}

export default Hero
