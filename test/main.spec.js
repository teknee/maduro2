import { expect } from 'chai';
import * as Maduro from '../src/main';

describe('Main', () => {
  it('should have utils', () => {
    expect(Maduro).to.have.property('utils');
  });

  it('should have bag', () => {
    expect(Maduro).to.have.property('bag');
  });

  it('should have queue', () => {
    expect(Maduro).to.have.property('queue');
  });

  it('should have stack', () => {
    expect(Maduro).to.have.property('stack');
  });
  
  it('should have fixedStack', () => {
    expect(Maduro).to.have.property('fixedStack');
  });
});
