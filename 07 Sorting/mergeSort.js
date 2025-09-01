const prompt = require('prompt-sync')()
const arryIndex = parseInt(prompt(`Enter a size of an array: `))
let arry = []
for (let i = 0; i < arryIndex; i++) {
    let num = parseInt(prompt(`Enter the element of an array: `))
    arry.push(num)
}

const merge = (left, right) => {
    let rslt = []
    let i = 0, j = 0

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            rslt.push(left[i])
            i++
        } else {
            rslt.push(right[j])
            j++
        }
    }

    return [...rslt, ...left.slice(i), ...right.slice(j)]
}

const mergeSort = (arr, low, high) => {

    if (low === high) {
        return arr[high]
    }

    let mid = Math.floor((low + high) / 2)
    let left = mergeSort(arr, low, mid)
    let right = mergeSort(arr, mid + 1, high)
    return merge(left, right)
}

console.log(`Orignal array: [${arry}]`)
console.log(`Sorted array: [${mergeSort(arry, 0, arry.length - 1)}]`)



// with slice method 

const mergeSlice = (left, right) => {
    let rslt = []
    let i = 0; j = 0
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            rslt.push(left[i])
            i++
        } else {
            rslt.push(right[j])
            j++
        }
    }

    return [...rslt, ...left.slice(i), ...right.slice(j)]
}

const mergeSortSlice = (arr) => {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let leftArray = arr.slice(0, mid)
    let rigthArray = arr.slice(mid)
    let left = mergeSortSlice(leftArray)
    let right = mergeSortSlice(rigthArray)
    return mergeSlice(left, right)
}

console.log(`sorted Array:[ ${mergeSortSlice(arry)}]`)