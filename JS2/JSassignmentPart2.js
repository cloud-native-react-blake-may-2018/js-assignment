/*-----------------------------------------------------------------------------------
PART II
Part II will focus on Javascript's ability to manipulate the DOM.
Use the provided index.html
Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
Please put the question itself as a comment above each answer.
-----------------------------------------------------------------------------------*/
/*1. USA
Define function getUSA()
Find the html element that contains "USA".
Print that element's contents.*/
function getUSA()   {
    let States = document.querySelector('span[data-customAttr="USA"]');
    alert(States.innerHTML);
}
/*2. Sales
Define function getPeopleInSales()
Print the names of all the people in the sales department.*/
function getPeopleInSales() {
    let row = document.getElementsByTagName('tr');
    arr = [];
    for (let i=1; i<row.length; i++) {
        myData = row[i].getElementsByTagName('td')[1].innerHTML;
        if(myData === 'Sales') {
            arr.push(row[i].getElementsByTagName('td')[0].innerHTML);
        }
    }
    let output = arr.toString();
    alert(output);
}
/*3. Click Here
Define function getAnchorChildren()
Find all anchor elements with a <span> child.
Print the contents of <span>*/
function getAnchorChildren() {
    let a = document.getElementsByTagName('a');
    arr = [];
    for (let i=1; i<a.length; i++) {
        let span = a[i].querySelector('span');
        if (span !== null) { 
            let spandata = span.innerHTML;
            arr.push(spandata); 
        }
    }
    let output = arr.toString();
    alert(output);
}
/*4. Hobbies
Define function getHobbies()
Find all checked options in the 'skills' select element.
Print the value and the contents.*/
function getHobbies() {
    let skills = document.querySelector('select[name="skills"]');
    let selectedList = skills.querySelectorAll('option[selected="selected"]');
    let arr = [];
    for (let i=0; selectedList.length; i++) {
        let inner = selectedList[i].innerHTML;
        //arr.push(inner);
        alert(inner);
    }
    // let output = arr.toString();
    // alert(output);
}
/*5. Custom Attribute
Define function getCustomAttribute()
Find all elements with "data-customAttr" attribute
Print the value of the attribute.
Print the element that has the attribute.*/
function getCustomAttribute() {
    const bodyElems = document.body.getElementsByTagName('*');
    let arr = [];
    for (let i=1; i<bodyElems.length; i++) {
        if (bodyElems[i].hasAttribute('data-customAttr')) {
            arr.push(`${bodyElems[i].tagName}: ${bodyElems[i].innerHTML}`)
        }
    }
    alert(arr.toString());
}
/*6. Sum Event
NOTE: Write unobtrusive Javascript
Regarding these elements:
<input id="num1" class="nums" type="text"/>
<input id="num2" class="nums" type="text"/>
<h3>Sum: <span id="sum"></span></h3>
Define onchange event handler.
Add <input> element values.
Put the sum in the <span> element.
If values cannot be added, put "Cannot add" in the <span> element*/
function sum() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    let sum = Number(num1)+Number(num2);
    document.getElementById('sum').innerHTML = sum;
}
/*7. Skills Event
NOTE: Write unobtrusive Javascript
When user selects a skill, create an alert with a message similar to:
"Are you sure CSS is one of your skills?"
NOTE: no alert should appear when user deselects a skill.*/
function skillAlert() {
    const skillSelect = document.querySelector('select[name="skills"]');
    const selectedSkill = document.querySelector(`option[value="${skillSelect.value}"]`);
    alert (`Are you sure ${selectedSkill.innerHTML} is one of your skills?`)
}
/*8. Favorite Color Event
NOTE: Write unobtrusive Javascript
NOTE: This is regarding the favoriteColor radio buttons.
When a user selects a color, create an alert with a message similar to:
"So you like green more than blue now?"
In this example, green is the new value and blue is the old value.
Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor*/
let  previous = "Yellow";
function favoriteColor()    {  //Changes the backgroundColor... technically.  But it isn't noticable
    const colorSelect = document.querySelector('select[name="colors"]');
    const selectedColor = document.querySelector(`option[value="${colorSelect.value}"`);
    alert (`So you like ${selectedColor.innerHTML} more than ${previous} now?`);
    previous = selectedColor.innerHTML;
    let radioColors = document.querySelectorAll('input[name="favoriteColor"]');
    for (let i=0; i<radioColors.length; i++) {
        radioColors[i].style.backgroundColor = "selectedColor.innerHTML";
    }
}
/*9. Show/Hide Event
NOTE: Write unobtrusive Javascript
When user hovers over an employees name:
Hide the name if shown.
Show the name if hidden.*/
function employeeToggle(specific) {  //Doesn't reveal again
    let employees = document.getElementsByClassName('empName');
    let specified;
    for (let i=0; i<employees.length; i++) {
        if (employees[i].innerHTML === specific) specified = employees[i];
    }
    if (specified.style.visibility === "visible" || specified.style.visibility === "") { specified.style.visibility = "hidden"; }
    else { specified.style.visibility = "visible"; }
}
function reveal(specific) {
    let employees = document.getElementsByClassName('empName');
    let specified;
    for (let i=0; i<employees.length; i++) {
        if (employees[i].innerHTML === specific) { specified = employees[i]; }
    }
    alert(specified)
    if (specified.style.visibility === "hidden") { specified.style.visibility = "visible"; }
}
/*10. Current Time
Regarding this element:
<h5 id="currentTime"></h5>
Show the current time in this element in this format: 9:05:23 AM
The time should be accurate to the second without having to reload the page.*/
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('currentTime').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime();
/*11. Delay
Regarding this element:
<p id="helloWorld">Hello, World!</p>
Three seconds after a user clicks on this element, change the text to a random color.*/
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function helloColorDelay() {
    setTimeout(changeColor, 3000);
}
function changeColor() {
    document.getElementById('helloWorld').style.color = getRandomColor();
}
/*12. Walk the DOM
Define function walkTheDOM(node, func)
This function should traverse every node in the DOM. Use recursion.
On each node, call func(node).*/
arrElem = [];
function addElem(node) {
    arrElem.push(node);
}
function walkTheDOM(node, func) {
    func(node);
    while(node.firstChild) {
        node = node.firstChild;
        walkTheDOM(node,addElem);
    }
    while(node.nextSibling) {
        node = node.nextSibling;
        walkTheDOM(node,addElem);
    }
    return arrElem.toString();
}