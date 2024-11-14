let sales = [
    {name: "Kağan", salesAmount: 55000, premium: 0},
    {name: "Aybilge", salesAmount: 47000, premium: 0},
    {name: "Aygün", salesAmount: 71000, premium: 0},
    {name: "Kültigin", salesAmount: 62000, premium: 0},
    {name: "Kutluk", salesAmount: 49500, premium: 0},
]

// local storage needs JSON format!

localStorage.setItem("salesData", JSON.stringify(sales))

let salesByEmployee = localStorage.getItem("salesData")

console.log(JSON.parse(salesByEmployee))
