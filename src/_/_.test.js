/* eslint-disable no-restricted-syntax */
/* eslint-disable no-trailing-spaces */
import Render from './Render';
import _ from './_';

beforeEach(() => {
  document.body.innerHTML = Render();
});

afterEach(() => {
  document.body.innerHTML = '';
});

describe('_ with single element Integration Test', () => {
  it('should select DOM element', () => {
    expect(document.querySelector('h1') === _('h1').dom()).toBe(true);
  });

  it('should modify DOM element by another element', () => {
    expect(_('h1').dom()).not.toBe(undefined);
    expect(_('p').dom()).toBe(undefined);

    _('h1').dom(_('p', 'create').text('Hello world'));

    expect(_('h1').dom()).toBe(undefined);
    expect(_('p').dom()).not.toBe(undefined);
  });

  it('should change text of the DOM element', () => {
    expect(_('h1').text() === 'Hello world').toBe(true);
    expect(_('h1').text() === 'test').not.toBe(true);

    _('h1').text('test');

    expect(_('h1').text() === 'Hello world').not.toBe(true);
    expect(_('h1').text() === 'test').toBe(true);
  });

  it('should modify style of the DOM element', () => {
    expect(_('h1').style('font-size') === '10em').not.toBe(true);

    _('h1').style('font-size', '10em');

    expect(_('h1').style('font-size') === '10em').toBe(true);
  });

  it('should show style of the DOM element', () => {
    _('h1').style();
    expect(_('h1').style().color).not.toBe(undefined);
  });

  it('should add event remove the DOM element', () => {
    expect(_('h1').dom()).not.toBe(undefined);

    _('h1').on('click', () => {
      _('h1').remove();
    });
    _('h1').click();

    expect(_('h1').dom()).toBe(undefined);
  });

  it('should add and get attribute to the DOM element', () => {
    expect(_('h1').attr('class') === 'test').toBe(true);
    expect(_('h1').attr('data-test')).toBe(null);

    _('h1').attr('data-test', 'test');

    expect(_('h1').attr('data-test')).not.toBe(undefined);
  });

  it('should play with class with the DOM element', () => {
    expect(_('h1').haveClass('hello')).not.toBe(true);

    _('h1').addClass('hello');

    expect(_('h1').haveClass('hello')).toBe(true);

    _('h1').removeClass('hello');

    expect(_('h1').haveClass('hello')).not.toBe(true);

    _('h1').toggleClass('hello');

    expect(_('h1').haveClass('hello')).toBe(true);
  });

  it('should hide and display the DOM element', () => {
    expect(_('h1').style('display') === 'block').toBe(true);

    _('h1').hide();

    expect(_('h1').style('display') === 'none').toBe(true);

    _('h1').display();

    expect(_('h1').style('display') === 'block').toBe(true);
  });

  it('should add element in the DOM element', () => {
    expect(_('#root p').dom()).toBe(undefined);

    const el = _('p', 'create').text('test');
    _('#root').add(el);

    expect(_('#root p').dom()).not.toBe(undefined);
  });
});

describe('_ with create action Integration Test', () => {
  it('should create element and add it in the DOM', () => {
    expect(_('#root p').dom()).toBe(undefined);

    _('#root').add(_('p', 'create').text('Hello world'));

    expect(_('#root p').dom()).not.toBe(undefined);
  });
});

describe('_ with list of element Integration Test', () => {
  it('should select DOM element', () => {
    for (let i = 0; i < document.querySelectorAll('.root').length; i += 1) {
      expect(document.querySelectorAll('.root')[i] === _('.root').dom()[i]).toBe(true);
    }
  });

  it('should modify DOM elements by another element', () => {
    expect(_('.root').dom()).not.toBe(undefined);
    expect(_('p').dom()).toBe(undefined);

    _('.root').dom(_('p', 'create').text('Hello world'));

    expect(_('.root').dom()).toBe(undefined);
    expect(_('p').dom()).not.toBe(undefined);
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

  it('should modify style of the DOM element', () => {
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

  it('should show style of the DOM element', () => {
    for (const item of _('.root').style()) {
      expect(item.color).not.toBe(undefined);
    }
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

  it('should remove the DOM elements', () => {
    expect(_('.root').dom()).not.toBe(undefined);

    _('.root').remove();

    expect(_('.root').dom()).toBe(undefined);
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

  it('should add element in the DOM elements', () => {
    expect(_('.root p').dom()).toBe(undefined);

    const el = _('p', 'create').text('test');
    _('.root').add(el);

    for (const item of _('.root p').dom()) {
      expect(item).not.toBe(undefined);
    }
  });
});
