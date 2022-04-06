/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-cycle */
/* eslint-disable jest/valid-title */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/no-export */
/* eslint-disable import/extensions */
import _ from '../index.js';

export const map = (arr, callback = _.id) =>
  [...arr].map((value) => callback(value));
export const each = (arr, callback = _.id) =>
  [...arr].forEach((value) => callback(value));
export const filter = (arr, test = () => true) =>
  [...arr].filter((value) => test(value));
