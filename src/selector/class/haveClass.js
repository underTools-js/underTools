const haveClass = (name, element) => {
  let el;
  const classArray = [];
  if (element.length !== undefined) {
    for (const singleEl of element) {
      classArray.push(singleEl.classList.contains(name));
    }
    el = classArray;
  } else {
    el = element.classList.contains(name);
  }
  return el;
};

export default haveClass;
