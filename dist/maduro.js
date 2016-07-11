(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _symbols = require('./symbols');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bag = function () {
  function Bag() {
    _classCallCheck(this, Bag);

    this[_symbols.$data] = [];
    this[_symbols.$size] = 0;
  }

  _createClass(Bag, [{
    key: 'add',
    value: function add(item) {
      this[_symbols.$data].push(item);
      ++this[_symbols.$size];
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return !!!this[_symbols.$size];
    }
  }, {
    key: 'size',
    value: function size() {
      return this[_symbols.$size];
    }
  }, {
    key: 'forEach',
    value: function forEach(fn) {
      var _this = this;

      this[_symbols.$data].forEach(function (item, i) {
        fn.call(_this, item, i);
      });
    }
  }]);

  return Bag;
}();

exports.default = Bag;
},{"./symbols":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _stack = require('./stack');

var _stack2 = _interopRequireDefault(_stack);

var _symbols = require('./symbols');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FixedStack = function (_Stack) {
  _inherits(FixedStack, _Stack);

  function FixedStack(capacity) {
    _classCallCheck(this, FixedStack);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FixedStack).call(this));

    _this[_symbols.$cap] = capacity;
    return _this;
  }

  _createClass(FixedStack, [{
    key: 'push',
    value: function push(item) {
      if (this[_symbols.$size] < this[_symbols.$cap]) {
        _get(Object.getPrototypeOf(FixedStack.prototype), 'push', this).call(this, item);
      }
    }
  }]);

  return FixedStack;
}(_stack2.default);

exports.default = FixedStack;
},{"./stack":6,"./symbols":7}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _symbols = require('./symbols');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(value) {
  _classCallCheck(this, Node);

  this.value = value;
  this.next = null;
};

