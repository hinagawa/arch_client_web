"use strict";
exports.__esModule = true;
exports.CollectionIterator = void 0;
/**
 * Реализация прогона по коллекции(итератор коллекции)
 */
var CollectionIterator = /** @class */ (function () {
    function CollectionIterator(collection) {
        this.position = 0;
        this.collection = collection;
    }
    // Получение следующего элемента и переход к следующему
    CollectionIterator.prototype.getNext = function () {
        return (this.collection.getItems()[this.position++]);
    };
    // Проверяет корректность текущей позиции.
    CollectionIterator.prototype.hasNext = function () {
        return this.position < this.collection.getCount();
    };
    return CollectionIterator;
}());
exports.CollectionIterator = CollectionIterator;
