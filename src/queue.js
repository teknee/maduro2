import { $size, $data } from './symbols';

class Queue {
  constructor() {
    this[$data] = [];
    this[$size] = 0;
  }

  enqueue(item) {
    this[$data].push(item);
    ++this[$size];
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    --this[$size];
    return this[$data].shift();
  }

  isEmpty() {
    return !!!this[$size];
  }

  size() {
    return this[$size];
  }

  forEach(fn) {
    while (!this.isEmpty()) {
      fn.call(this, this.dequeue(), this.size());
    }
  }
}

export default Queue;
