import { Link } from "react-router-dom";
import type { Item } from "../../data/types";

interface ItemCardProps {
  item: Item;
}

function ItemCard({ item }: ItemCardProps) {
  return (
    <Link
      to={`/item/${item.id}`}
      className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition hover:-translate-y-1 hover:border-emerald-500"
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">
            {item.title}
          </h3>

          <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
            {item.isFree ? "FREE" : `R${item.price}/day`}
          </span>
        </div>

        <p className="mb-3 text-sm text-slate-400">
          {item.description}
        </p>

        <div className="flex items-center justify-between text-sm text-slate-300">
          <span>{item.location}</span>
          <span>{item.distance} km away</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-emerald-400">
            Owner: {item.owner.name}
          </p>

          <button className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600">
            View
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;