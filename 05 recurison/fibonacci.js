const prompt = require('prompt-sync')()
const num = Number(prompt(`Enter a number: `))

const fibonacci = (n) => {
    if (n === 1) return 1
    if (n === 0) return 0
    const last = fibonacci(n - 1)
    const slast = fibonacci(n - 2)
    return last + slast
}

console.log(fibonacci(num))