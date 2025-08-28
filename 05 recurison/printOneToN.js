const prompt = require('prompt-sync')()
const n = Number(prompt(`Enter a number: `))

const recursion = (i, num) => {
    if (i > n) return
    console.log(i)
    recursion(i + 1, num)
}
recursion(1, n)

// printing in backword direction from n to 1

const backRecursion = (i, num) => {
    if (i < num) return
    console.log(i)
    backRecursion(i - 1, num)
}

backRecursion(n, 1)