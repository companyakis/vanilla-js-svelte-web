let pValues = document.querySelectorAll("p")

// pValues.forEach(element => {
//     console.log(element.innerText)
// })

// Lorem Ipsum
// A rolling stone gathers no moss
// Study hard!

// update inner texts

pValues.forEach(e => {
    e.innerText += " NEW"
    console.log(e.innerText)
})

// Lorem Ipsum NEW
// A rolling stone gathers no moss NEW
// Study hard! NEW
