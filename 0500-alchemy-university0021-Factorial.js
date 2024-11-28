//  Your Goal: Complete the Factorial
// Taking in some integer value n, find the factorial for that number and return it.

function factorial(n) {

    let result = 1

    if (n < 0) {

        result = null
        
        return result
    }

    else if (n == 0 || n == 1) {

        result = 0

        return result

    }

    else {

        for (let i = 1; i <= n; i++) {

            result *= i
        }

        return result
    }
    
}

module.exports = factorial;
