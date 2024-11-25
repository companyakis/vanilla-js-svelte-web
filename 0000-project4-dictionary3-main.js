let userInput = document.getElementById("word-type-input")
    
let dictionaryButton = document.getElementById("try-button")

let resultDiv = document.getElementById("result-div")

let finalWord = document.getElementById("word")

let wordMeaning = document.getElementById("Meaning")

let wordAudio = document.getElementById("audio")

async function fetchData() {

    resultDiv.style.display = "none"

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput.value}`

    const result = await fetch(url).then((r) => r.json())

    if (result.title) {}

    else {
        resultDiv.style.display = "block"

        finalWord.textContent = result[0].word

        wordMeaning.textContent = result[0].meanings[0].definitions[0].definition

        wordAudio.src = result[0].phonetics[0].audio
    }
    
}

dictionaryButton.addEventListener("click", fetchData)
