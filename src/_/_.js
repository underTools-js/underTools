/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
function _(element, action) {
  const selector = () => {
    let el;
    if (action === undefined) {
      if (typeof (element) !== 'string') {
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

  const self = {
    // Function
    element: selector(),

    // Element
    dom: (change) => {
      if (change !== undefined) {
        if (self.element.length !== undefined) {
          const el = self.element[0].replaceWith(change);
          for (const singleEl of self.element) {
            singleEl.remove();
          }
          self.element = el;
        } else {
          self.element.replaceWith(change);
        }
      }
      return self.element;
    },
    style: (property, value) => {
      const getStyle = (theElement) => {
        let el;
        if (property === undefined && value === undefined) {
          el = window.getComputedStyle(theElement, null);
        } else if (value === undefined) {
          el = window
            .getComputedStyle(theElement, null)
            .getPropertyValue(property);
        } else {
          theElement.style[property] = value;
          el = theElement;
        }
        return el;
      };

      let el;
      if (self.element.length !== undefined) {
        const styleArray = [];
        for (const singleEl of self.element) {
          styleArray.push(getStyle(singleEl));
        }
        el = styleArray;
      } else {
        el = getStyle(self.element);
      }
      return el;
    },
    text: (content) => {
      let el;
      const textArray = [];
      if (self.element.length !== undefined) {
        for (const singleEl of self.element) {
          if (content === undefined) {
            textArray.push(singleEl.textContent);
          } else {
            singleEl.textContent = content;
            textArray.push(singleEl);
          }
        }
        el = textArray;
      } else if (content === undefined) {
        el = self.element.textContent;
      } else {
        self.element.textContent = content;
        el = self.element;
      }
      return el;
    },

    // Event
    on: (event, callback) => {
      if (self.element.length !== undefined) {
        for (const singleEl of self.element) {
          singleEl.addEventListener(event, callback);
        }
      } else {
        self.element.addEventListener(event, callback);
      }
      return self.element;
    },
    click: () => {
      if (self.element.length !== undefined) {
        for (const singleEl of self.element) {
          singleEl.click();
        }
      } else {
        self.element.click();
      }
      return self.element;
    },

    // Visibility
    hide: () => {
      if (self.element.length !== undefined) {
        for (const singleEl of self.element) {
          singleEl.style.display = 'none';
        }
      } else {
        self.element.style.display = 'none';
      }
      return self.element;
    },
    display: () => {
      if (self.element.length !== undefined) {
        for (const singleEl of self.element) {
          singleEl.style.display = 'block';
        }
      } else {
        self.element.style.display = 'block';
      }
      return self.element;
    },

    // Attribute
    attr: (name, value) => {
      const attrFunc = (theElement) => {
        let el;
        if (value === undefined) {
          el = theElement.getAttribute(name);
        } else {
          theElement.setAttribute(name, value);
          el = theElement;
        }
        return el;
      };

      if (self.element.length !== undefined) {
        const attrArray = [];
        for (const singleEl of self.element) {
          attrArray.push(attrFunc(singleEl));
        }
        return attrArray;
      }
      return attrFunc(self.element);
    },

    // Class
    haveClass: (name) => {
      let el;
      const classArray = [];
      if (self.element.length !== undefined) {
        for (const singleEl of self.element) {
          classArray.push(singleEl.classList.contains(name));
        }
        el = classArray;
      } else {
        el = self.element.classList.contains(name);
      }
      return el;
    },
    addClass: (name) => {
      if (self.element.length !== undefined) {
        for (const singleEl of self.element) {
          singleEl.classList.add(name);
        }
      } else {
        self.element.classList.add(name);
      }
      return self.element;
    },
    removeClass: (name) => {
      if (self.element.length !== undefined) {
        for (const singleEl of self.element) {
          singleEl.classList.remove(name);
        }
      } else {
        self.element.classList.remove(name);
      }
      return self.element;
    },
    toggleClass: (name) => {
      if (self.element.length !== undefined) {
        for (const singleEl of self.element) {
          singleEl.classList.toggle(name);
        }
      } else {
        self.element.classList.toggle(name);
      }
      return self.element;
    },

    // DOM
    add: (el) => {
      if (self.element.length !== undefined) {
        for (const singleEl of self.element) {
          const el2 = el.cloneNode(true);
          singleEl.appendChild(el2);
        }
      } else {
        self.element.appendChild(el);
      }
      return self.element;
    },
    remove: () => {
      if (self.element.length !== undefined) {
        for (const singleEl of self.element) {
          singleEl.remove();
        }
      } else {
        self.element.remove();
      }
      return self.element;
    },
  };

  return self;
}

export default _;
