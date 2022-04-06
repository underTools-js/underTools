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

describe('selector hide and display Integration Test', () => {
  it('should hide and display the DOM element', () => {
    expect(_('h1').style('display') === 'block').toBe(true);

    _('h1').hide();

    expect(_('h1').style('display') === 'none').toBe(true);

    _('h1').display();

    expect(_('h1').style('display') === 'block').toBe(true);
  });

  it('should hide and display the DOM elements', () => {
    for (const item of _('.root').style('display')) {
      expect(item === 'block').toBe(true);
    }

    _('.root').hide();

    for (const item of _('.root').style('display')) {
      expect(item === 'none').toBe(true);
    }

    _('.root').display();

    for (const item of _('.root').style('display')) {
      expect(item === 'block').toBe(true);
    }
  });
});
