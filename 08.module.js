// 是否為正整數
function isPositiveInteger(inputNumber) {
    const positiveInteger = /^\d+$/;
    return positiveInteger.test(inputNumber);
}

function divi(inputNumber, timesOfDivide) {
    timesOfDivide++;
    let resultOfDivide = (inputNumber / 3).toString();
    const isFoundNumber = /\.[0-9][0]/;
    if (inputNumber % 3 !== 0 && !isFoundNumber.test(resultOfDivide)) {
        return divi(resultOfDivide, timesOfDivide);
    }
    return `需除以 ${timesOfDivide} 次`;
}

//

module.exports = { isPositiveInteger, divi };