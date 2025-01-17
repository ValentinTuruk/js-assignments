'use strict';

/********************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates          *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math    *
 *                                                                                          *
 ********************************************************************************************/


/**
 * 1) Returns an area of a rectangle given by width and heigth.
 *
 * @param {numder} width
 * @param {number} height
 * @return {number}
 *
 * @example:
 *   5, 10 => 50
 *   5, 5  => 25
 */
function getRectangleArea(width, height) {
    if (typeof width === 'number' && typeof height === 'number') {
        return width * height;
    } throw new Error('Number should be entered');
}

getRectangleArea(12, 12);

// Lodash

function getRectangleAreaLo(width, height) {
    return _.multiply(width, height)
}

/**
 * 2) Returns a circumference of circle given by radius.
 *
 * @param {number} radius
 * @return {number}
 *
 * @example:
 *   5    => 31.41592653589793
 *   3.14 => 19.729201864543903
 *   0    => 0
 */
function getCicleCircumference(radius) {
    if (typeof radius === 'number') {
        return 2 * Math.PI * radius;
    } throw new Error('Number should be entered');
}

getCicleCircumference(5);


// Lodash
function getCicleCircumferenceLo(radius) {
    return 2 * _.multiply(Math.PI, radius);
}


/**
 * 3) Returns an average of two given numbers.
 *
 * @param {numder} value1
 * @param {number} value2
 * @return {number}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
function getAverage(value1, value2) {
    if (typeof value1 === 'number' && typeof value2 === 'number') {
        return (value1 / 2 + value2 / 2);
    } throw new Error('Numbers should be entered');
}

getAverage(-3, 5);

// Lodash
function getAverageLo(value1, value2) {
    return _.mean([value1, value2]);
}


/**
 * 4) Returns a distance beetween two points by cartesian coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @return {number}
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
    if (typeof x1 === 'number' && typeof x2 === 'number' && typeof y1 === 'number' && typeof y2 === 'number') {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    } throw new Error('Numbers should be entered');
}

getDistanceBetweenPoints(-5, 0, 10, -10)

// Lodash
function getDistanceBetweenPointsLo(x1, y1, x2, y2) {
    return Math.sqrt(_.sum([Math.pow(_.subtract(x1, x2), 2), Math.pow(_.subtract(y2, y1), 2)]));
}


/**
 * 5) Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
function getLinearEquationRoot(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return (0 - b) / a;
    } throw new Error('Numbers should be entered');
}

getLinearEquationRoot(5, 0)

// Lodash
function getLinearEquationRootLo(a, b) {
    return _.divide(_.subtract(0, b), a);
}


/**
 * 6) Returns an angle (in radians) between two vectors given by xi and yi, coordinates in Cartesian plane
 * See details https://en.wikipedia.org/wiki/Euclidean_vector#Representations
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 *
 * @example:
 *   (1,0) (0,1)     => π/2
 *   (0,1) (0,-1)    => π
 *   (0,-1) (1,0)    => π/2
 *   (0,1) (0,1)     => 0
 *   (0,1) (1,2)     => 0
 */
function getAngleBetweenVectors(x1, y1, x2, y2) {
    if (typeof x1 === 'number' && typeof x2 === 'number' && typeof y1 === 'number' && typeof y2 === 'number') {
        const cos = (x1 * x2 + y1 * y2) / (Math.sqrt(x1 ** 2 + y1 ** 2) * Math.sqrt(x2 ** 2 + y2 ** 2));
        const angleRadians = Math.acos(cos);
        return angleRadians
    } throw new Error('Numbers should be entered');
}

getAngleBetweenVectors(1, 3, 4, 2);

// Lodash
function getAngleBetweenVectorsLo(x1, y1, x2, y2) {
    const cos = _.divide(_.sum([_.multiply(x1, x2), _.multiply(y1, y2)]), _.multiply(Math.sqrt(_.sum([Math.pow(x1, 2), Math.pow(y1, 2)])), Math.sqrt(_.sum([Math.pow(x2, 2), Math.pow(y2, 2)]))));
    const angleRadians = Math.acos(cos);
    return angleRadians
}


