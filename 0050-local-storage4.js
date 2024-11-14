window.localStorage.setItem("founder", "Mustafa Büyükdereli")

window.localStorage.setItem("visionStatement", "A rolling stone gathers no moss")

let ourFounder = window.localStorage.getItem("founder")

let ourVision = window.localStorage.getItem("visionStatement")

console.log(ourFounder)

console.log(ourVision)

// remove all

localStorage.clear()

ourFounder = window.localStorage.getItem("founder")

ourVision = window.localStorage.getItem("visionStatement")

console.log(ourFounder)

console.log(ourVision)

// main.js:9 Mustafa Büyükdereli
// main.js:11 A rolling stone gathers no moss
// main.js:21 null
// main.js:23 null
