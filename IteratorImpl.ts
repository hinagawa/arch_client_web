import { IIterator } from "./IIterator";
import { IAgregator } from "./IAgregator";

// Реализуем итератор
export class IteratorImpl implements IIterator<any> {
    private collection: IAgregator;
    private key: number = 0;
    constructor(collection: IAgregator) { // создаем коллекцию
        this.collection = collection;
    }
    public next(): any { // Возвращаем следующий элемент
        return this.collection.getItem(this.key++);
    }
    public hasNext(): boolean { // Проверяем наличие следующего элемента
        return this.collection.getItem(this.key++) ? true : false;
    }
}