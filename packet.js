// -----------------------------------------------------------------------------------
// PART I
// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.

let a = 0;
let b = 1;
let c;
let temp;
for(fib = 0; fib < 10; fib++) {
    c = a + b
    console.log(`the ${fib + 1}th number in the fibonacci sequence is ${c}`);
    temp = b;
    b = c;
    a = temp;
}

// // 2. Bubble Sort
// // Define function: bubbleSort(numArray)
// // Use the bubble sort algorithm to sort the array.
// // Return the sorted array.
//
let a = [3, 13, 3, 72, 20, 98, 18, 74, 9];
function bubbleSort(numArray) {
    let length = numArray.length;
    for (let i = 0; i < length; i++) { //Number of passes
      for (let j = 0; j < (length - i - 1); j++) { //Notice that j < (length - i)
        //Compare the adjacent positions
        if(numArray[j] > numArray[j+1]) {
          //Swap the numbers
          let tmp = numArray[j];  //Temporary variable to hold the current number
          numArray[j] = numArray[j+1]; //Replace current number with adjacent number
          numArray[j+1] = tmp; //Replace adjacent number with current number
        }
      }        
    }
  }
  bubbleSort(a);
  console.log(a);
  
// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

let test = 'hello';
let test2 = 'abc123';
let test3 = 'mah name iz jeff';

function reverseStr(someStr) {
    let split = someStr.split("");
    let reverse = split.reverse(); 
    let reversed = reverse.join(""); 
    console.log(`${reversed} is just ${someStr} but backwards`); 
    }

reverseStr(test);
reverseStr(test2);
reverseStr(test3);

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.

function factorial(someNum){
  if (someNum === 0) {
      return 1;
  } else {
      return someNum * factorial(someNum-1);
  }
}
console.log(`the factorial of 0 is ${factorial(0)}, the factorial of 4 is ${factorial(4)},
  and the factorial of 8 is ${factorial(8)} `);


// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.

let whatever = 'hello'
function substring(someStr, length, offset) {
  if(isNaN(someStr)) {
    let holder = '';
    for (j = offset; j < offset + length; j++) {
      holder +=  someStr.charAt(j);
    }
    console.log(holder);
  }
  else {
    console.log('Incorrect input, must be a string');
  }
}
substring(whatever, 2, 2);

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.

function isEven(someNum) {
  if(someNum === 0) {
      console.log(someNum + ' is neither even or odd.')
  }
  if(isNaN(someNum)) {
    console.log(`${someNum} is not a number`);
  }
  let test = someNum
    while (test > 1) {
      test = test - 2;
        if (test === 0) {
          console.log(someNum + ' is even.')
        }       
    }
  if (test === 1){
      console.log(someNum + ' is odd.')
    }
}
isEven(15);
isEven(10);
isEven(0);
isEven(218361);
isEven('sd');

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false

let test1 = 'wow';
let test2 = 'cookie';
let test3 = 'level';

function isPalindrome(someStr) {
  let split = someStr.split("");
  let reverse = split.reverse(); 
  let test = reverse.join(""); 
  if (someStr === test) {
    console.log(`${someStr} is a palindrome. ${someStr} = ${test}`)
  }
  else {
    console.log(`${someStr} is not a palindrome. ${someStr} != ${test}`)
  }
}

isPalindrome(test1);
isPalindrome(test2);
isPalindrome(test3);

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

}

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.

function Car(make, color, model){
  this.make = make;
  this.color = color;
  this.model = model;
}

function Table(size, color, material){
  this.size = size;
  this.color = color;
  this.material = material;
}

let car = new Car('Toyota', 'Blue', 'Matrix');
let table = new Table('Huge', 'Grey', 'Wood');
function traverseObject(someObj){

  for (let property in someObj){
      console.log(`${property} = ${someObj[property]}`)
  }
}

traverseObject(car);
traverseObject(table);

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.

let fruits = ["Banana", "Orange", "Apple", "Mango"]; 
function deleteElement(someArr) {
  console.log(`number of elements: ${someArr.length} || Elements are ${fruits}`);
  delete fruits[2];
  console.log(`number of elements: ${someArr.length} || Elements are ${fruits}`);
}
deleteElement(fruits);


// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.

let fruits = ["Banana", "Orange", "Apple", "Mango"];
function spliceElement(someArr) {
  console.log(`number of elements: ${someArr.length} || Elements are ${fruits}`);
  fruits.splice(2, 1);
  console.log(`number of elements: ${someArr.length} || Elements are ${fruits}`);
}
spliceElement(fruits);

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
//     var john = new Person("John", 30);

function Person(name, age){
  this.name = name;
  this.age = age;
}

let John = new Person('John', 30);
console.log(John);

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
//     var john = getPerson("John", 30);

function getPerson(name, age){
  let human = {
      name: name,
      age: age
  }
  return human;
}

let john = getPerson('John', 30);

console.log(john);