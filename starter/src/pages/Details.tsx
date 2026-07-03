import { useParams, Link } from "react-router-dom";
import { items } from "../data/items";

function Details() {
  const { id } = useParams();

  const item = items.find((tool) => tool.id === Number(id));

  if (!item) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Item not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="mb-8 inline-block text-emerald-400 hover:underline"
        >
          ← Back to Browse
        </Link>

        <div className="grid gap-10 md:grid-cols-2">
          <img
            src={item.image}
            alt={item.title}
            className="h-96 w-full rounded-2xl object-cover"
          />

          <div>
            <h1 className="mb-4 text-4xl font-bold">{item.title}</h1>

            <p className="mb-6 text-slate-300">
              {item.description}
            </p>

            <p className="mb-3">
              <strong>Owner:</strong> {item.owner.name}
            </p>

            <p className="mb-3">
              <strong>Location:</strong> {item.location}
            </p>

            <p className="mb-3">
              <strong>Distance:</strong> {item.distance} km
            </p>

            <p className="mb-8">
              <strong>Price:</strong>{" "}
              {item.isFree ? "Free" : `R${item.price}/day`}
            </p>

            <Link
              to={`/booking/${item.id}`}
              className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white hover:bg-emerald-600"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;