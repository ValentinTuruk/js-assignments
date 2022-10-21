'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz'
    } else if (num % 3 === 0) {
        return 'Fizz'
    } else if (num % 5 === 0) {
        return 'Buzz'
    } else {
        return num
    }
}

getFizzBuzz(20);


/**
 * 2) Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
    if (n > 0) {
        let sum = 1;
        for (let i = 1; i <= n; ++i) {
            sum *= i
        }
        return sum;

    } else if (n = 0) {
        return 1
    }
}

getFactorial(10);

/**
 * 3) Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
    let sum = 0;
    for (let i = n1; i <= n2; ++i) {
        sum += i;
    }
    return sum;
}

getSumBetweenNumbers(-5, 10);

/**
 * 4) Returns true, if a triangle can be built with the specified sides a,b,c and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
    if (a + b <= c || c + b <= a || a + c <= b) {
        return false;
    } else {
        return true;
    }
}

isTriangle(1, 2, 3)


/**
 * 5) Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object 
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 * 
 *  (5;5)
 *     -------------  
 *     |           | 
 *     |           |  height = 10
 *     ------------- 
 *        width=20    
 * 
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 * 
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 * 
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *  
 */
function doRectanglesOverlap(rect1, rect2) {
    let matchHeight = false;
    let matchWidth = false;

    if ((rect1.top <= rect2.top && rect1.top + rect1.height >= rect2.top) || (rect1.top <= rect2.top + rect2.height && rect1.top + rect1.height >= rect2.top)) {
        matchHeight = true;
    }
    if ((rect1.left <= rect2.left && rect1.left + rect1.width >= rect2.left) || (rect1.left <= rect2.left + rect2.width && rect1.left + rect1.width >= rect2.left)) {
        matchWidth = true;
    }

    return matchHeight && matchWidth;
}

doRectanglesOverlap({ top: 0, left: 0, width: 10, height: 10 }, { top: 5, left: 5, width: 20, height: 20 });

/**
 * 6) Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of 
 *  {
 *     center: {
 *       x: 5,       
 *       y: 5
 *     },        
 *     radius: 20
 *  }
 * 
 * Point is object of 
 *  {
 *     x: 5,
 *     y: 5
 *  }
 * 
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *   
 */
function isInsideCircle(circle, point) {
    const sideOne = circle.center.x - point.x;
    const sideTwo = circle.center.y - point.y;
    const extention = Math.sqrt(sideOne ** 2 + sideTwo ** 2);
    return extention < circle.radius ? true : false;
}

isInsideCircle({ center: { x: 0, y: 0 }, radius: 10 }, { x: 0, y: 0 });

/**
 * 7) Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */

function findFirstSingleChar(str) {
    let nonReapeated = [];
    for (let i = 0; i < str.length - 1; ++i) {
        if (str.split(str[i]).length - 1 == 1) {
            nonReapeated.push(str[i]);
        }
    }
    if (nonReapeated.length > 0) {
        return nonReapeated[0];
    } else {
        return null;
    }

}

findFirstSingleChar('entente');


/**
 * 8) Returns the string representation of math interval, specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    const firstPoint = isStartIncluded ? '[' : '(';
    const secondPoint = isEndIncluded ? ']' : ')';
    if (a < b) {
        return `${firstPoint}${a}, ${b}${secondPoint}`;
    } return `${firstPoint}${b}, ${a}${secondPoint}`;

}

getIntervalString(0, 1, true, true);

/**
 * 9) Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */

function reverseString(str) {
    let reverseString = '';
    for (let i = str.length - 1; i >= 0; --i) {
        reverseString += str[i]
    }
    return reverseString
}

reverseString('The quick brown fox jumps over the lazy dog');

/**
 * 10) Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */

function reverseInteger(num) {
    const str = num.toString();
    let reverseString = '';
    for (let i = str.length - 1; i >= 0; --i) {
        reverseString += str[i]
    }
    return +reverseString
}

reverseInteger(87354);


