"use client";

import LogoLoop from "@/components/LogoLoop";
import Image from "next/image";
import recent from "../../../../public/image/recent-card.webp";
import icon from "../../../../public/image/big-win.webp";

const logos = [
  {
    src: recent,
    title: "Slots",
    subtitle: "$154.245k",
    icon: icon,
    href: "https://company2.com",
  },
  {
    src: recent,
    title: "Slots",
    subtitle: "$154.245k",
    icon: icon,
    href: "https://company2.com",
  },
  {
    src: recent,
    title: "Slots",
    subtitle: "$154.245k",
    icon: icon,
    href: "https://company2.com",
  },
];

export default function Recent() {
  return (
    <section>
      <div className="flex items-center gap-2">
        <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>

        <p className="text-xl font-bold">
          Recent Big Wins
        </p>
      </div>
      <div className="relative overflow-hidden">
        <LogoLoop
          logos={logos.map((recent) => ({
            node: (
              <a
                href={recent.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-center"
              >
                <Image
                  src={recent.src}
                  alt={recent.title}
                  width={60}
                  height={60}
                  className="w-16 h-[90px] object-cover rounded-md"
                />

                <div>
                  <p className="-mt-1 text-xs font-semibold truncate flex items-center gap-1">
                    <Image
                      src={recent.icon}
                      alt="icon"
                      width={12}
                      height={12}
                      className="inline-block"
                    />
                    {recent.title}
                  </p>
                  <p className="text-green-400 font-semibold text-xs truncate">
                    {recent.subtitle}
                  </p>
                </div>
              </a>
            ),
          }))}

          speed={40}
          direction="left"
          logoHeight={80}
          gap={5}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
}
