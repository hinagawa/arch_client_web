export interface Iterator<T> {
    // Возврат текущего элемента и переход к следующему элементу
    getNext(): T;

    // Проверяет наличие следующего элемента
    hasNext(): boolean;
}