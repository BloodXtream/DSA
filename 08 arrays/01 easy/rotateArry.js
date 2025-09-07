// Left Rotate an array by one place


const rotateArrBrute = (arr) => {
    if (arr.length === 0) return arr
    let first = arr.shift()
    arr.push(first)
    return arr
}

const rotateArrOptimal = (arr) => {
    if (arr.length === 0) return arr
    let first = arr[0]
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = first
    return arr
}

const arr = [1, 2, 3, 4, 5, 6]
// console.log(rotateArrBrute(arr))
console.log(rotateArrOptimal(arr))