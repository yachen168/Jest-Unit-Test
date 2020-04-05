// 是否皆為英文字
function isLetters(inputLetters) {
    const letter = /^[A-z]{5}$/;
    return letter.test(inputLetters);
}
// 是否有 XYZxyz
function isXYZxyz(letter) {
    const XYZxyz = /[xyz]/i;
    return XYZxyz.test(letter);
}
// 加密
function toCaesarCipher(inputLetters) {
    let resultOfCaesarCipher = '';
    const transform = 3;
    for (let letter of inputLetters) {
        const letterOfCaesarCipher = letter.charCodeAt();
        let ASCIICode = String.fromCharCode(letterOfCaesarCipher + transform);
        if (isXYZxyz(letter)) {
            ASCIICode = String.fromCharCode(letterOfCaesarCipher + transform - 26);
        }
        resultOfCaesarCipher += ASCIICode;
    }
    return resultOfCaesarCipher;
}

module.exports = { isLetters, toCaesarCipher };