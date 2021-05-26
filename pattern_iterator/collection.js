"use strict";
exports.__esModule = true;
exports.Collection = void 0;
var collection_iterator_1 = require("./collection-iterator");
/**
 * Реализация Коллекции для получения экземпляра итератора
 */
var Collection = /** @class */ (function () {
    function Collection() {
        this.items = [];
    }
    // Добавление элемента
    Collection.prototype.addItem = function (item) {
        this.items.push(item);
    };
    // Получение элементов
    Collection.prototype.getItems = function () {
        return this.items;
    };
    // Получение количества элементов
    Collection.prototype.getCount = function () {
        return this.items.length;
    };
    Collection.prototype.getIterator = function () {
        return new collection_iterator_1.CollectionIterator(this);
    };
    return Collection;
}());
exports.Collection = Collection;
