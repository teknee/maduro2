import Utils from './utils';
import { $getValue, $head, $tail, $size } from './symbols';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(valueAccessor = Utils.identity) {
    this[$getValue] = valueAccessor;
    this[$head] = this[$tail] = new Node($head);
    this[$size] = 0;
  }

  add(item) {
    return this.addLast(item);
  }

  addAtIndex(item, i) {
    let count = 0;
    const newNode = new Node(item);
    let currNode = this[$head];

    while (count !== i) {
      currNode = currNode.next;
      count++;
    }

    newNode.next = currNode.next;
    currNode.next = newNode;

    ++this[$size];

    return true;
  }

  addAll(collection) {
    if (collection.forEach) {
      collection.forEach((n) => {
        this.addLast(n);
      });
    }
  }

  addAllAtIndex(collection, i) {
    let count = 0;
    let currNode = this[$head];
    let nextNode;

    while(count < i) {
      currNode = currNode.next;
      nextNode = (currNode) ? currNode.next : null;
      count++;
    }

    collection.forEach((item) => {
      currNode.next = new Node(item);
      currNode = currNode.next;
      ++this[$size];
    });

    currNode.next = nextNode;

    if(!!!nextNode) {
      this[$tail] = currNode;
    }
  }

  addFirst(item) {
    return this.addAtIndex(item, 0);
  }

  addLast(item) {
    const newNode = new Node(item);
    this[$tail].next = newNode;
    this[$tail] = newNode;

    ++this[$size];

    return true;
  }

  clear() {
    this[$head] = this[$tail] = new Node($head);
    this[$size] = 0;
  }

  contains(item) {
    return this.indexOf(item) > -1;
  }

  get(i) {
    let count = 0;
    let currNode = this[$head].next;

    while(count < i) {
      currNode = currNode.next;
      ++count;
    }

    return currNode.value;
  }

  getFirst() {
    return (this[$head].next !== null) ? this[$head].next.value : null;
  }

  getLast() {
    return (this[$tail].value !== $head) ? this[$tail].value : null;
  }

  indexOf(item) {
    let count = 0;
    let currNode = this[$head].next;

    while (currNode !== null) {
      if (this[$getValue](item) === this[$getValue](currNode.value)) {
        return count;
      }

      currNode = currNode.next;
      count++;
    }

    return -1;
  }

  lastIndexOf() {}

  remove(item) {
    let currNode = this[$head];

    while(this[$getValue](currNode.value) !== this[$getValue](item)) {
      currNode = currNode.next;
    }


  }

  removeAtIndex(i) {

  }

  removeFirst() {}

  removeLast() {}

  size() {
    return this[$size];
  }

  isEmpty() {
    return !!!this[$size] && this[$head].next === null;
  }

  forEach(fn) {
    let currNode = this[$head].next;

    while (currNode !== null) {
      fn.call(this, this[$getValue](currNode.value));
      currNode = currNode.next;
    }
  }

  printList() {
    let count = 0;

    this.forEach((item) => {
      console.log('index: ' + count + ', item: ' + item);
      ++count;
    });
  }
}

export default LinkedList;