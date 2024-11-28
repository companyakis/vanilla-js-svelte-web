// Your Goal: Find the First X
// In the string argument find the index of the first lower-case "x" and return it.

function findFirstX(string) {

    for (let i = 0; i < string.length; i++) {

        if (string[i].toLowerCase() === "x") {

            return i
        }
    }
    
}

module.exports = findFirstX;
