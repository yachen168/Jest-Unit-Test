// 是否為正整數
function isPositiveInteger(inputNumber) {
    const positiveInteger = /^\d+$/;
    return positiveInteger.test(inputNumber);
}

function divi(inputNumber, timesOfDivide) {
    timesOfDivide++;
    let resultOfDivide = (inputNumber / 3).toString();
    const isNotDivisible = /\./;
    const isFoundNumber = /\.[0-9][0]/;
    if (isNotDivisible.test(resultOfDivide) && !isFoundNumber.test(resultOfDivide)) {
        return divi(inputNumber / 3, timesOfDivide);
    }
    return `需除以 ${timesOfDivide} 次`;
}

module.exports = { isPositiveInteger, divi };