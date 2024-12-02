//  Your Goal: Find the Sum of Even Values
// Given an array, find the sum of all even values inside the array and return it.

function sumEven(array) {

    let evenSum = 0

    for (let i = 0; i < array.length; i++) {

        if (array[i] % 2 === 0) {

            evenSum += array[i]
        }
    }

    return evenSum
    
}
