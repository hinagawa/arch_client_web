 interface Iterator<T> { // Определяет общий интерфейс для доступа и обхода элементов. 

    next(): T; // получить следующий элемент
    hasNext(): boolean; // есть ли следующий элемент
}

interface Aggregator { // Определяет интерфейс фабрики создания объектов-итераторов.
    createIterator(): Iterator<string>;
}

class ArrayIterator implements Iterator<string> {
    private collection: WordsArray;
    private position: number = 0;


    public next(): string { // Возвращаем следующий элемент
        const item = this.collection.getItems()[this.position];
        this.position += 1;
        return item;
    }

    public hasNext(): boolean { // Проверяем есть ли следующий элемент
    return this.collection.getItems()[this.position+1] ? true: false;
  }

}

class WordsArray implements Aggregator { // Реализуем коллекцию
    private items: string[] = [];


    public addItem(item: string): void { // Добавить в коллекцию
        this.items.push(item);
    }
    public getItems(): string[] { // Получить из коллекции
        return this.items;
    }
    public createIterator(): Iterator<string> { // Создать итератор
        return new ArrayIterator(this);
    }

}
   
const collection = new WordsArray(); // создаем экземпляр коллекции
collection.addItem('1');
collection.addItem('2');
collection.addItem('3');
collection.addItem('4');

const iterator = collection.createIterator(); // создаем экземпляр итератора

while (iterator.hasNext()) { // пока есть следующий элемент - выводим на экран
    console.log(iterator.next());
}

