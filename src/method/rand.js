/* eslint-disable no-bitwise */
export const randArray = (arr) => {
  const rand = (Math.random() * arr.length) | 0;
  const rValue = arr[rand];
  return rValue;
};

export const rand = (min, max) => Math.round(Math.random() * (max - min) + min);
