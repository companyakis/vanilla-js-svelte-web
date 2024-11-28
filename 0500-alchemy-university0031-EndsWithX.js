// // Your Goal: Complete Ends With X
// // Complete the endsWithX function by detecting if the last character in the string is a lower-case x or an upper-case X. 
// Return true if the last character is either lower-case x or upper-case X, false otherwise.

function endsWithX(string) {

    return string[string.length -1].toUpperCase() === "X"
    
}

module.exports = endsWithX;
