import React from "react"

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: "url(/hero.jpg)" }}
      className="h-[45vh] md:h-[30vh] bg-bottom bg-cover flex flex-col md:flex-row md:gap-12 items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center shadows">
        <h1 className="text-8xl font-bold text-green-500 tracking-tighter">Green</h1>
        <h1 className="text-8xl font-bold text-white -translate-y-4 tracking-tighter">Friday</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-center max-w-xs text-white text-2xl font-bold">
          Save on the loudest strains to get zooted this holiday
        </p>
        <a href="/shop" className="text-white font-bold bg-green-500 py-3 text-lg rounded-full px-6 mt-4">
          Shop early & save
        </a>
      </div>
    </div>
  )
}

export default Hero
