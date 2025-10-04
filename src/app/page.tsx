// app/page.tsx
export default function HomePage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#1a2c38]">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Welcome to My Website 🚀
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          This is the homepage content showing below the Navbar.
        </p>
      </div>
    </section>
  );
}
