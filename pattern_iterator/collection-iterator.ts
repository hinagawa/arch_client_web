import {Iterator} from "./iterator-interface";
import {CollectionInterface} from "./collection-interface";

/**
 * Реализация прогона по коллекции(итератор коллекции)
 */
export class CollectionIterator implements Iterator<any> {
    private collection: CollectionInterface;
    private position: number = 0;

    constructor(collection: CollectionInterface) {
        this.collection = collection;
    }

    // Получение следующего элемента и переход к следующему
    public getNext(): any {
        return (this.collection.getItems()[this.position++]);
    }

    // Проверяет корректность текущей позиции.
    public hasNext(): boolean {
        return this.position < this.collection.getCount();
    }
}