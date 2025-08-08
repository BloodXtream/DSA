const n = Number(prompt(`Enter the Number: `))
let fact = 1
for (let i = 1; i <= n; i++) {
    fact *= i
}
console.log(fact)

let sum = 0
for (let i = 0; i <= n; i++) {
    sum += i
}
console.log(sum)

let evenSum = 0, oddSum = 0

for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) evenSum += i
    else oddSum += i
}

console.log(`Even sum: ${evenSum} , Odd sum: ${oddSum}`);

for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        console.log(`the factors are: ${i}`)
    }

}

let count = 0;
for (let i = 2; i <= 20; i + 3) {
    count++
}
console.log(count)