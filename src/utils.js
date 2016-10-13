let counter = parseInt(10000000 * Math.random(), 10);

const compare = function compare(a, b) {
  return a < b;
};

class Utils {
  static identity(value) {
    return value;
  }

  static hash(key, radix = 16) {
    let hashValue = 0x811c9dc5;

    for (let i = 0; i < key.length; i++) {
      hashValue ^= key.charCodeAt(i);
      hashValue += (hashValue << 1) + (hashValue << 4) + (hashValue << 7) +
        (hashValue << 8) + (hashValue << 24);
    }

    return (hashValue >>> 0).toString(radix);
  }

  static getUid() {
    counter++;

    return (parseInt(new Date().getTime() / 1000, 10)).toString(16) +
      Math.random().toString(16)
        .replace('.', '')
        .substr(0, 8) +
        (counter.toString(16));
  }

  static insertionSort(array, fn) {
    const comparator = fn || compare;
    const sorted = [].concat(array);
    let j;

    for (let i = 0; i < sorted.length; i++) {
      const a = sorted[i];
      for (j = i; j > 0 && comparator(a, sorted[j - 1]); j--) {
        sorted[j] = sorted[j - 1];
      }

      sorted[j] = a;
    }

    return sorted;
  }

  static mergeSort(array, fn) {
    const comparator = fn || compare;
    const sorted = [].concat(array);
    const length = sorted.length;

    function merge(left, right, arr) {
      const merged = [].concat(arr);
      let i = 0;

      while (left.length && right.length) {
        merged[i++] = (comparator(right[0], left[0])) ? right.shift() : left.shift();
      }
      while (left.length) {
        merged[i++] = left.shift();
      }
      while (right.length) {
        merged[i++] = right.shift();
      }

      return merged;
    }

    if (length === 1) { return sorted; }

    if (length > 100) {
      const middle = Math.floor(length / 2);
      const left = sorted.slice(0, middle);
      const right = sorted.slice(middle);

      this.mergeSort(left, comparator);
      this.mergeSort(right, comparator);

      return merge(left, right, sorted);
    }

    return this.insertionSort(sorted, comparator);
  }

  static quickSort(array, fn) {
    const comparator = fn || compare;
    const sorted = [].concat(array);

    function swap(i, j) {
      const t = sorted[i];
      sorted[i] = sorted[j];
      sorted[j] = t;
    }

    function sort(left, right) {
      if (left < right) {
        const pivot = sorted[left + Math.floor((right - right) / 2)];
        let nextLeft = left;
        let nextRight = right;

        do {
          while (comparator(sorted[nextLeft], pivot)) {
            nextLeft += 1;
          }
          while (comparator(pivot, sorted[nextRight])) {
            nextRight -= 1;
          }
          if (nextLeft <= nextRight) {
            swap(nextLeft, nextRight);
            nextLeft += 1;
            nextRight -= 1;
          }
        } while (nextLeft <= nextRight);

        sort(left, nextRight);
        sort(nextLeft, right);
      }
    }

    sort(0, sorted.length - 1);

    return sorted;
  }

  static binarySearch(array, key, keyAccessor = this.identity) {
    let low = 0;
    let high = array.length - 1;
    let mid;

    while (low <= high) {
      mid = Math.floor(low + (high - low) / 2);
      if (keyAccessor(array[mid]) > key) {
        high = mid - 1;
      } else if (keyAccessor(array[mid]) < key) {
        low = mid + 1;
      } else {
        return mid;
      }
    }

    return -1;
  }
}

export default Utils;
