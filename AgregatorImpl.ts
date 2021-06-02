
import { IAgregator } from "./IAgregator";
import { IIterator } from "./IIterator";
import { IteratorImpl } from "./IteratorImpl";

//Реализуем наш "агрегатор"
export class AgregatorImpl implements IAgregator {
    private items: any[] = [];

    public createIterator(): IIterator<any> { // Вызываем итератор
        return new IteratorImpl(this);
    }
    public addItem(item: any): void { // Добавляем элементы в коллекцию
        this.items.push(item);
    }
    public getItem(): any[] { // Получаем элементы коллекции
        return this.items;
    }
}