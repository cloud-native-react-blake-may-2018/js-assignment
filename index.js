
// -----------------------------------------------------------------------------------
// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
// Please put the question itself as a comment above each answer.

// -----------------------------------------------------------------------------------
window.onload = () => {
  sum()
  coding()
  color()
  peekaboo()
  time()
  random()
}

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
const getUSA = () => {
  const tag = document.querySelectorAll('h1')[0].querySelectorAll('span')[1].textContent
  console.log(tag)
}
getUSA()

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
const getPeopleInSales = () => {
  let rows = [...document.querySelectorAll('tr')].splice(1)

  rows.forEach(row => {
    const employee = row.querySelector('.empName')
    const dept = [...row.querySelectorAll('td')][1]

    if (dept.textContent.includes('Sales')) {
      console.log(employee.textContent)
    }
  })
}
getPeopleInSales()

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
const getAnchorChildren = () => {
  const anchors = [...document.querySelectorAll('a')]
  anchors.forEach(a => {
    const children = [...a.querySelectorAll('span')]

    if (children.length > 0) children.forEach(span => console.log(span.textContent))
  })
}
getAnchorChildren()

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
const getHobbies = () => {
  const select = document.querySelector('select[name="skills"]')
  const skills = [...select.querySelectorAll('option')]

  skills.forEach(skill => {
    const valid = skill.getAttribute('selected') ? true : false

    if (valid) console.log(skill.textContent)
  })
}
getHobbies()

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
const getCustomAttribute = () => {
  const anomalies = document.querySelectorAll('[data-customAttr]')
  anomalies.forEach(el => console.log(el.getAttribute('data-customAttr'), ': ', el))
}
getCustomAttribute()

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
const sum = () => {
  const input = document.querySelector('#sum')
  const nums = [...document.querySelectorAll('.nums')]

  const sum = (a, b) => {
    if (a && b) input.textContent = a + b
    else input.textContent = 'Cannot add'
  }

  const listen = ({ target }) => {
    const num1 = parseInt(document.querySelector('#num1').value)
    const num2 = parseInt(document.querySelector('#num2').value)
    sum(num1, num2)
  }
  sum()
  nums.forEach(num => num.addEventListener('keyup', listen))
}

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
//   "Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
const coding = () => {
  const select = document.querySelector('[name="skills"]')

  const verify = () => {
    confirm(`Are you sure ${select.options[select.selectedIndex].value.toUpperCase()} is one your skills?`)
  }

  select.addEventListener('change', verify)
}



// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
//   "So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

const color = () => {
  const colors = [...document.querySelectorAll('[name="favoriteColor"]')]
  let prev = ""

  const recolor = color => {
    let head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style'),
      css =
        `[name="favoriteColor"]:before { 
        content: "";
        display: block;
        position: relative;
        top: -1.5px;
        left: -1.4px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-blend-mode: overlay;
        background: ${color}; !important;
        opacity: .6;
      }`

    style.type = 'text/css'

    if (style.styleSheet) {
      style.styleSheet.cssText = css
    } else {
      style.appendChild(document.createTextNode(css))
    }

    head.appendChild(style)
  }

  const log = ({ target }) => {
    if (prev) {
      confirm(`So you like ${target.value} more than ${prev} now?`)
      recolor(target.value)
      prev = target.value
    } else {
      recolor(target.value)
      prev = target.value
    }
  }
  colors.forEach(color => {
    color.addEventListener('change', log)
  })

}


// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
//   Hide the name if shown.
//   Show the name if hidden.
const peekaboo = () => {
  let n = 0
  const elements = [...document.querySelectorAll('.empName')]
  const employees = [...document.querySelectorAll('.empName')].map(employee => {
    const obj = { name: employee.textContent, visible: true, index: n }
    n++
    return obj
  })

  toggle = ({ target }) => {
    const name = target.textContent
    let person = employees.filter(employee => employee.name === name)[0]

    employees[person.index].visible = !person.visible

    elements[person.index].style.opacity = employees[person.index].visible ? 1 : 0
  }
  elements.forEach(element => element.addEventListener('mouseover', toggle))
}

// 10. Current Time
// Regarding this element:
//   <h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
const time = () => {
  const time = document.querySelector('#currentTime')
  setInterval(() => {
    const d = new Date()
    time.textContent = `${d.getHours() < 12 ? d.getHours() : d.getHours() - 12}:${d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes()}:${d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds()} ${d.getHours() < 12 ? 'AM' : 'PM'}`
  }, 1000)
}

// 11. Delay
// Regarding this element:
//   <p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
const random = () => {
  const hello = document.querySelector('#helloWorld')
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']

  const disco = ({ target }) => setTimeout(() => {
    console.log('hi!')
    hello.style.backgroundColor = colors[Math.ceil(Math.random() * 6)]
  }, 3000)

  hello.addEventListener('click', disco)
}

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
const walkTheDOM = (node, func) => {

  // if node is string, convert to node
  node = typeof node === 'string' ? document.querySelector(node) : node

  // apply function to node if content has text
  const parse = cog => cog.nodeValue.trim().length > 0 && func(cog.nodeValue)

  // if node is #text node, func(text)
  if (node.nodeType === 3) parse(node)

  if (node.nodeType === 1) {
    // get children of node
    nodes = [...node.childNodes]

    // if array only has a #text node, func(text)
    if (nodes.length === 1) parse(nodes[0])

    // recursively traverse child nodes
    if (nodes.length > 1) nodes.forEach(item => walkTheDOM(item, func))
  }
}

walkTheDOM('body', console.log)