/**
 * 11) Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
    const checkDigit = String(ccn).slice(-1);
    const str = String(ccn).slice(0, -1);
    const arr = str.split('').reverse();
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        if ((i % 2)) {
            sum += +arr[i];
        } else {
            if (2 * + arr[i] > 9) {
                const strAfterMultiply = String(`${2 * +arr[i]}`);
                const arrAfterMultiply = strAfterMultiply.split('');
                sum += arrAfterMultiply.reduce((sum, item) => sum + +item, 0);
            } else {
                sum += 2 * +arr[i];
            }
        }
    }

    console.log(sum)
    return ((10 - (sum % 10)) % 10 === +checkDigit);
}

isCreditCardNumber(79927398713);

/**
 * 12) Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */

function getDigitalRoot(num) {
    let sumForTaskEleveen = 0;
    const str = String(num);
    const arr = str.split('');
    sumForTaskEleveen = arr.reduce((sum, item) => sum + +item, 0);
    return sumForTaskEleveen > 9 ? getDigitalRoot(sumForTaskEleveen) : sumForTaskEleveen;
}

getDigitalRoot(165536);

/**
 * 13) Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true 
 */
function isBracketsBalanced(str) {
    let arr = str.split('');
    let result = true;
    for (let i = 0; i < arr.length;) {
        switch (arr[i]) {
            case '[':
                const closingSquareBracketsIndex = arr.indexOf(']', i);
                if (closingSquareBracketsIndex !== -1) {
                    arr.splice(i, 1);
                    arr.splice(`${closingSquareBracketsIndex - 1}`, 1);
                } else {
                    result = false;
                }
                break;
            case '{':
                const closingCurlyBracketsIndex = arr.indexOf('}', i);
                if (closingCurlyBracketsIndex !== -1) {
                    arr.splice(i, 1);
                    arr.splice(`${closingCurlyBracketsIndex - 1}`, 1);
                } else {
                    result = false;
                }
                break;
            case '(':
                const closingBracketsIndex = arr.indexOf(')', i);
                if (closingBracketsIndex !== -1) {
                    arr.splice(i, 1);
                    arr.splice(`${closingBracketsIndex - 1}`, 1);
                } else {
                    result = false;
                }
                break;
            case '<':
                const closingIndex = arr.indexOf('>', i);
                if (closingIndex !== -1) {
                    arr.splice(i, 1);
                    arr.splice(`${closingIndex - 1}`, 1);
                } else {
                    result = false;
                }
                break;
            default:
                result = false;
        }
        if (result === false) {
            break;
        }
    }
    return result;
}

isBracketsBalanced('{[(<{[}>)]}')

/**
 * 14) Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */

const startDate = new Date('2000-01-01 01:00:00.100');
const endDate = new Date('2000-01-01 01:44:50.100');

function timespanToHumanString(startDate, endDate) {
    const period = (new Date(endDate - startDate) / 1000);
    let notification;

    if (0 <= period && period <= 45) {
        notification = 'a few seconds ago';
    } else if (45 < period && period <= 90) {
        notification = 'a minute ago';
    } else if (90 < period && period <= 45 * 60) {
        if (period % 60 <= 30) {
            notification = `${Math.floor(period / 60)} minutes ago`;
        } else {
            notification = `${Math.ceil(period / 60)} minutes ago`;
        }
    } else if (45 * 60 < period && period <= 90 * 60) {
        notification = 'an hour ago';
    } else if (90 * 60 < period && period <= 22 * 60 * 60) {
        if (period / 60 % 60 <= 30) {
            notification = `${Math.floor(period / 60 / 60)} hours ago`;
        } else {
            notification = `${Math.ceil(period / 60 / 60)} hours ago`;
        }
    } else if (22 * 60 * 60 < period && period <= 36 * 60 * 60) {
        notification = 'a day ago';
    } else if (36 * 60 * 60 < period && period <= 25 * 24 * 60 * 60) {
        if (period / 60 / 60 % 24 <= 12) {
            notification = `${Math.floor(period / 24 / 60 / 60)} days ago`;
        } else {
            notification = `${Math.ceil(period / 24 / 60 / 60)} days ago`;
        }
    } else if (25 * 24 * 60 * 60 < period && period <= 45 * 24 * 60 * 60) {
        notification = `a month ago`;
    } else if (45 * 24 * 60 * 60 < period && period <= 345 * 24 * 60 * 60) {
        notification = `${Math.round(period / 30 / 24 / 60 / 60)} months ago`;
    } else if (345 * 24 * 60 * 60 < period && period <= 545 * 24 * 60 * 60) {
        notification = `a year ago`;
    } else if (546 * 24 * 60 * 60 <= period) {
        notification = `${Math.round(period / 365 / 24 / 60 / 60)} years ago`;
    }

    return notification;
}

