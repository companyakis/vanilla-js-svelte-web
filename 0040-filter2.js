const people = [
    {name: "hakan", married: true},
    {name: "ayhan", married: false},
    {name: "mustafa", married: false},
    {name: "aygün", married: false},
    {name: "bengü", married: true},
    {name: "bilge", married: false},
]

const marriedPeople = people.filter(
    p => {
        return p.married === true
    }
)

console.log(marriedPeople) // [ { name: 'hakan', married: true }, { name: 'bengü', married: true } ]
