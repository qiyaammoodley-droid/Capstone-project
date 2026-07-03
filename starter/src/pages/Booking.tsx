import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [date, setDate] = useState("");

  const handleBooking = () => {
    navigate("/confirmation");
  };

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-xl rounded-2xl bg-slate-900 p-8">
        <h1 className="mb-6 text-3xl font-bold">
          Book Item #{id}
        </h1>

        <label className="mb-2 block font-medium">
          Select Booking Date
        </label>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mb-8 w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
        />

        <button
          onClick={handleBooking}
          disabled={!date}
          className="w-full rounded-xl bg-emerald-500 py-3 font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:bg-slate-700"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default Booking;