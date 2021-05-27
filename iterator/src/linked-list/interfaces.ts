export interface UIterator<T> {
  next(): T
  hasNext(): boolean
}

export interface UIterable<T> {
  iterator(): UIterator<T>
}

export interface UList<T> extends UIterable<T>{
  get(index: number): T
  set(index: number, value: T)
  add(value: T)
  size(): number
  remove(index: number)
}
