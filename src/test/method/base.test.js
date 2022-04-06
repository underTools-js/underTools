/* eslint-disable import/extensions */
import _ from '../../index.js';

describe('Base test', () => {
  it('should be return the element', () => {
    const test = _.id(3);
    expect(test === 3).toBe(true);
  });

  it('should be return the element multiply by 2', () => {
    const test = _.double(3);
    expect(test === 6).toBe(true);
  });
});
