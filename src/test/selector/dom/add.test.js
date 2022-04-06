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

describe('selector add Integration Test', () => {
  it('should add element in the DOM element', () => {
    expect(_('#root p').dom()).toBe(undefined);

    const el = _('p', 'create').text('test');
    _('#root').add(el);

    expect(_('#root p').dom()).not.toBe(undefined);
  });

  it('should add element in the DOM elements', () => {
    expect(_('.root p').dom()).toBe(undefined);

    const el = _('p', 'create').text('test');
    _('.root').add(el);

    for (const item of _('.root p').dom()) {
      expect(item).not.toBe(undefined);
    }
  });

  it('should create element and add it in the DOM', () => {
    expect(_('#root p').dom()).toBe(undefined);

    _('#root').add(_('p', 'create').text('Hello world'));

    expect(_('#root p').dom()).not.toBe(undefined);
  });
});
