// класс Итератора
class Iterator {
    constructor(data) {
        this.index = -1;
        this.data = data;
        this.flag = false;
        this.collectionLength = this.data.length - 1;
        this.collection = this.data;
    }

    getNext() {
        if (this.index < this.collectionLength) {
            this.index++;
            return {value: this.collection[this.index]};
        } else {
            this.flag = true;
        }
    }

    getPrev() {
        if (this.flag) {
            this.flag = false;
            this.index = this.collectionLength + 1;
        }
        this.index--;
        if (this.index > -1) {
            return {value: this.collection[this.index]};
        } else {
            this.index = -1;
        }
    }
}

// Итерация массива туда-обратно
const iterator = new Iterator(['abc', 1, 'cba', 1.1, [7, 8]]);
console.log(iterator.getNext());
console.log(iterator.getNext());
console.log(iterator.getNext());
console.log(iterator.getNext());
console.log(iterator.getNext());
console.log(iterator.getPrev());
console.log(iterator.getPrev());
console.log(iterator.getPrev());
console.log(iterator.getPrev());