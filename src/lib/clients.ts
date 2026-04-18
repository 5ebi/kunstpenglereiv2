export type ClientCategory =
  | "hotel"
  | "restaurant"
  | "confiserie"
  | "designer"
  | "architekt"
  | "andere";

export type Client = {
  name: string;
  location?: string;
  category: ClientCategory;
  tbd?: boolean;
};

export const clients: Client[] = [
  { name: "Hotel Sacher", location: "Wien", category: "hotel" },
  { name: "Hotel Sacher", location: "Salzburg", category: "hotel" },
  { name: "Hotel Bristol", location: "Wien", category: "hotel" },
  { name: "Zum Schwarzen Kameel", location: "Wien", category: "restaurant" },
  { name: "Altmann & Kühne", location: "Wien", category: "confiserie" },
  { name: "Clemens Schillinger", location: "Wien", category: "designer" },
  { name: "Zenith", category: "andere", tbd: true },
  { name: "Komad", category: "andere", tbd: true },
];

export const categoryOrder: ClientCategory[] = [
  "hotel",
  "restaurant",
  "confiserie",
  "designer",
  "architekt",
  "andere",
];
