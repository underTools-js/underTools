/* eslint-disable import/extensions */
import _ from '../../index.js';

describe('Join test', () => {
  it('should join the character string with the separator', () => {
    const test = _.join('abracadabra', ';');
    expect(test === 'a;b;r;a;c;a;d;a;b;r;a').toBe(true);
  });

  it('should return the character string', () => {
    const test = _.join([1, 2, 3]);
    expect(test === '123').toBe(true);
  });

  it('should join the array with the separator', () => {
    const test = _.join('abracadabra');
    expect(test === 'abracadabra').toBe(true);
  });

  it('should join the array without separator', () => {
    const test = _.join([1, 2, 3]);
    expect(test === '123').toBe(true);
  });
});
