




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

//  alert('file connected');

function getUSA() {

  let word = 'USA';   

   let element = document.querySelector('h1');

   console.log(`element : ${element.nodeName} -  content : ${element.textContent}`);
  
}


getUSA();


// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

function getPeopleInSales(){

let people = document.querySelectorAll('tr');
let peopleInSales=[];


    for(let i=0 ; i<people.length ; i++) {

        
        if (people[i].textContent.includes('Sales')){
           
          console.log(people[i].getElementsByClassName("empName")[0].textContent);
       
         }

         
    }

    
    

}

getPeopleInSales();



// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>


function getAnchorChildren(){

  let anchorElements = document.getElementsByTagName('a');
   
  for (let i= 0 ; i< anchorElements.length ; i++){
    
    
      if (anchorElements[i].children[0] !== undefined ){
              
             console.log(anchorElements[i].children[0].textContent);
          
      }

  }


}
getAnchorChildren();

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.


function getHobbies(){

let skillElements =  document.getElementsByName("skills")[0]; 
 
 
for(let i=0; i<skillElements.length; i++){
       

    if (skillElements[i].getAttribute('selected') !== null){

      console.log(skillElements[i].textContent) ;

    } 


}


}


getHobbies();


// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.


function getCustomAttribute(){

let allElements = document.querySelectorAll('*');
let elementsArr = Array.from(allElements); 
elementsArr.forEach((element)=>{
let attr;  
 if( element.getAttribute('data-customAttr') !== null){

   console.log(`element : ${element.nodeName} data-customAttr : ${element.getAttribute('data-customAttr')} content : ${element.textContent}`) ;                          
 }


})

}

getCustomAttribute();


// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
//   <input id="num1" class="nums" type="text"/>
//   <input id="num2" class="nums" type="text"/>
//   <h3>Sum: <span id="sum"></span></h3>
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
//   "Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

 
 
  let selected = document.getElementsByName('skills');
  

  for(let i=0 ; i<selected.length;i++){
   
    selected[i].addEventListener('change',()=>{
           alert(`are you sure ${selected[i].value} is one of your skills ? `)
        })
       }
  


// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
//   "So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

 let radioOpt = document.getElementsByName('favoriteColor');
 let oldColor = radioOpt[0].value;  
 
  for(let i=0 ; i<radioOpt.length;i++){

   
    radioOpt[i].addEventListener('click',()=>{

           
            
           if (radioOpt[i].value !== oldColor){
           alert(`So you like ${radioOpt[i].value} more than ${oldColor}  now? `)
           
           oldColor = radioOpt[i].value; 
           let label = document.getElementsById('label1');
           label.style.ground = oldColor;
            }
            
                for (let y =0 ; y< radioOpt.length ; y++){
                  
                  radioOpt[y].style.color  = oldColor;


                }
        })
    }// end for 
  

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
//   Hide the name if shown.
//   Show the name if hidden.

let  empNode= document.getElementsByClassName('empName')
let isWhite=true;
console.log(empNode);
for (let i= 0 ; i<empNode.length ; i++){
  empNode[i].style.color = 'black'
}
 

for (let i= 0 ; i<empNode.length ; i++){
empNode[i].addEventListener('mouseover', ()=>{


  if(isWhite){

    empNode[i].style.color = 'white'
  }else {
   
    empNode[i].style.color = 'black'
     
  }
  isWhite=!isWhite


})  

   } 








// 10. Current Time
// Regarding this element:
//   <h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.


 
let time = document.getElementById('currentTime');
    
function thisTime(){
let t2 =new Date();
let hours =   t2.getHours()-12;
let minutes = t2.getMinutes();
let seconds = t2.getSeconds();
let amPM; 

if( hours < 0){

hours+=12;

}

if( t2.getHours() > 23 ){

  
  amPM= 'AM'
  
  }else if(t2.getHours() >= 11 ) {
  
  amPM= 'PM'
  }
   
    time.textContent = (`${hours}:${minutes}:${seconds} ${amPM} `)
 

   
   
}
setInterval(thisTime , 1000);

// 11. Delay
// Regarding this element:
//   <p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

function randomColor(){
  //generate a random color and return color
  
  let r=Math.floor(Math.random()*256);
  let g=Math.floor(Math.random()*256);
  let b=Math.floor(Math.random()*256);
  
  //"rgb(255, 0, 0)",
  
  return (`rgb(${r}, ${g}, ${b})`)
  
  
  }


let hello = document.getElementById('helloWorld')

hello.addEventListener('click' , ()=>{


    setTimeout(()=>{

       hello.style.color = randomColor();

    },1000);



})




// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
// Collapse 

   
node = document.querySelectorAll('*') ;

let size = 0  ;

//= console.log(node.length);

function walkTheDOM (n,fun){



  step(node);

}


function step(node){

  
     
        if (size < node.length ){
        
              if( node[size].innerHTML ){
              console.log(` node # ${size} , tagname ::  ${node[size].nodeName} , HTML content :: ${node[size].innerHTML}
              
              `);
              } else {
              console.log(` node # ${size} , tagname ::  ${node[size].nodeName} , HTML content :: no constent on this node
              
              `);

        } 
  

    size ++;
    }else  {

      console.log('end of dom');
      return; 
    } 


    step(node);
}



walkTheDOM (node,step);








  
       