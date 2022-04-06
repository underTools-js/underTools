const getStyle = (property, value, element) => {
  let el;
  if (property === undefined && value === undefined) {
    el = window.getComputedStyle(element, null);
  } else if (value === undefined) {
    el = window.getComputedStyle(element, null).getPropertyValue(property);
  } else {
    element.style[property] = value;
    el = element;
  }
  return el;
};

const style = (property, value, element) => {
  let el;
  if (element.length !== undefined) {
    const styleArray = [];
    for (const singleEl of element) {
      styleArray.push(getStyle(property, value, singleEl));
    }
    el = styleArray;
  } else {
    el = getStyle(property, value, element);
  }
  return el;
};

export default style;