var LinkedList = function () {
  function LinkedList() {
    var valueAccessor = arguments.length <= 0 || arguments[0] === undefined ? _utils2.default.identity : arguments[0];

    _classCallCheck(this, LinkedList);

    this[_symbols.$getValue] = valueAccessor;
    this[_symbols.$head] = this[_symbols.$tail] = new Node(_symbols.$head);
    this[_symbols.$size] = 0;
  }

  _createClass(LinkedList, [{
    key: 'add',
    value: function add(item) {
      return this.addLast(item);
    }
  }, {
    key: 'addAtIndex',
    value: function addAtIndex(item, i) {
      var count = 0;
      var newNode = new Node(item);
      var currNode = this[_symbols.$head];

      while (count !== i) {
        currNode = currNode.next;
        count++;
      }

      newNode.next = currNode.next;
      currNode.next = newNode;

      ++this[_symbols.$size];

      return true;
    }
  }, {
    key: 'addAll',
    value: function addAll(collection) {
      var _this = this;

      if (collection.forEach) {
        collection.forEach(function (n) {
          _this.addLast(n);
        });
      }
    }
  }, {
    key: 'addAllAtIndex',
    value: function addAllAtIndex(collection, i) {
      var _this2 = this;

      var count = 0;
      var currNode = this[_symbols.$head];
      var nextNode = void 0;

      while (count < i) {
        currNode = currNode.next;
        nextNode = currNode ? currNode.next : null;
        count++;
      }

      collection.forEach(function (item) {
        currNode.next = new Node(item);
        currNode = currNode.next;
        ++_this2[_symbols.$size];
      });

      currNode.next = nextNode;

      if (!!!nextNode) {
        this[_symbols.$tail] = currNode;
      }
    }
  }, {
    key: 'addFirst',
    value: function addFirst(item) {
      return this.addAtIndex(item, 0);
    }
  }, {
    key: 'addLast',
    value: function addLast(item) {
      var newNode = new Node(item);
      this[_symbols.$tail].next = newNode;
      this[_symbols.$tail] = newNode;

      ++this[_symbols.$size];

      return true;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this[_symbols.$head] = this[_symbols.$tail] = new Node(_symbols.$head);
      this[_symbols.$size] = 0;
    }
  }, {
    key: 'contains',
    value: function contains(item) {
      return this.indexOf(item) > -1;
    }
  }, {
    key: 'get',
    value: function get(i) {
      var count = 0;
      var currNode = this[_symbols.$head].next;

      while (count < i) {
        currNode = currNode.next;
        ++count;
      }

      return currNode.value;
    }
  }, {
    key: 'getFirst',
    value: function getFirst() {
      return this[_symbols.$head].next !== null ? this[_symbols.$head].next.value : null;
    }
  }, {
    key: 'getLast',
    value: function getLast() {
      return this[_symbols.$tail].value !== _symbols.$head ? this[_symbols.$tail].value : null;
    }
  }, {
    key: 'indexOf',
    value: function indexOf(item) {
      var count = 0;
      var currNode = this[_symbols.$head].next;

      while (currNode !== null) {
        if (item === this[_symbols.$getValue](currNode.value)) {
          return count;
        }

        currNode = currNode.next;
        count++;
      }

      return -1;
    }
  }, {
    key: 'lastIndexOf',
    value: function lastIndexOf(item) {
      var i = 0;
      var count = 0;
      var currNode = this[_symbols.$head].next;

      while (currNode !== null) {
        if (item === this[_symbols.$getValue](currNode.value)) {
          i = count;
        }

        currNode = currNode.next;
        ++count;
      }

      return i;
    }
  }, {
    key: 'remove',
    value: function remove(item) {
      var currNode = this[_symbols.$head];
      var count = 0;

      while (this[_symbols.$getValue](currNode.next.value) !== item) {
        currNode = currNode.next;
        ++count;
      }

      var value = currNode.next.value;
      currNode.next = currNode.next.next;
      --this[_symbols.$size];

      if (count === this[_symbols.$size]) {
        this[_symbols.$tail] = currNode;
      }

      return value;
    }
  }, {
    key: 'removeAtIndex',
    value: function removeAtIndex(i) {
      var count = 0;
      var currNode = this[_symbols.$head];

      while (count < i) {
        currNode = currNode.next;
        ++count;
      }

      var value = currNode.next.value;
      currNode.next = currNode.next.next;
      --this[_symbols.$size];

      if (count === this[_symbols.$size]) {
        this[_symbols.$tail] = currNode;
      }

      return value;
    }
  }, {
    key: 'removeFirst',
    value: function removeFirst() {
      return this.removeAtIndex(0);
    }
  }, {
    key: 'removeLast',
    value: function removeLast() {
      return this.removeAtIndex(this[_symbols.$size] - 1);
    }
  }, {
    key: 'size',
    value: function size() {
      return this[_symbols.$size];
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return !!!this[_symbols.$size] && this[_symbols.$head].next === null;
    }
  }, {
    key: 'forEach',
    value: function forEach(fn) {
      var currNode = this[_symbols.$head].next;

      while (currNode !== null) {
        fn.call(this, this[_symbols.$getValue](currNode.value));
        currNode = currNode.next;
      }
    }
  }, {
    key: 'printList',
    value: function printList() {
      var count = 0;

      this.forEach(function (item) {
        console.log('index: ' + count + ', item: ' + item);
        ++count;
      });
      console.log('head: ', this[_symbols.$head]);
      console.log('tail: ', this[_symbols.$tail]);
    }
  }]);

  return LinkedList;
}();

exports.default = LinkedList;
},{"./symbols":7,"./utils":8}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkedList = exports.fixedStack = exports.stack = exports.queue = exports.bag = exports.utils = undefined;

var _utils = require('./utils');

var Utils = _interopRequireWildcard(_utils);

var _bag = require('./bag');

var Bag = _interopRequireWildcard(_bag);

var _queue = require('./queue');

var Queue = _interopRequireWildcard(_queue);

var _stack = require('./stack');

var Stack = _interopRequireWildcard(_stack);

var _fixedStack = require('./fixedStack');

var FixedStack = _interopRequireWildcard(_fixedStack);

var _linkedList = require('./linkedList');

