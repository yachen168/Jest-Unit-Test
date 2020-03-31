// 是否皆為英文字
function isAlphabet(inputAlphabets) {
    const alphabet = /^[A-z]{5}$/;
    return alphabet.test(inputAlphabets);
}

// 是否有 XYZxyz
function isXYZ(inputAlphabets) {
    const xyz = /[xyz]/i;
    return xyz.test(inputAlphabets);
}

// 加密
function toCaesar(inputAlphabets) {
    let resultOfCaesar = '';
    const transform = 3;
    for (let index in inputAlphabets) {
        const codeList = inputAlphabets[index].charCodeAt();
        let caesarCode = String.fromCharCode(codeList + transform);
        if (isXYZ(inputAlphabets[index])) {
            caesarCode = String.fromCharCode(codeList + transform - 26);
        }
        resultOfCaesar += caesarCode;
    }
    return resultOfCaesar;
}



module.exports = { isAlphabet, toCaesar };