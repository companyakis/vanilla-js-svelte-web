let sales = [
    {name: "Kağan", salesAmount: 55000, premium: 0},
    {name: "Aybilge", salesAmount: 47000, premium: 0},
    {name: "Aygün", salesAmount: 71000, premium: 0},
    {name: "Kültigin", salesAmount: 62000, premium: 0},
    {name: "Kutluk", salesAmount: 49500, premium: 0},
]

let i = sales.findIndex(person => person.name == "Aygün")

sales[i].salesAmount = 74000

console.log(sales)

// [
//     { name: 'Kağan', salesAmount: 55000, premium: 0 },
//     { name: 'Aybilge', salesAmount: 47000, premium: 0 },
//     { name: 'Aygün', salesAmount: 74000, premium: 0 },
//     { name: 'Kültigin', salesAmount: 62000, premium: 0 },
//     { name: 'Kutluk', salesAmount: 49500, premium: 0 }
// ]
