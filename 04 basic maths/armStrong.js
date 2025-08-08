const prompt = require('prompt-sync')()

const n = Number(prompt(`Enter a number: `))

let orgnlNum = n
let sum = 0
while (orgnlNum > 0) {
    let lastDigit = orgnlNum % 10
    sum += (lastDigit * lastDigit * lastDigit)
    orgnlNum = Math.floor(orgnlNum / 10)
}

console.log((sum === n) ? "ArmStong Number" : "Normal Number")