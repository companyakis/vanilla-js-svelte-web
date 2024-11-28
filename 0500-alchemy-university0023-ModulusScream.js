// Your Goal: Modulus Scream
// Let's modify our function to return a scream alternating between lower and capital case. For example:
// console.log( scream(5) ); // aAaAa
// console.log( scream(10) ); // aAaAaAaAaA

function scream(n) {

    let result = ""

    for (let i =0; i < n; i++) {

        if (i % 2 === 0) {

            result += "a"
        }

        else {

            result += "A"
        } 

    }

    return result
}
