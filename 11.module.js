// 是否為正整數
function isPositiveInteger(inputNumber) {
    const positiveInteger = /^\d+$/;
    return positiveInteger.test(inputNumber);
}

// 取得價錢
function getPrice(inputNumber) {
    const eachPrice = 500;
    const firstPeriodDiscount = 500 * (1 - 0.79);
    let total = inputNumber * eachPrice - firstPeriodDiscount;
    let isFivePeriodDiscount = (inputNumber - 5) > 0;
    if (isFivePeriodDiscount) {
        do {
            total = total - 200;
            isFivePeriodDiscount -= 1;
        } while (isFivePeriodDiscount === 0);
    }
    return `${inputNumber} 期的價錢為 ${total} 元`;
}

module.exports = { isPositiveInteger, getPrice };