/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
import _ from '../../index.js';

describe('Rand test', () => {
  it('should be return random element in the array', () => {
    let alertItem = false;
    const array = [1, 2, 3, 4, 5];
    const result = _.randArray(array);
    if (array.indexOf(result) !== -1) alertItem = true;
    expect(alertItem).toBe(true);
  });

  it('should be return random number between a min and a max entered as parameters', () => {
    const random = _.rand(2, 4);
    expect(random === 2 || random === 3 || random === 4).toBe(true);
  });
});
