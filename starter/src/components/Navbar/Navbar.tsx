import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition"
        >
          NeighbourHub
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            to="/"
            className="text-white hover:text-emerald-400 transition"
          >
            Browse
          </Link>

          <Link
            to="/login"
            className="rounded-lg bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;