/* eslint-disable no-mixed-operators */
/* eslint-disable import/no-cycle */
/* eslint-disable jest/valid-title */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/no-export */
/* eslint-disable import/extensions */
import _ from '../index.js';

const scale = (arr, min = 0, max = 1, int = true) => {
  const minArr = Math.min(...arr);
  const maxArr = Math.max(...arr);
  const result = _.map(arr, (x) => min + (max - min) * (x - minArr) / (maxArr - minArr));
  return int ? _.map(result, (x) => x | 0) : result;
};

export default scale;
