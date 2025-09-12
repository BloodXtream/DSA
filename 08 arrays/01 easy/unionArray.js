const unionArry = (arrO, arrT) => {
    let i = 0, j = 0
    let rslt = []

    while (i < arrO.length && j < arrT.length) {
        if (arrO[i] < arrT[j]) {
            if (rslt.length === 0 || rslt.length - 1 !== arrO[i]) {
                rslt.push(arrO[i])
            }
            i++
        } else if (arrT[j] < arrO[i]) {
            if (rslt.length === 0 || rslt.length - 1 !== arrT[j]) {
                rslt.push(arrT[j])
            }
            j++
        } else {
            if (rslt.length === 0 || rslt.length - 1 !== arrO[i]) {
                rslt.push(arrO[i])
            }
            i++, j++
        }
    }

    while (i < arrO.length) {
        if (rslt.length - 1 !== arrO[i]) rslt.push(arrO[i])
        i++
    }
    while (j < arrT.length) {
        if (rslt.length - 1 !== arrT[j]) rslt.push(arrT[j])
        j++
    }
    return rslt
}


const arrOne = [1, 2, 4, 5, 6]
const arrTwo = [2, 3, 5, 7, 8]
console.log(unionArry(arrOne, arrTwo))