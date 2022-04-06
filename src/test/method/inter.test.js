/* eslint-disable import/extensions */
import _ from '../../index.js';

describe('Inter test', () => {
  it('should returns the common character in the character strings passed as parameters', () => {
    const test = _.inter('javascript', 'internet', 'text');
    expect(test[0] === 't').toBe(true);
  });

  it('returns the different elements of the character string passed as parameter', () => {
    const test = _.inter('abracadabra');
    expect(test.length === 5).toBe(true);
  });

  it('should returns the common element in the arrays passed as parameters', () => {
    const test = _.inter([10, 5, 6, 9, 1], [1, 3, 5, 7, 9], [3, 10, 1, 5, 4]);
    expect(test[0] === 5 && test[1] === 1).toBe(true);
  });

  it('returns the different elements of the array passed as parameter', () => {
    const test = _.inter([1, 2, 1, 2, 1, 2]);
    expect(test[0] === 1 && test[1] === 2).toBe(true);
  });
});
