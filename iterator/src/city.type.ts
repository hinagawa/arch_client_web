export type City = {
  name: string;
  country: string;
  population?: number;
  postalCodes: [number, number] | number;
  isBig: boolean;
};
