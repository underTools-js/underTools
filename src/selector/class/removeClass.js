const removeClass = (name, element) => {
  if (element.length !== undefined) {
    for (const singleEl of element) {
      singleEl.classList.remove(name);
    }
  } else {
    element.classList.remove(name);
  }
  return element;
};

export default removeClass;
