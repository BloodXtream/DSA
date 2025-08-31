const prompt = require('prompt-sync')()

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minLenth = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minLenth]) {
                minLenth = j
            }
        }
        if (minLenth !== i) {
            [arr[minLenth], arr[i]] = [arr[i], arr[minLenth]]
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

console.log(`Sorted arry: [${selectionSort(arry)}]`)