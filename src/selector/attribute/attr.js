const attrFunc = (name, value, element) => {
  let el;
  if (value === undefined) {
    el = element.getAttribute(name);
  } else {
    element.setAttribute(name, value);
    el = element;
  }
  return el;
};

const attr = (name, value, element) => {
  if (element.length !== undefined) {
    const attrArray = [];
    for (const singleEl of element) {
      attrArray.push(attrFunc(name, value, singleEl));
    }
    return attrArray;
  }
  return attrFunc(name, value, element);
};

export default attr;
