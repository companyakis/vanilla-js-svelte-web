let years = [2016, 2018, 1990, 2013, 2024, 1987, 2021, 2007]

let filter1 = years.filter(year => year < 2000)

console.log(filter1) // [ 1990, 1987 ]

let filter2 = years.filter(year => year > 2012 && year < 2020)

console.log(filter2) // [ 2016, 2018, 2013 ]
