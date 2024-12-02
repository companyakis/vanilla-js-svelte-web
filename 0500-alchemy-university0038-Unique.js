//  Your Goal: Find Unique Elements
// Write a function that will take an array of numbers and return a new array that only contains unique numbers.

function unique(array) {

    let uniqueArray = [... new Set(array)]

    return uniqueArray
    
}
