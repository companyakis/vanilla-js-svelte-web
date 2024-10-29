
let years = [2020, 2021, 23, 2024, 2025]

console.log(`Array length: ${years.length}`)

console.log(`Last element of the years array: ${years[years.length - 1]}`)

years.pop()

console.log(years)

years.push(1990)

years.push(2026)

console.log(years)

// Array length: 5
// main.jsx:6 Last element of the years array: 2025
// main.jsx:10 (4) [2020, 2021, 23, 2024]
// main.jsx:16 (6) [2020, 2021, 23, 2024, 1990, 2026]
