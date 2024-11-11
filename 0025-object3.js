let companyInfo = {

    companyName: "Ceteris Paribus Inc",
    founder: "Mr Lorem Ipsum",
    foudationYear: 2024,
    managers: [
        {department: "FinTech", departmentHead: "Mustafa Buyukdereli"},
        {department: "Sales", departmentHead: "Aygun Kaplan"},
        {department: "Operations", departmentHead: "Kağan Bilir"},
    ],

    managersInfo() {

        this.managers.forEach (manager => {

            console.log(`Department name: ${manager.department} and department head: ${manager.departmentHead}`)
        })
    }
    
}

companyInfo.managersInfo()

// Department name: FinTech and department head: Mustafa Buyukdereli
// Department name: Sales and department head: Aygun Kaplan    
// Department name: Operations and department head: Kağan Bilir
