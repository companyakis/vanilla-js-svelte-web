function greeting(name = "person") {

    console.log("Hi " + name +"!")
}

greeting("Mustafa")

greeting()

const sayHi = function(userName = "user") {

    console.log(`Hello ${userName}!`)
}

sayHi("Ayhan")

sayHi()

// Hi Mustafa!
// Hi person!
// Hello Ayhan!
// Hello user!
