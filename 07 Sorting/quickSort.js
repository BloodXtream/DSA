const prompt = require('prompt-sync')()
const n = parseInt(prompt("Enter the size of the array: "))

let arr = []
for (let i = 0; i < n; i++) {
    elem = parseInt(prompt(`Enter the elem of the array: `))
    arr.push(elem)
}

console.log(`orignalArray: [${arr}]`)


// const partition = (arr, low, high) => {
//     let pivot = arr[low]
//     let i = low
//     let j = high

//     while (i < j) {
//         // left side
//         while (arr[i] <= pivot && i <= high) {
//             i++
//         }
//         // right side
//         while (arr[j] > pivot && j >= low) {
//             j--
//         }
//         if (i < j) {
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//         }
//     }
//     [arr[low], arr[j]] = [arr[j], arr[low]]
//     return j
// }

// const quickSort = (arr, low, high) => {
//     if (low < high) {
//         let pivotIndex = partition(arr, low, high)
//         // left Side
//         quickSort(arr, low, pivotIndex - 1)
//         // Right Side
//         quickSort(arr, pivotIndex + 1, high)
//     }
//     return arr
// }

const partition = (arr, low, high) => {
    let pivot = arr[low]
    let i = low
    let j = high
    while (i < j) {
        while (arr[i] <= pivot && i <= high) {
            i++
        }
        while (arr[j] > pivot && j >= low) {
            j--
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[low], arr[j]] = [arr[j], arr[low]]
    return j
}

const quickSort = (arr, low, high) => {
    if (low < high) {
        let pivotIndex = partition(arr, low, high)
        quickSort(arr, low, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, high)
        return arr
    }
}

console.log(`Sorted Array: [${quickSort(arr, 0, arr.length - 1)}]`)
