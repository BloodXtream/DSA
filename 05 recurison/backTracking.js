const prompt = require('prompt-sync')()
const num = Number(prompt(`Enter a number: `))

// print 1 to 5 by backtracking
const backtrakingRecursion = (i, n) => {
    if (i < 1) return
    backtrakingRecursion(i - 1, n)
    console.log(i)
}
backtrakingRecursion(num, num)

// print 5 to 1 by backtracking
const recursionBack = (i, n) => {
    if (i > n) return
    recursionBack(i + 1, n)
    console.log(i)
}
recursionBack(1, num)