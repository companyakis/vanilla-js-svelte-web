class Employees {

    constructor(empName, department, title, salary) {
        this.empName = empName
        this.department = department
        this.title = title
        this.salary = salary
    }

    employeeDepartmentTitleInfo() {

        return `${this.empName} - ${this.department} - ${this.title}`
    }

    employeeSalaryInfo() {

        console.log(`${this.empName} - ${this.salary}`)
    }
}

let empMustafa = new Employees("Mustafa", "FinTech", "Head", 7500)

let empAygun = new Employees("Aygün", "Sales", "Head", 7000)

console.log(empMustafa.employeeDepartmentTitleInfo())

empAygun.employeeSalaryInfo()

// Mustafa - FinTech - Head
// Aygün - 7000
