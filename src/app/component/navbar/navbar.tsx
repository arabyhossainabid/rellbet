import React from "react";
import { AiFillHome } from "react-icons/ai";
import { GiCardAceHearts } from "react-icons/gi";
import { FaCompass, FaFootballBall, FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <section className="fixed bottom-0 left-0 w-full z-50 shadow-lg text-white bg-[#213744]">
      <div className="flex max-w-2xl mx-auto justify-around items-center py-4">
        {/* Home */}
        <div className="flex flex-col items-center font-extralight text-xs cursor-pointer">
          <AiFillHome className="text-xl mb-1" />
          <span>Home</span>
        </div>

        {/* Casino */}
        <div className="flex flex-col items-center font-extralight text-xs cursor-pointer">
          <GiCardAceHearts className="text-xl mb-1" />
          <span>Casino</span>
        </div>

        {/* Explore */}
        <div className="flex flex-col items-center font-extralight text-xs cursor-pointer">
          <FaCompass className="text-xl mb-1" />
          <span>Explore</span>
        </div>

        {/* Sport */}
        <div className="flex flex-col items-center font-extralight text-xs cursor-pointer">
          <FaFootballBall className="text-xl mb-1" />
          <span>Sport</span>
        </div>

        {/* Menu */}
        <div className="flex flex-col items-center text-sm cursor-pointer hover:text-yellow-400">
          <FaBars className="text-xl mb-1" />
          <span>Menu</span>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
