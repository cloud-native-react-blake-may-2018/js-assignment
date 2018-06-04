// Javascript Homework
// Due Friday Morning
// Put all homework in:
//     ...../1704-apr10-java/Firstname_Lastname_Code/Javascript_Homework/
// -----------------------------------------------------------------------------------
// PART I
// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.

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
 

 

 

// -----------------------------------------------------------------------------------
// PART II
// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA() {
    return document.querySelectorAll("span")[2].innerHTML;
}


// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales() {
    let employees = document.querySelectorAll("td.empName");
    let departmentAssignments = document.querySelectorAll("td:not(.empName)");
    let salesPeople = '';
    for (let i = 0; i < departmentAssignments.length; i++) {
        if (departmentAssignments[i].innerHTML === "Sales") {
            salesPeople = salesPeople + employees[i].innerHTML + '\n';
        }
    }

    return salesPeople;

}
// Completed

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren() {
    let x = document.getElementsByTagName("a");
    let answers = '';
    for (let i of x) {
        if (i.firstElementChild !== null) {
            if(i.firstElementChild.nodeName === "SPAN") {
                answers += (i.firstElementChild.innerHTML + '\n');
            }
        }
    }
    return answers;
}
// Completed

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
function getHobbies() {
    let answers = '';
    let skillset = document.querySelector("select[name='skills']");
    let check = skillset.querySelectorAll("option[selected='selected']");
    for (let i of check) {
        answers += (i.innerHTML + '\n');
    }
    return answers;
}
// Completed

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
function getCustomAttribute() {
    let answers = ``;
    let targets = document.querySelectorAll("[data-customAttr]");
    for (let i of targets) {
        answers += `The tag ${i.nodeName} has the value: ${i.innerHTML}
        `;
    }
    return answers;
}
// Completed. Input elements will not have values to print

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
//     <input id="num1" class="nums" type="text"/>
//     <input id="num2" class="nums" type="text"/>
//     <h3>Sum: <span id="sum"></span></h3>
// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
document.getElementById("num1").addEventListener("change", () => {
    let one = Number(document.getElementById("num1").value);
    let two = Number(document.getElementById("num2").value);
     // This if statement should screen out NaN
    if ((one === one) && (two === two)) {
        document.getElementById("sum").innerHTML = one + two;
    } else {
        document.getElementById("sum").innerHTML = "Cannot add";
    }
})
document.getElementById("num2").addEventListener("change", () => {
    let one = Number(document.getElementById("num1").value);
    let two = Number(document.getElementById("num2").value);
     // This if statement should screen out NaN
    if ((one === one) && (two === two)) {
        document.getElementById("sum").innerHTML = one + two;
    } else {
        document.getElementById("sum").innerHTML = "Cannot add";
    }
})
// Could do with a refactor, but completed

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
//     "Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
function alertSkills() {
    let skillsList = document.querySelector("select[name='skills']");
    let skills = skillsList.querySelectorAll("option");
    skills.forEach(e => e.addEventListener("click", () => {
        if (e.getAttributeNode("selected") == null) {
            alert(`Are you sure ${e.innerHTML} is one of your skills?`);
            e.setAttribute("selected", "selected");
        } else {
            e.removeAttribute("selected");
        }
    }))
}
alertSkills();
// Completed

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
//     "So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
function changeFavoriteColor() {
    let colorButtons = document.querySelectorAll("input[name='favoriteColor']");
    let faveColor = "";
    colorButtons.forEach(e => e.addEventListener("click", () => {
        if (!faveColor) {
            for (let f of colorButtons) {
                f.style.backgroundColor = e.value;
                faveColor = e.value;
            }
        } else if (faveColor !== e.value) {
            alert(`So you like ${e.value} more than ${faveColor} now?`);
            for (let f of colorButtons) {
                f.style.backgroundColor = e.value;
                faveColor = e.value;
            }
        }
    }));
}
changeFavoriteColor();
// Why didn't the background color change? Everything functions properly in the console -- it's legit!

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
//     Hide the name if shown.
//     Show the name if hidden.
function showHide() {
    let employees = document.getElementsByClassName("empName");
    for (let e of employees) {
        e.addEventListener("mouseenter", () => {
            if (e.style.visibility === "hidden") {
                e.style.visibility = "visible";
            } else {
                e.style.visibility = "hidden";
            }
        })
        e.addEventListener("mouseleave", () => {
            e.style.visibility = e.style.visibility;
        })
    }
    // employees.forEach(e => e.addEventListener("mouseover", () => {
    //     e.hidden = !e.hidden;
    // }));
}
showHide();
// All of the testing I've done shows that a mouse event will only trigger
// once, and then never again.

// 10. Current Time
// Regarding this element:
//     <h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
function getTime() {
    let timeLabel = document.getElementById("currentTime");

    let now = new Date();
    let hours = now.getHours();
    let period = "AM";
    if (hours > 12) {
        hours -= 12;
        period = "PM";
    } else if (hours === 12) {
        period = "PM";
    } else if (hours < 1) {
        hours += 12;
    }
    let lead = "0"
    let minsRaw = now.getMinutes();
    let secRaw = now.getSeconds();
    let mins = (lead+minsRaw).substr((lead+minsRaw).length - 2);
    let sec = (lead+secRaw).substr((lead+secRaw).length - 2);

    timeLabel.innerHTML = `${hours}:${mins}:${sec} ${period}`;
    // timeLabel.innerHTML = Date.now();
}
setInterval(getTime, 1000);
// Completed

// 11. Delay
// Regarding this element:
//     <p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
let hello = document.getElementById("helloWorld");
hello.addEventListener("click", () => setTimeout(randomColor, 3000));
function randomColor() {
    
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    hello.style.color = `rgb(${red}, ${green}, ${blue})`;
}

// randomColor();


// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
function walkTheDOM(node, func) {
    // Do the function on the root node
    func(node);
    
    // Set the node equal to its first child
    node = node.firstChild;

    // But the node might not have any children, so that value would be
    // null. We need to make sure it's not null. Null is falsy, so just
    // say: while (node)
    while(node) {
        // Call walkTheDOM on this node...
        walkTheDOM(node, func);
        // And get the next sibling when that recursion terminates.
        node = node.nextSibling;
    }
}
// Completed