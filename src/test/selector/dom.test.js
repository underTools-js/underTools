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

describe('selector dom Integration Test', () => {
  it('should select DOM element', () => {
    expect(document.querySelector('h1') === _('h1').dom()).toBe(true);
  });

  it('should select DOM elements', () => {
    for (let i = 0; i < document.querySelectorAll('.root').length; i += 1) {
      expect(
        document.querySelectorAll('.root')[i] === _('.root').dom()[i],
      ).toBe(true);
    }
  });

  it('should modify DOM element by another element', () => {
    expect(_('h1').dom()).not.toBe(undefined);
    expect(_('p').dom()).toBe(undefined);

    _('h1').dom(_('p', 'create').text('Hello world'));

    expect(_('h1').dom()).toBe(undefined);
    expect(_('p').dom()).not.toBe(undefined);
  });

  it('should modify DOM elements by another element', () => {
    expect(_('.root').dom()).not.toBe(undefined);
    expect(_('p').dom()).toBe(undefined);

    _('.root').dom(_('p', 'create').text('Hello world'));

    expect(_('.root').dom()).toBe(undefined);
    expect(_('p').dom()).not.toBe(undefined);
  });
});
