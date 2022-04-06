const on = (event, callback, element) => {
  if (element.length !== undefined) {
    for (const singleEl of element) {
      singleEl.addEventListener(event, callback);
    }
  } else {
    element.addEventListener(event, callback);
  }
  return element;
};

export default on;
