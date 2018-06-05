// Javascript Homework
// Due Friday Morning
// Put all homework in:
//     ...../1704-apr10-java/Firstname_Lastname_Code/Javascript_Homework/
// 
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
    let USA = document.getElementsByTagName('span');
    for(let element of USA){
        if(element.textContent === 'USA'){
            console.log(element.textContent)
        }
    }
}
  
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales(){
    let people = document.getElementsByTagName('td');
    let name = '';
    for (let element of people){
        if(element.textContent !== 'Sales'){
            name = element.textContent; 
        }else{
            console.log(name)
        }
    }
}
  
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren(){
    let child = document.getElementsByTagName('a')
    for(let element of child){
        if(element.children[0] !== undefined){
            console.log(element.children[0].textContent)        
        }
    }
}
  
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
function getHobbies(){
    let hobbies = document.getElementsByName('skills');
    for (let i = 0; i < hobbies.length; i++) {
        // if(hobbies[i].getAttribute('selected')){
        console.log(hobbies[i].textContent);
        // }
    }
    
}
  
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.

function getCustomAttribute(){
    let customAttr = document.querySelectorAll('*');
    for(let e of customAttr){
        if (e.getAttribute('data-customAttr')){
            console.log(e.getAttribute('data-customAttr'))
            console.log((e.getAttribute('data-customAttr')).innerText)
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

function sumHandler(){
    // let num1 = parseInt(document.getElementById('num1').addEventListener("change", changeFunction));
    // let num2 = parseInt(document.getElementById('num2').addEventListener("change", changeFunction));

    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let sum = num1 + num2;

    document.getElementById('sum').innerText = sum;

}

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
//     "Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
function skillChoice(select) {
    alert("Are you sure " + select.options[select.selectedIndex].text + " is one of your skills?");
}

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
//     "So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
// function favColor(){
let colorChoice = document.getElementsByName('favoriteColor');
let pastColor = colorChoice[0].value;  
 for(let i=0; i < colorChoice.length; i++){
   colorChoice[i].addEventListener('click', () => {      
          if (colorChoice[i].value !== pastColor) {
          alert(`So you like ${colorChoice[i].value} more than ${pastColor}  now?` )
          pastColor = colorChoice[i].value;
           }
               for (let y = 0; y < colorChoice.length; y++){
                 
                 colorChoice[y].style.background = colorChoice;


               }
       })
   }

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
//     Hide the name if shown.
//     Show the name if hidden.

function hideEmployee() {
    let employees = document.getElementsByClassName("empName");
    for (let element of employees) {
        element.addEventListener("mouseenter", () => {
            if (e.style.visibility === "hidden") {
                e.style.visibility = "visible";
            } else {
                e.style.visibility = "hidden";
            }
        })
    }
}

// 10. Current Time
// Regarding this element:
//     <h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
function currentTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('currentTime').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(currentTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


// 11. Delay
// Regarding this element:
//     <p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
function colorChange(){
    setTimeout ( "setToRed()", 3000 );
}

function setToRed ( )
{
  document.getElementById("helloWorld").style.color = 'red';
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
