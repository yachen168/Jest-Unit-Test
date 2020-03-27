// 是否為正整數
function isPositiveInteger(inputNumber) {
    const positiveInteger = /^[0-9]\d*$/;
    return positiveInteger.test(inputNumber);
}
// 計算細菌
function getNumberOfBacterial(NumberOfBacterial, inputNumber) {
    // (1+x)^20 = 2 => (1+x) = 2 開 20 次根號
    const oneMinuteIncrement = Math.pow(2, 1 / 20);
    if (+inputNumber > 0) {
        NumberOfBacterial = NumberOfBacterial * oneMinuteIncrement
        return getNumberOfBacterial(NumberOfBacterial, --inputNumber);
    }
    return `細菌有 ${NumberOfBacterial.toFixed(3)}b 隻`;
}

module.exports = { isPositiveInteger, getNumberOfBacterial };