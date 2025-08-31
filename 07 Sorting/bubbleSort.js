const prompt = require('prompt-sync')()
let swapped
const bubbleSort = (arr) => {
    swapped = false

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapped = true
            }
        }
        if (!swapped) {
            console.log("breakTriggered")
            break
        }
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

console.log(`Sorted arry: [${bubbleSort(arry)}]`)