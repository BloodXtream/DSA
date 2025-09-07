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


// second largest in the array without sorting

const secondLargest = (arr) => {
    let first = -Infinity
    let second = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first
            first = arr[i]
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i]
        }
    }
    return second
}

console.log(`Second Elem: ${secondLargest(array)}`)