/* eslint-disable no-multi-assign */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import selector from './selector/selector.js';
import dom from './selector/dom.js';
import style from './selector/style.js';
import text from './selector/text.js';
import on from './selector/event/on.js';
import click from './selector/event/click.js';
import hide from './selector/visibility/hide.js';
import display from './selector/visibility/display.js';
import attr from './selector/attribute/attr.js';
import haveClass from './selector/class/haveClass.js';
import addClass from './selector/class/addClass.js';
import removeClass from './selector/class/removeClass.js';
import toggleClass from './selector/class/toggleClass.js';
import add from './selector/dom/add.js';
import remove from './selector/dom/remove.js';
import { double, id } from './method/base.js';
import { each, filter, map } from './method/loop.js';
import randArray from './method/rand.js';
import uniq from './method/uniq.js';
import join from './method/join.js';
import inter from './method/inter.js';
import scale from './method/scale.js';

const _ = (element, action) => {
  const self = {
    /*
     * Select the element(s) or create an element if the action
     * parameter is equal to create
     *
     * @param { (String | HTMLElement) } element
     * @param { String } action
     */
    element: selector(element, action),

    // Element
    /*
     * Returns the element(s) or modifies it if a parameter is
     * entered
     *
     * @param { HTMLElement } change
     */
    dom: (change) => dom(change, self.element),

    /*
     * Returns the complete style of the element(s)
     * or the value of the property if the property parameter
     * is passed as a parameter
     * or attribute a value has the property if the property
     * and the value are entered as a parameter
     *
     * @param { String } property
     * @param { String } value
     */
    style: (property, value) => style(property, value, self.element),

    /*
     * Returns the text of the element(s) or attribute of the
     * text to an element if the content parameter is entered
     *
     * @param { String } content
     */
    text: (content) => text(content, self.element),

    // Event
    /*
     * Performs an addEventListener on the element(s)
     *
     * @param { String } event
     * @param { Function } callback
     */
    on: (event, callback) => on(event, callback, self.element),

    /*
     * Click on the element(s)
     */
    click: () => click(self.element),

    // Visibility
    /*
     * Set display none to the element(s)
     */
    hide: () => hide(self.element),

    /*
     * Set display block to the element(s)
     */
    display: () => display(self.element),

    // Attribute
    /*
     * Set on the element(s) the attribute passed as a parameter
     * with name and assigns it the value passed as a parameter
     *
     * @param { String } name
     * @param { String } value
     */
    attr: (name, value) => attr(name, value, self.element),

    // Class
    /*
     * Checks if the element(s) has the class entered as parameter
     *
     * @param { String } name
     */
    haveClass: (name) => haveClass(name, self.element),

    /*
     * Add to the element(s) the class entered as a parameter
     *
     * @param { String } name
     */
    addClass: (name) => addClass(name, self.element),

    /*
     * Remove to the element(s) the class entered as a parameter
     *
     * @param { String } name
     */
    removeClass: (name) => removeClass(name, self.element),

    /*
     * Toggle to the element(s) the class entered as a parameter
     *
     * @param { String } name
     */
    toggleClass: (name) => toggleClass(name, self.element),

    // DOM
    /*
     * Add in the element(s) the element entered as a parameter
     *
     * @param { HTMLElement } newElement
     */
    add: (newElement) => add(newElement, self.element),

    /*
     * Remove the element(s)
     */
    remove: () => remove(self.element),
  };

  return self;
};

/*
 * Returns the double of the value in parameter
 *
 * @param { Number } x
 */
_.double = (x) => double(x);

/*
 * Returns the value as a parameter
 */
_.id = (x) => id(x);

/*
 * Allows you to use Javascript's map function with a string
 * or an array
 *
 * @param { (String | Array) } arr
 * @param { Function } func
 */
_.map = (arr, func) => map(arr, func);

/*
 * Allows you to use the Javascript forEach function with a
 * character string or an array with the name forEach or each.
 *
 * @param { (String | Array) } arr
 * @param { Function } func
 */
_.forEach = _.each = (arr, func) => each(arr, func);

/*
 * Allows you to use the JavaScript filter function with a
 * character string or an array.
 *
 * @param { (String | Array) } arr
 * @param { Function } test
 */
_.filter = (arr, test) => filter(arr, test);

/*
 * Returns a random element in the array passed as a parameter
 *
 * @param { (String | Array) } arr
 */
_.randArray = (arr) => randArray(arr);

/*
 * Returns unique characters from a string or unique elements
 * from an array.
 *
 * @param { (String | Array) } arr
 */
_.uniq = (arr) => uniq(arr);

/*
 * Creates and returns a new character string by concatenating,
 * with separator if is entered as a parameter, all the elements
 * of an array or all the characters of a character string
 *
 * @param { (String | Array) } arr
 * @param { String } separator
 */
_.join = (arr, separator) => join(arr, separator);

/*
* Returns an array containing the common characters of character
* strings or the common elements of arrays passed as parameters
*
* @param { (String | Array) } arr, ...array
*/
_.inter = (arr, ...array) => inter(arr, ...array);

/*
* Returns an array containing the common characters of character
* strings or the common elements of arrays passed as parameters
*
* @param { Array[Number] } arr
* @param { Number } min
* @param { Number } max
* @param { Boolean } int
*/
_.scale = (arr, min, max, int) => scale(arr, min, max, int);

export default _;
