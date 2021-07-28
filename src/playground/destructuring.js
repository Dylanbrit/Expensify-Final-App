// const person = {
//     name: 'Dylan',
//     age: 31,
//     location: {
//         city: 'Miami',
//         temp: 71
//     }
// }

// const { name = 'Anonymous', age } = person
// const { city, temp: temperature } = person.location

// console.log(`${name} is ${age}!`)
// console.log(`It's ${temperature} in ${city}`)

// const book = {
//     title: 'Porn',
//     author: 'Boob Dick',
//     publisher: {
//         company: 'Penis Inc'
//     }
// }

// const { company: publisherName = 'Self-published' } = book.publisher

// console.log(publisherName)

const item = ['Coffee', '1', '2', '3']

const [coffee, , medium] = item

console.log(`A medium ${coffee} costs ${medium}`)