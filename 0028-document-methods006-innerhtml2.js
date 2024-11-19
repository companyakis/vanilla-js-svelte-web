let classWarning = document.querySelector(".warning")

// console.log(classWarning.innerText) // Study hard!

let warnings = ["Wake up!", "Do it!", "Keep calm!"]

warnings.forEach(
    w => {

        classWarning.innerHTML += `<p>Warning: ${w}</p>`
    }
)

// Warning: Wake up!

// Warning: Do it!

// Warning: Keep calm!
