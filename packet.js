//Problem 1
function fib(b){
    let currentFib = 0;
    let previousFib = 1;
    for(let i = 0; i<b; i++){
        let temp = 0;
        console.log(currentFib);
        temp = currentFib + previousFib;
        previousFib =  currentFib;
        currentFib = temp;
       
    }
}
console.log('\nproblem 1')
fib(10);

// Problem 2
function bubbleSort(inArr){
    let swap;

    do{ 
        swap = 0;
        for(let i = 0; i<inArr.length-1; i++){
            if(inArr[i]> inArr[i+1]){
                let temp = inArr[i];
                inArr[i] = inArr[i+1];
                inArr[i+1] = temp;
                swap = swap+1;
            }
        }
    }while(swap !== 0)
    return inArr;
}
console.log('\nproblem 2')
console.log(bubbleSort([3,5,1,2,4,7,20,30,15]));

//Problem 3
function reverseStr(str){
    let strArr = str.split("");
    let length = Math.round(strArr.length/2);
    for(let i =0; i < length; i++){
        let temp = strArr[i];
        strArr[i]= strArr[strArr.length-i-1];
        strArr[strArr.length-i-1] = temp;
    }
    str = strArr.join("");
    return str;

}
console.log('\nproblem 3');
console.log(reverseStr("divaD"));

// Problem 4
function factorial(someNum){
    if(someNum === 1){
        return 1;
    }else{
        return someNum*factorial(someNum-1);
    }
}

console.log('\nproblem 4')
console.log(factorial(6));

// Problem 5
function substring(str,length,offset){
    let strArr = str.split("");
    let newArr = [];
    if(length >strArr.length -offset){
        //for browser only
        //alert("Out of Bounds, Change offset or length");
        console.log("Array Out of Bounds");
    }else{
        for(let i = offset; i< offset+length; i++){
            newArr.push(strArr[i]);
        }
        return newArr.join("");
    }

}

console.log('\nproblem 5');
console.log(substring('superlong',6,0));

// Problem 6

function isEven(someNum){
    let evenArr = ['0','2','4','6','8'];
    let numArr = someNum.toString().split("");

    for(let i = 0; i< evenArr.length; i++){
        if(evenArr[i]=== numArr[numArr.length-1]){

            return true;
        }
    }

    return false;
}

console.log('\nproblem 6');
console.log(isEven(15));

// Problem 7

function isPalindrome(someStr){
    let strArr = someStr.split("");
    let halfLength = Math.round(strArr.length/2);
    for(let i = 0; i<halfLength; i++){
        if(strArr[i]!==strArr[strArr.length-i-1]){
            console.log('not a palindrome');
            return false;
        }
    }
    console.log("palindrome");
    return true;
}


console.log('\nproblem 7')
isPalindrome("aabbaa");
isPalindrome("noon");
isPalindrome("civic");
isPalindrome("refer");
isPalindrome("redividr");


//Problem 8

function printShape(shape, height, character){
    switch(shape){

        case 'Square':
            for(let i = 0; i<height; i++){
                console.log(character.repeat(height));
            }
            break;

        case 'Triangle':
            for(let j = 0; j<height; j++){
                console.log(character.repeat(j+1));
            }
            break;

        case 'Diamond':
            for(let r = 0; r<height; r++){
                if(r<Math.round(height/2)){
                    console.log(" ".repeat(Math.round(height/2)-r-1)+character.repeat(2*r+1));
                }else{
                    console.log(" ".repeat(r-Math.round(height/2-1))+character.repeat(height-1-(2*r-Math.round(height))));
                }
            }

    }
}

console.log('\nproblem 8')
printShape('Square',5,"%")
printShape('Diamond',11,"%");

//Problem 9
function traverseObject(obj){
    let keys = Object.keys(obj);
    for(let i = 0; i<keys.length; i++){
        console.log(`Property ${i+1}: ${keys[i]} Value: ${obj[keys[i]]}`)
    }
}

let Car = {
    engine : 'V8',
    type : 'SUV',
    color : 'grey',
    makeNoise: ()=>{
        console.log('beep');
    }
}

console.log('\nproblem 9');
traverseObject(Car);

//Problem 10

function deleteElement(someArr){
    console.log(someArr.length);
    someArr[2]= undefined;
    console.log(someArr.length);
}
console.log('\nproblem 10');
deleteElement([1,2,3,4,5]);

//Problem 11

function spliceElement(someArr){
    someArr[2] = undefined;
    let temp = [];
    for (let i = 0; i < someArr.length; i++) {
        if(someArr[i] !== undefined){
            temp.push(someArr[i]);
        }
    }
    someArr = temp;
    return someArr;
}
console.log('\nproblem 11');
console.log(spliceElement([1,2,3,5,7]));

//Problem 12

function Person(inName, inAge){
    let name = inName;
    let age = inAge;
    this.setName = (newName)=>{
        name = newName;
    };
    this.setAge = (setAge)=>{
        age = newAge;
    };
    this.getName = ()=>{
        return name;
    };
    this.getAge = ()=>{
        return age;
    }
    
}

console.log('\nproblem 12');
let p1 = new Person('John',30);
console.log(p1.getName());
console.log(p1.getAge());

//Problem 13


function getPerson(name,age){
    return {name: name, age: age};
}

console.log('\nproblem 13')
let john = getPerson('John',30);
console.log(john);