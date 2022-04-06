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

describe('selector remove Integration Test', () => {
  it('should remove the DOM element', () => {
    expect(_('h1').dom()).not.toBe(undefined);

    _('h1').remove();

    expect(_('h1').dom()).toBe(undefined);
  });

  it('should remove the DOM elements', () => {
    expect(_('.root').dom()).not.toBe(undefined);

    _('.root').remove();

    expect(_('.root').dom()).toBe(undefined);
  });
});
