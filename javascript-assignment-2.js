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

function getUSA(){
 let contents = document.getElementsByTagName('span');
    for(let element of contents){
      if(element.textContent === 'USA'){
          console.log(element.textContent);
      }
    }
}
getUSA();

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

function getPeopleInSales() {
    const employees = document.getElementsByClassName('empName');
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].parentElement.getElementsByTagName('td')[1].textContent === 'Sales') {
            console.log(employees[i].textContent);
        }
    }
}
getPeopleInSales();

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>

function getAnchorChildren() {
    let anchors = document.getElementsByTagName('span');
    for(let i = 0; i < anchors.length; i++) {
        if (anchors[i].parentElement.tagName === 'A') {
            console.log(anchors[i].textContent);
        }
    }
}
getAnchorChildren();
// // 4. Hobbies
// // Define function getHobbies()
// // Find all checked options in the 'skills' select element.
// // Print the value and the contents.

function getHobbies(){
    let skills =  document.getElementsByName('skills'); 
      for(let i = 0; i < skills.length; i++){
         console.log(skills[i].textContent) ;
    }
  }
getHobbies();
    
  // // 5. Custom Attribute
  // // Define function getCustomAttribute()
  // // Find all elements with "data-customAttr" attribute
  // // Print the value of the attribute.
  // // Print the element that has the attribute.

function getCustomAttribute() {
    const attElements = document.querySelectorAll('[data-customAttr]');
    for (let i = 0; i < attElements.length; i++) {
        //prints values of the attribute
        console.log(attElements[i].getAttribute('data-customAttr'));
        //prints the element tat contains the attribute
        console.log(attElements[i]);
    }
}
getCustomAttribute();
  
  // // 6. Sum Event
  // // NOTE: Write unobtrusive Javascript
  // // Regarding these elements:
  // //     <input id="num1" class="nums" type="text"/>
  // //     <input id="num2" class="nums" type="text"/>
  // //     <h3>Sum: <span id="sum"></span></h3>
  // // Define onchange event handler.
  // // Add <input> element values.
  // // Put the sum in the <span> element.
  // // If values cannot be added, put "Cannot add" in the <span> element

function math(){
  let firstNum = parseInt(document.getElementById('num1').value)
  let secondNum = parseInt(document.getElementById('num2').value)
  let elem = document.getElementById('sum')

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('sum').innerHTML = 'cannot be added';
    } 
    else {
        document.getElementById('sum').innerHTML = num1 + num2;
    }
}
math();

  // // 7. Skills Event
  // // NOTE: Write unobtrusive Javascript
  // // When user selects a skill, create an alert with a message similar to:
  // //     "Are you sure CSS is one of your skills?"
  // // NOTE: no alert should appear when user deselects a skill.

function conformationAlert() {
    let choice = document.getElementsByName('skills').textContent;
    alert(`Are you sure ${choice} is one of your skills?`);
}
conformationAlert();
  
  // // 8. Favorite Color Event
  // // NOTE: Write unobtrusive Javascript
  // // NOTE: This is regarding the favoriteColor radio buttons.
  // // When a user selects a color, create an alert with a message similar to:
  // //     "So you like green more than blue now?"
  // // In this example, green is the new value and blue is the old value.
  // // Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
  
function colorPicker(){
    let oldColor = document.getElementsByName('favoriteColor');
    let newColor = '';


}

  // // 9. Show/Hide Event
  // // NOTE: Write unobtrusive Javascript
  // When user hovers over an employees name:
  //     Hide the name if shown.
  //     Show the name if hidden.

function hide(element) {
    if (element.style.color === element.style.backgroundColor) {
        if (element.style.backgroundColor === 'white') {
            element.style.color = 'black';
        } 
        else {
            element.style.color = 'white';
        }                
    } 
    else {
        element.style.color = element.style.backgroundColor;
    }
    
}

function showHide() {
    let employees = document.getElementsByClassName("empName");
    for (let e of employees) {
        e.addEventListener("mouseenter", () => {
            hide(employees);
        })
        e.addEventListener("mouseleave", () => {
            hide(employees);
        })
    }
}
showHide();

  // 10. Current Time
  // Regarding this element:
  //     <h5 id="currentTime"></h5>
  // Show the current time in this element in this format: 9:05:23 AM
  // The time should be accurate to the second without having to reload the page.

function getTimeStamp() {
  const currentTime = new Date();
  const htmlTime = document.getElementById('currentTime');
  htmlTime.innerText = currentTime.toLocaleTimeString();
  setTimeout(getTimeStamp, 500);
}
getTimeStamp();
  
  // 11. Delay
  // Regarding this element:
  //     <p id="helloWorld">Hello, World!</p>
  // Three seconds after a user clicks on this element, change the text to a random color.

function randomColor() {
    let combine = '#';
    let letters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        combine += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById('helloWorld').style.color = combine;
}

function delay() {
    setTimeout(randomColor(), 3000);
}
delay();

  // 12. Walk the DOM
  // Define function walkTheDOM(node, func)
  // This function should traverse every node in the DOM. Use recursion.
  // On each node, call func(node).

  function walkTheDOM(node,func) {
    func(node);                    
    node = node.firstChild;
    while(node) {
        walkDOM(node,func);
        node = node.nextSibling;
    }
};    