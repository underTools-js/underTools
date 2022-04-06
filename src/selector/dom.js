const dom = (change, element) => {
  if (change !== undefined) {
    if (element.length !== undefined) {
      const el = element[0].replaceWith(change);
      for (const singleEl of element) {
        singleEl.remove();
      }
      element = el;
    } else {
      element.replaceWith(change);
    }
  }
  return element;
};

export default dom;
