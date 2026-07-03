import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import FilterBar from "../components/FilterBar/FilterBar";
import ItemCard from "../components/ItemCard/ItemCard";

import { items } from "../data/items";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <FilterBar />

      <main className="bg-slate-950 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-white">
            Nearby Equipment
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;