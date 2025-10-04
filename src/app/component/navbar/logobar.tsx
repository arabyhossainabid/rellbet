import Image from 'next/image'
import React from 'react'
import RellbetLogo from "../../../../public/image/logo.webp";
function Logobar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50  shadow-lg text-white bg-[#1a2c38]">
      <div className="max-w-3xl flex items-center justify-between mx-auto py-3">
        <div className="">
          <Image
            src={RellbetLogo}
            alt="RellbetLogo"
            className="object-contain w-28"
          />
        </div>
        <div className="font-medium flex gap-2">
          <button className='px-3 py-2 rounded-sm bg-[#2e4653]'>
            Log in
          </button>
          <button className='px-4 py-2 rounded-sm bg-[#0078f7]'>
            Registration
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Logobar
