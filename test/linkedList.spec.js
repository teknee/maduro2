import chai from 'chai';
import spies from 'chai-spies';
import LinkedList from '../src/linkedList';
import Stack from '../src/stack';

chai.use(spies);

var expect = chai.expect;

var l = new LinkedList();

describe('LinkedList', () => {
  beforeEach(() => {
    l = new LinkedList();
  });

  it('should have a add method', () => {
    expect(l).to.have.property('add');
  });

  it('should have a addAtIndex method', () => {
    expect(l).to.have.property('addAtIndex');
  });

  it('should have a addAll method', () => {
    expect(l).to.have.property('addAll');
  });

  it('should have a addAllAtIndex method', () => {
    expect(l).to.have.property('addAllAtIndex');
  });

  it('should have a addFirst method', () => {
    expect(l).to.have.property('addFirst');
  });

  it('should have a addLast method', () => {
    expect(l).to.have.property('addLast');
  });

  it('should have a clear method', () => {
    expect(l).to.have.property('clear');
  });

  it('should have a contains method', () => {
    expect(l).to.have.property('contains');
  });

  it('should have a get method', () => {
    expect(l).to.have.property('get');
  });

  it('should have a getFirst method', () => {
    expect(l).to.have.property('getFirst');
  });

  it('should have a getLast method', () => {
    expect(l).to.have.property('getLast');
  });

  it('should have a indexOf method', () => {
    expect(l).to.have.property('indexOf');
  });

  it('should have a lastIndexOf method', () => {
    expect(l).to.have.property('lastIndexOf');
  });

  it('should have a remove method', () => {
    expect(l).to.have.property('remove');
  });

  it('should have a removeAtIndex method', () => {
    expect(l).to.have.property('removeAtIndex');
  });

  it('should have a removeFirst method', () => {
    expect(l).to.have.property('removeFirst');
  });

  it('should have a removeLast method', () => {
    expect(l).to.have.property('removeLast');
  });

  it('should have a size method', () => {
    expect(l).to.have.property('size');
  });

  it('should have a forEach method', () => {
    expect(l).to.have.property('forEach');
  });

  describe('add/addLast', () => {
    it('should append the item to the end of the list', () => {
      for (let i = 0; i < 5; i++) {
        l.add(i);
      }

      expect(l.size()).to.equal(5);
      expect(l.getLast()).to.equal(4);
    });
  });

  describe('addAll', () => {
    let array = [];
    let s = new Stack();

    beforeEach(() => {
      array = [];
      s = new Stack();

      for (let i = 0; i < 5; i++) {
        array.push(i);
      }

      for (var i = 0; i < 5; i++) {
        s.push(i);
      }
    });

    it('should add all the items in an array with forEach', () => {
      l.addAll(array);

      expect(l.size()).to.be.equal(5);
      expect(l.getLast()).to.be.equal(4);
    });

    it('should add all the items in a stack', () => {
      l.addAll(s);

      expect(l.size()).to.be.equal(5);
      expect(l.getLast()).to.be.equal(0);
    });
  });

  describe('addFirst', () => {
    it('should add the item at the beginning of the list', () => {
      l.addFirst(1);

      expect(l.getFirst()).to.equal(1);
      expect(l.size()).to.equal(1);

      l.addFirst(2);

      expect(l.getFirst()).to.equal(2);
      expect(l.size()).to.equal(2);

    });
  });

  describe('addAtIndex', () => {
    beforeEach(() => {
      for (var i = 0; i < 5; i++) {
        l.add(i);
      }
    });

    it('should add the item at the passed index in the list', () => {
      l.addAtIndex(5, 0);

      expect(l.getFirst()).to.equal(5);
      expect(l.size()).to.equal(6);

      l.addAtIndex(6, 1);

      expect(l.get(1)).to.equal(6);
      expect(l.size()).to.equal(7);
    });
  });

  describe('addAllAtIndex', () => {
    let array = [];
    let s = new Stack();

    beforeEach(() => {
      array = [];
      s = new Stack();

      for (let i = 0; i < 5; i++) {
        array.push(i);
      }

      for (var i = 0; i < 5; i++) {
        s.push(i);
      }
    });

    it('should add a collection at the passed index in the list', () => {
      l.add(5);
      l.add(6);

      l.addAllAtIndex(array, 1);

      expect(l.indexOf(0)).to.equal(1);
      expect(l.indexOf(1)).to.equal(2);
      expect(l.indexOf(2)).to.equal(3);
      expect(l.indexOf(3)).to.equal(4);
      expect(l.indexOf(4)).to.equal(5);
      expect(l.size()).to.equal(7);
    });
  });

  describe('indexOf', () => {
    it('should return -1 if the list empty', () => {
      expect(l.indexOf(1)).to.equal(-1);
    });

    it('should return -1 if the item is not in the list', () => {
      l.add(1);

      expect(l.indexOf(2)).to.equal(-1);
    });

    it('should return the index of the item in the list', () => {
      l.add(1);
      l.add(2);

      expect(l.indexOf(1)).to.equal(0);
      expect(l.indexOf(2)).to.equal(1);
    });
  });

  describe('isEmpty', () => {
    it('should return true if the list empty', () => {
      expect(l.isEmpty()).to.be.true;
    });

    it('should return false if the list has an item', () => {
      l.add(1);

      expect(l.isEmpty()).to.be.false;
    });
  });

  describe('forEach', () => {
    beforeEach(() => {
      for(let i = 0; i < 5; i++) {
        l.add(i);
      }
    });

    it('should call the passed in function for each item in the list', () => {
      var spy = chai.spy(function() {});

      l.forEach(spy);

      expect(spy).to.have.been.called.exactly(5);
    });

    it('should pass in each item to the function', () => {
      var items = [];
      var pushItem = function(n) {items.push(n)};

      l.forEach(pushItem);

      expect(items).to.eql([0, 1, 2, 3, 4]);
    });
  });

  describe('clear', () => {
    it('should remove all items from the list', () => {
      l.add(1);
      l.add(2);

      l.clear();

      expect(l.isEmpty()).to.be.true;
      expect(l.size()).to.equal(0);
    });
  });

  describe('size', () => {
    it('should return the current size of the list', () => {
      l.add(1);

      expect(l.size()).to.equal(1);

      l.add(4);

      expect(l.size()).to.equal(2);
    });
  });

  describe('get', () => {
    beforeEach(() => {
      for(let i = 1; i < 6; i++) {
        l.add(i);
      }
    });

    it('should return the item at the index provided', () => {
      expect(l.get(0)).to.equal(1);
      expect(l.get(1)).to.equal(2);
      expect(l.get(2)).to.equal(3);
      expect(l.get(3)).to.equal(4);
      expect(l.get(4)).to.equal(5);
    });
  });

  describe('getFirst', () => {
    it('should return null if the list is empty', () => {
      expect(l.getFirst()).to.be.null;
    });

    it('should return the first item of the list if there is one', () => {
      l.add(1);
      expect(l.getFirst()).to.equal(1);
      l.add(2);
      expect(l.getFirst()).to.equal(1);
    });
  });

  describe('getLast', () => {
    it('should return null if the list is empty', () => {
      expect(l.getLast()).to.be.null;
    });

    it('should return the first item of the list if there is one', () => {
      l.add(1);
      expect(l.getLast()).to.equal(1);
      l.add(2);
      expect(l.getLast()).to.equal(2);
    });
  });

  describe('contains', () => {
    it('should return true if the item is in the list', () => {
      l.add(1);
      expect(l.contains(1)).to.be.true;

      l.add(3);
      expect(l.contains(3)).to.be.true;
    });

    it('should return false if the item is not in the list', () => {
      expect(l.contains(1)).to.be.false;
    });
  });
});
