const prompt = require('prompt-sync')()

const n = Number(prompt(`Enter a number: `))

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        console.log(i)
    }
}