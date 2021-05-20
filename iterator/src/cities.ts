import { City } from "./city.type";

const cities: City[] = [
  {
    name: "Kazan",
    country: "Russia",
    population: 1_257_341,
    postalCodes: [420000, 421992],
    isBig: true,
  },
  {
    name: "Surgut",
    country: "Russia",
    population: 387_235,
    postalCodes: 628400,
    isBig: true,
  },
  {
    name: "Rothenburg ob der Tauber",
    country: "Germany",
    population: 11_391,
    postalCodes: 91541,
    isBig: false,
  },
  {
    name: "Saint Petersburg",
    country: "Russia",
    population: 5_384_342,
    postalCodes: [190000, 199406],
    isBig: true,
  },
  {
    name: "Nalchik",
    country: "Russia",
    population: 239_054,
    postalCodes: [360000, 360904],
    isBig: true,
  },
];

export const citiesList = cities.map(city => Object.freeze(city));
