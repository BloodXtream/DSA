const prompt = require('prompt-sync')()
const num = Number(prompt(`Enter a number: `))

// find the sum of all the numbers upto n 
let allSum = 0
function sum(i, n) {
    if (i > n) {
        return
    }
    sum(i + 1, n)
    allSum += i
}
sum(0, num)
console.log(`The sum of all n numbers are: ${allSum}`)

// fint the factorial of n numbers upto n 

let fact = 1
function factorial(i, n) {
    if (i > n) return
    factorial(i + 1, n)
    fact *= i
}
factorial(1, num)
console.log(`The factroal of n numbers are :${fact}`)

