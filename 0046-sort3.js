// i think typescript!..

let points = [700, 75, 250, 3, 30, 10, 800, 270]

let s1 = points.sort()

console.log(s1)

let s2 = points.sort((a, b) => a - b)

console.log(s2)

let s3 = points.sort((a, b) => b - a)

console.log(s3)

// [
//     10, 250, 270,   3,
//     30, 700,  75, 800
//   ]

//   [
//       3,  10,  30,  75,
//     250, 270, 700, 800
//   ]

//   [
//     800, 700, 270, 250,
//      75,  30,  10,   3
//   ]
