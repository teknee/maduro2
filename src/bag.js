import { $size, $data } from './symbols';

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
    this[$data].forEach((item, i) => {
      fn.call(this, item, i);
    });
  }
}

export default Bag;
