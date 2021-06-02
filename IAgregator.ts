import { IIterator } from "./IIterator";

export interface IAgregator { // Собираем в интерфейс методы для создания коллекции
    createIterator(): IIterator<any> // Создать итератор
    addItem(item): void; // Добавить элемент
    getItem(item): void // Получить элемент
}