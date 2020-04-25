// 是否為正整數
function isPositiveInteger(inputNumber) {
    const positiveInteger = /^[1-9]+$/;
    return positiveInteger.test(inputNumber);
}
// 取得價錢
function getPrice(inputNumber) {
    const eachPeriodPrice = 500;
    const firstPeriodPrice = 500 * 0.79;
    let totalPrice = firstPeriodPrice + (inputNumber - 1) * eachPeriodPrice;
    if (inputNumber >= 5) {
        do {
            inputNumber -= 5;
            totalPrice -= 200;
        } while (inputNumber > 5);
    }
    return totalPrice;
}

module.exports = { isPositiveInteger, getPrice };