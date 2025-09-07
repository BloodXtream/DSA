let num = 154
let orignalNum = num
let strong = 0
while (num > 0) {
    let lstDigit = num % 10
    let fact = 1
    for (let i = 1; i <= lstDigit; i++) {
        fact *= i

    }
    strong += fact
    num = Math.floor(num / 10)

}
if (orignalNum === strong) {
    return "Yes"
} else {
    return "No"
}
