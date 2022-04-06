/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
/* eslint-disable jest/valid-title */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/no-export */
/* eslint-disable import/extensions */
import _ from '../index.js';

const inter = (arr, ...array) => _.filter(_.uniq(arr), (value) => [...array].every((accumulator) => accumulator.includes(value)));

export default inter;
