function frequencyCount(arr, query) {
    // Step 1: Create a hash map (object) to store frequency of each number
    // Example: if arr = [1,2,1,3,2]
    // then freq should become {1: 2, 2: 2, 3: 1}
    let freq = {};

    // Loop through the array and count how many times each number appears
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]; // take the current number

        // If this number is not already in freq, start with 1
        if (freq[num] === undefined) {
            freq[num] = 1;
        }
        // If it already exists, increase its count by 1
        else {
            freq[num] = freq[num] + 1;
        }
    }

    // Step 2: Answer queries
    // For each query number, check its frequency in the hash map
    let result = {}; // store the answers (frequency for each query)

    for (let i = 0; i < query.length; i++) {
        let q = query[i]; // take current query number

        // If the query number does not exist in freq, it means 0 times
        if (freq[q] === undefined) {
            result[q] = 0;
        }
        // Otherwise, take its frequency from freq
        else {
            result[q] = freq[q];
        }
    }

    // Return the final result (object containing frequencies of all queries)
    return result;
}

// Example usage
let arr = [1, 2, 1, 3, 2, 10]; // the array where we are counting
let query = [1, 2, 5, 3, 10]; // numbers we want to check frequency for

// Output should be: {1: 2, 2: 2, 5: 0, 3: 1, 10: 0}
// console.log(frequencyCount(arr, query));


const freqAgainCount = (arr, query) => {
    let freq = {}
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (freq[num] === undefined) freq[num] = 1
        else freq[num] = freq[num] + 1
    }

    let result = {}
    for (let i = 0; i < query.length; i++) {
        let q = query[i]
        if (freq[q] === undefined) result[q] = 0
        else result[q] = freq[q]
    }
    return result
}

// console.log(freqAgainCount(arr, query))


const freqcheck = (arr) => {
    let freq = {}
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (freq[num] === undefined) freq[num] = 1
        else freq[num]++
    }
    return freq
}


let arrTwo = [4, 4, 2, 8, 2, 8, 8, 9];
// console.log(freqcheck(arrTwo))


const checkIf = (arr, query) => {
    let freq = {}
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (freq[num] === undefined) freq[num] = 1
        else freq[num]++
    }

    if (freq[query] === undefined) return false
    else return true

}

const arrThree = [10, 20, 30, 40, 50]
const queryTwo = 10
// console.log(checkIf(arrThree, queryTwo))


const mostFreq = (arr) => {
    let freq = {}
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (freq[num] === undefined) freq[num] = 1
        else freq[num]++
    }
    return freq
}

const arrFour = [1, 1, 2, 2, 2, 3, 4, 4, 4, 4]
// console.log(mostFreq(arrFour))

const mostFrq = (arr, query) => {
    const freq = {}
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]
        if (freq[num] === undefined) freq[num] = 1
        else freq[num]++
    }

    const result = {}
    for (let i = 0; i < arr.length; i++) {
        const q = arr[i]
        if (result[q] === undefined) result[q] = 0
        else result[q] = freq[q]
    }
}
console.log(mostFreq(arr, query))