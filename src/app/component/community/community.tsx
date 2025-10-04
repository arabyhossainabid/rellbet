import React from "react";
import Image from "next/image";
import Img1 from "../../../../public/image/social-1.webp";
import Img2 from "../../../../public/image/social-2.webp";
import Img3 from "../../../../public/image/social-3.webp";
import Img4 from "../../../../public/image/social-4.webp";
import Img5 from "../../../../public/image/social-5.webp";
import Img6 from "../../../../public/image/social-6.webp";

function Community() {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6];

  return (
    <section className="w-full mx-auto p-4 shadow-lg text-white bg-[#213744]">
      <div>
        <p className="text-xl font-semibold text-center mb-5">
          Join Our Community
        </p>
      </div>

      <div className="flex justify-center gap-4 max-w-5xl mx-auto">
        {images.map((img, index) => (
          <div key={index} className="bg-[#222627] rounded-sm p-3 ">
            <Image
              src={img}
              alt={`Community ${index + 1}`}
              width={80}
              height={40}
              className="mx-auto w-10  rounded-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Community;
