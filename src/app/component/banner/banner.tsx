"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import BannerImg from "../../../../public/image/banner-img.webp";

export default function Banner() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="w-full text-white bg-[#213744]">
              <div className="flex mx-auto justify-between px-3 py-2">
                <article className="w-full">
                  <button className="p-1 mb-3 rounded-xs bg-[#2c404f] text-sm">Stay Untamed</button>
                  <h1 className="font-semibold">
                    Registration Now & Unlock
                  </h1>
                  <p className="mb-3 text-white/60 py-1 max-w-44">
                    Up To $10,000 in Casino or Sports!
                  </p>
                  <button className="px-4 py-2 rounded-xs border-1 border-white/60 text-sm">Join Now</button>
                </article>
                <Image
                  src={BannerImg}
                  alt="BannerImg"
                  width={300}
                  height={150}
                  className="mx-auto max-w-32 w-full "
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex items-center mt-3 ms-5 gap-1 bottom-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn("h-0.5 w-2.5 rounded-full bg-white", {
              "border-[#307df6] bg-[#307df6]": current === index + 1,
            })}
          />
        ))}
      </div>
    </div>
  );
}
