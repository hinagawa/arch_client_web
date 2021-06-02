export interface IIterator<T> { // Определяет общий интерфейс для доступа и обхода элементов. 
    next(): T; // получить следующий элемент
    hasNext(): boolean; // есть ли следующий элемент
}