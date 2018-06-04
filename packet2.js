// -----------------------------------------------------------------------------------
// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
// Please put the question itself as a comment above each answer.

// -----------------------------------------------------------------------------------

//Button Creator for Testing
//  -Javascript is independent of HTML file; no changes to HTML code was written

let newDiv = document.createElement("div"); 
let newContent = document.createTextNode("Test Buttons: ");
newDiv.appendChild(newContent);
document.body.prepend(newDiv)

function makeBtn(text, callFn){
    let btn = document.createElement("BUTTON");        
    let t = document.createTextNode(text);  
    btn.appendChild(t)     

    btn.addEventListener("click", callFn)         
    newDiv.appendChild(btn);
}

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
  
function getUSA(){
    let a = document.querySelector("span[data-customAttr]");
    alert("Contents of USA: " + a.innerHTML);
}            
makeBtn("[1] getUSA", getUSA)

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

function getPeopleInSales(){
    let ppl = document.getElementsByTagName('td');
    let outText = "People in Sales:";
    i=1;

    while(i < ppl.length){
        if(ppl[i].innerHTML == 'Sales'){
            outText += " [" + ppl[i-1].innerHTML + "]";
        }
        i+=2
    }
    alert(outText)
}
makeBtn("[2] getPeopleInSales", getPeopleInSales)  

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>

function getAnchorChildren(){
    let elem = document.getElementsByTagName("a")
    i = 0
    while(i < elem.length){
        if(elem[i].children.length > 0){
            if(elem[i].children[0].tagName == 'SPAN'){
                alert(i + " " + elem[i].children[0].innerHTML)
            }
        }
        i +=1
    }
}
makeBtn("[3] getAnchorChildren", getAnchorChildren) 

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.

function getHobbies(){
    let sel = document.getElementsByTagName('select');
    let elem = sel.skills
    i=0;

    outText = "Selected Elements:"

    while(i<elem.length){
        if(elem[i].defaultSelected == 1){
            outText += " [" + elem[i].innerHTML + "]"
        }
        i+=1
    }
    alert(outText)
}
makeBtn("[4] getHobbies", getHobbies)  

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.

function getCustomAttribute(){
    let elem = document.querySelectorAll('[data-customAttr]');
    outText = "Values and element of data-customAttr:"

    i= 0
    while(i<elem.length){
        outText += " [" + elem[i].getAttribute('data-customAttr')

        inElem = elem[i].innerHTML
        if(inElem.length  != 0){
            outText += " - " + inElem + "]"
        }
        else{
            outText += " - " + "EMPTY" + "]"
        }
        i+=1
    }
    alert(outText)   
}
makeBtn("[5] getCustomAttribute", getCustomAttribute)

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

function sumNum(){
    let elem = document.getElementById('sum')
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)

    let appendText = (text) =>{
        if(elem.childNodes[0] == null){
            elem.appendChild(text)
        } else{
            elem.removeChild(elem.childNodes[0]);
            elem.appendChild(text)
        }
    }
    if(isNaN(num1) || isNaN(num2)){
        let text = document.createTextNode("Cannot add");
        appendText(text);
    }else{
        let text = document.createTextNode(num1+num2)
        appendText(text);
    }
}

numLis1 = document.getElementById('num1')
numLis2 = document.getElementById('num2')
numLis1.addEventListener('change', sumNum)
numLis2.addEventListener('change', sumNum)

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

function skillAlert(){
    let sel = document.getElementsByTagName('select');
    let elem = sel.skills
    selOption = elem.options[elem.selectedIndex].text
    confirm(`Are you sure ${selOption} is one of your skills?`)
}

elemSkills= document.getElementsByTagName('select').skills;
elemSkills.addEventListener('change', skillAlert)

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

function favColor(){
    elem = document.getElementsByName('favoriteColor')
    i = 0
    let select
    let prevColor = document.body.style.backgroundColor

    while(i<elem.length){
        if(elem[i].checked){
            select=i
        }
        i++
    }

    if(document.body.style.backgroundColor != ''){
        alert(`So you like ${elem[select].value} more than ${prevColor} now?`)
        document.body.style.backgroundColor = elem[select].value
    }else{
        alert(`So you like ${elem[select].value} more than white now?`)
        document.body.style.backgroundColor = elem[select].value
    }
}

j = 0;
ColElem = document.getElementsByName('favoriteColor')
while(j<ColElem.length){
    ColElem[j].addEventListener('click',favColor)
    j++
}

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

function showHide(event){
    inStyle = event.target.style

    if(inStyle.opacity == '' || inStyle.opacity == 1){
        inStyle.opacity = 0
    }else{
        inStyle.opacity = 1
    }
}

let i = 0;
let elemSH = document.getElementsByClassName('empName');

while(i<elemSH.length){
    elemSH[i].addEventListener("mouseover", showHide)
    i++
}

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

function timeDisp(){
    function zeroCheck(t){
        if (t < 10){
            return '0'+t;
        } else{
            return t;
        }
    }

    let timeElem =document.getElementById('currentTime')
    let time = new Date()
    let h = time.getHours()
    let m = time.getMinutes()
    let s = time.getSeconds()

    let isAmPm = (h) => {
        if(h>=12){
            return 'PM'
        } else{
            return 'AM'
        }
    }

    amPm = isAmPm(h)
    h = ((h-1)%12)+1
    m = zeroCheck(m)
    s = zeroCheck(s)

    timeElem.innerHTML = h + ":" + m + ":" + s + " " + amPm
}
setInterval(timeDisp, 500)
    
// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

function helloWorld(){
    helloElem = document.getElementById('helloWorld')
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let textColor = "rgb("+ r + "," + g + "," + b + ")";

    helloElem.style.color = textColor
}

helloElem = document.getElementById('helloWorld')
helloElem.addEventListener('click', ()=>{
    setTimeout(helloWorld, 3000)
})

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).

function walkTheDom(){
    function DFS(htmlNode){
        console.log(htmlNode)
        let k=0 
        while(k<htmlNode.childNodes.length){
            DFS(htmlNode.childNodes[k])
            k++
        }
    }
    DFS(document)
}
    
walkTheDom()