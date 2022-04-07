const type = (variable) => {
  let val;
  if (Array.isArray(variable)) {
    val = 'array';
  } else if (typeof variable === 'string') {
    val = 'string';
  } else if (typeof variable === 'boolean') {
    val = 'boolean';
  } else if (typeof variable === 'number') {
    if (Number.isInteger(variable)) {
      val = 'integer';
    } else {
      val = 'float';
    }
  } else if (variable !== null && typeof variable === 'object') {
    val = 'object';
  } else {
    val = 'undefined';
  }
  return val;
};

export default type;
