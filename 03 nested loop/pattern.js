const PromptSync = require('prompt-sync')

const prompt = require('prompt-sync')()
const num = Number(prompt("Enter a number: "))

for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= i; j++) {
        // process.stdout.write("* ")
    }
    // console.log(" ")
}

for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= i; j++) {
        // process.stdout.write(j + " ")
    }
    // console.log(" ")
}

for (let i = num; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
        // process.stdout.write("* ")
    }
    // console.log(" ")
}

for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i; j++) {
        // process.stdout.write(" ")
    }

    for (let j = 1; j <= i; j++) {
        // process.stdout.write("* ")
    }
    // console.log()

}


for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i; j++) {
        // process.stdout.write("_ ")
    }

    for (let j = 1; j <= i; j++) {
        // process.stdout.write("* ")
    }
    // console.log()

}


for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
        if (i == j || i + j == num + 1) {
            // process.stdout.write("* ")
        } else {
            // process.stdout.write(" ")
        }
    }
    // console.log()
}

for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= (num * 2) - 1; j++) {
        if (i == j || i + j == num + num) {
            process.stdout.write("* ")
        } else {
            process.stdout.write(" ")
        }
    }
    console.log()
}