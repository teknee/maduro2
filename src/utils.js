let counter = parseInt(10000000 * Math.random(), 10);

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
}

export default Utils;
