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

describe('selector event Integration Test', () => {
  it('should add event remove the DOM element', () => {
    expect(_('h1').dom()).not.toBe(undefined);

    _('h1').on('click', () => {
      _('h1').remove();
    });
    _('h1').click();

    expect(_('h1').dom()).toBe(undefined);
  });

  it('should add event add the DOM elements', () => {
    expect(_('.root').dom()).not.toBe(undefined);
    expect(_('.root p').dom()).toBe(undefined);

    _('.root').on('click', () => {
      _('.root').add(_('p', 'create').text('test'));
    });
    _('.root').click();

    expect(_('.root p').dom()).not.toBe(undefined);
  });
});
