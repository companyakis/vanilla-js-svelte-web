let points = [270, 735, 125, 3005, 310, 180, 47];

// over 150

let overNumbers = points.reduce((counter, point) => {

    if (point > 150) {
        counter++
    }

    return counter
    
}, 0) // 0 is the initial value of counter

console.log(overNumbers) // 5
