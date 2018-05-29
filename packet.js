// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.

function fib(n) {
    var a = 1, b = 0, temp;

    while (n > 0) {
        temp = a;
        a = a + b;
        b = temp;
        n--;
    }
    return b;
}
console.log(fib(5));

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(numArray)
{
    let swapped;
    do {
        swapped = false;
        for (var i=0; i < numArray.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = numArray[i];
                numArray[i] = numArray[i+1];
                numArray[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

function reverseStr(someStr) {
    let c = 0;
    var i = someStr.length;
    //console.log('I ='+i);
    let revstr = '';
    while (i > -1) {
        revstr += someStr.charAt(i);
        i--;
    }
    console.log(revstr);
}
reverseStr('This String');

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.

function factorial(someNum) {
    if (someNum == 1) {
        return 1;
    }
    else if (someNum == 0) {
        return 1;
    }
    else {
        return (someNum * factorial(someNum - 1));
    }
}
console.log(factorial(3));

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.

function substring(someStr, length, offset) {
    let stroffset = offset;
    let strlength = length;
    let returnstr = '';
    for (let i = o; i <= someStr.length(); i++) {
        if ((length + offset) > someStr.length()) {
            console.log('This is my error');
        }
        else if (i >= offset) {
            if (strlength >= 0) {
                returnstr += someStr.charAt(i);
                strlength--;
                if (strlength == 0) {
                    return returnstr;
                }
            }
            else {
                console.log('This is my other error');
            }
        }
    }
}


// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum) {
    if (someNum / 2 == 0) {
        console.log('True');
    }
    else {
        console.log('False');
    }
}
isEven(4);



// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
//racecar

function isPalindrome(someStr) {
    let a = someStr.length;
    let test = false;
    let b = 0;
    let d = 'nothing';
    do {
        let c = someStr.charAt(b);
        let d = someStr.charAt(a);
        if (c = d) {
            test = true;
        }
        else {
            test = true
        }
    } while (test == true)
    console.log(test);
}



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
    let specialchar = character;
    if (shape = 'Triangle') {
        for (let i = 0; i < height; i++) {
            console.log(specialchar);
            specialchar += character;
        }

    }

    else if (shape = 'Diamond') {
        


    }

    else if (shape = 'Square') {
        let specialchar = '';
        for (let i = 0; i <= height; i++) {
            specialchar += character;
        }
        for (let j = 0; j < height; j++) {
            console.log(specialchar);
        }
    }
    else {
        console.log('Nope, not a shape');
    }
}

printShape

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.




// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteElement(someArr){
console.log(someArr);
delete someArr[2];
console.log(someArr);
}



// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.

function spliceElement(someArr){
    console.log(someArr);
    someArr.splice(2,1);
}



// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
//     var john = new Person("John", 30);


function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayHello = () =>{
        console.log(`Hello my name is ${this.name}`)
    }
}

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
//     var john = getPerson("John", 30);

function getPerson(name, age){
    this.name = name;
    this.age = age;

}



