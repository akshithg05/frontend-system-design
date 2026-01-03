// Palindrome check


const isPalindrome = require('./tdd')


// abc -> false
test("abc -> false", () => {
    const result = isPalindrome("abc")
    expect(result).toBe(false)
})
// aba -> true
test("aba -> true", () => {
    const result = isPalindrome("aba")
    expect(result).toBe(true)
})
// no input -> null
test("no input -> null", () => {
    const result = isPalindrome()
    expect(result).toBe(null)
})
// null -> null
test("null -> null", () => {
    const result = isPalindrome(null)
    expect(result).toBe(null)
})
// single -> always true
test("single -> always true", () => {
    const input = "a"
    const result = isPalindrome(input)
    expect(result).toBe(true)
})
// 123 -> false
test("123 -> false", () => {
    const result = isPalindrome(123)
    expect(result).toBe(false)
})
// 121 -> true
test("121 -> false", () => {
    const result = isPalindrome(121)
    expect(result).toBe(true)
})
// Negative number - 121 -> true
test("Negative number - 121 -> true", () => {
    const result = isPalindrome(-121)
    expect(result).toBe(true)
})
// Boolean , {}, [], ()=> {} -> false
test("Boolean , {}, [], ()=> {} -> false", () => {
    let result = isPalindrome(true)
    expect(result).toBe(false)

    result = isPalindrome({})
    expect(result).toBe(false)

    result = isPalindrome([])
    expect(result).toBe(false)

    result = isPalindrome(()=> {
        console.log('Hi')
    })
    expect(result).toBe(false)
})
// Aba -> true
test("Aba -> true", () => {
    const result = isPalindrome("Aba")
    expect(result).toBe(true)
})
// "            aba     " -> true
test("            aba      -> true", () => {
    const result = isPalindrome("  aba    ")
    expect(result).toBe(true)
})
// length > 10 -> null
test("Length check", () => {
    const result = isPalindrome('abcdefghijklmnopqrstuvwxyz')
    expect(result).toBe(null)
})

// multiple inputs
test('multiple inputs', () => {
    let result = isPalindrome("abc", "aba")
    expect(result).toBe(false)

    result = isPalindrome("aba", "abc")
    expect(result).toBe(true)
})