let users = ["Mustafa", "Aygün", "Kağan"]

users.forEach(u => {

    console.log("User: ", u)
})

// User:  Mustafa
// User:  Aygün
// User:  Kağan

users.forEach((u, index) => {

    console.log(`User${index + 1}: ${u}`)

})

// User1: Mustafa
// User2: Aygün  
// User3: Kağan  
