import { expect } from 'chai';
import Utils from '../src/utils';

describe('Utils', () => {
  it('should have an identity method', () => {
    expect(Utils).to.have.property('identity');
  });

  it('should have a hash method', () => {
    expect(Utils).to.have.property('hash');
  });

  it('should have a getUid method', () => {
    expect(Utils).to.have.property('getUid');
  });
  
  it('should have a mergeSort method', () => {
    expect(Utils).to.have.property('mergeSort');
  });
  
  it('should have a quickSort method', () => {
    expect(Utils).to.have.property('quickSort');
  });
  
  it('should have a insertionSort method', () => {
    expect(Utils).to.have.property('insertionSort');
  });
  
  describe('identity', () => {
    it('should return the value that is passed to it', () => {
      var obj = {};
      var num = 5;

      expect(Utils.identity(obj)).to.equal(obj);
      expect(Utils.identity(num)).to.equal(num);
    });
  });

  describe('hash', () => {
    it("should return a hashed value in base 16", () => {
      var hash = Utils.hash("");
      expect(hash).to.be.a("string");
      expect(hash).to.equal("811c9dc5");
      hash = Utils.hash("test");
      expect(hash).to.be.a("string");
      expect(hash).to.equal("afd071e5");
    });

    it("should return a hashed value in the base provided", () => {
      var hash = Utils.hash("test", 2);
      expect(hash).to.be.a("string");
      expect(hash).to.equal("10101111110100000111000111100101");
      hash = Utils.hash("test", 10);
      expect(hash).to.be.a("string");
      expect(hash).to.equal("2949673445");
      hash = Utils.hash("test", 32);
      expect(hash).to.be.a("string");
      expect(hash).to.equal("2nt0sf5");
    });
  });

  describe("getUid", () => {
    it("should return a unique id with each call", () => {
      var ids = [];
      for (var i = 0; i < 3; i++) {
        ids[i] = Utils.getUid();
      }

      expect(ids[1]).to.not.equal(ids[0]);
      expect(ids[1]).to.not.equal(ids[2]);
    });
  });
  
  describe("Merge sort, Insertion sort, Quick sort", () => {
    var intArray = [];
    var objArray = [];
    var sortedIntArray = [0,1,2,3,4,6,8,8,9];
    var sortedObjArray = [
      {value: 0},
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4},
      {value: 6},
      {value: 8},
      {value: 8},
      {value: 9},
    ];
    
    var compareObj = (a, b) => a.value < b.value;
    
    beforeEach(() => {
      intArray = [4,3,6,8,2,8,1,0,9];
      objArray = [];
      
      intArray.forEach( number => objArray.push({value: number}) );
    });
    
    it("should sort the array of integers", () => {
      expect(Utils.insertionSort(intArray)).to.deep.equal(sortedIntArray);
      expect(Utils.quickSort(intArray)).to.deep.equal(sortedIntArray);
      expect(Utils.mergeSort(intArray)).to.deep.equal(sortedIntArray);
    });
    
    it("should sort the array of objects", () => {
      expect(Utils.insertionSort(objArray, compareObj)).to.deep.equal(sortedObjArray);
      expect(Utils.quickSort(objArray, compareObj)).to.deep.equal(sortedObjArray);
      expect(Utils.mergeSort(objArray, compareObj)).to.deep.equal(sortedObjArray);
    });
  })
});

