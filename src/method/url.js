/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
/* eslint-disable jest/valid-title */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/no-export */
/* eslint-disable import/extensions */
import _ from '../index.js';

const url = (link) => {
  const editParam = (param, method) => {
    const paramsArray = [];

    param.forEach((p) => {
      if (method === 'get') {
        paramsArray.push(self.element.searchParams.get(p));
      } else if (method === 'getAll') {
        paramsArray.push(self.element.searchParams.getAll(p));
      } else if (method === 'set') {
        if (_.type(p) === 'array') {
          if (p.length === 2) {
            paramsArray.push(self.element.searchParams.set(p[0], p[1]));
          } else {
            console.error(
              'The array in parameter must contain exactly two values',
            );
          }
        } else {
          console.error('Parameters must be of array type');
        }
      } else if (method === 'has') {
        paramsArray.push(self.element.searchParams.has(p));
      } else if (method === 'delete') {
        paramsArray.push(self.element.searchParams.delete(p));
      } else if (method === 'append') {
        if (_.type(p) === 'array') {
          if (p.length === 2) {
            paramsArray.push(self.element.searchParams.append(p[0], p[1]));
          } else {
            console.error(
              'The array in parameter must contain exactly two values',
            );
          }
        } else {
          console.error('Parameters must be of array type');
        }
      }
    });

    return paramsArray;
  };

  const self = {
    element: link ? new URL(link) : new URL(document.location.href),
    get: () => self.element,
    getParams: (...param) => editParam(param, 'get'),
    getAllParams: (...param) => editParam(param, 'getAll'),
    hasParams: (...param) => editParam(param, 'has'),
    deleteParams: (...param) => editParam(param, 'delete'),
    setParams: (...param) => editParam(param, 'set'),
    appendParams: (...param) => editParam(param, 'append'),
  };

  return self;
};

export default url;
