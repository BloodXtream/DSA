const prompt = require('prompt-sync')()
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    return arr
}

const arryIndex = parseInt(prompt(`Enter a size of an array: `))
let arry = []
for (let i = 0; i < arryIndex; i++) {
    let num = parseInt(prompt(`Enter the element of an array: `))
    arry.push(num)
}

console.log(`Orignal array: [${arry}]`)

console.log(`Sorted arry: [${insertionSort(arry)}]`)