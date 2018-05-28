// assesment  

console.log(`

1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence.

`);


 
let n =6;

 
       function fib(n) {
         
        if(n <= 2) {
            return 1;
        } else {
           // let results = fib(n - 1) + fib(n - 2);
           // console.log (results + ' = ' + fib(n - 1) + ' + ' + fib(n - 2));
            return  fib(n - 1) + fib(n - 2);
            
        }
    };
     nth= fib(n);
     console.log(nth);

console.log(`

2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array

`);

let numArray =new Array();
numArray = [7,2,1,3,8,9];
console.log(numArray);
let swapped =false;

function bubblesort(numArray){
 
    do{
        swapped =false;
        for(let i =0 ; i< numArray.length ;i ++){
            
            
            if(numArray[i] > numArray[i+1]){
                let temp =numArray[i] ;
                numArray[i] = numArray[i+1];
                numArray[i+1]=temp;
                swapped = true;       
        
        
            };
        };
    }while(swapped === true);

    return (numArray);
};
     

 
let sort = bubblesort(numArray);
console.log(sort);

console.log(`

3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String.

`);


function reverseStr(someStr){
    let reversed=''; 
    let countReverse=someStr.length-1;
    for(let i =someStr.length-1; i>=0;i--){
         
         
        reversed += someStr[i];
        
    }
 
return reversed;
}

let someStr = 'this is a string';

let strReversed  =reverseStr(someStr);
console.log(strReversed);

console.log(`

4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.

`);


function factorial(someNum){
    
    if (someNum < 0) 
        return -1;
    
   
  else if (someNum == 0) 
      return 1;
    
  
    else {
        return (someNum * factorial(someNum - 1));

        }
    }
fact = factorial(5);
console.log(fact);

console.log(`

5. Substring
Define function substring(someStr, length, offset)
Return the substring contained between offset and (offset + length) inclusively.
If incorrect input is entered, use the alert function and describe why the input was incorrect.

`);


function substring( someStr , length ,offset){
    
    let sub = "";
    if(offset >= length || offset <0){

        console.log('invalid offset');
    }else if(length === 0 || length < 0  ){

        console.log('The length cannot be less or equal to 0');
    }else {
        for (let i= offset; i<=length-1 ; i++){

            sub+=someStr[i];
        }
    }
return sub;
}

let newString =substring ("fire",4,0);
console.log(newString);

console.log(`

6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.

`);

function isEven(someNum){

let sum =1 ;
 


while( sum < someNum){

    sum+=2;
    //console.log(sum);

} 

if(sum===someNum  ){

    return false;


}else return true;

    
}

 console.log(isEven(250));

console.log(`

7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false

`);


function isPalindrome(someStr){

    let reversed="";
for (let i =someStr.length-1 ; i>=0 ; i--){

reversed+=someStr[i];

}
console.log(`reversed string ${reversed} `);
console.log(`original string ${someStr}  `);
 if (someStr === reversed){



    return true ;
 } else return false;

}

 let  Str = 'bob';
 console.log(isPalindrome(Str));


console.log(`

8. Shapes
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
  *`

);



console.log("program is running");

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

printShape('Diamond',9,'*');

console.log(`

9. Object literal
Define function traverseObject(someObj)
Print every property and it's value.

`);



function Person(name, age) {
    this.name = name;
    this.age = age;
    
  }
  let person1 =new Person('Perdro', 15);

  function traverseObject(someObj){
      let result= "";
      
    for (let prop in someObj){
         console.log(`${prop} = ${someObj[prop]}`);      

    }
    

  }

traverseObject(person1);

console.log(`

10. Delete Element
Define function deleteElement(someArr)
Print length
Delete the third element in the array.
Print length
The lengths should be the same.

`);



function deleteElement(someArr){

let newArr =new Array(someArr.length)
 
for( let i=0 ; i < someArr.length; i++){
        if(i>=2){
        newArr[i]=someArr[i+1];

        } else {

        newArr[i]=someArr[i];

        }
    }   
 

console.log(`array before delete :${someArr} length : ${someArr.length}`);
console.log(`arraey after delete :${newArr} length : ${newArr.length}`);
 

}

someArr=new Array();

someArr=[1,2,3,4,5];

deleteElement(someArr);


console.log(`

11. Splice Element
Define function spliceElement(someArr)
Print length
Splice the third element in the array.
Print length
The lengths should be one less than the original length.

`);



function spliceElement(someArr){

let newArr =new Array()
 
for( let i=0 ; i < someArr.length-1; i++){
        if(i>=2){
        newArr[i]=someArr[i+1];

        } else {

        newArr[i]=someArr[i];

        }
    }   
 

console.log(`array before splice :${someArr} length : ${someArr.length}`);
console.log(`array after splice :${newArr} length : ${newArr.length}`);
 

}

someArr=new Array();

someArr=[1,2,3,4,5];

spliceElement(someArr);



console.log(`

12. Defining an object using a constructor
Define a function Person(name, age)
The following line should set a Person object to the variable john:
    var john = new Person("John", 30);
    
    `);

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let john =new Person ('John',30);

console.log(john);

console.log(` 

13. Defining an object using an object literal
 Define function getPerson(name, age)
 The following line should set a Person object to the variable john:
 var john = getPerson("John", 30)
 
 `);






function getPerson (inName,inAge){
    // person = [inName , inAge];
    // return person;
    let person={

        name:inName,
        age:inAge


    }   
    return person; 
    
}
 
 john = getPerson('John',30);


console.log(john)