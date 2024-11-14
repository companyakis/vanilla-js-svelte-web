window.localStorage.setItem("founder", "Mustafa Büyükdereli")

window.localStorage.setItem("visionStatement", "A rolling stone gathers no moss")

let ourFounder = window.localStorage.getItem("founder")

let ourVision = window.localStorage.getItem("visionStatement")

console.log(ourFounder)

console.log(ourVision)

// remove one item

localStorage.removeItem("visionStatement")

ourVision = window.localStorage.getItem("visionStatement")

console.log(ourFounder)

console.log(ourVision)


// Mustafa Büyükdereli
// main.js:11 A rolling stone gathers no moss
// main.js:19 Mustafa Büyükdereli
// main.js:21 null
