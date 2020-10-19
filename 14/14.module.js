// 是否為大於 0 的整數
function isPositiveInteger(inputNumber) {
  const positiveInteger = /^[1-9]\d*$/;
  return positiveInteger.test(inputNumber);
}
// 計算總細菌
function getNumberOfBacterial(numberOfBacterial, time) {
  // (1+x)^20 = 2 => (1+x) = 2 開 20 次方根
  const oneMinuteIncrement = Math.pow(2, 1 / 20);
  if (+time > 0) {
    numberOfBacterial = numberOfBacterial * oneMinuteIncrement;
    return getNumberOfBacterial(numberOfBacterial, --time);
  }
  return +numberOfBacterial.toFixed(2);
}

module.exports = { isPositiveInteger, getNumberOfBacterial };
