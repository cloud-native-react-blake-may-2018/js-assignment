// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.
function fib(n){
    let num1=0;
    let num2=1;
    let fib=0;
    while(fib<n){
        fib=num1 + num2;
    }
}
// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum){
    while(someNum > 1)
    {
        someNum /= 2;
    }
    if(someNum==1){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(8));
console.log(isEven(9));
// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false

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

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj){
    let property;
    for (property in someObj) {
        console.log(`${property}: ${someObj[property]}`);
    }

}

let person = {firstName:"Bino", lastName:"Philip", age:25}; 
traverseObject(person);

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteElement(someArr){
    console.log(`Array length: ${someArr.length}`);
    delete someArr[2];
    console.log(`Array length: ${someArr.length}`);
}

let nums = [1,2,3,4];
deleteElement(nums);
// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(someArr){
    console.log(`Array length: ${someArr.length}`);
    someArr.splice(2,1);
    console.log(`Array length: ${someArr.length}`);
}
let nums = [1,2,3,4];
spliceElement(nums);
// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);
function Person(name,age){
    this.name = name;
    this.age = age;
}

var john = new person('John',30);
console.log(john);

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);
function getPerson(name,age){
    var literal ={
        name: name,
        age: age
    }
    return literal;
}
    
var john = getPerson('john', 30);
console.log(john);