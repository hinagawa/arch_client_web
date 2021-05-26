import {Iterator} from "./iterator-interface";
import {CollectionInterface} from "./collection-interface"
import {CollectionIterator} from "./collection-iterator"

/**
 * Реализация Коллекции для получения экземпляра итератора
 */
export class Collection implements CollectionInterface {
    private items: any[] = [];

    // Добавление элемента
    public addItem(item: any): void {
        this.items.push(item);
    }

    // Получение элементов
    public getItems(): any[] {
        return this.items;
    }

    // Получение количества элементов
    public getCount(): number {
        return this.items.length;
    }

    public getIterator(): Iterator<any> {
        return new CollectionIterator(this);
    }
}