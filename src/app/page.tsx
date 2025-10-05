"use client"
import Banner from "./component/banner/banner";
import Community from "./component/community/community";
import Recent from "./component/recent/recent";
import RellbetOffers from "./component/rellbet-offers/rellbet-offers";

// app/page.tsx
export default function HomePage() {
  return (
    <section className="min-h-screen bg-[#1a2c38]">
      <div className=" max-w-3xl px-2 py-20 mx-auto">
        <div>
          <Banner />
        </div>
        <div className="my-5">
          <Recent />
        </div>
        <div className="my-5">
          <Community />
        </div>
        <div>
          <RellbetOffers />
        </div>
      </div>
    </section>
  );
}
