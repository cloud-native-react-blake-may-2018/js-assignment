// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.

function getUSA() {
    let span = document.getElementsByTagName('span');
    for (let elem of span) {
        if (elem.textContent === 'USA')
            console.log(elem.textContent);
    }
}

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

function getPeopleInSales() {
    let td = document.getElementsByTagName('td');
    let name = '';
    for (let text of td) {
        if (text.textContent !== 'Sales') {
            name = text.textContent;
        } else {
            console.log(name);
        }
        // console.log(text.textContent);
    }
}

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>

function getAnchorChildren() {
    let a = document.getElementsByTagName('a');
    let span;
    for (let element of a) {
        let span = element.getElementsByTagName('span');
        for (let elem of span) {
            console.log(elem.textContent);
        }
    }
}

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.

function getHobbies() {
    let skills = document.getElementsByName('skills');
    for (let elem of skills) {
        let option = elem.getElementsByTagName('option')
        for (let o of option) {
            if (o.getAttribute('selected')) {
                console.log(o.textContent);
            }
        }
    }
}

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.

function getCustomAttribute() {
    custom = document.getElementsByTagName('*');
    for (let elem of custom) {
        if (elem.getAttribute('data-customAttr')) {
            console.log(elem.getAttribute('data-customAttr'));
        }
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

function sum() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    if (num1 + num2) {
        document.getElementById('sum').innerHTML = num1 + num2;
    } else {
        document.getElementById('sum').innerHTML = 'cannot be added';
    }
}


// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
//     "Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

function skillSelect() {
    alert('Are you sure CSS is one of your skills?');
}

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
//     "So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

function colorEvent(newColor) {
    let colors = document.getElementsByName('favoriteColor');//document.body.style.backgroundColor;
    let oldColor = document.getElementsByName('favoriteColor')[0].style.backgroundColor;
    // for(let elem of oldColor) {
    //     console.log(elem);
    // }
    console.log(oldColor);

    if (oldColor === '') {
        oldColor = 'white';
    }

    alert(`So you like ${newColor} more that ${oldColor} now?`);
    for (let elem of colors) {
        elem.style.backgroundColor = newColor;
    }
    // document.body.style.backgroundColor = newColor;
}

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
//     Hide the name if shown.
//     Show the name if hidden.

function showHide(emp) {
    if (emp.style.color === '' || emp.style.color === 'black') {
        emp.style.color = 'white';
    } else {
        emp.style.color = 'black';
    }
}

// 10. Current Time
// Regarding this element:
//     <h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

function currentTime() {
    let time = new Date();
    let ampm;
    if (time.getHours() >= 12) {
        ampm = 'PM';
    } else {
        ampm = "AM";
    }
    document.getElementById('currentTime').innerHTML = `${time.getHours() % 12}:${time.getMinutes()}:${time.getSeconds()} ${ampm}`;

    setTimeout(currentTime, 1000);
}

// 11. Delay
// Regarding this element:
//     <p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

function changeColorRandom() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    document.getElementById('helloWorld').style.color = color;
}

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).

function walkTheDOM(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walkTheDOM(node, func);
        node = node.nextSibling;
    }
}