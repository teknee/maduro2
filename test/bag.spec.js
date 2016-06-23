import chai from 'chai';
import spies from 'chai-spies';
import Bag from '../src/bag';

chai.use(spies);

var expect = chai.expect;

var bag = new Bag();

describe('Bag', () => {
  beforeEach(() => {
      bag = new Bag();
  });

  it('should have an add method', () => {
    expect(bag).to.have.property('add');
  });

  it('should have an isEmpty method', () => {
    expect(bag).to.have.property('isEmpty');
  });

  it('should have a size method', () => {
    expect(bag).to.have.property('size');
  });

  it('should have a forEach method', () => {
    expect(bag).to.have.property('forEach');
  });

  describe('add', () => {
    it('should add an item to bag', () => {
      expect(bag.isEmpty()).to.be.true;
      bag.add(5);
      expect(bag.isEmpty()).to.be.false;
    });
  });

  describe('isEmpty', () => {
    it('should return true if nothing is in the bag', () => {
      expect(bag.isEmpty()).to.be.true;
    });

    it('should return false if an item is added to the bag', () => {
      bag.add(5);
      expect(bag.isEmpty()).to.be.false;
    });
  });

  describe('size', () => {
    it('should return the number of items in the bag', () => {
      expect(bag.size()).to.equal(0);
      bag.add(1);
      expect(bag.size()).to.equal(1);
    });
  });

  describe('forEach', () => {
    it('should call the passed in function for each item in the bag', () => {
      var spy = chai.spy(function() {});

      for(let i = 0; i < 5; i++) {
        bag.add(i);
      }

      bag.forEach(spy);

      expect(spy).to.have.been.called.exactly(5);
    });

    it('should pass in each item to the function', () => {
      var items = [];
      var pushItem = function(n) {items.push(n)};

      for(let i = 0; i < 5; i++) {
        bag.add(i);
      }

      bag.forEach(pushItem);

      expect(items).to.include.members([0, 1, 2, 3, 4]);
    });
  });
});
