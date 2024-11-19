let h2Tag = document.querySelector("h2")

// update 

// h2Tag.innerHTML = "<h1>New part</h1>"

// update, but keep older

h2Tag.innerHTML += "<h6>Hi there!</h6>"

console.log(h2Tag.innerText)

// My name is Mustafa
// Hi there!

// let's use class name

let pClass = document.querySelector(".proverb")

// console.log(pClass.innerText) // A rolling stone gathers no moss

// update

// pClass.innerHTML = "<p>Out of sight, out of mind</>"

// console.log(pClass.innerText) // Out of sight, out of mind

// update, but keep older

pClass.innerHTML += "<h4>A barking dog never bites<h4/>"

console.log(pClass.innerText)

// A rolling stone gathers no moss
// A barking dog never bites
