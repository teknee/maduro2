import chai from 'chai';
import spies from 'chai-spies';
import FixedStack from '../src/fixedStack';

chai.use(spies);

var expect = chai.expect;

var s = new FixedStack(3);

describe('FixedStack', () => {
  beforeEach(() => {
    s = new FixedStack(3);
  });

  it('should have a push method', () => {
    expect(s).to.have.property('push');
  });

  it('should have a pop method', () => {
    expect(s).to.have.property('pop');
  });

  it('should have a isEmpty method', () => {
    expect(s).to.have.property('isEmpty');
  });

  it('should have a size method', () => {
    expect(s).to.have.property('size');
  });

  it('should have a forEach method', () => {
    expect(s).to.have.property('forEach');
  });

  describe('push', () => {
    it('it should add a new item to the top of the stack', () => {
      s.push(1);

      expect(s.size()).to.equal(1);
    });

    it('should not add more items once capacity is reached', () => {
      s.push(1);
      s.push(2);
      s.push(3);

      expect(s.size()).to.equal(3);

      s.push(4);

      expect(s.size()).to.equal(3);
    });
  });

  describe('pop', () => {
    it('should remove the last item from the stack', () => {
      s.push(1);
      s.push(2);

      expect(s.pop()).to.equal(2);
    });

    it('should return null if the stack is empty', () => {
      expect(s.pop()).to.be.null;

      s.push(1);
      s.pop();

      expect(s.pop()).to.be.null;
    });
  });

  describe('isEmpty', () => {
    it('should return true if the stack is empty', () => {
      expect(s.isEmpty()).to.be.true;
    });

    it('should return false if the stack has an item', () => {
      s.push(1);

      expect(s.isEmpty()).to.be.false;
    })
  });

  describe('size', () => {
    it('should return return the number of items in the stack', () => {
      expect(s.size()).to.equal(0);

      s.push(1);

      expect(s.size()).to.equal(1);

      s.pop();

      expect(s.size()).to.equal(0);
    });
  });

  describe('forEach', () => {
    beforeEach(() => {
      for(let i = 0; i < 3; i++) {
        s.push(i);
      }
    });
    it('should call the passed in function for each item in the stack', () => {
      var spy = chai.spy(function() {});

      s.forEach(spy);

      expect(spy).to.have.been.called.exactly(3);
    });

    it('should pass in each item to the function', () => {
      var items = [];
      var pushItem = function(n) {items.push(n)};

      s.forEach(pushItem);

      expect(items).to.eql([2, 1, 0]);
    });

    it('should empty the stack', () => {
      s.forEach(() => {});

      expect(s.size()).to.equal(0);
      expect(s.isEmpty()).to.be.true;
    });
  });
});
