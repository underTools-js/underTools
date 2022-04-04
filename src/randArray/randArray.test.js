import randArray from './randArray';

describe('Rand array test', () => {
  it('should be return random element in the array', () => {
    let alertItem = false;
    const array = [1, 2, 3, 4, 5];
    const result = randArray(array);
    if (array.indexOf(result) !== -1) alertItem = true;
    expect(alertItem).toBe(true);
  });
});
