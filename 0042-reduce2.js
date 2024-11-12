let sales = [
    {name: 'kağan', salesAmount: 400},
    {name: 'george', salesAmount: 660},
    {name: 'ayhan', salesAmount: 230},
    {name: 'george', salesAmount: 100},
    {name: 'aybilge', salesAmount: 680},
    {name: 'bengü', salesAmount: 3000},
    {name: 'george', salesAmount: 260},
    {name: 'bumin', salesAmount: 1440},
  ]

let georgeTotalSales = sales.reduce((sale, emp) => {

    if(emp.name == "george") {
        sale += emp.salesAmount
    }
    return sale
}, 0)

console.log(georgeTotalSales) // 1020
