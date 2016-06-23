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
});

