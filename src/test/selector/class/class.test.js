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

describe('selector class Integration Test', () => {
  it('should play with class with the DOM element', () => {
    expect(_('h1').haveClass('hello')).not.toBe(true);

    _('h1').addClass('hello');

    expect(_('h1').haveClass('hello')).toBe(true);

    _('h1').removeClass('hello');

    expect(_('h1').haveClass('hello')).not.toBe(true);

    _('h1').toggleClass('hello');

    expect(_('h1').haveClass('hello')).toBe(true);
  });

  it('should play with class with the DOM elements', () => {
    for (const item of _('.root').haveClass('hello')) {
      expect(item).not.toBe(true);
    }

    _('.root').addClass('hello');

    for (const item of _('.root').haveClass('hello')) {
      expect(item).toBe(true);
    }

    _('.root').removeClass('hello');

    for (const item of _('.root').haveClass('hello')) {
      expect(item).not.toBe(true);
    }

    _('.root').toggleClass('hello');

    for (const item of _('.root').haveClass('hello')) {
      expect(item).toBe(true);
    }
  });
});
