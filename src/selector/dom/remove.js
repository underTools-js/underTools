const remove = (element) => {
  if (element.length !== undefined) {
    for (const singleEl of element) {
      singleEl.remove();
    }
  } else {
    element.remove();
  }
  return element;
};

export default remove;
