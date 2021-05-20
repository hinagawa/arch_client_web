import { City } from "./city.type";

export class CityIterator implements IterableIterator<City> {
  private readonly cities: City[];
  private index: number;

  constructor(cities: Iterable<City>, private readonly skipSmallCities = false) {
    this.cities = [...cities];
  }

  [Symbol.iterator](): IterableIterator<City> {
    this.index = 0;
    return this;
  }

  public next(): IteratorResult<City> {
    if(this.index >= this.cities.length) return {value: null, done: true}

    const value = this.cities[this.index++];
    if(this.skipSmallCities && !value.isBig) return this.next();
    return {value, done: this.index > this.cities.length}
  }
}
