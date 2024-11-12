let birth_years = [1948, 1956, 1981, 1991, 2014, 2017]

let after2000 = birth_years.find(

    year => {
        return year > 2000
    }
)

console.log(after2000)
