const rotateArrayWithKSpace = (arr, d) => {
    n = arr.length
    d = d % n
    let newArr = []
    for (let i = 0; i < n; i++) {
        newArr[i] = arr[(i + d) % n]
    }
    return newArr
}

const array = [1, 2, 3, 4, 5, 6, 7]
const rotate = 3
console.log(rotateArrayWithKSpace(array, rotate))