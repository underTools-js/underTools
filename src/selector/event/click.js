const click = (element) => {
  if (element.length !== undefined) {
    for (const singleEl of element) {
      singleEl.click();
    }
  } else {
    element.click();
  }
  return element;
};

export default click;
