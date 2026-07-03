import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-lg rounded-2xl bg-slate-900 p-10 text-center shadow-xl">
        <div className="mb-6 text-6xl">✅</div>

        <h1 className="mb-4 text-4xl font-bold text-white">
          Booking Confirmed!
        </h1>

        <p className="mb-8 text-slate-300">
          Your booking has been successfully submitted. The owner will be
          notified and you'll be contacted shortly.
        </p>

        <Link
          to="/"
          className="inline-block rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Confirmation;