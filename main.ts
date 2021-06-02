import { AgregatorImpl } from "./AgregatorImpl";

const collection = new AgregatorImpl();
//Добавляем в коллекцию
collection.addItem(false); // bool
collection.addItem('Sun'); // string
collection.addItem([4, 3, 5]); // array
collection.addItem(10); // number

const iterator = collection.createIterator(); // Создаем итератор

while (iterator.hasNext()) { // Пока есть следующий элемент печатаем его
    console.log(iterator.next());
}