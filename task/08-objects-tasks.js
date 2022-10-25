'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 **************************************************************************************************/


/**
 * 1) Returns the rectagle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    var r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function () {
        return this.width * this.height;
    }
}

const r = new Rectangle(10, 20);

/**
 * 2) Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
    const jsonObject = JSON.stringify(obj);
    return jsonObject;
}

getJSON({ width: 10, height: 20 });

/**
 * 3) Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    var r = fromJSON(Rectangle.prototype, '{"width":10, "height":20}');
 *
 */
function fromJSON(proto, json) {
    const object = JSON.parse(json);
    const arr = Object.values(object);
    const jsObject = new proto.constructor(...arr);

    return jsObject;
}

fromJSON(Rectangle.prototype, '{"width":10, "height":20}');


/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurences
 *
 * All types of selectors can be combined using the combinators ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy and implement the functionality
 * to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string repsentation according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple, clear and readable as possible.
 *
 * @example
 *
 *  var builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()  => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()  => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()        =>    'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

const cssSelectorBuilder = {
    elementValue: '',
    idValue: '',
    classValue: '',
    attrValue: '',
    pseudoClassValue: '',
    pseudoElementValue: '',
    selector1: '',
    combinator: '',
    selector2: '',


    stringify: function () {
        const cssSelector = this.elementValue + this.idValue + this.classValue + this.attrValue + this.pseudoClassValue + this.pseudoElementValue + this.selector1 + this.combinator + this.selector2;
        this.elementValue = '';
        this.idValue = '';
        this.classValue = '';
        this.attrValue = '';
        this.pseudoClassValue = '';
        this.pseudoElementValue = '';
        this.selector1 = '';
        this.combinator = '';
        this.selector2 = '';
        return cssSelector;
    },

    element: function (value) {
        this.elementValue = `${this.elementValue}${value}`;
        return cssSelectorBuilder;
    },

    id: function (value) {
        this.idValue = `${this.idValue}#${value}`;
        return cssSelectorBuilder;
    },

    class: function (value) {
        this.classValue = `${this.classValue}.${value}`;
        return cssSelectorBuilder;
    },

    attr: function (value) {
        this.attrValue = `${this.attrValue}[${value}]`;
        return cssSelectorBuilder;
    },

    pseudoClass: function (value) {
        this.pseudoClassValue = `${this.pseudoClassValue}:${value}`;
        return cssSelectorBuilder;
    },

    pseudoElement: function (value) {
        this.pseudoElementValue = `${this.pseudoElementValue}::${value}`;
        return cssSelectorBuilder;
    },

    combine: function (selector1, combinator, selector2) {
        this.selector1 = selector1.collect();
        this.combinator = combinator;
        this.selector2 = selector2.collect();
        return cssSelectorBuilder;
    },

    collect: function () {
        const cssSelector = this.elementValue + this.idValue + this.classValue + this.attrValue + this.pseudoClassValue + this.pseudoElementValue;
        this.elementValue = '';
        this.idValue = '';
        this.classValue = '';
        this.attrValue = '';
        this.pseudoClassValue = '';
        this.pseudoElementValue = '';
        return cssSelector;        
    }

};


module.exports = {
    Rectangle: Rectangle,
    getJSON: getJSON,
    fromJSON: fromJSON,
    cssSelectorBuilder: cssSelectorBuilder
};
