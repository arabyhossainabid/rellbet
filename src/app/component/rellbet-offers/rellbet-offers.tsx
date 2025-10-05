"use client";

import React from "react";
import Image from "next/image";

// Import 3 ta image
import Img1 from "../../../../public/image/social-1.webp";
import Img2 from "../../../../public/image/nix.webp";
import Img3 from "../../../../public/image/disco.webp";

function RellbetOffers() {
  return (
    <section className="py-6">
      <div className="flex justify-between mx-3 pb-7 items-center gap-6">
        <div className="py-2 p-1.5 border-1 border-white/35 rounded-full">
          <p className="font-bold">18 <span className="font-medium -ms-1">+</span></p>
        </div>
        <Image
          src={Img2}
          alt="Offer 2"
          width={80}
          height={40}
          className="rounded-md"
        />
        <Image
          src={Img3}
          alt="Offer 3"
          width={80}
          height={40}
          className="rounded-md"
        />
      </div>

      <div className="flex flex-col gap-2 text-sm text-white/80">
        <p>Rellbet offers an entertaining gaming experience that may involve certain risks.
        </p>
        <p>You must be at least 18 years old to use this site.
        </p>
        <p>Play responsibly and enjoy your time on Rellbet.
        </p>
        <p>Rellbet is operated by Rell Corporation. Unauthorized use, copying, or distribution of any content is strictly prohibited.
        </p>
      </div>
    </section>
  );
}

export default RellbetOffers;
