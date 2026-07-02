export interface Owner {
  id: number;
  name: string;
  avatar: string;
}

export type Category =
  | "Tools"
  | "Garden"
  | "Cleaning"
  | "DIY"
  | "Outdoor";

export interface Item {
  id: number;
  title: string;
  category: Category;
  description: string;
  image: string;
  location: string;
  distance: number;
  price: number;
  isFree: boolean;
  available: boolean;
  owner: Owner;
}