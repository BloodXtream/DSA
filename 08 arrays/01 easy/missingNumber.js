// brute force

const missing = (arr, n) => {
    for (let i = 1; i <= n; i++) {
        let found = false
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === i) {
                found = true
                break
            }
        }
        if (!found) return i
    }
    return -1
}

const missingOptimal = (arr, n) => {
    let total = (n * (n + 1)) / 2
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return total - sum
}

const arr = [1, 2, 3, 4, 5, 6]
// console.log(missing(arr, 6))
console.log(missingOptimal(arr, 6))