// Your Goal: Is All X?
// Complete the function isAllX to determine if the entire string is made of lower-case x, upper-case X, or a mix of both. Return true if they are, false if not.

// Examples:

// isAllX("Xx"); // true
// isAllX("xAbX"); // false

function isAllX(string) {

    let counter = 0

    for (let i = 0; i < string.length; i++) {

        if (string[i].toLowerCase() === "x") {

            counter++
        }
    }

    return counter === string.length

}

module.exports = isAllX;
