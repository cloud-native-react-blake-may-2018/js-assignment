
// Problem 1
console.log('//'.repeat(10));
console.log('Problem 1')
console.log('//'.repeat(10));

function getUSA(){
    
    let test = document.querySelectorAll('[data-customAttr="USA"]')
    for (let value of test.values()) {
        
        console.log(value.parentElement.innerText);
    }
}

 getUSA();


// Problem 2
console.log('//'.repeat(10));
console.log('Problem 2')
console.log('//'.repeat(10));

function getPeopleInSales(){
    let employees = document.getElementsByClassName('empName');
    for (let value of employees){
        if(value.nextElementSibling.textContent === 'Sales'){
            console.log(value.textContent)
        }
    }
}

getPeopleInSales();

// Problem 3
console.log('//'.repeat(10));
console.log('Problem 3')
console.log('//'.repeat(10));

function getAnchorChildren(){
    let anchors = document.getElementsByTagName('a');
    for(let val of anchors){
        if(val.children.length > 0){
            for(let tags of val.children){
                if(tags.tagName === 'SPAN'){
                    console.log(tags.textContent)
                }
            }
        }
    }

}

getAnchorChildren();

console.log('//'.repeat(10));
console.log('Problem 4')
console.log('//'.repeat(10));

function getHobbies(){
    let skills = document.getElementsByName('skills');
    for(let skill of skills[0].children){
        if(skill.selected === true){
            console.log(`value :${skill.value} content: ${skill.innerHTML}`);
        }
    }
}
getHobbies();

console.log('//'.repeat(10));
console.log('Problem 5');
console.log('//'.repeat(10));

function getCustomeAttribute(){
    let costumeAttr = document.querySelectorAll('[data-customAttr]');

    for(let val of costumeAttr){
        console.log(`Element: ${val.tagName} and Value: ${val.getAttribute('data-customAttr')}`);
    }
}

getCustomeAttribute();


console.log('//'.repeat(10));
console.log('Problem 6')
console.log('//'.repeat(10));


document.getElementById('num1').addEventListener('change',e=>{
    let num2 = document.getElementById('num2');
    let sum = document.getElementById('sum');
    if(! isNaN(e.target.value) && ! isNaN(num2.value) ){
        sum.innerText =`${+e.target.value + +num2.value}`;
    }
    else{
        sum.innerText ='cannot compute';
    }
})

document.getElementById('num2').addEventListener('change',e=>{
    let num1 = document.getElementById('num1');
    let sum = document.getElementById('sum');
    if(! isNaN(e.target.value) && ! isNaN(num1.value)){
        
        sum.innerText =`${+e.target.value + +num1.value}`;
    }
    else{
        sum.innerText ='cannot compute';
    }
})
console.log('Problem 6 does not Display anything to the console');

console.log('//'.repeat(10));
console.log('Problem 7')
console.log('//'.repeat(10));


let skills = document.querySelector('[name=skills]');
skills.addEventListener('change',(e)=>{
    alert(`are you sure ${e.target.value} is one of your skills?`);
})

console.log('Problem 7 does not Display anything to the console');


console.log('//'.repeat(10));
console.log('Problem 8')
console.log('//'.repeat(10));

let colors = document.querySelectorAll('[name="favoriteColor"]');
let currentColor = "";
console.log(colors);
for(let color of colors){
    color.addEventListener('click',colorChange);
}

function colorChange(e){
    if(currentColor === ""){
        alert(`Your first color seleciton is ${e.target.value}`)
        currentColor = e.target.value;
    }else{
        alert(`I guess you like ${e.target.value} better than ${currentColor}`);
        currentColor = e.target.value;
    }
    for(color of colors){
        color.style.backgroundColor="blue";
        console.log(color.style.backgroundColor);
    }
}



console.log('//'.repeat(10));
console.log('Problem 9')
console.log('//'.repeat(10));

function showHide(){
    let employees = document.getElementsByClassName('empName');
    for(let employee of employees){
        employee.addEventListener('mouseenter',(e)=>{
            if(e.target.style.color ==='white'){
                e.target.style.color = 'black';
            }else{
                e.target.style.color = 'white';
            }
        })
    }
}
console.log('problem 9 does not display anything to the screen');
showHide();

console.log('//'.repeat(10));
console.log('Problem 10')
console.log('//'.repeat(10));

function currentDate(){
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let currentTime = document.getElementById('currentTime');
    if(hour > 12){
        currentTime.innerText =`${hour-12}:${minutes}:${seconds} PM`;
    }else{
        currentTime.innerText =`${hour}:${minutes}:${seconds} AM`;
    }
}
console.log('problem 10 does not display anything');
setInterval(currentDate,1000);

console.log('//'.repeat(10));
console.log('Problem 11')
console.log('//'.repeat(10));

function changeColor(){
    let helloworld = document.getElementById('helloWorld');
    helloworld.addEventListener('click',()=>{
        setTimeout(colorChange,1000);
    });

    let colorChange = ()=>{
        helloworld.style.color = getRandomColor() ;
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
}
changeColor();

console.log('problem 11 does not display anything');

console.log('//'.repeat(10));
console.log('Problem 12')
console.log('//'.repeat(10));

function testFunction (node){
    console.log(node.nodeName);

}



function walkTheDom(node, func){
    func(node);
    node = node.firstChild;
    while(node){
        walkTheDom(node,func);
        node = node.nextSibling;
    }
}

walkTheDom(document, testFunction);

