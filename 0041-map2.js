let sales = [
    {name: "Kağan", salesAmount: 55000, premium: 0},
    {name: "Aybilge", salesAmount: 47000, premium: 0},
    {name: "Aygün", salesAmount: 71000, premium: 0},
    {name: "Kültigin", salesAmount: 62000, premium: 0},
    {name: "Kutluk", salesAmount: 49500, premium: 0},
]

let premiums = sales.map(
    person => {
        if (person.salesAmount > 50000) {
            person.premium += 0.15 * person.salesAmount
        }
        else {
            person.premium = 0
        }
        return person
    }
)

console.log(premiums)

// [
//   { name: 'Kağan', salesAmount: 55000, premium: 8250 },   
//   { name: 'Aybilge', salesAmount: 47000, premium: 0 },    
//   { name: 'Aygün', salesAmount: 71000, premium: 10650 },  
//   { name: 'Kültigin', salesAmount: 62000, premium: 9300 },
//   { name: 'Kutluk', salesAmount: 49500, premium: 0 }      
// ]