var LinkedList = _interopRequireWildcard(_linkedList);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var utils = exports.utils = Utils;
var bag = exports.bag = Bag;
var queue = exports.queue = Queue;
var stack = exports.stack = Stack;
var fixedStack = exports.fixedStack = FixedStack;
var linkedList = exports.linkedList = LinkedList;
},{"./bag":1,"./fixedStack":2,"./linkedList":3,"./queue":5,"./stack":6,"./utils":8}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _symbols = require('./symbols');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this[_symbols.$data] = [];
    this[_symbols.$size] = 0;
  }

  _createClass(Queue, [{
    key: 'enqueue',
    value: function enqueue(item) {
      this[_symbols.$data].push(item);
      ++this[_symbols.$size];
    }
  }, {
    key: 'dequeue',
    value: function dequeue() {
      if (this.isEmpty()) {
        return null;
      }

      --this[_symbols.$size];
      return this[_symbols.$data].shift();
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return !!!this[_symbols.$size];
    }
  }, {
    key: 'size',
    value: function size() {
      return this[_symbols.$size];
    }
  }, {
    key: 'forEach',
    value: function forEach(fn) {
      while (!this.isEmpty()) {
        fn.call(this, this.dequeue(), this.size());
      }
    }
  }]);

  return Queue;
}();

exports.default = Queue;
},{"./symbols":7}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _symbols = require('./symbols');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this[_symbols.$data] = [];
    this[_symbols.$size] = 0;
  }

  _createClass(Stack, [{
    key: 'push',
    value: function push(item) {
      ++this[_symbols.$size];
      this[_symbols.$data].push(item);
    }
  }, {
    key: 'pop',
    value: function pop() {
      if (this.isEmpty()) {
        return null;
      }
      --this[_symbols.$size];
      return this[_symbols.$data].pop();
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return !!!this[_symbols.$size];
    }
  }, {
    key: 'size',
    value: function size() {
      return this[_symbols.$size];
    }
  }, {
    key: 'forEach',
    value: function forEach(fn) {
      while (!this.isEmpty()) {
        fn.call(this, this.pop(), this.size());
      }
    }
  }]);

  return Stack;
}();

exports.default = Stack;
},{"./symbols":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var $cap = exports.$cap = Symbol('cap');
var $data = exports.$data = Symbol('data');
var $size = exports.$size = Symbol('size');
var $getValue = exports.$getValue = Symbol('valueAccessor');
var $head = exports.$head = Symbol('head');
var $tail = exports.$tail = Symbol('tail');
},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var counter = parseInt(10000000 * Math.random(), 10);

var Utils = function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: 'identity',
    value: function identity(value) {
      return value;
    }
  }, {
    key: 'hash',
    value: function hash(key) {
      var radix = arguments.length <= 1 || arguments[1] === undefined ? 16 : arguments[1];

      var hashValue = 0x811c9dc5;

      for (var i = 0; i < key.length; i++) {
        hashValue ^= key.charCodeAt(i);
        hashValue += (hashValue << 1) + (hashValue << 4) + (hashValue << 7) + (hashValue << 8) + (hashValue << 24);
      }

      return (hashValue >>> 0).toString(radix);
    }
  }, {
    key: 'getUid',
    value: function getUid() {
      counter++;

      return parseInt(new Date().getTime() / 1000, 10).toString(16) + Math.random().toString(16).replace('.', '').substr(0, 8) + counter.toString(16);
    }
  }]);

  return Utils;
}();

