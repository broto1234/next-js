
export default function Layout({ children }) {
  return (
    <div>
      <header className="bg-black p-4">
        <h1 className="text-white md:text-2xl font-bold text-center">Top 5 Happiest Countries in the world, 2023</h1>
        <p className="text-gray-300 text-center text-xs md:text-base">According to the <span className="font-bold text-white">World Happiness Report</span></p>
      </header>
      {children}
      <footer className="bg-gray-200 text-black">
        <div className="flex justify-center md:text-lg md:p-3">Copyright <svg className="w-4 ml-1 inline-block" viewBox="0 0 700 312"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"/></svg>2023 by<span className="ml-2 font-semibold">Satyobroto Talukder</span></div>
      </footer>
    </div>
  );
}