const $data = Symbol('counter');
const $size = Symbol('size');

class Bag {
  constructor() {
    this[$data] = [];
    this[$size] = 0;
  }

  add(item) {
    this[$data].push(item);
    ++this[$size];
  }

  isEmpty() {
    return !!!this[$size];
  }

  size() {
    return this[$size];
  }

  forEach(fn) {
    this[$data].forEach(fn);
  }
}

export default Bag;
