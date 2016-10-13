import { $data, $comparator } from './symbols';

class OrderedMap {
  constructor(fn = (a, b) => a < b) {
    this[$data] = [];
    this[$comparator] = fn;
  }

  put(key, value) {}

  get(key) {}

  delete(key) {}

  contains(key) {}

  size() {}

  min() {}

  max() {}

  floor(key) {}

  ceiling(key) {}

  rank(key) {}

  select(index) {}

  deleteMin() {}

  deleteMax() {}

  forEach(fn) {}
}

export default OrderedMap;
