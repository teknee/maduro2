import chai from 'chai';
import spies from 'chai-spies';
import PriorityQueue from '../src/priorityQueue';

chai.use(spies);

var expect = chai.expect;

var q = new PriorityQueue();

describe('PriorityQueue', () => {
  beforeEach(() => {
    q = new PriorityQueue();
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
  
  it('should have a method clear', () => {
    expect(q).to.have.property('clear');
  });

  describe('enqueue/dequeue', () => {
    it('should return integers in order', () => {
      let arr = [];
      q.enqueue(5);
      q.enqueue(6);
      q.enqueue(9);
      q.enqueue(3);
      q.enqueue(1);
      q.enqueue(5);
      q.enqueue(8);
      q.enqueue(4);
      q.enqueue(6);

      for (let i = 9; i; i--) {
        arr.push(q.dequeue());
      }
      
      expect(arr).to.deep.equal([ 9, 8, 6, 6, 5, 5, 4, 3, 1 ]);
    });
    
    it('should return objects in priority order based on comparator function', () => {
      let arr = [];
      let q = new PriorityQueue((a, b) => a.priority < b.priority);
      const expectedArr = [
        {priority: 9},
        {priority: 8},
        {priority: 6},
        {priority: 6},
        {priority: 5},
        {priority: 5},
        {priority: 4},
        {priority: 3},
        {priority: 1},
      ];
      
      q.enqueue({priority: 5});
      q.enqueue({priority: 6});
      q.enqueue({priority: 9});
      q.enqueue({priority: 3});
      q.enqueue({priority: 1});
      q.enqueue({priority: 5});
      q.enqueue({priority: 8});
      q.enqueue({priority: 4});
      q.enqueue({priority: 6});
  
      for (let i = 9; i; i--) {
        arr.push(q.dequeue());
      }
      
      expect(arr).to.deep.equal(expectedArr);
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
  
  describe('clear', () => {
    it('should clear the queue', () => {
      q.enqueue(1);
      q.enqueue(2);
      
      q.clear();
      
      expect(q.isEmpty()).to.be.true;
      expect(q.size()).to.equal(0);
    });
  });
});
