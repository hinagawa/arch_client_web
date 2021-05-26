import {Collection} from "./collection";

const collection = new Collection();

// Добавляем элементы в коллекцию
collection.addItem({"name": "chevrolet", "color": "black", "price": 1});
collection.addItem({"name": "tesla", "color": "white", "price": 1000000});
collection.addItem({"name": "mclaren", "color": "yellow", "price": 99999});

const iterator = collection.getIterator();

// Итерируем, пока можем
while (iterator.hasNext()) {
    console.log(iterator.getNext());
}