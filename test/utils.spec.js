import { expect } from 'chai';
import Utils from '../src/utils';

describe('Utils', () => {
  it('should have an identity method', () => {
    expect(Utils).to.have.property('identity');
  });

  it('should have a hash method', () => {
    expect(Utils).to.have.property('hash');
  });

  it('should have a hash16 method', () => {
    expect(Utils).to.have.property('hash16');
  });

  it('should have a getUid method', () => {
    expect(Utils).to.have.property('getUid');
  });
});
