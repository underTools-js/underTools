const addClass = (name, element) => {
  if (element.length !== undefined) {
    for (const singleEl of element) {
      singleEl.classList.add(name);
    }
  } else {
    element.classList.add(name);
  }
  return element;
};

export default addClass;
