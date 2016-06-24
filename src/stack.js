import { $size, $data } from './symbols';

class Stack {
  constructor() {
    this[$data] = [];
    this[$size] = 0;
  }

  push(item) {
    ++this[$size];
    this[$data].push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    --this[$size];
    return this[$data].pop();
  }

  isEmpty() {
    return !!!this[$size];
  }

  size() {
    return this[$size];
  }

  forEach(fn) {
    while (!this.isEmpty()) {
      fn.call(this, this.pop(), this.size());
    }
  }
}

export default Stack;
