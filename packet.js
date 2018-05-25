// -----------------------------------------------------------------------------------
// PART I
// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.
// function fib(n) {
//     if (n < 2) {
//       return 1;
//     } else {
//       return fib(n - 2) + fib(n - 1);
//     }
//   }
//   console.log(fib(0))
//   console.log(fib(1))

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.

// let a = [33, 103, 3, 726, 200, 984, 198, 764, 9];

// function bubbleSort(numArray)
// {
//     let swapped;
//     do {
//         swapped = false;
//         for (let i=0; i < numArray.length-1; i++) {
//             if (numArray[i] > numArray[i+1]) {
//                 let temp = numArray[i];
//                 numArray[i] = numArray[i+1];
//                 numArray[i+1] = temp;
//                 swapped = true;
//             }
//         }
//     } while (swapped);
// }

// bubbleSort(a);
// console.log(a);   

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
// function reverseStr(someStr) {

//     let splitString = someStr.split("");
//     let reverseArray = splitString.reverse(); 
//     let joinArray = reverseArray.join(""); 
//     console.log(joinArray); 
// }
 
// reverseStr("hello");

// 4. Factorial
//Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
// function factorial(someNum){
//     if (someNum === 0) {
//         return 1;
//     } else {
//         return someNum * factorial(someNum-1);
//     }
// }
// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(2));


// 5. Substring

//Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
// let name = 'cruelworld';

// function subString(someStr, length, offset){
//     if (isNaN(someStr)){
//         let ss= '';
//     for (let  i = offset; i < offset+length; i++){
//         //console.log(someStr.charAt(i));
//         ss += someStr.charAt(i)
//         }
//         console.log(ss);

//     }
//     else{ 
//         console.log('String can not be a number!')
//     }
// }

// subString(name, 4, 1);

///////// 6. Even Number//////////////////////////////////////////////////////////////////
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
// function isEven(someNum){
//     console.log(someNum/2)
//     if (someNum/2){
        
//     }else{

//     }
// }
// isEven(13);

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
// let string = 'car'
// function isPalindrome(someStr){

//     let splitString = someStr.split("");
//     let reverseArray = splitString.reverse(); 
//     let joinArray = reverseArray.join(""); 
//     if (someStr === joinArray){
//         console.log(someStr + ' is a palindrome.')
//     }else{
//         console.log(someStr + ' is not a palindrome.')
//     }
// }

// isPalindrome(string)

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
// function printShape(shape, height, character){
//     switch(shape){
//         case 'square':
//         for (let i = 1; i <= height; i++) {
//             for (let j = height; j <= height; j++){
//                 console.log(character.repeat(j))
//             }
//         }
//         break;

//         case 'triangle':
//         for (let i = 1; i <= height; i++) {
//             console.log(character.repeat(i))
//         }
//         break;
//         case 'diamond':
//             let arr = Array();
//             let space = height -2;
        
//             for (let i = 1; i <= height; i++) {
//                 arr += ' '.repeat(space)
//                 arr+= character.repeat(i++)
//                 console.log(arr);
//                 arr = new Array();
//                 space--;
//             }
//             space +=2;
//             for (let i = height-2; i >= 1; i--) {
//                 arr += ' '.repeat(space)
//                 arr+= character.repeat(i--)
//                 console.log(arr);
//                 arr = new Array();
//                 space++;
//             }
//             break;
//             default:            
//             console.log('Invalid shape!')
//     }
// }
// printShape('diamond', 11, "%");

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj){

}
traverseObject(someObj);

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
//     var john = new Person("John", 30);

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
//     var john = getPerson("John", 30);