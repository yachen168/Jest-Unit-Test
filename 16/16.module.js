// 是否皆為英文字
function isAlphabet(inputAlphabets) {
    const alphabet = /^[A-z]{5}$/;
    return alphabet.test(inputAlphabets);
}
// 加密
function toCaesar(inputAlphabets) {
    let resultOfCaesar = '';
    for (let index in inputAlphabets) {
        const codeList = inputAlphabets[index].charCodeAt();
        let caesarCode = String.fromCharCode(codeList + 3);
        if (codeList >= 88 && codeList <= 90 || codeList >= 120) {
            caesarCode = String.fromCharCode(codeList - 26 + 3);
        }
        resultOfCaesar += caesarCode;
    }
    return resultOfCaesar;
}

module.exports = { isAlphabet, toCaesar };