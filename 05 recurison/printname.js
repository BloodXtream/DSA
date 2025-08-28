const prompt = require('prompt-sync')()

const n = Number(prompt(`Enter the number: `))

const nameRecursion = (i, num) => {
    if (i > num) return
    console.log('pragyanamTiwari')
    nameRecursion(i + 1, num)
}

nameRecursion(1, n)