// 是否為 ≧ 0 的整數
function isPositiveInteger(numberOfBacterial, numberOfTime) {
    const positiveInteger = /^\d+$/;
    return (positiveInteger.test(numberOfBacterial) && positiveInteger.test(numberOfTime));
}

// 計算總細菌
function getNumberOfBacterial(numberOfBacterial, numberOfTime) {
    // (1+x)^20 = 2 => (1+x) = 2 開 20 次方根
    const oneMinuteIncrement = Math.pow(2, 1 / 20);
    if (+numberOfTime > 0) {
        numberOfBacterial = numberOfBacterial * oneMinuteIncrement
        return getNumberOfBacterial(numberOfBacterial, --numberOfTime);
    }
    return `細菌有 ${numberOfBacterial.toFixed(2)} 隻`;
}

module.exports = { isPositiveInteger, getNumberOfBacterial };