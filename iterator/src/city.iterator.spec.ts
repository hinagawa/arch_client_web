import { citiesList } from "./cities";
import { CityIterator } from "./city.iterator";

test("Iterator works with skipSmallCities = false", () => {
  const iteratedCities = [...new CityIterator(citiesList, false)]
  expect(iteratedCities).toEqual(citiesList)
})

test("Iterator works with skipSmallCities = true", () => {
  const iteratedCities = [...new CityIterator(citiesList, true)]
  expect(iteratedCities).toHaveLength(4);
  expect(iteratedCities).not.toContainEqual(citiesList[2])
})
