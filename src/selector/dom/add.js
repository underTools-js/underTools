const add = (newElement, element) => {
  if (element.length !== undefined) {
    for (const singleEl of element) {
      const el2 = newElement.cloneNode(true);
      singleEl.appendChild(el2);
    }
  } else {
    element.appendChild(newElement);
  }
  return element;
};

export default add;
