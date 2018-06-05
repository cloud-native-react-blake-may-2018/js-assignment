// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.

function getUSA() {
    console.log(document.querySelectorAll('[data-customAttr = "USA"]')[0].innerText); 
}
getUSA(); 

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

function getPeopleInSales() {
    let arList = new Array(); 
    let  found = document.querySelector(['table']); 
    for (let i = 0, row; row = found.rows[i]; i++) {
        if(row.cells[1].innerText === 'Sales') {
            arList.push(row.cells[0].innerText); 
        }
        
    }
    arList.forEach(function(element) {
        console.log(element);
      }); 
}
getPeopleInSales(); 

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>

function getAnchorChildren() {
    let items = document.querySelectorAll(['a']); 
    let nodeArr;
    let keyList;
    for(let i = 0; i < items.length; i++) {
        nodeArr = items[i].childNodes;
        for(let j = 0; j < nodeArr.length; j++) {
            let child = nodeArr[j];
            if(child.nodeName === 'SPAN') {
                console.log(child.innerText); 
            }
        }
    }
}
getAnchorChildren(); 
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.

function getHobbies() {
    let  found = document.querySelector('[name = "skills"]');
    let skill = found.querySelectorAll('[selected = "selected"]');
    for (var i = 0; i < skill.length; i++) {
        console.log(`value = ${skill[i].value}`);
        console.log(`contents = ${skill[i].innerText}`);    
    }
}
getHobbies();

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.

function getCustomAttribute() {
    let attrList = document.querySelectorAll('[data-customAttr]');
    for (var i = 0; i < attrList.length; i++) {
        console.log(`value = ${attrList[i].getAttribute('data-customAttr')}`);
        console.log(`element = ${attrList[i].nodeName}`);    
    }
}
getCustomAttribute(); 

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2"); 
let sumSpan = document.getElementById("sum")

function saveNum(nodeThing){
    let myNum = nodeThing.value;//.match(/\d/g);
    return Number(myNum);
}

function sumEvent() {
    let theSum = saveNum(num1) + saveNum(num2); 
    if(theSum) sumSpan.innerText = theSum;
    else sumSpan.innerText = "Cannot Add"; 
}
num1.addEventListener("change", sumEvent, false); 
num2.addEventListener("change", sumEvent, false);
    
// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

let  found = document.querySelector('[name = "skills"]');
found.addEventListener("change" , cssAlert, false); 
function cssAlert() {
    alert(`Are you sure ${this.value} is one of your skills?`); 
}

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

let radColors = document.getElementsByName("favoriteColor");

//for(var i = 0, max = radColors.length; i < max; i++) {
    //radColors[i].addEventListener("click", changeButtons(), false); 
    
    /*these event listeners all send the alert when page is loaded,
    not when radio is clicked/changed/selected.
    Furthermore, I inexplicably cannot access radColors[i].value,
    an essential piece in completing this exercise. (I have checked in the console that the field is occupied) 
    */
//}
//let old = 'white';
//let newColor = ''; 

//function changeButtons() {
    // for (var i = 0, l = radColors.length; i < l; i++) {
    //     if(radColors[i].checked) {
    //         newColor = radColors[i].value;
    //         break;
    //     }
    // }
    // alert(`So you like ${newColor} more than ${old} now?`);
    // old = newColor; 
    //code to change item colors
//}

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

function checkTime(i) {
    return (i < 10) ? "0" + i : i;
}

function startTime() {
    var today = new Date(),
        h = checkTime(today.getHours()),
        m = checkTime(today.getMinutes()),
        s = checkTime(today.getSeconds());
    document.getElementById('currentTime').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime(); 

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

let hw = document.getElementById('helloWorld'); 
function changeTheColor() {
    let colNum = Math.floor(Math.random() * 10); 
    let colorsArray = ['teal', 'purple', 'gold', 'red', 'maroon', 'fuchsia', 'orange', 'lime', 'blue', 'green'];
    hw.style.color = colorsArray[colNum]; 
}
function waitToChange(){
    setTimeout(() => changeTheColor(), 3000); 
}
hw.addEventListener("click", waitToChange, false);

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).

function walkTheDOM(node, func) {
    if(node.hasChildNodes()) { 
        let node1 = node.firstChild; 
        while(node1.nextSibling) {
            walkTheDOM(node1, func);  
            node1 = node1.nextSibling; 
        } 
    }
    func(node); 
}

let button = document.createElement("button");
button.innerHTML = "Walk the DOM";
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);
button.addEventListener ("click", tryWalk(), false);

function tryWalk() { 
    walkTheDOM(document.documentElement, (node) => {
        console.log(node.innerText);
    });
}