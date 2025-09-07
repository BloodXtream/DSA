const prompt = require('prompt-sync')()
const n = parseInt(prompt(`Enter a size of array: `))
let array = []
for (let i = 0; i < n; i++) {
    num = parseInt(prompt(`Enter the elem of array: `))
    array.push(num)
}

console.log(`Orignal Array: [${array}]`)

const checkSortedArray = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {

        } else return false
    }
    return true
}

console.log(checkSortedArray(array))