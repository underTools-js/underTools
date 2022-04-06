const selector = (element, action) => {
  let el;
  if (action === undefined) {
    if (typeof element !== 'string') {
      el = element;
    } else if (document.querySelectorAll(element).length > 1) {
      el = document.querySelectorAll(element);
    } else if (document.querySelectorAll(element).length === 1) {
      el = document.querySelector(element);
    }
  } else if (action === 'create') {
    el = document.createElement(element);
  }
  return el;
};

export default selector;
