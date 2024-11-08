let company = {

    name: "Ceteris Paribus Inc",
    founder: "Lorem Ipsum",
    foundationYear: 2024,
    employees: 145,

    // object method
    companyInfo() {
        console.log(`Company name: ${company.name} and founder: ${this.founder}`)
    }
}

company.companyInfo() // Company name: Ceteris Paribus Inc and founder: Lorem Ipsum
