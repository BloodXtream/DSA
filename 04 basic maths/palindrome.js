const prompt = require('prompt-sync')()

const n = Number(prompt(`Enter a number: `))

let orgnlNum = n

let reverseNum = 0
while (orgnlNum > 0) {
    let lastDigit = orgnlNum % 10
    reverseNum = (reverseNum * 10) + lastDigit
    orgnlNum = Math.floor(orgnlNum / 10)
}
console.log((n === reverseNum) ? "Palindorme Number" : "Normal Number")