function fib(n) {
    if (isNaN(n)) {
        return undefined;
    }

    let value = 1;
    let prev = 0;

    for (i=1;i<n;i++) {
        let temp = value;
        value += prev;
        prev = temp;
    }
    return value;
}

function bubbleSort(numArray) {
    if (!(numArray instanceof Array)) {
        return undefined;
    }
    for (i=0;i<numArray.length;i++) {
        let swapped = false;
        for (j=0;j<numArray.length-1;j++) {
            if (numArray[j] > numArray[j+1]) {
                let temp = numArray[j];
                numArray[j] = numArray[j+1];
                numArray[j+1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            return;
        }
    }
}

function reverseStr(someStr) {
    if (!(someStr.constructor === String)) {
        return undefined;
    }
    
    let reverse = '';
    for(i=someStr.length-1; i>=0; i--) {
        reverse = reverse.concat(someStr[i]);
    }
    return reverse;
}

function factorial(someNum) {
    if (isNaN(someNum) || someNum < 0) {
        return undefined;
    }
    if (someNum > 1) {
        return someNum * factorial(someNum-1);
    }
    return 1;
}

function substring(someStr, length, offset) {
    if (!(someStr.constructor === String)) {
        console.alert('someStr was not a string!');
        return undefined;
    }
    if (isNaN(length)) {
        console.alert('substring length was not a number!');
        return undefined;
    }
    if (isNaN(offset)) {
        console.alert('substring starting index was not a number!');
        return undefined;
    }
    if (offset >= someStr.length) {
        console.alert('substring starting index was out of bounds!');
        return undefined;
    }
    if (offset + length >= someStr.length) {
        console.alert('generated substring would leave the bounds of someStr');
        return undefined;
    }

    let value = '';
    for (i=0; i < length; i++) {
        value = value.concat(someStr[i+offset]);
    }
    
    return value;
}

function isEven(someNum) {
    if (isNaN(someNum)) {
        return undefined;
    }

    return (someNum/2).toString().indexOf(".") === -1;
}

function palindrome(someStr) {
    if (!(someStr.constructor === String)) {
        return undefined;
    }
    for (i=0;i<someStr.length/2;i++) {
        if (someStr[i] != someStr[someStr.length-1-i]) {
            return false;
        }
    }
    return true;
}

function printShape(shape,height,character) {
    if (!(shape.constructor === String) || isNaN(height) ||
        !(character.constructor === String)) {
        return undefined;
    }
    if (!(shape === 'Square' || shape === 'Triangle' || shape === 'Diamond')) {
        return undefined;
    }
    if (character.length !== 1) {
        return undefined;
    }

    if (shape === 'Square') {
        let line = '';
        for (i=0; i<height; i++) {
            line = line.concat(character);
        }
        for (i=0; i<height; i++) {
            console.log(line);
        }
    } else if (shape === 'Triangle') {
        let line = '';
        for (i=0; i<height; i++) {
            for (j=0; j<i+1; j++) {
                line = line.concat(character);
            }
            console.log(line);
            line = '';
        }
    } else if (shape === 'Diamond') {
        let line = '';
        let len = height - 1; 
        for (i=0; i<height; i++) {
            let spaces = Math.trunc((Math.abs(i-len+i))/2);
            for (j=0; j<height; j++) {
                if ((j < spaces) || ((j+spaces) >= height)) {
                    line = line.concat(' ');
                } else {
                    line = line.concat(character);
                }
            }
            console.log(line);
            line = '';
        }
    }
}

function traverseObj(someObj) {
    if (!(someObj === Object(someObj))) {
        return undefined;
    }
    let keys = Object.keys(someObj);
    for (i=0; i<keys.length; i++) {
        console.log(someObj[keys[i]]);
    }
}

function deleteElement(someArr) {
    if (!Array.isArray(someArr)) {
        return undefined;
    }

    console.log(someArr.length);
    delete someArr[2];
    console.log(someArr.length);
}

function spliceElement(someArr) {
    if (!Array.isArray(someArr)) {
        return undefined;
    }

    console.log(someArr.length);
    someArr.splice(2,1);
    console.log(someArr.length);
}

function Person(name,age) {
    this.name = name;
    this.age = age;
}

function getPerson(name,age) {
    return {
        thisName : name,
        thisAge : age,
        getName : function () {
            return thisName;
        },
        setName : function (n) {
            thisName = n;
        },
        getAge : function () {
            return thisAge;
        },
        setAge : function (a) {
            thisAge = a;
        }
    }
}

