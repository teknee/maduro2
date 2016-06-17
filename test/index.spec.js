import { expect } from 'chai';
import {test} from '../src/index';

console.log('This is test: ' + test);

describe('index', () => {
    it('should do its thing', () => {
      expect(test).to.be.false;
    });
});
