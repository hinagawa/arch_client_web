import {Iterator} from "./iterator-interface";

export interface CollectionInterface {
    // Вызов итератора
    getIterator(): Iterator<any>;

    // Добавление элемента
    addItem(item: any): void;

    // Получение количества элементов
    getCount(): number;

    // Получение элементов
    getItems(): any[];
}