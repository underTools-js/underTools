/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-trailing-spaces */
import Render from './Render.js';
import _ from '../../index.js';

beforeEach(() => {
  document.body.innerHTML = Render();
});

afterEach(() => {
  document.body.innerHTML = '';
});

describe('selector text Integration Test', () => {
  it('should change text of the DOM element', () => {
    expect(_('h1').text() === 'Hello world').toBe(true);
    expect(_('h1').text() === 'test').not.toBe(true);

    _('h1').text('test');

    expect(_('h1').text() === 'Hello world').not.toBe(true);
    expect(_('h1').text() === 'test').toBe(true);
  });

  it('should change text of the DOM elements', () => {
    for (const item of _('.root').text()) {
      expect(item === 'Hello world').toBe(true);
      expect(item === 'test').not.toBe(true);
    }

    _('.root').text('test');

    for (const item of _('.root').text()) {
      expect(item === 'Hello world').not.toBe(true);
      expect(item === 'test').toBe(true);
    }
  });
});
