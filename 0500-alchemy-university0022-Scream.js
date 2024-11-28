//  Complete the Function: Scream
// Let's create a function scream which will take in a value n and return a string with the letter "a" repeated that many times. For example:
// scream(5); // "aaaaa"
// scream(10); // "aaaaaaaaaa"

function scream(n) {

    let result = ""

    for (let i = 0; i < n; i++) {

        result += "a" 
    }

    return result
    
}

module.exports = scream;
