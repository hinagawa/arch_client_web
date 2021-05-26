"use strict";
exports.__esModule = true;
var collection_1 = require("./collection");
var collection = new collection_1.Collection();
// Добавляем элементы в коллекцию
collection.addItem({ "name": "chevrolet", "color": "black", "price": 1 });
collection.addItem({ "name": "tesla", "color": "white", "price": 1000000 });
collection.addItem({ "name": "mclaren", "color": "yellow", "price": 99999 });
var iterator = collection.getIterator();
while (iterator.hasNext()) {
    console.log(iterator.getNext());
}
