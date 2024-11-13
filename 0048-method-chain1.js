let sales = [
    {name: "Kağan", salesAmount: 55000, premium: 0},
    {name: "Aybilge", salesAmount: 47000, premium: 0},
    {name: "Aygün", salesAmount: 71000, premium: 0},
    {name: "Kültigin", salesAmount: 62000, premium: 0},
    {name: "Kutluk", salesAmount: 49500, premium: 0},
]

// if sales > 50000 => 0.15 premium


let premiums = sales.filter(emp => emp.salesAmount > 50000).
            
                map(emp => `Employee: ${emp.name} and premium: ${emp.salesAmount * 0.15}`)

console.log(premiums)

                
// [
//     'Employee: Kağan and premium: 8250',  
//     'Employee: Aygün and premium: 10650', 
//     'Employee: Kültigin and premium: 9300'
// ]
