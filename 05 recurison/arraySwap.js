let arr = [1, 2, 3, 4, 5]

function swap(l, r) {
    if (l >= r) return
    [arr[l], arr[r]] = [arr[r], arr[l]]
    swap(l + 1, r - 1)
}
swap(0, arr.length - 1)
// console.log(arr)

// check wheather the number is palindrome or not fuck yeah

const prompt = require('prompt-sync')()
const str = prompt(`Enter a String: `)

function checkPalindrome(str, l, r) {
    if (l >= r) return console.log(true)
    if (str[l] != str[r]) return console.log(false)
    return checkPalindrome(str, l + 1, r - 1)
}
checkPalindrome(str, 0, str.length - 1)

