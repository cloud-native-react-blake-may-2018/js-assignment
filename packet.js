// -----------------------------------------------------------------------------------
// PART I
// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.

function fib(n){

    //Initial Conditions
    let a1 = 1
    let a2 = 2

    function rec(n, a1, a2){
        if(n==1){
            return a1
        }
        if(n==2){
            return a2
        }
        if(n>2){
            return rec(n-1, a2, a1+a2)
        }
    }
    return rec(n, a1, a2)
}

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.

function bubbleSort(numArray){
    let i = 0
    let swapFlag = 1

    while(swapFlag == 1){
        i = 0
        swapFlag = 0
        while(i<numArray.length){
            if(numArray[i] > numArray[i+1]){
                swap(i,i+1, numArray)
                swapFlag = 1
            }
            i++
        }
    }

    function swap(i, j, numArray){
        let c = numArray[i]
        let d = numArray[j]
        numArray[i] = d
        numArray[j] = c
    }
    return numArray
}

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

function reverseStr(someStr){
    let itr = someStr.length - 1
    //console.log(itr)
    let outStr = ""

    while(itr > -1){
        outStr = outStr + someStr[itr]
        itr--
    }
    return outStr
}

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.

function factorial(someNum){
    if(someNum==0){
        return 1
    }
    if(someNum==1){
        return 1
    }
    if(someNum>1){
        return someNum*factorial(someNum-1)
    }
}

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.

function subString(someStr, length, offset){
    
    //Error Handling
    if(typeof errorSubString(someStr,length,offset) == "undefined" ){
        return undefined
    }
    function errorSubString(someStr,length,offset){
        if(length < 1){
            console.log("length must be greater than one")
            return undefined
        }
        if(offset < 0){
            console.log("offset must be greater than 0")
            return undefined
        }
        if(offset+length>someStr.length){
            console.log("Offset + Length exceeds end of string")
            return undefined
        }
        return 1
    }

    let subStr = ""
    let i = 0
    while(i < length){
        subStr = subStr + someStr[offset+i] 
        i++
    }
    return subStr 
}

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.

function isEven(someNum){
    comp1 = `${someNum/2}`
    comp2 = `${(someNum-1)/2}`
    if(comp1.length>comp2.length){
        return false
    }
    else{
        return true
    }
}
// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false

function isPalidrome(someStr){
    begitr = 0 
    enditr = someStr.length - 1
    while(begitr < enditr){
        if(someStr[begitr] == someStr[enditr]){
            begitr++
            enditr--
        }
        else{
            return false
        }
    }
    return true;
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

function printShape(shape, height, character){

    if (shape == "Square"){
        choice = 0}
    if (shape == "Triangle"){
        choice = 1}
    if (shape == "Diamond"){
        choice = 2}

    switch(choice){
        case 0:
            //Square
            outSquare(height, character)
            break
        case 1:
            //Triangle
            outTriangle(height, character)
            break
        case 2:
            //Diamond
            outDiamond(height, character)
            break
        default:
            console.log("Nanniii")            
    }

    function outSquare(height, c){
        i=0
        line = ""
        while(i<height){
            line =line +c
            i++
        }
        i = 0
        while(i<height){
            console.log(line)
            i++
        }
        
    }
    function outTriangle(height, c){

        currHeight = 1
        while(currHeight<height+1){
            i =0
            line =""
            while(i<currHeight){
                line =line+c
                i++
            }
            console.log(line)
            currHeight++
        }
        
    }
    function outDiamond(height, c){
        k = 0;

        space_length = (height-1)/2
        char_length = 1
        
        //Upper
        while(k< (height+1)/2){
            i=0
            j=0
            linec = ""
            linep = ""

            while(i<space_length){
                linep = linep + " "
                i++
            }
            while(j<char_length){
                linec = linec + c
                j++
            }
            console.log(linep+linec)
            k++
            space_length = space_length - 1
            char_length = char_length + 2
        }

        //Lower
        k = 0;

        space_length = 1
        char_length = height-2
        while(k< (height+1)/2 - 1){
            i=0
            j=0
            linec = ""
            linep = ""

            while(i<space_length){
                linep = linep + " "
                i++
            }
            while(j<char_length){
                linec = linec + c
                j++
            }
            console.log(linep+linec)
            k++
            space_length = space_length + 1
            char_length = char_length - 2
        }
    }
}

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.

function traverseObject(someObj){
    for (let prop in someObj){
        console.log(prop + " is "+ someObj[prop])
    }
}

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.

function deleteElement(someArr){
    console.log(`length of array: ${someArr.length}`)
    someArr[2] = ""
    console.log(`length of array after deletion: ${someArr.length}`)
}

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.

function spliceElement(someArr){
    console.log(`length of array: ${someArr.length}`)
    newArr = []
    let itr = 2
    while(itr<someArr.length-1){
        someArr[itr] = someArr[itr+1]
        itr++
    }

    itr=0
    while(itr<someArr.length-1){
        newArr[itr] = someArr[itr]  
        itr++  
    }
    console.log(`new array length is ${newArr.length}`)

}

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
//     var john = new Person("John", 30);

function Person(name, age){
    this.name = name
    this.age = age
}

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
//     var john = getPerson("John", 30);

function getPerson(name, age){
    let person = {
        personName: name,
        personAge: age
    }
    return person
}