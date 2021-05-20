import {citiesList} from "./cities";
import {CityIterator} from "./city.iterator";

const iteratorWithNoSkip = new CityIterator(citiesList, false);
console.group("Iterating over cities without skipping")
for(const city of iteratorWithNoSkip) {
  console.log(`City ${city.name} which is ${city.isBig ? '' : 'not '}big`)
}
console.groupEnd()

const iteratorWithSkip = new CityIterator(citiesList, true);
console.group("Iterating over cities with skipping")
for(const city of iteratorWithSkip) {
  console.log(`City ${city.name} which is ${city.isBig ? '' : 'not '}big`)
}
console.groupEnd()
