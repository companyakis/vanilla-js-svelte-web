const birthOfAygun = new Date("03/22/1990 17:25:38")

const getTimeAygunBirth = birthOfAygun.getTime()

//console.log(getTimeAygunBirth) // 638119538000

let now = new Date()

let timeDiffOfAygun = now.getTime() - getTimeAygunBirth

//console.log(timeDiffOfAygun) // 1093378339184

let minutesOfAygun = Math.round(timeDiffOfAygun / 1000 / 60)

let hoursOfAygun = Math.round(minutesOfAygun / 60)

let daysOfAygun = Math.round(hoursOfAygun / 24)

let yearsOfAygun = Math.round(daysOfAygun / 365)

console.log(minutesOfAygun)
console.log(hoursOfAygun)
console.log(daysOfAygun)
console.log(yearsOfAygun)

// 18222976
// 303716
// 12655
// 35
