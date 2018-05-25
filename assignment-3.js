// -----------------------------------------------------------------------------------
// PART I
// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.
function fib(n) {
    let first = 0;
    let second = 1;
    let current = 0;
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        for (let i = 1; i < n; i++) {
            current = first + second;
            first = second;
            second = current;
        }
    }
    return current;
}
// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(9));

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(numArray) {
    let temp;
    for (let i = 0; i < numArray.length - 1; i++) {
        for (let j = 0; j < numArray.length - i - 1; j++) {
            if (numArray[j] > numArray[j + 1]) {
                temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
            }
        }
    }

    return numArray;
}

let arr = [1, 8, 4, 6, 12, 2, 3];
// console.log(bubbleSort(arr));

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
function reverseStr(someStr) {
    let newStr = '';
    for (let i = someStr.length - 1; i >= 0; i--) {
        newStr += someStr[i];
    }
    return newStr;
}

// console.log(reverseStr(`hello`));
// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum) {
    if (someNum === 1) {
        return someNum * someNum;
    }

    return someNum * factorial(someNum - 1);
}

// console.log(factorial(3));

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr, length, offset) {
    let sub = '';
    if (someStr.length < length) {
        alert('The length of the offset is longer than the string.');
    } else if (someStr.length < offset + length) {
        alert(`The length of the string + the offset is longer than the string.`);
    }

    for (let i = offset; i < offset + length; i++) {
        sub += someStr[i];
    }
    return sub;
}

// console.log(substring('this is a string', 4, 20));

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
function isEven(someNum) {
    someNum = someNum.toString();
    if (someNum[someNum.length - 1] === '0' || someNum[someNum.length - 1] === '2' || someNum[someNum.length - 1] === '4'
        || someNum[someNum.length - 1] === '6' || someNum[someNum.length - 1] === '8') {
        return true;
    } else {
        return false;
    }
}

// console.log(isEven(3637832298373));

// Do not use % operator.
// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr) {
    for (let i = 0; i < someStr.length; i++) {
        if (someStr[i] !== someStr[someStr.length - i - 1]) {
            return false;
        }
    }
    return true;
}

// console.log(isPalindrome('civic'));
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
function printShape(shape, size, character) {
    let space = Math.ceil(size / 2);
    console.log(space);
    switch (shape) {
        case 'square':
            for (let i = 0; i < size; i++) {
                let str = '';
                for (let j = 0; j < size; j++) {
                    str += character
                }
                console.log(str);
            }
            break;
        case 'triangle':
            for (let i = 0; i < size; i++) {
                let str = '';
                for (let j = 0; j < i + 1; j++) {
                    str += character
                }
                console.log(str);
            }
            break;
        case 'diamond':
            for (let i = 0; i < size/2; i++) {
                let str = '';
                for (let j = 0; j < space; j++) {
                    str += '/';
                }
                for (let j = 0; j <= i; j++) {
                    str += character;
                }
                space-=2;
                console.log(str);
            }
            // space += 2;
            // for(let i = size/2-1; i > 0; i--) {
            //     let str = '';
            //     for (let j = 0; j < space; j++) {
            //         str += ' ';
            //     }
            //     for (let j = 0; j <i; j++) {
            //         str += character;
            //     }
            //     space+=2;
            //     console.log(str);
            // }
            break;
        default:
            console.log(`That is not a known shap
                please enter square, triangle, or diamond.`);
            break;
    }
}

printShape('diamond', 5, '%');

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj) {
    for (let elem in someObj) {
        console.log(`property: ${elem} value: ${someObj[elem]}`);
    }
}

let obj = {
    name: 'shawn',
    age: 29
};

// traverseObject(obj);


// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteElement(someArr) {
    console.log(arr.length);
    if (someArr.length >= 3) {
        delete arr[2];
    }
    else {
        console.log('array to short');
    }
    console.log(arr.length);
}

// deleteElement(arr);
// console.log(arr);

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(someArr) {
    console.log(someArr.length);
    someArr.splice(3, 1);
    console.log(someArr.length);
}

// spliceElement(arr);


// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
//   var john = new Person("John", 30);

function Person(name, age) {
    this.name = name;
    this.age = age;
}
var john = new Person("John", 30);
// console.log(john);


// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
//     var john = getPerson("John", 30);
function getPerson(name, age) {
    return {
        name: name,
        age: age
    }
}

var john2 = new getPerson('John', 30);
// console.log(john2);