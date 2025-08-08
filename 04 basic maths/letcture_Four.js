const prompt = require('prompt-sync')()
let n = Number(prompt(`Enter a Number: `))

let originalN = n // ✅ store before the counting loop

// Count digits
let count = 0
while (n > 0) {
    n = Math.floor(n / 10)
    count++
}
// console.log("Digits:", count)

// Reverse number
let rvrsNumber = 0
while (originalN > 0) {
    let lstDigit = originalN % 10
    rvrsNumber = (rvrsNumber * 10) + lstDigit
    originalN = Math.floor(originalN / 10)
}
// console.log("Reversed:", rvrsNumber)


