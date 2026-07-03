function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-400">
          Community Marketplace
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-tight">
          Borrow what you need,
          <br />
          lend what you don't.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          Discover tools and equipment from trusted people in your
          neighbourhood. Save money, reduce waste and help your community.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600">
            Browse Items
          </button>

          <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-emerald-500">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;