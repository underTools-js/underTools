/* eslint-disable import/extensions */
import _ from '../../index.js';

describe('Uniq test', () => {
  it('should returns an array of the different characters present in the character string', () => {
    const test = _.uniq('abracadabra');
    expect(test.length === 5).toBe(true);
  });

  it('should returns an array of the different elements present in the array', () => {
    const test = _.uniq([1, 2, 3, 1, 2, 3]);
    expect(test.length === 3).toBe(true);
  });
});
