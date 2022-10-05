'use strict';

/********************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String  *
 *                                                                                          *
 ********************************************************************************************/



/**
 * 1) Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */

// JS - #1

function concatenateStrings(value1, value2) {
    if (typeof value1 === 'string' && typeof value2 === 'string') {
        return value1 + value2;
    } throw new Error('Entered data is invalid');
}

concatenateStrings('aaa', 'bbb');

// JS - #2

function concatenateStringsSecond(value1, value2) {
    return value1.concat(value2);
}

concatenateStringsSecond('aaa', 'bbb');


/**
 * 2) Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
    if (typeof value === 'string') {
        return value.length;
    } throw new Error('Entered data is invalid')
}

getStringLength('eightttt');

/**
 * 3) Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
    if (typeof firstName === 'string' && typeof lastName === 'string') {
        return (`Hello, ${firstName} ${lastName}!`);
    } throw new Error('Entered data is invalid')
}

getStringFromTemplate('Valentin', 'Turuk');

/**
 * 4) Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
    if (typeof value === 'string') {
        return value.slice(7, -1);
    } throw new Error('Entered data is invalid');
}

extractNameFromTemplate('Hello, Valentin Turuk!');


/**
 * 5) Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
    if (typeof value === 'string') {
        return value.substr(0, 1);
    } throw new Error('Entered data is invalid');
}

getFirstChar('Valentin Turuk');

/**
 * 6) Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
    if (typeof value === 'string') {
        return value.trim();
    } throw new Error('Entered data is invalid');
}

removeLeadingAndTrailingWhitespaces('\tHello, World!   ');

/**
 * 7) Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
    if (typeof value === 'string' && typeof count === 'number') {
        return value.repeat(count);
    } throw new Error('Entered data is invalid');
}

repeatString('Valentin', 2)

/**
 * 8) Remove the first occurrence of string inside another string
 * 
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
    if (typeof str === 'string' && typeof value === 'string') {
        return str.replace(value, '');
    } throw new Error('Entered data is invalid')
}

removeFirstOccurrences('I like legends', 'end');

/**
 * 9) Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
    if (typeof str === 'string') {
        return str.slice(1, -1);
    } throw new Error('Entered data is invalid');
}

unbracketTag('<Valentin>');


/**
 * 10) Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
    if (typeof str === 'string') {
        return str.toUpperCase();
    } throw new Error('Entered data is invalid');
}

convertToUpperCase('Valentin');

/**
 * 11) Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com' => ['angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com']
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
    if (typeof str === 'string') {
        return str.split(';');
    } throw new Error('Entered data is invalid');
}

extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com');

/**
 * 12) Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
    if (typeof width === 'number' && typeof height === 'number') {
        const top = '┌' + '─'.repeat(width - 2) + '┐\n';
        const bottom = '└' + '─'.repeat(width - 2) + '┘';
        const middle = '│' + ' '.repeat(width - 2) + '│\n';
        const figure = `${top}${middle.repeat(height - 2)}${bottom}`;
        return figure;
    } throw new Error('Entered data is invalid');
}

getRectangleString(20, 13);


/**
 * 13) Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
    if (typeof str === 'string') {
        let iteration = [];
        for (let i of str) {
            let letter = String.fromCodePoint(i.charCodeAt() + 13);
            if (i >= 'A' && i <= 'Z' && letter < 'Z') {
                iteration.push(letter);
            } else if (i >= 'A' && i <= 'Z' && letter > 'Z') {
                letter = String.fromCodePoint(i.charCodeAt() - 13);
                iteration.push(letter);
            } else if (i >= 'a' && i <= 'z' && letter < 'z') {
                iteration.push(letter);
            } else if (i >= 'a' && i <= 'z' && letter > 'z') {
                letter = String.fromCodePoint(i.charCodeAt() - 13);
                iteration.push(letter);
            } else {
                letter = i;
                iteration.push(letter);
            }
        }
        const result = iteration.join('');
        return result;
    } throw new Error('Entered data is invalid');
}

encodeToRot13('Gb trg gb gur bgure fvqr!');

/**
 * 14) Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
    return typeof (`value`) === 'string'
}

isString('Valentin');


/**
 * 15) Returns playid card id.
 * 
 * Playing cards inittial deck inclides the cards in the following order:
 * 
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 * 
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 * 
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1 
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
    if (typeof value === 'string') {
        const cardDeck = ['A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
            'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
            'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
            'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'];
        return cardDeck.indexOf(value)
    } throw new Error('Entered data is invalid');
}

getCardId('7♦');


module.exports = {
    concatenateStrings: concatenateStrings,
    getStringLength: getStringLength,
    getStringFromTemplate: getStringFromTemplate,
    extractNameFromTemplate: extractNameFromTemplate,
    getFirstChar: getFirstChar,
    removeLeadingAndTrailingWhitespaces: removeLeadingAndTrailingWhitespaces,
    repeatString: repeatString,
    removeFirstOccurrences: removeFirstOccurrences,
    unbracketTag: unbracketTag,
    convertToUpperCase: convertToUpperCase,
    extractEmails: extractEmails,
    getRectangleString: getRectangleString,
    encodeToRot13: encodeToRot13,
    isString: isString,
    getCardId: getCardId
};
