const moveZero = (arr) => {
    const n = arr.length
    let rslt = []

    for (let i = 0; i < n; i++) {
        if (arr[i] != 0) {
            rslt.push(arr[i])
        }
    }

    const r = rslt.length

    for (let i = r; i < n; i++) {
        rslt.push(0)
    }
    return rslt
}

const array = [1, 0, 2, 0, 3, 4, 0, 0, 8]

console.log(moveZero(array))