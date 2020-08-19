const {
    isLessThan8Chars,
    isNotBlank,
    hasUppercase,
    hasLowercase,
    hasDigit,
} = require("./password")


// minder dan 8 tekens test
test("isLessThan8Chars", () => {
    expect(isLessThan8Chars("123456789")).toBe(false);
});
// Is niet leeg
test("check if password is empty", () => {
    expect (isNotBlank(null)).toBe(false);
});

// bevat hoofdletter
test("has  an uppercase", () => {
    expect(hasUppercase('a')).toBe(false);
})
test("has a uppercase", () => {
    expect(hasUppercase("AB")).toBe(true);
})

// bevat kleine letter
test ("has an lowercasae", () => {
    expect(hasLowercase("a")).toBe(true);
})
test("has a Lowercase", () => {
    expect(hasLowercase("A")).toBe(false);
})

//bevat een nummer
test("has a digit", () => {
    expect(hasDigit("1")).toBe(true);
})
test("has a digit", () => {
    expect(hasDigit("Hallo3")).toBe(true);
})
test("has a digit", () => {
    expect(hasDigit("NUMMER")).toBe(false);
})