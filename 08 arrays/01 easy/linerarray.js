const linearSearch = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        if (n === arr[i]) return i
    }
    return -1
}

const arr = [1, 5, 2, 4, 8, 9]
const n = 4
console.log(linearSearch(arr, n))