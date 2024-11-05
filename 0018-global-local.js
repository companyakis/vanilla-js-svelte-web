let name = "Mustafa" // global 

{
    console.log("My name is " + name)

    let age = 101 // local
}

console.log("Age is " + age) // ! main.jsx:9 Uncaught ReferenceError: age is not defined
