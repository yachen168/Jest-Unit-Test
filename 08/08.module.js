// 是否為正整數
function isPositiveInteger(inputNumber) {
  const positiveInteger = /^[1-9]\d*$/;
  return positiveInteger.test(inputNumber);
}
// 除以 3
function getResultOfDivided(inputNumber, timesOfDivide = 1) {
  let resultAfterDivided = (+inputNumber / 3).toString();
  const dividedWithRemainder = /\./;
  const zeroInSecondDecimalPlace = /\.[0-9][0]/;
  // 若無法被整除且小數點後第二位不為 0，則繼續除，否則返回結果
  if (
    dividedWithRemainder.test(resultAfterDivided) &&
    !zeroInSecondDecimalPlace.test(resultAfterDivided)
  ) {
    return getResultOfDivided(inputNumber / 3, ++timesOfDivide);
  }
  return { timesOfDivide, resultAfterDivided };
}

module.exports = { isPositiveInteger, getResultOfDivided };
