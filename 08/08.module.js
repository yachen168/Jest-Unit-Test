// 是否為正整數
function isPositiveInteger(inputNumber) {
    const positiveInteger = /^[1-9]\d*$/;
    return positiveInteger.test(inputNumber);
}

// 若不能整除則遞迴
function getResultOfDivided(inputNumber) {
    const timesOfDivide = 1;
    if (!Number.isInteger(inputNumber / 3)) {
        return DivideAgain(inputNumber, timesOfDivide);
    }
    return `需除以 ${timesOfDivide} 次，此時為 ${(inputNumber / 3).toFixed(2)}`;
}

// 遞迴
function DivideAgain(inputNumber, timesOfDivide) {
    const resultOfDivide = (inputNumber / 3).toString();
    const isValidFormat = /\.[0-9][0]/;
    if (!isValidFormat.test(resultOfDivide)) {
        return DivideAgain(resultOfDivide, ++timesOfDivide);
    }
    return `需除以 ${timesOfDivide} 次，此時為 ${resultOfDivide}`;
}

module.exports = { isPositiveInteger, getResultOfDivided };