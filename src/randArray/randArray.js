/* eslint-disable no-bitwise */
function randArray(array) {
  const rand = (Math.random() * array.length) | 0;
  const rValue = array[rand];
  return rValue;
}

export default randArray;
