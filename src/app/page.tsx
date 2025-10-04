import Banner from "./component/banner/banner";
import Community from "./component/community/community";

// app/page.tsx
export default function HomePage() {
  return (
    <section className="min-h-screen bg-[#1a2c38]">
      <div className=" max-w-3xl py-20 mx-auto">
        <div>
          <Banner />
        </div>
        <div className="my-5">
          <Community />
        </div>
      </div>
    </section>
  );
}
