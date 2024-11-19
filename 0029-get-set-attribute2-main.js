let link = document.querySelector("a")

console.log(link.getAttribute("href")) // https://www.samsung.com/tr/

// update the address

link.setAttribute("href", "https://www.apple.com/")

// update text 

link.textContent = "Apple"

