/*-----------------------------------------------------------------------------------
PART I
Create a single Javascript file called packet.js to answer these questions.
Please put the question itself as a comment above each answer.
-----------------------------------------------------------------------------------*/
/*1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence.*/
function fib(n)  {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
//console.log(fib(6));
/*2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array.*/
let array = [3, 2, 6, 4, 1, 0, 9, 7, 8, 5]
function swap(array, i, j)  {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
function bubbleSort(numArray)   {
    let incomplete = true;
    while (incomplete)  {
        incomplete = false;
        for(var i = 0; i < array.length; i++) {
            if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
            }
        }   
    }
    return numArray;
}
//console.log(bubbleSort(array));
/*3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String.*/
function reverseStr(someStr)    {
    let reversed = '';
    for (let i = someStr.length-1; i >= 0; i--) {
        reversed += someStr.charAt(i);
    }
    return reversed;
}
//console.log(reverseStr('Tyler Pierro'));
/*4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.*/
function factorial(someNum) {
    if (someNum <= 1) return someNum;
    return someNum * factorial(someNum-1);
}
//console.log(factorial(4));
/*5. Substring
Define function substring(someStr, length, offset)
Return the substring contained between offset and (offset + length) inclusively.
If incorrect input is entered, use the alert function and describe why the input was incorrect.*/
function substring(someStr, length, offset) {
    if (typeof(someStr) != 'string') alert('Enter a string');
    if (length + offset > someStr.length) alert('Substring too long');
    if (offset > someStr.length) alert('Substring starts beyond the length of the string');
    let sub = '';
    for (let i = offset; i <= offset+length; i++)   {
        sub += someStr.charAt(i);
    }
    return sub;
}
//console.log(substring('Tyler Pierro', 5, 0));
/*6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.*/
function isEven(someNum)    {
    let lastDigit = Number(String(someNum).charAt(String(someNum).length));
    if (lastDigit === 2 || lastDigit === 4 || lastDigit === 6 || lastDigit === 8 || lastDigit === 0) return true;
    else return false;
}
//console.log(isEven(22));
/*7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false*/
function isPalindrome(someStr)  {
    for (let i = 0; i < someStr.length/2; i++) {
        if (someStr.charAt(i) !== someStr.charAt(someStr.length-i-1)) return false;
    }
    return true;
}
//console.log(isPalindrome('racecar'));
/*8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  *  */
function printShape(shape, height, character)   {
    if (shape === 'square') {
        for (let i=0; i<height; i++)    {
            for (let j=0; j<height; j++)    {
                process.stdout.write(character);
            }
            console.log('');
        }
    }
    if (shape === 'triangle')   {
        for (let i=1; i<=height; i++)    {
            for (let j=0; j<i; j++) {
                process.stdout.write(character);
            }
            console.log('');
        }
    }
    if (shape === 'diamond')    {
        let lineAdjust = 0;
        for (let i=0; i<height; i++)    {
            if (i <= height/2) lineAdjust = height - Math.abs(height-2*i)+1;
            else lineAdjust = height - Math.abs(height-2*(i+1))+1;
            let numSpace = (height-lineAdjust)/2;
            let charCount = 0;
            for (let j=0; j<=height; j++)    {
                //process.stdout.write(`, got there, ${j}`);
                if (j<=numSpace) process.stdout.write(' ');
                else if (charCount < lineAdjust) {
                    process.stdout.write(character);
                    charCount++;
                }
            }
            console.log('');
        }
    }
}
console.log(printShape('diamond',5,'*'));
/*9. Object literal
Define function traverseObject(someObj)
Print every property and it's value.*/
function traverseObject(someObj)    {
    if (typeof(someObj) === 'object')   {
        for (obj in someObj)    {
            console.log(`${obj}: ${someObj[obj]}`)
        }
    }
    else console.log(someObj);
}
//console.log(traverseObject([1, 2, 3, 4, 5]));
/*10. Delete Element
Define function deleteElement(someArr)
Print length
Delete the third element in the array.
Print length
The lengths should be the same.*/
function deleteElement(someArr) {
    console.log(someArr.length);
    delete someArr[2];
    console.log(someArr.length);
}
//console.log(deleteElement([0,1,2,3,4]));
/*11. Splice Element
Define function spliceElement(someArr)
Print length
Splice the third element in the array.
Print length
The lengths should be one less than the original length.*/
function spliceElement(someArr) {
    console.log(someArr.length);
    someArr.splice(2,1,4);
    console.log(someArr.length);
}
//console.log(spliceElement([0,1,2,3,4]));
/*12. Defining an object using a constructor
Define a function Person(name, age)
The following line should set a Person object to the variable john:*/
function Person(name,age)   {
    this.name = name;
    this.age = age;
}
//let john = new Person("John", 30);
//console.log(traverseObject(john));
/*13. Defining an object using an object literal
Define function getPerson(name, age)
The following line should set a Person object to the variable john:*/
function getPerson(name, age)   {
    let newPerson = {
        name: name,
        age: age
    }
    return newPerson;
}
let john = getPerson("John", 30);
//console.log(traverseObject(john));