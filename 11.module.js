// 是否為正整數
function isPositiveInteger(inputNumber) {
    const positiveInteger = /^[1-9]+$/;
    return positiveInteger.test(inputNumber);
}

// 取得價錢
function getPrice(inputNumber) {
    const eachPeriodPrice = 500;
    const firstPeriodDicount = 500 * (1 - 0.79);
    let totalPrice = inputNumber * eachPeriodPrice - firstPeriodDicount;
    if (inputNumber >= 5) {
        do {
            inputNumber -= 5;
            totalPrice -= 200;
        } while (inputNumber > 5);
    }

    return `價錢為 ${totalPrice} 元`;
}

module.exports = { isPositiveInteger, getPrice };