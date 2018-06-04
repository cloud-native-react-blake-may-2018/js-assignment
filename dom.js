// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA() {
    const usa = document.querySelectorAll('[data-customAttr="USA"]');
    if (usa.length === 1) {
        console.log(usa[0].textContent);
    }
}
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales() {
    const people = document.getElementsByClassName("empName");
    for (let i = 0; i < people.length; i++) {
        //check department (2nd column)
        if (people[i].parentElement.getElementsByTagName('td')[1].textContent === 'Sales') {
            console.log(people[i].textContent);
        }
    }
}
  
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren() {
    const spans = document.getElementsByTagName('span');
    for (let i = 0; i < spans.length; i++) {
        if (spans[i].parentElement.tagName === 'A') {
            console.log(spans[i].textContent);
        }
    }
}
  
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
function getHobbies() {
    const skills = document.getElementsByName('skills');
    console.log(skills[0].options[skills[0].selectedIndex].text);   
}
  
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
function getCustomAttribute() {
    const custom = document.querySelectorAll('[data-customAttr]');
    for (let i = 0; i < custom.length; i++) {
        console.log(custom[i].getAttribute('data-customAttr'));
        console.log(custom[i]);
    }
}

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
function sumEvent() {
    const elementOne = document.getElementById('num1');
    const elementTwo = document.getElementById('num2');
    const sum = document.getElementById('sum');

    if (Number(elementOne.value) && Number(elementTwo.value)) {
        sum.innerText = Number(elementOne.value) + Number(elementTwo.value);
    } else {
        sum.innerText = 'Cannot add';
    }
}
// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
//     "Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
let previousSkill;
function skillsEvent(element) {
    // when the element is selected, it is checked against
    // the previous element. If they are the same, no 
    // message is displayed.  
    
    if (element !== previousSkill) {
        window.alert(`${element} selected.`);
    }
    previousSkill = element;
}

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
//     "So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
let previousColor = undefined;
function selectColor() {
    const colors = document.getElementsByName('favoriteColor');
    let prev;
    for (let i = 0; i < colors.length; i++) {
        if (colors[i].checked) {
            if (previousColor) {
                //window.alert(`${colors[i].value} is replacing ${previousColor}`);
                prev = previousColor;
            } else {
                prev = undefined;
                //window.alert(`${colors[i].value} is selected`);
            }
            previousColor = colors[i].value;
            break;
        }
    }
    for (let i = 0; i < colors.length; i++) {       
        colors[i].style.backgroundColor = `${previousColor}`;
    }
    /*if (prev) {
        window.alert(`${previousColor} is replacing ${prev}`);
    } else {
        window.alert(`${previousColor} is selected`);
    }*/
}
// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
//     Hide the name if shown.
//     Show the name if hidden.
function showHideEmployeeName(element) {

    if (element.style.color === element.style.backgroundColor) {
        if (element.style.backgroundColor === 'white') {
            element.style.color = 'black';
        } else {
            element.style.color = 'white';
        }                
    } else {
        element.style.color = element.style.backgroundColor;
    }
    
}

// 10. Current Time
// Regarding this element:
//     <h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
function showTime() {
    const clock = document.getElementById('currentTime');
    const now = new Date();
    
    clock.innerText = now.toLocaleTimeString();
    setTimeout(showTime, 500);
}
// 11. Delay
// Regarding this element:
//     <p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
function delayChange() {
    setTimeout(randomTextColor, 3000);
}

function randomTextColor() {
    const hello = document.getElementById('helloWorld');
    hello.style.color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
}
// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
function walkTheDOM(node, func) {
    if (node.hasChildNodes()) {
        for (let i=0; i < node.childNodes.length; i++) {
            walkTheDOM(node.childNodes[i], func);
        }
    }
    func(node);
}