const prompt = require('prompt-sync')()
const n = parseInt(prompt(`Enter a size of array: `))
let array = []
for (let i = 0; i < n; i++) {
    num = parseInt(prompt(`Enter the elem of array: `))
    array.push(num)
}

console.log(`array: [${array}]`)

const largestNumber = (arr) => {
    let largest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

console.log(`Largest Elem: ${largestNumber(array)}`)

const secondLargest = (arr) => { }