import chai from 'chai';
import spies from 'chai-spies';
import Queue from '../src/queue';

chai.use(spies);

var expect = chai.expect;

var q = new Queue();

describe('Queue', () => {
  beforeEach(() => {
    q = new Queue();
  });

  it('should have a method enqueue', () => {
    expect(q).to.have.property('enqueue');
  });

  it('should have a method dequeue', () => {
    expect(q).to.have.property('dequeue');
  });

  it('should have a method isEmpty', () => {
    expect(q).to.have.property('isEmpty');
  });

  it('should have a method size', () => {
    expect(q).to.have.property('size');
  });

  describe('enqueue', () => {
    it('should add an item to the end of the queue', () => {
      q.enqueue(1);
      q.enqueue(2);

      expect(q.dequeue()).to.equal(1);
    });
  });

  describe('dequeue', () => {
    it('should remove the first item from the queue', () => {
      q.enqueue(1);
      q.enqueue(2);

      expect(q.dequeue()).to.equal(1);
      expect(q.dequeue()).to.equal(2);
    });

    it('should return null when the list is empty', () => {
      expect(q.dequeue()).to.be.null;
      expect(q.size()).to.equal(0);
    });
  });

  describe('isEmpty', () => {
    it('should return true if the queue is empty', () => {
      expect(q.isEmpty()).to.be.true;
    });

    it('should return false if the queue has an item', () => {
      q.enqueue(1);
      expect(q.isEmpty()).to.be.false;
    });

    it('should return true when the last item is dequeued', () => {
      q.enqueue(1);
      var item = q.dequeue();

      expect(item).to.equal(1);
      expect(q.isEmpty()).to.be.true;
    });
  });

  describe('size', () => {
    it('should start with a size of 0', () => {
      expect(q.size()).to.equal(0);
    });

    it('should return the number of items currently in the queue', () => {
      expect(q.size()).to.equal(0);
      q.enqueue(1);
      q.enqueue(2);
      expect(q.size()).to.equal(2);
      q.dequeue();
      expect(q.size()).to.equal(1);
    });
  });

  describe('forEach', () => {
    beforeEach(() => {
      for(let i = 0; i < 5; i++) {
        q.enqueue(i);
      }
    });
    it('should call the passed in function for each item in the queue', () => {
      var spy = chai.spy(function() {});

      q.forEach(spy);

      expect(spy).to.have.been.called.exactly(5);
    });

    it('should pass in each item to the function', () => {
      var items = [];
      var pushItem = function(n) {items.push(n)};

      q.forEach(pushItem);

      expect(items).to.eql([0, 1, 2, 3, 4]);
    });

    it('should empty the queue', () => {
      q.forEach(() => {});

      expect(q.size()).to.equal(0);
      expect(q.isEmpty()).to.be.true;
    });
  });
});
