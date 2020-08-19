

// minder dan 8 tekens
const isLessThan8Chars = str => str.length <= 8;

// is niet leeg (null)
const isNotBlank = str => str !== null

// Heeft hoofdletters
const hasUppercase = (str) => /[A-Z]/.test(str);

// heeft kleine letters
const hasLowercase = (str) => /[a-z]/.test(str);

// bevat een nummer
const hasDigit = (str) => /\d/.test(str);

const validscore = conditions => {
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
}

const verifyPassowrd = password => {
    const conditions = [
        isNotBlank(passoword),
        isLessThan8Chars(password),
        hasUppercase(password),
        hasLowercase(password),
        hasDigit(password)
    ];

    const result = minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);
    return result


};




module.exports = {
    isLessThan8Chars,
    isNotBlank,
    hasUppercase,
    hasLowercase,
    hasDigit,
}

