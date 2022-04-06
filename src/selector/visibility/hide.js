const hide = (element) => {
  if (element.length !== undefined) {
    for (const singleEl of element) {
      singleEl.style.display = 'none';
    }
  } else {
    element.style.display = 'none';
  }
  return element;
};

export default hide;
