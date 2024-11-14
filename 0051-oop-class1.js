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
