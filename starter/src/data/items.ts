import type { Item } from "./types";

export const items: Item[] = [
  {
    id: 1,
    title: "Cordless Drill",
    category: "Tools",
    description:
      "A powerful cordless drill perfect for home improvement projects.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c",
    location: "Cape Town",
    distance: 2,
    price: 120,
    isFree: false,
    available: true,
    owner: {
      id: 1,
      name: "Thabo",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  },
  {
    id: 2,
    title: "Garden Ladder",
    category: "Garden",
    description:
      "Strong aluminium ladder suitable for indoor and outdoor use.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    location: "Johannesburg",
    distance: 5,
    price: 0,
    isFree: true,
    available: true,
    owner: {
      id: 2,
      name: "Sarah",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
  },
  {
    id: 3,
    title: "Pressure Washer",
    category: "Cleaning",
    description:
      "Ideal for washing cars, driveways and patios.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4",
    location: "Durban",
    distance: 8,
    price: 180,
    isFree: false,
    available: true,
    owner: {
      id: 3,
      name: "Michael",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
  },
];