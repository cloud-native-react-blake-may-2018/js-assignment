// -----------------------------------------------------------------------------------
// PART I

// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------

// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.
const fib = n => {
  let output = []
  let prev = -1
  let current = 1

  for (i = 0; i <= n; i++) {
    let prevold = current

    current = prev + current

    prev = prevold

    output.push(current)
  }
  // return nth position of fibonacci sequence
  return output[n]
}
console.log(`+------------------------------

  1.  Fibonacci:
      input:  4
      output: ${fib(4)}
   `)

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
const bubbleSort = numArray => {
  let items = numArray
  const length = numArray.length

  // for each item in the array
  for (let i = length - 1; i >= 0; i--) {
    // go through entire array starting at current i position
    for (let j = length - i; j > 0; j--) {
      //and if j position is less than j - 1 position
      if (items[j] < items[j - 1]) {
        // then swap the numbers by switching assignment
        // and holding a temp variable during conversion
        // destructuring syntax: arr1[0,1] = arr2[0,1]
        ;[items[j - 1], items[j]] = [items[j], items[j - 1]]
      }
    }
  }
  return items
}
let randomInts = [1, 3, 2, 18, 12, 6]
console.log(`+------------------------------

  2.  Bubble sort:
      input:  let randomInts = [1, 3, 2, 18, 12, 6]
      output: ${bubbleSort(randomInts)}
   `)
// console.log(bubbleSort(randomInts))

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
const reverseStr = someStr => {
  // es6 destructuring
  return [...someStr].reverse().join('')
}
console.log(`+------------------------------

  3.  Reverse string:
      input:  quantum leap
      output: ${reverseStr('quantum leap')}
   `)
// console.log(reverseStr('Hi'))

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
const factorial = someNum => {
  if (someNum === 0) return 1
  else return someNum * factorial(someNum - 1)

  console.log('never gets here')
}

// factorials: 4 * 3 * 2 * 1 = 24
console.log(`+------------------------------

  4.  factorial:
      input:  6
      output: ${factorial(6)}
   `)
// console.log(factorial(4))

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
const substring = (someStr, length, offset) => {
  if (someStr.length > length) console.log('length exceeds string length')

  if (offset > someStr.length) console.log('index does not exist in string')

  return someStr.substr(offset, length)
}
console.log(`+------------------------------

  5.  Substring:
      input:  particle
      output: ${substring('particle', 3, 1)}
   `)
// console.log(substring('channel', 3, 0))

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
const isEven = someNum => {
  count = someNum
  for (i = 0; i < count; i++) {
    // decrement number by 2
    someNum -= 2
    // if it eventually == 0, its an even number
    if (someNum === 0) return true
  }
  return false
}
console.log(`+------------------------------

  6.  Even number:
      input:  19
      output: ${isEven(19)}
   `)
// console.log(isEven(19))

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
const isPalindrome = someStr => {
  if (someStr === [...someStr].reverse().join('')) return true
  else return false
}
console.log(`+------------------------------

  7.  Palindrome:
      input:  racecar
      output: ${isPalindrome('racecar')}
   `)

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
console.log(`+------------------------------

  8.  Shapes:
      input:  square, triangle, diamond
      output:
   `)
const printShape = (shape, height, character) => {
  shape = shape.toLowerCase()
  switch (shape) {
    case 'square':
      for (i = 0; i < height; i++) {
        console.log(character.repeat(height))
      }
      break

    case 'triangle':
      for (i = height; i > 0; i--) {
        console.log(character.repeat(height - i))
      }
      break

    case 'diamond':
      /*
      i: 1 
      j: 
      x: 0
      */

      for (
        let i = 1, j = height * 2 + 1, x = 0;
        x <= height;
        i += 2, j -= 2, x++
      ) {
        if (i < height + 1) {
          console.log(`${' '.repeat(height - i / 2)} ${character.repeat(i)}`)
        } else if (j < height) {
          console.log(
            `${' '.repeat(height - j / 2)} ${character.repeat(Math.abs(j))}`
          )
        }
      }
  }
}

printShape('square', 5, 'x')
printShape('triangle', 7, '~')
printShape('diamond', 9, '.')

console.log(`+------------------------------

  9.  Traverse object:
      input:  traverseObject({ name: 'Eric', age: 22, birthplace: 'NY' })
      output:
   `)

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
const traverseObject = someObj => {
  for (let i in someObj) {
    console.log(`${i}: ${someObj[i]}
    `)
  }
}

traverseObject({ name: 'Eric', age: 22, birthplace: 'NY' })

console.log(`+------------------------------

  10. Delete elmement:
      input:  deleteElement([0, 1, 2, 3, 4])
      output:
   `)
// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
const deleteElement = someArr => {
  console.log('length: ', someArr.length)
  delete someArr[2]
  console.log('length: ', someArr.length)
}
console.log(`${deleteElement([0, 1, 2, 3, 4])}`)
// deleteElement([0, 1, 2, 3, 4])

console.log(`+------------------------------

  11. Splice element:
      input:  spliceElement([0, 1, 2, 3, 4])
      output:
   `)

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
const spliceElement = someArr => {
  console.log('length: ', someArr.length)
  someArr.splice(2, 1)
  console.log('length: ', someArr.length)
}
spliceElement([0, 1, 2, 3, 4])
// spliceElement([0, 1, 2, 3, 4])

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);
function Person(name, age) {
  this.name = name
  this.age = age
}
console.log(`+------------------------------

  12. Object constructor:
      input:  var john = new Person('John', 30)
      output:
   `)
var john = new Person('John', 30)
console.log(john)
// var john = new Person('John', 30)
// console.log(john)

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);

function getPerson(name, age) {
  return {
    name,
    age
  }
}
console.log(`+------------------------------

  13. Object literal:
      input:  var john = getPerson('John', 30)
      output:
   `)
var john = getPerson('John', 30)
console.log(john)
// var john = getPerson('John', 30)
// console.log(john)
