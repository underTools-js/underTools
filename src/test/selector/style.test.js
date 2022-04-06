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

describe('selector style Integration Test', () => {
  it('should modify style of the DOM element', () => {
    expect(_('h1').style('font-size') === '10em').not.toBe(true);

    _('h1').style('font-size', '10em');

    expect(_('h1').style('font-size') === '10em').toBe(true);
  });

  it('should show style of the DOM element', () => {
    _('h1').style();
    expect(_('h1').style().color).not.toBe(undefined);
  });

  it('should modify style of the DOM elements', () => {
    const styles = _('.root').dom();
    for (const style of styles) {
      expect(_(style).style('font-size') === '10em').not.toBe(true);
    }

    _('.root').style('font-size', '10em');

    const items = _('.root').dom();
    for (const item of items) {
      expect(_(item).style('font-size') === '10em').toBe(true);
    }
  });

  it('should show style of the DOM elements', () => {
    for (const item of _('.root').style()) {
      expect(item.color).not.toBe(undefined);
    }
  });
});
