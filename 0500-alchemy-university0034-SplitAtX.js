// Your Goal: Find the Longer Half
// Let's find the longer half of the string before and after the x!

// First, you'll need to find the lower-case x.
// Once you've found the x, split the string in half. The first half will be the string before the x, the second half will be the string after the x.
// Take the longer string and return it!

function splitAtX(string) {

    const xIndex = string.indexOf("x")

    let slice1 = string.slice(0, xIndex)

    let slice2 = string.slice(xIndex + 1) // If the last index is not provided, slice will continue until the end of the string

    return (slice1.length > slice2.length) ? slice1 : slice2
    
}
