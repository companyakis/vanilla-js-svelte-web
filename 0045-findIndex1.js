let birth_years = [1948, 1956, 1981, 1991, 2014, 2017]

let i = birth_years.findIndex(year => year == 1981)

birth_years[i] = 1781

console.log(birth_years) // [ 1948, 1956, 1781, 1991, 2014, 2017 ]
