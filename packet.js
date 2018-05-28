// PART I
// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.
function fib(n) {
   let i1 = 1; 
   let i2 = 1;
   let count = 3; 
   while(count <= n){
        let hold = i2; 
        i2 = i1 + hold; 
        i1 = hold; 
        count += 1; 
   }
   return i2; 
}

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(numArray) {
    for(let i = 0; i <numArray.length; i++) {
        for(let k = 1; k < numArray.length; k++) {
            if(numArray[k-1] > numArray[k]) {
                let c = numArray[k-1];
                numArray[k-1] = numArray[k]; 
                numArray[k] = c; 
            }
        }
    }
    return numArray; 
}
// let myArray2 = [65, 13, 0, 28, 4];
// console.log(bubbleSort(myArray2)); 

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String. 
function reverseStr(someStr) {
    let newStr = ''; 
    for(let i = (someStr.length-1); i >= 0; i--) {
        newStr += someStr.charAt(i); 
    }
    return newStr; 
}
//console.log(reverseStr('Charlie Brown')); 

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum) {
    let fac = 1; 
    let n = someNum; 
    while(n > 0) {
        fac *= n;
        n -= 1; 
    }
    return fac;
}
//console.log(factorial(5)); //This does not actually use recursion. I have seen it before... 

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively. 
// If incorrect input is entered, use the alert function and describe why the input was incorrect. 
function substring(someStr, length, offset) {
    let newStr = ''; 
    if(length > offset) {
        console.log('Parameters out of order. Please try again'); 
    } else if(offset > (someStr.length - 1) ) {
        console.log('Parameter is out of bounds. Please try again'); 
    } else {
        newStr = someStr.substring(length, offset); 
        newStr += someStr.charAt(offset); 
    }
    return newStr; 
}
// console.log(substring('JasperJohannes', 5, 10));
// console.log(substring('JasperJohannes', 5, 15));
// console.log(substring('JasperJohannes', 15, 10));

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum) { 
    let n = (someNum / 2);
    if(n === Math.round(n)){
        return true;
        
    } else return false; 
}  
// console.log(isEven(17)); 
// console.log(isEven(42)); 
// console.log(isEven(20.15)); 

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(str) {
    let strLen = str.length; 
    str = str.toLowerCase();
    let fIdx = 0, bIdx = (strLen - 1); 
    let palindrome = true;
    while (fIdx < bIdx) {
        let c1 = str.charAt(fIdx);
        let c2 = str.charAt(bIdx);
        if (c1 != c2) {
            palindrome = false; 
            console.log(`"${str}" is not a palindrome.`);
            break; 
        } else {
            ++fIdx;
            --bIdx;
        }
    }
    if (palindrome == true){
        console.log(`"${str}" is a palindrome.`);
    }
    return palindrome; 
} 
//console.log(isPalindrome('Step On No Pets')); 
//console.log(isPalindrome('Ma has a Ham')); 

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
function printShape(shape, height, character) {
    let size = height;
    let printString = '';
    switch(shape) {
    case 'Square': 
        while (height > 0){
           while(size > 0) {
                printString += character; 
                size -= 1; 
            }
            console.log(printString);
            height -= 1; 
        }
        break; 
    case 'Triangle': 
        size = 1; 
        while(size <= height) {
            for(i = 0; i < size; i++) {
                printString += character;
            }   
            console.log(printString); 
            size += 1; 
            printString = ''; 
        }
        break; 
    case 'Diamond':
        if(isEven(height)) {
            console.log('Height of Diamond must be odd.')
            break; 
        }
        size = 1; 
        let amnt = 0; 
        while(size <= height) {
            amnt = (height - size) / 2
            for(i = 0; i < amnt; i++) {
                printString += ' ';
            }
            for(i = 0; i < size; i++) {
                printString += character;
            }   
            for(i = 0; i < amnt; i++) {
                printString += ' ';
            }
            console.log(printString); 
            size += 2; 
            printString = ''; 
        }
        size -= 4; 
        while(size >= 1) {
            amnt = (height - size) / 2
            for(i = 0; i < amnt; i++) {
                printString += ' ';
            }
            for(i = 0; i < size; i++) {
                printString += character;
            }   
            for(i = 0; i < amnt; i++) {
                printString += ' ';
            }
            console.log(printString); 
            size -= 2; 
            printString = ''; 
        }
    break; 
    default: 
        console.log(`Invalid shape parameter. 
        Try 'Square', 'Triangle', or 'Diamond'.`); 
    }
}
//printShape('Square', 3, 0); 
//printShape('Triangle', 7, 0); 
// printShape('Diamond', 9, '@'); 
// printShape('Diamond', 6, '%'); 
//printShape('Purple', 4, 'Q'); 

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and its value.
function traverseObject(someObj) {
    console.log(someObj); 
}

traverseObject(new Person('Ruthanna', 23)); 

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same. 
 
function deleteElement(someArr) {
    console.log(`The initial length of the array is ${someArr.length}`); 
    delete(someArr[2]);
    console.log(`The final length of the array is ${someArr.length}`);
}
//let myArr = [8, 6, 4, 2, 0];
//deleteElement(myArr); 

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(someArr) {
    console.log(`The initial length of the array is ${someArr.length}`); 
    someArr.splice(2, 1);
    console.log(`The final length of the array is ${someArr.length}`);
}
//let myArr = [8, 6, 4, 2, 0];
//spliceElement(myArr); 

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
function Person(name, age) {
    this.name = name; 
    this.age = age; 
}
// var john = new Person("John", 30);
// 

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
function getPerson(name, inAge) {
    let personLit = {
        name: '', 
        age: 0
    }
    personLit.name = name; 
    personLit.age = inAge; 
    return personLit; 
}
// var john = getPerson("John", 30);
// console.log(john); 