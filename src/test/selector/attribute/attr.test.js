/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-trailing-spaces */
import Render from '../Render.js';
import _ from '../../../index.js';

beforeEach(() => {
  document.body.innerHTML = Render();
});

afterEach(() => {
  document.body.innerHTML = '';
});

describe('selector attribute Integration Test', () => {
  it('should add and get attribute to the DOM element', () => {
    expect(_('h1').attr('class') === 'test').toBe(true);
    expect(_('h1').attr('data-test')).toBe(null);

    _('h1').attr('data-test', 'test');

    expect(_('h1').attr('data-test')).not.toBe(undefined);
  });

  it('should add and get attribute to the DOM elements', () => {
    for (const item of _('.root').attr('class')) {
      expect(item === 'root').toBe(true);
    }

    for (const item of _('.root').attr('data-test')) {
      expect(item === 'test').not.toBe(true);
    }

    _('.root').attr('data-test', 'test');

    for (const item of _('.root').attr('data-test')) {
      expect(item === 'test').toBe(true);
    }
  });
});
