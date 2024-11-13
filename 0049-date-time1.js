let currentDateTime = new Date()

console.log(currentDateTime) // 2024-11-13T11:18:26.079Z

console.log('Year:',currentDateTime.getFullYear())

console.log('Month:',currentDateTime.getMonth() + 1)

console.log('Day of Month:',currentDateTime.getDate())

console.log('Day:',currentDateTime.getDay())

console.log('Hours:',currentDateTime.getHours())

console.log('Minutes:',currentDateTime.getMinutes())

console.log('Seconds:',currentDateTime.getSeconds())

console.log(currentDateTime.toDateString())

console.log(currentDateTime.toTimeString())

console.log(currentDateTime.toLocaleString())

// Year: 2024
// Month: 11
// Day of Month: 13
// Day: 3
// Hours: 14
// Minutes: 22
// Seconds: 40
// Wed Nov 13 2024
// 14:22:40 GMT+0300 (GMT+03:00)
// 13/11/2024, 14:22:40
