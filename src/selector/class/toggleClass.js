const toggleClass = (name, element) => {
  if (element.length !== undefined) {
    for (const singleEl of element) {
      singleEl.classList.toggle(name);
    }
  } else {
    element.classList.toggle(name);
  }
  return element;
};

export default toggleClass;
