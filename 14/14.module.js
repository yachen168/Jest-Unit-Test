// 是否為大於 0 的整數
function isPositiveInteger(numberOfBacterial, Time) {
    const positiveInteger = /^[1-9]\d*$/;
    return (positiveInteger.test(numberOfBacterial) && positiveInteger.test(Time));
}

// 計算總細菌
function getNumberOfBacterial(numberOfBacterial, Time) {
    // (1+x)^20 = 2 => (1+x) = 2 開 20 次方根
    const oneMinuteIncrement = Math.pow(2, 1 / 20);
    if (+Time > 0) {
        numberOfBacterial = numberOfBacterial * oneMinuteIncrement
        return getNumberOfBacterial(numberOfBacterial, --Time);
    }
    return `細菌有 ${numberOfBacterial.toFixed(2)} 隻`;
}

module.exports = { isPositiveInteger, getNumberOfBacterial };