/**
 * 7) Returns a last digit of a integer number.
 *
 * @param {number} value
 * @return {number}
 *
 * @example:
 *   100     => 0
 *    37     => 7
 *     5     => 5
 *     0     => 0
 */
function getLastDigit(value) {
    if (typeof value === 'number') {
        return value.toString().slice(-1);
    } throw new Error('Numbers should be entered');
}

getLastDigit(2654);

// Lodash
function getLastDigitLo(value) {
    return _.toString(value).slice(-1);
}


/**
 * 8) Returns a number by given string representation.
 *
 * @param {string} value
 * @return {number}
 *
 * @example:
 *    '100'     => 100
 *     '37'     => 37
 * '-525.5'     => -525.5
 */
function parseNumberFromString(value) {
    if (typeof value === 'string') {
        return +value
    } throw new Error('Numbers should be entered');
}

parseNumberFromString('-525.5');

// Lodash
function parseNumberFromStringLo(value) {
    return _.toNumber(value);
}


/**
 * 9) Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 *
 * @example:
 *   1,1,1   => 1.7320508075688772
 *   3,3,3   => 5.196152422706632
 *   1,2,3   => 3.741657386773941
 */
function getParallelipidedDiagonal(a, b, c) {
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
    } throw new Error('Numbers should be entered');
}

getParallelipidedDiagonal(1, 2, 3)

// Lodash
function getParallelipidedDiagonalLo(a, b, c) {
    return Math.sqrt(_.sum([Math.pow(a, 2), Math.pow(b, 2), Math.pow(c, 2)]));
}


/**
 * 10) Returns the number rounded to specified power of 10.
 *
 * @param {number} num
 * @param {number} pow
 * @return {number}
 *  
 * @example:
 *   1234, 0  => 1234
 *   1234, 1  => 1230
 *   1234, 2  => 1200
 *   1234, 3  => 1000
 *   1678, 0  => 1678
 *   1678, 1  => 1680
 *   1678, 2  => 1700
 *   1678, 3  => 2000
 */
function roundToPowerOfTen(num, pow) {
    if (typeof num === 'number' && typeof pow === 'number') {
        return Math.round(num / 10 ** pow) * 10 ** pow;
    } throw new Error('Numbers should be entered');
}

roundToPowerOfTen(1678, 3);

// Lodash
function roundToPowerOfTenLo(num, pow) {
    return _.round(num, -pow);
}


/**
 * 11) Returns true is the number is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 *
 * @param {number} n
 * @return {bool}
 * 
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
function isPrime(n) {
    if (typeof n === 'number' && n > 0) {
        let divideCounter = 0;

        for (let i = 2; i < n; ++i) {
            if (n % i === 0) {
                divideCounter += i;
            }
        }

        return (!divideCounter);
    } throw new Error('Wrong input');
}

isPrime(113);

/**
 * 12) Tries to convert value to number and returns it if conversion was successfull;
 * otherwise returns default value passed as a second argument.
 *
 * @param {any} value
 * @param {any} def
 * @return {number}
 *
 * @example
 *   toNumber(null, 0) => 0
 *   toNumber('test', 0) => 0
 *   toNumber('1', 0) => 1
 *   toNumber(42, 0) => 42
 *   toNumber(new Number(42), 0) => 42
 */
function toNumber(value, def) {
    if (value >= 0 || value < 0) {
        return +value;
    } else {
        return def;
    }
}

toNumber('test', 0);

// Lodash
function toNumberLo(value, def) {
    return _.toNumber(value) || def;
 }


module.exports = {
    getRectangleArea: getRectangleArea,
    getCicleCircumference: getCicleCircumference,
    getAverage: getAverage,
    getDistanceBetweenPoints: getDistanceBetweenPoints,
    getLinearEquationRoot: getLinearEquationRoot,
    getAngleBetweenVectors: getAngleBetweenVectors,
    getLastDigit: getLastDigit,
    parseNumberFromString: parseNumberFromString,
    getParallelipidedDiagonal: getParallelipidedDiagonal,
    roundToPowerOfTen: roundToPowerOfTen,
    isPrime: isPrime,
    toNumber: toNumber
};
