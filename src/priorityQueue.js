import { $size, $data, $comparator, $sink, $swim, $exchange } from './symbols';

class PriorityQueue {
  constructor(fn = (a, b) => a < b) {
    this[$comparator] = fn;
    this[$data] = [null];
    this[$size] = 0;
    this[$sink] = (index) => {
      let i = index;
      while (2 * i <= this[$size]) {
        let j = 2 * i;
        if (j < this[$size] && this[$comparator](this[$data][j], this[$data][j + 1])) {
          j++;
        }
        if (!this[$comparator](this[$data][i], this[$data][j])) {
          break;
        }
        this[$exchange](i, j);
        i = j;
      }
    };
    this[$swim] = (index) => {
      let i = index;
      while (i > 1 && this[$comparator](this[$data][Math.floor(i / 2)], this[$data][i])) {
        this[$exchange](Math.floor(i / 2), i);
        i = Math.floor(i / 2);
      }
    };
    this[$exchange] = (i, j) => {
      const temp = this[$data][i];
      this[$data][i] = this[$data][j];
      this[$data][j] = temp;
    };
  }

  enqueue(item) {
    this[$data][++this[$size]] = item;
    this[$swim](this[$size]);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const next = this[$data][1];
    this[$exchange](1, this[$size]);
    this[$data].pop();
    this[$size]--;
    this[$sink](1);
    return next;
  }

  clear() {
    this[$data] = [null];
    this[$size] = 0;
  }

  isEmpty() {
    return !!!this[$size] && this[$data].length === 1;
  }

  size() {
    return this[$size];
  }
}

export default PriorityQueue;
