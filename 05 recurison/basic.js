let n = 0
function fn() {
    if (n === 3) return
    console.log(n)
    n++
    fn()
}

fn()