function FilterBar() {
  return (
    <div className="bg-slate-950 px-6 pb-10">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-4">
        <select className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-500">
          <option>All Categories</option>
          <option>Tools</option>
          <option>Garden</option>
          <option>Cleaning</option>
          <option>DIY</option>
          <option>Outdoor</option>
        </select>

        <select className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-500">
          <option>All Prices</option>
          <option>Free</option>
          <option>Paid</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;