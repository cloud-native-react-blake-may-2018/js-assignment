// PART I

// Create a single Javascript file called packet.js to answer these questions.

// Please put the question itself as a comment above each answer.

// -----------------------------------------------------------------------------------

// 1. Fibonacci

// Define function: fib(n) 

// Return the nth number in the fibonacci sequence.

function fib(n) {
    if (n === 1) {
        return 1;
    }
    else if (n === 2) {
        return 1;
    }
    else {
        return fib(n-1) + fib(n-2);
    }
}

// console.log(fib(12));
// COMPLETED!

// 2. Bubble Sort

// Define function: bubbleSort(numArray)

// Use the bubble sort algorithm to sort the array.

function bubbleSort(numArray) {
    let temp = numArray[0];
    let swapped = false;
    do {
        swapped = false;
        for (i = 0; i < numArray.length; i++) {
            if (i === numArray.length - 1) numArray[i] = numArray[i];
            else {
                if (numArray[i] > numArray[i+1]) {
                    temp = numArray[i+1];
                    numArray[i+1] = numArray[i];
                    numArray[i] = temp;
                    swapped = true;
                }
            }
        }
    } while (swapped)
    return numArray;
}

// let nums = [1, 4, 6, 2, 24, 13, 14, 3, 8];
// console.log(nums);
// console.log(bubbleSort(nums));

// COMPLETED!

// Return the sorted array.

// 3. Reverse String

// Define function: reverseStr(someStr)

// Reverse and return the String.

function reverseStr(someStr) {
    let result = '';
    for (i = someStr.length - 1; i >= 0; i--) {
        result += someStr[i];
    }
    return result;
}

// console.log(reverseStr('desserts'));

// COMPLETED!

// 4. Factorial

// Define function: factorial(someNum)

// Use recursion to compute and return the factorial of someNum.

function factorial(someNum) {
    if (someNum === 1) {
        return 1;
    } else {
        return someNum*factorial(someNum - 1);
    }
}

// console.log(factorial(5));

// 5. Substring

// Define function substring(someStr, length, offset)

// Return the substring contained between offset and (offset + length) inclusively.

// If incorrect input is entered, use the alert function and describe why the input was incorrect.

function substring(someStr, length, offset) {
    if (offset === undefined) offset = 0;
    if (length === undefined) length = 1;
    if (someStr === '') return someStr;
    if (length > someStr.length) {
        alert(`Your specified substring length is too long for the string!`);
    } else if (offset > someStr.length) {
        alert(`You are starting at an index beyond the length of the string!`);
    } else {
        if (length + offset > someStr.length) {
            let result = someStr.substring(offset, someStr.length - 1);
            alert(`The combined length you specified and starting position will extend
            beyond the limits of the string! This is all I can give you:
            ${result}`);
        }
        else {
            return someStr.substring(offset, offset+length);
        }
    }
}

// console.log(substring('Scott', 4, 1));

// Not quite. String ops work, but need to figure out alerts.

// 6. Even Number

// Define function: isEven(someNum)

// Return true if even, false if odd.

// Do not use % operator.

function isEven(someNum) {
    let numString = someNum.toString();
    let lastDigit = numString.substr(numString.length - 1, 1);
    let even = (lastDigit === '2' || lastDigit === '4' || lastDigit === '6'
        || lastDigit === '8' || lastDigit === '0');
    return even;
}

// console.log(isEven(5));

// 7. Palindrome

// Define function isPalindrome(someStr)

// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr) {
    let regs = `'.,- ?!`;
    let noPunct = someStr;
    let deleted = noPunct;
    for (let i = 0; i < regs.length; i++) {
        let letter = regs.substring(i, i+1);
        noPunct = noPunct.split(letter).join('');
        console.log(noPunct);
    }
    noPunct = noPunct.toLowerCase();
    console.log(noPunct);
    return noPunct === reverseStr(noPunct);
}
// console.log(isPalindrome('cat'));
// console.log(isPalindrome("level"));
// console.log(isPalindrome('Go hang a salami, I\'m a lasagna hog.'));

