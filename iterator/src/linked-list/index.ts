import { UIterator, UList } from "./interfaces";

type Node<T> = {value: T; next: Node<T> | undefined}

export class LinkedList<T> implements UList<T> {
  length: number;
  head: Node<T> | undefined;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  add(value: T) {
    const newNode = {value, next: undefined};
    this.length++;
    if(!this.head) {
      this.head = newNode;
      return;
    }
    let node = {next: this.head}
    while(node?.next) {
      node = node.next;
    }
    node.next = newNode;
  }

  private getNode(index: number): Node<T> | undefined {
    if(index > this.length - 1 || index < 0) throw new Error("Out of Bounds");
    if(index === 0) return this.head;
    let node = this.head, i = 0;
    while(node?.next && i < index) {
      node = node.next;
      i++;
    }
    return node;
  }

  get(index: number): T {
    return this.getNode(index)?.value;
  }

  remove(index: number) {
    if(index === 0) {
      this.head = this.head.next;
      return;
    }
    const node = this.getNode(index - 1);
    if(!node.next) return;
    if(index === this.length - 1) {
      node.next = undefined;
    } else {
      node.next = node.next.next;
    }
    this.length--;
  }

  set(index: number, value: T) {
    this.getNode(index).value = value;
  }

  size(): number {
    return this.length;
  }

  get __head() {
    return this.head;
  }

  iterator(): UIterator<T> {
    return new LinkedListIterator(this);
  }
}

class LinkedListIterator<T> implements UIterator<T> {
  list: LinkedList<T>;
  currentNode: Node<T>;

  constructor(list: LinkedList<T>) {
    this.currentNode = list.__head;
  }

  next(): T {
    if(!this.hasNext()) return undefined;
    const value = this.currentNode.value;
    this.currentNode = this.currentNode.next;
    return value;
  }

  hasNext(): boolean {
    return !!this.currentNode;
  }

}
