const text = (content, element) => {
  let el;
  const textArray = [];
  if (element.length !== undefined) {
    for (const singleEl of element) {
      if (content === undefined) {
        textArray.push(singleEl.textContent);
      } else {
        singleEl.textContent = content;
        textArray.push(singleEl);
      }
    }
    el = textArray;
  } else if (content === undefined) {
    el = element.textContent;
  } else {
    element.textContent = content;
    el = element;
  }
  return el;
};

export default text;
