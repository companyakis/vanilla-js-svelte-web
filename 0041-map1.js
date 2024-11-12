let birth_years = [1948, 1956, 1981, 1991, 2014, 2017]

let ages = birth_years.map(
    birth => {
        return 2024 - birth
    }
)

console.log(ages) // [ 76, 68, 43, 33, 10, 7 ]
