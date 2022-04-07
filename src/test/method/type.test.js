/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
import _ from '../../index.js';

describe('Type test', () => {
  it('should return the type of the variable', () => {
    const testString = 'string';
    const testBoolean = true;
    const testInt = 3;
    const testFloat = 3.33;
    const testArray = [3, 4, 5];
    const testObject = { name: 'John' };

    expect(_.type(testString) === 'string').toBe(true);
    expect(_.type(testBoolean) === 'boolean').toBe(true);
    expect(_.type(testInt) === 'integer').toBe(true);
    expect(_.type(testFloat) === 'float').toBe(true);
    expect(_.type(testArray) === 'array').toBe(true);
    expect(_.type(testObject) === 'object').toBe(true);
  });
});