timespanToHumanString(startDate, endDate);

/**
 * 15) Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */

function toNaryString(num, n) {
    return parseInt(num, 10).toString(n);
}

toNaryString(1024, 2)

/**
 * 16) Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
    let commonPart = '';
    let commonPath = '';
    pathes.sort((a, b) => b - a);

    checkPart: for (let i = 0; i < pathes[0].length; ++i) {
        checkItems: for (let u = 1; u < pathes.length; ++u) {
            if (pathes[0][i] === pathes[u][i]) {
                if (u === pathes.length - 1) {
                    commonPart += pathes[0][i];
                };
            } else {
                break checkPart;
            }
        }
    }

    const commonPathEndIndex = commonPart.lastIndexOf('/');

    if (commonPathEndIndex >= 0) {
        commonPath = commonPart.slice(0, commonPathEndIndex + 1);
    };

    return commonPath;
}

getCommonDirectoryPath(['/web/images/image1.png', '/web/images/image2.png']);

/**
 * 17) Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
    const matrixRowNumber = m1.length;
    const matrixColumnNumber = m2[0].length;
    const iterationNumber = m1[0].length;
    const outerArray = new Array(matrixColumnNumber);
    for (let a = 0; a < outerArray.length; ++a) {
        const nArray = new Array(matrixRowNumber).fill(0);
        outerArray[a] = nArray;
    }

    for (let n = 0; n < matrixRowNumber; ++n) {
        for (let u = 0; u < matrixRowNumber; ++u) {
            let cellSum = 0;
            let row;
            let column;

            for (let i = 0; i < iterationNumber; ++i) {
                const cell = m1[u][i] * m2[i][n];
                cellSum += cell;
                row = u;
                column = n;
            }
            outerArray[row][column] = cellSum;
        }
    }

    return outerArray;
}

getMatrixProduct([[1, 0, 0], [0, 1, 0], [0, 0, 1]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

/**
 * 18) Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
    const firstLine = position[0][0] + position[1][0] + position[2][0];
    const secondLine = position[0][1] + position[1][1] + position[2][1];
    const thirdLine = position[0][2] + position[1][2] + position[2][2];
    const fourthLine = position[0][0] + position[0][1] + position[0][2];
    const fifthLine = position[1][0] + position[1][1] + position[1][2];
    const sixthLine = position[2][0] + position[2][1] + position[2][2];
    const seventhLine = position[0][0] + position[1][1] + position[2][2];
    const eighthLine = position[0][2] + position[1][1] + position[2][0];
    let winner;

    const winLinesArray = [
        firstLine,
        secondLine,
        thirdLine,
        fourthLine,
        fifthLine,
        sixthLine,
        seventhLine,
        eighthLine
    ];

    for (let i of winLinesArray) {
        switch (i) {
            case 'XXX':
                winner = 'X';
                break;
            case '000':
                winner = '0';
                break;
        }
    }
    return winner;
}

evaluateTicTacToePosition([['X', , '0'], [, 'X', '0'], [, , 'X']]);

module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString: getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString: timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition: evaluateTicTacToePosition
};
