let form = document.querySelector(".register-form")

let userName = document.querySelector("#username")

form.addEventListener("submit", e => {
    e.preventDefault()

    // console.log("Ok!")

    console.log(userName.value)

    // console.log(form.username.value)
})
