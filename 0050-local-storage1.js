// add-set data

window.localStorage.setItem("founder", "Mustafa Büyükdereli")

window.localStorage.setItem("visionStatement", "A rolling stone gathers no moss")

// use-get data

let ourFounder = window.localStorage.getItem("founder")

let ourVision = window.localStorage.getItem("visionStatement")

console.log(ourFounder)

console.log(ourVision)
