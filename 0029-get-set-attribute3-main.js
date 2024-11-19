let data = document.querySelector(".proverb") // class "proverb"

// console.log(data.innerText) // A rolling stone gathers no moss

// console.log(data.getAttribute("class")) // class name => "proverb"

// let's change class name attribute

data.setAttribute("class", "important-proverb") // new class name

console.log(data.getAttribute("class")) // important-proverb

// let's add and set a new attribute

data.setAttribute("style", "color: green; font-style: italic")
