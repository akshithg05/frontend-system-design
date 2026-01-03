function isPalindrome(x){
    if (!x) return null

    if (typeof x === 'number'){
        x = Math.abs(x)
        x = String(x)
    }

    if (typeof x !== 'string') return false

    if (x.length > 10){
        return null
    }

    if (x.length === 1){
        return true
    }

    x = x.toLocaleLowerCase().trim()
    let i = 0
    let j = x.length-1

    while(i<j){
        if (x[i] !== x[j]){
            return false
        }
        i++
        j--
    }
    return true

}

module.exports = isPalindrome