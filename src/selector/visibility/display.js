const display = (element) => {
  if (element.length !== undefined) {
    for (const singleEl of element) {
      singleEl.style.display = 'block';
    }
  } else {
    element.style.display = 'block';
  }
  return element;
};

export default display;
