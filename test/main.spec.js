import { expect } from 'chai';
import * as Maduro from '../src/main';

describe('Main', () => {
  it('should have utils', () => {
    expect(Maduro).to.have.property('utils');
  });
  
  it('should have bag', () => {
    expect(Maduro).to.have.property('bag');
  });
});
