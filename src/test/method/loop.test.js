/* eslint-disable import/extensions */
import _ from '../../index.js';

describe('Loop test', () => {
  it('should be map the string element', () => {
    const test = _.map('hello', (x) => x === 'l');
    expect(test[2]).toBe(true);
  });

  it('should be map the array element', () => {
    const test = _.map([3, 5, 7, 9, 11], (x) => x * 2);
    expect(test[1] === 10).toBe(true);
  });

  it('should return the element mapped', () => {
    const test = _.map([3, 5, 7, 9, 11]);
    expect(test[0] === 3).toBe(true);
  });

  it('sould filter the string element', () => {
    const test = _.filter('hello world', (x) => x === 'o');
    expect(test.length === 2).toBe(true);
  });

  it('sould filter the array element', () => {
    const test = _.filter([3, 5, 7, 9, 11], (x) => x > 5);
    expect(test[0] === 7).toBe(true);
  });

  it('sould return the element filtred', () => {
    const test = _.filter([3, 5, 7, 9, 11]);
    expect(test[0] === 3).toBe(true);
  });

  it('sould return each characters of the character string', () => {
    let count = 0;
    const chars = 'hello world';
    _.each(chars, (x) => {
      expect(chars[count] === x).toBe(true);
      count += 1;
    });
  });

  it('sould return each element of the array', () => {
    let count = 0;
    const array = [1, 2, 3, 4, 7, 9];
    _.each(array, (x) => {
      expect(array[count] === x).toBe(true);
      count += 1;
    });
  });
});
