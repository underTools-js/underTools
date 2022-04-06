/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
import _ from '../../index.js';

describe('Scale test', () => {
  it('should scale the array elements, with int, between the entered min and max', () => {
    const test = _.scale([3, 7, 12, 8, 1], 0, 20);
    expect(test[2] === 20 && test[4] === 0 && test[1] === 10).toBe(true);
  });

  it('should scale the array elements, with float, between the entered min and max', () => {
    const test = _.scale([3, 7, 12, 8, 1], 0, 20, false);
    expect(
      test[2] === 20 && test[4] === 0 && test[1] === 10.909090909090908
    ).toBe(true);
  });
});