// COMPLETED

// 8. Shapes

// Define function: printShape(shape, height, character)

// shape is a String and is either "Square", "Triangle", "Diamond".

// height is a Number and is the height of the shape. Assume the number is odd.

// character is a String that represents the contents of the shape. Assume this String contains just one character.

// Use a switch statement to determine which shape was passed in.

// Use the console.log function to print the desired shape.

// Example for printShape("Square", 3, "%");

// %%%
// %%%
// %%%

// Example for printShape("Triangle", 3, "$");

// $
// $$
// $$$

// Example for printShape("Diamond", 5, "*");

//   *
//  ***
// *****
//  ***
//   *

function printShape(shape, height, character) {
    let result = '';
    switch (shape) {
        case 'Square':
            for(i = 0; i < height; i++) {
                for (j = 0; j < height; j++) {
                    result = result+character;
                    if (j === height - 1) {
                        result = result + '\n';
                    }
                }
            }

            return result;
        break;
        case 'Triangle':
        for(i = 0; i < height; i++) {
            for (j = 0; j < i + 1; j++) {
                result = result+character;
                if (j === i) {
                    result = result + '\n';
                }
            }
        }
        return result;
        break;
        case 'Diamond':
            for(i = 0; i < height; i++) {
                let adjust;
                if (i > Math.floor(height/2)) {
                    adjust = i - (2*(i - Math.floor(height/2)));
                } else {
                    adjust = i;
                }
                for(j = 0; j < height; j++) {
                    if (j >= (Math.floor(height/2) - adjust) && j < (Math.ceil(height/2) + adjust)) {
                        result = result + character;
                    } else {
                        result = result + ' ';
                    }

                    if (j === height - 1) {
                        result = result + '\n';
                    }
                }
            }
            return result;
        break;
        default:
        return `¯\\_(ツ)_/¯`;
    }
}
// console.log(printShape('Diamond', 5, '*'));

// COMPLETED!

// 9. Object literal

// Define function traverseObject(someObj)

// Print every property and it's value.

function traverseObject(someObj) {
    let keys = Object.keys(someObj);
    for (let i = 0; i < Object.keys(someObj).length; i++) {
        console.log(`${Object.keys(someObj)[i]}: ${Object.values(someObj)[i]}`);
    }
}
let scott = {
    name: 'Scott',
    age: 27
};
// traverseObject(scott);
// COMPLETED

// 10. Delete Element

// Define function deleteElement(someArr)

// Print length

// Delete the third element in the array.

// Print length

// The lengths should be the same.
function deleteElement(someArr) {
    // console.log(someArr);
    console.log(someArr.length);
    delete someArr[2];
    // console.log(someArr);
    console.log(someArr.length);
}
// deleteElement([1, 2, 3, 4, 5]);
// COMPLETED

// 11. Splice Element

// Define function spliceElement(someArr)

// Print length

// Splice the third element in the array.

// Print length

// The lengths should be one less than the original length.
function spliceElement(someArr) {
    console.log(someArr.length);
    someArr.splice(2, 1);
    console.log(someArr.length);
}
// spliceElement([1, 2, 3, 4, 5]);
// COMPLETED

// 12. Defining an object using a constructor

// Define a function Person(name, age)

// The following line should set a Person object to the variable john:

function Person(name, age) {
    this.name = name;
    console.log(`Successfully set name to ${this.name}!`);
    this.age = age;
    console.log(`Successfully set age to ${this.age}`);
}
// var john = new Person("John", 30);
// console.log(john);
// COMPLETED

// 13. Defining an object using an object literal

// Define function getPerson(name, age)

function getPerson(name, age) {
    return {
        name: name,
        age: age
    };
}
// The following line should set a Person object to the variable john:

    // var john = getPerson("John", 30);
    // console.log(john);
    // COMPLETED

