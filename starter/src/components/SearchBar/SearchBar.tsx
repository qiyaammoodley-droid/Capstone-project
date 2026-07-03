function SearchBar() {
  return (
    <div className="bg-slate-950 px-6 pb-8">
      <div className="mx-auto max-w-7xl">
        <input
          type="text"
          placeholder="Search for tools, equipment or outdoor gear..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white placeholder-slate-400 outline-none transition focus:border-emerald-500"
        />
      </div>
    </div>
  );
}

export default SearchBar;