exports.default = Utils;
},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9iYWcuanMiLCJidWlsZC9maXhlZFN0YWNrLmpzIiwiYnVpbGQvbGlua2VkTGlzdC5qcyIsImJ1aWxkL21haW4uanMiLCJidWlsZC9xdWV1ZS5qcyIsImJ1aWxkL3N0YWNrLmpzIiwiYnVpbGQvc3ltYm9scy5qcyIsImJ1aWxkL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9zeW1ib2xzID0gcmVxdWlyZSgnLi9zeW1ib2xzJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBCYWcgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEJhZygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmFnKTtcblxuICAgIHRoaXNbX3N5bWJvbHMuJGRhdGFdID0gW107XG4gICAgdGhpc1tfc3ltYm9scy4kc2l6ZV0gPSAwO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEJhZywgW3tcbiAgICBrZXk6ICdhZGQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoaXRlbSkge1xuICAgICAgdGhpc1tfc3ltYm9scy4kZGF0YV0ucHVzaChpdGVtKTtcbiAgICAgICsrdGhpc1tfc3ltYm9scy4kc2l6ZV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNFbXB0eScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzRW1wdHkoKSB7XG4gICAgICByZXR1cm4gISEhdGhpc1tfc3ltYm9scy4kc2l6ZV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgICByZXR1cm4gdGhpc1tfc3ltYm9scy4kc2l6ZV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZm9yRWFjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXNbX3N5bWJvbHMuJGRhdGFdLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgZm4uY2FsbChfdGhpcywgaXRlbSwgaSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQmFnO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBCYWc7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikgeyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7IH0gfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH07XG5cbnZhciBfc3RhY2sgPSByZXF1aXJlKCcuL3N0YWNrJyk7XG5cbnZhciBfc3RhY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhY2spO1xuXG52YXIgX3N5bWJvbHMgPSByZXF1aXJlKCcuL3N5bWJvbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgRml4ZWRTdGFjayA9IGZ1bmN0aW9uIChfU3RhY2spIHtcbiAgX2luaGVyaXRzKEZpeGVkU3RhY2ssIF9TdGFjayk7XG5cbiAgZnVuY3Rpb24gRml4ZWRTdGFjayhjYXBhY2l0eSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGaXhlZFN0YWNrKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihGaXhlZFN0YWNrKS5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzW19zeW1ib2xzLiRjYXBdID0gY2FwYWNpdHk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZpeGVkU3RhY2ssIFt7XG4gICAga2V5OiAncHVzaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2goaXRlbSkge1xuICAgICAgaWYgKHRoaXNbX3N5bWJvbHMuJHNpemVdIDwgdGhpc1tfc3ltYm9scy4kY2FwXSkge1xuICAgICAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihGaXhlZFN0YWNrLnByb3RvdHlwZSksICdwdXNoJywgdGhpcykuY2FsbCh0aGlzLCBpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRml4ZWRTdGFjaztcbn0oX3N0YWNrMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRml4ZWRTdGFjazsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHMpO1xuXG52YXIgX3N5bWJvbHMgPSByZXF1aXJlKCcuL3N5bWJvbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE5vZGUgPSBmdW5jdGlvbiBOb2RlKHZhbHVlKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlKTtcblxuICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIHRoaXMubmV4dCA9IG51bGw7XG59O1xuXG52YXIgTGlua2VkTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTGlua2VkTGlzdCgpIHtcbiAgICB2YXIgdmFsdWVBY2Nlc3NvciA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IF91dGlsczIuZGVmYXVsdC5pZGVudGl0eSA6IGFyZ3VtZW50c1swXTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaW5rZWRMaXN0KTtcblxuICAgIHRoaXNbX3N5bWJvbHMuJGdldFZhbHVlXSA9IHZhbHVlQWNjZXNzb3I7XG4gICAgdGhpc1tfc3ltYm9scy4kaGVhZF0gPSB0aGlzW19zeW1ib2xzLiR0YWlsXSA9IG5ldyBOb2RlKF9zeW1ib2xzLiRoZWFkKTtcbiAgICB0aGlzW19zeW1ib2xzLiRzaXplXSA9IDA7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTGlua2VkTGlzdCwgW3tcbiAgICBrZXk6ICdhZGQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoaXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkTGFzdChpdGVtKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhZGRBdEluZGV4JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQXRJbmRleChpdGVtLCBpKSB7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgdmFyIG5ld05vZGUgPSBuZXcgTm9kZShpdGVtKTtcbiAgICAgIHZhciBjdXJyTm9kZSA9IHRoaXNbX3N5bWJvbHMuJGhlYWRdO1xuXG4gICAgICB3aGlsZSAoY291bnQgIT09IGkpIHtcbiAgICAgICAgY3Vyck5vZGUgPSBjdXJyTm9kZS5uZXh0O1xuICAgICAgICBjb3VudCsrO1xuICAgICAgfVxuXG4gICAgICBuZXdOb2RlLm5leHQgPSBjdXJyTm9kZS5uZXh0O1xuICAgICAgY3Vyck5vZGUubmV4dCA9IG5ld05vZGU7XG5cbiAgICAgICsrdGhpc1tfc3ltYm9scy4kc2l6ZV07XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZEFsbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEFsbChjb2xsZWN0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoY29sbGVjdGlvbi5mb3JFYWNoKSB7XG4gICAgICAgIGNvbGxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAobikge1xuICAgICAgICAgIF90aGlzLmFkZExhc3Qobik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZEFsbEF0SW5kZXgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRBbGxBdEluZGV4KGNvbGxlY3Rpb24sIGkpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgdmFyIGN1cnJOb2RlID0gdGhpc1tfc3ltYm9scy4kaGVhZF07XG4gICAgICB2YXIgbmV4dE5vZGUgPSB2b2lkIDA7XG5cbiAgICAgIHdoaWxlIChjb3VudCA8IGkpIHtcbiAgICAgICAgY3Vyck5vZGUgPSBjdXJyTm9kZS5uZXh0O1xuICAgICAgICBuZXh0Tm9kZSA9IGN1cnJOb2RlID8gY3Vyck5vZGUubmV4dCA6IG51bGw7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9XG5cbiAgICAgIGNvbGxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBjdXJyTm9kZS5uZXh0ID0gbmV3IE5vZGUoaXRlbSk7XG4gICAgICAgIGN1cnJOb2RlID0gY3Vyck5vZGUubmV4dDtcbiAgICAgICAgKytfdGhpczJbX3N5bWJvbHMuJHNpemVdO1xuICAgICAgfSk7XG5cbiAgICAgIGN1cnJOb2RlLm5leHQgPSBuZXh0Tm9kZTtcblxuICAgICAgaWYgKCEhIW5leHROb2RlKSB7XG4gICAgICAgIHRoaXNbX3N5bWJvbHMuJHRhaWxdID0gY3Vyck5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkRmlyc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRGaXJzdChpdGVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRBdEluZGV4KGl0ZW0sIDApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZExhc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRMYXN0KGl0ZW0pIHtcbiAgICAgIHZhciBuZXdOb2RlID0gbmV3IE5vZGUoaXRlbSk7XG4gICAgICB0aGlzW19zeW1ib2xzLiR0YWlsXS5uZXh0ID0gbmV3Tm9kZTtcbiAgICAgIHRoaXNbX3N5bWJvbHMuJHRhaWxdID0gbmV3Tm9kZTtcblxuICAgICAgKyt0aGlzW19zeW1ib2xzLiRzaXplXTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xlYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIHRoaXNbX3N5bWJvbHMuJGhlYWRdID0gdGhpc1tfc3ltYm9scy4kdGFpbF0gPSBuZXcgTm9kZShfc3ltYm9scy4kaGVhZCk7XG4gICAgICB0aGlzW19zeW1ib2xzLiRzaXplXSA9IDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29udGFpbnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb250YWlucyhpdGVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmRleE9mKGl0ZW0pID4gLTE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGkpIHtcbiAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICB2YXIgY3Vyck5vZGUgPSB0aGlzW19zeW1ib2xzLiRoZWFkXS5uZXh0O1xuXG4gICAgICB3aGlsZSAoY291bnQgPCBpKSB7XG4gICAgICAgIGN1cnJOb2RlID0gY3Vyck5vZGUubmV4dDtcbiAgICAgICAgKytjb3VudDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGN1cnJOb2RlLnZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEZpcnN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Rmlyc3QoKSB7XG4gICAgICByZXR1cm4gdGhpc1tfc3ltYm9scy4kaGVhZF0ubmV4dCAhPT0gbnVsbCA/IHRoaXNbX3N5bWJvbHMuJGhlYWRdLm5leHQudmFsdWUgOiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldExhc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMYXN0KCkge1xuICAgICAgcmV0dXJuIHRoaXNbX3N5bWJvbHMuJHRhaWxdLnZhbHVlICE9PSBfc3ltYm9scy4kaGVhZCA/IHRoaXNbX3N5bWJvbHMuJHRhaWxdLnZhbHVlIDogbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpbmRleE9mJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5kZXhPZihpdGVtKSB7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgdmFyIGN1cnJOb2RlID0gdGhpc1tfc3ltYm9scy4kaGVhZF0ubmV4dDtcblxuICAgICAgd2hpbGUgKGN1cnJOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChpdGVtID09PSB0aGlzW19zeW1ib2xzLiRnZXRWYWx1ZV0oY3Vyck5vZGUudmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgY3Vyck5vZGUgPSBjdXJyTm9kZS5uZXh0O1xuICAgICAgICBjb3VudCsrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbGFzdEluZGV4T2YnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsYXN0SW5kZXhPZihpdGVtKSB7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgdmFyIGN1cnJOb2RlID0gdGhpc1tfc3ltYm9scy4kaGVhZF0ubmV4dDtcblxuICAgICAgd2hpbGUgKGN1cnJOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChpdGVtID09PSB0aGlzW19zeW1ib2xzLiRnZXRWYWx1ZV0oY3Vyck5vZGUudmFsdWUpKSB7XG4gICAgICAgICAgaSA9IGNvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgY3Vyck5vZGUgPSBjdXJyTm9kZS5uZXh0O1xuICAgICAgICArK2NvdW50O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoaXRlbSkge1xuICAgICAgdmFyIGN1cnJOb2RlID0gdGhpc1tfc3ltYm9scy4kaGVhZF07XG4gICAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgICB3aGlsZSAodGhpc1tfc3ltYm9scy4kZ2V0VmFsdWVdKGN1cnJOb2RlLm5leHQudmFsdWUpICE9PSBpdGVtKSB7XG4gICAgICAgIGN1cnJOb2RlID0gY3Vyck5vZGUubmV4dDtcbiAgICAgICAgKytjb3VudDtcbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlID0gY3Vyck5vZGUubmV4dC52YWx1ZTtcbiAgICAgIGN1cnJOb2RlLm5leHQgPSBjdXJyTm9kZS5uZXh0Lm5leHQ7XG4gICAgICAtLXRoaXNbX3N5bWJvbHMuJHNpemVdO1xuXG4gICAgICBpZiAoY291bnQgPT09IHRoaXNbX3N5bWJvbHMuJHNpemVdKSB7XG4gICAgICAgIHRoaXNbX3N5bWJvbHMuJHRhaWxdID0gY3Vyck5vZGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVBdEluZGV4JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQXRJbmRleChpKSB7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgdmFyIGN1cnJOb2RlID0gdGhpc1tfc3ltYm9scy4kaGVhZF07XG5cbiAgICAgIHdoaWxlIChjb3VudCA8IGkpIHtcbiAgICAgICAgY3Vyck5vZGUgPSBjdXJyTm9kZS5uZXh0O1xuICAgICAgICArK2NvdW50O1xuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBjdXJyTm9kZS5uZXh0LnZhbHVlO1xuICAgICAgY3Vyck5vZGUubmV4dCA9IGN1cnJOb2RlLm5leHQubmV4dDtcbiAgICAgIC0tdGhpc1tfc3ltYm9scy4kc2l6ZV07XG5cbiAgICAgIGlmIChjb3VudCA9PT0gdGhpc1tfc3ltYm9scy4kc2l6ZV0pIHtcbiAgICAgICAgdGhpc1tfc3ltYm9scy4kdGFpbF0gPSBjdXJyTm9kZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUZpcnN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRmlyc3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW1vdmVBdEluZGV4KDApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUxhc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVMYXN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlQXRJbmRleCh0aGlzW19zeW1ib2xzLiRzaXplXSAtIDEpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaXplKCkge1xuICAgICAgcmV0dXJuIHRoaXNbX3N5bWJvbHMuJHNpemVdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzRW1wdHknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0VtcHR5KCkge1xuICAgICAgcmV0dXJuICEhIXRoaXNbX3N5bWJvbHMuJHNpemVdICYmIHRoaXNbX3N5bWJvbHMuJGhlYWRdLm5leHQgPT09IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZm9yRWFjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgICAgIHZhciBjdXJyTm9kZSA9IHRoaXNbX3N5bWJvbHMuJGhlYWRdLm5leHQ7XG5cbiAgICAgIHdoaWxlIChjdXJyTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBmbi5jYWxsKHRoaXMsIHRoaXNbX3N5bWJvbHMuJGdldFZhbHVlXShjdXJyTm9kZS52YWx1ZSkpO1xuICAgICAgICBjdXJyTm9kZSA9IGN1cnJOb2RlLm5leHQ7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncHJpbnRMaXN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRMaXN0KCkge1xuICAgICAgdmFyIGNvdW50ID0gMDtcblxuICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmRleDogJyArIGNvdW50ICsgJywgaXRlbTogJyArIGl0ZW0pO1xuICAgICAgICArK2NvdW50O1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnaGVhZDogJywgdGhpc1tfc3ltYm9scy4kaGVhZF0pO1xuICAgICAgY29uc29sZS5sb2coJ3RhaWw6ICcsIHRoaXNbX3N5bWJvbHMuJHRhaWxdKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGlua2VkTGlzdDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTGlua2VkTGlzdDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmxpbmtlZExpc3QgPSBleHBvcnRzLmZpeGVkU3RhY2sgPSBleHBvcnRzLnN0YWNrID0gZXhwb3J0cy5xdWV1ZSA9IGV4cG9ydHMuYmFnID0gZXhwb3J0cy51dGlscyA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIFV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzKTtcblxudmFyIF9iYWcgPSByZXF1aXJlKCcuL2JhZycpO1xuXG52YXIgQmFnID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2JhZyk7XG5cbnZhciBfcXVldWUgPSByZXF1aXJlKCcuL3F1ZXVlJyk7XG5cbnZhciBRdWV1ZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9xdWV1ZSk7XG5cbnZhciBfc3RhY2sgPSByZXF1aXJlKCcuL3N0YWNrJyk7XG5cbnZhciBTdGFjayA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9zdGFjayk7XG5cbnZhciBfZml4ZWRTdGFjayA9IHJlcXVpcmUoJy4vZml4ZWRTdGFjaycpO1xuXG52YXIgRml4ZWRTdGFjayA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9maXhlZFN0YWNrKTtcblxudmFyIF9saW5rZWRMaXN0ID0gcmVxdWlyZSgnLi9saW5rZWRMaXN0Jyk7XG5cbnZhciBMaW5rZWRMaXN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2xpbmtlZExpc3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgdXRpbHMgPSBleHBvcnRzLnV0aWxzID0gVXRpbHM7XG52YXIgYmFnID0gZXhwb3J0cy5iYWcgPSBCYWc7XG52YXIgcXVldWUgPSBleHBvcnRzLnF1ZXVlID0gUXVldWU7XG52YXIgc3RhY2sgPSBleHBvcnRzLnN0YWNrID0gU3RhY2s7XG52YXIgZml4ZWRTdGFjayA9IGV4cG9ydHMuZml4ZWRTdGFjayA9IEZpeGVkU3RhY2s7XG52YXIgbGlua2VkTGlzdCA9IGV4cG9ydHMubGlua2VkTGlzdCA9IExpbmtlZExpc3Q7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3N5bWJvbHMgPSByZXF1aXJlKCcuL3N5bWJvbHMnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBRdWV1ZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUXVldWUpO1xuXG4gICAgdGhpc1tfc3ltYm9scy4kZGF0YV0gPSBbXTtcbiAgICB0aGlzW19zeW1ib2xzLiRzaXplXSA9IDA7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUXVldWUsIFt7XG4gICAga2V5OiAnZW5xdWV1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVucXVldWUoaXRlbSkge1xuICAgICAgdGhpc1tfc3ltYm9scy4kZGF0YV0ucHVzaChpdGVtKTtcbiAgICAgICsrdGhpc1tfc3ltYm9scy4kc2l6ZV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGVxdWV1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlcXVldWUoKSB7XG4gICAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC0tdGhpc1tfc3ltYm9scy4kc2l6ZV07XG4gICAgICByZXR1cm4gdGhpc1tfc3ltYm9scy4kZGF0YV0uc2hpZnQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc0VtcHR5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNFbXB0eSgpIHtcbiAgICAgIHJldHVybiAhISF0aGlzW19zeW1ib2xzLiRzaXplXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2l6ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzW19zeW1ib2xzLiRzaXplXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmb3JFYWNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICAgICAgd2hpbGUgKCF0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgICBmbi5jYWxsKHRoaXMsIHRoaXMuZGVxdWV1ZSgpLCB0aGlzLnNpemUoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFF1ZXVlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBRdWV1ZTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfc3ltYm9scyA9IHJlcXVpcmUoJy4vc3ltYm9scycpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU3RhY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0YWNrKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGFjayk7XG5cbiAgICB0aGlzW19zeW1ib2xzLiRkYXRhXSA9IFtdO1xuICAgIHRoaXNbX3N5bWJvbHMuJHNpemVdID0gMDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTdGFjaywgW3tcbiAgICBrZXk6ICdwdXNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaChpdGVtKSB7XG4gICAgICArK3RoaXNbX3N5bWJvbHMuJHNpemVdO1xuICAgICAgdGhpc1tfc3ltYm9scy4kZGF0YV0ucHVzaChpdGVtKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwb3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb3AoKSB7XG4gICAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAtLXRoaXNbX3N5bWJvbHMuJHNpemVdO1xuICAgICAgcmV0dXJuIHRoaXNbX3N5bWJvbHMuJGRhdGFdLnBvcCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzRW1wdHknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0VtcHR5KCkge1xuICAgICAgcmV0dXJuICEhIXRoaXNbX3N5bWJvbHMuJHNpemVdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaXplKCkge1xuICAgICAgcmV0dXJuIHRoaXNbX3N5bWJvbHMuJHNpemVdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZvckVhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gICAgICB3aGlsZSAoIXRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICAgIGZuLmNhbGwodGhpcywgdGhpcy5wb3AoKSwgdGhpcy5zaXplKCkpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGFjaztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3RhY2s7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyICRjYXAgPSBleHBvcnRzLiRjYXAgPSBTeW1ib2woJ2NhcCcpO1xudmFyICRkYXRhID0gZXhwb3J0cy4kZGF0YSA9IFN5bWJvbCgnZGF0YScpO1xudmFyICRzaXplID0gZXhwb3J0cy4kc2l6ZSA9IFN5bWJvbCgnc2l6ZScpO1xudmFyICRnZXRWYWx1ZSA9IGV4cG9ydHMuJGdldFZhbHVlID0gU3ltYm9sKCd2YWx1ZUFjY2Vzc29yJyk7XG52YXIgJGhlYWQgPSBleHBvcnRzLiRoZWFkID0gU3ltYm9sKCdoZWFkJyk7XG52YXIgJHRhaWwgPSBleHBvcnRzLiR0YWlsID0gU3ltYm9sKCd0YWlsJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgY291bnRlciA9IHBhcnNlSW50KDEwMDAwMDAwICogTWF0aC5yYW5kb20oKSwgMTApO1xuXG52YXIgVXRpbHMgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFV0aWxzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVdGlscyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVXRpbHMsIG51bGwsIFt7XG4gICAga2V5OiAnaWRlbnRpdHknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhc2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNoKGtleSkge1xuICAgICAgdmFyIHJhZGl4ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMTYgOiBhcmd1bWVudHNbMV07XG5cbiAgICAgIHZhciBoYXNoVmFsdWUgPSAweDgxMWM5ZGM1O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleS5sZW5ndGg7IGkrKykge1xuICAgICAgICBoYXNoVmFsdWUgXj0ga2V5LmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGhhc2hWYWx1ZSArPSAoaGFzaFZhbHVlIDw8IDEpICsgKGhhc2hWYWx1ZSA8PCA0KSArIChoYXNoVmFsdWUgPDwgNykgKyAoaGFzaFZhbHVlIDw8IDgpICsgKGhhc2hWYWx1ZSA8PCAyNCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoaGFzaFZhbHVlID4+PiAwKS50b1N0cmluZyhyYWRpeCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VWlkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VWlkKCkge1xuICAgICAgY291bnRlcisrO1xuXG4gICAgICByZXR1cm4gcGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwLCAxMCkudG9TdHJpbmcoMTYpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikucmVwbGFjZSgnLicsICcnKS5zdWJzdHIoMCwgOCkgKyBjb3VudGVyLnRvU3RyaW5nKDE2KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVXRpbHM7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFV0aWxzOyJdfQ==
