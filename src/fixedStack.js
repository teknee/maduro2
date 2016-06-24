import Stack from './stack';
import { $size, $cap } from './symbols';


class FixedStack extends Stack {
  constructor(capacity) {
    super();
    this[$cap] = capacity;
  }

  push(item) {
    if (this[$size] < this[$cap]) {
      super.push(item);
    }
  }
}

export default FixedStack;
