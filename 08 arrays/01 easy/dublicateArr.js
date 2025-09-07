const prompt = require('prompt-sync')()
const n = parseInt(prompt(`Enter a size of array: `))
let array = []
for (let i = 0; i < n; i++) {
    num = parseInt(prompt(`Enter the elem of array: `))
    array.push(num)
}

console.log(`Orignal Array: [${array}]`)

// Brute force
const removeDublicateBrute = (arr) => {
    return [...new Set(arr)]
}

const removeDublicateBetter = (arr) => {
    if (arr.length === 0) return []
    const result = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            result.push(arr[i])
        }
    }
    return result
}

const removeDublicateOptimal = (arr) => {
    if (arr.length === 0) return []
    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++
            arr[i] = arr[j]
        }
    }
    arr.length = i + 1
    return arr
}

console.log(`Brute: ${removeDublicateBrute(array)}`)
console.log(`Better: ${removeDublicateBetter(array)}`)
console.log(`Optimal: ${removeDublicateOptimal(array)}`)
